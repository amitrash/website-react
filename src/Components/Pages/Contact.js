import React, {Component} from 'react';
import Field from '../Common/Field';
import {withFormik} from 'formik';
import * as Yup from 'yup';

const fields =  {
    sections: [
        [
            {name: 'name', elementName: 'input', type: 'text', placeholder:"Your name*"},
            {name: 'email', elementName: 'input', type: 'email', placeholder:"Your email*"},
            {name: 'phone', elementName: 'input', type: 'text', placeholder:"Your phone*"},
        ],
        [
            {name: 'message', elementName: 'textarea', type: 'text', placeholder:"Type your message"},
        ]
    ]
}


class Contact extends Component{
    /*constructor(props){
        super(props);

        this.state = {
            name: "",
            email: "",
            phone: "",
            message: ""
        }
    }
    
    submitForm = (event) =>{
        alert("Form submitted!")
    }*/
////in form ----> id="contactForm"
    render(){
        return(
            <section className="page-section" id="contact">
                <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                    <h2 className="section-heading text-uppercase">Contact Us</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                    <form onSubmit={this.props.handleSubmit} name="sentMessage" noValidate="novalidate">
                        <div className="row">
                            {fields.sections.map((section, sectionIndex)=>{
                                console.log("Section", sectionIndex, "with", section)
                                return(
                                    <div className="col-md-6" key={sectionIndex}>
                                        {section.map((field, i)=>{
                                            return <Field
                                                        {...field}
                                                        key={i}
                                                        value={this.props.values[field.name]}
                                                        name={field.name}
                                                        onChange={this.props.handleChange}
                                                        onBlur= {this.props.handleBlur}
                                                        touched = {(this.props.touched[field.name])}
                                                        errors = {(this.props.errors[field.name])}
                                                    />
                                        })}
                                    </div>
                                )
                            })}
                        <div className="clearfix"></div>
                        <div className="col-lg-12 text-center">
                            <div id="success"></div>
                            <button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase" type="submit">Send Message</button>
                        </div>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
            </section>
        );
    }
}

const phoneRegExp =/^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;
const nameRegExp =/^[aA-zZ\s]+$/;
export default withFormik({
    mapPropsToValues: () => ({
        name: '',
        email: '',
        phone: '',
        message: '',
    }),
    validationSchema: Yup.object().shape({
        name:  Yup.string().matches(nameRegExp, "Only alphabets are allowed for this field ")
        .min(3, 'Come on bro, your name is longer then that.').required('You must give us your name.'),
        email: Yup.string().email('You need to give a valid email.').required('We need your email.'),
        phone: Yup.string().matches(phoneRegExp, 'Please provide valid phone number.').required('Phone is required.'),
        message: Yup.string().min(200, 'You need to provide us more detailed information.(Minimum 200 letters)').required('Message is required.'),
    }),
   /* validate: values => {
        const errors ={};
        
        Object.keys(values).map(v => {
            if(!values[v]){
                errors[v] = "Requierd";
            }
        })

        return errors;
    },*/
    handleSubmit: (values, {setSubmitting}) => {
        alert("You've submitted the form", JSON.stringify(values));
    }
})(Contact);