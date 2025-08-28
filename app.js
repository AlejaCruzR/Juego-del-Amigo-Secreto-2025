// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let nombreAmigoRegistrado = [];

const listaNombreAmigo = document.getElementById('listaAmigos');
const resultadoAmigoElem = document.getElementById('resultado');

function agregarAmigo(){
    let extraeAmigo = document.getElementById('amigo').value.trim();
    let sumaAmigo = extraeAmigo.charAt(0).toUpperCase() + extraeAmigo.slice(1);
    if (sumaAmigo === '') {
         alert('Ingrese un nombre Valido, al menor debe contener 2 caracteres');
         return
    }
    nombreAmigoRegistrado.push(sumaAmigo);
    imprimirAmigoHtml();
    limpiarImput();
    return
}

function imprimirAmigoHtml(){
    resultadoAmigoElem.innerHTML='';
    listaNombreAmigo.innerHTML='';
    nombreAmigoRegistrado.forEach((nombreAmigo, ind) =>{
        const li = document.createElement('li');
        li.textContent =`${ind +1}. ${nombreAmigo}        `;

        const btnEliminar = document.createElement('button');
        btnEliminar.textContent='Quitar';
        btnEliminar.classList.add('button-delete');
        btnEliminar.onclick = () => borrarAmigo(ind);

        li.appendChild(btnEliminar);
        listaNombreAmigo.appendChild(li);
    });
}

function borrarAmigo(ind){
    nombreAmigoRegistrado.splice(ind,1);
    imprimirAmigoHtml();
}

function sortearAmigo(){
    resultadoAmigoElem.innerHTML='';
    if (nombreAmigoRegistrado.length===0){
        resultadoAmigoElem.textContent='No Hay amigos para realizar el sorteo';
        return;
    }
    const amigoSorteado = Math.floor(Math.random() * nombreAmigoRegistrado.length);
    resultadoAmigoElem.textContent=`El amigo secreto es:  ${nombreAmigoRegistrado[amigoSorteado]}`
    return;
}

function limpiarImput(){
    document.querySelector('#amigo').value ="";
}

function reiniciarJuego(){
    nombreAmigoRegistrado = [];
    imprimirAmigoHtml();
}

