"use strict";

class Style {
    constructor() {
      this.style = null;
    }
  
    applyStyle(string) {
      return this.style(string);
    }
  }
  
  export default Style;