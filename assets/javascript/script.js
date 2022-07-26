const c = (el)=>document.querySelector(el);
const cs = (el)=>document.querySelectorAll(el);

function mario(e){
    c('.main-series .games1').innerHTML = ''
    c('.spin-offs .games1').innerHTML = ''
    c('.virtual-console .games1').innerHTML = ''
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
    marioJsonVC.map((item, index)=>{
        let gameItem = c('.models .game').cloneNode(true)
        gameItem.setAttribute('data-key', index);
        gameItem.querySelector('.img-preview-area img').src = item.pic
        gameItem.querySelector('.name-preview-area').innerHTML = item.name
        gameItem.querySelector('a').addEventListener('click', (e)=>{
            e.preventDefault()
            let key = e.target.closest('.game').getAttribute('data-key')
            c('.game-title').innerHTML = marioJsonVC[key].name
            c('.desc-area').innerHTML = marioJsonVC[key].desc
            c('.button-div a').href = marioJsonVC[key].shop
            c('.trailer-area iframe').src = marioJsonVC[key].video
            c('.game-info-wait').classList.add('hide')
            c('.game-info-area').classList.remove('hide')
        })
        c('.virtual-console .games1').append(gameItem)
    })
    c('.game-info-area').classList.add('hide')
    c('.game-info-wait').classList.remove('hide')
    c('.spin-offs').classList.remove('hide')
    c('.virtual-console').classList.remove('hide')
    c('.game-selection-area .active').classList.remove('active')
    c('#first').classList.add('active')
}


function zelda(e){
    c('.main-series .games1').innerHTML = ''
    c('.spin-offs .games1').innerHTML = ''
    c('.virtual-console .games1').innerHTML = ''
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
    zeldaJsonVC.map((item, index)=>{
        let gameItem = c('.models .game').cloneNode(true)
        gameItem.setAttribute('data-key', index);
        gameItem.querySelector('.img-preview-area img').src = item.pic
        gameItem.querySelector('.name-preview-area').innerHTML = item.name
        gameItem.querySelector('a').addEventListener('click', (e)=>{
            e.preventDefault()
            let key = e.target.closest('.game').getAttribute('data-key')
            c('.game-title').innerHTML = zeldaJsonVC[key].name
            c('.desc-area').innerHTML = zeldaJsonVC[key].desc
            c('.button-div a').href = zeldaJsonVC[key].shop
            c('.trailer-area iframe').src = zeldaJsonVC[key].video
            c('.game-info-wait').classList.add('hide')
            c('.game-info-area').classList.remove('hide')
        })
        c('.virtual-console .games1').append(gameItem)
    })
    c('.game-info-area').classList.add('hide')
    c('.game-info-wait').classList.remove('hide')
    c('.spin-offs').classList.remove('hide')
    c('.virtual-console').classList.remove('hide')
    c('.game-selection-area .active').classList.remove('active')
    e.target.classList.add('active')
}


function pokemon(e){
    c('.main-series .games1').innerHTML = ''
    c('.spin-offs .games1').innerHTML = ''
    c('.virtual-console .games1').innerHTML = ''
    pokemonJson.map((item, index)=>{
        let gameItem = c('.models .game').cloneNode(true)
        gameItem.setAttribute('data-key', index);
        gameItem.querySelector('.img-preview-area img').src = item.pic
        gameItem.querySelector('.name-preview-area').innerHTML = item.name
        gameItem.querySelector('a').addEventListener('click', (e)=>{
            e.preventDefault()
            let key = e.target.closest('.game').getAttribute('data-key')
            c('.game-title').innerHTML = pokemonJson[key].name
            c('.desc-area').innerHTML = pokemonJson[key].desc
            c('.button-div a').href = pokemonJson[key].shop
            c('.trailer-area iframe').src = pokemonJson[key].video
            c('.game-info-wait').classList.add('hide')
            c('.game-info-area').classList.remove('hide')
        })
        c('.main-series .games1').append(gameItem)
    })
    pokemonJsonSpinoff.map((item, index)=>{
        let gameItem = c('.models .game').cloneNode(true)
        gameItem.querySelector('.img-preview-area img').src = item.pic
        gameItem.querySelector('.name-preview-area').innerHTML = item.name
        gameItem.setAttribute('data-key', index);
        gameItem.querySelector('a').addEventListener('click', (e)=>{
            e.preventDefault()
            let key = e.target.closest('.game').getAttribute('data-key')
            c('.game-title').innerHTML = pokemonJsonSpinoff[key].name
            c('.desc-area').innerHTML = pokemonJsonSpinoff[key].desc
            c('.button-div a').href = pokemonJsonSpinoff[key].shop
            c('.trailer-area iframe').src = pokemonJsonSpinoff[key].video
            c('.game-info-wait').classList.add('hide')
            c('.game-info-area').classList.remove('hide')
        })
        c('.spin-offs .games1').append(gameItem)
    })
    pokemonJsonVC.map((item, index)=>{
        let gameItem = c('.models .game').cloneNode(true)
        gameItem.querySelector('.img-preview-area img').src = item.pic
        gameItem.querySelector('.name-preview-area').innerHTML = item.name
        gameItem.setAttribute('data-key', index);
        gameItem.querySelector('a').addEventListener('click', (e)=>{
            e.preventDefault()
            let key = e.target.closest('.game').getAttribute('data-key')
            c('.game-title').innerHTML = pokemonJsonVC[key].name
            c('.desc-area').innerHTML = pokemonJsonVC[key].desc
            c('.button-div a').href = pokemonJsonVC[key].shop
            c('.trailer-area iframe').src = pokemonJsonVC[key].video
            c('.game-info-wait').classList.add('hide')
            c('.game-info-area').classList.remove('hide')
        })
        c('.virtual-console .games1').append(gameItem)
    })
    c('.game-info-area').classList.add('hide')
    c('.game-info-wait').classList.remove('hide')
    c('.spin-offs').classList.remove('hide')
    c('.virtual-console').classList.remove('hide')
    c('.game-selection-area .active').classList.remove('active')
    e.target.classList.add('active')
}


