class Dog {
    constructor(name) {
      this.name = name;
    }
  };
 
    // 1
  class Labrador extends Dog {
    constructor(name, size) {
      this.size = size;
    }
  };
  // Won't work
  
    // 2
  class Labrador extends Dog {
    constructor(name, size) {
      super(name);
      this.size = size;
    }
  };
  // Will work
  
    // 3
  class Labrador extends Dog {
    constructor(size) {
      super(name);
      this.size = size;
    }
  };
  // Won't work
  
    // 4
  class Labrador extends Dog {
    constructor(name, size) {
      this.name = name;
      this.size = size;
    }
  };
  // Won't work