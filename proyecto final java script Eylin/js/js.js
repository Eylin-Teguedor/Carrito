const agregar = document.querySelectorAll('.btn');
agregar.forEach((btnButton) =>{
    btnButton.addEventListener('click', car);
});

const mCarrito = document.querySelector('#miCarrito tbody');

function car(event) {
    const boton = event.target;
    const item = boton.closest('.item');
    const itemT = item.querySelector('.itemT').textContent;
    const itemP = item.querySelector('.itemP').textContent;
    const itemImg = item.querySelector('.itemImg').src;
    const itemCant=1;
    const id = item.querySelector('button').dataset.id;

    añadirCarrito(itemT, itemP, itemImg, itemCant, id);
}

function añadirCarrito(itemT, itemP, itemImg, itemCant, id){
    const aCarrito = document.createElement('tr');
    const carritoC =`<td>
                        <img src="${itemImg}" style="width:70px; height:70px;">
                    </td>
                    <td>
                        ${itemT}
                    </td>
                    <td>
                        ${itemP}
                    </td>
                    <td>
                        ${itemCant}
                    </td>
                    <td>
				        <a href="#" class="borrar-producto" data-id="${id}">X</a>
			        </td>`

  aCarrito.innerHTML=carritoC;
  mCarrito.appendChild(aCarrito);

  aCarrito.querySelector('.borrar-producto').addEventListener('click', eliminar);
 
 
}


function eliminar(event) {
    const botonEliminar = event.target;
    botonEliminar.closest('tr').remove();

    mCarrito.querySelector('vaciar-carrito').addEventListener('click', vaciarCarrito);
}

/*al final no logre vaciar el carrito T_T*/
function vaciarCarrito() {
	mCarrito.innerHTML = '';
}




