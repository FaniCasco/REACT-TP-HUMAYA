

/*const btnAnterior = document.getElementById("btnAnterior");
const btnSiguiente = document.getElementById("btnSiguiente");*/

let pagina = 1;



/*btnAnterior.addEventListener("click", () => {
    if (pagina > 1) {
        pagina -= 1;
        obtenerRecetas();
    }
});

btnSiguiente.addEventListener("click", () => {
    if (pagina < 100) {
        pagina += 1;
        obtenerRecetas();
    }
});*/




const url = 'https://recetas-en-espanol.p.rapidapi.com/api/recipes';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '0bcdd50724mshb8f65147727a0f0p1b1b85jsnd26761eb7c64',
        'X-RapidAPI-Host': 'recetas-en-espanol.p.rapidapi.com',
    }
};

let recetas = ""; 

const obtenerRecetas = async () => {
    try {
        const respuesta = await fetch(url, options)
        console.log(respuesta);

        if (respuesta.status === 200) {
            const datos = await respuesta.json();

            datos.forEach(receta => {
                recetas +=
                    `<div class="receta">
                    <h3 class="titulo">${receta.title}</h3>
                    <img class="poster" src="${receta.img}">
                    <a class="preparacion" href="${receta.url}">Más Info</a>
                    </div>`;
                    
            });
          
            document.getElementById("contenedor").innerHTML = recetas; 
        }
    } catch (error) {
        console.log(error.message);
    }
   
};


obtenerRecetas();