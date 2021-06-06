var largura = 0
var altura = 0
var tempo = 15
var vida = 3

var cronometro = setInterval(function () {
    if (tempo < 0) {
        clearInterval(cronometro) // Para limpar o intervalo correspondente a variavel 'cronometro' e este não continuar executanto após alcancar o zero
        clearInterval(geraMosquito) // Para limpar o intervalo correspondente a variavel 'geraMosquito' e este não continuar executanto após alcancar o zero
        window.location.href = '../html/victory.html'
    } else {
        document.getElementById('tempo-cronometro').innerHTML = tempo
        tempo -= 1
    }
}, 1000)

function velocidadeNivel() {
    var nivel = window.location.search
    nivel = nivel.replace('?', '')

    switch (nivel) {
        case 'facil':
            return 1400
        case 'normal':
            return 1100
        case 'dificil':
            return 900
    }
}

function areaJogavel() {
    largura = window.innerWidth
    altura = window.innerHeight
}
areaJogavel()

function getRandom(max) {
    return Math.floor(Math.random() * (max - 200) + 50)
}

function mosquitoAleatorio() {
    if (document.getElementById('idMosquito')) {
        document.getElementById('idMosquito').remove() // Caso já exista um elemento, este será removido antes de gerar nova imagem

        // A imagem 'coracao_cheio' sera substituida pela imagem 'coracao_vazio' caso o elemento nao tenha sido removido no onclick
        if (vida <= 0) {
            window.location.href = '../html/game_over.html'
        } else {
            document.getElementById('v' + vida).src = "../img/coracao_vazio.png"
            vida--
        }
    }

    var randomicoLargura = getRandom(largura)
    var randomicoAltura = getRandom(altura)
    console.log('Random: ' + randomicoLargura, randomicoAltura)

    // Comando para gerar elemento 'img'
    var mosquito = document.createElement('img')
    mosquito.src = "../img/mosca.png"
    mosquito.style.left = randomicoLargura + 'px'
    mosquito.style.top = randomicoAltura + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'idMosquito'
    mosquito.className = tamanhoMosquitoAleatorio() + ' ' + espelhadoMosquitoAleatorio()
    mosquito.onclick = function () {
        document.getElementById('idMosquito').remove() // Após clicar no mosquito, este elemento devera ser removido
    }

    document.body.appendChild(mosquito)
}

function tamanhoMosquitoAleatorio() {
    var tamanho = Math.floor(Math.random() * 3)

    switch (tamanho) {
        case 0:
            return 'mosquito0'
        case 1:
            return 'mosquito1'
        case 2:
            return 'mosquito2'
    }
}

function espelhadoMosquitoAleatorio() {
    var espelhado = Math.floor(Math.random() * 2)

    switch (espelhado) {
        case 0:
            return ''
        case 1:
            return 'espelhado'
    }
}

