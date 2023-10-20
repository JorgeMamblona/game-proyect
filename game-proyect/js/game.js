const Game = {

    gameScreen: document.querySelector("#game-screen"),

    gameSize: {
        w: window.innerWidth,
        h: window.innerHeight
    },

    frameCounter: 0,

    player: undefined,
    enemy: undefined,

    init() {
        this.setDimensions()
        this.start()
    },

    start() {
        this.createElem()
        this.gameLoop()
    },

    gameLoop() {
        this.frameCounter > 100 ? this.frameCounter = 0 : this.frameCounter++


        window.requestAnimationFrame(() => this.gameLoop())
    },

    createElem() {
        this.player = new Player(this.gameScreen, this.gameSize)
        this.enemy = new Enemy(this.gameScreen, this.gameSize)
    },

    setDimensions() {
        this.gameScreen.style.width = `${this.gameSize.w}px`
        this.gameScreen.style.height = `${this.gameSize.h}px`
        this.gameScreen.style.backgroundColor = 'wheat' //placeholder
    }


}
