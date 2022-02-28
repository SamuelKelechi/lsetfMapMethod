import React,{useState} from "react";
import './App.css';
import Logo from "./Image/logo.svg"
import Babe from "./Image/img.png"


function App (){
// A State Capturing Inputs 
  const [text, setText] = useState("");

//A state holding our datas
  const [lsetf, setLsetf] = useState([]);

// Function for Posting
  const Post = () => {
    const items = {
      id : lsetf.length + 1,
      name: text,
    };
    setLsetf([...lsetf, items]);
  // Responsible for Removing items in our input
    setText("");
  }

  console.log(lsetf)
  console.log(text)

  return(
    <div className="CardHolder">
      <br />
{/* OUR INPUT */}
      <input value={text} onChange={(e)=>{setText(e.target.value)
         console.log(text)
      }} placeholder="Input Name"/>
      <br />

{/* BUTTON FOR CALLING OUR POST FUNCTION */}
      <button onClick={()=>{
        Post()
        console.log('Have Posted')
      }}>Post</button>

{/* This is where our Datas are being Mapped */}
      {lsetf.map((props)=>(
        <div className="Card">
          <div>{props.id}.</div>
          <div>Name:{props.name}</div>
          {/* <div>Age:{props.age}</div>
          <div>Sex:{props.sex}</div> */}
        </div>
      ))}
    </div>
  )
}

export default App









     {/* <div className="Header">
        <div className="HeaderWrapper">
          <div><img src={Logo} className="Logo" / ></div>
          <div className="Nav">
            
            <p>Products</p>
            <p>Plaform</p>
            <p>Company</p>
            <p>Resources</p>
            <p>Customers</p>
            <p>Support</p>

          </div>
        </div>
      </div>


      <div className="HeroHolder">
        <div className="HeroWrapper">
          <div className="Left">
         <h1 className="Heads">Delight made <br/>easy </h1>
         
          <p className="PMan">We make it fast and easy for your business to
            delight customers and employees
          </p>
          <div className="but">
          <button className='but1'>Free Trials</button>
          <button className='but2'>Contact Sales</button>
          </div>

          </div>
          <div>
            <img src={Babe} className="Baby"/>
          </div>
        </div>
      </div> */}






  // <div className="Main_Container">
    //   <div className="Holder">
    //     <button onClick={Minus}>-</button>
    //     <h2>{add}</h2>
    //     <button onClick={Plus}>+</button>
    //   </div>
    // </div>




  //   const [add, setAdd]= useState(0)

//   function Plus(){
//     setAdd(add +1)
//   }

//   const Minus = () => {
//     setAdd(add -1)
//   }
