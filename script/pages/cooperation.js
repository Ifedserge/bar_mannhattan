class Cooperation {
    constructor(){
        this.cooperation = null;
        this.init = this.init.bind(this);
    }
    create(){
        this.cooperation = document.createElement('div');
        this.cooperation.classList.add('cooperation')

        const container = document.createElement('div');
        container.classList.add('cooperation__container');
        container.innerHTML = `
            <div class='cooperation__container__heading heading'>
                <p>Top “Manhattan” events</p>
                <h3>корпоративы</h3>
            </div>
            <div class='cooperation__container__content'>
                <h4>корпоративы</h4>
                <div class='cooperation__container__content-block'>
                    <div>
                        <img src='./img/coop1.png' alt='#'>
                        <p>Фуршетное меню от 1000 руб. на человека (до 150 человек).</p>
                    </div>
                    <div>
                        <img src='./img/coop2.png' alt='#'>
                        <p>Банкетное меню от 1500 руб. на человека (до 100 человек). </p>
                    </div>
                </div>
                <h4>ПОЧЕМУ МЫ?</h4>
                <ul>
                    <li><p>Отдельный зал на 30 человек с профессиональной системой караоке</p></li>
                    <li><p>Удобная парковка и близость к трем станциям метро в центре города</p></li>
                    <li><p>Большие экраны</p></li>
                    <li><p>Танцпол с современной звуковой и световой аппаратурой</p></li>
                    <li><p>Сцена с проекционным экраном.</p></li>
                </ul>
            </div>
        `;


        this.cooperation.append(container);
    }

    init(){
        this.create();
        return this.cooperation;
    }
}


const cooperation = new Cooperation();
const init = cooperation.init
export default init;
