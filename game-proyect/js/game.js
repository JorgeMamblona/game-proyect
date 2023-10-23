const Game = {

    gameScreen: document.querySelector("#game-screen"),

    gameSize: {
        w: window.innerWidth,
        h: window.innerHeight
    },

    frameCounter: 0,

    player: undefined,
    enemy: [],
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
        if (this.frameCounter % 1 === 0) {
            if (this.enemy.length) {
                this.enemy.forEach(elm => {
                    elm.move()
                });
            }


        }


        if (this.frameCounter % 100 === 0) {
            //this.createEnemy()
        }

        window.requestAnimationFrame(() => this.gameLoop())
    },

    createElem() {
        this.background = new Background(this.gameScreen, this.gameSize)
        this.frame = new Frame(this.gameScreen, this.gameSize)
        this.player = new Player(this.gameScreen, this.gameSize)
        //this.player = new PlayerShadow(this.gameScreen, this.gameSize)

        //this.enemy = []

    },

    createEnemy() {

        this.enemy.push(new Enemy(this.gameScreen,
            this.gameSize,
            this.player,
        ))


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
                        this.enemy.forEach(elm => elm.moveUP())
                        this.background.moveUP()
                        break
                    case this.keys.DOWN:
                        this.enemy.forEach(elm => elm.moveDOWN())
                        this.background.moveDOWN()
                        break
                    case this.keys.LEFT:
                        this.enemy.forEach(elm => elm.moveLEFT())
                        this.background.moveLEFT()
                        break
                    case this.keys.RIGHT:
                        this.enemy.forEach(elm => elm.moveRIGHT())
                        this.background.moveRIGHT()
                        break

                    case this.keys.ENEMY:
                        this.createEnemy()
                        break
                }
        })
    }
}