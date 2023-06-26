export const kitchenSlider = selector => {
    const elems = selector;
    let elemsChildren = elems.children;

    let kitchenMenu = elemsChildren[1]

    let kitchenMenuChildren = kitchenMenu.children;


    let btn = kitchenMenu.querySelectorAll('button');
    let menu = kitchenMenu.querySelectorAll('.menu');

    let menuBlock = menu[0].children;


    let arrMenu = [];
    for(let i = 0; i < menuBlock.length; i++){
        arrMenu.push(menuBlock[i])
    }
    console.log(arrMenu);

    const buttonClick = btn => {
        btn.addEventListener('click', event => {
            let button = event.target.classList.contains('right')
            console.log(button);
                for(let i = 0; i < arrMenu.length; i++){
                    arrMenu[i].classList.toggle('active')
                }
            
        })
    }

    [...btn].forEach(elem => {
        let button = elem;
        buttonClick(button);
    })
}