function kirby(e){
    c('.main-series .games1').innerHTML = ''
    c('.spin-offs .games1').innerHTML = ''
    c('.virtual-console .games1').innerHTML = ''
    kirbyJson.map((item, index)=>{
        let gameItem = c('.models .game').cloneNode(true)
        gameItem.setAttribute('data-key', index);
        gameItem.querySelector('.img-preview-area img').src = item.pic
        gameItem.querySelector('.name-preview-area').innerHTML = item.name
        gameItem.querySelector('a').addEventListener('click', (e)=>{
            e.preventDefault()
            let key = e.target.closest('.game').getAttribute('data-key')
            c('.game-title').innerHTML = kirbyJson[key].name
            c('.desc-area').innerHTML = kirbyJson[key].desc
            c('.button-div a').href = kirbyJson[key].shop
            c('.trailer-area iframe').src = kirbyJson[key].video
            c('.game-info-wait').classList.add('hide')
            c('.game-info-area').classList.remove('hide')
        })
        c('.main-series .games1').append(gameItem)
    })
    kirbyJsonSpinoff.map((item, index)=>{
        let gameItem = c('.models .game').cloneNode(true)
        gameItem.querySelector('.img-preview-area img').src = item.pic
        gameItem.querySelector('.name-preview-area').innerHTML = item.name
        gameItem.setAttribute('data-key', index);
        gameItem.querySelector('a').addEventListener('click', (e)=>{
            e.preventDefault()
            let key = e.target.closest('.game').getAttribute('data-key')
            c('.game-title').innerHTML = kirbyJsonSpinoff[key].name
            c('.desc-area').innerHTML = kirbyJsonSpinoff[key].desc
            c('.button-div a').href = kirbyJsonSpinoff[key].shop
            c('.trailer-area iframe').src = kirbyJsonSpinoff[key].video
            c('.game-info-wait').classList.add('hide')
            c('.game-info-area').classList.remove('hide')
        })
        c('.spin-offs .games1').append(gameItem)
    })
    kirbyJsonVC.map((item, index)=>{
        let gameItem = c('.models .game').cloneNode(true)
        gameItem.setAttribute('data-key', index);
        gameItem.querySelector('.img-preview-area img').src = item.pic
        gameItem.querySelector('.name-preview-area').innerHTML = item.name
        gameItem.querySelector('a').addEventListener('click', (e)=>{
            e.preventDefault()
            let key = e.target.closest('.game').getAttribute('data-key')
            c('.game-title').innerHTML = kirbyJsonVC[key].name
            c('.desc-area').innerHTML = kirbyJsonVC[key].desc
            c('.button-div a').href = kirbyJsonVC[key].shop
            c('.trailer-area iframe').src = kirbyJsonVC[key].video
            c('.game-info-wait').classList.add('hide')
            c('.game-info-area').classList.remove('hide')
        })
        c('.virtual-console .games1').append(gameItem)
    })
    c('.game-info-area').classList.add('hide')
    c('.game-info-wait').classList.remove('hide')
    c('.spin-offs').classList.remove('hide')
    c('.virtual-console').classList.remove('hide')
    c('.game-selection-area .active').classList.remove('active')
    e.target.classList.add('active')
}


