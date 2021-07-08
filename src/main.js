import './css/main.css'
import photo from './images/dogo.png'

const f = (tag) => {
    const img = document.createElement('img');
    img.src = photo;
    document.querySelector(tag).appendChild(img)
}

f('div')