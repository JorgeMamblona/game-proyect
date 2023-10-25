class Background {

    constructor(gameScreen, gameSize) {
        this.gameScreen = gameScreen

        this.backgroundSize = {
            w: gameSize.w,
            h: gameSize.h
        }

        this.background1Pos = {
            top: 0,
            left: 0
        }

        this.backgroundVel = {
            top: 1,
            left: 1
        }


        this.init()
    }

    init() {
        this.background1 = document.createElement('img')

        this.background1.src = './img/fondo.jpeg'

        this.background1.style.position = 'absolute'
        this.background1.style.width = `${this.backgroundSize.w}px`
        this.background1.style.height = `${this.backgroundSize.h}px`
        this.background1.style.left = `${this.background1Pos.left}px`
        this.background1.style.top = `${this.background1Pos.top}px`
        this.background1.style.backgroundRepeat = 'repeat'

        this.gameScreen.appendChild(this.background1)
    }

    move() {

    }

    moveUP() {
        this.background1Pos.top += this.backgroundVel.top
        this.updatePosition()
    }

    moveDOWN() {
        this.background1Pos.top -= this.backgroundVel.top
        this.updatePosition()
    }
    moveLEFT() {
        this.background1Pos.left += this.backgroundVel.left
        this.updatePosition()
    }
    moveRIGHT() {
        this.background1Pos.left -= this.backgroundVel.left
        this.updatePosition()
    }


    updatePosition() {
        this.background1.style.top = `${this.background1Pos.top}px`
        this.background1.style.left = `${this.background1Pos.left}px`
    }
}