function metroid(e){
    c('.main-series .games1').innerHTML = ''
    c('.spin-offs .games1').innerHTML = ''
    c('.virtual-console .games1').innerHTML = ''
    metroidJson.map((item, index)=>{
        let gameItem = c('.models .game').cloneNode(true)
        gameItem.setAttribute('data-key', index);
        gameItem.querySelector('.img-preview-area img').src = item.pic
        gameItem.querySelector('.name-preview-area').innerHTML = item.name
        gameItem.querySelector('a').addEventListener('click', (e)=>{
            e.preventDefault()
            let key = e.target.closest('.game').getAttribute('data-key')
            c('.game-title').innerHTML = metroidJson[key].name
            c('.desc-area').innerHTML = metroidJson[key].desc
            c('.button-div a').href = metroidJson[key].shop
            c('.trailer-area iframe').src = metroidJson[key].video
            c('.game-info-wait').classList.add('hide')
            c('.game-info-area').classList.remove('hide')
        })
        c('.main-series .games1').append(gameItem)
    })
    metroidJsonVC.map((item, index)=>{
        let gameItem = c('.models .game').cloneNode(true)
        gameItem.setAttribute('data-key', index);
        gameItem.querySelector('.img-preview-area img').src = item.pic
        gameItem.querySelector('.name-preview-area').innerHTML = item.name
        gameItem.querySelector('a').addEventListener('click', (e)=>{
            e.preventDefault()
            let key = e.target.closest('.game').getAttribute('data-key')
            c('.game-title').innerHTML = metroidJsonVC[key].name
            c('.desc-area').innerHTML = metroidJsonVC[key].desc
            c('.button-div a').href = metroidJsonVC[key].shop
            c('.trailer-area iframe').src = metroidJsonVC[key].video
            c('.game-info-wait').classList.add('hide')
            c('.game-info-area').classList.remove('hide')
        })
        c('.virtual-console .games1').append(gameItem)
    })
    c('.game-info-area').classList.add('hide')
    c('.game-info-wait').classList.remove('hide')
    c('.spin-offs').classList.add('hide')
    c('.virtual-console').classList.remove('hide')
    c('.game-selection-area .active').classList.remove('active')
    e.target.classList.add('active')
}


function bayonetta(e){
    c('.main-series .games1').innerHTML = ''
    c('.spin-offs .games1').innerHTML = ''
    c('.virtual-console .games1').innerHTML = ''
    bayonettaJson.map((item, index)=>{
        let gameItem = c('.models .game').cloneNode(true)
        gameItem.setAttribute('data-key', index);
        gameItem.querySelector('.img-preview-area img').src = item.pic
        gameItem.querySelector('.name-preview-area').innerHTML = item.name
        gameItem.querySelector('a').addEventListener('click', (e)=>{
            e.preventDefault()
            let key = e.target.closest('.game').getAttribute('data-key')
            c('.game-title').innerHTML = bayonettaJson[key].name
            c('.desc-area').innerHTML = bayonettaJson[key].desc
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
    c('.virtual-console').classList.add('hide')
    c('.game-selection-area .active').classList.remove('active')
    e.target.classList.add('active')
}
function start(){
    c('.game-selection-area div').classList.add('active')
}

function outros(e){
    c('.main-series .games1').innerHTML = ''
    c('.spin-offs .games1').innerHTML = ''
    c('.virtual-console .games1').innerHTML = ''
    outrosJson.map((item, index)=>{
        let gameItem = c('.models .game').cloneNode(true)
        gameItem.setAttribute('data-key', index);
        gameItem.querySelector('.img-preview-area img').src = item.pic
        gameItem.querySelector('.name-preview-area').innerHTML = item.name
        gameItem.querySelector('a').addEventListener('click', (e)=>{
            e.preventDefault()
            let key = e.target.closest('.game').getAttribute('data-key')
            c('.game-title').innerHTML = outrosJson[key].name
            c('.button-div a').href = outrosJson[key].shop
            c('.trailer-area iframe').src = outrosJson[key].video
            c('.game-info-wait').classList.add('hide')
            c('.game-info-area').classList.remove('hide')
        })
        c('.main-series .games1').append(gameItem)
    })
    c('.game-info-area').classList.add('hide')
    c('.game-info-wait').classList.remove('hide')
    c('.spin-offs').classList.add('hide')
    c('.virtual-console').classList.add('hide')
    c('.game-selection-area .active').classList.remove('active')
    e.target.classList.add('active')
}
function start(){
    c('.game-selection-area div').classList.add('active')
}



mario()
start()