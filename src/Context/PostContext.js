
import React, { createContext, useState } from 'react';


export const PostContext = createContext();

export const PostProvider = ({ children }) => {
    const [post, setPost] = useState({
        image: '',
        title: '',
        category: '',
        author: '',
        description: '',
        date: '',
        readTime: ''
    });

    return (
        <PostContext.Provider value={{ post, setPost }}>
            {children}
        </PostContext.Provider>
    );
};