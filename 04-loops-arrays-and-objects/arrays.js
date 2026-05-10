// - **Mảng (Array)**
//   - Bản chất, nếu:

//     ```js
//     let ten = "Hoang";
//     ```

//     thì `ten` chỉ chứa một giá trị.

//   - Có thể hiểu array giống như một cái tủ đựng đồ có nhiều ngăn:
//     - Chỉ có một tên chung (giống tên biến).
//     - Có thể chứa nhiều món đồ bên trong.
//     - Các món đồ được đặt cạnh nhau và có thứ tự.

//   - Cú pháp:
//     - Dùng dấu ngoặc vuông `[]`
//     - Các phần tử đặt bên trong và ngăn cách nhau bằng dấu phẩy

//   - Ví dụ:

//     ```js
//     // Array chứa toàn string
//     let danhSachUser = ["admin", "test_01", "user_vip"];

//     // Array chứa toàn number
//     let danhSachGia = [1000, 2000, 3000];

//     // Array rỗng
//     let danhSachLoi = [];
//     ```

//   - **Lưu ý:** Trong nhiều ngôn ngữ khác, array thường chỉ chứa một kiểu dữ liệu. Nhưng trong JavaScript, array có thể chứa nhiều kiểu dữ liệu khác nhau.

//     ```js
//     let thapCam = ["Neko", 30, true, null];
//     ```

//     - Tuy nhiên, không nên dùng kiểu "thập cẩm" như vậy.
//     - Nên giữ dữ liệu đồng nhất để dễ xử lý.

// - **Cú pháp lấy phần tử trong mảng**
//   - Cú pháp:
//     ```js
//     tenBien[viTri];
//     ```
//   - `index` bắt đầu từ `0`

//   - Ví dụ:

//     ```js
//     let sanPham = ["aoThun", "quanJean"];

//     console.log(sanPham[1]); // "quanJean"
//     console.log(sanPham[10]); // undefined
//     ```

// - **Bộ đồ nghề xử lý mảng**
//   - **A. `length`** - Đếm số lượng phần tử
//     - Cú pháp:
//       ```js
//       tenMang.length;
//       ```
//     - Trả ra `number` là tổng số phần tử trong mảng.
//     - Vì `index` bắt đầu từ `0`, nên phần tử cuối cùng luôn ở vị trí `length - 1`.

//   - **B. `push()`** - Thêm phần tử vào cuối mảng
//     - Cú pháp:
//       ```js
//       tenMang.push(giaTri);
//       ```
//     - Đầu ra: số lượng phần tử mới của mảng sau khi thêm
//     - Tác dụng phụ: mảng gốc bị thay đổi

//   - **C. `includes()`** - Kiểm tra phần tử có tồn tại hay không
//     - Cú pháp:
//       ```js
//       tenMang.includes(giaTri);
//       ```

//   - **D. `pop()`** - Rút phần tử cuối cùng ra ngoài
//     - Đầu ra: phần tử cuối cùng vừa bị rút ra
//     - Tác dụng phụ: mảng gốc bị thay đổi

//   - **E. `shift()`** - Rút phần tử đầu tiên ra ngoài

//   - **F. `unshift()`** - Thêm phần tử vào đầu mảng

//   - **G. `join()`** - Gộp tất cả phần tử thành một chuỗi
//     - Cú pháp:
//       ```js
//       tenMang.join(kiTuNoi);
//       ```

//   - **H. `indexOf()`** - Trả ra `index` nếu tìm thấy, trả `-1` nếu không có
let sanPham = ["AoThun", "AoSoMi", "MuLuoiTrai"];

console.log(sanPham[1]);
console.log(sanPham[2]);
console.log(sanPham[0]);

console.log(sanPham[10]);

let ketQuaTimKiem = ["iphone 13", "iphone 20"];

console.log(ketQuaTimKiem.length);

let danhSachLoi = [];

//chay test ... phat hien ra loi
danhSachLoi.push("Nút đăng nhập ko bấm đc");
danhSachLoi.push("sAi mầu chữ ở footer");

console.log(danhSachLoi);

let cacTrangThaiChoChoPhep = ["PENDING", "APPROVED", "SHIPPED"];

let trangThaiThucTe = "APPROVED";

if (cacTrangThaiChoChoPhep.includes(trangThaiThucTe)) {
  console.log("TEST PASS: TRANG THAI HIEN THI DUNG LOGIC");
} else {
  console.log("TEST FAIL");
}

let lichSuDuyetWeb = ["Trang chủ", "sản phẩm", "Giỏ hàng"];

let trangVuaThoat = lichSuDuyetWeb.pop();

console.log(lichSuDuyetWeb);

console.log(trangVuaThoat);

let hangChoHoTro = ["Khách A", "Khách B", "Khách C"];

let khachHangDuocXuLy = hangChoHoTro.shift();

console.log(hangChoHoTro);
console.log(khachHangDuocXuLy);

let danhSachUuTien = ["Bug Thuong", "Bug Giao dien"];

danhSachUuTien.unshift("BUG SIEU TO KHONG LO");
console.log(danhSachUuTien);

let tags = ["automation", "playwright", "javascript"];

let tagString = tags.join(", ");

console.log(tagString);

let danhSachMenu = ["Home", "About", "Services"];

console.log(danhSachMenu.indexOf("About"));

let gioHang = [
  "Bàn phím cơ",
  "Chuột gamin",
  "Màn hình 27 inch",
  "Tai nghe bluetooth",
];

//1. In ra tổng số sản phẩm
// 2. In ra sản phẩm đầu tiên
//3. In ra tên sản phẩm cuối cùng
//4. thêm 1 cái lót chuột vào cuối giỏ hàng

const tongSanPham = gioHang.length
console.log(tongSanPham);

const sanPhamDauTien = gioHang.shift()
console.log(sanPhamDauTien);

const sanPhamCuoiCung = gioHang.length - 1
console.log(sanPhamCuoiCung);

const themSamPham = gioHang.push("lót chuột")
console.log(gioHang);

// console.log(gioHang[0]);
// console.log(gioHang[gioHang.length-1]);
// gioHang.push("lót chuột");
// console.log(gioHang);

