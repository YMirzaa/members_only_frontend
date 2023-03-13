import React, {createContext, useState} from "react";

export const AuthContext = createContext({});

export default function AuthProvider({children}: any) {
    const [userInfo, setUserInfo] = useState<{username: string} | null>(null);
    function logout (){
        setUserInfo(null);
    }
    return (
        <AuthContext.Provider
        value= {{userInfo, setUserInfo, logout}}>
        {children}
      </AuthContext.Provider>
    );
}