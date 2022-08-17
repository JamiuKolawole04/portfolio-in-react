import { useState } from "react";

export const Form = () => {
    const [enteredName, setEnteredName] = useState("");
    const [enteredEmail, setEnteredEmail] = useState("");
    const [enteredMessage, setEnteredMessage] = useState("");

    const submitHandler = e => {
        e.preventDefault();
    }


    return (
        <form onSubmit={submitHandler}>
            <div className="form__input">
                <input
                    type="text"
                    placeholder="Your Name"
                    value={enteredName}
                    onChange={e => setEnteredName(e.target.value)}

                />
            </div>

            <div className="form__input">
                <input
                    type="email"
                    placeholder="Your Email"
                    value={enteredEmail}
                    onChange={e => setEnteredEmail(e.target.value)}
                />
            </div>

            <div className="form__input">
                <textarea
                    placeholder="Write Message" value={enteredMessage} onChange={e => setEnteredMessage(e.target.value)}></textarea>
            </div>

            <button className="submit__btn" type="submit">Submit</button>
        </form>
    );
}