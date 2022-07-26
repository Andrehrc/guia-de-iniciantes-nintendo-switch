let marioJson = [
    {name: 'Super Mario Odyssey', pic: '../images/mario1.png', desc: '', video: 'https://www.youtube.com/embed/wGQHQc_3ycE', shop: 'https://www.nintendo.com/store/products/super-mario-odyssey-switch/'},
    {name: 'Super Mario 3D All Stars', pic: '../images/mario2.png', desc: '', video: 'https://www.youtube.com/embed/CPJcaGWoO2c', shop: 'https://www.nintendo.com/whatsnew/super-mario-3d-all-stars-leaves-nintendo-eshop-on-march-31st/'},
    {name: 'New Super Mario Bros U. Deluxe', pic: '../images/mario3.png', desc: '', video: 'https://www.youtube.com/embed/0LbHBMtHUw0', shop: 'https://www.nintendo.com/store/products/new-super-mario-bros-u-deluxe-switch/'},
    {name: "Super Mario 3D World + Bowser's Fury", pic: '../images/mario4.png', desc: '', video: 'https://www.youtube.com/embed/OPAQA_P_RQY', shop: 'https://www.nintendo.com/store/products/super-mario-3d-world-plus-bowsers-fury-switch/'}
]
let marioJsonSpinoff = [
    {name: 'Mario Kart 8 Deluxe', pic: '../images/mariospin1.png', desc: '', video: 'https://www.youtube.com/embed/tKlRN2YpxRE', shop: 'https://www.nintendo.com/store/products/mario-kart-8-deluxe-switch/'},
    {name: 'Mario + Rabbids Kingdom Battle', pic: '../images/mariospin2.png', desc: '', video: 'https://www.youtube.com/embed/DqH-iwA0ZmU', shop: 'https://www.nintendo.com/store/products/mario-plus-rabbids-kingdom-battle-switch/'},
    {name: 'Mario Tennis Aces', pic: '../images/mariospin3.png', desc: '', video: 'https://www.youtube.com/embed/jxrHwK-e1vk', shop: 'https://www.nintendo.com/store/products/mario-tennis-aces-switch/'},
    {name: 'Super Mario Party', pic: '../images/mariospin4.png', desc: '', video: 'https://www.youtube.com/embed/D7zTJLIYJds', shop: 'https://www.nintendo.com/store/products/super-mario-party-switch/'},
    {name: 'Super Mario Maker 2', pic: '../images/mariospin5.png', desc: '', video: 'https://www.youtube.com/embed/AjJWzJC8Kfk', shop: 'https://www.nintendo.com/store/products/super-mario-maker-2-switch/'},
    {name: 'Paper Mario - The Origami King', pic: '../images/mariospin6.png', desc: '', video: 'https://www.youtube.com/embed/FX6DTLcWUdY', shop: 'https://www.nintendo.com/store/products/paper-mario-the-origami-king-switch/'},
    {name: 'Mario Golf: Super Rush', pic: '../images/mariospin7.png', desc: '', video: 'https://www.youtube.com/embed/aucAzFWpvMc', shop: 'https://www.nintendo.com/store/products/mario-golf-super-rush-switch/'},
    {name: 'Mario Party Superstars', pic: '../images/mariospin8.png', desc: '', video: 'https://www.youtube.com/embed/2jEq0F656aY', shop: 'https://www.nintendo.com/store/products/mario-party-superstars-switch/'},
    {name: 'Mario Strikers: Battle League', pic: '../images/mariospin9.png', desc: '', video: 'https://www.youtube.com/embed/cLAzzYz92r4', shop: 'https://www.nintendo.com/store/products/mario-strikers-battle-league-switch/'},
    {name: 'Mario + Rabbids Sparks of Hope', pic: '../images/mariospin10.png', desc: '', video: 'https://www.youtube.com/embed/vMNBC8lRtvY', shop: 'https://www.nintendo.com/store/products/mario-plus-rabbids-sparks-of-hope-switch/'}
]
let marioJsonVC = [
    {name: 'Super Mario Bros', pic: '../images/mariovc1.png', desc: '', video: 'https://www.youtube.com/embed/1OpjeZMCsEU', shop: 'https://www.nintendo.com/store/products/nintendo-entertainment-system-nintendo-switch-online-switch/'},
    {name: 'Super Mario Bros 2', pic: '../images/mariovc2.png', desc: '', video: 'https://www.youtube.com/embed/ZU6_I-6lPj8', shop: 'https://www.nintendo.com/store/products/nintendo-entertainment-system-nintendo-switch-online-switch/'},
    {name: 'Super Mario Bros 3', pic: '../images/mariovc3.png', desc: '', video: 'https://www.youtube.com/embed/1OpjeZMCsEU', shop: 'https://www.nintendo.com/store/products/nintendo-entertainment-system-nintendo-switch-online-switch/'},
    {name: 'Super Mario World', pic: '../images/mariovc4.png', desc: '', video: 'https://www.youtube.com/embed/esNJUSMsDG4', shop: 'https://www.nintendo.com/store/products/super-nintendo-entertainment-system-nintendo-switch-online-switch/'},
    {name: "Super Mario World 2 - Yoshi's Island", pic: '../images/mariovc5.png', desc: '', video: 'https://www.youtube.com/embed/esNJUSMsDG4', shop: 'https://www.nintendo.com/store/products/super-nintendo-entertainment-system-nintendo-switch-online-switch/'},
    {name: 'Super Mario All Stars', pic: '../images/mariovc6.png', desc: '', video: 'https://www.youtube.com/embed/esNJUSMsDG4', shop: 'https://www.nintendo.com/store/products/super-nintendo-entertainment-system-nintendo-switch-online-switch/'},
    {name: 'Wrecking Crew', pic: '../images/mariovc7.png', desc: '', video: 'https://www.youtube.com/embed/xS888LOC66w?start=27', shop: 'https://www.nintendo.com/store/products/nintendo-entertainment-system-nintendo-switch-online-switch/'},
    {name: 'Super Mario Bros - Lost Levels', pic: '../images/mariovc8.png', desc: '', video: 'https://www.youtube.com/embed/UJDYwXNYt9U?start=64', shop: 'https://www.nintendo.com/store/products/nintendo-entertainment-system-nintendo-switch-online-switch/'},
    {name: 'Dr. Mario', pic: '../images/mariovc9.png', desc: '', video: 'https://www.youtube.com/embed/1OpjeZMCsEU', shop: 'https://www.nintendo.com/store/products/nintendo-entertainment-system-nintendo-switch-online-switch/'},
    {name: 'Super Mario Kart', pic: '../images/mariovc10.png', desc: '', video: 'https://www.youtube.com/embed/esNJUSMsDG4', shop: 'https://www.nintendo.com/store/products/super-nintendo-entertainment-system-nintendo-switch-online-switch/'},
    {name: 'Mario Kart 64', pic: '../images/mariovc11.png', desc: '', video: 'https://www.youtube.com/embed/qx1BBrokwjA', shop: 'https://www.nintendo.com/store/products/nintendo-64-nintendo-switch-online-switch/'},
    {name: 'Mario Tennis', pic: '../images/mariovc12.png', desc: '', video: 'https://www.youtube.com/embed/qx1BBrokwjA', shop: 'https://www.nintendo.com/store/products/nintendo-64-nintendo-switch-online-switch/'}
]


