let botaoCalcular = document.querySelector(".btn-opc");

botaoCalcular.addEventListener("click", function (event) {
  event.preventDefault();

  let numero1 = Number(document.getElementById("paovalor").value);
  let numero2 = Number(document.getElementById("quantpao").value);
  let resultado1 = numero1 * numero2;
  document.getElementById("resultadopao").value = resultado1;

  let numero3 = Number(document.getElementById("valorcebola").value);
  let numero4 = Number(document.getElementById("quantcebola").value);
  let resultado2 = numero3 * numero4;
  document.getElementById("resultadocebola").value = resultado2;

  let numero5 = Number(document.getElementById("valorqc").value);
  let numero6 = Number(document.getElementById("quantqc").value);
  let resultado3 = numero5 * numero6;
  document.getElementById("resultadoqc").value = resultado3;

  let numero7 = Number(document.getElementById("valorbc").value);
  let numero8 = Number(document.getElementById("quantvc").value);
  let resultado4 = numero7 * numero8;
  document.getElementById("resultadobc").value = resultado4;


  let numero13 = Number(document.getElementById("valorfrango").value);
  let numero14 = Number(document.getElementById("quantfrango").value);
  let resultado5 = numero13 * numero14;
  document.getElementById("resultadofrango").value = resultado7;

  let numero15 = Number(document.getElementById("valorBebida").value);
  let numero16 = Number(document.getElementById("quantBebida").value);
  let resultado6 = numero15 * numero16;
  document.getElementById("resultadoBebida").value = resultado8;

    // Somar os Hamburguer

    let SomaHamburguer =
    resultado1 +
    resultado2 +
    resultado3 +
    resultado4 +
    resultado5 +
    resultado6;
  document.getElementById("valorH").value = SomaHamburguer;


  // calcular cota hamburguer + bebida

  let numero17 = Number(document.getElementById("quantamigos").value);
  let numero18 = Number(document.getElementById("quantbebi").value);
  let CotaHamburgue = SomaHamburguer / numero17;
  let CotaBebida = resultado6 / numero18;
  let TotalHamburgueBebida = CotaBebida + CotaHamburgue;

  document.getElementById("cota").value = TotalHamburgueBebida.toFixed(2);

  
  //calcular parte para quem não vai beber

  document.getElementById("cotasembebida").value = CotaHamburgue;

});
