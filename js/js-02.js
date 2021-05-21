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
    // thoa man dieu kien la nguoi dung thuc su nhap vao la so thi moi di kiem tra
    // NaN : not a number
    // kiem tra xem valNumber co phai so nguyen to ko?
    if(kiemTraSoNguyenTo(valNumber)){
      message.innerHTML = `${valNumber} la so nguyen to`;
    } else {
      message.innerHTML = `${valNumber} khong phai la so nguyen to`;
    }
  } else {
    // khong kiem tra ma bao loi len
    message.innerHTML = 'Vui long nhap so';
    message.style.color = 'red';
  }
}

// viet ham bo tro cho viec kiem tra 1 so co phai so nguyen to hay ko ?
function kiemTraSoNguyenTo( n ) {
  // xu ly ham nay
  // so nguyen to la so chia het cho 1 va chinh no
  if(n <= 1){
    // khong phai
    return false;
    // return tra ket qua ve cho ham va thoat khoi ham luon
  }

  if(n == 2){
    // vi 2 la so nguyen to
    return true;
  }

  // se di kiem tra tu 2 cho toi can bac hai cua n
  // trong pham vi do neu n chia het cho bat ky so nao thi no khong phai la so nguyen to. Nguoc lai thi no la so nguyen to
  for(let i = 2; i<= Math.sqrt(n); i++) {
    if(n % i === 0){
      return false;
    }
  }

  // neu khong thoa man dieu kien trong vong lap for, thi chac chan la so nguyen to
  return true;
}