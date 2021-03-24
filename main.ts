namespace SpriteKind {
    export const egg = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Plant) {
        Flowers = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . 5 5 5 5 5 . . . . . . 
            . . . . 5 5 5 5 5 5 5 5 . . . . 
            . . . . 5 5 5 5 5 5 5 5 . . . . 
            . . . . 5 5 5 e e 5 5 5 . . . . 
            . . . . 5 5 5 e e 5 5 5 . . . . 
            . . . . . 5 5 5 5 5 5 5 . . . . 
            . . . . . 5 5 5 5 5 5 5 . . . . 
            . . . . . . . 6 6 . 6 6 . . . . 
            . . . . . . . 6 6 6 6 6 6 . . . 
            . . . . 6 6 . 6 6 . 6 6 . . . . 
            . . . 6 6 6 6 6 6 . . . . . . . 
            . . . . 6 6 . 6 6 . . . . . . . 
            . . . . . . . 6 6 . . . . . . . 
            . . . . . . . 6 6 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Food)
        Flowers.setPosition(Pet.x, Pet.y)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    CanWalk = true
})
let CanWalk = false
let Flowers: Sprite = null
let Pet: Sprite = null
let Plant = false
Plant = false
let Dummy_sprite = sprites.create(img`
    4444444444444444444444444444444444444444...
    4444444444444444444444444444444444444444...
    4411111111111111111111111111111111111144...
    4411112111122221112222112222111222221144222
    4411121211121112112112112111211112111144222
    4411211121121112112112112111211112111144.22
    4411211121121112112112112111211112111144.22
    4411222221121112112112112222111112111144.22
    4411211121121112112112112111111112111144.22
    4411211121121112112112112111111112111144.22
    4411211121121112112112112111111112111144.22
    4411211121122221112222112111111112111144.22
    4411111111111111111111111111111111111144.22
    4411111111111111111111111111111111111144.22
    4411111111111111111111111111111111111144.22
    4444444444444444444444444444444444444444.22
    4444444444444444444444444444444444444444.22
    ...22....................................22
    ...2222222222222222222222222222222222222222
    ...2222222222222222222222222222222222222222
    `, SpriteKind.egg)
