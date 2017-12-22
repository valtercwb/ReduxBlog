import React , { Component } from 'react';

// similar to connect
import { Field , reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostsNew extends Component{

    //Contains an event handler or 2 that makes it responsible
    //to making sure that this field knows it's responsible
    //with the particular field it in
    // <div>
    //         <input
    //          onChange={field.input.onChange}
    //         {...field.input}
    //         />
    //     </div>
    renderField(field){

        const { meta: { touched, error }}= field;
        const className =`form-group ${ touched && error ? 'has-danger':''}`;

        return (
        <div className={ className }>
        <label> { field.label } </label>
            <input className="form-control"
            type="text"
            {...field.input}
            />
            <div className="text-help">
            { touched ? error : ''}
            </div>
        </div>
        );
    }

    onSubmit(values){
        this.props.createPost(values,() => {
            this.props.history.push('/');
        });
    }

     render(){
         const { handleSubmit } = this.props;
        return(
           <form onSubmit= { handleSubmit(this.onSubmit.bind(this)) } >
                <Field
                name="title"
                label="Title"
                component={this.renderField }
                />

                <Field
                name="categories"
                label="Categories"
                component={this.renderField}
                />

                <Field
                name="content"
                label="Post Content"
                component={this.renderField}
                />

                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to= "/" className="btn btn-danger">Cancel</Link> 

                </form>
        );
    };
}

//values -. object that contains all the values typed
function validate(values){
 const errors = {};

 //Validate th inputs from values

    if (!values.title){
        errors.title = "Enter a title!";
    }

    if(!values.categories){
        errors.categories = "Enter some categories";
    }

    if(!values.content){
        errors.content = "Enter some content";
    }
 //if errors is empty the for is fine to submit
 //if errors has any properties, 
 //redux form assumes form is invalid 
 return errors;
}



//form key must be unique it's 
//like a namespace for the information passed on the form 
export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(
    connect (null, { createPost })(PostsNew)
);
