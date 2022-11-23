import React , {useState} from "react";

export default function TextForm(props) {


const textChange = (event)=>{
    console.log('Text Change function :');
   setText(event.target.value)
}

const toCapital = () =>{
    console.log('To capital ');
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCAse ","success")

}

const toLower = () =>{
    console.log('To Lower ');
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase ","success")

}

const toClear = ()=> {
  console.log('TO clear');
  setText('');
  props.showAlert("Text is cleared ","success")
}

const handleCopy = () =>{
  var text = document.getElementById("myBox");
  text.select();
  navigator.clipboard.writeText(text.value);
  props.showAlert("Text is copied ","success")
}

const handleSpaces = () =>{
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "))
  props.showAlert("Remove extra spaces ","success")
}

    const [text, setText] = useState();

  return (
    <div>
      <div className="container " style={{color : props.mode === 'dark'? 'white' : 'black'}}>
        <div className="mb-3">
          <h1 className="mt-5">{props.heading}</h1>
          
          <textarea className="form-control" value={text} onChange={textChange} style={{backgroundColor : props.mode === 'dark'? 'grey' : 'white', color : props.mode === 'dark'? 'white' : 'black'}} id="myBox" rows="9"></textarea>
        </div>
        <button className="btn btn-primary m-3 " onClick={toCapital}>Upper Case</button>
        <button className="btn btn-success m-3" onClick={toLower}>Lower Case</button>
        <button className="btn btn-warning m-3" onClick={handleCopy} >Copy Text</button>
        <button className="btn btn-dark m-3" onClick={handleSpaces} >Remove Spaces</button>
        <button className="btn btn-danger m-3" onClick={toClear} >Clear Text</button>
        
      </div>
    </div>
  );
}
