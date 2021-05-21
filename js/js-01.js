// comment 1 dong trong js
// hien thi noi dung ra ben ngoai trinh duyet !
document.write('<h1>Hello World</h1>');

// hien thi thong bao 
// alert('Hello');

// hien thi ket qua ra ngoai man hinh console cua trinh duyet
console.log('Hello word');

// HTML + CSS : khong goi la ngon ngu lap trinh
// HTML : ngon ngu danh dau
// CSS : ngon ngu dinh dang
// JS : ngon ngu lap trinh co ban (chuan)

// bien + kieu du lieu
// bien : dia chi o nho trong bo nho may tinh de luu tru thong tin
// kieu du lieu
// JS : khong quy dinh san kieu du lieu cho bien -  bien chi nhan kieu du lieu khi duoc gan gia tri.

// bien : khai bao bien
// tu khoa khai bao + ten bien
let myName = 'Van Teo'; // co kieu du lieu la gi ?
console.log(typeof(myName));
let myAge = 20;
console.log(typeof(myAge));
let check = true;
console.log(typeof(check));
let myJob; // khong duoc gan gia tri thi mac dinh la undefined
console.log(typeof(myJob));
// co bao nhieu kieu du lieu trong JS : 8 kieu
// nguyen tac dat ten bien trong js : ten bien khong trung tu khoa trong lap trinh va khong bat dau bang so
// tieu chuan - quy chuan : chu cai dau tien se viet thuong va cac chu cai con lai cua cac tu se viet hoa
//let goToSchool;

// dinh nghia hang so: gia tri se khong thay trong toan bo chuong trinh
const PI = 3.14;
// quy tac dat ten hang so : viet hoa tat ca cac chu va cach nhau boi dau gach duoi
const MY_EMAIL = 'test';
//PI = 3.15; // sai
console.log(PI);
myAge = 30;

// dinh nghia ham trong js
// function : to chuc, sap xep cac khoi cau lenh trong mot ham de giai quyet cong viec gi do, tai su dung lai dc

// viet 1 ham kiem tra chan le
function kiemTraChanLe(number) {
  if(number % 2 === 0) {
    return true;
  }
  return false;
}
let n = 11;
if(kiemTraChanLe(n)){
  console.log('so chan');
} else {
  console.log('so le');
}

// mang trong js - kieu du lieu :object
let arrNumbers = [1,2,3,4,5,6];
let numbers = new Array(1,2,3,4,5,6,7,8);
// mang co 2 thanh quan trong
// 1 : vi tri cua phan tu trong mang (luon luon bat dau tu 0)
// 2: gia tri cua phan tu trong mag
// truy cap vao gia tri cua phan tu
// tenMang[vitri_cua_phantu];
console.log(arrNumbers[4]);
// duyet qua cac phan tu trong mang
// 1 - for
for(let i = 0; i < arrNumbers.length; i++){
  console.log(arrNumbers[i]);
}
// 2 - forEach
numbers.forEach(function(item, key) {
  // item : gia tri phan tu trong mang
  // key : vi tri phan tu trong mang
  console.log(`value : ${item} - key: ${key}`);
});
// 3 - for ... of
for(let j of numbers) {
  console.log(j);
  // gia tri cua phan tu
  // kho biet dc vi tri cua phan tu - duyet qua nhanh gia tri phan tu
}

