class Container {
  constructor() {
    this.services = {};
  }

  registerService(name, dependency, lazyInstallation = true) {
    if (lazyInstallation) {
      Object.defineProperty(this, name, {
        get: () => {
          if (!this.services.name) {
            this.services[name] = dependency(this);
          }

          return this.services[name];
        },
        configurable: true,
        enumerable: true
      });
    } else if (!this.services.name) {
      this.services[name] = dependency(this);
      this[name] = this.services[name];
    }

    return this;
  }
}

module.exports = () => new Container();
