const Img = document.querySelectorAll('.slide img');
const Slide = document.querySelector('.slide');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');


let counter = 1;
const size = Img[0].clientWidth;

Slide.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextBtn.addEventListener('click', () => {
    if(counter >= Img.length - 1) return;
    Slide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    Slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
})

prevBtn.addEventListener('click', () => {
    if(counter <= 0) return;
    Slide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    Slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
})

Slide.addEventListener('transitionend', () => {
    if(Img[counter].id === 'firstClone'){  
        Slide.style.transition = "none";
        counter = Img.length - 2;
        Slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if(Img[counter].id === 'lastClone'){  
        Slide.style.transition = "none";
        counter = Img.length - counter;
        Slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
})




function show(WitchSection){
    const x = document.getElementById("WitchSection");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}