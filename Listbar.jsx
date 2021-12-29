import { useState } from 'react';
import './index.css';
import List from './List';

const Listbar=()=>{
    const[title,setTitle]=useState("CHECKLIST");
    const[AddItem,setItemList]=useState([]);
   const [Item,setItem]=useState("");
   const [Add,setAdd]=useState(true);
   const [id,setId]=useState(null);

   function set(e)
   {
         setItem(e.target.value);
   }
    const add=(e)=>{
        if(id==null){
        const i={
            id : new Date().getTime().toString(),
            name : Item,
        };
       
        setItemList((oldItem)=>{return [...oldItem,i];}
         
        )}
        else
        {
             AddItem.map((val)=>{
                   if(val.id===id)
                      val.name=Item;
                   return val.name;  
             })
             setId(null);
             setAdd(true);
        }
        setItem("");
       
   }
   const delItem=(id)=>
   { 
         setItemList((oldItem)=>
         {
               return oldItem.filter((val)=>{
                   return val.id!==id;
               })
         })
        
   }
   const delAll=()=>{
       setItemList([]);
       setAdd(true);
       
   }
   const hover=(e)=>{
       setTitle("REMOVE ALL");
       e.target.style.backgroundColor="rgb(62, 62, 221)"; 
   }
   const hoverAgain=(e)=>{
    setTitle("CHECKLIST");
    e.target.style.backgroundColor="white"; 
}
function edit( props ){
  
  setId (props.id1);
     setItem(props.val);
     setAdd(false);
}
    return (<>
             
            <div className='div2'>
            <input placeholder=" ✍️ Add Item..."  className='input1' value={Item} onChange={set}  />
                 {Add ? <span className='plus'><i className="fa fa-plus" aria-hidden="true" onClick={add} /></span>: 
                 <i className="fa fa-edit"  style={{color:"green",position :"absolute" ,fontSize:"25px",left:"830px",marginTop:"5px" }}
              aria-hidden="true"   onClick={add}
              /> }
            </div>
               {AddItem.map((value)=>{
                   return <List val={value.name}   id1={value.id} key={value.id} onSelect={delItem} onClick={edit}/>
               })
                    
               }
               <button onClick={delAll} onMouseOver={hover} onMouseOut={hoverAgain}>{title}</button>
          </>
    );
}
export default Listbar;