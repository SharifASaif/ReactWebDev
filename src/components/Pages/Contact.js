import React, { Component } from "react";
import Field from'../Common/Field';
import {withFormik} from 'formik'
import * as Yup from 'yup'

const fields ={
    sections:[
        [
            {name:'name', elementName: 'input', type:'text', placeholder:'Your name'},
            {name:'email', elementName: 'input', type:'text', placeholder:'Your email'},
            {name:'phone', elementName: 'input', type:'text', placeholder:'Your phone'},        
        ],
        [
            {name:'message', elementName: 'textarea', type:'text', placeholder:'Type your message'}
    
        ]

    ]
}


class Contact extends Component {


    render() {
        return (
            <section className="page-section" id="contact">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Contact Us</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                    <form id="contactForm" onSubmit={this.props.handleSubmit} name="sentMessage" novalidate="novalidate">
                        <div className="row align-items-stretch mb-5">
                            {fields.sections.map((section, sectionIndex)=>{
                                return( 
                                    <div className="col-md-6" key={sectionIndex}>
                                        {section.map((field, index)=>{
                                            return <Field 
                                                        {...field} 
                                                        key={index}
                                                        value={this.props.values[field.name]}
                                                        name={field.name}
                                                        onChange={this.props.handleChange}
                                                        onBlur={this.props.handleBlur}
                                                        touched={(this.props.touched[field.name])}
                                                        errors={this.props.errors[field.name]}
                                                    />
                                        })}
                                    </div>
                                )
                            })}
                        </div>
                        <div className="text-center">
                            <div id="success"></div>
                            <button 
                                className="btn btn-primary btn-xl text-uppercase" 
                                id="sendMessageButton" 
                                type="submit"
                                onClick={e=> this.submitForm(e)}
                            >Send Message</button>
                        </div>
                    </form>
                </div>
            </section>
        );
    }
}
export default withFormik({
    mapPropsToValues:() =>({
        name:'',
        email:'',
        phone:'',
        message:''
    }),
    validationSchema: Yup.object().shape({
        name: Yup.string().min(3, 'the name should be more than 3 characters ').required('You must give us your name'),
        email: Yup.string().email('You need to give us a valid email').required('we need your email'),
        phone: Yup.string().min(10, 'Please provide your number').max(15,'Your phone number is to long').required('We need a phone number to reach you at'),   
        message: Yup.string().min(100, 'Please provide more detials').required('We need you message')
    }),
    handleSubmit:(values,{setSubmitting})=>{
        alert('Your Form Has been Submittes', JSON.stringify(values))
        this.setState({name:'',email:'',phone:'', message:''})
    }
})(Contact);
