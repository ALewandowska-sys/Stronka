//galerie w produktach

const Carousel = document.getElementsByClassName('carousel');
const right = document.getElementsByClassName('right-btn');
const left = document.getElementsByClassName('left-btn');


for(let i=0; i<Carousel.length; i++){
    
    let pictures;
    if(i===0){  //szklany pucharek
        pictures = ["zdj/produkty/swiece/JPEG/sloik.jpg", "zdj/produkty/swiece/JPEG/sloik2.jpg", "zdj/produkty/swiece/JPEG/szklane.jpg", "zdj/produkty/swiece/JPEG/szklane2.jpg", "zdj/produkty/swiece/JPEG/pucharek.jpg", "zdj/produkty/swiece/JPEG/pucharek1.jpg"];
    }
    if(i ===1){ //sloik
        pictures = ["zdj/produkty/swiece/JPEG/inhala.jpg", "zdj/produkty/swiece/JPEG/inhala1.jpg"];
    }
    if(i ===2){ //inhala
        pictures = ["zdj/produkty/swiece/JPEG/inhala.jpg", "zdj/produkty/swiece/JPEG/inhala1.jpg"];
    }
    if(i ===3){ //slon
        pictures = ["zdj/produkty/swiece/JPEG/slon.jpg", "zdj/produkty/swiece/JPEG/slon5.jpg", "zdj/produkty/swiece/JPEG/slon1.jpg"];
    }
    if(i ===4){ //niedziwedz
        pictures = ["zdj/produkty/swiece/JPEG/niedzwiedz3.jpg", "zdj/produkty/swiece/JPEG/niedzwiedz4.jpg", "zdj/produkty/swiece/JPEG/niedzwiedz.jpg", "zdj/produkty/swiece/JPEG/niedzwiedz2.jpg"];
    }
    if(i ===5){ //kon
        pictures = ["zdj/produkty/swiece/JPEG/kon.jpg", "zdj/produkty/swiece/JPEG/kon1.jpg"];
    }
    if(i ===6){ //zakochani
        pictures = ["zdj/produkty/swiece/JPEG/para3.jpg", "zdj/produkty/swiece/JPEG/para2.jpg", "zdj/produkty/swiece/JPEG/para.jpg"];
    }
    if(i ===7){ //m&m
        pictures = ["zdj/produkty/swiece/JPEG/body2.jpg", "zdj/produkty/swiece/JPEG/kob.jpg", "zdj/produkty/swiece/JPEG/kob1.jpg", "zdj/produkty/swiece/JPEG/kob2.jpg"];
    }
    if(i ===8){ //a&j
        pictures = ["zdj/produkty/swiece/JPEG/bodyrazem.jpg", "zdj/produkty/swiece/JPEG/women.jpg", "zdj/produkty/swiece/JPEG/women1.jpg", "zdj/produkty/swiece/JPEG/men.jpg", "zdj/produkty/swiece/JPEG/men1.jpg", "zdj/produkty/swiece/JPEG/men3.jpg"];
    }
    if(i ===9){ //emily
        pictures = ["zdj/produkty/swiece/JPEG/body1.jpg"];
    }
    if(i ===10){    //kaktus
        pictures = ["zdj/produkty/swiece/JPEG/kaktus1.jpg", "zdj/produkty/swiece/JPEG/kaktus.jpg", "zdj/produkty/swiece/JPEG/c.jpg", "zdj/produkty/swiece/JPEG/c2.jpg", "zdj/produkty/swiece/JPEG/opony.jpg", "zdj/produkty/swiece/JPEG/opona1.jpg", "zdj/produkty/swiece/JPEG/krolik2.jpg", "zdj/produkty/swiece/JPEG/krolik3.jpg", "zdj/produkty/swiece/JPEG/krolik4.jpg"];
    }
    
    if(i ===11){ //rubi
        pictures = ["zdj/produkty/swiece/JPEG/tealig.jpg", "zdj/produkty/swiece/JPEG/tealighty.jpg"];
    }
    if(i ===12){ //rozyczka
        pictures = ["zdj/produkty/swiece/JPEG/tealig.jpg", "zdj/produkty/swiece/JPEG/tealighty.jpg"];
    }
    if(i ===13){ //opona
        pictures = ["zdj/produkty/swiece/JPEG/tealig.jpg", "zdj/produkty/swiece/JPEG/tealighty.jpg"];
    }
    if(i ===14){ //sowa
        pictures = ["zdj/produkty/swiece/JPEG/tealig.jpg", "zdj/produkty/swiece/JPEG/tealighty.jpg"];
    }
    if(i ===15){ //zajac
        pictures = ["zdj/produkty/swiece/JPEG/tealig.jpg", "zdj/produkty/swiece/JPEG/tealighty.jpg"];
    }
    if(i ===16){ //zajac
        pictures = ["zdj/produkty/swiece/JPEG/tealig.jpg", "zdj/produkty/swiece/JPEG/tealighty.jpg"];
    }
    if(i ===17){ //zajac
        pictures = ["zdj/produkty/swiece/JPEG/tealig.jpg", "zdj/produkty/swiece/JPEG/tealighty.jpg"];
    }
    if(i ===18){ //kula mus
        pictures = ["zdj/produkty/kule/JPEG/kwiatek1.jpg", "zdj/produkty/kule/JPEG/kula.jpg", "zdj/produkty/kule/JPEG/kula2.jpg", "zdj/produkty/kule/JPEG/kula3.jpg", "zdj/produkty/kule/JPEG/kuleS.jpg", "zdj/produkty/kule/JPEG/kwiatek.jpg", "zdj/produkty/kule/JPEG/kwitek1.jpg"];
    }
    if(i ===19){ //serce mus
        pictures = ["zdj/produkty/kule/JPEG/serc6.jpg", "zdj/produkty/kule/JPEG/serc.jpg", "zdj/produkty/kule/JPEG/serc2.jpg", "zdj/produkty/kule/JPEG/serc3.jpg", "zdj/produkty/kule/JPEG/serc4.jpg"];
    }

        /*    
            
    */
    
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

//pokazanie ceny

/*
<li>Kula musująca - 9 zł</li>
                        <li>Kula musująca XXL - 21 zł</li>
                        <li>Kula musująca dla dzieci z niespodzianką w środku - 10 zł</li>
            <li>Świeca w szklanym słoiku 200 ml - 30 zł</li>
            <li>Świeca w szklanym słoiku 330 ml - 45 zł</li>
            <li>Świeca w szklanym słoiku 350 ml - 48 zł</li>       
            <li>Świeca INHALA 90 ml - 15 zł</li> 
            <li>Świeca INHALA 200 ml - 30 zł</li>
            <li>Marilyn - 30 zł</li> 
            <li>Martin - 35</li>             
            <li>Audrey - 35 zł </li>
            <li>Joe - 35 zł</li> 
            <li>Emily - 33 zł</li>  
            <li>Marilyn&#38Martin w zestawie - 50 zł</li>
            <li>Andrey&#38Joe w zestawie - 55 zł</li>
            <li>Kaktus Kajtek - 15 zł</li>
            <li>Rubi - 20 zł</li> 
            <li>Różyczka - 7 z</li>
            <li>Opona - 8 zł</li> 
            <li>Sowa - 10 zł</li> 
            <li>Zając wielkanocny - 10 zł</li>
            
            
*/