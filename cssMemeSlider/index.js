let images = ["Mems/gaby.gif", "Mems/bree.gif", "Mems/mike-susan.gif", "Mems/bree2.gif"];
let texts = ["Good friends", "Count to three", "Bad cooking", "Nice talk"];
let step = 0;
let offset = 0;

const buttonsOuter = document.querySelectorAll('.button-outer');
const activeButton = buttonsOuter[0];
const activeInner = activeButton.querySelector('.button-inner');
const delImage = document.querySelector('img');
const delText = document.querySelector('span')

function textSlider() {
    let text = document.createElement('span');
    text.textContent = texts[step];
    document.querySelector('.text-frame').appendChild(text);
    if (step >= texts.length) {
        step = 0;
    } else {
        step++;
    }
    offset = 1;
}

activeInner.style.display = 'block';

delImage.remove();
delText.remove();

textSlider()
images.forEach((imageUrl, index) => {
    let img = document.createElement('img');
    img.src = imageUrl;
    document.querySelector('.img-container').appendChild(img);
  });
const image = document.querySelectorAll('img')



buttonsOuter.forEach((button, index)=>{
    button.addEventListener('click', ()=>{
        buttonsOuter.forEach((b, i)=>{
            document.querySelector('.text-frame').innerHTML = '';
            const buttonInner = b.querySelector('.button-inner');
            if (i === index) {
                buttonInner.style.display = 'block';
            }
            else {
                buttonInner.style.display = 'none';
            }
        });
        step = index;
        offset = 0;
        textSlider();
        const position = -index * 100;
        image.forEach(i => {
            i.style.transform = `translateX(${position}%)`;
        })
    });
});


