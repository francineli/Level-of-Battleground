boil.Play = function(){};


var pinky, meow;
var haruki;
var kagura;
var speed = 10;
var controller;


boil.Play.prototype = {
    
    preload: function(){
        game.load.spritesheet('pinky', 'Assets/Spritesheets/pinky.png', 70, 70);
        game.load.spritesheet('meow', 'Assets/Spritesheets/meowMeow.png', 72, 69);
        game.load.spritesheet('haruki', 'Assets/Spritesheets/haruki.png', 190, 470);
        game.load.spritesheet('kagura', 'Assets/Spritesheets/kagura.png', 310, 500);
    },
    create: function(){
        game.physics.startSystem(Phaser.ARCADE);
        console.log('You are in the Play state');
        game.stage.backgroundColor = '#00FF00';
        game.physics.startSystem(Phaser.Physics.ARCADE);

        game.input.keyboard.addKey(Phaser.Keyboard.P).onDown.add(addPinky)
        game.input.keyboard.addKey(Phaser.Keyboard.M).onDown.add(addMeow)
        game.input.keyboard.addKey(Phaser.Keyboard.C).onDown.add(changeController)
        
        haruki=game.add.sprite(130, 90, 'haruki');
        haruki.scale.setTo(0.20)
        haruki.animations.add('walk', [0,1,2,3,4,5,6]);
    
        kagura=game.add.sprite(50, 90, 'kagura');
        kagura.scale.setTo(0.19);
        kagura.animations.add('walk', [0,1,2,3,4,5,6]);
        game.physics.enable([haruki, kagura])
        
        haruki.body.gravity.y=100
        kagura.body.gravity.y=100
        
        haruki.body.collideWorldBounds = true; 
        kagura.body.collideWorldBounds = true; 
        
        controller = haruki;
    },
    update: function(){
        
        if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
            controller.x-=speed;
            controller.animations.play('walk', 12, true);
        }
        else if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
            controller.x+=speed;
            controller.animations.play('walk', 12, true);
        }
        else{
            controller.animations.stop('walk');
            controller.frame = 0;   
        }
        if(game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)){
            controller.body.velocity.y = -60;
        }
    }
}
         
function addPinky(){
    pinky=game.add.sprite(100, 100, 'pinky');
    pinky.animations.add('oreo', [0,1,2,3]);
    pinky.animations.play('oreo', 4, true);
}

function addMeow(){
    meow=game.add.sprite(90, 200, 'meow');
    meow.animations.add('milk', [0,1,2]);
    meow.animations.play('milk', 4, true);
}

function changeController(){
    console.log('switching characters');
    if(controller == haruki){
        controller = kagura;
    }
    else{
        controller = haruki;
    }
} 


