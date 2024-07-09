const Book = (props) =>{
    const book = props.title[props.id]
    return (
        <div>
            <h1>{book.title}</h1>
            <p>{book.description}</p>
            <p><img src={book.cover}  /></p>
        </div>
    );
}


export default Book;