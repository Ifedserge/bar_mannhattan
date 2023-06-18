// import {home} from "../pages/home.js";
// import afisha from '../pages/afisha.js';
// import cooperation from '../pages/cooperation.js';
// import gallery from '../pages/gallery.js';
// import menu from '../pages/menu.js';
// import news from '../pages/news.js';
import router from '../components/router.js';

class Main {
    constructor(){
        this.main = null;
    }

    create(){
        this.main = document.createElement('main');
        this.main.classList.add('main');

        const render = async () => {
            main.innerHTML = '';
            let module = await router()
            main.append(module())
        }

        window.addEventListener('load', render)

        window.addEventListener('hashchange', render);

    }
    init(){
        this.create();
        return this.main;

    }
    
}




const main = new Main().init();
export {main}