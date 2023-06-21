import { popup } from "../components/popup.js";
class Gallery {
    constructor(){
        this.gallery = null;
        this.container = null;
        this.content = null;
        this.init = this.init.bind(this);

    }

    async create(){
        this.gallery = document.createElement('div');
        this.gallery.classList.add('gallery');

        this.container = document.createElement('div');
        this.container.classList.add('gallery__container');
        this.container.innerHTML = `
            <div class='gallery__container-heading heading'>
                <p>Top “Manhattan” photo</p>
                <h3>галерея</h3>
            </div>
        `;

        this.content = document.createElement('div');
        this.content.classList.add('gallery__container-content');
        this.content.innerHTML = `
            <div class='image' >
                <a href='./img/gallery/full/9.jpg' data-type='img' id='0'>
                    <img class='photo' src='./img/gallery/9.png' alt='#' >
                </a>
                <div>
                    <a href='./img/gallery/9.png' data-type='img'>    
                        <img src='./img/gallery/more.png' alt='#'>
                    </a>        
                </div>
            </div>
            <div class='image'>
                <a href='./img/gallery/full/1.jpg' data-type='img' id='1'>
                    <img class='photo' src='./img/gallery/1.png' alt='#' >
                </a>
                <div>
                    <a href='./img/gallery/full/1.jpg' data-type='img' >
                        <img src='./img/gallery/more.png' alt='#'>
                    </a>        
                </div>
            </div>
            <div class='image'>
                <a href='./img/gallery/full/2.jpg' data-type='img' id='2'>
                    <img class='photo' src='./img/gallery/2.png' alt='#'>
                </a>
                <div>
                    <a href='./img/gallery/full/2.jpg' data-type='img'>
                        <img src='./img/gallery/more.png' alt='#'>
                    </a>    
                </div>
            </div>
            <div class='image'>
                <a href='./img/gallery/full/3.jpg' data-type='img' id='3'>
                    <img class='photo' src='./img/gallery/3.png' alt='#' >
                </a>
                <div>
                    <a href='./img/gallery/full/3.jpg' data-type='img'>
                        <img src='./img/gallery/more.png' alt='#'>
                    </a>
                </div>
            </div>
            <div class='image'>
                <a href='./img/gallery/full/4.jpg' data-type='img' id='4'>
                    <img class='photo' src='./img/gallery/4.png' alt='#' >
                </a>
                <div>
                    <a href='./img/gallery/full/4.jpg' data-type='img'>
                        <img src='./img/gallery/more.png' alt='#'>
                    </a>    
                    </div>

            </div>
            <div class='image'>
                <a href='./img/gallery/full/5.jpg' data-type='img' id='5'>
                    <img class='photo' src='./img/gallery/5.png' alt='#' >
                </a>
                <div>
                <a href='./img/gallery/full/5.jpg' data-type='img'>
                        <img src='./img/gallery/more.png' alt='#'>
                    </a>
                    </div>
            </div>
            <div class='image'>
                <a href='./img/gallery/full/6.jpg' data-type='img' id='6'>
                    <img class='photo' src='./img/gallery/6.png' alt='#' >
                </a>
                <div>
                    <a href='./img/gallery/full/6.jpg' data-type='img'>
                        <img src='./img/gallery/more.png' alt='#'>
                    </a>    
                    </div>
            </div>
            <div class='image'>
                <a href='./img/gallery/full/7.jpg' data-type='img' id='7'>
                    <img class='photo' src='./img/gallery/7.png' alt='#' >
                </a>
                <div>
                    <a href='./img/gallery/full/7.jpg' data-type='img'>
                        <img src='./img/gallery/more.png' alt='#'>
                    </a>    
                </div>

            </div>
            <div class='image'>
                <a href='./img/gallery/full/8.jpg' data-type='img' id='8'>
                    <img class='photo' src='./img/gallery/8.png' alt='#' >
                </a>
                <div>
                    <a href='./img/gallery/full/8.jpg' data-type='img'>
                        <img src='./img/gallery/more.png' alt='#'>
                    </a>   
                </div>
            </div>
            <div class='image'>
                <a href='./img/gallery/full/9.jpg' data-type='img' id='9'>
                    <img class='photo' src='./img/gallery/9.png' alt='#' >
                </a>
                <div>
                    <a href='./img/gallery/full/9.jpg' data-type='img'>
                    <img src='./img/gallery/more.png' alt='#'>
                    </a>
                </div>
            </div>
            <div class='image'>
            <a href='./img/gallery/full/11.jpg' data-type='img' id='10'>
                    <img class='photo' src='./img/gallery/11.png' alt='#' >
                </a>
                <div>
                    <a href='./img/gallery/full/11.jpg' data-type='img'>
                        <img src='./img/gallery/more.png' alt='#'>
                    </a>
                </div>
            </div>
            <div class='image'>
                <a href='./img/gallery/full/12.jpg' data-type='img' id='11'>
                    <img class='photo' src='./img/gallery/12.png' alt='#' >
                </a>
                <div>
                    <a href='./img/gallery/full/12.jpg' data-type='img'>
                        <img src='./img/gallery/more.png' alt='#'>
                    </a>
                </div>
                
            </div>
        `;
        this.container.append(this.content);
        this.gallery.append(this.container);

        

    }

