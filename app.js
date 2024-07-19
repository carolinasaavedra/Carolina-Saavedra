let titulo = document.querySelector('h1');
titulo.innerHTML="Hora del Desafío";

function intentoDeUsuario(){
    console.log("El botón fue clicado");
}

function intentoDeUsuarioUno(){
    let ciudad = prompt("Mencione el nombre de una ciudad en brasil");
    alert(`Estuve en ${ciudad} y me acordé de ti`);
}

function intentoDeUsuarioDos(){
    alert("Yo amo JS");
}

function intentoDeUsuarioTres(){
    alert("Sumador de dos numeros");
    let numeroUno= prompt("Mencione el primer numero");
    let numeroDos= prompt("Mencione el segundo numero");
    let resultado= numeroUno + numeroDos;
    alert( +numeroUno + +numeroDos);
}

/*luissss*/
