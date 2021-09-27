import React, {useState} from "react";

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleClearClick = ()=>{
        let newText = '';
        setText(newText)
    }
    const handleOnChange = (event)=>{
       setText(event.target.value)
    }
    const handleCopy = ()=>{
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);

    }
    const handleExtraSpaces =()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }
    
    const [text, setText] = useState('');
    return (
        <>
        <div className = "container">
            <h3>{props.heading}</h3>
            <div className="mb-3">  
                <textarea className="form-control" value = {text} onChange = {handleOnChange} id="myBox" rows="8" ></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick = {handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-secondary mx-1" onClick = {handleLoClick}>Convert to LowerCase</button>
            <button className="btn btn-danger mx-1" onClick = {handleClearClick}>Clear Content </button>
            <button className="btn btn-success mx-1" onClick = {handleCopy}>Copy Content </button>
            <button className="btn btn-success mx-1" onClick = {handleExtraSpaces}> Remove ExtraSpaces  </button>


            
        </div>
        <div className = "container my-4">
            <h3>Text Summary</h3>
            <p>{text.split(" ").length} words and {text.length} Character </p>
            <p>{0.008 *text.split(" ").length }Minute read</p>
            <h3> Preview </h3>
            <p>{text}</p>
            
            
        </div>
        </>
    );
}
