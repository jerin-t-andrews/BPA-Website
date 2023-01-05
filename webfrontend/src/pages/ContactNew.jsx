import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

// npm i @emailjs/browser

const Contact_new = () => {
    const form = useRef();

    const sendEmail = (e) => {
        document.getElementById('user_name').value = '';
        document.getElementById('user_email').value = '';
        document.getElementById('message').value = '';
        e.preventDefault();

        emailjs
        .sendForm(
            "service_pdw0b4s",
            "template_ckbzt65",
            form.current,
            "Wt0_l4ApjI5NnMek3"
        )
        .then(
            (result) => {
            console.log(result.text);
            console.log("message sent");
            },
            (error) => {
            console.log(error.text);
            }
        );
    };

    return (
        <StyledContactForm>
        <form ref={form} onSubmit={sendEmail} >
            <label>Name</label>
            <input type="text" name="user_name" id="user_name"/>
            <label>Email</label>
            <input type="email" name="user_email" id="user_email"/>
            <label>Message</label>
            <textarea name="message" id="message"/>
            <input type="submit" value="Send"/>
        </form>
        </StyledContactForm>
    );
};

export default Contact_new;

//Clears the input fields when the 'send' button is pressed
// function reset_values() {
//     document.getElementById('user_name').value = '';
//     document.getElementById('user_email').value = '';
//     document.getElementById('message').value = '';
// }

// Styles
const StyledContactForm = styled.div`
    width: 400px;
    form {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        width: 100%;
        font-size: 16px;
        input {
        width: 100%;
        height: 35px;
        padding: 7px;
        outline: none;
        border-radius: 5px;
        border: 1px solid rgb(220, 220, 220);
        &:focus {
            border: 2px solid rgba(0, 206, 158, 1);
        }
        }
        textarea {
        max-width: 100%;
        min-width: 100%;
        width: 100%;
        max-height: 100px;
        min-height: 100px;
        padding: 7px;
        outline: none;
        border-radius: 5px;
        border: 1px solid rgb(220, 220, 220);
        &:focus {
            border: 2px solid rgba(0, 206, 158, 1);
        }
        }
        label {
        margin-top: 1rem;
        }
        input[type="submit"] {
        margin-top: 2rem;
        cursor: pointer;
        background: rgb(249, 105, 14);
        color: white;
        border: none;
        }
    }
`;