const c = (el)=>document.querySelector(el);
const cs = (el)=>document.querySelectorAll(el);

function mario(e){
    c('.main-series .games1').innerHTML = ''
    c('.spin-offs .games1').innerHTML = ''
    marioJson.map((item, index)=>{
        let gameItem = c('.models .game').cloneNode(true)
        gameItem.setAttribute('data-key', index);
        gameItem.querySelector('.img-preview-area img').src = item.pic
        gameItem.querySelector('.name-preview-area').innerHTML = item.name
        gameItem.querySelector('a').addEventListener('click', (e)=>{
            e.preventDefault()
            let key = e.target.closest('.game').getAttribute('data-key')
            c('.game-title').innerHTML = marioJson[key].name
            c('.desc-area').innerHTML = marioJson[key].desc
            c('.button-div a').href = marioJson[key].shop
            c('.trailer-area iframe').src = marioJson[key].video
            c('.game-info-wait').classList.add('hide')
            c('.game-info-area').classList.remove('hide')
        })
        c('.main-series .games1').append(gameItem)
    })
    marioJsonSpinoff.map((item, index)=>{
        let gameItem = c('.models .game').cloneNode(true)
        gameItem.setAttribute('data-key', index);
        gameItem.querySelector('.img-preview-area img').src = item.pic
        gameItem.querySelector('.name-preview-area').innerHTML = item.name
        gameItem.querySelector('a').addEventListener('click', (e)=>{
            e.preventDefault()
            let key = e.target.closest('.game').getAttribute('data-key')
            c('.game-title').innerHTML = marioJsonSpinoff[key].name
            c('.desc-area').innerHTML = marioJsonSpinoff[key].desc
            c('.button-div a').href = marioJsonSpinoff[key].shop
            c('.trailer-area iframe').src = marioJsonSpinoff[key].video
            c('.game-info-wait').classList.add('hide')
            c('.game-info-area').classList.remove('hide')
        })
        c('.spin-offs .games1').append(gameItem)
    })
    c('.game-info-area').classList.add('hide')
    c('.game-info-wait').classList.remove('hide')
    c('.spin-offs').classList.remove('hide')
    c('.game-selection-area .active').classList.remove('active')
    c('#first').classList.add('active')

}
function zelda(e){
    c('.main-series .games1').innerHTML = ''
    c('.spin-offs .games1').innerHTML = ''
    zeldaJson.map((item, index)=>{
        let gameItem = c('.models .game').cloneNode(true)
        gameItem.setAttribute('data-key', index);
        gameItem.querySelector('.img-preview-area img').src = item.pic
        gameItem.querySelector('.name-preview-area').innerHTML = item.name
        gameItem.querySelector('a').addEventListener('click', (e)=>{
            e.preventDefault()
            let key = e.target.closest('.game').getAttribute('data-key')
            c('.game-title').innerHTML = zeldaJson[key].name
            c('.desc-area').innerHTML = zeldaJson[key].desc
            c('.button-div a').href = zeldaJson[key].shop
            c('.trailer-area iframe').src = zeldaJson[key].video
            c('.game-info-wait').classList.add('hide')
            c('.game-info-area').classList.remove('hide')
        })
        c('.main-series .games1').append(gameItem)
    })
    zeldaJsonSpinoff.map((item, index)=>{
        let gameItem = c('.models .game').cloneNode(true)
        gameItem.querySelector('.img-preview-area img').src = item.pic
        gameItem.querySelector('.name-preview-area').innerHTML = item.name
        gameItem.setAttribute('data-key', index);
        gameItem.querySelector('a').addEventListener('click', (e)=>{
            e.preventDefault()
            let key = e.target.closest('.game').getAttribute('data-key')
            c('.game-title').innerHTML = zeldaJsonSpinoff[key].name
            c('.button-div a').href = zeldaJsonSpinoff[key].shop
            c('.trailer-area iframe').src = zeldaJsonSpinoff[key].video
            c('.game-info-wait').classList.add('hide')
            c('.game-info-area').classList.remove('hide')
        })
        c('.spin-offs .games1').append(gameItem)
    })
    c('.game-info-area').classList.add('hide')
    c('.game-info-wait').classList.remove('hide')
    c('.spin-offs').classList.remove('hide')
    c('.game-selection-area .active').classList.remove('active')
    e.target.classList.add('active')
}
function bayonetta(e){
    c('.main-series .games1').innerHTML = ''
    c('.spin-offs .games1').innerHTML = ''
    bayonettaJson.map((item, index)=>{
        let gameItem = c('.models .game').cloneNode(true)
        gameItem.setAttribute('data-key', index);
        gameItem.querySelector('.img-preview-area img').src = item.pic
        gameItem.querySelector('.name-preview-area').innerHTML = item.name
        gameItem.querySelector('a').addEventListener('click', (e)=>{
            e.preventDefault()
            let key = e.target.closest('.game').getAttribute('data-key')
            c('.game-title').innerHTML = bayonettaJson[key].name
            c('.button-div a').href = bayonettaJson[key].shop
            c('.trailer-area iframe').src = bayonettaJson[key].video
            c('.game-info-wait').classList.add('hide')
            c('.game-info-area').classList.remove('hide')
        })
        c('.main-series .games1').append(gameItem)
    })
    c('.game-info-area').classList.add('hide')
    c('.game-info-wait').classList.remove('hide')
    c('.spin-offs').classList.add('hide')
    c('.game-selection-area .active').classList.remove('active')
    e.target.classList.add('active')
}
function start(){
    c('.game-selection-area div').classList.add('active')
}
mario()
start()