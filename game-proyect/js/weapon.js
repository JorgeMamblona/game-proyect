class Weapon {
    constructor(gameScreen, gameSize, frameCounter, player) {
        this.gameScreen = gameScreen
        this.gameSize = gameSize
        this.frameCounter = frameCounter
        this.player = player

        this.WpSize = {
            h: 55,
            w: 55
        }

        this.WpDmg = 20

        this.WpAtkSp = 2

        this.WpPos = {
            top: this.gameSize.h / 2 - this.WpSize.h / 2,
            left: this.player.playerPos.left + this.player.playerSize.w
        }

    }

}

class Melee extends Weapon {
    constructor(gameScreen, gameSize, frameCounter, player) {
        super(gameScreen, gameSize, frameCounter, player)

        this.init()
    }

    init() {
        this.melee = document.createElement('div')

        this.melee.style.position = 'absolute'
        this.melee.style.width = `${this.WpSize.w}px`
        this.melee.style.height = `${this.WpSize.h}px`

        this.melee.style.top = `${this.WpPos.top}px`
        this.melee.style.left = `${this.WpPos.left}px`


        this.melee.style.backgroundImage = `url(./img/Milk.webp)`
        this.melee.style.backgroundSize = '55px'
        this.melee.style.backgroundRepeat = 'no-repeat'
        this.melee.style.overflow = 'hidden'

        this.melee.style.zIndex = '0'
        // this.melee.style.backgroundColor = 'wheat'

        this.gameScreen.appendChild(this.melee)
    }

    updatePosition() {
        this.melee.style.top = `${this.WpPos.top}px`
        this.melee.style.left = `${this.WpPos.left}px`
    }

    printWeapon(direction) {

        switch (direction) {
            case 'up':
                this.WpPos.left = (this.gameSize.w / 2) - (this.WpSize.w / 2)
                this.WpPos.top = (this.gameSize.h / 2) - (this.player.playerSize.h / 2) - this.WpSize.h
                this.updatePosition()
                break
            case 'down':
                this.WpPos.left = (this.gameSize.w / 2) - (this.WpSize.w / 2)
                this.WpPos.top = (this.gameSize.h / 2) + (this.player.playerSize.h / 2)
                this.updatePosition()
                break

            case 'left':
                this.WpPos.left = this.gameSize.w / 2 - this.player.playerSize.w / 2 - this.WpSize.w
                this.WpPos.top = this.gameSize.h / 2 - this.WpSize.h / 2
                this.updatePosition()
                break

            case 'right':
                this.WpPos.left = this.player.playerPos.left + this.player.playerSize.w
                this.WpPos.top = this.gameSize.h / 2 - this.WpSize.h / 2
                this.updatePosition()
                break
        }
    }
    // parpadeo de armas

    // weaponAppear() {
    //     let counter = 0
    //     console.log(counter)
    //     if (Game.frameCounter % 40 === 0) {
    //         this.melee.style.display = 'none'
    //         counter++
    //     }
    //     if (Game.frameCounter % 60 === 0) {
    //         this.melee.style.display = ''
    //     }
    // }
}