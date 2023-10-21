const Game = {

    gameScreen: document.querySelector("#game-screen"),

    gameSize: {
        w: window.innerWidth,
        h: window.innerHeight
    },

    frameCounter: 0,

    player: undefined,
    enemy: undefined,

    keys: {
        UP: 'KeyW',
        DOWN: 'KeyS',
        LEFT: 'KeyA',
        RIGHT: 'KeyD'
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
        this.frameCounter > 100 ? this.frameCounter = 0 : this.frameCounter++

        this.enemy.move()
        this.player.move()
        window.requestAnimationFrame(() => this.gameLoop())
    },

    createElem() {
        this.player = new Player(this.gameScreen, this.gameSize)
        this.enemy = new Enemy(
            this.gameScreen,
            this.gameSize,
            this.player.playerPos)
    },

    setDimensions() {
        this.gameScreen.style.width = `${this.gameSize.w}px`
        this.gameScreen.style.height = `${this.gameSize.h}px`
        this.gameScreen.style.backgroundColor = 'wheat' //placeholder
    },

    setEventListeners() {
        document.addEventListener("keydown", e => {
            switch (e.code) {
                case this.keys.UP:
                    this.player.moveUP()
                    break
                case this.keys.DOWN:
                    this.player.moveDOWN()
                    break
                case this.keys.LEFT:
                    this.player.moveLEFT()
                    break
                case this.keys.RIGHT:
                    this.player.moveRIGHT()
                    break
            }
        })
    }



}

