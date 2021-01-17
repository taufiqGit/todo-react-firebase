import React from 'react'

export default function SlideBtn({slide, setSlide}) {
    return(
        <div className="slide-btn">
            <button onClick={()=> setSlide("all")} className={slide === "all" ? 'slide-btn-active':''}>All</button>
            <button onClick={()=> setSlide("active")} className={slide === "active" ? 'slide-btn-active':''}>Active</button>
            <button onClick={()=> setSlide("complete")} className={slide === "complete" ? 'slide-btn-active':''}>Completed</button>
        </div>        
    )
}