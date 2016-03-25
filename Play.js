boil.Play = function(){};


var pinky = {}, meow = {};
var haruki;
var kagura;
var speed = 10;
var controller, pet = {x: 0};
var bee, beeSpeed = 1;
var target;


boil.Play.prototype = {
    
    preload: function(){
        game.load.spritesheet('pinky', 'Assets/Spritesheets/pinky.png', 70, 70);
        game.load.spritesheet('meow', 'Assets/Spritesheets/meowMeow.png', 72, 69);
        game.load.spritesheet('haruki', 'Assets/Spritesheets/haruki.png', 190, 470);
        game.load.spritesheet('kagura', 'Assets/Spritesheets/kagura.png', 310, 500);
        game.load.spritesheet('bee', 'Assets/Spritesheets/bee.png', 250, 200);
        
    
    },
    create: function(){
        game.physics.startSystem(Phaser.ARCADE);
        console.log('You are in the Play state');
        game.stage.backgroundColor = '#00FF00';
        game.physics.startSystem(Phaser.Physics.ARCADE);

        game.input.keyboard.addKey(Phaser.Keyboard.P).onDown.add(addPinky)
        game.input.keyboard.addKey(Phaser.Keyboard.M).onDown.add(addMeow)
        game.input.keyboard.addKey(Phaser.Keyboard.C).onDown.add(changeController)
        game.input.keyboard.addKey(Phaser.Keyboard.J).onDown.add(changePet)
        
        bee=game.add.sprite(900, 500, 'bee');
        bee.scale.setTo(0.22);
        bee.animations.add('fly', [0,1,2,3]);
        bee.animations.play('fly', 12, true);
        game.add.tween(bee).to({y: '+50'}, 1000, 'Linear', true, 0, 2000, true);
        
        
        haruki=game.add.sprite(130, 90, 'haruki');
        haruki.scale.setTo(0.20)
        haruki.animations.add('walk', [0,1,2,3,4,5,6]);
    
        kagura=game.add.sprite(50, 90, 'kagura');
        kagura.scale.setTo(0.19);
        kagura.animations.add('walk', [0,1,2,3,4,5,6]);
        game.physics.enable([haruki, kagura, bee])
        
        haruki.body.gravity.y=100
        kagura.body.gravity.y=100
        
        haruki.body.collideWorldBounds = true; 
        kagura.body.collideWorldBounds = true; 
        
        controller = haruki;
        target = controller;
    },
    update: function(){
        game.physics.arcade.overlap(target, bee, function(){console.log('hit');});
        
        if(Math.abs(bee.x - target.x) < 5) {
            //nothing
        }
        else if(bee.x > target.x) {
            bee.x -= beeSpeed;
        } else if(bee.x< target.x) {
            bee.x += beeSpeed;
        }
        
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
        
        
        if(pet.x === 0){
            
        }
        else if (game.input.keyboard.isDown(Phaser.Keyboard.A)){
            pet.x-=speed;
            pet.animations.play('petWalk', 12, true);
        }
        else if(game.input.keyboard.isDown(Phaser.Keyboard.D)){
         pet.x+=speed;
            pet.animations.play('petWalk', 12, true);
        }
    }
}
         
function addPinky(){
    if('alive' in pinky && pinky.alive) {
        target = controller;
        return pinky.destroy();
    }
    pinky=game.add.sprite(100, 100, 'pinky');
    pinky.scale.setTo(0.7)
    pinky.animations.add('petWalk', [0,1,2,3]);
    pinky.animations.play('petWalk', 4, true);
    game.physics.enable(pinky);
    pinky.body.gravity.y=100
    pinky.body.collideWorldBounds = true;
    pet=pinky;
    target=pet;
}

function addMeow(){
    if('alive' in meow && meow.alive){
        target = controller;
        return meow.destroy();
    }
    meow=game.add.sprite(90, 200, 'meow');
    meow.scale.setTo(0.7)
    meow.animations.add('petWalk', [0,1,2]);
    meow.animations.play('petWalk', 4, true);
    game.physics.enable(meow);
    meow.body.gravity.y=100
    meow.body.collideWorldBounds = true; 
    pet=meow;
    target=pet;
}

function changeController(){
    console.log('switching characters');
    if(controller == haruki){
        controller = kagura;
    }
    else{
        controller = haruki;
    }
    target = controller;
} 

function changePet(){
    console.log('switching characters');
    if(!meow || !pinky) {
        return false;
    }
    if(pet == meow){
        pet = pinky;
    }
    else{
        pet = meow;
    }
} 


