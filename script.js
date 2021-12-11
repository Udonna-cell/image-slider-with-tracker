let current = document.querySelector('.current');
let total = document.querySelector('.total');
let leftArrow = document.querySelector('.slide-left');
let rightArrow = document.querySelector('.slide-right');
let img = document.querySelector('.slider-img');

const images = ['img/img1.jpg','img/img2.jpg','img/img3.jpg','img/img4.jpg','img/img5.jpg','img/img6.jpg','img/img7.jpg','img/img8.jpg','img/img9.jpg'];

let range = 0;

window.addEventListener('load',()=>{
  img.src = images[range];
  total.innerHTML = images.length;
  current.innerHTML = range + 1;
})



rightArrow.addEventListener('click', ()=>{
  range++;
    if (range > images.length -1) {
      range = 0;
      img.src = images[range];
      current.innerHTML = range + 1;
    } else {
      img.src = images[range];
      current.innerHTML = range + 1;
    }
  })
  
  leftArrow.addEventListener('click', ()=> {
    range--;
      if (range > images.length -1) {
        range = 0;
        img.src = images[range];
        current.innerHTML = range + 1;
      }else if (range == -1){
        range = images.length + (range);
        img.src = images[range];
        current.innerHTML = range + 1;
      } else {
        img.src = images[range];
        current.innerHTML = range + 1;
      }
  })

