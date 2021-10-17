// Xuất 3 số theo thứ tự tăng dần
/**
 * Khối 1: có 3 số
 * Khối 2:
 * -Khai báo biến a,b,c lấy dữ liệu từ input
 * -Nếu a>b>c  => kết quả c<b<a
 * -ngược lại nếu a>c>b  => kết quả b<c<a
 * -ngược lại nếu c>a>b  => kết quả b<a<c
 * -ngược lại nếu b>a>c  => kết quả c<a<b
 * -ngược lại nếu b>c>a  => kết quả a<c<b
 * ngược =>a<b<c
 * Khối 3:ra kết ra từ nhỏ đến lớn trên UI
 */
document.getElementById("btnTimso").onclick = function () {
    var a = Number(document.getElementById("number1").value);
    var b = Number(document.getElementById("number2").value);
    var c = Number(document.getElementById("number3").value);
    var rst;

    if (a > b && b > c) {
        rst = c + "<" + b + "<" + a
    } else if (a > b && c > b) {
        rst = b + "<" + c + "<" + a
    } else if (a > b && c > a) {
        rst = b + "<" + a + "<" + c
    } else if (b > a && b > c) {
        rst = c + "<" + a + "<" + b
    } else if (b > c && c > a) {
        rst = a + "<" + c + "<" + b
    } else {
        rst = a + "<" + b + "<" + c
    }

    document.getElementById("footerCard").innerHTML = "Kết quả: " + rst
}

// Chào hỏi 
/**
 * Khối 1:Thành viên trong gia đình
 * Khối 2:
 * -Khai báo biến human lấy value từ input
 * -So sánh để xuất ra lời chào đúng thành viên 
 * + nếu human == 1 => chào bố
 * + nếu human == 2 => chào mẹ
 * + nếu human == 3=> chào anh
 * + nếu human == 4 => chào em
 * + Ngược lại => Hãy chọn thành viên
 * Khối 3:Xuất ra lời chào 
 */
document.getElementById("btnhello").onclick = function () {
    var human = document.getElementById("family").value;
    // console.log(human)

    if (human == 1) {
        result = ("Xin chào bố!")
    } else if (human == 2) {
        result = ("Xin chào mẹ!")
    } else if (human == 3) {
        result = ("Xin chào Anh Trai!")
    } else if (human == 4) {
        result = ("Xin chào Em Gái!")
    } else
        result = ("Hãy chọn thành viên")
    document.getElementById("greeting").innerHTML = result
}


// Đếm số chẵn lẻ
/**
 * Khối 1:num1 , num2, num3
 * Khối 2:
 * -Khai báo biến từ input
 * -Lần lượt dùng if else để tìm số chẵn lẻ
 * +Nếu % 2 == 0 thì = 1
 * +Ngược lại = 0
 * -Đếm số bao nhiêu số chẵn bao nhiêu số lẻ
 * + sole = 3-(num1+num2+num3)
 * + sochan = num1+num2+num3
 * Khối 3:Xuất bao nhiêu số chẳn bao nhiêu số lẻ trên UI
 */

document.getElementById("btndem").onclick = function () {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var num3 = parseInt(document.getElementById("num3").value);

    if (num1 % 2 == 0) {
        num1 = 1
    } else
        num1 = 0

    if (num2 % 2 == 0) {
        num2 = 1
    } else
        num2 = 0

    if (num3 % 2 == 0) {
        num3 = 1
    } else
        num3 = 0

    var sole = 3 - (num1 + num2 + num3)
    var sochan = num1 + num2 + num3

   document.getElementById("txtdem").innerHTML = "Có "+sole+ " số lẻ " + sochan + " số chẵn"
}

// Đoán hình tam giác
/**
 * Khối 1: n1, n2, n3
 * Khối 2:
 * -Khai báo biến từ input
 * -Nếu 3 cạnh bằng nhau => tam giác đều
 * -Nếu 2 cạnh bằng nhau => tam giác cân
 * -Nếu  c^2 = a^2 + b^2 => tam giác vuông
 * -Ngươc lại :Một loại tam giác nào đó
 * Khôi 3: dự đoán tam giác trên UI
 */

document.getElementById("btnShape").onclick = function(){
    var x =Number(document.getElementById("n1").value);
    var y =Number(document.getElementById("n2").value);
    var z =Number(document.getElementById("n3").value);

    if (x == y && x ==z && y == z){
        ketqua = "Đây là tam giác đêu"
    }else if(x == y || x == z || y == z){
        ketqua = "Đây là tam giác cân"
    }else if ((x * x == y * y + z * z) || (y * y == x * x + z * z) || (z * z == y * y + x * x)){
        ketqua = "Đây là tam giác vuông"
    }else
        ketqua ="Một loại tam giác nào đó"

  document.getElementById("txtShape").innerHTML = ketqua
}







