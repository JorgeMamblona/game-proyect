class Enemy {
    constructor(gameScreen, gameSize, playerPos, initialPos) {
        this.gameScreen = gameScreen
        this.gamesize = {
            w: gameSize.w,
            h: gameSize.h
        }

        this.enemySize = {
            w: 25,
            h: 25
        }

        this.enemyPos = {
            top: initialPos.top,
            left: initialPos.left
        }

        this.playerPos = {
            top: playerPos.top,
            left: playerPos.left
        }

        this.enemyVel = {
            top: 3,
            left: 3
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
            this.enemyPos.top += this.enemyVel.top * .2
        } else {
            this.enemyPos.top -= this.enemyVel.top * .2
        }
        if (this.enemyPos.left < this.playerPos.left) {
            this.enemyPos.left += this.enemyVel.left * .2
        } else {
            this.enemyPos.left -= this.enemyVel.left * .2
        }
        this.updatePosition()
    }

    updatePosition() {
        this.enemy.style.top = `${this.enemyPos.top}px`
        this.enemy.style.left = `${this.enemyPos.left}px`
    }

    moveUP() {
        this.enemyPos.top += this.enemyVel.top
        this.updatePosition()
    }
    moveDOWN() {
        this.enemyPos.top -= this.enemyVel.top
        this.updatePosition()
    }
    moveLEFT() {
        this.enemyPos.left += this.enemyVel.left
        this.updatePosition()
    }
    moveRIGHT() {
        this.enemyPos.left -= this.enemyVel.left
        this.updatePosition()
    }

}