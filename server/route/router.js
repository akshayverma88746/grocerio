const express = require("express");
const router = express.Router();
const EmployeeModel = require("../model/userSchema");
const bcrypt = require("bcryptjs");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const secret_key = "hkfkhgk649fkfk3949dfkddkrtttef";
const Stripe = require("stripe");

const saltRound = 12;

router.use(cookieParser());

router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  if ((!name, !email, !password)) {
    return res.json({ error: "plz fill fields" });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, saltRound);
    const userExit = await EmployeeModel.findOne({ email: email });
    if (userExit) {
      return res.json({ error: "email already exits" });
    } 
    else {
      const user = new EmployeeModel({
        name,
        email,
        password: hashedPassword,
      });
      const userData = await user.save();

      if (userData) {
        res.status(201).json({ message: "data saved" });
      }
    }
  } catch (error) {
    console.log(error);
  }
});

router.post("/login", async (req, res) => {
  // console.log(req.body);

  const { email, password } = req.body;

  if (!email || !password) {
    res.json({ error: "plz fill fields" });
  }
  const loginData = await EmployeeModel.findOne({ email: email });

  if (loginData) {
    const passwordMatch = await bcrypt.compare(password, loginData.password);

    if (passwordMatch) {
      const payload = {
        user: {
          id: loginData._id,
          email: loginData.email,
        },
      };

      jwt.sign(payload, secret_key, { expiresIn: "1h" }, (err, token) => {
        if (err) {
          console.log(err);
          return res
            .status(500)
            .json({ error: "Error while generating token" });
        }

        res.cookie("userToken", token, { maxAge: 3600000, httpOnly: true });
        loginData.token = token;
        loginData.save();

        return res
          .status(200)
          .json({ token: token, message: "User login successful" });
      });
    } else {
      res.json({ message: "invalid password" });
    }
  } else {
    res.json({ error: "invalid email" });
  }
});

const userAuth = async (req,res, next) => {
  try {
    const tokenValue = req.cookies.userToken;

    if (!tokenValue) {
      console.log("no token provided");
    }

    const verify_token = jwt.verify(tokenValue, secret_key);

    const tokenUserdata = await EmployeeModel.findOne({
      _id: verify_token.user.id,
      token: tokenValue,
    });

    if (!tokenUserdata) {
      console.log(`user not found`);
    }

    req.token = tokenValue;

    req.tokenUserdata = tokenUserdata;

    next();
  } catch (err) {
    res.status(401).json({ err: "authentication failed" });
    console.log(err);
  }
};

router.get("/profile", userAuth, (req, res) => {
  res.send(req.tokenUserdata);
});



router.get("/logout",  (req, res) => {
    res.clearCookie('userToken');
    res.status(200).send(`logout success`)
});

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
router.post("/checkout-payment",async(req,res)=>{
  try{
    const params = {
      submit_type: "pay",
      mode: "payment",
      payment_method_types: ["card"],
      billing_address_collection: "auto",
      shipping_options: [{shipping_rate:"shr_1Nr2EbSEBbXXQcwWgNOH67Mf"}],
      line_items: req.body.map((item)=>{
        return{
          price_data :{
            currency: "inr",
            product_data:{
              name: item.name,
              images: [item.image],
            },
            unit_amount: item.price * 100,
          },
          adjustable_quantity:{
            enabled: true,
            minimum: 1,
            maximum: 10,
          },
          quantity: item.quantity
        }
      }),
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/cancel",
    }
    const session = await stripe.checkout.sessions.create(params)
    res.status(200).json(session.id)
  }
  catch (err) {
    res.status(err.statusCode || 500).json(err.message)
  }
})

module.exports = router;
