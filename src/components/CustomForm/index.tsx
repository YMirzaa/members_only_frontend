import React from 'react';

import './styles.css';

interface CustomFormProps {
    formName: string;
    className?: string;
    method?: string;
}

export default function CustomForm({
    formName,
    className,
    method
}: CustomFormProps) {
    return (
        <div className='custom-form__container'>
            <h1>{formName}</h1>
            <form className="custom-form" method="post">
                <div className="custom-form__email">
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" id="email" />
                </div>
                
                <div className="custom-form__password">
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" id="password" />
                </div>
                
                <div className="custom-form__submit">
                    <button type="submit">{formName}</button>
                </div>
            </form>  
        </div>
         
    );
}
