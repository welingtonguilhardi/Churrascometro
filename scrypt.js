//meat = 400gm per person if + 6 hours = 650 gm
//beer = 1200 ml per person if 6+ hours = 2000ml
//soda/water = 1000ml per person if + 6 hours = 1500ml
//children are worth 0.5

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao"); 

let resultado = document.getElementById("resultado")


function calcular(){
        let adultos = inputAdultos.value;
        let criancas = inputCriancas.value;
        let duracao = inputDuracao.value;
    

    let carneTotal = carnePP(duracao) * adultos + (carnePP(duracao) /2*criancas );
    let cervejaTotal = cervejaPP(duracao) * adultos + (cervejaPP(duracao) );
    let bebidasTotal = bebidasPP(duracao) * adultos + (bebidasPP(duracao) /2*criancas );
    
    
  resultado.innerHTML += `<p>${carneTotal/1000} kg de carne</p>`;
  resultado.innerHTML += `<p>${Math.ceil(cervejaTotal/355)} latas de cerveja de 355ml</p>`;
  resultado.innerHTML += `<p>${Math.ceil(bebidasTotal/2000)} garrafas de 2 litros</p>`;
}




function carnePP(duracao){
    if (duracao>=6){
        return 650
    }else{return 400}
}



function cervejaPP(duracao){
    if(duracao>=6){
        return 2000
    }else {return 1200}
}

function bebidasPP (duracao){
    if(duracao >= 6){
    return 1500
    }else{ return 1000}
}



















