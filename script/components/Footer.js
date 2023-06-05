class Footer{
    constructor(){
        this.footer = null;
    }
    create(){
        this.footer = document.createElement('footer');
        this.footer.classList.add('footer')

        const footerContainer = document.createElement('div');
        footerContainer.classList.add('footer__container'); 

        const heading = document.createElement('div');
        heading.classList.add('footer__container__heading');
        heading.classList.add('heading');
        heading.innerHTML = `
            <div><p>Top “Manhattan” place</p></div>
            <h3>Контакты</h3>
        `;

        const footerContent = document.createElement('div');
        footerContent.classList.add('footer__container__content');
        
        const contact = document.createElement('div');
        contact.classList.add('content_contact');

        contact.innerHTML = `
            <div class='contact_block'>
                <div class='address'>
                    <h3>Адрес</h3>
                    <span>Набережная реки Фонтанки, 90 (вход в арке с белыми колоннами)</span>
                    <h3>Телефон</h3>
                    <span>+7 (812) 713-1945</span>
                    <h3>режим работы</h3>
                    <span>Ежедневно с 12:00 до 06:00</span>
                </div>
                <div class='director'>
                <h3>директор</h3>
                <span>Лидия Эмильевна, +7(921) 963-55-50</span>
                <h3>арт-директор</h3>
                <span>Илиния Ионашко, +7(981) 989-43-30</span>
                </div>
            </div>
        `;
        const map = document.createElement('div');
        map.classList.add('map');
        map.innerHTML = `
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1999.4109252985063!2d30.326595402294945!3d59.92532327413457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469631aa5ba832d7%3A0xb07e09646a283529!2z0JzQsNC90YXRjdGC0YLQtdC9!5e0!3m2!1sru!2sby!4v1685973116694!5m2!1sru!2sby" width="856px" height="656px " style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        `;

        const copyright = document.createElement('div');
        copyright.classList.add('copyrigth');
        copyright.innerHTML = `<span>Copyright © 2022. Все права защищены.</span>`

        footerContent.append(contact, map)
        this.footer.append(footerContainer);
        footerContainer.append(heading, footerContent, copyright)

    }
    init(){
        this.create();
        return this.footer;
    }
}

const footer = new Footer().init();
export { footer }