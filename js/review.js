document.querySelectorAll('.carousel').forEach(carousel => {
  const items = document.querySelectorAll('.carousel-item');
  const btnHtml = Array.from(items, () => {
    return `<span class="carousel-btn"></span>`;
  });
  
  carousel.insertAdjacentHTML('beforeend', `
    <div class="carousel-nav">
     ${btnHtml.join(' ')}
    </div>
  `);
  
  var currentItemIndex = 0;
  const btns = document.querySelectorAll('.carousel-btn');
//   default
  items[0].classList.add('carousel-item--active');
  btns[0].classList.add('carousel-btn--active');
  items[0].scrollIntoView({
        behavior: "smooth",
        block:"center",
        inline:"center",
  });
  
  function addRemoveClass(index) {
    items.forEach(item => item.classList.remove('carousel-item--active'));
    btns.forEach(btn => btn.classList.remove('carousel-btn--active'));
    
    items[index].classList.add('carousel-item--active');
    btns[index].classList.add('carousel-btn--active');
    items[index].scrollIntoView({
      block:"center",
      inline:"center",
      // behavior: "smooth",
    });
  }
  
  btns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      addRemoveClass(i)
    });
  });
  
  document.querySelector('.previous').addEventListener('click', (e) => {
    var currentItem = document.querySelector('.carousel-item--active');
    currentItemIndex = Array.from(currentItem.parentNode.children).indexOf(currentItem);
    
    if (currentItemIndex == 0) return;
    
    currentItemIndex--;
    addRemoveClass(currentItemIndex);
    
  });
  
  document.querySelector('.next').addEventListener('click', (e) => {
    var currentItem = document.querySelector('.carousel-item--active');
    currentItemIndex = Array.from(currentItem.parentNode.children).indexOf(currentItem);
    
    if (currentItemIndex >= (Array.from(items).length) - 1) return;
    
    currentItemIndex++;
    addRemoveClass(currentItemIndex);
  });
  
 // console.log( Array.from(items).length);
});