//Lý thuyết FUNCTION :
//1. Function gồm 3 thành phần cốt lõi : 
//1 input (parameter)
//2 body ( logic xử lí)
//3 output (return )

//Điểm mấu chốt của function : phần giống nhau sẽ đc gom vào 1 nơi, mỗi lần dùng chỉ việc gọi lại. Nó gắn liền vs tư duy DRY : dừng việc lặp cùng 1 đoạn code ở nhiều nơi

//Có 3 loại function ở trong JS
// Cú pháp cơ bản : function declaration - hàm tự định nghĩa
// Syntax :
//function tenHam(đầu vào) {
//body
//đầu ra
//}

//taikhoan va matkhau là tham số
// function dangNhap(taiKhoan, matKhau) {
//     console.log(`Đăng nhập user : ${taiKhoan}`);
//     console.log(`Đăng nhập password: ${matKhau}`);
//     console.log('Click nút Login');
// }

// console.log("TC01");
// dangNhap("adminNeko", "abc")

// console.log("TC02");
// dangNhap("adminNeko2", "abc2")

//từ khóa return - đầu ra
//Return trả về 1 giá trị từ bên trong function ra bên ngoài, có thể là number, strinng, boolean,object, array...
//Nơi gọi hàm sẽ nhận lại giá trị đó, khi gặp return , function sẽ dừng lại ngay ở đó

// function tinhTongTien(a,b) {
//     const result = a+b;
//     console.log(result);
//     return result
// }

// let tienThanhToan = tinhTongTien(100,2)
// console.log(tienThanhToan);

// function laySoMayMan() {
//     return 8
// }

//sau return : các dòng code phía dưới ko chạy nữa
// function demoReturn() {
//     console.log("Bat dau");
//     return "Xong";

//     console.log('dong nay ko duoc chay');
// }
// console.log(demoReturn());


// function cleanPrice(rawString) {
//     if(!rawString) return 0

//     let text = rawString.replaceAll(' Gía: ', "").replaceAll(" VND", "").replaceAll(".","").trim()
//     let result = parseInt(text)
//     return result
// }

// console.log(cleanPrice(" Gía: 1.500.000 VND    "));
// console.log(cleanPrice("      250.000 VND"));
// console.log(cleanPrice());

//2. Hoisting : gọi 1 hàm trc khi hàm được khởi tạo

// xinChao()

// function xinChao() {
//     console.log('Hoisting');
// }

//Ứng dụng : Viết các kịch bản test ở đầu , vứt hết các hàm hỗ trợ (helper, clean data ) xuống bên dưới của file cho đỡ chật chỗ
//Hoisting : ko phải áp dụng cho tất cả các hàm, nó phụ thuộc vào mình viết hàm kiểu nào
//Viết hàm trong javascript : 
//Cổ điển : function declaration (hàm khai báo) : cách viết truyền thống, bắt buộc phải bắt đầu bằng function và có tên hàm 
//Ưu điểm của function declaration : hỗ trợ 100% hoisting , gọi ở đâu cũng đc, tên hàm rõ ràng , code dễ đọc , dễ debug (sẽ hiện tên hàm trong stack trace)
//Nhược điểm : cú pháp dài dòng hơn so vs arrow function, có this riêng ( có thể ảnh hưởng khi dùng callback )


// let loginStatus = checkLoginStatus()
// console.log(loginStatus);

// function checkLoginStatus(){ return true}

//Function expression
//Cú pháp : const tenHam = function () {...thân hàm}
// Ko được hỗ trợ hoisting

// console.log(checkLoginStatus());

// const checkLoginStatus = function() {
//     return true

// }

//Ưu điểm : An toàn hơn nhờ const. Với declaration , mình có thể vô tình khai báo trùng tên hàm đã khai báo trc , hàm trc sẽ bị ghi đè âm thầm mà ko hề báo lỗi

// function tinh(a,b) {
//     return a+b
// }

// function tinh(a,b) {
//     return a*b
// }

// const tinh2 = function (a,b) {return a +b}
// const tinh2 = function(a,b) {return a*b}

