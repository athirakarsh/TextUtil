import React,{useState} from 'react'



export default function TextForm(props) {
    const [text,setText] = useState('')
    const handleUpClick = ()=>{
        console.log("Button Clicked" +text)
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleOnChange = (event)=>{
        console.log("on change")
        setText(event.target.value)
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("converted to lowecase",'success')
    }
    const handleClearClick = ()=>{
      let newText = '';
      setText(newText)
      props.showAlert("Text area is cleare",'success')
    }
    const handleCopy = () => {
      var text = document.getElementById('myBox')
      text.select()
      navigator.clipboard.writeText(text.value)
      props.showAlert("Text is copied",'success')
    }

    const removeExtraSpace = () => {
      let newText = text.split(/[ ]+/)
      setText(newText.join(" "))
      props.showAlert("Extra space is removed",'success')
    }
    
  return (
    <>
    <div className='container' style={{color : props.mode==='dark'? 'white':'black'}}>
        <h1>{props.heading}</h1>

  <div className="mb-3">
    <label htmlFor="myBox" className="form-label" >{props.textArea}</label>
    <textarea className="form-control" id="myBox" style={{backgroundColor : props.mode==='dark'? 'grey':'white',
  color : props.mode==='dark'? 'white':'black'}} onChange = {handleOnChange} value ={text} rows="8" />
  </div>
  <button className = "btn btn-primary mx-2" onClick={handleUpClick}>Convert To Uppercase</button>
  <button className = "btn btn-primary mx-2" onClick={handleLoClick}>Convert To Lowercase</button>
  <button className = "btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
  <button className = "btn btn-primary mx-2" onClick={handleCopy}>Copy</button>
  <button className = "btn btn-primary mx-2" onClick={removeExtraSpace}>Remove Extra Space</button>
  
    </div>
    <div className='container my-2' style={{color : props.mode==='dark'? 'white':'black'}}>
        <h1> Summary</h1>
        <p>Words = {text.split(" ").length} Characters = {text.length}</p>
        <p>Minutes to read : {0.008*text.split(" ").length}</p>
        <h2>Preview</h2>
        <p>{text.length>0 ? text : "Enter something to preview"}</p>
    </div>
    </>
  )
}
