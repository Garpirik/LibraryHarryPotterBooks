import { NavLink } from "react-router-dom";
import s from "../layout/Header.module.css"
const Header = () =>{
    return(
        <nav className={s.header}>
        <div className={s.item}><NavLink to="/books">Books</NavLink></div>
        </nav>
    )
}

export default Header;