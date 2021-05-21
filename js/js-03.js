let btnCheck = document.getElementById('btnCheck');
btnCheck.onclick = function(){
  // truy cap vao input
  let input = document.getElementById('txtNumber');
  // truy cap vao thong bao
  let message = document.getElementById('result');

  // lay gia tri cua input
  let valNumber = input.value;
  // console.log(valNumber, typeof(valNumber));
  // kieu du lieu la string
  // gia tri: hieu la number
  // kiem tra thuc su xem no co phai la chuoi so

  if(!isNaN(valNumber) && valNumber !== ''){
    // khi muon tinh toan so hoc trong js, can dam bao no thuc su co kieu du lieu la number

    // ep ve kieu number
    valNumber = parseFloat(valNumber);
    // viet ham bo tro kiem tra nam nhuan duong lich
    if(kiemTraNamNhuanDuongLich(valNumber)){
      message.innerHTML = `${valNumber} la nam nhuan DL`;
    } else {
      message.innerHTML = `${valNumber} khong phai la nam nhuan DL`;
    }
  } else {
    message.innerHTML = 'Vui long nhap nam can kiem tra';
    message.style.color = 'red';
  }
}

function kiemTraNamNhuanDuongLich(year) {
  // nam nhuan duong lich la nam ma thang 2 co ngay 29
  // trong nam do la co 366 ngay
  // 4 nam moi co 1 lan

  // thua toan kiem tra nhu sau:
  // nam do chia het cho 400 : nam nhuan luon
  // hoac la : nam do chia het cho 4 va khong dong thoi chia het cho 100 : nam nhuan luon
  if(year % 400 === 0){
    return true;
  } else if(year % 4 === 0 && year % 100 !== 0) {
    return true;
  }
  return false;
}

// let a = '10'; // string
// let b = 20; // number

//let c = a + b; // 1020
// let c = a - b; // -10
// let c = a * b; // 200
// let c = a / b; // 0,5