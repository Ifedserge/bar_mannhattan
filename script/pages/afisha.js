class Afisha{

    constructor(){    
        this.afisha = null;
        this.init = this.init.bind(this);
    }

    create(){      
        this.afisha = document.createElement('div');
        this.afisha.classList.add('afisha');

        const container = document.createElement('div');
        container.classList.add('afisha__container');
        container.innerHTML= `
            <div class='afisha__container__heading heading'>
                <div>
                    <p>Top “Manhattan” party</p>
                </div>
                <h3>афиша</h3>
            </div>
            <div class='afisha__container__content'>
                <ul>
                    <li>
                        <img src='../../img/afisha/event-image1.png' alt='#'>
                        <div>
                            <span>17.07.2022 &#9679 19.00</span>
                            <p>рок в манхэттене</p>
                            <span class='price'>550 ₽</span>
                        </div>
                    </li>
                    <li>
                        <img src='../../img/afisha/event-image2.png' alt='#'>
                        <div>
                            <span>17.07.2022 &#9679 19.00</span>
                            <p>рок в манхэттене</p>
                            <span class='price'>550 ₽</span>
                        </div>
                        </li>
                    <li>
                        <img src='../../img/afisha/event-image3.png' alt='#'>
                        <div>
                            <span>17.07.2022 &#9679 19.00</span>
                            <p>рок в манхэттене</p>
                            <span class='price'>550 ₽</span>
                        </div>
                        </li>
                    <li>
                        <img src='../../img/afisha/event-image4.png' alt='#'>
                        <div>
                            <span>17.07.2022 &#9679 19.00</span>
                            <p>рок в манхэттене</p>
                            <span class='price'>550 ₽</span>
                        </div>
                        </li>
                    <li>
                        <img src='../../img/afisha/event-image4.png' alt='#'>
                        <div>
                            <span>17.07.2022 &#9679 19.00</span>
                            <p>рок в манхэттене</p>
                            <span class='price'>550 ₽</span>
                        </div>
                        </li>
                    <li>
                        <img src='../../img/afisha/event-image1.png' alt='#'>
                        <div>
                            <span>17.07.2022 &#9679 19.00</span>
                            <p>рок в манхэттене</p>
                            <span class='price'>550 ₽</span>
                        </div>
                        </li>
                    <li>
                        <img src='../../img/afisha/event-image2.png' alt='#'>
                        <div>
                            <span>17.07.2022 &#9679 19.00</span>
                            <p>рок в манхэттене</p>
                            <span class='price'>550 ₽</span>
                        </div>
                        </li>
                    <li>
                        <img src='../../img/afisha/event-image3.png' alt='#'>
                        <div>
                            <span>17.07.2022 &#9679 19.00</span>
                            <p>рок в манхэттене</p>
                            <span class='price'>550 ₽</span>
                        </div>
                        </li>
                    <li>
                        <img src='../../img/afisha/event-image1.png' alt='#'>
                        <div>
                            <span>17.07.2022 &#9679 19.00</span>
                            <p>рок в манхэттене</p>
                            <span class='price'>550 ₽</span>
                        </div>
                        </li>
                    <li>
                        <img src='../../img/afisha/event-image4.png' alt='#'>
                        <div>
                            <span>17.07.2022 &#9679 19.00</span>
                            <p>рок в манхэттене</p>
                            <span class='price'>550 ₽</span>
                        </div>
                        </li>
                    <li>
                        <img src='../../img/afisha/event-image1.png' alt='#'>
                        <div>
                            <span>17.07.2022 &#9679 19.00</span>
                            <p>рок в манхэттене</p>
                            <span class='price'>550 ₽</span>
                        </div>
                        </li>
                    <li>
                        <img src='../../img/afisha/event-image2.png' alt='#'>
                        <div>
                            <span>17.07.2022 &#9679 19.00</span>
                            <p>рок в манхэттене</p>
                            <span class='price'>550 ₽</span>
                        </div>
                        </li>
                </ul>
            </div>
        `;

        this.afisha.append(container);
        }


    init(){
        this.create();
        return this.afisha;
    }
    
}
const afisha = new Afisha();
const init = afisha.init
export default init;


