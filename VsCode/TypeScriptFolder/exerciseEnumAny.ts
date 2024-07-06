//กำหนด enum สำหรับสถานะสินค้า
enum ProductsStatus {
  Available = "Available",
  OutOfStock = "Out of Stock",
  Discontinued = "Disconntiued",
}
//กำหนด array ของสินค้าใช้ข้อมูล Any
let products: any[] = [
  { name: "Labtop", status: ProductsStatus.Available, price: 1200 },
  { name: "Smartphone", status: ProductsStatus.OutOfStock, price: 700 },
  { name: "Tablet", status: ProductsStatus.Discontinued, price: 300 },
];
//ฟังก์ชั่นแสดงผลสินค้า
function displayProductdetails(productdetails: any[]) {
  productdetails.forEach((product) => {
    console.log(`Product:${product.name},Status:${product.status},price:${product.price}`);
  });
}

displayProductdetails(products);
