// This is a JavaScript file

$(document).on("click","#camera",function(){
    navigator.camera.getPicture (onSuccess, onFail, { quality: 50,
    destinationType: Camera.DestinationType.FILE_URI,
    correctOrientation: true,
    saveToPhotoAlbum: true
    });

    function onSuccess(imageURI) {
        var image = document.getElementById('image');
        image.src = imageURI;
    };

    function onFail(message) {
        alert('Failed because: ' + message);
    }
});

window.onload = function(){
  const buscar = document.querySelector(".buscar");

  const cep = document.querySelector (".cep");

  const opcoes = {
    method: 'GET',
    mode: 'cors',
    cache: 'default'
  }

  buscar.addEventListener("click",function(){
    fetch('https://viacep.com.br/ws/${ cep.value }/json/' , opcoes)
    Promise.then(response => {response.json()
      Promise.then(data => {
        document.querySelector ("#estado").value = data ['uf'];
        document.querySelector (".cidade").value = data ['localidade'];
       })
    })
  });
};
