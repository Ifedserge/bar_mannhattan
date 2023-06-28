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