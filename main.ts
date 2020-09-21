controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 1 1 1 . . . . . . . . . 
        . . 1 1 5 5 f . . . . . . . . . 
        . . 1 5 5 c f c 1 c 1 c b b b f 
        . . 1 1 5 5 f . . . . . . . . . 
        . . . 1 1 1 1 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, Me, 250, 0)
    projectile.setFlag(SpriteFlag.AutoDestroy, true)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    projectile.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false, effects.splatter)
})
let enemy1: Sprite = null
let projectile: Sprite = null
let Me: Sprite = null
Me = sprites.create(img`
    ....................
    ....................
    .........888888.....
    ...5211.888888888...
    ..555228888888888...
    .5545fb88888888bbb..
    55455fbbb88888bbbb..
    .5455fbbbbbbbbbbbbb.
    .54455bbbbbbcbbbbb..
    .55452bbbbbbcccbbb..
    ...552cc2...ccccc...
    .....cc2...ccccc2...
    ..........ccccc2....
    .........ccccc2.....
    .........cccc2......
    ....................
    `, SpriteKind.Player)
Me.setPosition(10, 42)
controller.moveSprite(Me)
Me.z = 100
game.onUpdateInterval(700, function () {
    enemy1 = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . 6 6 . . 
        . . . . . . . . . . . 6 6 f 5 . 
        . . . . . . . . . . 6 6 6 f 2 5 
        . . . . . . . . . 6 6 6 6 f 5 5 
        . . . . . 1 1 1 6 6 6 6 6 9 . . 
        . . . 1 1 1 1 1 6 6 6 6 6 9 . . 
        9 9 1 1 1 1 1 1 6 6 6 6 6 f 5 . 
        6 8 6 6 6 6 6 6 6 6 6 6 8 f 2 5 
        . 8 6 6 6 6 6 6 6 6 6 8 8 f 5 5 
        . . 8 6 6 6 6 6 6 6 8 8 . . . . 
        . . 8 6 6 6 6 6 6 8 8 . . . . . 
        . . . 8 8 6 6 6 8 8 8 . . . . . 
        . . . . . 8 8 8 8 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, -75, 0)
    enemy1.y = randint(20, 100)
    enemy1.setFlag(SpriteFlag.AutoDestroy, true)
    enemy1.setKind(SpriteKind.Enemy)
})
