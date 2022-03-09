//show a menu on phone

function showMenu(){
    var navigator = document.getElementById("navigator");
  var foo = window.getComputedStyle(navigator, null);
    
    if (foo.getPropertyValue("display") == 'none') {
    navigator.style.display = 'flex';
  } else {
    navigator.style.display = 'none';
  }
}