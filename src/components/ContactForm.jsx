import React from 'react';
import Form from 'react-bootstrap/Form';
import '../App.css';
import images from '../images/Service 24_7-pana 1.svg';
import './ContactForm.css' ;
import Button from 'react-bootstrap/Button';
import { ImTwitch } from "react-icons/im";
import { ImMobile } from "react-icons/im";
import { IoMail } from "react-icons/io5";
import ButtonNew from './ButtonNew';
import './Button.css';
function ContactForm() {
  return (
    <div className='container'  id='main'>
        < div className='full_form'>
          <div className='call'>
             <ButtonNew text= "VIA SUPPORT CHAT" icon = {<ImTwitch />}/>
             <ButtonNew text="VIA CALL" icon = {<ImMobile />}/>
          </div>
           {/* <ButtonNew variant="outline-secondary">Secondary</ButtonNew> */}
           <ButtonNew className="btm_btn" text ="VIA EMAIL" icon ={<IoMail/>}></ButtonNew>
        <div className='form'>
        <Form>
        <Form.Control type="text" placeholder="Normal text" />
        <br />   
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
        <   Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows={10} />
        </Form.Group>
        <button className='sub_btn' type='Submit'>Submit</button>
        </Form>
        </div>
        </div>

        <div className='contact_image'>
           <img src= {images}/>
        </div>
    </div>
  )
}

export default ContactForm