import { boredAPi } from "../API/Api";

const SET_TITLE = 'SET-TITLE';
const SET_BOOK = 'SET-BOOK'
let initialState = {
    title: [],
    index : []
}

const bookPageReducer = (state = initialState, action) => {
    console.log("Action received:", action);
    
    switch (action.type) {
        case SET_TITLE: {
            console.log("Updating title:", action.title);
            return {
                ...state,
                title: action.title
            }}

        case SET_BOOK : {
            console.log("Updating id:", action.index);    
        return{
                ...state, 
                index: action.index
            }}
        default:
            return state;
    }
};


const setTitle = (title) => ({ type: SET_TITLE, title });
const setBookId = (index) => ({type: SET_BOOK, index})
export const getTitle = () => async (dispatch) => {
    try {
        const response = await boredAPi.book()
        console.log("Book:", response);
        dispatch(setTitle(response));
        console.log("response:", response);
    } catch(error) {
        console.log("error", error);
    }
}


export const getBookId = () => async (dispatch) => {
    let indexArray = [];
    for (let i = 0; i < 8; i++) {
        try {
            const response = await boredAPi.getBook(i);
            console.log("Index", response.index);
            indexArray.push(response.index);
        } catch (error) {
            console.log("error", error);
        }
    }
    dispatch(setBookId(indexArray));
}

export default bookPageReducer;
