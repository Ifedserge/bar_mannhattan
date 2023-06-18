class Header{
    constructor(){
        this.element = null;
    }
    create(){
        this.element = document.createElement('header');
        this.element.classList.add('header');


        const headerContainer = document.createElement('div');
        headerContainer.classList.add('header__container');

        const logoBlock = document.createElement('div');
        logoBlock.classList.add('header__container__logo');

        const logoLink = document.createElement('a');
        logoLink.setAttribute('href', '#')

        const logoImg = document.createElement('img');
        logoImg.setAttribute('src', './img/logo.png');
        logoImg.setAttribute('alt', 'logo');

        const block = document.createElement('div');
        block.classList.add('header__container__block');

        const nav = document.createElement('nav');
        nav.classList.add('nav');
        nav.innerHTML = `
            <ul>
                <li><a href='#'>Главная</a></li>
                <li><a href='#menu'>Меню</a></li>
                <li><a href='#afisha'>Афиша</a></li>
                <li><a href='#cooperation'>Сотрудничество</a></li>
                <li><a href='#gallery'>Галерея</a></li>
                <li><a href='#news'>Новости</a></li>
            </ul>
        `;

        const btn = document.createElement('button');
        btn.classList.add('header__btn');
        btn.innerHTML = `<span>Бронирование</span>`;
        // btn.innerText = 'Бронирование';

        this.element.append(headerContainer);
        logoLink.append(logoImg);
        logoBlock.append(logoLink);
        block.append(nav, btn)
        headerContainer.append(logoBlock, block)
    }

    init(){
        this.create();
        return this.element;
    }
}   

const header = new Header().init()
export { header }