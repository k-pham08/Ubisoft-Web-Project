var count = 1;
var sale = 17.50;
var price = 69.99;
var unit = 18;
var priceShow = document.querySelectorAll('.price-value');
function increase(){
    count++;
    var save = (price - sale) * count;
    document.querySelector('.value').innerHTML = count;
    priceShow[0].innerHTML = '$' + count*sale;
    priceShow[2].innerHTML = '$' + count*sale;
    document.querySelector('.money-save').innerHTML = 'You saved $ ' + save.toFixed(2) + '!';
    document.querySelectorAll('.units-val')[2].innerHTML = count * unit ;
};
function decrease(){
    if(count == 1){
        return count = 1;
    }
    else{
        count--; 
        var save = (price - sale) * count;
        document.querySelector('.value').innerHTML = count;
        priceShow[0].innerHTML = '$' + count*sale;
        priceShow[2].innerHTML = '$' + count*sale;
        document.querySelector('.money-save').innerHTML = 'You saved $ ' + save.toFixed(2) + '!';
    document.querySelectorAll('.units-val')[2].innerHTML = count * unit ;
    }
};
function remove(){
    document.querySelector('.cart-wrapper').remove();
    document.querySelector('.cart-empty').style.display = 'block';
    document.querySelector('.cart-quantity').innerHTML = count - 1;
};