//Linh hoạt : vì hàm đc cất trong biến , nên có thể truyền vào hàm khác
// const utils = {
//     lamSach : function(text) {return text.trim().toLowerCase()}
// }

// console.log(utils.lamSach("   HELLO     "));

//Chọn hàm theo điều kiện
// const moiTruong = "staging"
// const layUrl = moiTruong === 'staging' ? function() {
//     return "https://staging.neko.vn"
// } : function() {
//     return "https://neko.vn"
// };

// console.log(layUrl);

//Arrow function : nâng cấp của function expression , rút gọn tối đa cú pháp
//const tenHam = (thamso,...) => {
    //thanHam }
//Dạng rút gọn :
//const tenHam = (thamso1) => console.log('abc)

//ko có chữ function , thêm dấu => ở giữa () và {}

// const tinhTong = (a,b) => {
//     return a+b
// }
// //rút gọn nữa:
// const tinhTongRutGon = (a,b) => a+b

//Ko hỗ trợ hoisting
//Ưu điểm : cú pháp ngắn, hay sử dụng khi viết callback (.map, filter)
// ko có this riêng -> an toàn khi sử dụng với setTimeout, forEach()
//lưu ý khi viết vs object
//khi debug lỗi sẽ ko hiển thị tên trong stack trace

//Cách sử dụng thực tế :
//Viết method bên trong object 

// const sanPham = {
//     ten: "Iphone17",
//     gia: 200000,

//     //c1:function expression 
//     hienThiExpression : function() {
//         console.log(`${this.ten}-${this.gia} VND`);
//     },

//     //c2 : method shorthand
//     hienThiShortHand() {
//         console.log(`${this.ten}-${this.gia} VND`);
//     },

//     //c3: KHÔNG SỬ DỤNG ARROW FUNCTION KHI VIẾT METHOD TRONG OBJ
//     hienThiArrow: () => {
//         console.log(`${this.ten}-${this.gia}`);
//     }
// }

// sanPham.hienThiExpression()
// sanPham.hienThiShortHand()
// sanPham.hienThiArrow()

//Method trog object hay sử dụng trong các trường:
//ví dụ 1 object có cả data lẫn hành vi

// const cart = {
//     item: 3,

//     getSummary() {
//         return `Có ${this.item} sản phẩm`
//     }
// }

// console.log(cart.getSummary());

//B . Truyền hàm làm callback : truyền 1 hàm vào chỗ khác để nó dc gọi sau
//arrow function là lựa chọn ưu tiên hàng đầu
// const giaSanPham = [15000, 20000, 40000]

// //declaration
// function locGiaCao(gia) {
//     return gia > 20000
// }
// const ketQua1 = giaSanPham.filter(locGiaCao)

// // expression
// const ketQua2 = giaSanPham.filter( function (gia) { 
//     return gia > 2000
// })

// //arrow function
// const ketQua3 = giaSanPham.filter((gia) => gia > 20000)

//Arrow function hoàn toàn thay thế function expression ở rất nhiều code base
//Cả 2 đều dùng const , ko có hoisting , nhưng arrow thì ngắn hơn gấp bội
//Kết luận : chỉ nhớ 2 loại declaration và arrow function


//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Kỹ thuật xử lý tham số nâng cao:
//Cách viết hàm cơ bản :-> nâng cao hơn 1 chút

//Function overloading - 1 hàm có nhiều cách gọi
//1 số ngôn ngữ như java,c# : bạn có thể tạo nhiều hàm cùng tên nhưng khác nhau về số lượng và kiểu tham số
//JAVASCRIPT ko hỗ trợ overloading kiểu đó

//Nếu khai báo 2 hàm cùng tên, hàm khai báo sau sẽ ghi đè lên hàm trc ( kể cả có khác nhau về tham số)

// function guiThongBao(message) {
//     console.log(`${message}`);
// }

// function guiThongBao(message, userID){
//     console.log(`${message}, ${userID}`);
// }

// guiThongBao("deploy xong")
// guiThongBao("deploy xong", 100)

