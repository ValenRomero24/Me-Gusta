let btnMeGusta = document.querySelectorAll('.btn-like');
// console.log(btnMeGusta);

for(let i=0; i<btnMeGusta.length; i++){
    let contador = btnMeGusta[i].closest('.post-header').querySelector('.post-contador');
    btnMeGusta[i].addEventListener('click',function(evento){
        let texto = contador.textContent;
        let num = texto.split(' ')[0];
        num++;
        console.log(num);
        contador.textContent=num + ' like(s)';
    });
}