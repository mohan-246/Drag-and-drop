/*INSTRUCTIONS:

1. You can drag the items from any container and move it.
2. The items are responsive to hover and drag.
3. On drag the items change background color.
4. On hove the items scale.
5. On successful dropping from one container to anothe you get a success alert in the bottom right corner.
6. The success alert automatically disappears in 1000ms and you can also close in.
7. There is a reset button on the bottom of the page which you can use to reset the containers to the inital state.

*/
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
