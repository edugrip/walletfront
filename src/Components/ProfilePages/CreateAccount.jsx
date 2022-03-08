import React from "react";
import { useState } from "react";
import "./styles.css";
import { Button } from "react-bootstrap";
export const CreateAccount = () => {

    const [count, setCount] = useState([" Main Account"]);

    return (
        <div className="Main-Password-Container">


            {count.map((item) => {
                return <h6> {item}</h6>;
            })}

            <Button
                class="primary"
                onClick={() => setCount([...count, `Account  ${count.length}`])}
                className="Accountbutton"
            >
                Create New Account
            </Button>

        </div>



    );
}

export default CreateAccount;
