import { MdDeleteForever } from "react-icons/md";

import './index.css'

const Todoitem=(props)=>{
    const {details,deleteItem}=props 
const {id,text}=details

 
    return(
        <div className='item'>
       

          <div className='text'> <p >{text}</p></div> 
<button className=" delete" onClick={()=>deleteItem(id)}><MdDeleteForever/></button>

        </div>
    )
}

export default Todoitem