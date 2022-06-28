let botonpedir = document.getElementById('pedir')

//consumo GET
let showtable = () => {
    fetch('http://localhost:3000/api/pedidos', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            renderizar(data)
        })
    console.log("funciona el fecth para get")
}

showtable()

//renderizar
botonpedir.addEventListener('click', () => {
    let renderizar = (data) => {
        const tabla = document.getElementById('tabla')

        var tbody = document.createElement('tbody')
        tabla.appendChild(tbody)


        console.log("funciona boton")
        for (let i = 0; i < data.length; i++) {

            var tr = document.createElement('tr');
            var entrada = document.createElement('td');
            var principal = document.createElement('td');
            var bebida = document.createElement('td');
            var postre = document.createElement('td');

            var platoentrada = document.createTextNode(data[i].entrada);
            var platoprincipal = document.createTextNode(data[i].principal);
            var datobebida = document.createTextNode(data[i].bebida);
            var datopostre = document.createTextNode(data[i].postre);

            entrada.appendChild(platoentrada);
            principal.appendChild(platoprincipal);
            bebida.appendChild(datobebida);
            postre.appendChild(datopostre);
            tr.appendChild(entrada);
            tr.appendChild(principal);
            tr.appendChild(bebida);
            tr.appendChild(postre);


            tbody.appendChild(tr);
        }
    }
})

//consumo POST

let NuevoComensal = () => {
    const entrada = document.getElementById('entrada').value
    const principal = document.getElementById('principal').value
    const bebida = document.getElementById('bebida').value
    const postre = document.getElementById('postre').value

    let nuevopedido = {
        "entrada": entrada,
        "principal": principal,
        "bebida": bebida,
        "postre": postre
    }

    fetch('http://localhost:3000/api/pedidos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(nuevopedido
        )
    })
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            renderResult(true)
        })
        .catch((error) => {
            renderResult(false)
        })
}
