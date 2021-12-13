export class Keyboard {
  constructor(values, once = false) {
    this.values = values
    this.isDown = false
    this.isUp = true
    this.cancel = false
    this.once = once
    this.press = undefined
    this.release = undefined
    this.downListener = this.downHandler.bind(this)
    this.upListener = this.upHandler.bind(this)
    values.forEach(() => {
      window.addEventListener('keydown', this.downListener, false)
      window.addEventListener('keyup', this.upListener, false)
    })
  }

  downHandler(event) {
    if ( this.values.some(value => value === event.key) ) {
      if ( this.isUp && this.press ) {
        this.press()
      }
      this.isDisable = false
      this.isDown = true
      this.isUp = false
      event.preventDefault()
    }
  }

  upHandler(event) {
    if ( this.values.some(value => value === event.key) ) {
      if ( this.isDown && this.release ) {
        this.release()
      }
      this.isDown = false
      this.isUp = true
      event.preventDefault()
    }
  }

  disable() {
    if ( this.isDown && this.release ) {
      this.release()
      this.isDown = false
      this.isUp = true
    }
  }

  unsubscribe() {
    window.removeEventListener('keydown', this.downListener)
    window.removeEventListener('keyup', this.upListener)
  }
}

// window.addEventListener('keydown', event => console.log(event.key))