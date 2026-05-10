let failedTests = 2;
// let suiteStatus = failedTests === 0 ? "PASS" : failedTests <=2 ? "WARNING" : "FAIL";
//Viết lại đoạn code bằng if/else

if (failedTests === 0) {
    suiteStatus = "PASS";  
} else if (failedTests <= 2) {
    suiteStatus = "WARNING";  
} else {
    suiteStatus = "FAIL";
} console.log(suiteStatus)

//so sánh khác nhau: !==
let rawUserName = "     "; // đang ở dạng chuỗi có dấu cách, cần đưa về chuỗi rỗng
// check xem rawUserName có hợp lệ hay không nếu rỗng là không hợp lệ

if (rawUserName.trim()) {
    console.log("Hợp lệ");
} else { 
    console.log("Không hợp lệ");
}