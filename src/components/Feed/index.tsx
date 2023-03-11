import React from 'react';

import { Post } from '../../components';

import './styles.css';

export default function Feed() {
    return (
        <div className="feed">
            <Post username='mirza' text='deneme 1234' timestamp='2 hours' avatar />
            <Post username='mirza' text='deneme 1234' timestamp='2 hours' avatar />
            <Post username='mirza' text='deneme 1234' timestamp='2 hours' avatar />
            <Post username='mirza' text='deneme 1234' timestamp='2 hours' avatar />
            <Post username='mirza' text='deneme 1234' timestamp='2 hours' avatar />
            <Post username='mirza' text='deneme 1234' timestamp='2 hours' avatar />
            <Post username='mirza' text='deneme 1234' timestamp='2 hours' avatar />
            <Post username='mirza' text='deneme 1234' timestamp='2 hours' avatar />

            {/* <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post /> */}
        </div>
    );
}