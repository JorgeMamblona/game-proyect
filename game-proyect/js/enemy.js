class Enemy {
    constructor(gameScreen, gameSize, playerPos) {
        this.gameScreen = gameScreen
        this.gamesize = {
            w: gameSize.w,
            h: gameSize.h
        }

        this.enemySize = {
            w: 20,
            h: 20
        }

        // this.enemyPos = {
        //     top: (gameSize.h / 2),
        //     left: (gameSize.w / 2)
        // }

        this.enemyPos = {
            top: this.gamesize.h - this.enemySize.w,
            left: 0 - this.enemySize.h
        }

        this.playerPos = {
            top: playerPos.top,
            left: playerPos.left
        }

        this.enemyVel = {
            top: 4,
            left: 4
        }


        this.init()
    }

    init() {
        this.enemy = document.createElement('div')
        this.enemy.style.position = 'absolute'

        this.enemy.style.width = `${this.enemySize.w}px`
        this.enemy.style.height = `${this.enemySize.h}px`

        this.enemy.style.top = `${this.enemyPos.top}px`
        this.enemy.style.left = `${this.enemyPos.left}px`

        this.enemy.style.backgroundColor = 'blue'

        this.gameScreen.appendChild(this.enemy)


    }


    getPlayerPos() {
        this.playerPos.top = Game.player.playerPos.top
        this.playerPos.left = Game.player.playerPos.left
    }

    move() {
        this.getPlayerPos()
        if (this.enemyPos.top < this.playerPos.top) {
            this.enemyPos.top += this.enemyVel.top
        } else {
            this.enemyPos.top -= this.enemyVel.top
        }
        if (this.enemyPos.left < this.playerPos.left) {
            this.enemyPos.left += this.enemyVel.left
        } else {
            this.enemyPos.left -= this.enemyVel.left
        }
        this.updatePosition()
    }

    updatePosition() {
        this.enemy.style.top = `${this.enemyPos.top}px`
        this.enemy.style.left = `${this.enemyPos.left}px`
    }
}


