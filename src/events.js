function Event() {
  this.events = {};

  this.on = function (name, cb) {
    const eventCallbackStack = this._getHandler(name).callbackStack;
    eventCallbackStack.push(cb);
  };

  this.emit = function (name, ...args) {
    if (this.events[name]) {
      this.events[name].callbackStack.forEach((cb) => {
        cb.call(cb, ...args);
      });
      if (this.events[name].isOnce) {
        this.off(this.events[name]);
      }
    }
  };

  this.off = function (name) {
    this.events[name] && delete this.events[name];
  };

  this.once = (name, cb) => {
    const eventCallbackStack = this._getHandler(name).callbackStack;
    eventCallbackStack.push(cb);
  };

  this._getHandler = function (eventName, isOnce = false) {
    if (!this.events[eventName]) {
      this.events[eventName] = {
        isOnce,
        callbackStack: [],
      };
    }
    return this.events[eventName];
  };
}
module.exports = Event;
