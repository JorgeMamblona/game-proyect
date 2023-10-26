class GameOver {
    constructor(gameScreen, gameSize,) {
        this.gameScreen = gameScreen

        this.gameOverSize = {
            w: gameSize.w,
            h: gameSize.h
        }

        this.gameOverPos = {
            top: 0,
            left: 0
        }

        this.gameLetraPos = {
            top: 300,
            left: 600
        }

        this.timeLivedPos = {
            top: 650,
            left: 623

        }



        this.init()
    }


    init() {
        this.gameOver = document.createElement('div')

        this.gameOver.style.position = 'absolute'
        this.gameOver.style.width = `${this.gameOverSize.w}px`
        this.gameOver.style.height = `${this.gameOverSize.h}px`

        this.gameOver.style.top = `${this.gameOverPos.top}px`
        this.gameOver.style.left = `${this.gameOverPos.left}px`
        this.gameOver.style.backgroundColor = 'grey'
        this.gameOver.style.zIndex = '5'

        this.gameScreen.appendChild(this.gameOver)



        this.gameLetra = document.createElement('div')

        this.gameLetra.style.width = `${this.gameOverSize.w}px`
        this.gameLetra.style.height = `${this.gameOverSize.h}px`

        this.gameLetra.style.top = `${this.gameLetraPos.top}px`
        this.gameLetra.style.left = `${this.gameLetraPos.left}px`


        this.gameLetra.style.position = `absolute`

        this.gameLetra.style.backgroundImage = `url(./img/gameOver.png)`
        this.gameLetra.style.backgroundRepeat = `no-repeat`
        this.gameOver.style.zIndex = '6'

        this.gameOver.appendChild(this.gameLetra)



        // this.timeLived = document.createElement('h2')

        // this.timeLived.style.width = `${this.gameOverSize.w / 3.5}px`
        // this.timeLived.style.height = `${this.gameOverSize.h / 3.5}px`

        // this.timeLived.style.top = `${this.timeLivedPos.top}px`
        // this.timeLived.style.left = `${this.timeLivedPos.left}px`

        // this.timeLived.style.backgroundColor = 'pink'
        // this.timeLived.style.position = `absolute`
        // this.timeLived.style.zIndex = '6'
        // this.timeLived.style.textAlign = 'center'
        // this.timeLived.style.borderRadius = '10px'

        // this.timeLived.innerHTML = 'ESTADISTICAS'

        // this.gameOver.appendChild(this.timeLived)




        this.time = document.createElement('p')

        this.time.style.width = `${this.gameOverSize.w / 12}px`
        this.time.style.height = `${this.gameOverSize.h} px`

        this.time.style.top = `${this.gameOverPos.top + 300}px`
        this.time.style.left = `${this.gameOverPos.left + 30}px`

        this.time.style.backgroundColor = ''
        this.time.style.position = 'absolute'
        this.time.style.zIndex = '7'
        this.time.style.fontSize = '1.8em'
        this.time.style.borderRadius = '10px'
        this.time.style.padding = '20px'



        this.time.innerHTML = 'has durado vivo' + '<br> </br>' + `${Game.frame.min}:${Game.frame.sec}` + '<br> </br>' + 'otra coosa'



        this.gameLetra.appendChild(this.time)








        this.enemyDead = document.createElement('p')

        this.enemyDead.style.width = `${this.gameOverSize.w / 12}px`
        this.enemyDead.style.height = `${this.gameOverSize.h} px`

        this.enemyDead.style.top = `${this.gameOverPos.top + 300}px`
        this.enemyDead.style.left = `${this.gameOverPos.left + 260}px`

        this.enemyDead.style.backgroundColor = ''
        this.enemyDead.style.position = 'absolute'
        this.enemyDead.style.zIndex = '7'
        this.enemyDead.style.fontSize = '1.8em'
        this.enemyDead.style.borderRadius = '10px'
        this.enemyDead.style.padding = '20px'



        this.enemyDead.innerHTML = 'vaquitas ordeñadas:' + '<br> </br>' + Game.deadEnemy



        this.gameLetra.appendChild(this.enemyDead)






    }

}