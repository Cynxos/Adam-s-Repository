let landscape = () => {
    let result = "";
  
    let flat = x => {
      for (let count = 0; count < x; count++) {
        result += "_";
      }
    };
  
    let mountain = x => {
      result += "/";
      for (let counter = 0; counter < x; counter++) {
        result += "'";
      }
      result += "\\";
    };
  
    flat(4);
    mountain(4);
    flat(4);
  
    return result;
  };
  
  landscape();
  