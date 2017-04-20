import Phaser from 'phaser'

let goldTypeUser = true
let silverTypeUser = false
let game
let wheel
let canSpin
let images
let button
let spinTween
let prise

export default class Game extends Phaser.State {
  init () {}
  preload () {}

  create () {
    canSpin = true
    const bannerText = 'Bip Fortune'
    let banner = this.add.text(this.world.centerX, 30, bannerText)
    banner.font = 'Bangers'
    banner.padding.set(10, 16)
    banner.fontSize = 40
    banner.fill = '#30404D'
    banner.smoothed = false
    banner.anchor.setTo(0.5)

    if (goldTypeUser) {
      let test1 = this.add.sprite(106, 196, 'one')
      test1.anchor.setTo(0.5, 0.5)
      test1.angle -= 45
      let test2 = this.add.sprite(300, 126, 'one')
      test2.anchor.setTo(0.5, 0.5)
      test2.angle += 0
      let test3 = this.add.sprite(496, 196, 'one')
      test3.anchor.setTo(0.5, 0.5)
      test3.angle += 45
    }
    else if (silverTypeUser) {
      let test1 = this.add.sprite(106, 196, 'one')
      test1.anchor.setTo(0.5, 0.5)
      test1.angle -= 45
      let test2 = this.add.sprite(300, 126, 'one')
      test2.anchor.setTo(0.5, 0.5)
      test2.angle += 0
    }
    else {
      let test1 = this.add.sprite(106, 196, 'one')
      test1.anchor.setTo(0.5, 0.5)
      test1.angle -= 45
    }
    images = this.add.group()
    // Точка вращения группы картинок на экране
    images.x = this.world.centerX
    images.y = this.world.centerY
    // Точка вращения группы картинок
    images.pivot.x = this.world.centerX
    images.pivot.y = this.world.centerY
    // Расположение картинок покругу(углы в радианах!)
    wheel = images.create(this.world.centerX - 229, this.world.centerY - 229, 'wheel')
    let one = images.create(this.world.centerX + 150 * Math.cos(0), this.world.centerY + 150 * Math.sin(0), 'one')
    one.anchor.setTo(0.5, 0.5)
    one.angle += 90
    let two = images.create(this.world.centerX + 150 * Math.cos(0.785398), this.world.centerY + 150 * Math.sin(0.785398), 'one')
    two.anchor.setTo(0.5, 0.5)
    two.angle += 135
    let three = images.create(this.world.centerX + 150 * Math.cos(1.5708), this.world.centerY + 150 * Math.sin(1.5708), 'one')
    three.anchor.setTo(0.5, 0.5)
    three.angle += 180
    let fore = images.create(this.world.centerX + 150 * Math.cos(2.35619), this.world.centerY + 150 * Math.sin(2.35619), 'one')
    fore.anchor.setTo(0.5, 0.5)
    fore.angle += 225
    let five = images.create(this.world.centerX + 150 * Math.cos(3.14159), this.world.centerY + 150 * Math.sin(3.14159), 'one')
    five.anchor.setTo(0.5, 0.5)
    five.angle += 270
    let six = images.create(this.world.centerX + 150 * Math.cos(3.92699), this.world.centerY + 150 * Math.sin(3.92699), 'one')
    six.anchor.setTo(0.5, 0.5)
    six.angle += 315
    let seven = images.create(this.world.centerX + 150 * Math.cos(4.71239), this.world.centerY + 150 * Math.sin(4.71239), 'one')
    seven.anchor.setTo(0.5, 0.5)
    seven.angle += 0
    let eight = images.create(this.world.centerX + 150 * Math.cos(5.49779), this.world.centerY + 150 * Math.sin(5.49779), 'one')
    eight.anchor.setTo(0.5, 0.5)
    eight.angle += 45
    button = this.add.button(this.world.centerX - 34, this.world.centerY - 34, 'one', spin, game, 2, 1, 0)
    function up () {
      console.log('button up', arguments)
    }
    function over () {
      console.log('button over')
    }
    function out () {
      console.log('button out')
    }
    function spin () {
      console.log(this);
      if (canSpin) {
        let rounds = 5
        canSpin = false
        console.warn('this.rnd', window.game.rnd)
        let degrees = window.game.rnd.pick([0, 45, 90, 135, 180, 225, 270, 315])
        prise = degrees
        spinTween = window.game.add.tween(images).to({
          angle: 360 * rounds + degrees
        }, 3000, Phaser.Easing.Exponential.Out, true)
        const winPrize = () => { canSpin = true }
        spinTween.onComplete.add(() => {
          console.log('complete spin tween', this)
          winPrize()
        }, this)
      }
    }
  }

  render () {
  }
}
