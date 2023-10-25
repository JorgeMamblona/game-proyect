class GameOver {
    constructor(gameScreen, gameSize) {
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




        this.gameOverText = document.createElement('h1')

        this.gameOverText.style.position = 'absolute'

        this.gameOverText.style.width = `${this.gameOverSize.w}px`
        this.gameOverText.style.height = `${this.gameOverSize.h}px`

        this.gameOverText.style.top = `${this.gameOverPos.top}px`
        this.gameOverText.style.left = `${this.gameOverPos.left}px`

        this.gameOverText.style.color = 'blue'
        this.gameOverText.style.zIndex = '6'

        this.gameOver.appendChild(this.gameOverText)
    }

}