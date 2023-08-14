document.addEventListener("DOMContentLoaded",()=>{
    lista();
})

function enviar(){

    let name = document.getElementById('nombre').value;
    let age =  document.getElementById('edad').value;
    //EJEMPLO DE FETCH CON POST
    fetch('https://crudcrud.com/api/adc54d7744e946cd8ffc1851accabb6d/brunorodriguez',{
        headers: {"Content-Type": "application/json; charset=utf-8"},
        method: 'POST',
        body: JSON.stringify({ // Cuerpo de la petición (request)
            nombre : name,
            edad: age
        })
    })
    .then(response => response.json())
    .then(data => { alert ("Enviado!!!");
    document.getElementById('nombre').value="";
    document.getElementById('edad').value="";
    lista();
    })
}
// EJEMPLO DE FETCH CON GET
function lista(){
    fetch('https://crudcrud.com/api/adc54d7744e946cd8ffc1851accabb6d/brunorodriguez')
    // fetch me conecta con el ENDPOINT
    .then(response=>response.json())
    .then (datos => {
        let filas="";
        
        for (let dato of datos){
            filas += "<tr><td>"+dato._id+"</td><td>" + dato.nombre + "</td><td>"+ dato.edad +"</td></tr>";
         }

         document.getElementById('tabla').innerHTML=filas;
    })
};

// Fetch con PUT (Update) dado un ID
function update(){
    let id = document.getElementById('id').value;
    let name = document.getElementById('nombre').value;
    let age =  document.getElementById('edad').value;
    fetch('https://crudcrud.com/api/adc54d7744e946cd8ffc1851accabb6d/brunorodriguez/'+id,{
        headers: {"Content-Type": "application/json; charset=utf-8"},
        method: 'PUT',
        body: JSON.stringify({ // Cuerpo de la petición (request)
            nombre : name,
            edad: age
        })
    })
    .then(response => { console.log(response);
    document.getElementById('nombre').value="";
    document.getElementById('edad').value="";
    lista();
    })
}

// Fetch con DELETE dado un ID
function borrar(){
    let id = document.getElementById('id').value;
    fetch(
        'https://crudcrud.com/api/adc54d7744e946cd8ffc1851accabb6d/brunorodriguez/'+id, {
          method: 'DELETE'
        })
        .then(response => {
            if(response.ok){
                lista();
            }
        }).catch(error => alert("Error al borrar, compruebe ID"))
}