
import axios from 'axios';

function request(url) {
    return axios({ method: 'GET', url: `https://api.allorigins.win/get?url=${encodeURIComponent(url)}` });
}

function parsePrice(response) {
    let domparser = new window.DOMParser();
    const doc = domparser.parseFromString(response.data.contents, "text/html");
    let price = doc.querySelector('ul.lista:nth-child(3) > li:nth-child(2) > strong:nth-child(2)').innerText;
    let dollar = doc.querySelector('ul.lista:nth-child(3) > li:nth-child(5) > strong:nth-child(2)').innerText;
    let date = doc.querySelector('ul.lista:nth-child(3) > li:nth-child(2) > span:nth-child(4)').innerText.match(/([0-9](\-)?)+/)[0];
    return { price, dollar, date };
}

function parseNews(response) {
    let domparser = new window.DOMParser();
    const doc = domparser.parseFromString(response.data.contents, "text/html");
    const items = Array.prototype.slice.call(doc.querySelectorAll('div.repeater.repeater-noticias')).slice(0, 4);
    let data = [];
    for (const item of items) {
        let obj = {};
        obj.cover = item.querySelector('a:nth-child(1) > picture:nth-child(1) > img:nth-child(6)').attributes.src.value;
        const titleObj = item.querySelector('h3:nth-child(2) > a:nth-child(1)');
        obj.title = titleObj.innerText;
        obj.url = titleObj.attributes.href.value;
        obj.date = item.querySelector('div:nth-child(3) > time:nth-child(1)').innerText.trim();
        obj.description = item.querySelector('div:nth-child(4) > p:nth-child(1)').innerText;
        data.push(obj);
    }
    return data;
}

function parsePosts(response) {
    let domparser = new window.DOMParser();
    const doc = domparser.parseFromString(response.data.contents, "text/html");
    const items = Array.prototype.slice.call(doc.querySelectorAll('div.repeater-blog')).slice(0, 4);
    let data = [];
    for (const item of items) {
        let obj = {};
        obj.cover = item.querySelector('a:nth-child(2) > picture:nth-child(1) > img:nth-child(6)').attributes.src.value;
        const titleObj = item.querySelector('h3:nth-child(3) > a:nth-child(1)');
        obj.title = titleObj.innerText;
        obj.url = titleObj.attributes.href.value;
        obj.date = item.querySelector('div:nth-child(4) > time:nth-child(1)').innerText.trim();
        obj.description = item.querySelector('div:nth-child(5) > p:nth-child(1)').innerText;
        data.push(obj);
    }
    return data;
}

export function getPrice() {
    return request('https://federaciondecafeteros.org').then(parsePrice);
}

export function getNews() {
    return request('https://federaciondecafeteros.org/listado-noticias/').then(parseNews);
}

export function getPosts() {
    return request('https://federaciondecafeteros.org/wp/blog/').then(parsePosts);
}