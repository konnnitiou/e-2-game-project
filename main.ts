namespace SpriteKind {
    export const kaidan = SpriteKind.create()
    export const radio = SpriteKind.create()
    export const kage = SpriteKind.create()
    export const key = SpriteKind.create()
    export const exiwt = SpriteKind.create()
}
statusbars.onZero(StatusBarKind.Energy, function (status) {
    game.setGameOverMessage(false, "You died")
    game.gameOver(false)
})
game.setDialogCursor(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 2 2 2 . . . . . . . 
    . . . . . 2 2 8 2 . . . . . . . 
    . . . . 2 2 8 . 2 2 . . . . . . 
    . . . . 2 8 8 . 8 2 . . . . . . 
    . . . . 2 . 8 . . 2 . . . . . . 
    . . . . 2 2 . . . 2 . . . . . . 
    . . . . 2 8 2 2 2 8 2 . . . . . 
    . . . 2 8 . 8 8 8 2 2 . . . . . 
    . . . 2 8 . . . . 8 2 . . . . . 
    . . . 2 . . . . . . 2 . . . . . 
    . . . 8 . . . . . 2 2 . . . . . 
    . . . . . . . . 2 2 8 . . . . . 
    . . . . . . . . 2 8 8 . . . . . 
    . . . . . . . . 8 . . . . . . . 
    `)
game.splash("SOUND ONLY", "製作　e班")
game.showLongText("(caution) This game is horror game.", DialogLayout.Center)
game.setDialogCursor(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    2 . . . . . . . . . . . . . . 2 
    . 2 2 . f f f f f f f f . 2 2 . 
    . . . 2 1 1 1 f f 1 1 1 2 . . . 
    . . f 1 2 2 f e e f 2 2 1 f . . 
    . f 1 1 1 f 2 e e 2 f 1 1 1 f . 
    f 1 1 1 1 f e 2 2 e f 1 1 1 1 f 
    . f 1 1 1 f 2 e e 2 f 1 1 1 f . 
    . . f 1 2 2 f e e f 2 2 1 f . . 
    . . . 2 1 1 1 f f 1 1 1 2 . . . 
    . 2 2 . f f f f f f f f . 2 2 . 
    2 . . . . . . . . . . . . . . 2 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `)
game.showLongText("You can only see around.", DialogLayout.Center)
game.setDialogCursor(img`
    . . . . . . . . . . . . . . . . 
    . . . . 8 . . . . . . . . . . . 
    . . . 8 . . . . . . . . . . . . 
    . . 8 . . 8 . . f f f f . . . . 
    . 8 . . 8 . . . f 9 9 9 f . . . 
    . 8 . 8 . . 8 . f 9 9 9 9 f . . 
    . 8 . 8 . 8 . . f 9 9 9 9 9 f f 
    . 8 . 8 . 8 . . f 9 9 9 9 9 9 f 
    . 8 . 8 . 8 . . f 9 9 9 9 9 9 f 
    . 8 . 8 . 8 . . f 9 9 9 9 9 f f 
    . 8 . 8 . . 8 . f 9 9 9 9 f . . 
    . 8 . . 8 . . . f 9 9 9 f . . . 
    . . 8 . . 8 . . f f f f . . . . 
    . . . 8 . . . . . . . . . . . . 
    . . . . 8 . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `)
game.showLongText("In this game, sound is important.", DialogLayout.Center)
game.setDialogCursor(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 2 2 2 . . . . . . . 
    . . . . . 2 2 8 2 . . . . . . . 
    . . . . 2 2 8 . 2 2 . . . . . . 
    . . . . 2 8 8 . 8 2 . . . . . . 
    . . . . 2 . 8 . . 2 . . . . . . 
    . . . . 2 2 . . . 2 . . . . . . 
    . . . . 2 8 2 2 2 8 2 . . . . . 
    . . . 2 8 . 8 8 8 2 2 . . . . . 
    . . . 2 8 . . . . 8 2 . . . . . 
    . . . 2 . . . . . . 2 . . . . . 
    . . . 8 . . . . . 2 2 . . . . . 
    . . . . . . . . 2 2 8 . . . . . 
    . . . . . . . . 2 8 8 . . . . . 
    . . . . . . . . 8 . . . . . . . 
    `)
game.showLongText("You must pick up the three \"keys\".", DialogLayout.Center)
let mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f e e e e f f . . . . 
    . . . f e e e f f e e e f . . . 
    . . f f f f f 2 2 f f f f f . . 
    . . f f e 2 e 2 2 e 2 e f f . . 
    . . f e 2 f 2 f f 2 f 2 e f . . 
    . . f f f 2 2 e e 2 2 f f f . . 
    . f f e f 2 f e e f 2 f e f f . 
    . f e e f f e e e e f e e e f . 
    . . f e e e e e e e e e e f . . 
    . . . f e e e e e e e e f . . . 
    . . e 4 f f f f f f f f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
tiles.setCurrentTilemap(tilemap`レベル1`)
mySprite.setPosition(495, 480)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite, 100, 100)
let hit_point = statusbars.create(80, 4, StatusBarKind.Energy)
hit_point.setLabel("light Power", 1)
hit_point.positionDirection(CollisionDirection.Top)
let key_1 = sprites.create(assets.image`myImage1`, SpriteKind.key)
let key_2 = sprites.create(assets.image`myImage0`, SpriteKind.key)
let key_3 = sprites.create(assets.image`myImage`, SpriteKind.key)
key_1.setPosition(420, 340)
key_2.setPosition(400, 120)
key_3.setPosition(600, 340)
let exit_bloker = sprites.create(assets.image`myImage2`, SpriteKind.exiwt)
exit_bloker.setPosition(495, 503)
tiles.setWallAt(tiles.getTileLocation(30, 31), true)
tiles.setWallAt(tiles.getTileLocation(31, 31), true)
forever(function () {
    if (mySprite.overlapsWith(key_1)) {
        music.play(music.createSoundEffect(WaveShape.Sine, 1069, 2731, 255, 0, 100, SoundExpressionEffect.Vibrato, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
        sprites.destroy(key_1)
    }
})
forever(function () {
	
})
forever(function () {
    music.setVolume(50)
    music.play(music.createSong(hex`005a000408040105001c000f0a006400f4010a0000040000000000000000000000000000000002960000000c0001240c001400012414001800012418001c0001221c002000012520002c0001242c003400012434003600012436003800012438003c0001273c004000012540004800012450005200012452005400012254005600012a56005800012558005c0001225c006000012560006800012468007000012570007800012778007a0001297a007c0001277c007e0001257e0080000122`), music.PlaybackMode.UntilDone)
})
