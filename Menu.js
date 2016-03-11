boil.Menu = function(){};

boil.Menu.prototype = {
    preload: function(){
        game.load.image('button', 'Assets/Sprites/Button.png')
    },
    create: function(){
        console.log('You are in the Menu state');
        game.stage.backgroundColor = '#FF0000';
        var button = game.add.button(400,300, 'button', function(){
           game.state.start('Play') 
        });
        button.anchor.setTo(0.5);
    },
    update: function(){
        
    }
};