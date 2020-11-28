console.log("Hello Cybersoft");


/*
*Biến
*/

// Number String
var username = "Duong Quoc Phu";
var address = "112 Cao Thang";

// Number
var age = 18;

//Boolean
var status = true;

//Null
var numberStudent = null;

// undefined
var people;

var firstName = "Phu";
var last_Name = "Duong";

// console.log("Ten la:" + username); //Trong log là biến thì không có dấu nhấy
// console.log("Dia chi:" + address);
// console.log("Ten la: " + username, "Dia chi: " + address);

// Hoisting
var fullName; //tạo ra biến ảo nếu chưa khai báo biến

console.log("fullname: " + fullName);
var fullName = "Duong Quoc Phu";

isLogin = true;
console.log("isLogin: ", isLogin);

const PI = 3.14; //Tạo hằng số phải gán cho nó giá trị ban đầu, và giá trị không thay đổi

/**
 * Câu lệnh điều kiện
 * //So sánh 2 dấu = so sánh giá trị
 * //So sánh 3 dấu = so sánh giá trị và luôn kiểu dữ liệu
 */
if(1 === "1"){
    console.log("DK dung");
}else{
    console.log("DK sai");
}

//DK? "Đung" : "Sai"
1 === "1" ? console.log("DK dung") : console.log("DK sai"); 

var btA = true;
var btB = false;
console.log("Ket qua &&: ", btA && btB);
console.log("Ket qua ||: ", btA || btB);
console.log("Phu dinh cua btA: ", !btA);

switch (0) {
    case 0:
        console.log("Day la so 0");
        break;
    case 1:
        console.log("Day la so 1");
        break;
    case 2:
        console.log("Day la so 2");
        break;    
    default:
        console.log("Khong xac dinh");
        break;
}

var list = ["Phu", "Quoc", "Duong" ,"Nam"];
console.log(list[0]);

/**
 * Vòng lặp
 * 
 *
 */

 for(var i=0; i<list.length; i++){
     console.log(list[i]);
 }

 var number_1 = 10;
 var number_2 = 5;
 var number_3 = 20;
 var number_4 = 7;

 var total = number_1 + number_2; 
console.log("Tong la:", total);
var total2 = number_3 + number_4;
console.log("Tong la:", total2);

/**
 * Hàm
 * Không có tham số
 */

// tinhTong();
// tinhTong34();

// function tinhTong(){
//     var sum = number_1 + number_2;
//     console.log("sum la:", sum);
// }

// function tinhTong34(){
//     var sum = number_3 + number_4;
//     console.log("sum la:", sum);
// }

/**
 * Hàm
 * Có tham số
 * Không có giá trị trả về
 */

 function tinhTong(a, b){
    var sum = a + b;
    console.log("sum la:", sum);   
 }
//  tinhTong(number_1, number_2);
//  tinhTong(number_3, number_4);
 tinhTong(50, 50) + 200;

 /**
 * Hàm
 * Có tham số
 * Có giá trị trả về
 */

function tinhTong(a, b){
    var sum = a + b; 
    return sum;
 }

//  var total2 = tinhTong(50, 50);
 console.log("Tong la:", tinhTong(50, 50) + 100);

/**
 * Bài tập tính điểm trung bình: toán, lý, hóa
 * dtb = (toan + ly + hoa)/3;
 * Xếp loại :
 * + 9 <= dtb <= 10 => Xuất sắc 
 * + 8 <= dtb < 9 => Gioi
 * + 7 <= dtb < 8 => Kha
 * + 5 <= dtb < 7 => Trung binh
 * + Yếu
 * => tinhDTB(); xepLoai();
 */

 function tinhDTB(toan, ly, hoa){
     return (toan + ly + hoa) / 3;
    
 }

 function xepLoai(dtb){
     var loai = "";
    if(9 <= dtb && dtb <= 10){
        loai = "Xuat sac";
    }else if(8 <= dtb && dtb < 9){
        loai = "Gioi";
    }else if(7 <= dtb && dtb < 8){
        loai = "Kha";
    }else if(5 <= dtb && dtb < 7){
        loai = "Trung binh";
    }else{
        loai = "Yeu";
    }
    console.log("Loai la: ", loai);
 }

 var dtb = tinhDTB(9, 9, 9);
 xepLoai(dtb);
 
 /**
  * DOM
  */