//-> Cách giải quyết : nó dùng 1 hàm duy nhất rồi tự kiểm tra dữ liệu đầu vào để xử lý theo từng trường hợp
// function guiThongBao(message, target) {
//     if( typeof target === 'undefined') {
//         console.log(`${message}`);
//         return;
//     }

//     if(typeof target === 'number') {
//         console.log(`${message}, ${target}`);
//         return;
//     }

//     console.log(`Target ko hợp lệ`);
// }

// guiThongBao("deploy xong")
// guiThongBao("deploy xong", 101)

//
// function timSo(arr) {
//     for(let i=0;i<arr.length;i++) {
//         if(arr[i] === 5) {break;}
//         console.log(arr[i]);
//     }
//     console.log("Đã xong");
    
// }

// timSo([1,4,5,2,1,0])

//Default parameters (giá trị mặc định)
//Khi người gọi ko truyền đủ tham số , JS tự động chuyển giá trị mặc định

// function dangNhap(user, pass, moiTruong = "staging") {
//     console.log(`${moiTruong} Đăng nhập : ${user} - ${pass}`);
// }

// dangNhap("admin", "123456")
// dangNhap("admin", "1234567", "dev")
//Lưu ý : chỉ hoạt động tốt khi tham số mặc định nằm cuối, nếu tham số giữa bị thiếu , bạn bắt buộc truyền undefined hoặc null làm giữ chỗ

// function taoTestUser(ten, tuoi=25, email, vaiTro='Tester') {
//     console.log(`${ten}, ${tuoi}, ${email}, ${vaiTro}`);
// }

// taoTestUser("neko", "neko@vn.com")
// //neu muon bo qua tham so giua
// taoTestUser("neko2", undefined, "neko2@vn.com")

//Quy tắc : Luôn đặt tham số default ở cuối , nếu có nhiều hơn 3 tham số thì mình sẽ dùng option object

//REST PARAMETERS (...args) : nhận bao nhiêu tham số cũng được
//Dấu ... gom tất cả tham số vào 1 mảng

// function tongTien(...danhSachGia) {
//     //danhsachgia là 1 mảng
//     let tong = 0;
//     for(const gia of danhSachGia) {
//         tong+=gia
//     }
//     return tong
// }

// console.log(tongTien(100000));
// console.log(tongTien(1000, 2000, 4000, 5000));

//Option obj : Nếu 1 hàm có nhiều hơn 3 tham số , thay vì truyền các tham số lẻ tẻ dễ nhầm thứ tự-> gói tất cả vào 1 object
// Đây là pattern nâng cao hay sử dụng

//c1
// function taoUser(options) {
//     //bóc tách (destructuring) object ra từng biến riêng biệt
//     const {ten, tuoi = 25, email, vaiTro = 'tester'} = options
//     console.log(`${ten}, ${tuoi}, ${email}, ${vaiTro}`);
// }

//taoUser({ ten:'neko', email: 'neko@vn.com'})

//c2
// function taoUser2({ten, tuoi = 25, email, vaiTro = 'tester'}) {
//     console.log(`${ten}, ${tuoi}, ${email}, ${vaiTro}`);
// }

// taoUser2({ten: 'Neko2', email: 'neko2@gmail.com'})


// Destructuring và Spread operator
//1. Destructuring ( phân rã) : cú pháp cho phép bóc tách giá trị từ array hoặc object thành các biến riêng lẻ chỉ trong 1 dòng code
// const danhSach = ["admin", "123456", "staging"]
// const [user, pass, env] = danhSach
// console.log(user);
// console.log(pass);
// console.log(env);


//Bỏ qua phần tử ko cần
// const [firstName, , city] = ["neko", 25, "hanoi"]

// console.log(firstName);
// console.log(city);

// const [a,b,c = "n/a"] = ["hello", "world"]
// console.log(c);

//Object destructuring
//Bóc tách thuộc tính qua tên object

// const response = {status : 200, body: "ok", headers: {}}

// // const { status , body}= response
// // console.log(status);
// // console.log(body);

// //bóc tách + đổi tên biến :
// const {status : statusCode, body: noiDung} = response
// console.log(statusCode);
// console.log(noiDung);

