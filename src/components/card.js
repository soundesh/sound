import React from 'react'



function Card(props) {
    const dragStart = e =>{
    const target = e.target;

    e.dataTransfer.setData('card_id',target.id)
    setTimeout(() =>{
        target.style.display="none"
    },0)
    }

    const dragover = e =>{
        e.stopProgation()
    }
  return (
    <div id={props.id}
    className={props.className}
    draggable={props.draggable}
    onDragStart={dragStart}
    onDragOver={dragover}
    >
        {props.childern}
    </div>
  )
}

export default Card