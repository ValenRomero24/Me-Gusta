let btnMeGusta = document.querySelectorAll('.btn-like');
// selecciono todos los botones de like (3)


//Para cada uno de esos botones se le añade el evento onClick que busca el contador más cercano
//para luego separarlo y tomar el primer elemento que es el numero de likes
//despues incrementa dicho numero de likes y devuelve el nuevo valor al contador
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