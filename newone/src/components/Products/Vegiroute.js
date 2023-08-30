import Vegetable from './Vegetable';
import Category from './Category';
import Navbar from '../Navbar/Navbar';
import "./prod.css"

function App({handleClick,size,setShow}) {
  return (
    <>
   
   <div className='fullbody' style={{
    backgroundImage: `url("images/product.png")`,
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover'
   }}>
    <Navbar size={size} setShow={setShow}/>
    <Category/>
    <Vegetable handleClick={handleClick} size={size} setShow={setShow} />
   
    </div>
   
    </>
  );
}

export default App;
