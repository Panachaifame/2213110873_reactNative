//กำหนด enum สำหรับสถานะสินค้า
var ProductsStatus;
(function (ProductsStatus) {
    ProductsStatus["Available"] = "Available";
    ProductsStatus["OutOfStock"] = "Out of Stock";
    ProductsStatus["Discontinued"] = "Disconntiued";
})(ProductsStatus || (ProductsStatus = {}));
//กำหนด array ของสินค้าใช้ข้อมูล Any
var products = [
    { name: "Labtop", status: ProductsStatus.Available, price: 1200 },
    { name: "Smartphone", status: ProductsStatus.OutOfStock, price: 700 },
    { name: "Tablet", status: ProductsStatus.Discontinued, price: 300 },
];
//ฟังก์ชั่นแสดงผลสินค้า
function displayProductdetails(productdetails) {
    productdetails.forEach(function (product) {
        console.log("Product:".concat(product.name, ",Status:").concat(product.status, ",price:").concat(product.price));
    });
}
displayProductdetails(products);
