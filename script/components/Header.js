class Header{
    constructor(){
        this.element = null;
        this.menuIcon = null;
        this.nav = null;
        this.btn = null;
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

        this.menuIcon = document.createElement('div');
        this.menuIcon.classList.add('menu__icon');
        this.menuIcon.innerHTML = `<span></span>`
        this.nav = document.createElement('nav');
        this.nav.classList.add('nav');
        this.nav.innerHTML = `
            <ul>
                <li><a href='#'>Главная</a></li>
                <li><a href='#menu'>Меню</a></li>
                <li><a href='#afisha'>Афиша</a></li>
                <li><a href='#cooperation'>Сотрудничество</a></li>
                <li><a href='#gallery'>Галерея</a></li>
                <li><a href='#news'>Новости</a></li>
            </ul>
        `;

        this.btn = document.createElement('button');
        this.btn.classList.add('header__btn');
        this.btn.innerHTML = `<span>Бронирование</span>`;
        // btn.innerText = 'Бронирование';

        this.element.append(headerContainer);
        logoLink.append(logoImg);
        logoBlock.append(logoLink);
        block.append(this.menuIcon, this.nav, this.btn);
        headerContainer.append(logoBlock, block)
    }
    burger(){
        const menu = this.menuIcon;
        const navigation = this.nav;
        const body = document.querySelector('body')
        menu.addEventListener('click', function(e) {
            body.classList.toggle('_lock')
            menu.classList.toggle('_active')
            navigation.classList.toggle('_active');
            
        })
        
        let navChildren = this.nav.children;
        let elems = navChildren[0].children;

        const closeBurger = e =>{
            let elem = e.target;
            let tagName = elem.tagName;
            console.log(e);
            console.log(tagName);
            if(tagName === 'A') {
                body.classList.remove('_lock')
                menu.classList.remove('_active')
                navigation.classList.remove('_active');
            }
        }
       
        [...elems].forEach(elem => {
            elem.addEventListener('click', closeBurger);
        })
    }

    booking(){
        let button = this.btn;
        
        const show = content => {
            let popUpContainer = document.createElement('div');
            let popUpModal = document.createElement('div');
            let popUpClose = document.createElement('div');
            let popUpContent = document.createElement('div');

            popUpContainer.classList.add('booking');
            popUpModal.classList.add('booking__modal');
            popUpClose.classList.add('booking__close');
            popUpContent.classList.add('booking__content');
    
            popUpClose.innerHTML = `&#215`;
            popUpContent.append(content);
    
            popUpClose.addEventListener('click', () => popUpContainer.remove());
    
            popUpModal.append(popUpClose, popUpContent);
            popUpContainer.append(popUpModal);
            document.body.append(popUpContainer);
        }
        const bookingWindow = e => {
            let elem = e.target;
            console.log(elem);
            
            let content = document.createElement('div');
            content.classList.add('content');
            content.innerHTML = `
                <form>
                    <input type="text" name="name" id="" placeholder='Имя'>
                    <input type="text" name="phone" id="" placeholder='Телефон'>
                    <button type="submit">Отправить</button>
                </form>
            `;
            show(content);
        }

        button.addEventListener('click', bookingWindow);
    }
    

    init(){
        this.create();
        this.burger();
        this.booking();
        return this.element;
    }
}   

const header = new Header().init()
export { header }