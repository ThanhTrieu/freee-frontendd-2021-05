// lam the nao de truy cap vao phan tu HTML
let button = document.getElementById('btnClick');
console.log(button);

let button2 = document.getElementsByClassName('btn');
console.log(button2[0]);

let button3 = document.getElementsByTagName('button');
console.log(button3[0]);

// lam the nao bat su kien cho thanh phan HTML

// button.onclick = function() {
//   alert('Hello you');
// }

// button2[0].onclick = function() {
//   console.log('Hi you');
// }

// button3[0].addEventListener('click', function(){
//   console.log('hi');
// });

// bat su kien nguoi dung bam login
// lay dc gia tri nguoi dung nhap vao o input

let btnLogin = document.getElementById('btnLogin');
btnLogin.onclick = function() {
  let user = document.getElementById('username');
  let pass = document.getElementById('password');
  let errUser = document.getElementById('errUser');
  let errPass = document.getElementById('errPass');

  // lay gia tri nguoi dung nhap vao
  let valUser = user.value;
  let valPass = pass.value;
  let chkUser = null;
  let chkPass = null;
  //console.log(valUser, valPass);
  if(valUser === ''){
    // chua nhap username;
    // thong bao loi len
    errUser.innerHTML = 'Vui long nhap username';
    errUser.style.color = 'red';
    chkUser = false;
  } else {
    // da nhap user name;
    chkUser = true;
    errUser.innerHTML = '';
  }
  
  if(valPass === ''){
    // chua nhap mk
    // thong bao loi
    errPass.innerHTML = 'vui nhap MK';
    errPass.style.color = 'red';
    chkPass = false;
  } else {
    // da nhap mk
    chkPass= true;
    errPass.innerHTML = '';
  }
}