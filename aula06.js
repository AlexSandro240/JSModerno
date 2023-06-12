if(navigator.userAgent.match(/Android/i)|| navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone|iPad|iPod/i) || navigator.userAgent.match(/blackBerry/i) || navigator.userAgent.match(/windows Phone/i) || navigator.userAgent.match(/Opera Mini/i) || navigator.userAgent.match(/IEMobile/i)){
    console.log('Celular')
}else{
    console.log('PC')
}

//Verificar se código está rodando no PC ou Celular. 