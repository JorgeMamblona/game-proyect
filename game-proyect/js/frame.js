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
        this.frameZIndex = 2
        this.init()
    }

    init() {
        this.createTopFrame()
        this.createBottomFrame()
        this.createLeftFrame()
        this.createRightFrame()
    }

    createTopFrame() {
        this.frameTop = document.createElement('div')

        this.frameTop.style.position = 'absolute'
        this.frameTop.style.width = `${this.frameSize.w}px`
        this.frameTop.style.height = `${this.frameSize.h * this.frameMargin.top}px`

        this.frameTop.style.left = `${this.framePos.left}px`
        this.frameTop.style.top = `${this.framePos.top}px`

        this.frameTop.style.zIndex = this.frameZIndex
        this.frameTop.style.backgroundColor = 'Gray'


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
        this.frameBottom.style.backgroundColor = 'Gray'

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
        this.frameLeft.style.backgroundColor = 'Gray'

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
        this.frameRight.style.backgroundColor = 'Grey'

        this.gameScreen.appendChild(this.frameRight)
    }
}
