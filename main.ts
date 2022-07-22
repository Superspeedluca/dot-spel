input.onButtonPressed(Button.A, function () {
    if (sprite.get(LedSpriteProperty.X) == 2) {
        game.addScore(1)
        wachttijd += -100
        score += 1
    } else {
        music.startMelody(music.builtInMelody(Melodies.Funeral), MelodyOptions.OnceInBackground)
        basic.showNumber(score)
        game.gameOver()
    }
})
let score = 0
let sprite: game.LedSprite = null
sprite = game.createSprite(2, 2)
score = 0
let wachttijd = 1000
basic.forever(function () {
    sprite.move(1)
    basic.pause(wachttijd)
    sprite.ifOnEdgeBounce()
})
