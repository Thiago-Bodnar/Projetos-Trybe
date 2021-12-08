//Fiz seguindo o gabarito pois não consegui fazer
window.onload = function() {
let select = document.querySelector('select');
select.addEventListener('change', function(){
    let selectedOptions = select.selectedOptions[0];    
    document.body.style.backgroundColor = select.value
});
let select2 = document.querySelector('#select2');
select2.addEventListener('change', function(){
    let selectedOptions = select2.selectedOptions[0];    
    document.body.style.color = select2.value
});


}