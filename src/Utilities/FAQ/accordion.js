
const accordion =()=>{
    const accContainer = document.createElement('div');
    accContainer.classList.add('accContainer');

    const a1 = 'What is Bookmark?'
    const a2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt \
                 justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.";

    

    const b1 = 'How can I request a new browser?'
    const b2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt \
                 justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.";
    
    const c1 = 'How can I request a new browser?'
    const c2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt \
                              justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.";
    
    const d1 = 'How can I request a new browser?'
    const d2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt \
                              justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.";
                

    accContainer.append(
          makeAcc(a1,a2),
          makeAcc(b1,b2),
          makeAcc(c1,c2),
          makeAcc(d1,d2));
    return accContainer;
}

function makeAcc(head,info){
    const cont = document.createElement('div');

    const acc = document.createElement('div');
    acc.setAttribute('aria-expanded',false);
    acc.textContent = head;
    acc.classList.add('head');

    const acc__info = document.createElement('div');
    acc__info.textContent = info;
    acc__info.classList.add('head_info');
    acc__info.style.maxWidth = 0;
    acc__info.style.display = "none";

    acc.onclick = () =>{
        if(acc.getAttribute('aria-expanded')==="false"){
            acc__info.style.maxWidth = "none";
            acc__info.style.display = "block";
            acc.setAttribute('aria-expanded',true);
        }else{
            acc__info.style.maxWidth = 0;
            acc__info.style.display = "none";
            acc.setAttribute('aria-expanded',false);
        }
    }

    cont.append(acc,acc__info);
    console.log(acc);
    
    return cont;
}

export {accordion};