//giá trị mặc định + đổi tên
// const {ten, tuoi = 18, vaiTro: role="viewer"} = {ten: "neko"};
// console.log(ten);
// console.log(tuoi);
// console.log(role);


//destruc trong tham so ham
// function hienThiUser({ten, email, tuoi=19}) {
//     console.log(`${ten}, ${email}, ${tuoi}`);
// }

// hienThiUser({ten: "Neko", email: "a"})

//destruct lồng (nested)

// const apiResponse = {
//     data: {
//         user: {name: "neko", email : "neko@123"},
//         token: "123"
//     },
//     status: 200
// }

// const {data: {user : {name, email}, token}, status} = apiResponse
// console.log(name);
// console.log(token);


//Khi chạy AT nhận được 1 ds KQ như sau :

// const testRuns = [
//     [ " login smoke ", {browser: "   chromium    ", env: "   staging   "}, "  PASS  "],
//     [ " checkout payment ", {browser: "   firefox    ", env: "   prod   "}, "  FAIL  "],
//     [ "  search product  ", {browser: "   webkit    ", env: "   staging   "}, "  PASS  "],
//     [ " ", {browser: "   chromium    ", env: "   dev   "}, "  PASS  "],
// ]
// Bài toán
// // Viết hàm taoBaoCaoTest(testRuns) để tạo báo cáo từ danh sách kết quả test.
// // Yêu cầu
// // - Dùng destructuring để bóc tách từng phần tử trong mảng.
// // - Gợi ý:
// //   const [rawTestName, { browser, env }, rawStatus] = item
// // - Tương ứng:
// //   + rawTestName: tên test thô
// //   + { browser, env }: thông tin môi trường chạy
// //   + rawStatus: trạng thái test thô
// // Rule xử lý
// // - Nếu testName rỗng thì tăng invalid và bỏ qua dòng đó.
// // - Nếu status không phải PASS hoặc FAIL thì tăng invalid và bỏ qua.
// // - Nếu dữ liệu hợp lệ:
// //   + Tạo chuỗi theo định dạng: testName - browser - env
// //   + Ví dụ: login smoke - chromium - staging
// //   + Nếu PASS thì đưa vào mảng passed.
// //   + Nếu FAIL thì đưa vào mảng failed.
// // Kết quả mong đợi
// // Hàm cần trả về dữ liệu theo dạng:
// // {
// //   totalValid: 3,
// //   invalid: 1,
// //   passed: [
// //     "login smoke - chromium - staging"
// //   ],
// //   failed: [
// //     "checkout payment - firefox - prod"
// //   ]
// // }


// const testRuns = [
//     [ " login smoke ", {browser: "   chromium    ", env: "   staging   "}, "  PASS  "],
//     [ " checkout payment ", {browser: "   firefox    ", env: "   prod   "}, "  FAIL  "],
//     [ "  search product  ", {browser: "   webkit    ", env: "   staging   "}, "  PASS  "],
//     [ " ", {browser: "   chromium    ", env: "   dev   "}, "  PASS  "],
// ]
// function taoBaoCaoTest(testRuns) {
//     const passed = [];
//     const failed = [];
//     let invalid = 0

//     for(const item of testRuns) {
//         const [rawTestName, { browser, env }, rawStatus] = item
//         const testName = rawTestName.trim();
//         const browserName = browser.trim();
//         const envName = env.trim();
//         const status = rawStatus.trim().toUpperCase()
        
//         if(!testName) {
//             invalid++;
//             continue;
//         }

//         if(status !== "PASS" && status !== "FAIL") {
//             invalid++;
//             continue;
//         }

//         const reportItem = `${testName} - ${browserName} - ${envName}`
//         if(status === "PASS") {
//             passed.push(reportItem)
//         } else {
//             failed.push(reportItem)
//         }
//     }

//     return {
//         totalValid: passed.length + failed.length,
//         invalid : invalid,
//         passed : passed,
//         failed: failed
//     };
// }

// console.log(taoBaoCaoTest(testRuns));


// const status3 = "DONE";
// if(!status3) {
//     console.log("invalid");
// } else if (status3 === "PASS") {
//     console.log("passed");
// } else {
//     console.log("failed");
// }
