import React from 'react'
import firebase from '../utils/firebase'
import Item from './item'

export default function ListAll({data, slide}) {
console.log(data)
    const handleChange =(res)=>{
        const dataDetail = firebase.database().ref("Todo").child(res.id)
        dataDetail.update({
            complete: !res.complete
        })
    }

    const deleteItem =(res)=>{
        const detailDelete = firebase.database().ref("Todo").child(res.id)
        detailDelete.remove()
    }

    const deleteAll =(res)=>{
        for (let dataDel of res){
           const allComplete = firebase.database().ref("Todo").child(dataDel.id)
           allComplete.remove()
        }   
    }

    if (slide === "all") {
       return(
           <>
               {
                 data.map(res => (
                    <Item key={res.id} data={res} handleChange={()=> handleChange(res)} displayBtnDel={false}/>
                 ))  
               }
           </>
       ) 
    } else if(slide === "active"){
        let active = data.filter(res => {return res.complete === false})
        return (
            <>
             {
                active.map(res => (
                    <Item key={res.id} data={res} handleChange={()=> handleChange(res)} displayBtnDel={false}/>
                ))  
             }
            </>            
        )
    } else if(slide === "complete"){
        let complete = data.filter(res => {return res.complete === true})
        return (
            <>
             {
                complete.map(res => (
                    <Item key={res.id} data={res} handleChange={()=> handleChange(res)} deleteItem={deleteItem} displayBtnDel={true}/>
                ))  
             }
             {
                 complete.length !== 0 ? (
                     <li><button className="btn-del-all" onClick={()=> deleteAll(complete)}>delete all</button></li>
                 ) : ""
             }
             
            </>            
        )
    }
}