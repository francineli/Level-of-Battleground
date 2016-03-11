boil.Play = function(){};


var pinky;


boil.Play.prototype = {
    
    preload: function(){
        game.load.spritesheet('pinky', 'Assets/Spritesheets/pinky.png', 70, 70);
        game.load.spritesheet('meow', 'Assets/Spritesheets/meowMeow.png', 72, 69);
    },
    create: function(){
        console.log('You are in the Play state');
        game.stage.backgroundColor = '#00FF00';
        game.physics.startSystem(Phaser.Physics.ARCADE);

        game.input.keyboard.addKey(Phaser.Keyboard.P).onDown.add(addPinky)
        game.input.keyboard.addKey(Phaser.Keyboard.C).onDown.add(addMeow)
    },
    update: function(){
        
    }
}
        
    
function addPinky(){
    pinky=game.add.sprite(100, 100, 'pinky');
    pinky.animations.add('oreo', [0,1,2,3]);
    pinky.animations.play('oreo', 4, true)
}

function addMeow(){
    meow=game.add.sprite(90, 200, 'meow');
    meow.animations.add('milk', [0,1,2]);
    meow.animations.play('milk', 4, true)
}


