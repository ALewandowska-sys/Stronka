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
    if(i ===16){ //tealighty
        pictures = ["zdj/produkty/swiece/JPEG/tealig.jpg", "zdj/produkty/swiece/JPEG/tealighty.jpg"];
    }
    if(i ===17){ //woski
        pictures = ["zdj/produkty/swiece/JPEG/tealig.jpg", "zdj/produkty/swiece/JPEG/tealighty.jpg"];
    }
    if(i ===18){ //kula mus
        pictures = ["zdj/produkty/kule/JPEG/kwiatek1.jpg", "zdj/produkty/kule/JPEG/kula.jpg", "zdj/produkty/kule/JPEG/kula2.jpg", "zdj/produkty/kule/JPEG/kula3.jpg", "zdj/produkty/kule/JPEG/kuleS.jpg", "zdj/produkty/kule/JPEG/kwiatek.jpg", "zdj/produkty/kule/JPEG/kwitek1.jpg"];
    }
    if(i ===19){ //serce mus
        pictures = ["zdj/produkty/kule/JPEG/serc6.jpg", "zdj/produkty/kule/JPEG/serc.jpg", "zdj/produkty/kule/JPEG/serc2.jpg", "zdj/produkty/kule/JPEG/serc3.jpg", "zdj/produkty/kule/JPEG/serc4.jpg"];
    } 
    if(i ===20){ //babeczki
        pictures = ["zdj/produkty/mydla/JPEG/bab.jpg", "zdj/produkty/mydla/JPEG/bab1.jpg", "zdj/produkty/mydla/JPEG/bab3.jpg"];
    }
    if(i ===21){ //mis
        pictures = ["zdj/produkty/mydla/JPEG/mis.jpg", "zdj/produkty/mydla/JPEG/mis2.jpg"];
    }
    if(i ===22){ //jelonek
        pictures = ["zdj/produkty/swiece/JPEG/tealig.jpg", "zdj/produkty/swiece/JPEG/tealighty.jpg"];
    }
    if(i ===23){ //serce
        pictures = ["zdj/produkty/swiece/JPEG/tealig.jpg", "zdj/produkty/swiece/JPEG/tealighty.jpg"];
    }
    if(i ===24){ //lovka
        pictures = ["zdj/produkty/swiece/JPEG/tealig.jpg", "zdj/produkty/swiece/JPEG/tealighty.jpg"];
    }
    if(i ===25){ //mini
        pictures = ["zdj/produkty/mydla/JPEG/mini.jpg", "zdj/produkty/mydla/JPEG/mini1.jpg", "zdj/produkty/mydla/JPEG/mini3.jpg", "zdj/produkty/mydla/JPEG/mini4.jpg", "zdj/produkty/mydla/JPEG/mini5.jpg", "zdj/produkty/mydla/JPEG/mino5.jpg"];
    }                        
    if(i ===26){ //mydloMas
        pictures = ["zdj/produkty/mydla/JPEG/mas.jpg", "zdj/produkty/mydla/JPEG/mas1.jpg", "zdj/produkty/mydla/JPEG/mas2.jpg", "zdj/produkty/mydla/JPEG/mas4.jpg", "zdj/produkty/mydla/JPEG/mas5.jpg", "zdj/produkty/mydla/JPEG/masujace.jpg"];
    }
    if(i ===27){ //kostka
        pictures = ["zdj/produkty/mydla/JPEG/mydla1.jpg", "zdj/produkty/mydla/JPEG/mydla2.jpg"];
    }
    if(i ===28){ //sol
        pictures = ["zdj/produkty/p+s/JPEG/sol3.jpg", "zdj/produkty/p+s/JPEG/sol.jpg", "zdj/produkty/p+s/JPEG/sol2.jpg", "zdj/produkty/p+s/JPEG/sol4.jpg", "zdj/produkty/p+s/JPEG/sol5.jpg", "zdj/produkty/p+s/JPEG/sol6.jpg"];
    }
    if(i ===29){ //puder
        pictures = ["zdj/produkty/p+s/JPEG/puder.jpg", "zdj/produkty/p+s/JPEG/puder3.jpg", "zdj/produkty/p+s/JPEG/puder2.jpg" ];
    }
    if(i ===30){ //frotka
        pictures = ["zdj/produkty/wlosy/JPEG/frotka.jpg", "zdj/produkty/wlosy/JPEG/wlosy.jpg", "zdj/produkty/wlosy/JPEG/wlosy2.jpg", "zdj/produkty/wlosy/JPEG/wlosy3.jpg", "zdj/produkty/wlosy/JPEG/wlosy4.jpg", "zdj/produkty/wlosy/JPEG/wlosy5.jpg", "zdj/produkty/wlosy/JPEG/losy6.jpg"];
    }
    if(i ===31){ //opaska
        pictures = ["zdj/produkty/wlosy/JPEG/opaski.jpg"];
    }
    if(i ===32){ //podkladka
        pictures = ["zdj/produkty/inne/JPEG/duzo.jpg", "zdj/produkty/inne/JPEG/1.jpg", "zdj/produkty/inne/JPEG/cos.jpg", "zdj/produkty/inne/JPEG/jasz.jpg", "zdj/produkty/inne/JPEG/kwiat.jpg", "zdj/produkty/inne/JPEG/pajak.jpg", "zdj/produkty/inne/JPEG/pozdr.jpg", "zdj/produkty/inne/JPEG/slon.jpg", "zdj/produkty/inne/JPEG/wzor.jpg"];
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
            
                        <ul><li>Mydło do rąk duże - 14 zł</li>
                        <li>Mydło do rąk małe - 9 zł</li></ul>
                        <ul><li>Mydlaną babeczka - 10 zł</li>
                        <li>Mydlane muffiny - 15 zł</li>
                        <li>3 sztuki mydlanych muffin - 35 zł</li></ul>
                        
                    <li>Sól do kąpieli 50 g (w szklanej probówce) - 5 zł</li>
                    <li>Sól do kąpieli 100 g (w papierowej torebce) - 7 zł</li>
                    <li>Sól do kąpieli 150 g (w szklanej butelce) - 15 zł</li>
                    <li>Sól do kąpieli 500 g (w szklanej butelce) - 35 zł</li>
                    <li>Puder do kąpieli 150 g - 15 zł</li>
                    <li>Puder do kąpieli 100 g - 10 zł</li>
                    <li>Puder do kąpieli 50 g - 5 zł</li>
                    
                    <li>Frotka klasyczna - 15 zł</li>
                    <li>Frotka ze wskążką - 18 zł</li>
            
*/