import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../styles/SendEmail.css";
import { NavBar } from "./NavBar";

export const SendEmail = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_wlc3w1b", "template_21ccyz3", form.current, "d4PEAo9SHTdR60JEl")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div>
      <NavBar />
      <div>
        <h3 className="centerh1">Send Email</h3>
      </div>

       <form ref={form} onSubmit={sendEmail}>
     <div>
     <label>From</label>
      <input type="text" name="user_name" />
     </div>
      
     <div>
     <label>To</label>
      <input type="text" name="to_name" />
     </div>

    <div>
     <label>Email</label>
      <input type="email" name="user_email" />
     </div>

    <div>
     <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
     </div>
     
     
    </form> 

      <div className="center">
        <Form ref={form} onSubmit={sendEmail}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>From</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" name="user_name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>To</Form.Label>
            <Form.Control type="text" placeholder="Enter Receiver name"  name="to_name"/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Receiver email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="user_email"  />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Content</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              type="text"
              name="message"
              placeholder="Enter body"
            />
          </Form.Group>

          <Button className="centerbtn" variant="primary" type="submit">
            Send
          </Button>
        </Form>
      </div>
    </div>
  );
};
