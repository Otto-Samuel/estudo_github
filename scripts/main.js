function apertar(){
    console.log("Apertou o mouse");
    alert("Apertou o mouse");
    listar();
    return;
}

const lista = [1,2,3,4,5]

function listar(){
    for(let i = 0; i < lista.length; i++){
        alert(lista[i])
    }
}