import React from 'react';

import {Avatar} from '@mui/material';

import './styles.css';

interface PostProps {
    username: string;
    text: string;
    timestamp?: string;
    avatar?: boolean;
}

export default function Post({
    username,
    text,
    timestamp,
    avatar
}: PostProps) {
    return (
        <div className="post">
            <div className="post__avatar">
                {avatar && <Avatar src="https://picsum.photos/50/50" alt="avatar"/> }
            </div>
            <div className='post__content'>
                <div className="post__header">
                    <h3>{username}</h3>    
                    {timestamp && <p>{timestamp} ago</p>}
                </div>
                <div className="post__body">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nullam quis risus eget urna mollis ornare vel eu leo. 
                        Nullam id dolor id nibh ultricies vehicula ut id elit. 
                        Nullam quis risus eget urna mollis ornare vel eu leo. 

                    </p>
                </div>
                <div className="post__footer">
                    <div className="post__footer__actions">
                        <button>Like</button>
                        <button>Comment</button>
                        <button>Share</button>
                    </div>
                </div>
            </div>

        </div>
    );
}
