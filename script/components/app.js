import { header } from "./Header.js";
import { footer } from "./Footer.js";

class App {
    constructor(){
        this.element = null
    }

    create(){
        this.element = document.createElement('div');
        this.element.classList.add('app')

    }
    render(){
        const body = document.querySelector('body');
        body.append(this.element);

        this.element.append(header, footer)
    }
    init(){
        this.create();
        this.render();
    }
}

export default new App().init();