    async popup(){
        const elems = this.content.children;
        if(!elems) return;
        
        const show = content => {
            let popUpContainer = document.createElement('div');
            let popUpModal = document.createElement('div');
            let popUpClose = document.createElement('div');
            let popUpContent = document.createElement('div');

            let btnLeft = document.createElement('button');
            let btnRight = document.createElement('button');
            btnLeft.classList.add('btn__left');
            btnRight.classList.add('btn__right');
            btnLeft.innerText = `туда`;
            btnRight.innerText = `сюда`;

            let src;
            let numbId = parseInt(content.id);
            btnRight.addEventListener('click', () => {
                numbId++;
                if(numbId !== imgArray.length){
                    src = imgArray[numbId].href;
                    content.setAttribute('src', src);
                }else{
                    numbId = 0;
                    src = imgArray[numbId].href;
                    content.setAttribute('src', src);
                }
               
            })
            btnLeft.addEventListener('click', () => {
               
                numbId--;
                if(numbId >= 0){
                    src = imgArray[numbId].href;
                    content.setAttribute('src', src);
                }else{
                    numbId = imgArray.length - 1;
                    src = imgArray[numbId].href;
                    content.setAttribute('src', src);
                }
                
            })
            
            popUpContainer.classList.add('popup');
            popUpModal.classList.add('popup__modal');
            popUpClose.classList.add('popup__close');
            popUpContent.classList.add('popup__content');
    
            popUpClose.innerHTML = `&#215`;
            popUpContent.append(btnLeft, content, btnRight);
    
            popUpClose.addEventListener('click', () => popUpContainer.remove());
    
            popUpModal.append(popUpClose, popUpContent);
            popUpContainer.append(popUpModal);
            document.body.append(popUpContainer);
            


        }
    

         const popUpHandler = e => {
            e.preventDefault();

            
            let elem = e.target;
            
            let type = elem.dataset.type;

           
            if(!type) {
                let parent = elem.closest('[data-type]');
                if(!parent) return;
                type = parent.dataset.type;
                console.log(type);
                if(!type) return;
                elem = parent;
            }
            let content = '';
            

            if(type === 'img') {
                const href = elem.href;
                if(!href) return;

                const id = elem.id;
               

                let img = document.createElement('img');
                let src = imgArray[id].href
                img.setAttribute('src', src);
                img.setAttribute('id', id);
                content = img;
            }
            console.log(elem);
            show(content);
         }
        let imgArray = [];

        [...elems].forEach(elem => {
            elem.addEventListener('click', popUpHandler);
            imgArray.push(elem.children[0])
        });
    }
    
    init(){
        this.create();
        this.popup()
        return this.gallery;
        
    }
    
}

const gallery = new Gallery();
const init = gallery.init;
export default init;


