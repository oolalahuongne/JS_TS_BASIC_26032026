// ## Vòng lặp `while`

// - Dịch sang tiếng Việt là: **"trong khi..."**
// - Logic:
//   - Trong khi **bụng còn đói** thì **đi lấy thêm thức ăn**.

// ### Cú pháp

// Vòng lặp `while` có 3 yếu tố cốt lõi:

// ```js
// // Biến khởi tạo: khai báo trước khi vào vòng lặp
// let bienDem = giaTriBanDau;

// while (dieuKienLap) {
//   // Khối lệnh thực thi
//   thucHienHanhDong();

//   // Bước nhảy: cập nhật biến đếm
//   capNhatBienDem();
// }
// ```

// - **Yếu tố 1: Biến khởi tạo**
//   - Đây là **vạch xuất phát** của vòng lặp.
//   - Ví dụ: `let soLanClick = 1;`
//   - Nghĩa là bắt đầu click từ lần đầu tiên.

// - **Yếu tố 2: Điều kiện lặp**
//   - Nằm trong **dấu ngoặc tròn `()`**.
//   - Đây là phần **kiểm tra điều kiện**:
//     - Nếu **truthy** thì code bên trong vòng lặp được chạy.
//     - Nếu **falsy** thì vòng lặp kết thúc.
//   - Ví dụ: `soLanClick <= 3`

// - **Yếu tố 3: Bước nhảy**
//   - Đây là **cửa thoát hiểm** của vòng lặp.
//   - Bắt buộc phải nằm bên trong **dấu ngoặc nhọn `{}`**.
//   - Nhiệm vụ là **thay đổi biến khởi tạo** để đến một thời điểm nào đó điều kiện lặp trở thành `false`, từ đó vòng lặp dừng lại.
//   - Ví dụ: soLanClick++

// - **Quy tắc vàng:** Dùng `while` khi bạn **không biết trước số lần lặp**, mà chỉ biết **điều kiện để dừng**.

//   ````js
//   while (chưaBuồnNgủ) {
//     lướtVideoTiếp();
//   }
//   ```- **Lưu ý:** Vòng lặp vô tận, không nên chạy đoạn này.
//   ````

// ```js
// // let bungDoi = true;

// // while (bungDoi === true) {
// //   console.log("Đang ăn thịt nướng");
// //   // Hậu quả: ăn mãi không ngừng -> nổ bụng -> treo máy
// //   // Đây là infinite loop (vòng lặp vô tận)
// //   // bungDoi = false
// // }
// ```

//Yếu tố 1:
let soLanClick = 1;

//Yếu tố 2:
while (soLanClick <= 3) {
  //Thực hiện hành động
  console.log(`Đang click lần thứ ${soLanClick}`);

  //Yếu tố 3
  soLanClick++;
}

console.log("Đã click xong 3 lần. thoát vòng lặp");

//LƯU Ý: VÒNG LẶP VÔ TẠN
// let bungDoi = true;

// while (bungDoi === true) {
//   console.log("Đang ăn thịt nướng");
//   //Hậu quả: ăn mãi ko ngừng -> nổ bụng -> treo máy -> infinite loop vòng lặp
//   // vô tận
//   // bungdoi =false
// }

let miengThit = 5;

while (miengThit > 0) {
  console.log(`Đang ăn... Còn lại. ${miengThit} miếng`);

  miengThit--;
}
console.log("Đã ăn hết, no bụng");

// Trong AT sẽ có cơ chế retry - thử lại tối đa N lần
//Viết code tìm nút thanh toán, cứ 1sec tìm 1 lần, tìm tối đa 5 lầm. nếu thấy thì dừng. nếu quá 5 lần thì báo lỗi

let maxRetry = 5; //so lan thu toi da
let currentRetry = 1; //Lan thu hien tai
let isFound = false; //Trang thai tim thay nut

while (isFound === false && currentRetry <= maxRetry) {
  console.log(`Đang tìm nút thanh toán trên màn hình ...`);

  //Giả lập tìm kiếm (là cho tỉ lệ tìm kiếm  < 0.8)
  let toolGiaLap = Math.random();
  let searchResult = toolGiaLap > 0.3;

  console.log(`Search result : ${toolGiaLap}`);

  if (searchResult === true) {
    isFound = true; //Tìm thấy rồi. Đổi trạng thái để thoát vòng lặp
    console.log("NGON! Đã tìm thấy nút thanh toán. Bấm click ngay");
  } else {
    console.log("Khong thấy, chuẩn bị thử lại");
    currentRetry++; //Tăng số lần thử lên 1 (bước nhảy)
  }
}

//xử lý kết quả

if (isFound === false) {
  console.log(`TEST FAIL, Đã thử 5 lần nhưgn mạng lag quá, ko thấy nút đâu`);
}

//Bài tập nhỏ:
// Có 1 hệ thống đăng nhập. -> rule Là; hệ thốgn cho phép nhập sai MK tối đa 3 lần. nếu nhập đsung trước khi hết lượt
// -> hiển thị ĐĂng nhập thành công. Nếu sai -> khóa tài khoản

//Yêu cầu:
//1 dùng while để mô phỏng quá trìngh nhập mậ khẩu (tối đa 3 lần)
//2. ở mỗi lần thử. giả lập người dùng nhập mật khẩu bàng cách, gán cứng giá trị cho biến matKhauNhap = "0000", matKhauNhap = "9999" (dùng if else if)
//Nếu nhập đúng in ra "Đăng nhập thành công"
//Nếu nhập sai in ra sai mật khẩu
// cheeck sau khi thoát vòng lặp. kiểm tra nếu đã dùng hết 3 lần mà vẫn sai -> in ra Tài khoản bị khóa

// if (lanthu === 1){
//     matKhauNhap = "000"
// }else if (lanThu === 2){
//     mkn = '000'
// }else ì(lanthu ===3){
//     matkhaunhap === "1234"
// }
//phác sơ đồ tư duy cnuxg được nếu mà code chưa quen tay
// infinite scroll


//CHAT GPT VERSION
let matKhauDung = "1234";
let maxLanThu = 3;

let lanThu = 0;
let loginThanhCong = false;

while (lanThu < maxLanThu && !loginThanhCong) {
    lanThu++;

    let matKhauNhap = "";

    if (lanThu === 1) {
        matKhauNhap = "0000";
    } else if (lanThu === 2) {
        matKhauNhap = "1111";
    } else if (lanThu === 3) {
        matKhauNhap = "1234";
    }

    loginThanhCong = (matKhauNhap === matKhauDung);

    if (loginThanhCong) {
        console.log(`Lần ${lanThu}: Đăng nhập thành công`);
    } else {
        console.log(`Lần ${lanThu}: Sai mật khẩu`);
    }
}

// Check sau khi thoát loop
if (!loginThanhCong) {
    console.log("Tài khoản bị khóa");
}
