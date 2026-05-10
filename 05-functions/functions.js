//taiKhoan va matKhau là tham số (cái phễu chờ sẵn)
function dangNhap(taiKhoan, matKhau) {
  console.log(`Đăng nhập user: ${taiKhoan}`);
  console.log(`Đăng nhập password: ${matKhau}`);
  console.log("Click nút login");
}

console.log("TC01");

//Khởi động hàm và nhét nguyên liệu thật (đối số) vào:
dangNhap("adminNeko", "abc");
console.log("TC02");
dangNhap("adminNeko2", "abc2");

function tinhTongTien(a, b) {
  const result = a + b;
  console.log(result);
  return result;
}

let tienThanhToan = tinhTongTien(100, 2);
console.log(tienThanhToan);

//trong function
// return result -> trả giá tri jra bên ngoài -> tienthanhToan=

function laySoMayMan() {
  return 8;
}

let ketQua = laySoMayMan();

function layTenHienThi() {
  return "neko";
}

let tenHienThiUi = layTenHienThi();

function laAdult(tuoi) {
  return tuoi >= 18;
}

console.log(laAdult(20));

console.log(laAdult(6));
function demoReturn() {
  console.log("Bat dau");
  return "Xong";
  console.log("Dong nay se khong chay");
}
console.log(demoReturn());

//ví dụ
//Yêu cầu viết 1 hàm tên là cleanPrice(rawString). Hàm này nhận vào là 1 chuỗi giá tiền lấy từ UI
// *ví dụ " Giá: 25.000.000 VND  ". Hàm phảiu tự động dọn dẹp và return về 1 số number nguyên
// (ví dụ 25000000)
//nếu đầu vào là falsy thì trả về 0 luôn cho an toàn

// test case
// sp1 = "  Giá: 1.500.000 VND  ";
// sp2 = "   250.000 VND";
// sp3 = "";
// //output
// 15000000
// 250000
// 0

function cleanPrice(rawString) {
    if (!rawString) {
        return 0
    }
    const cleanNumber = rawString.replace("Giá:", "").replace("VND", "").replaceAll(".", "").trim();
    return Number(cleanNumber);
}
let sp1 = "  Giá: 1.500.000 VND  ";
let sp2 = "   250.000 VND";
let sp3 = "";
console.log(cleanPrice(sp1));
console.log(cleanPrice(sp2));
console.log(cleanPrice(sp3));

//Hoisting

xinChao();

//tạo hàm sau
function xinChao() {
  console.log("Hoisting");
}

// //hoisting function declaration
// let loginStatus = checkLoginStatus();
// console.log(loginStatus);

// function checkLoginStatus() {
//   return true;
// }

const checkLoginStatus = function () {
  return true;
};

const loginStatus = checkLoginStatus();

console.log(loginStatus);

function tinh(a, b) {
  return a + b;
}

function tinh(a, b) {
  return a * b;
}
console.log(tinh(2, 3));

// const tinh2 = function (a, b) {
//   return a + b;
// };

// const tinh2 = function (a, b) {
//   return a * b;
// };

const utils = {
  lamSach: function (text) {
    return text.trim().toLowerCase();
  },
};

console.log(utils.lamSach("  HELLLO  "));

const moiTruong = "staging";

const layUrl =
  moiTruong === "staging"
    ? function () {
        return "https://staging.neko.vn";
      }
    : function () {
        return "https://neko.vn";
      };

console.log(layUrl());

///
//viết theo kiểu function expression (cũ)

const tinhTongExpression = function (a, b) {
  return a + b;
};

//chuyển sang arrow

const tinhTongArrow = (a, b) => {
  return a + b;
};

//rút gọn nữa

const tinhTongSieuNgan = (a, b) => a + b;

// cách sử dụng thực tế
//câu hỏi là lúc nào dùng loại nào ?????
// viết method bên trong object

const sanPham = {
  ten: "iphone 17",
  gia: 2000000,

  //cách 1: function expression kiểu cổ điển

  hienThiExpression: function () {
    console.log(`${this.ten} - ${this.gia} VND`);
  },

  //cách 2: để viết 1 hàm. method shorthand -> NÊN DÙNG

  hienThiShorthand() {
    console.log(`${this.ten} - ${this.gia} VND`);
  },

  //cách 3. ko SỬ DỤNG ARROW KHI VIẾT METHOD TRONG OBJECT
  hienThiArrow: () => {
    console.log(`${this.ten} - ${this.gia}`);
  },
};
sanPham.hienThiExpression();
sanPham.hienThiShorthand();
sanPham.hienThiArrow();

//Method ở trong object hay sử dụng trong các trường
// ví dụ 1 object có cả data lẫn hành vi. ví dụ 1 object tên cart có dữ liệu item và method getSummary() để mô tả chính nó
const phoneCart = {
  item: 3,
  getSummary() {
    return `có ${this.item} sản phẩm`;
  },
};

