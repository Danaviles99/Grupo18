
/* MAPA */
var map = L.map('map').setView([-54.8019, -68.3030], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([-54.80717, -68.30229]).addTo(map)

    .bindPopup('Bienvenido a Ushuaia.')
    .openPopup();
       
/* HOLA + NOMBRE */

let input = prompt('Ingrese su nombre');
let titulo = document.getElementById('title');
titulo.innerText = '¡Hola ' + input + '!' ;
console.log(titulo);

/* FORM */

let currentStep = 1;
let nombre;
let apellido;
let DNI;
let email;
let select;

Mostrar_Paso(currentStep);

/* FUNCION MOSTRAR PROCESO*/

function MostrarProceso()
{
    let proceso = document.getElementById('contenedor-proceso');
    proceso.style.display = "block";
}

/* FUNCION MOSTRAR PASO */

function Mostrar_Paso(paso)
{
    let step = document.getElementById('paso'+paso);
    step.style.display = 'block';

}

/* FUNCION ESCONDER PASO */

function Esconder_Paso(paso)
{
    /* SIN UTILIZAR VARIABLES */    
     document.getElementById('paso'+paso).style.display = 'none';
    
}

function paso_siguiente(paso)
{
    Esconder_Paso(currentStep);
    currentStep = paso + 1;
    Mostrar_Paso(currentStep);
}

function paso_anterior(paso)
{
    Esconder_Paso(currentStep);
    currentStep = paso - 1;
    Mostrar_Paso(currentStep);
}


function Enviar()
{

   // evento.preventDefault(); //

    let nombre = document.getElementById('nombre').value;
    console.log(nombre);

    let apellido = document.getElementById('apellido').value;
    console.log(apellido);

    let DNI = document.getElementById('DNI').value;
    console.log(DNI);

    let email = document.getElementById('email').value;
    console.log(email);

    let select = document.getElementById('selector').value;
    console.log(select);

    console.log(nombre, apellido, DNI, email, select);

    let datos = document.getElementById('Datos-Form');
    datos.innerHTML = ` 

        <p>Nombre: ${nombre}</p>
        <p>Apellido: ${apellido} </p>
        <p>DNI: ${DNI} </p>
        <p>Email: ${email} </p>
        <p>Caminata: ${select} </p>
        `;

}

/* EXPORTAR PDF */

function exportarAPDF() {
   
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let DNI  = document.getElementById('DNI').value;
    let email = document.getElementById('email').value;
    let selector = document.getElementById('selector').value;


    let pdf = new jsPDF();

    pdf.text(20, 20, 'Datos del Formulario');
    pdf.text(20, 30, 'Nombre: ' + nombre);
    pdf.text(20, 40, 'Apellido: ' + apellido);
    pdf.text(20, 50, 'DNI: ' + DNI);
    pdf.text(20, 60, 'Correo: ' + email);
    pdf.text(20, 70, 'Caminata: ' + selector);

    pdf.save('formulario.pdf');

}