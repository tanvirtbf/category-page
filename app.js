window.addEventListener('scroll',function(){
    if(window.pageYOffset > 200){
        document.body.children[2].style.width = '100%';
        document.body.children[2].style.transition = 'all 0.2s ease-in-out'
    }
    else if(window.pageYOffset <200){
        document.body.children[2].style.width = '90%';
        document.body.children[2].style.transition = 'all 0.2s ease-in-out'
    }
})
const navLinkEls = document.querySelectorAll('.btn-style');
navLinkEls.forEach(hello =>{
    hello.addEventListener('click', ()=>{
        document.querySelector('.btn-styles')?.classList.remove('btn-styles')
        hello.classList.add('btn-styles')
    })
})
const imgLinkEls = document.querySelectorAll('.small-img');
imgLinkEls.forEach(hello=>{
    hello.addEventListener('click', ()=>{
        document.querySelector('.small-img-js')?.classList.remove('small-img-js')
        hello.classList.add('small-img-js')
    })
})

