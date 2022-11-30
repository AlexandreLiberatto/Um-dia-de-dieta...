let listaDeComentarios = [];

let comentario = {
    nome: "alexandre",
    nota:"10",
    cometario: "AAAAAAA",
};
//------------------------------
function capturarFormulario() {
    const nomeEl = document.getElementById("nome");
    const notaEl = document.getElementById("nota");
    const comentarioEl = document.getElementById("comentario");
   
    const resultadoFormulario = {
       nome: nomeEl.value,
       nota: notaEl.value,
       comentario: comentarioEl.innerText,
    };
   
    listaDeComentarios.push(resultadoFormulario);
}


 