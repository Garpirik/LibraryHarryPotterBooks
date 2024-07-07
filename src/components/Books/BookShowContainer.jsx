import { compose } from "redux";
import { boredAPi } from "../../API/Api";
// import { getActivity } from "../../redux/activityPageReducer";
// import FormActivityRedux from "../FormActivity/FormActivity";
import { connect } from 'react-redux';
import BookShow from "./BookShow";
import { getTitle } from "../../redux/bookPageReducer";
import { useEffect } from "react";

const BookShowContainer = (props) =>{
    useEffect(() => {
        props.getTitle(); // Вызываем экшн для загрузки данных
    }, [props.getTitle]);
    return(
       <BookShow   title={props.title}/>
    )
}



const mapStateToProps = (state) =>({
    title : state.books.title,
}) 

export default compose(connect(mapStateToProps , {getTitle})) (BookShowContainer);