let zeldaJson = [
    {name: 'The Legend of Zelda - Breath of the Wild', pic: '../images/zelda1.png', desc: '', video: '', shop: ''},
    {name: "The Legend of Zelda - Link's Awakening", pic: '../images/zelda2.png', desc: '', video: '', shop: ''},
    {name: 'The Legend of Zelda - Skyward Sword', pic: '../images/zelda3.png', desc: '', video: '', shop: ''}
]
let zeldaJsonSpinoff = [
    {name: 'Hyrule Warriors - Definitive Edition', pic: '../images/zeldaspin1.png', desc:'', video:'https://www.youtube.com/embed/DUzdlDiFUyU', shop:'https://www.nintendo.com/store/products/hyrule-warriors-definitive-edition-switch/'},
    {name: 'Hyrule Warriors - Age of Calamity', pic: '../images/zeldaspin2.png', desc:'', video:'https://www.youtube.com/embed/jmzvNn4682A', shop:'https://www.nintendo.com/store/products/hyrule-warriors-age-of-calamity-switch/'},
    {name: 'Cadence of Hyrule', pic: '../images/zeldaspin3.png', desc:'', video:'https://www.youtube.com/embed/ATtLpjXTc7I', shop:'https://www.nintendo.com/store/products/cadence-of-hyrule-crypt-of-the-necrodancer-featuring-the-legend-of-zelda-switch/'}
]
let zeldaJsonVC = [
    {name: 'The Legend of Zelda', pic: '../images/zeldavc1.png', desc: 'O primeiro jogo da série The Legend of Zelda , foi originalmente lançado no Japão como um jogo de lançamento para o Family Computer Disk System em fevereiro de 1986. O game incorpora elementos de jogos de RPG, ação e aventura. O jogador controla Link numa perspectiva aérea enquanto ele viaja num grande mapa ao ar livre com ambientes variados. O jogo está disponível no Nintendo Switch através do programa de benefícios para assinantes do Nintendo Switch Online, através do software Nintendo Entertainment System™ - Nintendo Switch Online', video: 'https://www.youtube.com/embed/1OpjeZMCsEU', shop:'https://www.nintendo.com/store/products/nintendo-entertainment-system-nintendo-switch-online-switch/'},
    {name: 'Zelda 2: The Adventure of Link', pic: '../images/zeldavc2.png', desc:'O segundo jogo da serie de The Legend of Zelda, sendo uma continuação direta ao primeiro game. O jogo trás inovações no estilo de gameplay 2d, além da ja conhecida perspectiva aérea. O jogo está disponível no Nintendo Switch através do programa de benefícios para assinantes do Nintendo Switch Online, através do software Nintendo Entertainment System™ - Nintendo Switch Online', video:'https://www.youtube.com/embed/oCona7Kxqg8?start=28', shop:'https://www.nintendo.com/store/products/nintendo-entertainment-system-nintendo-switch-online-switch/'},
    {name: 'The Legend of Zelda - A Link to the Past', pic: '../images/zeldavc3.png', desc: '', video: 'https://www.youtube.com/embed/esNJUSMsDG4', shop: 'https://www.nintendo.com/store/products/super-nintendo-entertainment-system-nintendo-switch-online-switch/'},
    {name: 'The Legend of Zelda - Ocarina of Time', pic: '../images/zeldavc4.png', desc:'', video:'https://www.youtube.com/embed/qx1BBrokwjA', shop:'https://www.nintendo.com/store/products/nintendo-64-nintendo-switch-online-switch/'},
    {name: "The Legend of Zelda - Majora's Mask", pic: '../images/zeldavc5.png', desc:'', video:'https://www.youtube.com/embed/fTv_p5hEu0A', shop:'https://www.nintendo.com/store/products/nintendo-64-nintendo-switch-online-switch/'}
]


