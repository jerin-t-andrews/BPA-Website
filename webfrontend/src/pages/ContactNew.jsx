import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components-new";

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
            <div className="contactForm">
                {/* <p>test</p>
                <p>test</p>
                <p>test</p>
                <p>test</p>
                <p>test</p>
                <p>test</p>
                <p>test</p>
                <p>test</p>
                <p>test</p>
                <p>test</p>
                <p>test</p>
                <p>test</p> */}
                {/* <img src="../car-list-images/luxury.jpg" alt='test'></img> */}
                
                <table className="contactTable">
                    <tr>
                        <th>
                            <h1>Get In Touch</h1>
                            <hr/>
                            <form ref={form} onSubmit={sendEmail} >
                                <br/>
                                <input type="text" name="user_name" id="user_name" placeholder="Name"/>
                                <br/>
                                <input type="email" name="user_email" id="user_email" placeholder="Email"/>
                                <br/>
                                <textarea name="message" id="message" placeholder="Type your message here"/>
                                <input type="submit" value="Send" className="btn sendContact"/>
                            </form>
                        </th>
                        <th>
                            <p style={{'font-size': 'larger'}}>BPA INFO</p>
                            <br/>
                            <p>02-1144</p>
                            <p>Robert Tezock, Noble Mathew, Ethan Siao, Jerin Andrews</p>
                            <p>Car Lot Website</p>
                            <p>Sunnyvalie High School</p>
                            <p>Sunnyvale</p>
                            <p>Texas </p>
                            <p>2023 </p>



                        </th>
                    </tr>
                    <tr>
                        <th>
                            <h1>Hours of Operation:</h1>
                            
                            <p><strong>Sunday: </strong>Closed</p>
                            <p><strong>Monday: </strong>9AM-5PM</p>
                            <p><strong>Tuesday: </strong>9AM-5PM</p>
                            <p><strong>Wednesday: </strong>9AM-5PM</p>
                            <p><strong>Thursday: </strong>9AM-5PM</p>
                            <p><strong>Friday: </strong>9AM-5PM</p>
                            <p><strong>Saturday: </strong>Closed</p>
                        
                        </th>
                        <th>
                        <h1>Links to Representatives:</h1>
                            
                            <p><strong>Email: </strong>caravelleauto@gmail.com</p>
                            <p><strong>Telephone: </strong>(972) 277-1889</p>
                        </th>
                    </tr>
                </table>
                
            </div>
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
    width: 100vw;
    form {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        width: 30vw;
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
        color: white;
        border: none;
        }

    }
`;