import React, { useState, useEffect } from 'react';
import SectionContainer from '../shared/sections/container';
import SectionCard from '../shared/sections/card';
import { getNews } from '../services';

function News() {

    //https://allorigins.win/
    const [news, setNews] = useState([]);
    useEffect(() => {
        if (news.length > 0) return;
        getNews().then((data) => {
            setNews(data);
        }).catch((error) => {
            console.error(error);
        })
    })

    return (
        <SectionContainer title="NOTICIAS" url="https://federaciondecafeteros.org/listado-noticias/">
            {news.map((newsItem, index) => <SectionCard key={index}
                cover={newsItem.cover}
                title={newsItem.title}
                date={newsItem.date}
                description={newsItem.description}
                url={newsItem.url} />)}
        </SectionContainer>
    );
}

export default News;