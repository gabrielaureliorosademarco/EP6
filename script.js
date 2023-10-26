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
            document.getElementById("resp_errada_1").innerHTML = "Errada,Como são ao todo 6 molas (3 em cada tênis), é necessário dividir o peso total por 6, descobrindo assim a quantidade de força que cada mola será capaz de amortecer:"

        }
        if(resp2.value == "correta2"){
            document.getElementById("resp_correta_2").innerHTML = "Correta!"
            
        }
        else{
            document.getElementById("resp_errada_2").innerHTML = "Errada, Substituindo os valores na fórmula da força elástica, também chamada de lei de Hooke, obteremos o valor da força:"

        }
        if(resp3.value == "correta3"){
            document.getElementById("resp_correta_3").innerHTML = "Correta!"
           
        }
        else{
            document.getElementById("resp_errada_3").innerHTML = "Errada, Como a constante elástica está com a unidade de medida em centímetro, não há necessidade de converter a elongação para metros. Portanto, para encontrarmos o valor da força elástica, basta substituirmos os valores dados pelo enunciado na sua fórmula:"

        }
        if(resp4.value == "correta4"){
            document.getElementById("resp_correta_4").innerHTML = "Correta!"
            
        }
        else{
            document.getElementById("resp_errada_4").innerHTML = "Errada,Utilizando a fórmula da força elástica, obteremos o valor da elongação:"
        }
        

        if(resp5.value == "correta5"){
            document.getElementById("resp_correta_5").innerHTML = "Correta!"
            
        }
        else{
            document.getElementById("resp_errada_5").innerHTML = "Errada,É necessário um trabalho de 3,125 J. O sinal negativo significa que o trabalho está contrário à força que deforma a mola."

        }
    }

}

function mudar(objeto, imagem){

        
    imgexp.src = imagem;
    }


    function inclui_nome() {
        var nome_variavel = prompt("Coloque seu nome:");
        if(nome_variavel){
            document.getElementById("marcacao_nome").innerHTML = nome_variavel;
        }
        else{
            alert("Nome não atribuido, preencha o nome.");
            inclui_nome();
        }
    }


    function calculo(){
        resultado.value = parseInt(valor1.value) * parseInt(valor2.value)
    }

    

    valor1.value= 0;
    valor1.value= 0;


    function funcaoResposta2(){
    
        var resp6 = document.querySelector('input[name="resposta6"]:checked');
        var resp7 = document.querySelector('input[name="resposta7"]:checked');
        var resp8 = document.querySelector('input[name="resposta8"]:checked');
        var resp9 = document.querySelector('input[name="resposta9"]:checked');
        
    
        if(resp6 && resp7 && resp8 && resp9  ){
            if(resp6.value == "correta6"){
                document.getElementById("resp_correta_6").innerHTML = "Correta!"
               
            }
            else{
                document.getElementById("resp_errada_6").innerHTML = "Errada, Resposta: d) um aumento na tensão provoca um aumento proporcional na deformação."
    
            }
            if(resp7.value == "correta7"){
                document.getElementById("resp_correta_7").innerHTML = "Correta!"
                
            }
            else{
                document.getElementById("resp_errada_7").innerHTML = "Errada,A força peso do corpo de 40 kg irá distender as molas."
    
            }
            if(resp8.value == "correta8"){
                document.getElementById("resp_correta_8").innerHTML = "Correta!"
               
            }
            else{
                document.getElementById("resp_errada_8").innerHTML = "Errada, Convertendo os valores da massa e da velocidade do bloco para suas unidades de medida dadas pelo Sistema Internacional de Unidades (SI):"
    
            }
            if(resp9.value == "correta9"){
                document.getElementById("resp_correta_9").innerHTML = "Correta!"
               
            }
            else{
                document.getElementById("resp_errada_9").innerHTML = "Errada, Usando a fórmula da força elástica que a relaciona com o trabalho elástico, obteremos o valor do trabalho necessário para produzir a deformação:"
    
            }
            
            }
        }
        