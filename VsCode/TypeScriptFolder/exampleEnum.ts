//กำหนดตัวแปรประเภท Enum
enum OrderStatus {
  Pending = "Pending",
  Shipped = "Shipped",
  Cancelled = "Cancelled",
}
//สร้าง ฟังกชั่น
function displayOrderStatus(status: OrderStatus) {
  switch (status) {
    case OrderStatus.Pending:
      console.log("Your Order is pending.");
      break;
    case OrderStatus.Shipped:
      console.log("Your Order has been shipped.");
      break;
    case OrderStatus.Cancelled:
      console.log("Youe Order has been cancelled.");
      break;
    default:
      console.log("unknown Order status.");
  }
}// end OrderStatus function

//testing the functionn
displayOrderStatus(OrderStatus.Shipped);
displayOrderStatus(OrderStatus.Cancelled);