import {useReducer,useState} from "react";
import HobbiesReducer from "./HobbiesReducer";
const Hobbies = () => {
    const [hobbies,setHobbies]=useState("")
    const initialState = ["initial hobby 1","Initial Hobby 2"];
     const [state,dispatch] = useReducer(HobbiesReducer,initialState);
     const addHobby = () =>{
         dispatch({type: "add",value:hobbies});
         
     }
     const deleteHobby=(indexToDelete)=>{
        dispatch({type: "delete",index:indexToDelete});
     }
     const clearHobbies=()=>{
        dispatch({type: "clear"});
     }
     console.log(state)
     return (
         <div className="card-container">
             <h1>Hobbies</h1>
             <div className="box">
             <input type="text"  name="hobby" placeholder="Enter Hobby" className="todo-user-input" onInput={(event)=>{setHobbies(event.target.value)}}/>
             <div className="card">
             <button onClick={addHobby}>Add</button>
             <button onClick={()=>{clearHobbies()}}>Clear All</button>
             </div>
             </div>
             <h1>My Hobbies</h1>
             {state.map((val,index)=>{
             return (
              <div>   
             <div className="card">
            
             <div>{val}</div>
             <button className="delete" onClick={()=>{deleteHobby(index)}}>Delete</button>
             </div>
             </div>
             )
        })}
         </div>
         
        
         
     );
 }
 export default Hobbies;