let pokemonJson = [
    {name: 'Pokémon Sword & Shield', pic: '../images/poke1.png', desc: '', video: '', shop: ''},
    {name: 'Pokémon Brilliant Diamond & Shinning Pearl', pic: '../images/poke2.png', desc: '', video: '', shop: ''},
    {name: 'Pokémon Skarlet & Violet', pic: '../images/poke3.png', desc: '', video: '', shop: ''}
]
let pokemonJsonSpinoff = [
    {name: 'Pokkén Tournament DX', pic: '../images/pokespin1.png', desc: '', video: '', shop: ''},
    {name: "Pokémon Let's Go Pikachu & Eevee", pic: '../images/pokespin2.png', desc: '', video: '', shop: ''},
    {name: 'Pokémon Mystery Dungeon: Rescue Team DX', pic: '../images/pokespin3.png', desc: '', video: '', shop: ''},
    {name: 'New Pokémon Snap', pic: '../images/pokespin4.png', desc: '', video: '', shop: ''},
    {name: 'Pokémon Unite', pic: '../images/pokespin5.png', desc: '', video: '', shop: ''},
    {name: 'Pokémon Legends: Arceus', pic: '../images/pokespin6.png', desc: '', video: '', shop: ''}
]
let pokemonJsonVC = [
    {name: 'Pokémon Puzzle League', pic: '../images/pokevc1.png', desc: '', video: '', shop: 'https://www.nintendo.com/store/products/nintendo-64-nintendo-switch-online-switch/'},
    {name: 'Pokémon Snap', pic: '../images/pokevc2.png', desc: '', video: '', shop: 'https://www.nintendo.com/store/products/nintendo-64-nintendo-switch-online-switch/'},
]


