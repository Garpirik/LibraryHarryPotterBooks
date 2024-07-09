import  s from"./BookShow.module.css"
import { NavLink } from "react-router-dom";
const BookShow = (props)=>{

    return(
        <div>
          <div>
          <div className={s.titleGridBlock}>
          {props.title.map(el => 
        <NavLink to={"/book/" + el.index}>
        <div key={el.id}>
          <p>  {el.title}  </p>
          <p><img  src={el.cover}/></p>
          </div>
          </NavLink>        
      )}
      </div>
      </div>
      </div>
    )

}
export default BookShow;