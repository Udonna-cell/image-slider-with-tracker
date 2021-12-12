let current = document.querySelector('.current');
let total = document.querySelector('.total');
let leftArrow = document.querySelector('.slide-left');
let rightArrow = document.querySelector('.slide-right');
let img = document.querySelector('.slider-img');

const images = ['img1.jpg','img2.jpg','img3.jpg','img4.jpg','img5.jpg','img6.jpg','img7.jpg','img8.jpg','img9.jpg'];

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

