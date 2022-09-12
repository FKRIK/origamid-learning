// function livro(nome, ano, autor) {
//   const nomeMaior = nome.toUpperCase();
//   const totalAnos = 2050 - ano;
//   const frase = nome + " por " + autor;
//   const objeto = {
//     nome: nomeMaior,
//     totalAnos,
//     frase,
//   };
//   return objeto;
// }

/*
====================================================
function livro(nome, ano, autor) {
  return {
    nome: nome.toUpperCase(),
    totalAnos: 2050 - ano,
    frase: nome + " por " + autor,
  };
}

const livroRetorno = livro("O Senhor dos Anéis", 1954, "J. R. R. Tolkien");
console.log(livroRetorno);
====================================================
*/

// ****************************************************************************************************************

// const circulo = document.querySelector("#circulo");

// function seguirMouse(event){
//   circulo.style.top = event.y + "px";
//   circulo.style.left = event.x + "px";
// }

// window.addEventListener("mousemove", seguirMouse);

// ****************************************************************************************************************

// const botao = document.querySelector("button");

// function somar(event) {
//   const div = document.querySelector("div");
//   const total = Number(div.innerText) + 1;
//   if (total < 10) {
//     div.innerText = total
//   } else{
//     console.log("Não é possível adicionar mais!");
//   }
// }

// if (botao) {
//   botao.addEventListener("click", somar);
// }

// ****************************************************************************************************************

// const links = document.querySelectorAll("nav a");

// function ativarLink(link){
//   const href = link.href;
//   const url = document.location.href;

//   if(href === url){
//     link.style.backgroundColor = "black";
//     link.style.color = "white";
//   }
//   // console.log(url);
//   // console.log(href);
// }

// links.forEach(ativarLink);

// ****************************************************************************************************************

const imagens = document.querySelectorAll('#galeria li img');

function galeriaTrocar(event){
  const principal = document.querySelector('#imagem-principal')
  const clicada = event.currentTarget
  principal.src = clicada.src;
  principal.alt = clicada.alt;
  console.log(clicada.src);
}

function galeriaClique(imagem){
  imagem.addEventListener('click', galeriaTrocar)
}

imagens.forEach(galeriaClique)
