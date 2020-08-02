import React, { useState, useEffect } from 'react';
import SectionContainer from '../shared/sections/container';
import SectionCard from '../shared/sections/card';
import { getPosts } from '../services';

function Blog() {

    //https://allorigins.win/
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        if (posts.length > 0) return;
        getPosts().then((data) => {
            setPosts(data);
        }).catch((error) => {
            console.error(error);
        })
    })

    return (
        <SectionContainer title="BLOG" url="https://federaciondecafeteros.org/wp/blog/">
            {posts.map((newsItem, index) => <SectionCard key={index}
                cover={newsItem.cover}
                title={newsItem.title}
                date={newsItem.date}
                description={newsItem.description}
                url={newsItem.url} />)}
        </SectionContainer>
    );
}

export default Blog;