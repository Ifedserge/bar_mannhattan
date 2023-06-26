export default function news () {
    const h1 = document.createElement('h1');
    h1.classList.add('news__h1')
    h1.innerHTML = 'Новостей <span>нет</span>';

    return h1
}