// - **Object**
//   - Có thể hiểu object giống như một cái tủ có dán nhãn:
//     - Khi muốn lấy một "ngăn kéo", ta lấy theo **tên ngăn kéo**.

//   - **Quy tắc vàng:**
//     - Dùng **array** khi bạn có một danh sách gồm nhiều thứ giống nhau, ví dụ: danh sách user, giá, sản phẩm.
//     - Dùng **object** khi cần mô tả chi tiết **một thứ duy nhất**, ví dụ: một user, một sản phẩm, hoặc một cấu hình test.

//   - **Cú pháp:**
//     - Dùng dấu ngoặc nhọn `{}`.
//     - Bên trong là các cặp **key - value** và ngăn cách nhau bằng dấu phẩy.

//   - **Key và value:**
//     - **Key**: tên thuộc tính, giống như nhãn dán trên ngăn kéo.
//     - **Value**: dữ liệu nằm trong ngăn kéo, có thể là `string`, `number`, `boolean`, `array`, hoặc `function`.

//   - **Ví dụ:**

//     ```js
//     let userTest = {
//       hoTen: "Neko Nguyen",
//       tuoi: 30,
//       isVip: true,
//       quyenHan: ["read", "write"],
//     };
//     ```

//   - **Quy tắc đặt tên key:**
//     - Nếu key là tên hợp lệ theo quy tắc đặt tên biến, thường **không cần dấu nháy**.
//     - Nếu key chứa **dấu cách** hoặc **dấu gạch ngang `-`**, phải bọc trong dấu nháy kép.

//   - **Cách truy xuất dữ liệu:**
//     - **A. Dùng dấu chấm `.`** - cách dùng phổ biến nhất
//       - Cú pháp:
//         ```js
//         tenObject.key;
//         ```
//       - Dùng khi key là tên hợp lệ.

//     - **B. Dùng dấu ngoặc vuông `[]`**
//       - Cú pháp:
//         ```js
//         tenObject["tenKey"];
//         ```
//       - Dùng khi key có dấu cách, dấu gạch ngang, hoặc cần truy cập động.

//   - **Thêm, sửa, xóa (CRUD) dữ liệu trong object**
//     - Có thể thêm, cập nhật, hoặc xóa thuộc tính bằng dấu chấm hoặc dấu ngoặc vuông.

//   - **Các phương thức thường dùng của object:**
//     - **A. `Object.keys()`** - Lấy tất cả key thành một mảng
//     - **B. `Object.values()`** - Lấy tất cả value thành một mảng
//     - **C. `Object.entries()`** - Lấy cả key và value thành từng cặp
//     - **D. `Object.hasOwn()`** - Kiểm tra key có phải là thuộc tính của chính object đó hay không

//   - **Cú pháp `Object.hasOwn()`:**
//     ```js
//     Object.hasOwn(tenObject, "tenKey");
//     ```

// ## Array of Object

// - Cấu trúc này được bao bên ngoài bằng ngoặc vuông `[]`.
// - Bên trong mảng chứa các object, mỗi object được bao bằng ngoặc nhọn `{}`.


let userTest = {
  hoTen: "Neko Nguyen",
  tuoi: 30,
  isVip: true,
  quyenHan: ["read", "write"],
};

console.log(userTest);
console.log(userTest.hoTen);

let apiData = {
  "firt-name": "neko",
  "content-type": "text/html",
  "so dien thoai": "01234567",
};
console.log(apiData["firt-name"]);

//Trường hợp rất hay dùng trong AT: Khi key đc lưu trong 1 biến khac
// (dynamic key)

let userTest2 = {
  hoTen: "Neko Nguyen",
  email: "neko@gmail.com",
};

let thongTinCanLay = "email";

console.log(userTest2.thongTinCanLay);

console.log(userTest2[thongTinCanLay]);

let config = { browser: "Chrome", timeout: 5000 };
//Ko in ra dc
console.log(`Ban đầu ${config}`);

console.log("Ban đầu", config);

config.timeout = 10000;
console.log("Sau khi sửa timeout", config);

//thêm dữ liệu (gọi tên key chưa tồn tại + giá trị)
config.isHeadless = true;
console.log("Sau khi thêm isHeadless", config);

//Xóa dữ liệu (dùng từ khóa delete)
delete config.browser;

console.log("Sau khi xóa browser", config);

const user3 = { ten: "neko" };
//vẫn thêm sửa xóa đc ruột bên trong, const chỉ cấm bạn gán lại cả object bằng dấu bằng

user3.ten = "meo";
console.log(user3);

// user3 = { ten: "meo" };
// console.log(user3);

let spTiki = { id: "SP01", ten: "Bàn phím", gia: 50000 };

let danhSachKey = Object.keys(spTiki);
console.log(danhSachKey);

console.log(danhSachKey.includes("gia"));

let danhSachValue = Object.values(spTiki);
console.log(danhSachValue);
console.log(danhSachValue.includes("Bàn phím"));

let danhSachCap = Object.entries(spTiki);
console.log(danhSachCap);
// [ [ 'id', 'SP01' ], [ 'ten', 'Bàn phím' ], [ 'gia', 50000 ] ]
console.log(danhSachCap[0]);
// [ 'id', 'SP01' ]
console.log(danhSachCap[0][1]);
// 'SP01'
console.log(Object.hasOwn(spTiki, "id2"));

//Bài tập

let apiResponse = {
  userId: 9999,
  userName: "neko_auto",
  role: "admin",
  isActive: "yes",
};

//Dùng Objet.keys để đếm xem API trả về bao nhiêu trường
//Dùng Objet.hasOwn() để kiểm tra 3 trường require "userId", "email", "role"
// kiểm tra xem giá trị isActive có đúng kiểu boolean không (dùng typeof ) Nếu sai kiểu, in ra cảnh báo
// Dùng Object.values + includes đeer kieerm tra xem co gai tri nao la "admin"
console.log(Object.keys(apiResponse).length);

console.log(`Có userId, ${Object.hasOwn(apiResponse, "userId")}`);
console.log(`Có email, ${Object.hasOwn(apiResponse, "email")}`);
console.log(`Có role, ${Object.hasOwn(apiResponse, "role")}`);


if (typeof apiResponse.isActive != "boolean") {
    console.log("isActive không đúng kiểu boolean");
} 

let hasAdmin = Object.values(apiResponse).includes("admin");
console.log(`Co1 chưa admin hay không ${hasAdmin}`);
