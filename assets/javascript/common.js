function openMenu(){
    if (document.querySelector('nav').style.display === 'none'){
        document.querySelector('nav').style.display = 'flex'
    } else {
        document.querySelector('nav').style.display = 'none'
    }
}
function load(){
    if(document.body.clientWidth<850){
        document.querySelector('nav').style.display = 'none'
        document.querySelector('.menu-opener').style.display = 'flex'
    }
}
window.onresize=function(){
    if(document.body.clientWidth>850){
        document.querySelector('nav').style.display = 'flex'
        document.querySelector('.menu-opener').style.display = 'none'
    } else {
        document.querySelector('.menu-opener').style.display = 'block'
        document.querySelector('nav').style.display = 'none'
    }
}
load()