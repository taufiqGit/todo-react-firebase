import React, {useState, useEffect} from 'react';
import './App.scss';
import firebase from './utils/firebase'
import ListAll from './components/listAll';
import TextInput from './components/formInput';
import SlideBtn from './components/SlideBtn';

export default function Todo() {
   const [data, setData] = useState()
   const [slide, setSlide] = useState("all")

   useEffect(()=>{
    const getdata = firebase.database().ref("Todo")
    getdata.on("value", (snapshot)=>{
    const resData = snapshot.val()
    const ListData = []
    for (let id in resData) {
        ListData.push({id, ...resData[id]})
        } 
    ListData.reverse()  
    setData(ListData)
    })
   }, [])


    return(
        <main className="App">
            <div className="todo">
                <h1>#todo</h1>
                <SlideBtn slide={slide} setSlide={setSlide}/>
                <TextInput/>
                {
                    data === undefined ? (<p>loading...</p>) : (
                        <div className="list-items">
                            <ul>
                               <ListAll data={data} slide={slide}/>
                            </ul>
                        </div>
                    )
                }
            </div>
        </main>
    )
}