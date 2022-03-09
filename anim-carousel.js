//galerie w produktach

const Carousel = document.getElementsByClassName('carousel');
const right = document.getElementsByClassName('right-btn');
const left = document.getElementsByClassName('left-btn');


for(let i=0; i<Carousel.length; i++){
    
    let pictures;
    if(i===0){
        pictures = ["zdj/produkty/swiece/JPEG/sloik.jpg", "zdj/produkty/swiece/JPEG/sloik2.jpg", "zdj/produkty/swiece/JPEG/szklane.jpg", "zdj/produkty/swiece/JPEG/szklane2.jpg", "zdj/produkty/swiece/JPEG/pucharek.jpg", "zdj/produkty/swiece/JPEG/pucharek1.jpg"];
    }
    if(i ===1){
        pictures = ["zdj/produkty/swiece/JPEG/inhala.jpg", "zdj/produkty/swiece/JPEG/inhala1.jpg"];
    }
    if(i ===2){
        pictures = ["zdj/produkty/swiece/JPEG/inhala.jpg", "zdj/produkty/swiece/JPEG/inhala1.jpg"];
    }
    if(i ===3){
        pictures = ["zdj/produkty/swiece/JPEG/slon.jpg", "zdj/produkty/swiece/JPEG/slon5.jpg", "zdj/produkty/swiece/JPEG/slon1.jpg"];
    }
    if(i ===4){ 
        pictures = ["zdj/produkty/swiece/JPEG/niedzwiedz3.jpg", "zdj/produkty/swiece/JPEG/niedzwiedz4.jpg", "zdj/produkty/swiece/JPEG/niedzwiedz.jpg", "zdj/produkty/swiece/JPEG/niedzwiedz2.jpg"];
    }
    if(i ===5){
        pictures = ["zdj/produkty/swiece/JPEG/kon.jpg", "zdj/produkty/swiece/JPEG/kon1.jpg"];
    }
    if(i ===6){
        pictures = ["zdj/produkty/swiece/JPEG/para3.jpg", "zdj/produkty/swiece/JPEG/para2.jpg", "zdj/produkty/swiece/JPEG/para.jpg"];
    }
    if(i ===7){
        pictures = ["zdj/produkty/swiece/JPEG/kob.jpg", "zdj/produkty/swiece/JPEG/kob1.jpg", "zdj/produkty/swiece/JPEG/kob2.jpg", "zdj/produkty/swiece/JPEG/body2.jpg", ];
    }
    if(i ===8){
        pictures = ["zdj/produkty/swiece/JPEG/body1.jpg"];
    }
    if(i ===9){
        pictures = ["zdj/produkty/swiece/JPEG/women.jpg", "zdj/produkty/swiece/JPEG/women1.jpg", "zdj/produkty/swiece/JPEG/men.jpg", "zdj/produkty/swiece/JPEG/men1.jpg", "zdj/produkty/swiece/JPEG/men3.jpg", "zdj/produkty/swiece/JPEG/bodyrazem.jpg"];
    }
    if(i ===10){
        pictures = ["zdj/produkty/swiece/JPEG/kaktus1.jpg", "zdj/produkty/swiece/JPEG/kaktus.jpg", "zdj/produkty/swiece/JPEG/c.jpg", "zdj/produkty/swiece/JPEG/c2.jpg", "zdj/produkty/swiece/JPEG/opony.jpg", "zdj/produkty/swiece/JPEG/opona1.jpg", "zdj/produkty/swiece/JPEG/krolik2.jpg", "zdj/produkty/swiece/JPEG/krolik3.jpg", "zdj/produkty/swiece/JPEG/krolik4.jpg"];
    }
    
    if(i ===8){
        pictures = ["zdj/produkty/swiece/JPEG/tealig.jpg", "zdj/produkty/swiece/JPEG/tealighty.jpg"];
    }
            
    
    let imgCarousel = Carousel[i];
    let rightBtn = right[i];
    let leftBtn = left[i];
    imgCarousel.src = pictures[0];
    let position = 0;

    const moveRight = () => {
        if (position >= pictures.length - 1) {
            position = 0
            imgCarousel.src = pictures[position];
            return;
        }
        imgCarousel.src = pictures[position + 1];
        position++;
    }

    const moveLeft = () => {
        if (position < 1) {
            position = pictures.length - 1;
            imgCarousel.src = pictures[position];
            return;
        }
        imgCarousel.src = pictures[position - 1];
        position--;
    }

    rightBtn.addEventListener("click", moveRight);
    leftBtn.addEventListener("click", moveLeft);

}






//pokazanie podgrupy

function show(groupId, nrHr) {
  var elem = document.getElementById(groupId);
  var foo = window.getComputedStyle(elem, null);
    var animHr = document.getElementById(nrHr);
    
  if (foo.getPropertyValue("display") == 'none') {
    elem.style.display = 'flex';
      animHr.style.transform = "scaleX(-2)";
  } else {
    elem.style.display = 'none';
      animHr.style.transform = "scaleX(1)";
  }
}
