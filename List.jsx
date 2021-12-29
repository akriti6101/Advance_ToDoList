import './index.css';

const List=(props)=>{
    
  const title=props.val;
  
 
    return (<>
             
            <div className='div3' >
           
              <h3  className='list_inp'   >{title}
             <i className="fa fa-edit"  style={{color:"white",position :"absolute" ,fontSize:"25px",left:"830px",marginTop:"5px" }}
              aria-hidden="true" onClick={()=>{
                  props.onClick(props);
              }}  onMouseOver={(e)=>{e.target.style.color="yellow"}} 
              onMouseOut={(e)=>{e.target.style.color="white"}} 
              />
              <span className='plus'><i className="fa fa-trash-o"  id={props.id1} style={{position:"absolute" ,left:"860px",
              color:"white",fontSize:"25px",marginTop:"3px" }}
              aria-hidden="true" onClick={()=>{
                props.onClick(props.onSelect(props.id1));
              }} 
              onMouseOver={(e)=>{e.target.style.color="red"}} 
              onMouseOut={(e)=>{e.target.style.color="white"}}
              /></span></h3>
            </div>
          </>
    );
}
export default List;
