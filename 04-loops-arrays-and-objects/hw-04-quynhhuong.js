//Bài tập nhỏ:
// Có 1 hệ thống đăng nhập. -> rule Là; hệ thốgn cho phép nhập sai MK tối đa 3 lần. nếu nhập đúng trước khi hết lượt
// -> hiển thị ĐĂng nhập thành công. Nếu sai -> khóa tài khoản

let matKhauDung = "1234";
let maxLanThu = 3;

//Yêu cầu:
//1 dùng while để mô phỏng quá trìngh nhập mậ khẩu (tối đa 3 lần)
//2. ở mỗi lần thử. giả lập người dùng nhập mật khẩu bàng cách, gán cứng giá trị cho biến matKhauNhap = "0000", matKhauNhap = "9999" (dùng if else if)
//Nếu nhập đúng in ra "Đăng nhập thành công"
//Nếu nhập sai in ra sai mật khẩu
// cheeck sau khi thoát vòng lặp. kiểm tra nếu đã dùng hết 3 lần mà vẫn sai -> in ra Tài khoản bị khóa
let lanThu = 0
let loginThanhCong = false

while (lanThu < maxLanThu && !loginThanhCong) {
    lanThu++
    if (lanThu === 1) {
        matKhauNhap = "0000"
    } else if (lanThu === 2) {
        matKhauNhap = "1111"
    } else if (lanThu === 3) {
        matKhauNhap = "1234"
    }
    loginThanhCong = (matKhauNhap === matKhauDung)
    console.log(loginThanhCong === true ? "Đăng Nhập Thành Công" : "Sai Mật Khẩu");
    
} if (lanThu === maxLanThu && matKhauNhap !== matKhauDung) {
    console.log("Nhập sai mật khẩu quá 3 lần. Tài khoản bị khóa");
}

// Bài 1
// Tình huống: Bạn viết script test tự động kiểm tra API /users/1. Server trả về response, bạn cần kiểm tra toàn bộ dữ liệu: tìm field rỗng, kiểm tra kiểu dữ liệu sai.

// Dữ liệu đầu vào:

let apiResponse = {
    userId: 101,
    username: "neko_tester",
    email: null,
    isActive: "true",  // Bug: phải là boolean, không phải string
    phone: "",
    role: "admin"
};

// Yêu cầu:

// Với mỗi key, kiểm tra:
// Giá trị có phải null hoặc "" (chuỗi rỗng) không? → In cảnh báo trường rỗng.
// Nếu key là "isActive", kiểm tra typeof có phải "boolean" không? → In cảnh báo sai kiểu.
// Đếm tổng số lỗi tìm được.
// Trong bài này, 1 lỗi = 1 lần vi phạm 1 quy tắc kiểm tra."
let errorCount = 0

for (let keys in apiResponse) {
    if (apiResponse[keys] === null || apiResponse[keys] === "") {
        console.log(`Có giá trị không hợp lệ: ${keys}`); 
        errorCount++ 
    }
}
if (typeof apiResponse.isActive !== "boolean") {
    console.log("isActive không đúng kiểu boolean");
    errorCount++
} 
console.log(`Số lỗi tìm được: ${errorCount}`);
 

// Bài 2
// Tình huống: Bạn có danh sách URL cần test. Một số URL bị rỗng (bỏ qua), một số trả về status bình thường, nhưng nếu gặp URL trả về lỗi 500 thì dừng ngay vì server đã sập, test tiếp vô nghĩa.

// Dữ liệu đầu vào:

let testUrls = [
    { url: "/api/users", status: 200 },
    { url: "", status: null },
    { url: "/api/products", status: 200 },
    { url: "/api/orders", status: 500 },
    { url: "/api/reviews", status: 200 }
];
// Yêu cầu:

// Nếu url rỗng ("") → dùng continue bỏ qua, in cảnh báo “URL rỗng”.
// Nếu status === 500 → in lỗi nghiêm trọng, dùng break dừng ngay.
// Nếu bình thường → in kết quả PASS.
// Đếm tổng URL đã test được (không tính URL bị bỏ qua)."

let testedUrls = 0
for (let string of testUrls) {
    if (string.url === "") {
        console.log(`Có url rỗng ${string.url}`);
        continue;   
    }  
    if (string.status === 500) {
        console.log(`Đã tìm thấy lỗi nghiêm trọng, dừng toàn bộ vòng lặp: ${string.url} - Status: ${string.status}`);
        break;
    } 
    console.log(`PASS: ${string.url} - Status: ${string.status}`);
    testedUrls++;
} console.log(`URL đã test được: ${testedUrls}`);


