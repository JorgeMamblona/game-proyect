const Game = {

    gameScreen: document.querySelector("#game-screen"),

    gameSize: {
        w: window.innerWidth,
        h: window.innerHeight
    },

    frameCounter: 0,

    player: undefined,
    enemys: [],
    background: undefined,
    frame: undefined,

    keys: {
        UP: 'KeyW',
        DOWN: 'KeyS',
        LEFT: 'KeyA',
        RIGHT: 'KeyD',
        ENEMY: 'KeyP'
    },

    init() {
        this.setDimensions()
        this.setEventListeners()
        this.start()
    },

    start() {
        this.createElem()
        this.gameLoop()
    },

    gameLoop() {
        // console.log(this.frameCounter)

        this.frameCounter > 2000 ? this.frameCounter = 0 : this.frameCounter++

        // this.createEnemy()
        this.moveAllEnemies()

        this.isPlayerReached()
        console.log(this.player.playerStatistics.playerLife)

        window.requestAnimationFrame(() => this.gameLoop())
    },

    moveAllEnemies() {
        if (this.frameCounter % 1 === 0) {
            if (this.enemys.length) {
                this.enemys.forEach(elm => {
                    elm.move()
                });
            }
        }
    },

    createElem() {
        this.background = new Background(this.gameScreen, this.gameSize)
        this.frame = new Frame(this.gameScreen, this.gameSize)
        this.player = new Player(this.gameScreen, this.gameSize)
        //this.player = new PlayerShadow(this.gameScreen, this.gameSize)

        //this.enemys = []

    },

    createEnemy() {

        //automatica
        // if (this.frameCounter % 100 === 0) {
        //     this.enemys.push(new Enemy(this.gameScreen, this.gameSize, this.player,))
        // }

        //manual
        this.enemys.push(new Enemy(this.gameScreen, this.gameSize, this.player,))


    },

    setDimensions() {
        this.gameScreen.style.width = `${this.gameSize.w}px`
        this.gameScreen.style.height = `${this.gameSize.h}px`
        // this.gameScreen.style.backgroundColor = 'wheat' //placeholder
    },

    setEventListeners() {

        document.addEventListener("keydown", e => {
            if (e.code)
                switch (e.code) {
                    case this.keys.UP:
                        this.enemys.forEach(elm => elm.moveUP())
                        this.background.moveUP()
                        break
                    case this.keys.DOWN:
                        this.enemys.forEach(elm => elm.moveDOWN())
                        this.background.moveDOWN()
                        break
                    case this.keys.LEFT:
                        this.enemys.forEach(elm => elm.moveLEFT())
                        this.background.moveLEFT()
                        break
                    case this.keys.RIGHT:
                        this.enemys.forEach(elm => elm.moveRIGHT())
                        this.background.moveRIGHT()
                        break

                    case this.keys.ENEMY:
                        this.createEnemy()
                        break
                }
        })
    },

    isPlayerReached() {
        this.enemys.forEach(enemy => {
            if (
                //colision vertical
                enemy.enemyPos.top >= this.player.playerPos.top - this.player.playerSize.h
                && enemy.enemyPos.top <= this.player.playerPos.top + this.player.playerSize.h
                // colision horizontal
                && enemy.enemyPos.left >= this.player.playerPos.left - this.player.playerSize.w
                && enemy.enemyPos.left <= this.player.playerPos.left + this.player.playerSize.w
            ) {
                this.enemyAttack(enemy)
            }

            // console.log(Math.floor(enemy.enemyPos.left))
            // if (
            //     this.player.playerPos.left - this.player.playerSize.left >= enemy.enemyPos.left - enemy.enemySize.left
            //     //  || this.player.playerPos.left + this.player.playerSize.left <= enemy.enemyPos.left


            // ) {
            //     console.log('colision')
            // }
        })

    },
    enemyAttack(attackingEnemy) {

        if (this.frameCounter % attackingEnemy.enemyStatistics.enemyAtSp === 0) {
            this.player.playerStatistics.playerLife--
        }
    }
}