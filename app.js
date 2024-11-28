const apiURL = "http://localhost/app-php-js/api.php";
const apiURLYesnotApi ="https://yesno.wtf/api";

async function getData(){
    console.log('Ingreso a get data');
    try {
       const respuesta = await fetch(`${apiURL}?id=123&nombre=Rosmery&apellido=Carreon`,{
        method: "GET"
       }); 
       const data = await respuesta.json();
       console.log(data);
    } catch (error) {
        console.log("Error al momento de hacer peticion GET: ", error)
    }

}
let botonget = document.querySelector('#getdata');

botonget.addEventListener('click', function() {
    getData();
});

async function postData(){
  try{
    const respuesta = await fetch(apiURL, {
        method : "POST",
        headers : {
            "Content-Type":"aplication/json"
    },
    body:JSON.stringify({
        nombre:"Rosmery",
        apellido:"Carreon",
        lenguaje_favorito:"JavaScript",
        color:"Plomo"
    })
  });
  const data_retorno = await respuesta.json();
  console.log(data_retorno);

  }catch(error){
    console .log("Error al hacer la peticion POST: ",error);
  }

}

let botonpost = document.querySelector('#postdata');
botonpost.addEventListener('click',function(){
    postData();
});



async function getYesnotApi(){
    console.log('Ingreso a YesnotApi');
    try {
       const respuesta = await fetch(apiURLYesnotApi,{
        method: "GET"
       }); 
       const data = await respuesta.json();
       console.log(data.answer);
       agregarMensaje(data.answer,false,data.image);

    } catch (error) {
        console.log("Error al momento de hacer peticion YesnotApi: ", error)
    }

}
let botonYesnotApi = document.querySelector('#YesnotApi');

botonYesnotApi.addEventListener('click', function() {
    
    getYesnotApi();
});


async function putData() {
    try {
        const respuesta = await fetch(apiURL, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nombre: "Rosmery 1",
                apellido: "Carreon",
                lenguaje_favorito: "JavaScript",
                color: "plomo"
            })
        });

       
        const dataRetorno = await respuesta.json();
        console.log("Respuesta del servidor:", dataRetorno);
    } catch (error) {
        console.error("Error al realizar la peticion PUT:", error);
    }
}

let botonPut = document.querySelector('#putdata');
botonPut.addEventListener('click',function(){
    putData();
})


//boton delete-------------

async function deleteData() {
    console.log('Ingreso a delete data');
    try {
       const respuesta = await fetch(`${apiURL}?id=123`,{
        method: "DELETE"
       }); 
       const data = await respuesta.json();
       console.log(data);
    } catch (error) {
        console.log("Error al momento de hacer peticion DELETE: ", error)
    }
}

let botondelete = document.querySelector('#deletedata');
botondelete.addEventListener('click',function(){
    deleteData();
});

//funcionalidad del chat yes no


let chatMessages = document.getElementById('chatMessages');
let chatFrom = document.getElementById('chatFrom');
let messageInput =document.getElementById('messageInput');

function agregarMensaje(mensaje, soyYo = true, imagen = null){
    const mensajeDiv = document.createElement('div');

    mensajeDiv.classList.add('message');
    mensajeDiv.classList.add(soyYo?'user-message':'api-message');
    mensajeDiv.textContent = mensaje;

    if(imagen){
        const img =  document.createElement('img')
        img.src= imagen;
        mensajeDiv.appendChild(img);
        
    }

    setTimeout(() => {
        chatMessages.scrollTop = chatMessages.scrollHeight
    }, 500);

    chatMessages.appendChild(mensajeDiv);
    

}
chatForm.addEventListener('submit',function(){

    const miMensaje = messageInput.value;
   agregarMensaje(miMensaje,true);
   getYesnotApi();
});

// agregarMensaje("hola soy Rosmery",true);
// agregarMensaje("hola soy Api",false);
