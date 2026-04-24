function salvarCarro(event){
    event.preventDefault();

let titulo = document.getElementById('title').value;  
 let preco = document.getElementById('preco').value;  
 let marca = document.getElementById('marca').value;  
 let modelo = document.getElementById('modelo').value;  

 let cambioSelecionado = document.querySelector('input[name="marcha"]:checked');

let cambio = cambioSelecionado ? cambioSelecionado.id :
"não informado";
}