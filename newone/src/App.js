import './App.css';
import Home from "./components/Home/Home"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login2 from './components/Login/Login2';
import Cart from './components/Cart/Cart'
import Fruiteroute from './components/Products/Fruitroute'
import Vegiroute from './components/Products/Vegiroute'
import Dairyroute from './components/Products/Dairyroute'
import Otherroute from './components/Products/Otherroute'
import Profile from './components/Profile/Profile';
import Logout from './components/Logout/Logout';
import Success from './components/Success/Success';
import { createContext, useReducer, useState} from 'react';
import { initialState, reducer } from './reducer/UseReducer';
export const UserContext = createContext();

const  App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [show, setShow] = useState(true);
	const [cart , setCart] = useState([]);
	const [warning, setWarning] = useState(false);
	const handleClick = (item)=>{
		let isPresent = false;
		cart.forEach((product)=>{
			if (item.id === product.id)
			isPresent = true;
		})
		if (isPresent){
			setWarning(true);
			setTimeout(()=>{
				setWarning(false);
			}, 2000);
			return ;
		}
		setCart([...cart, item]);
	}
	

	const handleChange = (item, d) =>{
		let ind = -1;
		cart.forEach((data, index)=>{
			if (data.id === item.id)
				ind = index;
		});
		const tempArr = cart;
		tempArr[ind].quantity += d;
		
		if (tempArr[ind].quantity === 0)
			tempArr[ind].quantity = 1;
		setCart([...tempArr])
	}
  return (
  
  <UserContext.Provider value={{state, dispatch}}>
   <Router>
      <Routes>
      <Route path="/" element={<Home size={cart.length} setShow={setShow} />} />
        <Route exact path = "/login" Component={Login2}/>
        <Route exact path = "/signup" Component={Login2}/>
        <Route  path = "/products" element={<Fruiteroute  handleClick={handleClick} size={cart.length} setShow={setShow}/>}/>
        <Route  path = "/vegetables" element={<Vegiroute handleClick={handleClick} size={cart.length} setShow={setShow} />}/>
        <Route  path = "/dprod" element={<Dairyroute handleClick={handleClick} size={cart.length} setShow={setShow}/>}/>
        <Route  path = "/grocery" element={<Otherroute handleClick={handleClick} size={cart.length} setShow={setShow}/>}/>
        <Route path='/cart' element={<Cart cart={cart} size={cart.length} setShow={setShow} handleChange={handleChange} setCart={setCart}/>}/>
        <Route exact path = "/profile" Component={Profile}/>
        <Route exact path = "/logout" Component={Logout}/>
        <Route exact path = "/success" Component={Success}/>
      </Routes>
    </Router>
   </UserContext.Provider>
  );
}

export default App;
