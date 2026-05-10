const danhSach = ["admin", "123456", "staging"];

// const user = danhSach[0];

// const pass = danhSach[1];

//destruct
const [user, pass, moiTruong2] = ["admin", "123456", "staging"];
console.log(user);
console.log(pass);
console.log(moiTruong2);

//bỏ qua phần tử ko cần
const [firstName, , city] = ["neko", 25, "hanoi"];

console.log(firstName);
console.log(city);

const [a, b, c = "n/a"] = ["hello", "world"];

//giá trị mặc định
console.log(c);

//object destruct
// => cú pháp gặp nhiều nhất -> bóc tách thuộc tính object ra biến riêng biệt theo tên thuộc tính
// (ko theo thứ tự như array)

// const response = { status: 200, body: "ok", headers: {} };

// const status = response.status;

const { status, body } = { status: 200, body: "ok", headers: {} };

console.log(status);
console.log(body);

//đổi tên biến

const { status: statusCode, body: noiDung } = {
  status: 200,
  body: "ok",
  headers: {},
};
console.log(statusCode);

console.log(noiDung);

//giá trị mặc định + đổi tên

const { ten, tuoi = 18, vaiTro: role = "viewer" } = { ten: "neko" };

console.log(ten);
console.log(tuoi);
console.log(role);

// destruct trong tham số hàm
function hienThiUser({ ten, email, tuoi = 18 }) {
  console.log(`${ten}, ${email}, ${tuoi}`);
}

hienThiUser({ ten: "Neko", email: "a" });

// const { ten: ten2, email, tuoi: tuoi2 = 18 } = { ten: "Neko", email: "a" };

//destruct lồng (nested)
const apiResponse = {
  data: {
    user: { name: "neko", email: "neko@123" },
    token: "123",
  },
  status: 200,
};

// const {
//   data: {
//     user: { name, email },
//     token,
//   },
//   status: status2,
// } = apiResponse;

// console.log(name);
// console.log(token);
// console.log(status2);

// // Ví dụ dữ liệu đầu vào
// // Khi chạy automation test, ta nhận được một danh sách kết quả như sau:
const testRuns = [
  [
    " login smoke ",
    { browser: "   chromium   ", env: "  staging  " },
    "  PASS ",
  ],
  [
    " checkout payment ",
    { browser: "   firefox   ", env: "  prod  " },
    "  FAIL ",
  ],
  [
    " search product ",
    { browser: "   webkit   ", env: "  staging  " },
    "  PASS ",
  ],
  ["  ", { browser: "   chromium   ", env: "  dev  " }, "  PASS "],
];
// // Bài toán
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

function taoBaoCaoTest(testRuns) {
  let invalid = 0;
  const passed = [];
  const failed = [];
  for (let item of testRuns){
    const [rawTestName, { browser, env }, rawStatus] = item;
    const testName = rawTestName.trim();
    const browserName = browser.trim();
    const envName = env.trim();
    const status = rawStatus.trim().toUpperCase();
    if (testName === ""){
      invalid++;
      continue;
    }
    if (status !== "PASS" && status !== "FAIL" ){
      invalid++;
      continue;
    }
    const reportItem = `${testName} - ${browserName} - ${envName}`;
    if (status === "PASS"){
      passed.push(reportItem);
    } else {
      failed.push(reportItem)
    }
  }
  return {
    totalValid: passed.length + failed.length,
    invalid: invalid,
    passed: passed,
    failed: failed,
  }
}
console.log(taoBaoCaoTest(testRuns));

