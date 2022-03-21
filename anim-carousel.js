//galerie w produktach

const Carousel = document.getElementsByClassName('carousel');
const right = document.getElementsByClassName('right-btn');
const left = document.getElementsByClassName('left-btn');


for(let i=0; i<Carousel.length; i++){
    
    let pictures;
    if(i ===0){  //szklany pucharek
        pictures = ["zdj/produkty/swiece/JPEG/sloik.jpg", "zdj/produkty/swiece/JPEG/sloik2.jpg", "zdj/produkty/swiece/JPEG/szklane.jpg", "zdj/produkty/swiece/JPEG/szklane2.jpg", "zdj/produkty/swiece/JPEG/pucharek.jpg", "zdj/produkty/swiece/JPEG/pucharek1.jpg"];
    }
    if(i ===1){ //sloik
        pictures = ["zdj/produkty/swiece/JPEG/sloiki.jpg"];
    }
    if(i ===2){ //inhala
        pictures = ["zdj/produkty/swiece/JPEG/inhala.jpg", "zdj/produkty/swiece/JPEG/inhala1.jpg", "zdj/produkty/swiece/JPEG/inhala2.jpg"];
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
        pictures = ["zdj/produkty/swiece/JPEG/body2.jpg", "zdj/produkty/swiece/JPEG/kob.jpg", "zdj/produkty/swiece/JPEG/kob1.jpg", "zdj/produkty/swiece/JPEG/kob2.jpg", "zdj/produkty/swiece/JPEG/meen.jpg"];
    }
    if(i ===8){ //a&j
        pictures = ["zdj/produkty/swiece/JPEG/bodyrazem.jpg", "zdj/produkty/swiece/JPEG/women.jpg", "zdj/produkty/swiece/JPEG/women1.jpg", "zdj/produkty/swiece/JPEG/men.jpg", "zdj/produkty/swiece/JPEG/men1.jpg", "zdj/produkty/swiece/JPEG/men3.jpg"];
    }
    if(i ===9){ //emily
        pictures = ["zdj/produkty/swiece/JPEG/body1.jpg", "zdj/produkty/swiece/JPEG/emily2.jpg", "zdj/produkty/swiece/JPEG/emily.jpg"];
    }
    if(i ===10){  //kaktus
        pictures = ["zdj/produkty/swiece/JPEG/kaktus1.jpg", "zdj/produkty/swiece/JPEG/kaktus.jpg"];
    }
    if(i ===11){ //rubi
        pictures = ["zdj/produkty/swiece/JPEG/c.jpg", "zdj/produkty/swiece/JPEG/c2.jpg", "zdj/produkty/swiece/JPEG/rubi.jpg", "zdj/produkty/swiece/JPEG/rubi2.jpg"];
    }
    if(i ===12){ //rozyczka
        pictures = ["zdj/produkty/swiece/JPEG/rozyczka.png"];
    }
    if(i ===13){ //opona
        pictures = ["zdj/produkty/swiece/JPEG/opona1.jpg", "zdj/produkty/swiece/JPEG/opony.jpg"];
    }
    if(i ===14){ //sowa
        pictures = ["zdj/produkty/swiece/JPEG/sowa.png"];
    }
    if(i ===15){ //zajac
        pictures = ["zdj/produkty/swiece/JPEG/krolik2.jpg", "zdj/produkty/swiece/JPEG/krolik3.jpg", "zdj/produkty/swiece/JPEG/krolik4.jpg"];
    }
    if(i ===16){ //tealighty
        pictures = ["zdj/produkty/swiece/JPEG/tealighty.jpg", "zdj/produkty/swiece/JPEG/tealig.jpg", "zdj/produkty/swiece/JPEG/tea.jpg", "zdj/produkty/swiece/JPEG/tea1.jpg"];
    }
    if(i ===17){ //woski
        pictures = ["zdj/produkty/swiece/JPEG/wosk1.jpg", "zdj/produkty/swiece/JPEG/wosk.jpg", "zdj/produkty/swiece/JPEG/wosk2.jpg", "zdj/produkty/swiece/JPEG/woskP.jpg", "zdj/produkty/swiece/JPEG/woskP1.jpg"];
    }
    if(i ===18){ //kula mus
        pictures = ["zdj/produkty/kule/JPEG/kula.jpg", "zdj/produkty/kule/JPEG/kwiatek1.jpg", "zdj/produkty/kule/JPEG/kula2.jpg", "zdj/produkty/kule/JPEG/kula3.jpg", "zdj/produkty/kule/JPEG/kulaN.jpg", "zdj/produkty/kule/JPEG/kuleS.jpg", "zdj/produkty/kule/JPEG/kwiatek.jpg", "zdj/produkty/kule/JPEG/kwitek1.jpg"];
    }
    if(i ===19){ //serce mus
        pictures = ["zdj/produkty/kule/JPEG/serc6.jpg", "zdj/produkty/kule/JPEG/serc.jpg", "zdj/produkty/kule/JPEG/serc2.jpg", "zdj/produkty/kule/JPEG/serc3.jpg", "zdj/produkty/kule/JPEG/serc4.jpg"];
    }                         
    if(i ===20){ //mydloMas
        pictures = ["zdj/produkty/mydla/JPEG/mas.jpg", "zdj/produkty/mydla/JPEG/mas1.jpg", "zdj/produkty/mydla/JPEG/mas2.jpg", "zdj/produkty/mydla/JPEG/mas4.jpg", "zdj/produkty/mydla/JPEG/mas5.jpg", "zdj/produkty/mydla/JPEG/masujace.jpg"];
    }
    if(i ===21){ //lovka
        pictures = ["zdj/produkty/mydla/JPEG/lovka.jpg"];
    }
    if(i ===22){ //kostka
        pictures = ["zdj/produkty/mydla/JPEG/kostkiii.png", "zdj/produkty/mydla/JPEG/mydla1.jpg", "zdj/produkty/mydla/JPEG/kostka12.png", "zdj/produkty/mydla/JPEG/kostki.png", "zdj/produkty/mydla/JPEG/kostka11.png", "zdj/produkty/mydla/JPEG/mydla2.jpg"];
    }
    if(i ===23){ //babeczki
        pictures = ["zdj/produkty/mydla/JPEG/muff1.png", "zdj/produkty/mydla/JPEG/muff.png", "zdj/produkty/mydla/JPEG/muffinka.png", "zdj/produkty/mydla/JPEG/bab3.jpg", "zdj/produkty/mydla/JPEG/bab1.jpg", "zdj/produkty/mydla/JPEG/razem.png"];
    }
    if(i ===24){ //mis
        pictures = ["zdj/produkty/mydla/JPEG/mis.jpg", "zdj/produkty/mydla/JPEG/mis2.jpg"];
    }
    if(i ===25){ //jelonek
        pictures = ["zdj/produkty/mydla/JPEG/jelonek.png", "zdj/produkty/mydla/JPEG/jelonek1.png", "zdj/produkty/mydla/JPEG/jelonek2.png"];
    }
    if(i ===26){ //serce
        pictures = ["zdj/produkty/mydla/JPEG/serca.png", "zdj/produkty/mydla/JPEG/serceD.png"];
    }
    if(i ===27){ //miod
        pictures = ["zdj/produkty/mydla/JPEG/moid2.jpg", "zdj/produkty/mydla/JPEG/moid.jpg"];
    }
    if(i ===28){ //mini
        pictures = ["zdj/produkty/mydla/JPEG/mini.jpg", "zdj/produkty/mydla/JPEG/mini1.jpg", "zdj/produkty/mydla/JPEG/mini3.jpg", "zdj/produkty/mydla/JPEG/mini4.jpg", "zdj/produkty/mydla/JPEG/mini5.jpg", "zdj/produkty/mydla/JPEG/mino5.jpg"];
    }
    if(i ===29){ //sol
        pictures = ["zdj/produkty/p+s/JPEG/sol3.jpg", "zdj/produkty/p+s/JPEG/sol.jpg", "zdj/produkty/p+s/JPEG/sol2.jpg", "zdj/produkty/p+s/JPEG/sol5.jpg", "zdj/produkty/p+s/JPEG/sol6.jpg", "zdj/produkty/p+s/JPEG/sol4.jpg"];
    }
    if(i ===30){ //puder
        pictures = ["zdj/produkty/p+s/JPEG/puder.jpg", "zdj/produkty/p+s/JPEG/puder3.jpg", "zdj/produkty/p+s/JPEG/puder2.jpg" ];
    }
    if(i ===31){ //frotka
        pictures = ["zdj/produkty/wlosy/JPEG/frotka.jpg", "zdj/produkty/wlosy/JPEG/wlosy.jpg", "zdj/produkty/wlosy/JPEG/wlosy2.jpg", "zdj/produkty/wlosy/JPEG/wlosy3.jpg", "zdj/produkty/wlosy/JPEG/wlosy4.jpg", "zdj/produkty/wlosy/JPEG/wlosy5.jpg", "zdj/produkty/wlosy/JPEG/losy6.jpg"];
    }
    if(i ===32){ //opaska
        pictures = ["zdj/produkty/wlosy/JPEG/opaski.jpg", "zdj/produkty/wlosy/JPEG/opaski1.jpg"];
    }
    if(i ===33){ //podkladka
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



//zarzadzanie podgrupa


let section = document.getElementsByClassName('newSection');
let test = document.getElementsByClassName('podgrupa');
let hr = document.getElementsByClassName('fullHr');

for(let i=0; i<test.length; i++){
    if(window.getComputedStyle(section[i]).display == 'flex'){
        test[i].style.backgroundImage = "linear-gradient(to left, transparent, #FFEFD5, transparent)";
    }
    test[i].addEventListener("click", () =>{
        var foo = window.getComputedStyle(section[i], null);
        
        if (foo.getPropertyValue("display") == 'none') {
          section[i].style.display = 'flex';
            if(i<3){
                for(let m=0; m<3; m++){
                    if(m === i){
                        continue;
                   }else{
                        section[m].style.display = 'none';
                        test[m].style.backgroundImage = "";
                   }
                }
            }else{
                for(let m=0; m<test.length; m++){
                    if(m === i){
                        continue;
                   }
                    if(m===0){
                        section[0].style.display = 'flex';
                        test[0].style.backgroundImage = "linear-gradient(to left, transparent, #FFEFD5, transparent)";
                    }else{
                        section[m].style.display = 'none';
                        test[m].style.backgroundImage = "";
                   }
            }
            }
        test[i].style.backgroundImage = "linear-gradient(to left, transparent, #FFEFD5, transparent)";
          hr[i].style.transform = "scaleX(-1)";
      } else {
        section[i].style.display = 'none';
          hr[i].style.transform = "scaleX(1)";
        test[i].style.backgroundImage = "";
      }
    });
    test[i].addEventListener("mouseover", () => {
    hr[i].style.transform = "scaleX(-1)";
    setTimeout(function() {
        hr[i].style.transform = "";
    }, 500);
}, false);
} 




//pokazanie ceny


    document.body.addEventListener('change', function (e) {
            let target = e.target;
            switch (target.id) {
                case 'Sloik200':
                    document.querySelector('#priceSloik').textContent = '30';
                    break;
                case 'Sloik330':
                    document.querySelector('#priceSloik').textContent = '45';
                    break;
                case 'Sloik350':
                    document.querySelector('#priceSloik').textContent = '48';
                    break;
                case 'inhala90':
                document.querySelector('#priceInhala').textContent = '15';
                    break;
                case 'inhala200':
                document.querySelector('#priceInhala').textContent = '30';
                    break;
                case 'Marilyn':
                    document.querySelector('#priceMM').textContent = '30';
                    break;
                case 'Martin':
                    document.querySelector('#priceMM').textContent = '35';
                    break;
                case 'RazemMM':
                    document.querySelector('#priceMM').textContent = '50';
                    break;                
                case 'Audrey':
                    document.querySelector('#priceJA').textContent = '35';
                    break;                
                case 'Joe':
                    document.querySelector('#priceJA').textContent = '35';
                    break;                
                case 'RazemJA':
                    document.querySelector('#priceJA').textContent = '55';
                    break;                
                case 'sol50':
                    document.querySelector('#priceSol').textContent = '5';
                    break;                  
                case 'sol100':
                    document.querySelector('#priceSol').textContent = '7';
                    break;                 
                case 'sol150':
                    document.querySelector('#priceSol').textContent = '15';
                    break;                 
                case 'sol500':
                    document.querySelector('#priceSol').textContent = '35';
                    break;                  
                case 'puder50':
                    document.querySelector('#pricePuder').textContent = '5';
                    break;                   
                case 'puder100':
                    document.querySelector('#pricePuder').textContent = '10';
                    break;                   
                case 'puder150':
                    document.querySelector('#pricePuder').textContent = '15';
                    break;
                case 'frotkaKokarda': 
                    document.querySelector('#priceFrotka').textContent = '18';
                    break;
                case 'frotkaKlasyczna':
                    document.querySelector('#priceFrotka').textContent = '15';
                    break;
                case 'kulaKlasyczna':
                    document.querySelector('#priceKula').textContent = '9';
                    break;
                case 'kulaXXL':
                    document.querySelector('#priceKula').textContent = '21';
                    break;
                case 'kulaNiespodzianka':
                    document.querySelector('#priceKula').textContent = '10';
                    break;
                case 'kostkaDuza':
                    document.querySelector('#priceKostka').textContent = '14';
                    break;
                case 'kostkaMala':
                    document.querySelector('#priceKostka').textContent = '9';
                    break;
                case 'babeczka':
                    document.querySelector('#priceMuffinki').textContent = '10';
                    break;
                case 'muffinka':
                    document.querySelector('#priceMuffinki').textContent = '15';
                    break;
                case '3xmuffinki':
                    document.querySelector('#priceMuffinki').textContent = '35';
                    break;
            }
        });