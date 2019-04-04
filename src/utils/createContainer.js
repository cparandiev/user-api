class Container {
  constructor() {
    this.services = {};
  }

  registerService(name, dependency) {
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

    return this;
  }
}

module.exports = () => new Container();
