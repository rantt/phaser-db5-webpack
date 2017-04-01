import 'pixi'
import 'p2'
import Phaser from 'phaser'

import BootState from './states/Boot'
import LoadState from './states/Load'
import MenuState from './states/Menu'
import PlayState from './states/Play'

class Game extends Phaser.Game {
  constructor () {
    let width = 800
    let height = 600

    super(width, height, Phaser.AUTO, 'game', null)
    this.state.add('Boot', BootState, false)
    this.state.add('Load', LoadState, false)
    this.state.add('Menu', MenuState, false)
    this.state.add('Play', PlayState, false)
    this.state.start('Boot')
  }
}

window.game = new Game()

