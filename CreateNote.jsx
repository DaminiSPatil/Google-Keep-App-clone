import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const CreateNote = (props) =>{
    const[expand,setExpand]=useState(false);

    const[note,setNote]=useState({
        title:"",
        content: "",
    });
    
    const  InputEvent = (event) =>{
        //const value=event.target.value;
        //const name=event.target.name;

        const {name,value}=event.target;

        setNote((prevData) =>{
            return{
                ...prevData,
                [name]: value,
            };
        });
        console.log(note);

    };
    const addEvent= ()=>{
        props.passNote(note);
        setNote({
            title:"",
            content: "",
        });
    };
    const expandIt= ()=>{
        setExpand(true);
    };
    const btoNormal= ()=>{
        setExpand(false);
    };
return(
    <>
    <div className="main_note" onDoubleClick={btoNormal} >
    
    <form className="form" >
    { expand ? (
        <input 
        type="text"
        name="title"
        value={note.title} 
        onChange={InputEvent}         
        placeholder="Title"
        autoComplete="off" 

        />
        ):null}
        <textarea
         rows="" 
        column="    " 
        name="content"
        value={note.content}
        onChange={InputEvent}         
         placeholder="write a note..."
         onClick={expandIt}
         onDoubleClick={btoNormal} ></textarea>
         { expand ?(
        <Button onClick={addEvent}>
          <AddIcon className="plus-sign" />
        </Button>
         ):null}
    </form>

    </div>    
    </>
);
};
export default CreateNote;