var txtInput = document.getElementById("txtInput").value;
console.log(txtInput);

var _pText = document.getElementById("pText").innerHTML;
console.log(_pText);

/**
 * Event
 */

//cách 1:
// function eventClick() {
//     var txtValue = document.getElementById("txtInput").value;
//     console.log(txtValue);
// }

//Cách 2:
// document.getElementById("btnClick").onclick = function () {
//     var txtValue = document.getElementById("textInput").value;
//     console.log(txtValue);
// }

//Cách 3: callback function
// document.getElementById("btnClick").addEventListener("click", function () {
//     var txtValue = document.getElementById("txtInput").value;
//       console.log(txtValue);
// })

function demoClick(){
    var txtValue = document.getElementById("txtInput").value;
    console.log(txtValue);
}

document.getElementById("btnClick").addEventListener("click", demoClick);

document.getElementById("btnNhanEmDi").addEventListener("click", function(){
    document.getElementById("divContent").innerHTML = "Thay đổi rồi nhé!";
    document.getElementById("divContent").style.backgroundColor = "aqua";
    document.getElementById("divContent").style.fontSize = "30px";
});

document.getElementById("btnHide").addEventListener("click", function(){
    document.getElementById("divContent").style.display = "none";
});

document.getElementById("btnShow").addEventListener("click", function(){
    document.getElementById("divContent").style.display = "block";
});

document.getElementById("btnDisable").addEventListener("click", function(){
    document.getElementById("btnNhanEmDi").disabled = true;
});

document.getElementById("btnEnable").addEventListener("click", function(){
    // document.getElementById("btnNhanEmDi").disabled = false;
    document.getElementById("btnEnable").removeAttribute
});

// document.getElementById("btnBulbOn").addEventListener("click", function(){
//     document.getElementById("imgBuld").src = "./img/pic_bulbon.gif";
// })

document.getElementById("btnLogin").addEventListener("click", function(){
    /**
     * lấy thông tin từ người dùng nhập vào 
     */
   var username = document.getElementById("textName").value;
   var password = document.getElementById("textPass").value;

   if(username === "cybersoft" && password === "cybersoft") {
        // changeColor("Login thanh cong", "green")
        changeColor2("Login thanh cong", "alert alert-success");
   }else{
        // changeColor("Login that bai", "red")
        changeColor2("Login that bai", "alert alert-danger");
   }

})

function changeColor(mess, bg){
    document.getElementById("textThongBao").innerHTML = mess
    document.getElementById("textThongBao").style.display = "block";
    document.getElementById("textThongBao").style.backgroundColor = bg;
    document.getElementById("textThongBao").style.color = "white";
}

function changeColor2(mess, classes){
    document.getElementById("textThongBao").style.display = "block";
    document.getElementById("textThongBao").innerHTML = mess;
    document.getElementById("textThongBao").className = classes;
}

/**
 * DOM TagName
 */

var tagName = document.getElementsByTagName("button")[0];
console.log(tagName);

/**
 * DOM ClassName
 */

 var _className = document.getElementsByClassName("btn")[0];
 console.log(_className);

 /**
  * DOM querySelector
  */
 var _querySelector = document.querySelector(".container #textThongBao");
 console.log(_querySelector);

 /**
  * DOM querySelectorAll
  */
 var _querySelectorAll = document.querySelectorAll(".container .form-control")[0];
 console.log(_querySelectorAll);

 document.querySelectorAll("#btnTinhTienTip").addEventListener("click", function(){
    var txtTongTien = document.getElementById("txtTongTien").value;
    var txtPhanTramTip = document.getElementById("slPhanTramTip").value;
    var txtSoNguoi = document.getElementById("txtSoNguoi").value;
    console.log(txtTongTien, txtPhanTramTip, txtSoNguoi);

    /**
  * CT: txtTongTien * txtPhanTramTip/100/txtSoNguoi
  */
    var _total = (txtTongTien * txtPhanTramTip) / 100 / txtSoNguoi;
    


 });

 