System.config({
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js"
  }
});

System.config({
  "map": {
    "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.1.0",
    "aurelia-history": "github:aurelia/history@0.1.0",
    "aurelia-route-recognizer": "github:aurelia/route-recognizer@0.1.0",
    "es6-shim": "github:paulmillr/es6-shim@0.21.1",
    "github:aurelia/dependency-injection@0.1.0": {
      "aurelia-metadata": "github:aurelia/metadata@0.1.0",
      "es6-shim": "github:paulmillr/es6-shim@0.21.1"
    }
  }
});
