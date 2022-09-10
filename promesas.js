// setTimeout
/* console.log("Inicia el proceso!");

setTimeout(() => {
    console.log("Hola Coders!");
}, 3000);

console.log("Finaliza el proceso!"); */



// Ejemplo de Aplicación de setTimeout
/* const btn = document.querySelector("#boton");
const popup = document.querySelector("#popup_mensaje");

btn.addEventListener("click", () => {
    popup.classList.add("alert", "alert-danger");
    popup.innerText = "Error!";

    setTimeout(() => {
        popup.classList.remove("alert-danger");
        popup.classList.add("alert-success");
        popup.innerText = "Ok!";
    }, 3000);
}); */


// Limitación con setTimeout
/* for (let letra of "hola") {
    console.log(letra);
}

for (let letra of "coders") {
    console.log(letra);
} */

/* for (let letra of "hola") {
    setTimeout(() => {
        console.log(letra);
    }, 1000);
}

for (let letra of "coders") {
    setTimeout(() => {
        console.log(letra);
    }, 3000);
} */



// Explicación del setTimeout
/* console.log("Inicia el proceso!");

setTimeout(() => {
    console.log("Hola Coders!");
}, 0);

console.log("Finaliza el proceso!"); */



// Call stack
/* function multiply(x, y) {
    return x * y;
}

function printSquare(x) {
    let s = multiply(x, x);
    console.log(s);
}

printSquare(5); */



// Event Loop
/* console.log("Inicia el proceso!");

setTimeout(() => {
    console.log("Mitad del proceso!");
}, 3000);

console.log("Finaliza el proceso!"); */



// setInterval
/* setInterval(() => {
    console.log("Hola Coders!");
}, 3000); */

// setInterval con clearInterval
/* let contador = 0;

const intervalo = setInterval(() => {
    contador++;
    console.log("Contador: " + contador);

    if (contador >= 5) {
        clearInterval(intervalo);
        console.log("Se cortó la ejecución!");
    }
}, 2000);

function cancelarIntervalo() {
    clearInterval(intervalo);
    console.log("Se cortó la ejecución!");
}

const btn = document.querySelector("#boton");
btn.addEventListener("click", () => {
    cancelarIntervalo();
}); */



// clearTimeout
/* console.log("Inicia el proceso!");

const fin = setTimeout(() => {
    console.log("Final del proceso!");
}, 3000);

//clearTimeout(fin);

function cancelarSetTimeOut() {
    clearTimeout(fin);
    console.log("Se cortó la ejecución!");
}

const btn = document.querySelector("#boton");
btn.addEventListener("click", () => {
    cancelarSetTimeOut();
}); */



// Promesas
/* const eventoFuturo = () => {
    return new Promise((resolve, reject) => {
        console.log("Estoy acá");
    })
}

console.log("Hola");
console.log(eventoFuturo()); */



// Ejemplo detallado
/* const eventoFuturo = (res) => {
    return new Promise((resolve, reject) => {
        //console.log("Estoy acá");
        if (res === true) {
            resolve("Promesa resuelta!");
        } else {
            reject("Promesa rechazada!");
        }
    })
} */

/* console.log("Hola");
console.log(eventoFuturo(true)); 
console.log(eventoFuturo(false)); */



// Ejemplo con setTimeOut
const eventoFuturo = (res) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            res ? resolve("Promesa aceptada!") : reject("Promesa rechazada!");
        }, 2000)
    })
}

/* console.log("Hola");
console.log(eventoFuturo(true));
console.log(eventoFuturo(false)); */



// Then & Catch
/* eventoFuturo(true)
.then((respuesta) => {
    console.log("Estoy en .then");
    console.log(respuesta);
});

eventoFuturo(false)
.catch((respuesta) => {
    console.log("Estoy en .catch");
    console.log(respuesta);
}); */



// .then y .catch anidados
/* eventoFuturo(true)
.then((respuesta) => {
    console.log(respuesta);
})
.catch((respuesta) => {
    console.log(respuesta);
}); */

/* eventoFuturo(false)
.then((respuesta) => {
    console.log(respuesta);
})
.catch((respuesta) => {
    console.log(respuesta);
}); */



// Finally
/* let contenido = `<div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div>`;
document.getElementById("popup_mensaje").innerHTML = contenido;
eventoFuturo(false)
.then((respuesta) => {
    console.log(respuesta);
    document.getElementById("productos").innerHTML = respuesta;
})
.catch((respuesta) => {
    console.log(respuesta);
    document.getElementById("productos").innerHTML = respuesta;
})
.finally(() => {
    document.getElementById("popup_mensaje").innerHTML = "";
    console.log("Fin del Proceso!");
}); */



// Ejemplo aplicado
const BD = [
    {id:1, nombre:"Coca Cola", precio: 250},
    {id:2, nombre:"Pepsi", precio: 220},
    {id:3, nombre:"Manaos", precio: 180}
];

const pedirProductos = (token) => {
    let contenido = `<div class="text-center"><div class="spinner-border text-center" role="status"><span class="visually-hidden">Loading...</span></div></div>`;
    document.getElementById("productos").innerHTML = contenido;

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.getElementById("productos").innerHTML = "";
            (token == "112233") ? resolve(BD) : reject("Token inválido!");
        }, 3000)
    })
};

let productos = [];
const renderProductos = (array) => {
    let div_productos = document.getElementById("productos");

    for (let producto of array) {
        let titulo = document.createElement("h2");
        titulo.innerText = `${producto.nombre} (${producto.id})`;
        let parrafo = document.createElement("p");
        parrafo.innerHTML = `$${producto.precio}`;
        let barra = document.createElement("hr");
        div_productos.appendChild(titulo);
        div_productos.appendChild(parrafo);
        div_productos.appendChild(barra); 
    }
}

document.getElementById("boton").addEventListener("click", () => {
    let token = document.getElementById("token").value;

    pedirProductos(token)
    .then((resultado) => {
        renderProductos(resultado);
    })
    .catch((resultado) => {
        document.getElementById("productos").innerHTML = "<h3 class='text-center'>" + resultado + "</h3>";
    })
    .finally(() => {
        console.log("Carrito renderizado!");
    });
});