const Game = {

    gameScreen: document.querySelector("#game-screen"),

    gameSize: {
        w: window.innerWidth,
        h: window.innerHeight
    },

    frameCounter: 0,
    isPaused: false,
    deads: 0,
    count: 0,
    spawn: 300,

    player: undefined,
    enemys: [],
    background: undefined,
    frame: undefined,
    melee: undefined,
    gameOver: undefined,

    keys: {
        UP: 'KeyW',
        DOWN: 'KeyS',
        LEFT: 'KeyA',
        RIGHT: 'KeyD',
        PAUSE: 'KeyP'
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
        if (!this.isPaused) {
            //console.log(this.frameCounter)
            // console.log(this.enemys)
            this.frameCounter > 1000 ? this.frameCounter = 0 : this.frameCounter++
            this.setSpawn()
            this.createEnemy()
            console.log(this.frameCounter)
            this.checkCollisions()
            this.moveAllEnemies()
            this.animateAll()
            this.frame.incrementSeconds()

            this.isGameOver() && this.finishedGame()

            window.requestAnimationFrame(() => this.gameLoop())
        }

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

    checkCollisions() {
        this.isPlayerReached()
        this.isEnemyMeleeReached()
        this.isEnemyCollision()
    },


    animateAll() {
        this.player.animateSprite(Game.frameCounter)

        this.enemys.forEach(elm => elm.animateSprite(Game.frameCounter))

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

        if (this.frameCounter % this.spawn === 0) {
            this.enemys.push(new Enemy(this.gameScreen, this.gameSize, this.player,))
        }


        // if (this.count < 2) this.enemys.push(new Enemy(this.gameScreen, this.gameSize, this.player))
        // //manual
        // this.count++
    },
    setSpawn() {
        if (this.frameCounter % 800 === 0) {

            if (this.spawn > 1) {
                this.spawn -= 5

                this.enemys.forEach(elm => {
                    // elm.enemyStatistics.enemyVel.top += .2
                    // elm.enemyStatistics.enemyVel.left += .2
                })
            } else {
                this.spawn = 1
            }
        }
    },


    setDimensions() {
        this.gameScreen.style.width = `${this.gameSize.w}px`
        this.gameScreen.style.height = `${this.gameSize.h}px`
        // this.gameScreen.style.backgroundColor = 'wheat' //placeholder
    },
    moveAudio() {
        let audio2 = document.getElementById("audio2")

        audio2.play()

    },

    setEventListeners() {
        document.addEventListener("keydown", e => {
            if (e.code === this.keys.PAUSE) {
                if (this.isPaused) {
                    this.isPaused = false
                    this.gameLoop()
                    //console.log('despausa')
                } else {
                    this.isPaused = true
                    //     console.log('pausa')
                }
            }

            if (e.code && !this.isPaused) {
                switch (e.code) {
                    case this.keys.UP:
                        this.enemys.forEach(elm => elm.moveUP())
                        this.melee.printWeapon('up')
                        this.player.animateSprite(this.frameCounter, 4)
                        this.background.moveUP()
                        this.moveAudio()
                        break
                    case this.keys.DOWN:
                        this.enemys.forEach(elm => elm.moveDOWN())
                        this.melee.printWeapon('down')
                        this.player.animateSprite(this.frameCounter, 1)
                        this.background.moveDOWN()
                        this.moveAudio()
                        break
                    case this.keys.LEFT:
                        this.enemys.forEach(elm => elm.moveLEFT())
                        this.melee.printWeapon('left')
                        this.player.animateSprite(this.frameCounter, 7)
                        this.background.moveLEFT()
                        this.moveAudio()
                        break
                    case this.keys.RIGHT:
                        this.enemys.forEach(elm => elm.moveRIGHT())
                        this.melee.printWeapon('right')
                        this.player.animateSprite(this.frameCounter, 10)
                        this.background.moveRIGHT()
                        this.moveAudio()
                        break

                    case this.keys.PAUSE:


                        break
                }
            }
        })

        document.addEventListener("keyup", e => {

            audio2.pause()
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
            this.player.playerStatistics.playerLife -= attackingEnemy.enemyStatistics.enemyStr
            this.player.updateHealth()
        }
    },

    isEnemyMeleeReached() {
        this.enemys.forEach((elm) => {
            if (
                //colision vertical
                elm.enemyPos.top >= this.melee.WpPos.top - elm.enemyStatistics.enemySize.h
                && elm.enemyPos.top <= this.melee.WpPos.top + this.melee.WpSize.h
                // colision horizontal
                && elm.enemyPos.left >= this.melee.WpPos.left - elm.enemyStatistics.enemySize.w
                && elm.enemyPos.left <= this.melee.WpPos.left + this.melee.WpSize.w
            ) {
                this.meleeAttack(elm)
            }
        })
    },
    meleeAttack(damagedEnemy) {
        // if (this.frameCounter % this.melee.WpAtkSp === 0) {
        damagedEnemy.enemyStatistics.enemyHealth -= this.melee.WpDmg
        this.pushEnemy(damagedEnemy)
        if (damagedEnemy.enemyStatistics.enemyHealth <= 0) {
            this.killEnemy(damagedEnemy)
            let audio = document.getElementById('audio')
            audio.play()
        }
        // }
    },

    killEnemy(deadEnemy) {
        deadEnemy.enemy.remove()
        this.enemys.splice(this.enemys.indexOf(deadEnemy), 1)
        this.deads++
    },

    pushEnemy(pushedEnemy) {

        if (
            pushedEnemy.enemyPos.left >= this.melee.WpPos.left &&
            pushedEnemy.enemyPos.top >= this.melee.WpPos.top &&
            pushedEnemy.enemyPos.top <= this.melee.WpPos.top + this.melee.WpSize.h
        ) {
            //console.log('choque DER')
            pushedEnemy.enemyPos.left += 75
        }
        if (
            pushedEnemy.enemyPos.left <= this.melee.WpPos.left + this.melee.WpSize.w &&
            pushedEnemy.enemyPos.top >= this.melee.WpPos.top &&
            pushedEnemy.enemyPos.top <= this.melee.WpPos.top + this.melee.WpSize.h
        ) {
            // console.log('choque IZQ')
            pushedEnemy.enemyPos.left -= 75
        }
        if (
            pushedEnemy.enemyPos.top < this.melee.WpPos.top + this.melee.WpSize.h &&
            pushedEnemy.enemyPos.left <= this.melee.WpPos.left + this.melee.WpSize.w &&
            pushedEnemy.enemyPos.left >= this.melee.WpPos.left
        ) {
            // console.log('choque ARRIBA')

            pushedEnemy.enemyPos.top -= 75

        }

        if (
            pushedEnemy.enemyPos.top > this.melee.WpPos.top + this.melee.WpSize.h &&
            pushedEnemy.enemyPos.left <= this.melee.WpPos.left + this.melee.WpSize.w &&
            pushedEnemy.enemyPos.left >= this.melee.WpPos.left

        ) {
            //console.log('choque abajo')
            pushedEnemy.enemyPos.top += pushedEnemy.enemyStatistics.enemySize.h + 76
        }

    },


    isEnemyCollision() {

        // this.enemys.forEach(enemy2 => {
        //     this.enemys.forEach((enemy1) => {
        //         if (

        //             enemy1.enemyPos.left + enemy1.enemyStatistics.enemySize.w >= enemy2.enemyPos.left &&
        //             enemy1.enemyPos.top + enemy1.enemyStatistics.enemySize.h >= enemy2.enemyPos.top &&
        //             enemy1.enemyPos.left <= enemy2.enemyPos.left + enemy2.enemyStatistics.enemySize.w

        //         ) {
        //             console.log('col')
        //         }
        //     })
        // })
    },


    // isCollision() {
    //     for (let i = 0; i < this.obstacles.length; i++) {
    //         if (
    //             this.player.playerPos.left + this.player.playerSize.w >= this.obstacles[i].obstaclePos.left &&
    //             this.player.playerPos.top + this.player.playerSize.h >= this.obstacles[i].obstaclePos.top &&
    //             this.player.playerPos.left <= this.obstacles[i].obstaclePos.left + this.obstacles[i].obstacleSize.w
    //         ) {
    //             return true

    isGameOver() {
        if (this.player.playerStatistics.playerLife <= 0) {
            return true
        }
        return false

    },
    finishedGame() {
        this.isPaused = true
        this.gameOver = new GameOver(this.gameScreen, this.gameSize)
    }




}