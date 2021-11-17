input.onButtonPressed(Button.A, function () {
    Puntua.move(-1)
})
input.onButtonPressed(Button.B, function () {
    Puntua.move(1)
})
let Puntua: game.LedSprite = null
Puntua = game.createSprite(2, 2)
