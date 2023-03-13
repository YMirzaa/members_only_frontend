import React from "react";

import { CustomForm } from "../../components";

import './styles.css';

export default function SignUp() {
    return (
        <div className="sign-up">
            <CustomForm formName='Sign Up' submitTo="sign-up"/>
        </div>
    );
}