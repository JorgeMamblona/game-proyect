class Enemy {
    constructor(gameScreen, gameSize, player) {
        this.gameScreen = gameScreen
        this.gameSize = {
            w: gameSize.w,
            h: gameSize.h
        }
        this.player = player


        this.enemyPos = {
            top: 0,
            left: 0
        }

        this.playerPos = {
            top: player.playerPos.top,
            left: player.playerPos.left
        }

        this.playerVel = {
            top: this.player.playerStatistics.playerVel.top,
            left: this.player.playerStatistics.playerVel.left
        }
        this.enemyStatistics = {
            enemySize: {
                w: 25,
                h: 25
            },
            enemyVel: {
                top: 1,
                left: 1
            },
            enemyAtSp: 100

        }

        this.init()
    }

    init() {
        this.getEnemyCreationPos()
        this.enemy = document.createElement('div')
        this.enemy.style.position = 'absolute'

        this.enemy.style.width = `${this.enemyStatistics.enemySize.w}px`
        this.enemy.style.height = `${this.enemyStatistics.enemySize.h}px`

        this.enemy.style.top = `${this.enemyPos.top}px`
        this.enemy.style.left = `${this.enemyPos.left}px`

        this.enemy.style.backgroundColor = 'blue'

        this.gameScreen.appendChild(this.enemy)

    }


    getPlayerPos() { //REVISAR 
        this.playerPos.top = Game.player.playerPos.top
        this.playerPos.left = Game.player.playerPos.left
    }

    move() {
        this.getPlayerPos()
        if (Math.abs(this.enemyPos.top - this.playerPos.top) >
            Math.abs(this.enemyPos.left - this.playerPos.left)) {
            if (this.enemyPos.top < this.playerPos.top) {
                this.enemyPos.top += this.enemyStatistics.enemyVel.top
            } else {
                this.enemyPos.top -= this.enemyStatistics.enemyVel.top
            }
            if (this.enemyPos.left < this.playerPos.left) {
                this.enemyPos.left += this.enemyStatistics.enemyVel.left * Math.random()
            } else {
                this.enemyPos.left -= this.enemyStatistics.enemyVel.left * Math.random()
            }
        } else {
            if (this.enemyPos.top < this.playerPos.top) {
                this.enemyPos.top += this.enemyStatistics.enemyVel.top * Math.random()
            } else {
                this.enemyPos.top -= this.enemyStatistics.enemyVel.top * Math.random()
            }
            if (this.enemyPos.left < this.playerPos.left) {
                this.enemyPos.left += this.enemyStatistics.enemyVel.left
            } else {
                this.enemyPos.left -= this.enemyStatistics.enemyVel.left
            }
        }


        this.updatePosition()
    }


    updatePosition() {
        this.enemy.style.top = `${this.enemyPos.top}px`
        this.enemy.style.left = `${this.enemyPos.left}px`
    }

    moveUP() {
        this.enemyPos.top += this.playerVel.top
        this.updatePosition()
    }
    moveDOWN() {
        this.enemyPos.top -= this.playerVel.top
        this.updatePosition()
    }
    moveLEFT() {
        this.enemyPos.left += this.playerVel.left
        this.updatePosition()
    }
    moveRIGHT() {
        this.enemyPos.left -= this.playerVel.left
        this.updatePosition()
    }


    getEnemyCreationPos() {
        const random = Math.round(Math.random() * 4)

        switch (random) {
            case 1:
                this.enemyPos.top = Math.floor(Math.random() - this.enemyStatistics.enemySize.w)
                this.enemyPos.left = Math.floor(Math.random() * this.gameSize.w - this.enemyStatistics.enemySize.w)

                break
            case 2:
                this.enemyPos.top = Math.floor(Math.random() * (this.gameSize.h) - this.enemyStatistics.enemySize.w)
                this.enemyPos.left = Math.floor(Math.random() - this.enemyStatistics.enemySize.w)
                break
            case 3:
                this.enemyPos.top = this.gameSize.h - this.enemyStatistics.enemySize.w
                this.enemyPos.left = Math.floor(Math.random() * this.gameSize.w - this.enemyStatistics.enemySize.w)
                break
            case 4:
                this.enemyPos.top = Math.floor(Math.random() * (this.gameSize.h) - this.enemyStatistics.enemySize.w)
                this.enemyPos.left = this.gameSize.w - this.enemyStatistics.enemySize.w
                break
            default:
                this.enemyPos.top = this.gameSize.h - this.enemyStatistics.enemySize.w
                this.enemyPos.left = this.gameSize.w - this.enemyStatistics.enemySize.w

        }
    }
}
