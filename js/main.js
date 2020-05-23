/**
 * Created by Jerome on 03-03-16.
 */
//noinspection JSCheckFunctionSignatures,JSCheckFunctionSignatures,JSCheckFunctionSignatures
//Voy a cambiar la siguiente linea para enviarle la config 
//como parámetro y meterle otras cosas
//Remuevo: var game = new Phaser.Game(24*32, 17*32, Phaser.AUTO, document.getElementById('game'));
var config = {
    type: Phaser.AUTO,
    parent: document.getElementById('game'),
    width: 35*32, //Podemos cambiar el tamano del mapa, cada sprite tiene 32
    height: 17*32,
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 0 },
        debug: false
      }
    }
}
var game = new Phaser.Game(config);

game.state.add('Game',Game);
game.state.start('Game');