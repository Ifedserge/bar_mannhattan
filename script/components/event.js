export const eventWindow = selector => {
    const elems = selector.children;
    // console.log(elems);

    let btn = elems[0];
    let content = elems[1];
    
    const contentHandler = (contens, index) => {
        contens.forEach((content, i) =>{
            if( i === index){
                content.classList.add('active');
            }else{
                content.classList.remove('active');
            }
        });
    }

    const tabHandler = (buttons, contents) =>{
        buttons.addEventListener('click', event => {
            let button = event.target;
            if(button.tagName !== 'LI') return;
            [...buttons.children].forEach((btnE, i) =>{
                if(btnE === button){

                    btnE.classList.add('active');
                    contentHandler([...contents.children], i)
                }else{
                    btnE.classList.remove('active')
                }
                
            })
        })
    }
    tabHandler(btn, content);
}