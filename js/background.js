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

        this.background2Pos = {
            top: this.backgroundSize.h,
            left: 0
        }
        this.background3Pos = {
            top: -this.backgroundSize.h,
            left: 0
        }

        this.background4Pos = {
            top: 0,
            left: this.backgroundSize.w
        }

        this.background5Pos = {
            top: 0,
            left: -this.backgroundSize.w
        }

        this.background6Pos = {
            top: -this.backgroundSize.h,
            left: -this.backgroundSize.w
        }

        this.background7Pos = {
            top: -this.backgroundSize.h,
            left: this.backgroundSize.w
        }

        this.background8Pos = {
            top: this.backgroundSize.h,
            left: -this.backgroundSize.w
        }
        this.background9Pos = {
            top: this.backgroundSize.h,
            left: this.backgroundSize.w
        }


        this.backgroundVel = {
            top: 2,
            left: 2
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



        this.background2 = document.createElement('img')

        this.background2.src = './img/fondo.jpeg'

        this.background2.style.position = 'absolute'
        this.background2.style.width = `${this.backgroundSize.w}px`
        this.background2.style.height = `${this.backgroundSize.h}px`
        this.background2.style.left = `${this.background2Pos.left}px`
        this.background2.style.top = `${this.background2Pos.top}px`
        this.background2.style.backgroundRepeat = 'repeat'

        this.gameScreen.appendChild(this.background2)



        this.background3 = document.createElement('img')

        this.background3.src = './img/fondo.jpeg'

        this.background3.style.position = 'absolute'
        this.background3.style.width = `${this.backgroundSize.w}px`
        this.background3.style.height = `${this.backgroundSize.h}px`
        this.background3.style.left = `${this.background3Pos.left}px`
        this.background3.style.top = `${this.background3Pos.top}px`
        this.background3.style.backgroundRepeat = 'repeat'

        this.gameScreen.appendChild(this.background3)

        this.background4 = document.createElement('img')

        this.background4.src = './img/fondo.jpeg'

        this.background4.style.position = 'absolute'
        this.background4.style.width = `${this.backgroundSize.w}px`
        this.background4.style.height = `${this.backgroundSize.h}px`
        this.background4.style.left = `${this.background4Pos.left}px`
        this.background4.style.top = `${this.background4Pos.top}px`
        this.background4.style.backgroundRepeat = 'repeat'

        this.gameScreen.appendChild(this.background4)

        this.background5 = document.createElement('img')

        this.background5.src = './img/fondo.jpeg'

        this.background5.style.position = 'absolute'
        this.background5.style.width = `${this.backgroundSize.w}px`
        this.background5.style.height = `${this.backgroundSize.h}px`
        this.background5.style.left = `${this.background5Pos.left}px`
        this.background5.style.top = `${this.background5Pos.top}px`
        this.background5.style.backgroundRepeat = 'repeat'

        this.gameScreen.appendChild(this.background5)


        this.background6 = document.createElement('img')

        this.background6.src = './img/fondo.jpeg'

        this.background6.style.position = 'absolute'
        this.background6.style.width = `${this.backgroundSize.w}px`
        this.background6.style.height = `${this.backgroundSize.h}px`
        this.background6.style.left = `${this.background6Pos.left}px`
        this.background6.style.top = `${this.background6Pos.top}px`
        this.background6.style.backgroundRepeat = 'repeat'

        this.gameScreen.appendChild(this.background6)


        this.background7 = document.createElement('img')

        this.background7.src = './img/fondo.jpeg'

        this.background7.style.position = 'absolute'
        this.background7.style.width = `${this.backgroundSize.w}px`
        this.background7.style.height = `${this.backgroundSize.h}px`
        this.background7.style.left = `${this.background7Pos.left}px`
        this.background7.style.top = `${this.background7Pos.top}px`
        this.background7.style.backgroundRepeat = 'repeat'

        this.gameScreen.appendChild(this.background7)

        this.background8 = document.createElement('img')

        this.background8.src = './img/fondo.jpeg'

        this.background8.style.position = 'absolute'
        this.background8.style.width = `${this.backgroundSize.w}px`
        this.background8.style.height = `${this.backgroundSize.h}px`
        this.background8.style.left = `${this.background8Pos.left}px`
        this.background8.style.top = `${this.background8Pos.top}px`
        this.background8.style.backgroundRepeat = 'repeat'

        this.gameScreen.appendChild(this.background8)

        this.background9 = document.createElement('img')

        this.background9.src = './img/fondo.jpeg'

        this.background9.style.position = 'absolute'
        this.background9.style.width = `${this.backgroundSize.w}px`
        this.background9.style.height = `${this.backgroundSize.h}px`
        this.background9.style.left = `${this.background9Pos.left}px`
        this.background9.style.top = `${this.background9Pos.top}px`
        this.background9.style.backgroundRepeat = 'repeat'

        this.gameScreen.appendChild(this.background9)




    }

    move() {


    }

    moveUP() {
        this.background1Pos.top += this.backgroundVel.top
        this.background2Pos.top += this.backgroundVel.top
        this.background3Pos.top += this.backgroundVel.top
        this.background4Pos.top += this.backgroundVel.top
        this.background5Pos.top += this.backgroundVel.top
        this.background6Pos.top += this.backgroundVel.top
        this.background7Pos.top += this.backgroundVel.top
        this.background8Pos.top += this.backgroundVel.top
        this.background9Pos.top += this.backgroundVel.top
        this.move()
        this.updatePosition()
    }

    moveDOWN() {
        this.background1Pos.top -= this.backgroundVel.top
        this.background2Pos.top -= this.backgroundVel.top
        this.background3Pos.top -= this.backgroundVel.top
        this.background4Pos.top -= this.backgroundVel.top
        this.background5Pos.top -= this.backgroundVel.top
        this.background6Pos.top -= this.backgroundVel.top
        this.background7Pos.top -= this.backgroundVel.top
        this.background8Pos.top -= this.backgroundVel.top
        this.background9Pos.top -= this.backgroundVel.top
        this.move()
        this.updatePosition()
    }
    moveLEFT() {
        this.background1Pos.left += this.backgroundVel.left
        this.background2Pos.left += this.backgroundVel.left
        this.background3Pos.left += this.backgroundVel.left
        this.background4Pos.left += this.backgroundVel.left
        this.background5Pos.left += this.backgroundVel.left
        this.background6Pos.left += this.backgroundVel.left
        this.background7Pos.left += this.backgroundVel.left
        this.background8Pos.left += this.backgroundVel.left
        this.background9Pos.left += this.backgroundVel.left
        this.move()
        this.updatePosition()
    }
    moveRIGHT() {
        this.background1Pos.left -= this.backgroundVel.left
        this.background2Pos.left -= this.backgroundVel.left
        this.background3Pos.left -= this.backgroundVel.left
        this.background4Pos.left -= this.backgroundVel.left
        this.background5Pos.left -= this.backgroundVel.left
        this.background6Pos.left -= this.backgroundVel.left
        this.background7Pos.left -= this.backgroundVel.left
        this.background8Pos.left -= this.backgroundVel.left
        this.background9Pos.left -= this.backgroundVel.left
        this.move()
        this.updatePosition()
    }


    updatePosition() {
        this.background1.style.top = `${this.background1Pos.top}px`
        this.background1.style.left = `${this.background1Pos.left}px`

        this.background2.style.top = `${this.background2Pos.top}px`
        this.background2.style.left = `${this.background2Pos.left}px`

        this.background3.style.top = `${this.background3Pos.top}px`
        this.background3.style.left = `${this.background3Pos.left}px`

        this.background4.style.top = `${this.background4Pos.top}px`
        this.background4.style.left = `${this.background4Pos.left}px`

        this.background5.style.top = `${this.background5Pos.top}px`
        this.background5.style.left = `${this.background5Pos.left}px`

        this.background6.style.top = `${this.background6Pos.top}px`
        this.background6.style.left = `${this.background6Pos.left}px`


        this.background7.style.top = `${this.background7Pos.top}px`
        this.background7.style.left = `${this.background7Pos.left}px`

        this.background8.style.top = `${this.background8Pos.top}px`
        this.background8.style.left = `${this.background8Pos.left}px`

        this.background9.style.top = `${this.background9Pos.top}px`
        this.background9.style.left = `${this.background9Pos.left}px`
    }
}


