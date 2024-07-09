import { connect } from "react-redux"
import { getBookId } from "../../redux/bookPageReducer"
import Book from "./Book"
import { useEffect } from "react"
import { compose } from "redux"
import { useParams } from "react-router-dom"

const BookContainer = (props) =>{
    const { id } = useParams();
    
    useEffect(() => {
        props.getBookId(); 
    }, [props.getBookId]);
    
    return <Book  id={id }index={props.index}  title={props.title}/>


 }

 const mapStateToProps = (state) => ({
    index : state.books.index,
    title : state.books.title
})

export default compose(connect(mapStateToProps, {getBookId} )) (BookContainer)