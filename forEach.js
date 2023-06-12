const aprovados = ['Alex','Sandro','Pedro','Renan'];

aprovados.forEach(function (elemento, indice) {
    console.log(`${indice + 1}) ${elemento}`); 
}) //Função Callback com dois parametros dentro do forEach. Um para cada nome no Array e outro para cada índice

aprovados.forEach(elemento => console.log(`${elemento}`)); //Arrow Function com apenas um parametro. 

