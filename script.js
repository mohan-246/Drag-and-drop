const draggables = document.querySelectorAll('.draggable')
const containers = document.querySelectorAll('.container')
let alertdiv=document.querySelector('.alert');

//adding the 'dragging' class on dragstart
draggables.forEach(draggable => {
  draggable.addEventListener('dragstart', () => {
    draggable.classList.add('dragging')
  })

//removing the 'dragging' clas on dragend event
  draggable.addEventListener('dragend', () => {
    draggable.classList.remove('dragging')
  })
})

//adding the element base on drag over event
containers.forEach(container => {
  container.addEventListener('dragover', e => {
    e.preventDefault()
    const draggable = document.querySelector('.dragging')
      container.appendChild(draggable)
      setTimeout(()=>{
        alert();
      },500);
      
  })
})

//function to alert success
function alert(){
  alertdiv.style.display="block";
  setTimeout(() => {
    alertdiv.style.display="none";
  },1000);

}

//function to reset
function Reset(){
 let container1 = document.querySelector('.left');
 let container2 = document.querySelector('.right');
 container1.appendChild(document.querySelector('.one'));
 container1.appendChild(document.querySelector('.two'));
 container2.appendChild(document.querySelector('.three'));
 container2.appendChild(document.querySelector('.four'));
 setTimeout(()=>{
  alert();
},500);
}