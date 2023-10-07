import data from './code.js';

console.log(data)
const divmain = document.getElementById("main")
data.map( (elemento) => {
    
    divmain.innerHTML += `<div class="flex">
    <img src=${elemento.img} alt=""/>
    <h2>${elemento.title}</h2>
    <h1>${elemento.price}$</h1>
    <p>${elemento.desc}</p>
    <hr>
    </div>`
    return elemento.nombre
})

/*------------------------------------------------------------------*/

const btnpostre = document.getElementById("btn-postre");

btnpostre.addEventListener('click',MostrarPostres)

function MostrarPostres(evento){
    let franquiciafiltrada = 'postre';

    let filtrados = data.filter((comidas) => comidas.category === franquiciafiltrada);
    
    

    divmain.innerHTML=""
    filtrados.forEach( (elemento) => {
        console.log(elemento)
        divmain.innerHTML += `<div class="flex">
                                  <img src=${elemento.img} alt=""/>
                                  <h2>${elemento.title}</h2>
                                  <h1>${elemento.price}$</h1>
                                  <p>${elemento.desc}</p>
                                  <hr>
                            </div>`
                              })
    
}

const btnplatillo = document.getElementById("btn-platillo");

btnplatillo.addEventListener('click',MostrarPlatillos)

function MostrarPlatillos(evento){
    let franquiciafiltrada = 'platillo';

    let filtrados = data.filter((comidas) => comidas.category === franquiciafiltrada);
    
    divmain.innerHTML=""
    filtrados.forEach( (elemento) => {
        console.log(elemento)
        divmain.innerHTML += `<div class="flex">
                                  <img src=${elemento.img} alt=""/>
                                  <h2>${elemento.title}</h2>
                                  <h1>${elemento.price}$</h1>
                                  <p>${elemento.desc}</p>
                                  <hr>
                            </div>`
                              })
    
}

const btnbebida = document.getElementById("btn-bebida");

btnbebida.addEventListener('click',MostrarBebidas)

function MostrarBebidas(evento){
    let franquiciafiltrada = 'bebida';

    let filtrados = data.filter((comidas) => comidas.category === franquiciafiltrada);
    
    divmain.innerHTML=""
    filtrados.forEach( (elemento) => {
        console.log(elemento)
        divmain.innerHTML += `<div class="flex">
                                  <img src=${elemento.img} alt=""/>
                                  <h2>${elemento.title}</h2>
                                  <h1>${elemento.price}$</h1>
                                  <p>${elemento.desc}</p>
                                  <hr>
                            </div>`
                              })
    
}

/*------------------------------------------------------------------------*/

const btntodo = document.getElementById("btn-todo");

btntodo.addEventListener('click',Mostrartodo)

function Mostrartodo(evento){

    
    divmain.innerHTML=""
    data.map( (elemento) => {
    
        divmain.innerHTML += `<div class="flex">
        <img src=${elemento.img} alt=""/>
        <h2>${elemento.title}</h2>
        <h1>${elemento.price}$</h1>
        <p>${elemento.desc}</p>
        <hr>
        </div>`
        return elemento.nombre
    })
    
}




const comidas = [  
    { id: 1, nombre: 'Pizza de queso',   franquicia: 'platillo' },
    { id: 2, nombre: 'Sandwich de Queso Derretido',  franquicia: 'platillo' },
    { id: 3, nombre: 'Mousse de Chocolate',        franquicia: 'postre'},
    { id: 4, nombre: 'Postre de Frutos Rojos',      franquicia: 'postre'},
    { id: 5, nombre: 'Limonada de Moras',       franquicia: 'bebida'},
    { id: 6, nombre: 'Galletas de Chocolate',    franquicia: 'postre'},
    { id: 7, nombre: 'Mojito',    franquicia: 'bebida'},
    { id: 8, nombre: 'Mac n Cheese',    franquicia: 'platillo'},
    { id: 9, nombre: 'Hamburguesa De Arrachera XL',    franquicia: 'platillo'},
    { id: 10, nombre: 'Variedad de Donas',    franquicia: 'postre'},
    { id: 11, nombre: 'Chorizo con Mozzarella',    franquicia: 'platillo'},
    { id: 12, nombre: 'Cerveza Casera',    franquicia: 'bebida'},
    { id: 13, nombre: 'Pastel de Fresas con Crema',    franquicia: 'postre'},
    { id: 14, nombre: 'Cordero Asado',    franquicia: 'platillo'},
    { id: 15, nombre: 'Pastelitos de Chocolate',    franquicia: 'postre'}
    
]

