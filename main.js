let basket = document.querySelector('.basket');
let panel = document.querySelector('.panel');
basket.addEventListener('click',()=>{
    panel.classList.toggle('hidden');
});

let product = document.querySelector('.pic_product');
let product_1 = document.querySelector('.pic_product_1');
let product_2 = document.querySelector('.pic_product_2');
let product_3 = document.querySelector('.pic_product_3');
let product_4 = document.querySelector('.pic_product_4');
product_1.addEventListener('click',()=>{
    product_1.style.border = '2px solid #ff7d1a';
    product_1.style.opacity = '.6';
    product.style.backgroundImage = `url('/images/image-product-1.jpg')`;
    product_2.style.border = 'none';
    product_2.style.opacity = '1';
    product_3.style.border = 'none';
    product_3.style.opacity = '1';
    product_4.style.border = 'none';
    product_4.style.opacity = '1';
});
product_2.addEventListener('click',()=>{
    product_2.style.border = '2px solid #ff7d1a';
    product_2.style.opacity = '.6';
    product.style.backgroundImage = `url('/images/image-product-2.jpg')`;
    product_1.style.border = 'none';
    product_1.style.opacity = '1';
    product_3.style.border = 'none';
    product_3.style.opacity = '1';
    product_4.style.border = 'none';
    product_4.style.opacity = '1';

});
product_3.addEventListener('click',()=>{
    product_3.style.border = '2px solid #ff7d1a';
    product_3.style.opacity = '.6';
    product.style.backgroundImage = `url('/images/image-product-3.jpg')`;
    product_1.style.border = 'none';
    product_1.style.opacity = '1';
    product_2.style.border = 'none';
    product_2.style.opacity = '1';
    product_4.style.border = 'none';
    product_4.style.opacity = '1';

});
product_4.addEventListener('click',()=>{
    product_4.style.border = '2px solid #ff7d1a';
    product_4.style.opacity = '.6';
    product.style.backgroundImage = `url('/images/image-product-4.jpg')`;
    product_1.style.border = 'none';
    product_1.style.opacity = '1';
    product_3.style.border = 'none';
    product_3.style.opacity = '1';
    product_2.style.border = 'none';
    product_2.style.opacity = '1';
});

let minus = document.querySelector('.minus');
let plus = document.querySelector('.plus');
let NumberOf_quantity = document.querySelector('.NumberOf_quantity');
let n  = 0;
plus.addEventListener('click',()=>{
    n++;
    NumberOf_quantity.innerText = n;
    addToCart.style.cursor = 'pointer';
});
minus.addEventListener('click',()=>{
    n--;
    if(n<0){
        n = 0
        NumberOf_quantity.innerText = n;
    }else{
        NumberOf_quantity.innerText = n;
    }
    if(n==0)addToCart.style.cursor = 'not-allowed';
    
});

let addToCart = document.querySelector('.addToCart');
let yourAdd = document.querySelector('.yourAdd');
let new_product = document.querySelector('.new_product');
let price = document.querySelector('.price');
let quantity = document.querySelector('.quantity');
let notification = document.querySelector('.notification');
addToCart.addEventListener('click',()=>{
    if(n!==0){
        addToCart.style.cursor = 'pointer';
        yourAdd.style.display = 'none';
        new_product.style.display = 'block';
        notification.style.display = 'block';
        notification.innerText = n;
        quantity.innerText = n;
        price.innerText = 125.00*n;
    }
        
});

let remove = document.querySelector('.delete');
remove.addEventListener('click',()=>{
    new_product.style.display = 'none';
    yourAdd.style.display = 'block';
    notification.style.display = 'none';
    n = 0;
    NumberOf_quantity.style.innerText = n;
});

let pic_product_2 = document.querySelector('.picProductss');
product.addEventListener('click',()=>{
    pic_product_2.style.display = 'block';
});

let close_product = document.querySelector('.close_product');
close_product.addEventListener('click',()=>{
    pic_product_2.style.display = 'none';
});




let pic_product = document.querySelector('.picProduct_2');
let product_one = document.querySelector('.pic_product_one');
let product_two = document.querySelector('.pic_product_two');
let product_three = document.querySelector('.pic_product_three');
let product_four = document.querySelector('.pic_product_four');
product_one.addEventListener('click',()=>{
    product_one.style.border = '2px solid #ff7d1a';
    product_one.style.opacity = '.6';
    pic_product.style.backgroundImage = `url('/images/image-product-1.jpg')`;
    product_two.style.border = 'none';
    product_two.style.opacity = '1';
    product_three.style.border = 'none';
    product_three.style.opacity = '1';
    product_four.style.border = 'none';
    product_four.style.opacity = '1';
});
product_two.addEventListener('click',()=>{
    product_two.style.border = '2px solid #ff7d1a';
    product_two.style.opacity = '.6';
    pic_product.style.backgroundImage = `url('/images/image-product-2.jpg')`;
    product_one.style.border = 'none';
    product_one.style.opacity = '1';
    product_three.style.border = 'none';
    product_three.style.opacity = '1';
    product_4.style.border = 'none';
    product_4.style.opacity = '1';

});
product_three.addEventListener('click',()=>{
    product_three.style.border = '2px solid #ff7d1a';
    product_three.style.opacity = '.6';
    pic_product.style.backgroundImage = `url('/images/image-product-3.jpg')`;
    product_one.style.border = 'none';
    product_one.style.opacity = '1';
    product_two.style.border = 'none';
    product_two.style.opacity = '1';
    product_four.style.border = 'none';
    product_four.style.opacity = '1';

});
product_four.addEventListener('click',()=>{
    product_four.style.border = '2px solid #ff7d1a';
    product_four.style.opacity = '.6';
    pic_product.style.backgroundImage = `url('/images/image-product-4.jpg')`;
    product_one.style.border = 'none';
    product_one.style.opacity = '1';
    product_3.style.border = 'none';
    product_3.style.opacity = '1';
    product_two.style.border = 'none';
    product_two.style.opacity = '1';
});

let next = document.querySelector('.next');
let previous = document.querySelector('.previous');
let number = 1;
next.addEventListener('click',()=>{
    number++;
    switch (number) {
        case 2:
            pic_product.style.backgroundImage = `url('/images/image-product-2.jpg')`;
            break;
        case 3:
            pic_product.style.backgroundImage = `url('/images/image-product-3.jpg')`;
            break;
        default: pic_product.style.backgroundImage = `url('/images/image-product-4.jpg')`;
            break;
    }
});
previous.addEventListener('click',()=>{
    number--;
    if(number <= 0){
        number=1;
    }
    switch (number) {
        case 1:
            pic_product.style.backgroundImage = `url('/images/image-product-1.jpg')`;
            break;
        case 2:
            pic_product.style.backgroundImage = `url('/images/image-product-2.jpg')`;
            break;
        case 3:
            pic_product.style.backgroundImage = `url('/images/image-product-3.jpg')`;
            break;
        default: pic_product.style.backgroundImage = `url('/images/image-product-4.jpg')`;
            break;
    }
});

let menu = document.querySelector('.menu');
let closeMenu = document.querySelector('.closeMenu');
let menuList = document.querySelector('.menuList');

menu.addEventListener('click',()=>{
    menuList.style.display = 'block';
    menu.style.display  ='none';
    closeMenu.style.display = 'block';
});
closeMenu.addEventListener('click',()=>{
    menuList.style.display = 'none';
    closeMenu.style.display = 'none'; 
    menu.style.display = 'block'; 
});