scene.setBackgroundImage(img`
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888811111111188888888888888888888888888888888111111111888888888888888888888888888888881111111118888888888888888888888888888888811111111188888888888888
    8888888888888111111111118888888888888888888888888888881111111111188888888888888888888888888888811111111111888888888888888888888888888888111111111118888888888888
    8888888888881111111111111888888888888888888888888888811111111111118888888888888888888888888888111111111111188888888888888888888888888881111111111111888888888888
    8888888888811111111111111188888888888888888888888888111111111111111888888888888888888888888881111111111111118888888888888888888888888811111111111111188888888888
    8888888888111111111111111118888888888888888888888881111111111111111188888888888888888888888811111111111111111888888888888888888888888111111111111111118888888888
    8888888881111111111111111111888888888888888888888811111111111111111118888888888888888888888111111111111111111188888888888888888888881111111111111111111888888888
    8888888881111111111111111111688888888888888888888811111111111111111116888888888888888888888111111111111111111168888888888888888888881111111111111111111688888888
    8888888881111111111111111111688888888888888888888811111111111111111116888888888888888888888111111111111111111168888888888888888888881111111111111111111688888888
    8888888881111111111111111111688888888888888888888811111111111111111116888888888888888888888111111111111111111168888888888888888888881111111111111111111688888888
    8888888881111111111111111111688888888888888888888811111111111111111116888888888888888888888111111111111111111168888888888888888888881111111111111111111688888888
    8888888881111111111111111111688888888888888888888811111111111111111116888888888888888888888111111111111111111168888888888888888888881111111111111111111688888888
    8888888881111111111111111111688888888888888888888811111111111111111116888888888888888888888111111111111111111168888888888888888888881111111111111111111688888888
    8888888881111111111111111111688888111111111888888811111111111111111116888881111111118888888111111111111111111168888811111111188888881111111111111111111688888888
    8888888881111111111111111111688881111111111188888811111111111111111116888811111111111888888111111111111111111168888111111111118888881111111111111111111688888888
    8888888888111111111111111116688811111111111118888881111111111111111166888111111111111188888811111111111111111668881111111111111888888111111111111111116688888888
    8888888888811111111111111166888111111111111111888888111111111111111668881111111111111118888881111111111111116688811111111111111188888811111111111111166888888888
    8888888888881111111111111668881111111111111111188888811111111111116688811111111111111111888888111111111111166888111111111111111118888881111111111111668888888888
    8888888888888111111111116688811111111111111111118888881111111111166888111111111111111111188888811111111111668881111111111111111111888888111111111116688888888888
    8888888888888811111111166888811111111111111111116888888111111111668888111111111111111111168888881111111116688881111111111111111111688888811111111166888888888888
    8888888888888886666666668888811111111111111111116888888866666666688888111111111111111111168888888666666666888881111111111111111111688888886666666668888888888888
    8888888888888888888888888888811111111111111111116888888888888888888888111111111111111111168888888888888888888881111111111111111111688888888888888888888888888888
    8888888888888811111111188888811111111111111111116888888111111111888888111111111111111111168888881111111118888881111111111111111111688888811111111188888888888888
    8888888888888111111111118888811111111111111111116888881111111111188888111111111111111111168888811111111111888881111111111111111111688888111111111118888888888888
    8888888888881111111111111888811111111111111111116888811111111111118888111111111111111111168888111111111111188881111111111111111111688881111111111111888888888888
    8888888888811111111111111188811111111111111111116888111111111111111888111111111111111111168881111111111111118881111111111111111111688811111111111111188888888888
    8888888888111111111111111118811111111111111111116881111111111111111188111111111111111111168811111111111111111881111111111111111111688111111111111111118888888888
    8888888881111111111111111111881111111111111111166811111111111111111118811111111111111111668111111111111111111188111111111111111116681111111111111111111888888888
    8888888881111111111111111111688111111111111111668811111111111111111116881111111111111116688111111111111111111168811111111111111166881111111111111111111688888888
    8888888881111111111111111111688811111111111116688811111111111111111116888111111111111166888111111111111111111168881111111111111668881111111111111111111688888888
    8888888881111111111111111111688881111111111166888811111111111111111116888811111111111668888111111111111111111168888111111111116688881111111111111111111688888888
    8888888881111111111111111111688888111111111668888811111111111111111116888881111111116688888111111111111111111168888811111111166888881111111111111111111688888888
    8888888881111111111111111111688888866666666688888811111111111111111116888888666666666888888111111111111111111168888886666666668888881111111111111111111688888888
    8888888881111111111111111111688888888888888888888811111111111111111116888888888888888888888111111111111111111168888888888888888888881111111111111111111688888888
    8888888881111111111111111111688888111111111888888811111111111111111116888881111111118888888111111111111111111168888811111111188888881111111111111111111688888888
    8888888881111111111111111111688881111111111188888811111111111111111116888811111111111888888111111111111111111168888111111111118888881111111111111111111688888888
    8888888888111111111111111116688811111111111118888881111111111111111166888111111111111188888811111111111111111668881111111111111888888111111111111111116688888888
    8888888888811111111111111166888111111111111111888888111111111111111668881111111111111118888881111111111111116688811111111111111188888811111111111111166888888888
    8888888888881111111111111668881111111111111111188888811111111111116688811111111111111111888888111111111111166888111111111111111118888881111111111111668888888888
    8888888888888111111111116688811111111111111111118888881111111111166888111111111111111111188888811111111111668881111111111111111111888888111111111116688888888888
    8888888888888811111111166888811111111111111111116888888111111111668888111111111111111111168888881111111116688881111111111111111111688888811111111166888888888888
    8888888888888886666666668888811111111111111111116888888866666666688888111111111111111111168888888666666666888881111111111111111111688888886666666668888888888888
    8888888888888888888888888888811111111111111111116888888888888888888888111111111111111111168888888888888888888881111111111111111111688888888888888888888888888888
    8888888888888811111111188888811111111111111111116888888111111111888888111111111111111111168888881111111118888881111111111111111111688888811111111188888888888888
    8888888888888111111111118888811111111111111111116888881111111111188888111111111111111111168888811111111111888881111111111111111111688888111111111118888888888888
    8888888888881111111111111888811111111111111111116888811111111111118888111111111111111111168888111111111111188881111111111111111111688881111111111111888888888888
    8888888888811111111111111188811111111111111111116888111111111111111888111111111111111111168881111111111111118881111111111111111111688811111111111111188888888888
    8888888888111111111111111118811111111111111111116881111111111111111188111111111111111111168811111111111111111881111111111111111111688111111111111111118888888888
    8888888881111111111111111111881111111111111111166811111111111111111118811111111111111111668111111111111111111188111111111111111116681111111111111111111888888888
    8888888881111111111111111111688111111111111111668811111111111111111116881111111111111116688111111111111111111168811111111111111166881111111111111111111688888888
    8888888881111111111111111111688811111111111116688811111111111111111116888111111111111166888111111111111111111168881111111111111668881111111111111111111688888888
    8888888881111111111111111111688881111111111166888811111111111111111116888811111111111668888111111111111111111168888111111111116688881111111111111111111688888888
    8888888881111111111111111111688888111111111668888811111111111111111116888881111111116688888111111111111111111168888811111111166888881111111111111111111688888888
    8888888881111111111111111111688888866666666688888811111111111111111116888888666666666888888111111111111111111168888886666666668888881111111111111111111688888888
    8888888881111111111111111111688888888888888888888811111111111111111116888888888888888888888111111111111111111168888888888888888888881111111111111111111688888888
    8888888881111111111111111111688888111111111888888811111111111111111116888881111111118888888111111111111111111168888811111111188888881111111111111111111688888888
    8888888881111111111111111111688881111111111188888811111111111111111116888811111111111888888111111111111111111168888111111111118888881111111111111111111688888888
    8888888888111111111111111116688811111111111118888881111111111111111166888111111111111188888811111111111111111668881111111111111888888111111111111111116688888888
    8888888888811111111111111166888111111111111111888888111111111111111668881111111111111118888881111111111111116688811111111111111188888811111111111111166888888888
    8888888888881111111111111668881111111111111111188888811111111111116688811111111111111111888888111111111111166888111111111111111118888881111111111111668888888888
    8888888888888111111111116688811111111111111111118888881111111111166888111111111111111111188888811111111111668881111111111111111111888888111111111116688888888888
    8888888888888811111111166888811111111111111111116888888111111111668888111111111111111111168888881111111116688881111111111111111111688888811111111166888888888888
    8888888888888886666666668888811111111111111111116888888866666666688888111111111111111111168888888666666666888881111111111111111111688888886666666668888888888888
    8888888888888888888888888888811111111111111111116888888888888888888888111111111111111111168888888888888888888881111111111111111111688888888888888888888888888888
    8888888888888811111111188888811111111111111111116888888111111111888888111111111111111111168888881111111118888881111111111111111111688888811111111188888888888888
    8888888888888111111111118888811111111111111111116888881111111111188888111111111111111111168888811111111111888881111111111111111111688888111111111118888888888888
    8888888888881111111111111888811111111111111111116888811111111111118888111111111111111111168888111111111111188881111111111111111111688881111111111111888888888888
    8888888888811111111111111188811111111111111111116888111111111111111888111111111111111111168881111111111111118881111111111111111111688811111111111111188888888888
    8888888888111111111111111118811111111111111111116881111111111111111188111111111111111111168811111111111111111881111111111111111111688111111111111111118888888888
    8888888881111111111111111111881111111111111111166811111111111111111118811111111111111111668111111111111111111188111111111111111116681111111111111111111888888888
    8888888881111111111111111111688111111111111111668811111111111111111116881111111111111116688111111111111111111168811111111111111166881111111111111111111688888888
    8888888881111111111111111111688811111111111116688811111111111111111116888111111111111166888111111111111111111168881111111111111668881111111111111111111688888888
    8888888881111111111111111111688881111111111166888811111111111111111116888811111111111668888111111111111111111168888111111111116688881111111111111111111688888888
    8888888881111111111111111111688888111111111668888811111111111111111116888881111111116688888111111111111111111168888811111111166888881111111111111111111688888888
    8888888881111111111111111111688888866666666688888811111111111111111116888888666666666888888111111111111111111168888886666666668888881111111111111111111688888888
    8888888881111111111111111111688888888888888888888811111111111111111116888888888888888888888111111111111111111168888888888888888888881111111111111111111688888888
    8888888881111111111111111111688888111111111888888811111111111111111116888881111111118888888111111111111111111168888811111111188888881111111111111111111688888888
    8888888881111111111111111111688881111111111188888811111111111111111116888811111111111888888111111111111111111168888111111111118888881111111111111111111688888888
    8888888888111111111111111116688811111111111118888881111111111111111166888111111111111188888811111111111111111668881111111111111888888111111111111111116688888888
    8888888888811111111111111166888111111111111111888888111111111111111668881111111111111118888881111111111111116688811111111111111188888811111111111111166888888888
    8888888888881111111111111668881111111111111111188888811111111111116688811111111111111111888888111111111111166888111111111111111118888881111111111111668888888888
    8888888888888111111111116688811111111111111111118888881111111111166888111111111111111111188888811111111111668881111111111111111111888888111111111116688888888888
    8888888888888811111111166888811111111111111111116888888111111111668888111111111111111111168888881111111116688881111111111111111111688888811111111166888888888888
    8888888888888886666666668888811111111111111111116888888866666666688888111111111111111111168888888666666666888881111111111111111111688888886666666668888888888888
    8888888888888888888888888888811111111111111111116888888888888888888888111111111111111111168888888888888888888881111111111111111111688888888888888888888888888888
    8888888888888811111111188888811111111111111111116888888111111111888888111111111111111111168888881111111118888881111111111111111111688888811111111188888888888888
    8888888888888111111111118888811111111111111111116888881111111111188888111111111111111111168888811111111111888881111111111111111111688888111111111118888888888888
    8888888888881111111111111888811111111111111111116888811111111111118888111111111111111111168888111111111111188881111111111111111111688881111111111111888888888888
    8888888888811111111111111188811111111111111111116888111111111111111888111111111111111111168881111111111111118881111111111111111111688811111111111111188888888888
    8888888888111111111111111118811111111111111111116881111111111111111188111111111111111111168811111111111111111881111111111111111111688111111111111111118888888888
    8888888881111111111111111111881111111111111111166811111111111111111118811111111111111111668111111111111111111188111111111111111116681111111111111111111888888888
    8888888881111111111111111111688111111111111111668811111111111111111116881111111111111116688111111111111111111168811111111111111166881111111111111111111688888888
    8888888881111111111111111111688811111111111116688811111111111111111116888111111111111166888111111111111111111168881111111111111668881111111111111111111688888888
    8888888881111111111111111111688881111111111166888811111111111111111116888811111111111668888111111111111111111168888111111111116688881111111111111111111688888888
    8888888881111111111111111111688888111111111668888811111111111111111116888881111111116688888111111111111111111168888811111111166888881111111111111111111688888888
    8888888881111111111111111111688888866666666688888811111111111111111116888888666666666888888111111111111111111168888886666666668888881111111111111111111688888888
    8888888881111111111111111111688888888888888888888811111111111111111116888888888888888888888111111111111111111168888888888888888888881111111111111111111688888888
    8888888881111111111111111111688888111111111888888811111111111111111116888881111111118888888111111111111111111168888811111111188888881111111111111111111688888888
    8888888881111111111111111111688881111111111188888811111111111111111116888811111111111888888111111111111111111168888111111111118888881111111111111111111688888888
    8888888888111111111111111116688811111111111118888881111111111111111166888111111111111188888811111111111111111668881111111111111888888111111111111111116688888888
    8888888888811111111111111166888111111111111111888888111111111111111668881111111111111118888881111111111111116688811111111111111188888811111111111111166888888888
    8888888888881111111111111668881111111111111111188888811111111111116688811111111111111111888888111111111111166888111111111111111118888881111111111111668888888888
    8888888888888111111111116688811111111111111111118888881111111111166888111111111111111111188888811111111111668881111111111111111111888888111111111116688888888888
    8888888888888811111111166888811111111111111111116888888111111111668888111111111111111111168888881111111116688881111111111111111111688888811111111166888888888888
    8888888888888886666666668888811111111111111111116888888866666666688888111111111111111111168888888666666666888881111111111111111111688888886666666668888888888888
    8888888888888888888888888888811111111111111111116888888888888888888888111111111111111111168888888888888888888881111111111111111111688888888888888888888888888888
    8888888888888888888888888888811111111111111111116888888888888888888888111111111111111111168888888888888888888881111111111111111111688888888888888888888888888888
    8888888888888888888888888888811111111111111111116888888888888888888888111111111111111111168888888888888888888881111111111111111111688888888888888888888888888888
    8888888888888888888888888888811111111111111111116888888888888888888888111111111111111111168888888888888888888881111111111111111111688888888888888888888888888888
    8888888888888888888888888888811111111111111111116888888888888888888888111111111111111111168888888888888888888881111111111111111111688888888888888888888888888888
    8888888888888888888888888888811111111111111111116888888888888888888888111111111111111111168888888888888888888881111111111111111111688888888888888888888888888888
    8888888888888888888888888888881111111111111111166888888888888888888888811111111111111111668888888888888888888888111111111111111116688888888888888888888888888888
    8888888888888888888888888888888111111111111111668888888888888888888888881111111111111116688888888888888888888888811111111111111166888888888888888888888888888888
    8888888888888888888888888888888811111111111116688888888888888888888888888111111111111166888888888888888888888888881111111111111668888888888888888888888888888888
    8888888888888888888888888888888881111111111166888888888888888888888888888811111111111668888888888888888888888888888111111111116688888888888888888888888888888888
    8888888888888888888888888888888888111111111668888888888888888888888888888881111111116688888888888888888888888888888811111111166888888888888888888888888888888888
    8888888888888888888888888888888888866666666688888888888888888888888888888888666666666888888888888888888888888888888886666666668888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    `)
