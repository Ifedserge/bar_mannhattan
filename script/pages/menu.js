class Menu {
    constructor(){
        this.menu = null;
        this.init = this.init.bind(this);
    }
    create(){
        this.menu = document.createElement('div');
        this.menu.classList.add('menu__page');
        this.menu.innerHTML = `
            <img src='./img/menu.jpg' alt='menu'>
        `;
    }
    init(){
        this.create();
        return this.menu;
    }
}
const menu = new Menu();
const init = menu.init
export default init;