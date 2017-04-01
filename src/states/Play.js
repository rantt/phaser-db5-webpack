import Phaser from 'phaser'

class Play extends Phaser.State {
  preload () {
    this.score = 0
  }
  create () {
    this.game.world.setBounds(0, 0, this.game.width, this.game.height)

    this.wKey = this.game.input.keyboard.addKey(Phaser.Keyboard.W)
    this.aKey = this.game.input.keyboard.addKey(Phaser.Keyboard.A)
    this.sKey = this.game.input.keyboard.addKey(Phaser.Keyboard.S)
    this.dKey = this.game.input.keyboard.addKey(Phaser.Keyboard.D)

    // Create Twitter button as invisible, show during win condition to post highscore
    this.twitterButton = this.game.add.button(this.game.world.centerX, this.game.world.centerY + 200, 'twitter', this.twitter, this)
    this.twitterButton.anchor.set(0.5)
    this.twitterButton.visible = false
  }

  update () {

  }

  render () {
    // this.game.debug.text('Health: ' + tri.health, 32, 96);
  }

  _twitter () {
    // Popup twitter window to post highscore
    let gameUrl = 'http://www.divideby5.com/games/GAMETITLE/'
    let twitterName = 'rantt_'
    let tags = ['1GAM']

    window.open('http://twitter.com/share?text=My+best+score+is+' + this.score + '+playing+GAME+TITLE+See+if+you+can+beat+it.+at&via=' + twitterName + '&url=' + gameUrl + '&hashtags=' + tags.join(','), '_blank')
  }
}

export default Play
