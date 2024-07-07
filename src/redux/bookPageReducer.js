import { boredAPi } from "../API/Api";

const SET_TITLE = 'SET-TITLE';

let initialState = {
    title: []
}

const bookPageReducer = (state = initialState, action) => {
    console.log("Action received:", action);
    
    switch (action.type) {
        case SET_TITLE:
            console.log("Updating title:", action.title);
            return {
                ...state,
                title: action.title
            };
        default:
            return state;
    }
};


const setTitle = (title) => ({ type: SET_TITLE, title });

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

export default bookPageReducer;
