// Nhập vào các số nguyên đến khi nhập số 0 thì dừng lại
// hiển thị tổng của các số (chẵn) vừa nhập
let n = 1;
let sum = 0;
while (n != 0) {
    // nhập 1 số
    n = +prompt("nhập 1 số nguyên");
    // if (n % 2 !== 0){
    sum += n;
    // }           
}
// dừng vòng lăp hiển thị kết quả
alert("Tổng các số vùa nhập là" + sum);