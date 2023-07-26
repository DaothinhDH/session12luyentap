// Nhập vào 1 dãy số nguyên bất kì và hiển thị ra màn hình console
// khi nhập 1 số tâm thì dừng lại
// tạo 1 biến trước để lưu trữ giá trị người dùng nhập vào

// cách1: while
// let n = 0;
// while(n>=0){
//     // nhập vaò 1 số
//     n = +prompt("Nhập vào 1 số nguyên")
//     console.log("Bạn vừa nhập vào 1 số:"+n);
// }

// cách2: do while
let n;
do {
    n = +prompt("Nhập vào 1 số nguyên")
    console.log("số bạn vừa nhập là:");
} while (n >= 0)