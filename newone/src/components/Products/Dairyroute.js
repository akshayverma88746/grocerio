import Dairy from './Dairy';
import Category from './Category';
import Navbar from '../Navbar/Navbar';


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
    <Dairy  handleClick={handleClick} size={size} setShow={setShow}/>
   
    </div>
   
    </>
  );
}

export default App;
