class Player {

    constructor(gameScreen, gameSize) {
        this.gameScreen = gameScreen
        this.gameSize = gameSize

        this.playerSize = {
            w: 20,
            h: 20
        }

        this.playerPos = {
            top: (gameSize.h / 2) - (this.playerSize.h / 2),
            left: (gameSize.w / 2) - (this.playerSize.h / 2)
        }

        this.playerVel = {
            top: 3,
            left: 3
        }


        this.init()
    }


    init() {
        this.player = document.createElement('div')

        this.player.style.position = 'absolute'

        this.player.style.width = `${this.playerSize.w}px`
        this.player.style.height = `${this.playerSize.h}px`

        this.player.style.top = `${this.playerPos.top}px`
        this.player.style.left = `${this.playerPos.left}px`

        this.player.style.backgroundColor = 'DeepPink'

        this.gameScreen.appendChild(this.player)
    }

    move() {
        this.playerPos.top += this.playerVel.top
        this.playerPos.left += this.playerVel.left
        this.updatePosition()
    }

    updatePosition() {
        this.player.style.top = `${this.playerPos.top}px`
        this.player.style.left = `${this.playerPos.left}px`
    }
}
