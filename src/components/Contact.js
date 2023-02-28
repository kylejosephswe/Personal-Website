//Library imports.
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function Contact() {
    const [state, handleSubmit] = useForm("mlekbaaz");
    if (state.succeeded) {
        return <p className="contact-succeed-message">Thanks for reaching out!</p>;
    }

    return (
        <div className="contact-section">
            <h1 className="contact-header">Contact Me</h1>
            <form onSubmit={handleSubmit} action="https://formspree.io/f/mlekbaaz" method="POST" className="contact-flex">
                <label htmlFor="email">
                </label>
                <input
                    className="email-input"
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Your email"
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
                <label htmlFor="message">
                </label>
                <textarea
                    className="message-textarea"
                    id="message"
                    name="message"
                    type="text"
                    placeholder="Your message"
                />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
                <button className="button-1" type="submit" disabled={state.submitting}>
                    Submit
                </button>
            </form>
        </div>
    );
}
export default Contact