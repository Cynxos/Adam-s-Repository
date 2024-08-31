function myMove() {
    var elem = document.getElementById("animate");   
    var pos = 0;
    var id = setInterval(frame, 1);
    function frame() {
      if (pos >= 350) {
        clearInterval(id);
      } else {
        pos++; 
        elem.style.left = pos + 'px'; 
      }
    }
  }
  