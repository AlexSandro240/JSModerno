"use strict";

var nome = "Ana"; //Aqui imprimirá Ana
function teste1(){
    nome = 'Marta' 
    if (true) {
        console.log(nome); //Pode ter atualizado a variavel, aqui imprimirá Marta

        var nome = 'Paola'

        console.log(nome);
    }

    console.log(nome); //Aqui continuará imprimindo Paola
}

teste1();

function teste2(){
    let nome = 'Renan'
    console.log(nome); //Aqui imprimirá 'Renan'
    if (true) {
        let  nome = "Alex Sandro";
        console.log(nome); //Aqui imprimirá 'Alex Sandro'
    }

    //nome = "Diguinho";
    //console.log(nome); Aqui imprimirá 'Diguinho' 

    console.log(nome); //Aqui imprimirá 'Renan'

}

teste2();

function teste3(){
    const nome = 'Erica'; 
    console.log(nome); //Aqui imprimirá 'Erica'
    if(true){
        nome = 'Evillyn';
        console.log(nome); //Aqui imprimirá 'Assignment to constant variable', pois não é possível atualizar a Const 
    }

    //const nome='Paula';
    // console.log(nome); Aqui imprimirá ' Identifier 'nome' has already been declared' pois não é possivel declarar a const novamente
}

teste3();