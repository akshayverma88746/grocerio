import Products from './Products';
import Category from './Category';
import "./prod.css"
import Navbar from '../Navbar/Navbar';

function App({handleClick,size,setShow}) {
  return (
    <div className='any'>
   
   <div className='fullbody' style={{
    backgroundImage: `url("images/product.png")`,
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
   }}>
    <Navbar size={size} setShow={setShow}/>
    <Category/>
    <Products handleClick={handleClick} size={size} setShow={setShow}/>
   
    </div>
   
    </div>
  );
}

export default App;
