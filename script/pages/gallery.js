class Gallery {
    constructor(){
        this.gallery = null;
        this.container = null;
        this.content = null;
        this.init = this.init.bind(this);

    }

    create(){
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
            <div class='image'>
                <img class='photo' src='../../img/gallery/1.png' alt='#'>
                <div><img src='../../img/gallery/more.png' alt='#'></div>
            </div>
            <div class='image'>
                <img class='photo' src='../../img/gallery/1.png' alt='#'>
                <div><img src='../../img/gallery/more.png' alt='#'></div>
            </div>
        `;
        this.container.append(this.content);
        this.gallery.append(this.container);


    }

    async popup(){
        const elems = this.content;
        if(!elems) return;
        console.log(elems);

        
        elems.forEach(elem => {
            elem.addEventListener('click', popUpHandler);
            
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



// <div class='gallery__container-content'>
//                 <div class='image'>
//                     <img class='photo' src='../../img/gallery/1.png' alt='#'>
//                     <div><img src='../../img/gallery/more.png' alt='#'></div>
//                 </div>
//             </div>