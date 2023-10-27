class PlayerShadow {
    constructor(gameScreen, player) {
        this.gameScreen = gameScreen
        this.player = player


        this.ShadowPos = {
            top: this.player.playerPos.top - 3,
            left: this.player.playerPos.left - 3
        }

        this.ShadowSize = {
            top: this.player.playerSize.top - 3,
            left: this.player.playerSize.left - 3
        }
        this.init()

    }
    init() {
        this.pShadow = document.createElement('div')

        this.pShadow.style.position = 'absolute'

        this.pShadow.style.width = `${this.ShadowSize.w}px`
        this.pShadow.style.height = `${this.ShadowSize.h}px`

        this.pShadow.style.top = `${this.ShadowPos.top}px`
        this.pShadow.style.left = `${this.ShadowPos.left}px`

        this.pShadow.style.zIndex = '0'
        this.pShadow.style.backgroundColor = 'yellow'

        this.gameScreen.appendChild(this.pShadow)
    }


    updatePosition() {
        this.pShadow.style.top = `${this.ShadowPos.top}px`
        this.pShadow.style.left = `${this.ShadowPos.left}px`
    }
}

