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
    melee: undefined,

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
        //console.log(this.frameCounter)
        // console.log(this.enemys)
        this.frameCounter > 1000 ? this.frameCounter = 0 : this.frameCounter++

        // this.createEnemy()
        this.moveAllEnemies()
        this.isPlayerReached()
        this.isEnemyMeleeReached()
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
        this.melee = new Melee(this.gameScreen, this.gameSize, this.frameCounter, this.player)
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
                        this.melee.printWeapon('up')
                        this.background.moveUP()
                        break
                    case this.keys.DOWN:
                        this.enemys.forEach(elm => elm.moveDOWN())
                        this.melee.printWeapon('down')
                        this.background.moveDOWN()
                        break
                    case this.keys.LEFT:
                        this.enemys.forEach(elm => elm.moveLEFT())
                        this.melee.printWeapon('left')
                        this.background.moveLEFT()
                        break
                    case this.keys.RIGHT:
                        this.enemys.forEach(elm => elm.moveRIGHT())
                        this.melee.printWeapon('right')
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
        })

    },
    enemyAttack(attackingEnemy) {

        if (this.frameCounter % attackingEnemy.enemyStatistics.enemyAtSp === 0) {
            //console.log(this.player.playerStatistics.playerLife)
            this.player.playerStatistics.playerLife--
        }
    },

    isEnemyMeleeReached() {
        this.enemys.forEach((elm, idx) => {
            if (
                //colision vertical
                elm.enemyPos.top >= this.melee.WpPos.top - elm.enemyStatistics.enemySize.h
                && elm.enemyPos.top <= this.melee.WpPos.top + this.melee.WpSize.h
                // colision horizontal
                && elm.enemyPos.left >= this.melee.WpPos.left - elm.enemyStatistics.enemySize.w
                && elm.enemyPos.left <= this.melee.WpPos.left + this.melee.WpSize.w
            ) {
                elm.enemy.remove()
                this.enemys.splice(idx, 1)


            }
        })
    }
}