class Frame {
    constructor(gameScreen, gameSize) {
        this.gameScreen = gameScreen
        this.gameSize = gameSize

        this.frameSize = {
            w: gameSize.w,
            h: gameSize.h
        }
        this.framePos = {
            top: 0,
            left: 0
        }

        this.frameMargin = {
            top: .10,
            left: .10
        }


        this.counterSize = {
            h: 100,
            w: 500
        }

        this.counterPos = {
            top: gameSize.h * this.frameMargin.top - this.counterSize.h,
            left: gameSize.w / 2 - this.counterSize.w / 2
        }

        this.sec = 0
        this.min = 0

        this.frameZIndex = 2
        this.init()
    }

    init() {
        this.createTopFrame()
        this.createBottomFrame()
        this.createLeftFrame()
        this.createRightFrame()
        this.createSecCounter()
    }

    createTopFrame() {
        this.frameTop = document.createElement('div')

        this.frameTop.style.position = 'absolute'
        this.frameTop.style.width = `${this.frameSize.w}px`
        this.frameTop.style.height = `${this.frameSize.h * this.frameMargin.top}px`

        this.frameTop.style.left = `${this.framePos.left}px`
        this.frameTop.style.top = `${this.framePos.top}px`

        this.frameTop.style.zIndex = this.frameZIndex
        this.frameTop.style.backgroundColor = '#83CB64'


        this.gameScreen.appendChild(this.frameTop)
    }

    createBottomFrame() {
        this.frameBottom = document.createElement('div')

        this.frameBottom.style.position = 'absolute'
        this.frameBottom.style.width = `${this.frameSize.w}px`
        this.frameBottom.style.height = `${this.frameSize.h * this.frameMargin.top}px`

        this.frameBottom.style.left = `${this.framePos.left}px`
        this.frameBottom.style.top = `${this.frameSize.h - this.frameSize.h * this.frameMargin.top}px`

        this.frameBottom.style.zIndex = this.frameZIndex
        this.frameBottom.style.backgroundColor = '#83CB64'

        this.gameScreen.appendChild(this.frameBottom)
    }
    createLeftFrame() {
        this.frameLeft = document.createElement('div')

        this.frameLeft.style.position = 'absolute'
        this.frameLeft.style.width = `${this.frameSize.w * this.frameMargin.left}px`
        this.frameLeft.style.height = `${this.frameSize.h}px`

        this.frameLeft.style.left = `${this.framePos.left}px`
        this.frameLeft.style.top = `${this.framePos.top}px`

        this.frameLeft.style.zIndex = this.frameZIndex
        this.frameLeft.style.backgroundColor = '#83CB64'

        this.gameScreen.appendChild(this.frameLeft)
    }

    createRightFrame() {
        this.frameRight = document.createElement('div')

        this.frameRight.style.position = 'absolute'
        this.frameRight.style.width = `${this.frameSize.w * this.frameMargin.left}px`
        this.frameRight.style.height = `${this.frameSize.h}px`

        this.frameRight.style.left = `${this.frameSize.w - this.frameSize.w * this.frameMargin.left}px`
        this.frameRight.style.top = `${this.framePos.top}px`

        this.frameRight.style.zIndex = this.frameZIndex
        this.frameRight.style.backgroundColor = '#83CB64'

        this.gameScreen.appendChild(this.frameRight)
    }

    createSecCounter() {
        this.SecCounter = document.createElement('h2')
        this.SecCounter.innerText = '00:00'

        this.SecCounter.innerText = this.sec;
        this.SecCounter.style.position = 'absolute'
        this.SecCounter.style.width = `${this.counterSize.w}px`
        this.SecCounter.style.height = `${this.counterSize.h}px`

        this.SecCounter.style.left = `${this.counterPos.left}px`
        this.SecCounter.style.top = `${this.counterPos.top}px`

        this.SecCounter.style.zIndex = this.frameZIndex + 1
        this.SecCounter.style.color = '#207641'
        this.SecCounter.style.textAlign = 'center'
        this.SecCounter.style.fontSize = '5em'

        this.gameScreen.appendChild(this.SecCounter)
    }


    incrementSeconds() {
        if (Game.frameCounter % 57 === 0) {
            this.sec++
            if (this.sec === 60) {
                this.min++
                this.sec = 0
            }
            if (this.sec < 10) {
                this.sec = '0' + this.sec.toString()
            }

            this.SecCounter.innerText = `${this.min}:${this.sec}`
        }

    }

}



