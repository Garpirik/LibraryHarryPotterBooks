import { useState } from "react";
import  s from"./BookShow.module.css"
// import FormActivityRedux from "../FormActivity/FormActivity";
const BookShow = (props)=>{
    console.log("Title:" ,  props.title[0])
    props.title.forEach(el=>{
      console.log(el.number)
    })
    return(
        <div>
          <h1> Title </h1>
          <div>
          <div className={s.titleGridBlock}>
          {props.title.map(el => 
        <div key={el.id}>
          <p>  {el.title}  </p>
          <p><img  src={el.cover}/></p>
          </div>
        
      )}
      </div>
      </div>
      </div>
    )

}
export default BookShow;