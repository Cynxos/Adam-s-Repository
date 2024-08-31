document.addEventListener("DOMContentLoaded", function() {
    var selectElement = document.getElementById("genres");
    selectElement.addEventListener("change", function() {
      alert(selectElement.value);
    });
  });
  