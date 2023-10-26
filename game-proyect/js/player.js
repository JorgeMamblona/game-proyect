class Player {

    constructor(gameScreen, gameSize) {
        this.gameScreen = gameScreen
        this.gameSize = gameSize

        this.playerSize = {
            w: 40,
            h: 40
        }

        this.playerPos = {
            top: (gameSize.h / 2) - (this.playerSize.h / 2),
            left: (gameSize.w / 2) - (this.playerSize.h / 2)
        }

        this.playerStatistics = {
            playerVel: {
                top: 3,
                left: 3
            },
            playerLife: 500
        }
        this.playerBarBckSize = {
            w: 500,
            h: 25
        }

        this.playerBarBckPos = {
            top: gameSize.h - 50,
            left: gameSize.w / 2 - this.playerBarBckSize.w / 2
        }

        this.playerBarSize = {
            w: this.playerStatistics.playerLife,
            h: 25
        }
        this.playerBarPos = {
            top: this.playerBarBckPos.top,
            left: this.playerBarBckPos.left
        }

        this.playerSprite = {
            backgroundPositionX: 40,
            backgroundPositionY: 40,
            totalFrames: 11,
            currentFrame: 1,
            frameSpeed: 30
        }

        this.playerDirection = 1
        this.init()
    }


    init() {
        this.player = document.createElement('div')

        this.player.style.position = 'absolute'

        this.player.style.width = `${this.playerSize.w}px`
        this.player.style.height = `${this.playerSize.h}px`

        this.player.style.top = `${this.playerPos.top}px`
        this.player.style.left = `${this.playerPos.left}px`

        this.player.style.zIndex = '1'
        this.player.style.backgroundImage = `url(./img/Charakter2.png)`
        this.player.style.backgroundSize = '480px'
        this.player.style.backgroundRepeat = 'no-repeat'
        this.player.style.overflow = 'hidden'
        this.player.style.backgroundPositionX = `${- this.playerSprite.backgroundPositionX}px`
        this.player.style.backgroundPositionY = `${- this.playerSprite.backgroundPositionY}px`

        //this.player.style.backgroundColor = 'white'

        this.gameScreen.appendChild(this.player)


        this.playerBarBck = document.createElement('div')

        this.playerBarBck.style.position = 'absolute'

        this.playerBarBck.style.width = `${this.playerBarBckSize.w}px`
        this.playerBarBck.style.height = `${this.playerBarBckSize.h}px`

        this.playerBarBck.style.top = `${this.playerBarBckPos.top}px`
        this.playerBarBck.style.left = `${this.playerBarBckPos.left}px`
        this.playerBarBck.style.backgroundColor = 'black'

        this.playerBarBck.style.zIndex = '3'
        this.gameScreen.appendChild(this.playerBarBck)


        this.playerBar = document.createElement('div')

        this.playerBar.style.position = 'absolute'

        this.playerBar.style.width = `${this.playerBarSize.w}px`
        this.playerBar.style.height = `${this.playerBarSize.h}px`

        this.playerBar.style.top = `${this.playerBarPos.top}px`
        this.playerBar.style.left = `${this.playerBarPos.left}px`
        this.playerBar.style.backgroundColor = '#207641'

        this.playerBar.style.zIndex = '4'
        this.gameScreen.appendChild(this.playerBar)


    }



    updateHealth() {
        this.playerBar.style.width = `${this.playerStatistics.playerLife}px`
    }

    animateSprite(frameCounter, direction) {
        this.player.playerDirection = direction


        if (frameCounter % this.playerSprite.frameSpeed == 0) {

            this.playerSprite.currentFrame += 3

        }
        if (this.playerSprite.currentFrame >= this.playerSprite.totalFrames) {
            this.playerSprite.currentFrame = 1
        }




        this.playerSprite.backgroundPositionX = -this.playerSize.w * this.playerSprite.currentFrame
        this.playerSprite.backgroundPositionY = -this.playerSize.h * this.player.playerDirection

        this.updateSprite()
    }


    updateSprite() {
        this.player.style.backgroundPositionX = `${this.playerSprite.backgroundPositionX}px`
        this.player.style.backgroundPositionY = `${this.playerSprite.backgroundPositionY}px`
    }


}
