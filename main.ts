namespace SpriteKind {
    export const enemy_fire = SpriteKind.create()
}
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
        f f f f f f f f f f f f f f f f 
        f f f 1 1 1 f f f f f f f f f f 
        f 1 1 5 5 a f f f f f f f f f f 
        f 1 5 5 c a c 1 c 1 c b b b a f 
        f 1 1 5 5 a f f f f f f f f f f 
        f f 1 1 1 1 f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        `, Me, 250, 0)
    projectile.setFlag(SpriteFlag.AutoDestroy, true)
})
function Create_Enemny_Airplanes () {
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
    enemy1.setKind(SpriteKind.Enemy)
    enemy1.setFlag(SpriteFlag.AutoDestroy, true)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.enemy_fire, function (sprite, otherSprite) {
    pause(200)
    info.changeLifeBy(-1)
})
info.onLifeZero(function () {
    game.over(false, effects.splatter)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    projectile.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false, effects.splatter)
})
let projectile2: Sprite = null
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
controller.moveSprite(Me, 0, 100)
Me.z = 100
info.setLife(3)
game.onUpdateInterval(700, function () {
    Create_Enemny_Airplanes()
})
game.onUpdateInterval(2000, function () {
    if (enemy1.x < 190) {
        projectile2 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            1 1 . . . . . . . . . . . . . . 
            1 3 3 3 3 3 3 3 3 3 3 3 3 . . . 
            1 3 3 3 3 3 3 3 3 3 3 3 3 . . . 
            1 3 3 3 3 3 3 3 3 3 3 3 3 . . . 
            1 1 . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, enemy1, -200, 0)
        projectile2.setKind(SpriteKind.enemy_fire)
    }
})