const pcCart = {
  item: 3,
  getSummary() {
    return `có ${this.item} sản phẩm`;
  },
};

//object config: ví dụ object có cấu hình, timeout, baseurrl -> có 1 method buildUrl () để ghép link hoàn chỉnh
//object formatter có các method formatPrice, formatDate() -> objet tiện ích

//ví dụ : 1 object cụ thể, viết nhanh dùng ngay -> method bên trong object là hợp lý (THƯỜNG THỈ TỈ LỆ SỬ DỤNG TRONG AT LÀ ÍT)
// nhưng nếu nhiều object cùng form như cart1, cart2 , cart3 -> cùng CLASS dễ tổ chức hơn

//B. Truyền hàm làm call back.  -> callback là truyền 1 hàm vào chỗ khác để nó đc gọi sau
// -> arrow function là lựa chọn ưu tiên hàng đầu

const giaSanPham = [15000, 20000, 40000];

//declaration
function locGiaCao(gia) {
  return gia > 20000;
}

const ketQua1 = giaSanPham.filter(locGiaCao);

//expression

const ketQua2 = giaSanPham.filter(function (gia) {
  return gia > 20000;
});

//arrrow
const ketQua3 = giaSanPham.filter((gia) => gia > 20000);

//Sự thật: là arrow funcion hoàn toàn thay thế function expression ở rất nhiều code base
//cả 2 đều dùng const. và ko có hoisting . nhưgn arrow thì ngắn hơn gấp bội
//function expression chỉ xuất hiện ở 1 số trường hợp
/// code cũ khi arrow chưa ra đời thì người ta dùng nhiều
/// -> KẾT LUẬN> code mới chỉ nhớ 2 loại: declaration và arrow

//nếu khai 2 hàm cùng tên, hàm khai báo sau sẽ ghi đè hàm trước
// function guiThongBao(message) {
//   console.log(`${message}`);
// }

// function guiThongBao(messsage, userId) {
//   console.log(`${messsage}, ${userId}`);
// }

// guiThongBao("deploy xong");

// guiThongBao("deploy xong", 101);

function guiThongBao(message, target) {
  if (typeof target === "undefined") {
    console.log(`${message}`);
    return;
  }
  if (typeof target === "number") {
    console.log(`${message}, ${target}`);
    return;
  }

  console.log(`target ko hợp lệ`);
}

guiThongBao("deployxong");

guiThongBao("deploy xong", 101);

guiThongBao("deploy xong", "101");

//đây là phong cách viết 1 hầm nhiueef cách gọi
//return ở đây gióng như
// "xử lý xong trường hợp này rồi -> thoát hàm luôn"

// ddefault để cuối 
function timSo(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 5) {
      break;
    }
    console.log(arr[i]);
  }
  console.log("Đã xong");
}

//break ở dây chỉ dừng for, ko kết thúc function ngay

function timSo2(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 5) {
      return;
    }
    console.log(arr[i]);
  }
  console.log("Đã xong");
}
// gặp 5 là kết thúc luôn cả hàm

timSo([1, 2, 3, 4, 5, 6, 7]);
timSo2([1, 2, 3, 4, 5, 6, 7]);

function dangNhap(user, pass, moiTruong = "staging") {
  console.log(`${moiTruong} Đăng nhập: ${user} - ${pass}`);
}

dangNhap("admin", "123456");

dangNhap("admin", "1234567", "dev");

function taoTestUser(ten, tuoi = 25, email, vaiTro = "tester") {
  console.log(`${ten}, ${tuoi}, ${email}, ${vaiTro}`);
}

taoTestUser("neko", "neko@vn.com");

taoTestUser("neko2", undefined, "neko2@vn.ciom");

//rest parameters
function tongTien(...danhSachGia) {
  //danhsachgia là 1 mảng
  let tong = 0;
  // [1000, 2000, 3000, 4000]
  for (const gia of danhSachGia) {
    tong += gia;
  }
  return tong;
}

console.log(tongTien(100000));
console.log(tongTien(1000, 2000, 3000, 4000));

//hàm nhận vào duy nhát 1 object là options
//c1
function taoUser(options) {
  //bóc tách (destructuring) object ra từng biến riêng biệt
  const { ten, tuoi = 25, email, vaiTro = "test" } = options;
  console.log(`${ten}, ${tuoi}, ${email}, ${vaiTro}`);
}
//c2
function taoUser2({ ten, tuoi = 25, email, vaiTro = "test" }) {
  console.log(`${ten}, ${tuoi}, ${email}, ${vaiTro}`);
}

//gọi hàm
taoUser({
  ten: "neko",
  email: "neko@vn.com",
});

taoUser2({
  ten: "neko",
  tuoi: 100,
  email: "neko@vn.com",
});

