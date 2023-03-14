import React, {useState, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import {BASE_URL} from '../../config';
import { AuthContext } from '../../context';

import './styles.css';

interface CustomFormProps {
    formName: string;
    submitTo?: string;
    className?: string;
}

export default function CustomForm({
    formName,
    submitTo,
    className,
}: CustomFormProps) {
    const {setUserInfo}: any = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const onSubmit = (event : React.FormEvent) => {
        event.preventDefault();
        const data = { username: email, password };
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json',
            },
            withCredentials: true
              
        };
        
      axios.post(`${BASE_URL}/auth/${submitTo}`, data , requestOptions)
        .then(res => {
            if(res.data.user){
                setUserInfo(res.data.user.username);
                //save to local storage
            }
            navigate('/');
        })
        .catch(err => {
          console.log(err);
        //   console.log('gonderilemedi');
        });
    };

    return (
        <div className='custom-form__container'>
            <h1>{formName}</h1>
            <form className="custom-form" onSubmit={onSubmit}>
                <div className="custom-form__email">
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" id="email" value={email} onChange={(e)=> setEmail(e.target.value)} />
                </div>
                
                <div className="custom-form__password">
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" id="password" value={password} onChange={(e)=> setPassword(e.target.value)} />
                </div>
                
                <div className="custom-form__submit">
                    <button type="submit">{formName}</button>
                </div>
            </form>  
        </div>
         
    );
}
