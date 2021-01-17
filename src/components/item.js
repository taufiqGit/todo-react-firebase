import React from 'react'

export default function Item({data, handleChange, deleteItem, displayBtnDel}) {

    return(
        <li>
            <label>
                <input type="checkbox" checked={data.complete} onChange={handleChange}/>
                <span className="checkmark"></span>
                <p className={data.complete ? "text-checked" : ""}>{data.title}</p>
            </label>
            <button className={displayBtnDel ? 'button-del' : 'button-del-none'} onClick={()=> deleteItem(data)}>
                X
            </button>
        </li> 
    )
}