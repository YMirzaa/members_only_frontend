import React, {useState, useContext} from "react";

import { AuthContext } from "../../context/AuthContext";

import './styles.css';

const closeIcon = require('../../assets/icons/close_button.png');

interface CreatePostProps {
    onClose: () => void;
}

export default function CreatePost({onClose} : CreatePostProps) {
    const {userInfo}: any = useContext(AuthContext);
    
    const [content, setContent] = useState<string>('');
    const [date, setDate] = useState<Date>(new Date());
    console.log(date);
    const onSubmit = (event : React.FormEvent) => {
        event.preventDefault();
    //     const data = { username: email, password };
    //     const requestOptions = {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json',
    //         },
            
    //     };
        
    //   axios.post(`${BASE_URL}/auth/${submitTo}`, data , requestOptions)
    //     .then(res => {
    //         if(res.data.user){
    //             setUserInfo(res.data.user.username);
    //         }
    //         navigate('/');
    //     })
    //     .catch(err => {
    //       console.log(err.response.data);
    //     //   console.log('gonderilemedi');
    //     });
    };
    return (
        <div className="create-post">
            <img src={closeIcon} alt="close" className="create-post__close" onClick={onClose}/>
            <h1>Create Post</h1>
            <form className="create-post__form" onSubmit={onSubmit}>
                <div className="create-post__form__input">
                    <textarea name="content" id="content" value={content} onChange={(e)=> setContent(e.target.value)} placeholder="Share Your Day" />
                </div>
                <div className="create-post__form__submit">
                    <button type="submit">Share</button>
                </div>
            </form>  
        </div>
    );
}