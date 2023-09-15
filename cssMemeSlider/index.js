let images = ["Mems/gaby.gif", "Mems/bree.gif", "Mems/mike-susan.gif", "Mems/bree2.gif"];
let texts = ["1", "2", "3", "4"];
let carouselImages = document.querySelector('img');
let step = 0;
let offset = 0;

const buttonsOuter = document.querySelectorAll('.button-outer');
const activeButton = buttonsOuter[0];
const activeInner = activeButton.querySelector('.button-inner');

activeInner.style.display = 'block';

carouselImages.remove();

images.forEach((imageUrl, index) => {
    let img = document.createElement('img');
    img.src = imageUrl;
    document.querySelector('.img-container').appendChild(img);
  });
const image = document.querySelectorAll('img')
console.log(images)
buttonsOuter.forEach((button, index)=>{
    button.addEventListener('click', ()=>{
        buttonsOuter.forEach((b, i)=>{
            const buttonInner = b.querySelector('.button-inner');
            if (i === index) {
                buttonInner.style.display = 'block';
            }
            else {
                buttonInner.style.display = 'none';
            }
        });
        const position = -index * 100;
        image.forEach(i => {
            i.style.transform = `translateX(${position}%)`;
        })
    });
});


