

/* Dato un array di oggetti letterali con:
url dell’immagine
titolo
descrizione
Creare un carosello come nella foto allegata.
Milestone 0:
Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.
Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
Milestone 2:
Aggiungere il ciclo infinito del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.
BONUS 1:
Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
BONUS 2:
Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
BONUS 3:
Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay. */




/* './assets/img/01.webp',
    './assets/img/02.webp',
    './assets/img/03.webp',
    './assets/img/04.webp' */


//creo l'array


const games = [
    
    {
        image: './assets/img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    },

    {
        image: './assets/img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    },

    {
        image: './assets/img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    },

    {
        image: './assets/img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    },

    {
        image: './assets/img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
    
]

/* console.log(games); */


//creo un array delle sole immagini
const images = games.map(immagini => {
    return immagini.image
})
/* console.log(images) */


//seleziono l'immagine attiva

let activeImage = 0 ;
console.log(activeImage, 'active image!!!!') 

//seleziono il contenitore in qui verranno inseriti i tag

const imagesEl = document.querySelector('.slider > .images');
console.log(imagesEl);

//creo un loop 

for (let i = 0; i < images.length; i++) {

    //imgSrc seleziona l'immagine attuale

    const imgSrc = images[i];

    //imgEl definisce il contenuto dell'immagine prendendolo dall'array con src=$imgsrc
    //mentre la condizione contenuta nella classe dice che se i è uguale a active allora la sceglie altrimenti no

    const imgEl = `<img class="object-fit-cover ${i === activeImage ? 'active' : ''}" src="${imgSrc}" alt="">`

    console.log(imgEl)

    //inseriamo il contenuto di imgEl all'interno dell'HTML

    imagesEl.innerHTML += imgEl;
    
}

//creo una lista che si comporta come un array con  query selector all in modo da usarla per scorrere le img

const slideImageEl = document.querySelectorAll('img');

//click

const nextEl = document.querySelector('.next')
nextEl.addEventListener('click', function(){
    console.log('click next')

    //controllo che la lista sia completa

    console.log(slideImageEl)

    //seleziono l'immagine corrente creando una varuabile 

    const currentSlide = slideImageEl[activeImage]
    console.log(currentSlide);

    //rimuovo active dall'img corrente

    currentSlide.classList.remove('active')

    if (activeImage === slideImageEl.length - 1){
        activeImage = 0
    }

    else{
         //incremento alla seconda immagine 

    activeImage++
    }

   

    //seleziono l'immagine successiva

    console.log(activeImage)
    const nextImage = slideImageEl[activeImage]

    //una volta selezionata gli aggiungo active in modo da mostrarla

    console.log(nextImage)
    nextImage.classList.add('active')
})


//come con il tasto next però cambio i nomi delle var e faccio un decremento al posto dell'incremento                     


const prevEl = document.querySelector('.prev')
prevEl.addEventListener('click', function(){
    console.log('click prev')

    console.log(slideImageEl)

    const currentSlide = slideImageEl[activeImage]
    console.log(currentSlide);

    currentSlide.classList.remove('active')

    //se l'immagine attiva ha posizione della lista 0 
    if(activeImage === 0){

        //imposto active image come la length della lista di img completa -1

        activeImage = slideImageEl.length - 1;
    }
    else {

    //altrimenti decremento in questo modo si può tornare all prima immagine

        activeImage--
    }
    

    console.log(activeImage)
    const prevImage = slideImageEl[activeImage]

    console.log(prevImage)
    prevImage.classList.add('active')
})



/* THUMBNAILS */

//seleziono il contenitore delle thumbnails nella dom

const thumbContainerElement = document.querySelector('.thumbnail');
console.log(thumbContainerElement);

//creo un loop

for (let i = 0; i < images.length; i++) {

    //imgSrc seleziona l'immagine attuale

    const imgSrc = images[i];

    //imgEl definisce il contenuto dell'immagine prendendolo dall'array con src=$imgsrc
    //mentre la condizione contenuta nella classe dice che se i è uguale a active allora la sceglie altrimenti no

    const imgEl = `  
        <div class="col col_border border-1 border-dark">
            <img class="object-fit-cover img_height ${i === activeImage ? 'active' : ''}" src="${imgSrc}" alt="">
        </div>
        `

    console.log(imgEl)

    //inseriamo il contenuto di imgEl all'interno dell'HTML

    thumbContainerElement.innerHTML += imgEl;
    
}

//creo la selezione tramite click sull'immagine

//seleziono l'elemento da cliccare


const thumbImage = document.querySelectorAll('.thumbnail>.col>img')
console.log(thumbImage, 'heyy');
    

let imageToClick;

let i = 0

for (i; i < thumbImage.length; i++) {
    
    imageToClick = thumbImage[i];
    console.log(thumbImage[i], 'eccomi')


    
}



let currentImage = document.querySelector('.images>.active')

function changeCurrentImage (newImage) {

	currentImage.attributes.src.value = this.attributes.src.value;
	//listOfImages.forEach(image => image.classList.remove('current-image-list'));
	thumbImage.forEach(function (image) {
		image.classList.remove('active');
	})
	this.classList.add('active');
}

thumbImage.forEach(function(image) {
	image.addEventListener('click', changeCurrentImage);
});










 //BONUS giro automatico
setInterval(autoCarousel, 3000)
function autoCarousel(){
    console.log('click next')

    //controllo che la lista sia completa

    console.log(slideImageEl)

    //seleziono l'immagine corrente creando una varuabile 

    const currentSlide = slideImageEl[activeImage]
    console.log(currentSlide);

    //rimuovo active dall'img corrente

    currentSlide.classList.remove('active')

    if (activeImage === slideImageEl.length - 1){
        activeImage = 0
    }

    else{
         //incremento alla seconda immagine 

    activeImage++
    }
   
   

    //seleziono l'immagine successiva

    console.log(activeImage)
    const nextImage = slideImageEl[activeImage]

    //una volta selezionata gli aggiungo active in modo da mostrarla

    console.log(nextImage)
    nextImage.classList.add('active')
}

