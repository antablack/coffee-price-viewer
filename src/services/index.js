
import axios from 'axios';

function request(url) {
    return axios({ method: 'GET', url: `https://api.allorigins.win/get?url=${encodeURIComponent(url)}` });
}

function parsePrice(response) {
    var el = window.document.createElement('html');
    el.innerHTML = response.data.contents;
    let price = el.querySelector('ul.lista:nth-child(3) > li:nth-child(2) > strong:nth-child(2)').innerText;
    let dollar = el.querySelector('ul.lista:nth-child(3) > li:nth-child(5) > strong:nth-child(2)').innerText;
    let date = el.querySelector('ul.lista:nth-child(3) > li:nth-child(2) > span:nth-child(4)').innerText.match(/([0-9](\-)?)+/)[0];
    return {price, dollar, date};
}

export function getPrice(){
    return request('https://federaciondecafeteros.org').then(parsePrice);
}