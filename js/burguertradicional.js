let botaoCalcular = document.querySelector('.btn-opc');

botaoCalcular.addEventListener("click", function(event) {
    event.preventDefault();
    
        let numero1 = Number(document.getElementById("paovalor").value); 
        let numero2 = Number(document.getElementById("quantpao").value);  
        let resultado1 = numero1 * numero2;  
        document.getElementById("resultadopao").value = resultado1;  
          
        let numero3 = Number(document.getElementById("valorcebola").value);  
        let numero4 = Number(document.getElementById("quantcebola").value); 
        let resultado2 = numero3 * numero4;  
        document.getElementById("resultadocebola").value = resultado2;  
         
        let numero5 = Number(document.getElementById("valortomate").value);  
        let numero6 = Number(document.getElementById("quanttomate").value); 
        let resultado3 = numero5 * numero6;  
        document.getElementById("resultadotomate").value = resultado3; 
        
        let numero7 = Number(document.getElementById("valorQp").value);  
        let numero8 = Number(document.getElementById("quantQp").value); 
        let resultado4 = numero7 * numero8;  
        document.getElementById("resultadoQp").value = resultado4;
         
        
        let numero9 = Number(document.getElementById("valorch").value);  
        let numero10 = Number(document.getElementById("quantch").value); 
        let resultado5 = numero9 *  numero10;  
        document.getElementById("resultadoch").value = resultado5;
        
        
        let numero11 = Number(document.getElementById("valorM").value);  
        let numero12= Number(document.getElementById("quantM").value); 
        let resultado6 = numero11 * numero12;  
        document.getElementById("resultadoM").value = resultado6;  
          
          
        let numero13= Number(document.getElementById("valorcarne").value);  
        let numero14= Number(document.getElementById("quantcarne").value); 
        let resultado7 = numero13 * numero14;  
        document.getElementById("resultadocarne").value = resultado7;
          
          
        let numero15= Number(document.getElementById("valorBebida").value);  
        let numero16 = Number(document.getElementById("quantBebida").value);   
        let resultado8 = numero15 * numero16;  
        document.getElementById("resultadoBebida").value = resultado8; 

               
        // Somar os Hamburguer 
    
        let SomaHamburguer = resultado1 + resultado2 + resultado3 + resultado4 + resultado5 + resultado6 + resultado7;
        document.getElementById("valorH").value = SomaHamburguer; 
           
    

})
