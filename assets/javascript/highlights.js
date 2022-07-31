const c = (el)=>document.querySelector(el);
const cs = (el)=>document.querySelectorAll(el);
let opacity = 0;
let intervalID = 0;
window.onload = fadeIn;
let main = ''
let spinOff = ''
let VC = ''

function mario(e){
    main = marioJson
    spinOff = marioJsonSpinoff
    VC = marioJsonVC
    c('.game-selection-area .active').classList.remove('active')
    c('#first').classList.add('active')
    loadGames()
    complete()
}
function zelda(e){
    main = zeldaJson
    spinOff = zeldaJsonSpinoff
    VC = zeldaJsonVC
    c('.game-selection-area .active').classList.remove('active')
    e.target.classList.add('active')
    loadGames()
    complete()
}
function pokemon(e){
    main = pokemonJson
    spinOff = pokemonJsonSpinoff
    VC = pokemonJsonVC
    c('.game-selection-area .active').classList.remove('active')
    e.target.classList.add('active')
    loadGames()
    complete()
}
function kirby(e){
    main = kirbyJson
    spinOff = kirbyJsonSpinoff
    VC = kirbyJsonVC
    c('.game-selection-area .active').classList.remove('active')
    e.target.classList.add('active')
    loadGames()
    complete()
}
function metroid(e){
    main = metroidJson
    VC = metroidJsonVC
    c('.spin-offs').classList.add('hide')
    c('.virtual-console').classList.remove('hide')
    c('.game-selection-area .active').classList.remove('active')
    e.target.classList.add('active')
    loadGames()
}
function bayonetta(e){
    main = bayonettaJson
    c('.spin-offs').classList.add('hide')
    c('.virtual-console').classList.add('hide')
    c('.game-selection-area .active').classList.remove('active')
    e.target.classList.add('active')
    loadGames()
}
function outros(e){
    main = outrosJson
    c('.spin-offs').classList.add('hide')
    c('.virtual-console').classList.add('hide')
    c('.game-selection-area .active').classList.remove('active')
    e.target.classList.add('active')
    loadGames()
}
function toggleSpinShow(){
    c('.spin-minus').style.display = 'block'
    c('.spin-plus').style.display = 'none'
    c('.spin-offs .games1').style.display = 'flex'
    c('.spin-offs .games1').style.opacity = 0
    setInterval(showSpin, 40);
}
function toggleSpinHide(){
    c('.spin-minus').style.display = 'none'
    c('.spin-plus').style.display = 'block'
    c('.spin-offs .games1').style.display = 'none'
}
function toggleVCShow(){
    c('.vc-minus').style.display = 'block'
    c('.vc-plus').style.display = 'none'
    c('.virtual-console .games1').style.display = 'flex'
    c('.virtual-console .games1').style.opacity = 0
    setInterval(showVC, 40);
}
function toggleVCHide(){
    c('.vc-minus').style.display = 'none'
    c('.vc-plus').style.display = 'block'
    c('.virtual-console .games1').style.display = 'none'
}
function loadGames(){
    c('.main-series .games1').innerHTML = ''
    c('.spin-offs .games1').innerHTML = ''
    c('.virtual-console .games1').innerHTML = ''
    c('.trailer-area iframe').src = ''
    main.map((item, index)=>{
        let gameItem = c('.models .game').cloneNode(true)
        gameItem.setAttribute('data-key', index);
        gameItem.querySelector('.img-preview-area img').src = item.pic
        gameItem.querySelector('.name-preview-area').innerHTML = item.name
        gameItem.querySelector('a').addEventListener('click', (e)=>{
            e.preventDefault()
            let key = e.target.closest('.game').getAttribute('data-key')
            c('.game-title').innerHTML = main[key].name
            c('.desc-area').innerHTML = main[key].desc
            c('.button-div a').href = main[key].shop
            c('.trailer-area iframe').src = main[key].video
            c('.game-info-wait').classList.add('hide')
            c('.game-info-area').classList.remove('hide')
        })
        c('.main-series .games1').append(gameItem)
    }),
    spinOff.map((item, index)=>{
        let gameItem = c('.models .game').cloneNode(true)
        gameItem.querySelector('.img-preview-area img').src = item.pic
        gameItem.querySelector('.name-preview-area').innerHTML = item.name
        gameItem.setAttribute('data-key', index);
        gameItem.querySelector('a').addEventListener('click', (e)=>{
            e.preventDefault()
            let key = e.target.closest('.game').getAttribute('data-key')
            c('.game-title').innerHTML = spinOff[key].name
            c('.desc-area').innerHTML = spinOff[key].desc
            c('.button-div a').href = spinOff[key].shop
            c('.trailer-area iframe').src = spinOff[key].video
            c('.game-info-wait').classList.add('hide')
            c('.game-info-area').classList.remove('hide')
        })
        c('.spin-offs .games1').append(gameItem)
    })
    VC.map((item, index)=>{
        let gameItem = c('.models .game').cloneNode(true)
        gameItem.setAttribute('data-key', index);
        gameItem.querySelector('.img-preview-area img').src = item.pic
        gameItem.querySelector('.name-preview-area').innerHTML = item.name
        gameItem.querySelector('a').addEventListener('click', (e)=>{
            e.preventDefault()
            let key = e.target.closest('.game').getAttribute('data-key')
            c('.game-title').innerHTML = VC[key].name
            c('.desc-area').innerHTML = VC[key].desc
            c('.button-div a').href = VC[key].shop
            c('.trailer-area iframe').src = VC[key].video
            c('.game-info-wait').classList.add('hide')
            c('.game-info-area').classList.remove('hide')
        })
        c('.virtual-console .games1').append(gameItem)
    })
    c('.game-info-area').classList.add('hide')
    c('.game-info-wait').classList.remove('hide')   
    toggleSpinHide()
    toggleVCHide()
    document.querySelector('.games1').style.opacity = 0

}
function complete(){
    c('.spin-offs').classList.remove('hide')
    c('.virtual-console').classList.remove('hide')
}

function fadeIn() {
    setInterval(show, 40);
}
 
function showVC(){
    var body = document.querySelector(".virtual-console .games1");
    opacity = Number(window.getComputedStyle(body)
                    .getPropertyValue("opacity"));
    if (opacity < 1) {
        opacity = opacity + 0.2;
        body.style.opacity = opacity
     } else {
         clearInterval(intervalID);
    }
}

function show() {
    var body = document.querySelector(".games1");
    opacity = Number(window.getComputedStyle(body)
                    .getPropertyValue("opacity"));
    if (opacity < 1) {
        opacity = opacity + 0.2;
        body.style.opacity = opacity
     } else {
         clearInterval(intervalID);
    }
}
function showSpin(){
    var body = document.querySelector(".spin-offs .games1");
    opacity = Number(window.getComputedStyle(body)
                    .getPropertyValue("opacity"));
    if (opacity < 1) {
        opacity = opacity + 0.2;
        body.style.opacity = opacity
     } else {
         clearInterval(intervalID);
    }
}
mario()