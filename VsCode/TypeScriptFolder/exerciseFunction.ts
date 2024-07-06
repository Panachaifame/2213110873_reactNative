type Product ={
    name:String;
    price:number;
    category:String;
};//End of Type

//Set Array in Product
let Products:Product[]=[
    {name :'Laptop',price: 50000,category:'Electronics'},
    {name :'Shirt',price: 1200,category:'Apparel'},
    {name :'Coffee Maker',price: 2500,category:'Appliances'}
]// End of let Product

//create function"filterProductByPrice" สำหรับกรองข้อมูลผลิตภัณฑ์ตามราคาที่กำหนด
function filterProductByPrice(products:Product[]):Product[]{
    return products.filter(product=>product.price>10000);
}

//createFUnction"discountProduct" ใช้สำหรับลดราคาสินค้า 10%
function discountProduct(products:Product[]):Product[]{
    return products.map(product=>({...product,price:product.price+0.9}));
}

//call function 
let filterproduct = filterProductByPrice(Products);
let discountProducts = discountProduct(filterproduct);

//output
console.log(filterproduct);
console.log(discountProducts);




