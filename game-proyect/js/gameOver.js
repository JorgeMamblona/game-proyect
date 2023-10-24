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



        this.init()
    }


    init() {
        this.gameOver = document.createElement('div')

        this.gameOver.style.position = 'absolute'
        this.gameOver.style.width = `${this.gameOverSize.w}px`
        this.gameOver.style.height = `${this.gameOverSize.h}px`

        this.gameOver.style.top = `${this.gameOverPos.top}px`
        this.gameOver.style.left = `${this.gameOverPos.left}px`

        // this.gameOver.style.margin = 'auto'

        this.gameOver.style.backgroundColor = 'green'
        this.gameOver.style.zIndex = '5'

        this.gameScreen.appendChild(this.gameOver)


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