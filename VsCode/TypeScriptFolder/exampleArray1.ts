//สร้างและเข้าถึง Array
let numbers : number[]=[10,20,30,40,50];
console.log(numbers[2]); //30

//เปิดใช้งาน loop ร่วมกับ Array
let names:string[]=['Alice','Bob','Cha'];
for(let name of names){
    console.log(name);
}
let fruits: string[]=["Apple", "Banana"];
fruits.push("orange");
console.log(fruits);//เพิ่มส้ม
