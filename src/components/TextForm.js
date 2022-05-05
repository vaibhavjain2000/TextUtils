import React ,{useState} from 'react'
export default function TextForm(props) {
    const HandleUpClick = () =>{
        // console.log("UpperCase was Clicked" + text);
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted to Upper Case","success");
    }
    const HandleOnChange = (event) =>{
        // console.log("On Change");
        setText(event.target.value);
    }
    const HandleLowClick = () =>{
        // console.log("UpperCase was Clicked" + text);
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert("Converted to Lower Case","success");

    }
    const HandleClear = () =>{
        let newtext = "";
        setText(newtext);
        props.showAlert("Cleared Text","success");
        
    }
    const HandleCopy = () =>{
        var text = document.getElementById('mybox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard","success");
    }
    const [text, setText] = useState('');

  return (
      <>
        <div className='container' style = {{color : props.mode === 'dark' ? 'white' : '#032a3d'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3" >
            <textarea className="form-control" value = {text} onChange = {HandleOnChange} style = {{backgroundColor : props.mode === 'dark' ? '#093560' : 'white',color : props.mode === 'dark' ? 'white' : '#032a3d'}} id="mybox" rows="12"></textarea>
            </div>
            <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick= {HandleUpClick} ><b>Convert to UpperCase</b></button>
            <button disabled = {text.length === 0} className="btn btn-primary mx-3 my-1" onClick= {HandleLowClick} ><b>Convert to LowerrCase</b></button>
            <button disabled = {text.length === 0} className="btn btn-primary mx-2 my-1" onClick= {HandleClear} ><b>Clear Text</b></button>
            <button disabled = {text.length === 0} className="btn btn-primary mx-2 my-1" onClick= {HandleCopy} ><b>Copy Text</b></button>




       </div>
       <div className="container my-3" style = {{color : props.mode === 'dark' ? 'white' : '#032a3d'}} >
           <h2>Text Summary</h2>
           <p>{text.split(" ").filter((element)=>{return element.length !== 0}).length} words and {text.length} characters</p>
           <p>{0.008 * text.split(" ").filter((element)=>{return element.length !== 0}).length} Minutes to Read</p>
           <h2>Preview</h2>
           <p>{text.length > 0 ? text : 'Enter Something to Prievew your Text'}</p>
       </div>
    </>
  )
}