pause(2000)
animation.runImageAnimation(
Dummy_sprite,
[img`
    4444444444444444444444444444444444444444...
    4444444444444444444444444444444444444444...
    4411111111111111111111111111111111111144...
    4411112111122221112222112222111222221144222
    4411121211121112112112112111211112111144222
    4411211121121112112112112111211112111144.22
    4411211121121112112112112111211112111144.22
    4411222221121112112112112222111112111144.22
    4411211121121112112112112111111112111144.22
    4411211121121112112112112111111112111144.22
    4411211121121112112112112111111112111144.22
    4411211121122221112222112111111112111144.22
    4411111111111111111111111111111111111144.22
    4411111111111111111111111111111111111144.22
    4411111111111111111111111111111111111144.22
    4444444444444444444444444444444444444444.22
    4444444444444444444444444444444444444444.22
    ...22....................................22
    ...2222222222222222222222222222222222222222
    ...2222222222222222222222222222222222222222
    `,img`
    4444444444444444444444444444444444444444...
    4444444444444444444444444444444444444444...
    4455555555555555555555555555555555555544...
    4455554555544445554444554444555444445544222
    4455545455545554554554554555455554555544222
    4455455545545554554554554555455554555544.22
    4455455545545554554554554555455554555544.22
    4455444445545554554554554444555554555544.22
    4455455545545554554554554555555554555544.22
    4455455545545554554554554555555554555544.22
    4455455545545554554554554555555554555544.22
    4455455545544445554444554555555554555544.22
    4455555555555555555555555555555555555544.22
    4455555555555555555555555555555555555544.22
    4455555555555555555555555555555555555544.22
    4444444444444444444444444444444444444444.22
    4444444444444444444444444444444444444444.22
    ...22....................................22
    ...2222222222222222222222222222222222222222
    ...2222222222222222222222222222222222222222
    `,img`
    4444444444444444444444444444444444444444...
    4444444444444444444444444444444444444444...
    4455555555555555555555555555555555555544...
    4455554555544445554444554444555444445544222
    4455545455545554554554554555455554555544222
    4455455545545554554554554555455554555544.22
    4455455545545554554554554555455554555544.22
    4455444445545554554554554444555554555544.22
    4455455545545554554554554555555554555544.22
    4455455545545554554554554555555554555544.22
    4455455545545554554554554555555554555544.22
    4455455545544445554444554555555554555544.22
    4455555555555555555555555555555555555544.22
    4455555555555555555555555555555555555544.22
    4455555555555555555555555555555555555544.22
    4444444444444444444444444444444444444444.22
    4444444444444444444444444444444444444444.22
    ...22....................................22
    ...2222222222222222222222222222222222222222
    ...2222222222222222222222222222222222222222
    `,img`
    4444444444444444444444444444444444444444...
    4444444444444444444444444444444444444444...
    4411111111111111111111111111111111111144...
    4411112111122221112222112222111222221144222
    4411121211121112112112112111211112111144222
    4411211121121112112112112111211112111144.22
    4411211121121112112112112111211112111144.22
    4411222221121112112112112222111112111144.22
    4411211121121112112112112111111112111144.22
    4411211121121112112112112111111112111144.22
    4411211121121112112112112111111112111144.22
    4411211121122221112222112111111112111144.22
    4411111111111111111111111111111111111144.22
    4411111111111111111111111111111111111144.22
    4411111111111111111111111111111111111144.22
    4444444444444444444444444444444444444444.22
    4444444444444444444444444444444444444444.22
    ...22....................................22
    ...2222222222222222222222222222222222222222
    ...2222222222222222222222222222222222222222
    `],
350,
false
)
music.playMelody("F - - - - - - - ", 100)
pause(300)
Pet = sprites.create(img`
    ..........bb.......bb
    ..........3bb.....bb3
    ..........33bb...bb33
    .bbb......33bbbbbbb33
    bbbb......bbbbbbbbbbb
    bbb.......bbbbbbbbbbb
    bb........bbbbbbbbbbb
    bbb.......bbf1bbbf1bb
    .bb.......bbffbbbffbb
    .bbb......bbbbbbbbbbb
    ..bbbbbbbcbbbd333dbbb
    ...bbbbbbcbbbdd3ddbbb
    ....bbbbbcbbbbdddbbbb
    ....bbbbbbccccccccc..
    ....bbbbbbccccccccc..
    ....bbbbbbbbbbbbbbb..
    ....bbbbbbbbbbbbbbb..
    ....bbbbbbbbbbbbbbb..
    ....bbb.cc...bbb.cc..
    ....bbb.cc...bbb.cc..
    ....bbb.cc...bbb.cc..
    ....bbb.cc...bbb.cc..
    ....bbb......bbb.....
    `, SpriteKind.Player)
