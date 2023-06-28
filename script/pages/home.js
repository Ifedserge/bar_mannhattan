import { eventWindow } from '../components/event.js'
import { kitchenSlider } from '../components/kitchenSlider.js'
class Home {
    constructor(){
        this.element = null;
        this.init = this.init.bind(this);
        this.event = null;
        this.kitchen = null;
    }
    async create(){
        this.element = document.createElement('div');
        this.element.classList.add('home');
      
        const homeContainer = document.createElement('div');
        homeContainer.classList.add('home__container');


        const title = document.createElement('div');
        title.classList.add('home__container_title');
        title.innerHTML = `
            <div class='home__container_title-heading heading'><p>SINCE 1996</p></div>
            <h1>True. Fontanka. Underground.</h1>
        `;
        
        this.event = document.createElement('div');
        this.event.classList.add('home__container_event');

       
        
        this.event.innerHTML = `
            <ul class='event_btns'>
                <li class='btn active'>Ближайшие</li>
                <li class='btn'>Скоро</li>
            </ul>
            <ul class='evnet_contents'> 
                <li class='event_content active'>
                    <div>
                    <img src="./img/event1.png" alt="#">
                    <img src="./img/event2.png" alt="#"> 
                    <img src="./img/event3.png" alt="#"> 
                    <img src="./img/event4.png" alt="#">
                    </div>
                </li>
                <li class='event_content'>
                    <div>
                    <img src="./img/event2.png" alt="#">
                    <img src="./img/event2.png" alt="#"> 
                    <img src="./img/event2.png" alt="#"> 
                    <img src="./img/event4.png" alt="#">
                    </div>
                </li>
            </ul>
        `;

        const firstScreen = document.createElement('div');
        firstScreen.classList.add('first_screen');
        

        this.kitchen = document.createElement('div');
        this.kitchen.classList.add('kitchen');
        this.kitchen.innerHTML = `
            <div class='kitchen__heading heading'>
                <div><p>Top “Manhattan” menu</p></div>
                <h3>Кухня</h3>
            </div>
            <div class='kitchen__menu'>
                <button class='left'>&#5176;</button>
                <div class='menu'>
                    <div class='menu__container active'>
                     <div class='menu_block'>
                        <img src='./img/home_menu/menu1.png' alt='#'>
                        <div class='menu_block_content'>
                            <div class='content_title'>
                                <h5>Amet donec</h5>
                                <p>550 ₽</p>
                            </div>
                            <span>200 гр</span>
                            <p>Placerat id auctor nunc id vel vel curabitur. Urna fames maecenas leo elit diam nibh elit.</p>
                        </div>
                     </div>
                     <div class='menu_block'>
                        <img src='./img/home_menu/menu2.png' alt='#'>
                        <div class='menu_block_content'>
                            <div class='content_title'>
                                <h5>Amet donec</h5>
                                <p>550 ₽</p>
                            </div>
                            <span>500 гр</span>
                            <p>Elit imperdiet faucibus euismod tortor risus volutpat molestie morbi sed. Porta ac eu.</p>
                        </div>
                     </div>
                     <div class='menu_block'>
                        <img src='./img/home_menu/menu3.png' alt='#'>
                        <div class='menu_block_content'>
                            <div class='content_title'>
                                <h5>Amet donec</h5>
                                <p>550 ₽</p>
                            </div>
                            <span>400 гр</span>
                            <p>Pharetra morbi purus hendrerit risus vel consequat nunc, sed. Pharetra nulla imperdiet. </p>
                        </div>
                     </div>
                     <div class='menu_block'>
                        <img src='./img/home_menu/menu4.png' alt='#'>
                        <div class='menu_block_content'>
                            <div class='content_title'>
                                <h5>Amet donec</h5>
                                <p>550 ₽</p>
                            </div>
                            <span>200 гр</span>
                            <p>Leo in arcu in gravida vivamus scelerisque non. Euismod nec amet amet egestas nisl iaculis.</p>
                        </div>
                     </div><div class='menu_block'>
                     <img src='./img/home_menu/menu5.png' alt='#'>
                     <div class='menu_block_content'>
                         <div class='content_title'>
                             <h5>Amet donec</h5>
                             <p>550 ₽</p>
                         </div>
                         <span>300 гр</span>
                         <p>In mauris, elit nisl sed. Nulla accumsan vestibulum sed velit sagittis quis accumsan.</p>
                     </div>
                  </div><div class='menu_block'>
                  <img src='./img/home_menu/menu6.png' alt='#'>
                  <div class='menu_block_content'>
                      <div class='content_title'>
                          <h5>Amet donec</h5>
                          <p>550 ₽</p>
                      </div>
                      <span>500 гр</span>
                      <p>Duis quisque tristique nulla cursus justo, etiam viverra nulla cras. Consectetur eget augue.</p>
                  </div>
               </div><div class='menu_block'>
               <img src='./img/home_menu/menu7.png' alt='#'>
               <div class='menu_block_content'>
                   <div class='content_title'>
                       <h5>Amet donec</h5>
                       <p>550 ₽</p>
                   </div>
                   <span>100 гр</span>
                   <p>In cras pharetra aliquet laoreet. Lectus nisi ante felis quam pharetra in maecenas ut felis.</p>
               </div>
            </div><div class='menu_block'>
                        <img src='./img/home_menu/menu8.png' alt='#'>
                        <div class='menu_block_content'>
                            <div class='content_title'>
                                <h5>Amet donec</h5>
                                <p>550 ₽</p>
                            </div>
                            <span>300 гр</span>
                            <p>Integer dolor et sed tempus non. Adipiscing viverra in viverra quisque pretium. Commodo.</p>
                        </div>
                     </div>
                     </div>
                     <div class="menu__container">
                     <div class="menu_block">
                        <img src="./img/home_menu/menu1.png" alt="#">
                        <div class="menu_block_content">
                            <div class="content_title">
                                <h5>Amet donec</h5>
                                <p>550 ₽</p>
                            </div>
                            <span>200 гр</span>
                            <p>Placerat id auctor nunc id vel vel curabitur. Urna fames maecenas leo elit diam nibh elit.</p>
                        </div>
                     </div>
                     <div class="menu_block">
                        <img src="./img/home_menu/menu2.png" alt="#">
                        <div class="menu_block_content">
                            <div class="content_title">
                                <h5>Amet donec</h5>
                                <p>550 ₽</p>
                            </div>
                            <span>500 гр</span>
                            <p>Elit imperdiet faucibus euismod tortor risus volutpat molestie morbi sed. Porta ac eu.</p>
                        </div>
                     </div>
                     <div class="menu_block">
                        <img src="./img/home_menu/menu1.png" alt="#">
                        <div class="menu_block_content">
                            <div class="content_title">
                                <h5>Amet donec</h5>
                                <p>550 ₽</p>
                            </div>
                            <span>400 гр</span>
                            <p>Pharetra morbi purus hendrerit risus vel consequat nunc, sed. Pharetra nulla imperdiet. </p>
                        </div>
                     </div>
                     <div class="menu_block">
                        <img src="./img/home_menu/menu1.png" alt="#">
                        <div class="menu_block_content">
                            <div class="content_title">
                                <h5>Amet donec</h5>
                                <p>550 ₽</p>
                            </div>
                            <span>200 гр</span>
                            <p>Leo in arcu in gravida vivamus scelerisque non. Euismod nec amet amet egestas nisl iaculis.</p>
                        </div>
                     </div><div class="menu_block">
                     <img src="./img/home_menu/menu1.png" alt="#">
                     <div class="menu_block_content">
                         <div class="content_title">
                             <h5>Amet donec</h5>
                             <p>550 ₽</p>
                         </div>
                         <span>300 гр</span>
                         <p>In mauris, elit nisl sed. Nulla accumsan vestibulum sed velit sagittis quis accumsan.</p>
                     </div>
                  </div><div class="menu_block">
                  <img src="./img/home_menu/menu1.png" alt="#">
                  <div class="menu_block_content">
                      <div class="content_title">
                          <h5>Amet donec</h5>
                          <p>550 ₽</p>
                      </div>
                      <span>500 гр</span>
                      <p>Duis quisque tristique nulla cursus justo, etiam viverra nulla cras. Consectetur eget augue.</p>
                  </div>
               </div><div class="menu_block">
               <img src="./img/home_menu/menu1.png" alt="#">
               <div class="menu_block_content">
                   <div class="content_title">
                       <h5>Amet donec</h5>
                       <p>550 ₽</p>
                   </div>
                   <span>100 гр</span>
                   <p>In cras pharetra aliquet laoreet. Lectus nisi ante felis quam pharetra in maecenas ut felis.</p>
               </div>
            </div><div class="menu_block">
                        <img src="./img/home_menu/menu1.png" alt="#">
                        <div class="menu_block_content">
                            <div class="content_title">
                                <h5>Amet donec</h5>
                                <p>550 ₽</p>
                            </div>
                            <span>300 гр</span>
                            <p>Integer dolor et sed tempus non. Adipiscing viverra in viverra quisque pretium. Commodo.</p>
                        </div>
                     </div>
                     </div>
                </div>
                
                <button class='right'>&#5171;</button>
            </div>
            <button class='kitchen__button'><a href="#menu">все меню</a></button>
        `;

        const info = document.createElement('div');
        info.classList.add('info');
        info.innerHTML = `
                 <div class='info_block'>
                    <div class='info_block_heading heading'>
                        <div>
                            <p>Top “Manhattan” events</p>
                        </div>
                        <h3>Банкеты</h3>
                    </div>
                    <div class='info_block_content'>
                        <p>Quam massa pretium et venenatis. Fringilla sagittis, arcu massa, in sem viverra consequat. Tempus sed est interdum eget nisi, nec fames. Eget amet hac varius aliquam. Mattis egestas suspendisse convallis eu arcu et aliquet.</p>
                        <p>Porttitor risus sociis vitae nunc id lacus eget felis. Viverra et purus nibh ut. Sed ac leo sit posuere vulputate sed morbi. Donec gravida at turpis sed pulvinar. A nibh non consectetur morbi in arcu, in pellentesque mauris.</p>
                        <p>Eu sodales netus faucibus interdum interdum platea massa egestas. Facilisis donec gravida pretium diam semper at id eleifend.</p>
                    </div>
                    <button><p>подробнее</p></button>
                 </div>
                 <div class='info_img'>
                    <img src='./img/info_img.png' alt='#'>
                 </div>
                 <div class='info_block'>
                    <div class='info_block_heading heading'>
                        <div>
                            <p>Top “Manhattan” tourists</p>
                        </div>
                        <h3>туристы</h3>
                    </div>
                    <div class='info_block_content'>
                        <p>Quam massa pretium et venenatis. Fringilla sagittis, arcu massa, in sem viverra consequat. Tempus sed est interdum eget nisi, nec fames. Eget amet hac varius aliquam. Mattis egestas suspendisse convallis eu arcu et aliquet.</p>
                        <p>Porttitor risus sociis vitae nunc id lacus eget felis. Viverra et purus nibh ut. Sed ac leo sit posuere vulputate sed morbi. Donec gravida at turpis sed pulvinar. A nibh non consectetur morbi in arcu, in pellentesque mauris.</p>
                        <p>Eu sodales netus faucibus interdum interdum platea massa egestas. Facilisis donec gravida pretium diam semper at id eleifend.</p>
                    </div>
                    <button><p>подробнее</p></button>
                 </div>
        `;

        const rider = document.createElement('div');
        rider.classList.add('rider');
        rider.innerHTML = `
            <div class='rider__heading heading'>
                <div>
                    <p>Top “Manhattan” party</p>
                </div>
                <h3>ТЕхрайдер</h3>
            </div>
            <div class='rider__block'>
                <ul class='rider__block-drop'>
                    <li>
                        <input type='checkbox', name='menu1' id='menu1' checked='checked'>
                        <label for='menu1'><p>Loudspeakers</p><img src='./img/up.png' alt='#'></label>
                        <ul class='drop__content' >
                            <li>Acoustic system BELL Top 600W x 2</li>
                            <li>Acoustic system BELL Mid 600W x 2</li>
                            <li>Acoustic system BELL Sub 1000W x 2</li>
                            <li>Front monitor Yamaha SM12V 300w x 2</li>
                            <li>Backside monitor Dynacord 500W x 2</li>
                        </ul>
                    </li>
                    <li>
                        <input type='checkbox', name='menu2' id='menu2'>
                        <label for='menu2'><p>Amplifier</p><img src='./img/up.png' alt='#'></label>
                        <ul class='drop__content'>
                            <li>Mackie FRM 1400/li>
                            <li>Crown XLS 400</li>
                            <li>Fealex SX4</li>
                            <li>Samson SX 2000</li>
                        </ul>
                    </li>
                <li>
                    <input type='checkbox', name='menu3' id='menu3' >
                    <label for='menu3'><p>FOH</p><img src='./img/up.png' alt='#'></label>
                    <ul class='drop__content'>
                        <li>Mixing console Allen&Heath ZED 24</li>
                        <li>Compressor/Limiter/Gate DBX 166 XL x 1</li>
                        <li>Compressor/Limiter/Gate DBX 166 XS x 2</li>
                        <li>Graphic Equalizer / monitor lines DBX 1231</li>
                        <li>Graphic Equalizer / master DBX231</li>
                        <li>Effect processor LEXICON MX 200</li>
                    </ul>
                </li>
                <li>
                    <input type='checkbox', name='menu4' id='menu4'>
                    <label for='menu4'><p>Backline</p><img src='./img/up.png' alt='#'></label>
                    <ul class='drop__content'>
                        <li>Guitar combo Peavey ValveKing VK112</li>
                        <li>Guitar combo Laney LV 300 Twin</li>
                        <li>Guitar combo Randall RG75 G3 plus</li>
                        <li>Guitar combo Marshall AVT 100X</li>
                        <li>Bass Amplifier Gallien-Krueger Backline 115 175</li>
                        <li> Direct Box Behringer DI20 UltraDI (2 channels) x 1
                        </li>
                    </ul>
                </li>
                <li>
                <input type='checkbox', name='menu5' id='menu5' >
                <label for='menu5'><p>Microphone set</p><img src='./img/up.png' alt='#'></label>
                <ul class='drop__content'>
                    <li>Microphone Shure sm 58 x 3</li>
                    <li>Microphone Shure 58A beta x 1</li>
                    <li>Microphone instrument Shure 57A beta x 3</li>
                    <li>Microphone instrument Shure pg58 x 1</li>
                    <li>Microphone instrument Akg d112 x 1</li>
                    <li>Microphone instrument Sennheiser e906 x 1</li>
                </ul>
                </li>
                <li>
                <input type='checkbox', name='menu6' id='menu6' >
                <label for='menu6'><p>DJ equipment</p><img src='./img/up.png' alt='#'></label>
                <ul class='drop__content'>
                <li>Acoustic system BELL Top 600W x 2</li>
                    <li>Pioneer CDJ 350 x 2</li>
                    <li>Pioneer DJM 250 Dj Mixer</li>
                </ul>
                </li>

                </ul>
                
                <div class='rider__block-sound'>
                    <h3>Звукорежиссеры клуба МАНХЭТТЕН</h3>
                    <div class='sound-prods'>
                        <div class='sound-prod'>
                            <img src='./img/Izotov.png' alt='#'>
                            <p>Изотов Константин</p>
                            <div>
                                <div>
                                    <a href='https://vk.com/ikvmusic'><img src='./img/icon/vk.png' alt='#'></a>
                                    <a href='#'><img src='./img/icon/bxl_telegram.png' alt='#'></a>
                                    
                                </div>
                            </div>
                        </div>
                        <div class='sound-prod'>
                            <img src='./img/Hotov.png' alt='#'>
                            <p>Давид <br>Хозиев</p>
                            <div>
                                <div>
                                <a href='https://vk.com/fuck_peas'><img src='./img/icon/vk.png' alt='#'></a>
                                <a href='#'><img src='./img/icon/bxl_telegram.png' alt='#'></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                
            </div>
        `;

       
        firstScreen.append(title, this.event)
        homeContainer.append(firstScreen, this.kitchen, info, rider);
        this.element.append(homeContainer);
        eventWindow(this.event);
        kitchenSlider(this.kitchen);
    }
    
    
    init(){
        this.create();
        return this.element;
    }
}


const home = new Home()
const init = home.init
export default init;


