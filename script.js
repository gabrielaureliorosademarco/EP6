function funcaoResposta(){
    
    var resp1 = document.querySelector('input[name="resposta1"]:checked');
    var resp2 = document.querySelector('input[name="resposta2"]:checked');
    var resp3 = document.querySelector('input[name="resposta3"]:checked');
    var resp4 = document.querySelector('input[name="resposta4"]:checked');
    var resp5 = document.querySelector('input[name="resposta5"]:checked');

    if(resp1 && resp2 && resp3 && resp4 && resp5 ){
        if(resp1.value == "correta1"){
            document.getElementById("resp_correta_1").innerHTML = "Correta!"
           
        }
        else{
            document.getElementById("resp_errada_1").innerHTML = "Errada, pois a soma dos quadrados dos catetos é igual ao quadrada da hipotenusa!"

        }
        if(resp2.value == "correta2"){
            document.getElementById("resp_correta_2").innerHTML = "Correta!"
            
        }
        else{
            document.getElementById("resp_errada_2").innerHTML = "Errada, pois a soma dos quadrados dos catetos é igual ao quadrada da hipotenusa!"

        }
        if(resp3.value == "correta3"){
            document.getElementById("resp_correta_3").innerHTML = "Correta!"
           
        }
        else{
            document.getElementById("resp_errada_3").innerHTML = "Errada, pois a soma dos quadrados dos catetos é igual ao quadrada da hipotenusa!"

        }
        if(resp4.value == "correta4"){
            document.getElementById("resp_correta_4").innerHTML = "Correta!"
            
        }
        else{
            document.getElementById("resp_errada_4").innerHTML = "Errada, pois a soma dos quadrados dos catetos é igual ao quadrada da hipotenusa!"

        }
        

        if(resp5.value == "correta5"){
            document.getElementById("resp_correta_5").innerHTML = "Correta!"
            
        }
        else{
            document.getElementById("resp_errada_5").innerHTML = "Errada, pois a soma dos quadrados dos catetos é igual ao quadrada da hipotenusa!"

        }
    }
}