class Enemy {
    constructor(gameScreen, gameSize) {
        this.gameScreen = document.querySelector("#game-screen")

        this.gamesize = {
            w: window.innerWidth,
            h: window.innerHeight
        }

        this.enemySize = {
            w: 100,
            h: 100
        }

        this.enemyPos = {
            top: (gameSize.h / 2),
            left: (gameSize.w / 2)
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

    move() {

    }
}


