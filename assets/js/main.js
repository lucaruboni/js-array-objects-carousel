









//creo l'array


const images = [
    './assets/img/01.webp',
    './assets/img/02.webp',
    './assets/img/03.webp',
    './assets/img/04.webp'
    
]

console.log(images);

//seleziono l'immagine attiva

let activeImage = 0 ;

//seleziono il contenitore in qui verranno inseriti i tag

const imagesEl = document.querySelector('.slider > .images');
console.log(imagesEl);

//creo un loop 

for (let i = 0; i < images.length; i++) {

    //imgSrc seleziona l'immagine attuale

    const imgSrc = images[i];

    //imgEl definisce il contenuto dell'immagine prendendolo dall'array con src=$imgsrc
    //mentre la condizione contenuta nella classe dice che se i è uguale a active allora la sceglie altrimenti no

    const imgEl = `<img class="img-fluid ${i === activeImage ? 'active' : ''}" src="${imgSrc}" alt="">`

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