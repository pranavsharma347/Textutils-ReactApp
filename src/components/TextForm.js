import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = function () {
        console.log("upper case was click", text)

        let newtext = text.toUpperCase()
        setText(newtext)
        props.showAlert("Convert to upper case", "success")
    }

    const handleLoClick = function () {
        console.log("lower case was click", text)

        let newtext = text.toLowerCase()
        setText(newtext)
        props.showAlert("Convert to lower case", "success")

    }

    const handleClearText = function () {
        setText("")
        props.showAlert("text clear ", "success")

    }

    const handleCopyText = function () {
        // Get the text field
        var copyText = document.getElementById("myBox");

        // Select the text field
        copyText.select();
        copyText.setSelectionRange(0, 99999); // For mobile devices

        // Copy the text inside the text field
        navigator.clipboard.writeText(copyText.value);
        props.showAlert("Copied to clickboard", "success")

    }

    const removeExtraSpace = function () {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Remove extra spaces", "success")


    }

    const handleOnChange = function (event) {
        console.log('change')
        setText(event.target.value)

    }

    const [text, setText] = useState("Enter text here");

    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert into Upper case</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert into Lower case</button>
                <button className="btn btn-primary mx-1" onClick={handleClearText}>Clear Text</button>
                <button className="btn btn-primary mx-1" onClick={handleCopyText}>Copy Text</button>
                <button className="btn btn-primary mx-1" onClick={removeExtraSpace}>Remove Extra Space</button>





            </div>

            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>Your text summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something in the text box to preview it here"}</p>
            </div>
        </>
    )
}
