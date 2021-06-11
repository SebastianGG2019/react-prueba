
const pulsar= () =>{
    var menu = document.querySelector('.menu');
    var inputCheck = document.querySelector('#btn-menu').checked;
    if(inputCheck === false){
        menu.style.left = '0';
    }else{
        menu.style.left = '-120%';
    }
}
export default pulsar ;