animation.runImageAnimation(
Pet,
[img`
    .........................
    .........................
    ...........bb.......bb...
    ...........3bb.....bb3...
    ...........33bb...bb33...
    ..bbb......33bbbbbbb33...
    .bbbb......bbbbbbbbbbb...
    .bbb.......bbbbbbbbbbb...
    .bb........bbbbbbbbbbb...
    .bbb.......bbf1bbbf1bb...
    ..bb.......bbffbbbffbb...
    ..bbb......bbbbbbbbbbb...
    ...bbbbbbbcbbbd333dbbb...
    ....bbbbbbcbbbdd3ddbbb...
    .....bbbbbcbbbbdddbbbb...
    .....bbbbbbccccccccc.....
    .....bbbbbbccccccccc.....
    .....bbbbbbbbbbbbbbb.....
    .....bbbbbbbbbbbbbbb.....
    .....bbbbbbbbbbbbbbb.....
    .....bbb.cc...bbb.cc.....
    .....bbb.cc...bbb.cc.....
    .....bbb.cc...bbb.cc.....
    .....bbb.cc...bbb.cc.....
    .....bbb......bbb........
    `,img`
    .........................
    .........................
    .........................
    ...........bb.......bb...
    ...........3bb.....bb3...
    ...........33bb...bb33...
    bbb........33bbbbbbb33...
    bbbb.......bbbbbbbbbbb...
    .bbb.......bbbbbbbbbbb...
    ..bb.......bbbbbbbbbbb...
    ..bb.......bbf1bbbf1bb...
    ..bb.......bbffbbbffbb...
    ..bbb......bbbbbbbbbbb...
    ...bbbbbbbcbbbd333dbbb...
    ....bbbbbbcbbbdd3ddbbb...
    .....bbbbbcbbbbdddbbbb...
    .....bbbbbbccccccccc.....
    .....bbbbbbccccccccc.....
    .....bbbbbbbbbbbbbbb.....
    .....bbbbbbbbbbbbbbb.....
    .....bbb.cc...bbb.cc.....
    .....bbb.cc...bbb.cc.....
    .....bbb.cc...bbb.cc.....
    .....bbb.cc...bbb.cc.....
    .....bbb......bbb........
    `],
500,
true
)
Dummy_sprite.destroy()
pause(2000)
game.splash("You have adopted a pet")
let name = game.askForString("Name:")
game.splash("You pet is named " + name)
tiles.setTilemap(tilemap`level2`)
game.setDialogFrame(img`
    . . . 1 1 1 1 1 1 1 1 1 . . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 . . 
    . 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    . 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
    . . 1 1 1 1 1 1 1 1 1 1 1 . . 
    . . . 1 1 1 1 1 1 1 1 1 . . . 
    `)
game.showLongText("To teach a pet to walk click A", DialogLayout.Right)
scene.cameraFollowSprite(Pet)
pause(500)
game.showLongText("Wow! Your pet is growing fast lets teach it to garden.", DialogLayout.Right)
game.showLongText("To teach a pet to Garden click B", DialogLayout.Right)
Plant = true
game.onUpdate(function () {
    if (CanWalk) {
        controller.moveSprite(Pet, 100, 100)
    }
})