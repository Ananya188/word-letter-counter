import React,{useState} from "react";
import "./style.css";

export default function App() {
	const[text,setText]=useState(" ");
	const wordCount=text.split(/\s+/).filter(Boolean).length;
	const letterCount=text.length;

	const handleTextChange=(e)=>{
		setText(e.target.value)
	};
	return(
		<>
		<div className="App">
			<h1 id="top">Ananya</h1>
			<h1>Word and Letters Counter</h1>
		</div>
		<div className="container">
			<textarea placeholder="Type your text here...." onChange={handleTextChange}
			value={text} rows={5} cols={50}/>
			<p>Word Count:{wordCount}</p>
			<p>Letter Count:{" "}{letterCount}</p>
			 </div>
		</>
	)
}
