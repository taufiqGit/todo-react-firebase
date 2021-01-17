import React, {useState} from 'react'
import firebase from '../utils/firebase'

export default function TextInput(params) {
    const [text, setText] = useState("")
    
    const handleChange = ev =>{
        setText(ev.target.value)
    }

    const postData =()=>{
        if (text !== "") {
            const dataRef = firebase.database().ref("Todo")
            const dataPost = {
                title: text,
                complete: false
            }
            dataRef.push(dataPost)
            setText("")
        }
    }
    console.log(text)
    return(
        <div className="input-item">
            <input type="text" value={text} onChange={(e)=> handleChange(e)} placeholder="add details"/>
            <button onClick={postData}>Add</button>
        </div>
    )
}