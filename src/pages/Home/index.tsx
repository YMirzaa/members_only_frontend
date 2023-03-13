import React, {useState, useContext} from "react";

import { Feed, CreatePost } from "../../components";
import { AuthContext } from "../../context/AuthContext";

import "./styles.css";

export default function Home() {
    const {userInfo, logout}: any = useContext(AuthContext);
    const [createPost, setCreatePost] = useState<boolean>(false);
    return (
        <div className={`home-page ${createPost && 'create-post--active'}`}>
            <div className={`${createPost && 'create-post--active'}`}>
                <Feed/>
                {userInfo &&<button className="create-post-button" onClick={()=>setCreatePost(!createPost)}>Create Post</button>}
            </div>

            {createPost && userInfo && <CreatePost onClose={()=> setCreatePost(!createPost)}/>}
        </div>
    );
}