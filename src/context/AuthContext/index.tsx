import React, {createContext, useState, useEffect} from "react";
import axios from 'axios';
import {BASE_URL} from '../../config';

export const AuthContext = createContext({});

export default function AuthProvider({children}: any) {
    const [userInfo, setUserInfo] = useState<{username: string} | null>(null);
    function logout (){
        setUserInfo(null);
    }
    
    function isLogged(){
        
        axios.get(`${BASE_URL}/`, {withCredentials: true})
        .then(res => {
            console.log(res.data);
            // console.log('res data', res.data);
            if(res.data.user){
                setUserInfo(res.data.user.username);
            }
        })
        .catch(err => {
          console.log(err);
        //   console.log('gonderilemedi');
        });
    }

    useEffect(()=>{
        isLogged();
    }, []);
    return (
        <AuthContext.Provider
        value= {{userInfo, setUserInfo, logout, isLogged}}>
        {children}
      </AuthContext.Provider>
    );
}