let kirbyJson = [
    {name: 'Kirby Star Allies', pic: '../images/kirby1.png', desc: '', video: '', shop: ''},
    {name: 'Kirby and the Forgotten Land', pic: '../images/kirby2.png', desc: '', video: '', shop: ''}
]
let kirbyJsonSpinoff = [
    {name: 'Super Kirby Clash', pic: '../images/kirbyspin1.png', desc: '', video: '', shop: ''},
    {name: 'Kirby Fighters 2', pic: '../images/kirbyspin2.png', desc: '', video: '', shop: ''},
    {name: "Kirby's Dream Buffet", pic: '../images/kirbyspin3.png', desc: '', video: '', shop: ''}
]
let kirbyJsonVC = [
    {name: "Kirby's Adventure", pic: '../images/kirbyvc1.png', desc: '', video: '', shop: 'https://www.nintendo.com/store/products/nintendo-entertainment-system-nintendo-switch-online-switch/'},
    {name: "Kirby's Dream Course", pic: '../images/kirbyvc2.png', desc: '', video: '', shop: 'https://www.nintendo.com/store/products/super-nintendo-entertainment-system-nintendo-switch-online-switch/'},
    {name: "Kirby's Avalanche", pic: '../images/kirbyvc3.png', desc: '', video: 'https://www.youtube.com/embed/yxju2frV6PI?start=31', shop: 'https://www.nintendo.com/store/products/super-nintendo-entertainment-system-nintendo-switch-online-switch/'},
    {name: 'Kirby Super Star', pic: '../images/kirbyvc4.png', desc: '', video: '', shop: 'https://www.nintendo.com/store/products/super-nintendo-entertainment-system-nintendo-switch-online-switch/'},
    {name: "Kirby's Dream Land 3", pic: '../images/kirbyvc5.png', desc: '', video: '', shop: 'https://www.nintendo.com/store/products/super-nintendo-entertainment-system-nintendo-switch-online-switch/'},
    {name: 'Kirby 64: The Crystal Shards', pic: '../images/kirbyvc6.png', desc: '', video: 'https://www.youtube.com/embed/qx1BBrokwjA', shop: 'https://www.nintendo.com/store/products/nintendo-64-nintendo-switch-online-switch/'}
]


let metroidJson = [
    {name: 'Metroid Dread', pic: '../images/metroid1.png', desc: '', video: 'https://www.youtube.com/embed/8NjCICl7dDo', shop: 'https://www.nintendo.com/store/products/metroid-dread-switch/'}
]
let metroidJsonVC = [
    {name: 'Metroid', pic: '../images/metroidvc1.png', desc: '', video: 'https://www.youtube.com/embed/1OpjeZMCsEU', shop: 'https://www.nintendo.com/store/products/nintendo-entertainment-system-nintendo-switch-online-switch/'},
    {name: 'Super Metroid', pic: '../images/metroidvc2.png', desc: '', video: 'https://www.youtube.com/embed/esNJUSMsDG4', shop: 'https://www.nintendo.com/store/products/super-nintendo-entertainment-system-nintendo-switch-online-switch/'}
]


let bayonettaJson = [
    {name: 'Bayonetta', pic: '../images/bayo1.png', desc:'', video:'https://www.youtube.com/embed/XN-lQc2slvM', shop:'https://www.nintendo.com/store/products/bayonetta-switch/'},
    {name: 'Bayonetta 2', pic: '../images/bayo2.png', desc:'', video:'https://www.youtube.com/embed/3SxJGDofOfo', shop:'https://www.nintendo.com/store/products/bayonetta-2-switch/'},
    {name: 'Bayonetta 3', pic: '../images/bayo3.png', desc:'', video:'https://www.youtube.com/embed/N6a5-8_kt3E', shop:'https://www.nintendo.com/store/products/bayonetta-3-switch/'}
]


let outrosJson = [
    {name: 'Hollow Knight', pic: '../images/.png', desc: '', video: '', shop: ''},
    {name: 'Super Smash Bros Ultimate', pic: '../images/.png', desc: '', video: '', shop: ''},
    {name: '', pic: '../images/.png', desc: '', video: '', shop: ''}
]
// {name: '', pic: '../images/.png', desc: '', video: '', shop: ''}