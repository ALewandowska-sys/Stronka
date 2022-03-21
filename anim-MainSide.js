//galeria na stronie głównej

const text1_options = [
  "Puder do kąpieli jest to proszek na bazie mleka, który powoduje, że skóra staje się elastyczna, miękka i nawilżona. Dodatkowo białka mleka pobudzają produkcję kolagenu, dzięki czemu pomaga w redukcji rozstępów i zmarszczek.",
  "Specjalna świeca sojowa INHALA w języku hiszpańskim oznacza 'wdech'. Umożliwia udrażnianie dróg oddechowych, ułatwia oddychanie oraz działa uspokojajaco. Polecamy ją przy przeziębieniach!",
  "Istnieją dwa rodzaje kąpieli. Pierwszy typ jest funkcjonalny i zaprojektowany, aby zapewnić Ci czystość. Drugi typ jest luksusowy i zaprojektowany, aby dać relaks i odprężenie. W tym drugim idealnie odnajdą się Nasze kule do kąpieli",
  "Mydła w kostce w porównaniu do płynnych, nie posiadają tyle wody, więc starczą na dużo dłużej. Dodatkowo ze względu na większa zawartość olejów niż wody są łagodniejsze, więc polecane dla skóry wrażliwej i alergicznej",
  "Czy wiesz, że w aromaterapii wykorzystuje się olejki eteryczne do poprawy psychicznego lub fizycznego samopoczucia? Nawet mała świeczka jest w stanie wprowadzić Cię w relaks i lepszy nastrój",
  "Staramy się być jeszcze bardziej EKO, dlatego nasze frotki szyte są z materiałów z recyklingu, dzięki czemu powstaje tylko kilka sztuk UNIKATOWYCH gumek. Natomiast opaski są własnorecznie wycinane i szyte z EKOskóry",
  "Wszystkie świece produkowane są z wosku sojowego, więc są wegańskie i w pełni biodegradowalne. Podczas spalania nie wytwarzają się szkodliwe związki, więc są w pełni bezpieczne i nieuczulające",
  "Naturalna sól do kąpieli nie tylko pięknie pachnie i odpręża. Dzięki soli Himalajskiej oraz soli gorzkiej Epsom, wygładza skóre, wspomaga leczenie trądziku i redukuje celulit!"
];
const text2_options = [
  "Pudry do kąpieli",
  "Świeca INHALA",
  "Kule musujące",
  "Mydła glicerynowe",
  "Świece sojowe",
  "Artykuły do włosów",
  "Świece wolnostojące",
  "Sól do kąpieli"
];
const color_options = ["#E5D3D3", "#DECDE6", "#F6CED2", "#EBE9CD", "#DCD6DC", "#C1F3CF", "#FFE5CC", "#FADDF3"];
const image_options = [
    "zdj/produkty/p+s/JPEG/puder.jpg",
    "zdj/produkty/swiece/JPEG/inhala1.jpg",
  "zdj/produkty/kule/JPEG/serc.jpg",
  "zdj/produkty/mydla/JPEG/masujace.jpg",
  "zdj/produkty/swiece/JPEG/szklane.jpg",
    "zdj/produkty/wlosy/JPEG/wlosy.jpg",
  "zdj/produkty/swiece/JPEG/men3.jpg",
    "zdj/produkty/p+s/JPEG/sol3.jpg"
];

var i = 0;
const currentOptionText1 = document.getElementById("current-option-text1");
const currentOptionText2 = document.getElementById("current-option-text2");
const currentOptionImage = document.getElementById("image");
const mainMenu = document.getElementById("menu");
const optionPrevious = document.getElementById("previous-option");
const optionNext = document.getElementById("next-option");

currentOptionText1.innerText = text1_options[i];
currentOptionText2.innerText = text2_options[i];
currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
mainMenu.style.background = color_options[i];

optionNext.onclick = function () {
  i++;
  i = i % text1_options.length;
  currentOptionText1.dataset.nextText = text1_options[i];

  currentOptionText2.dataset.nextText = text2_options[i];

  mainMenu.style.background = color_options[i];
  mainMenu.classList.add("anim-next");
  
  setTimeout(() => {
    currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
  }, 455);
  
  setTimeout(() => {
    currentOptionText1.innerText = text1_options[i];
    mainMenu.classList.remove("anim-next");
  }, 650);
    
currentOptionText2.innerText = text2_options[i];
};

optionPrevious.onclick = function () {
  if (i === 0) {
    i = text1_options.length;
  }
  i--;
  currentOptionText1.dataset.previousText = text1_options[i];

  currentOptionText2.dataset.previousText = text2_options[i];

  mainMenu.style.background = color_options[i];
  mainMenu.classList.add("anim-previous");

  setTimeout(() => {
    currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
  }, 455);
  
  setTimeout(() => {
    currentOptionText1.innerText = text1_options[i];
    mainMenu.classList.remove("anim-previous");
  }, 650);

currentOptionText2.innerText = text2_options[i];
};


//zamiana przy widoku responsywnym

function show(groupId) {
  var image = document.getElementById("image");
  var elem = document.getElementById(groupId);
  var foo = window.getComputedStyle(elem, null);
    
  if (foo.getPropertyValue("display") == 'none') {
    elem.style.display = 'flex';
    image.style.display = 'none';
      document.getElementById("optionToShow").innerHTML = "Pokaż zdjęcie";
  } else {
    elem.style.display = 'none';
    image.style.display = 'block';
      document.getElementById("optionToShow").innerHTML = "Pokaż opis";
  }
}
