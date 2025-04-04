let btnMeGusta = document.querySelector('.btn-like');
// console.log(btnMeGusta);


let contador = btnMeGusta.closest('.header').querySelector('.contador');
btnMeGusta.addEventListener('click',function(evento){
    let texto = contador.textContent;
    let num = texto.split(' ')[0];
    num++;
    console.log(num);
    contador.textContent=num + ' like(s)';
});