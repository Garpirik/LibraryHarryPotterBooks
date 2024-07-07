import { Form, reduxForm ,Field} from "redux-form";
import { getFormData } from "../../redux/activityPageReducer";
import { connect } from 'react-redux';
import { useState } from "react";

const FormActivity = (props) =>{
    const [price,setPrice] = useState();
    return(
        <Form onSubmit={props.handleSubmit}>
            <div> <input value={1} name="price" component="input" placeholder=""  type="text" /></div>
           
            <input  component="input" type="text" name="participants"/>
            <div>
                <button type="submit">Submit</button>
            </div>
        </Form>
    )
}


const GetReduxFormActivity = reduxForm({
    form: 'getactivity',
})(FormActivity)

const FormActivityRedux = (props)=>{
    const onSubmit = (FormData) =>{
        console.log('hi', FormData.price, FormData.participants)
        props.getFormData( FormData.price , FormData.participants);
    }
    return(
        <GetReduxFormActivity onSubmit={onSubmit}/>
    )
}



export default connect('',{getFormData})(FormActivityRedux);
