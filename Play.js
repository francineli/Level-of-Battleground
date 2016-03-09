boil.Play = function(){};

boil.Play.prototype = {
    
    preload: function(){
        //
        game.load.image('star', 'Assets/Sprites/star.png');
        game.load.image('ground', 'Assets/Sprites/platform.png');
        game.load.image('diamond', 'Assets/Sprites/diamond.png');
        game.load.spritesheet('dude', 'Assets/Spritesheets/dude.png', 32, 48);
        game.load.image('sky', 'Assets/Backgrounds/sky.png');
        //
    },
    create: function(){
        console.log('You are in the Play state');
        game.stage.backgroundColor = '#00FF00';
        
        //
        game.add.sprite(0, 0, 'star');
        game.add.sprite(50,0, 'diamond');
        //
        
        game.input.onDown.add(function(){
            changeState('GameOver');
        }); 
    },
    update: function(){
        
    }
};    