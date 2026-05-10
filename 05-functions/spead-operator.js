// Cấu hình mặc định dùng chung cho nhiều môi trường
const configMacDinh = {
  baseUrl: "https://staging.neko.vn", // Địa chỉ mặc định đang trỏ tới môi trường staging
  timeout: 30000, // Thời gian chờ tối đa là 30 giây
  headless: true, // Chạy trình duyệt ở chế độ không hiển thị giao diện
  retries: 2, // Số lần thử lại khi có lỗi
};

// Tạo cấu hình production bằng cách:
// - sao chép toàn bộ từ configMacDinh
// - ghi đè 2 thuộc tính cần thay đổi
const configProd = {
  ...configMacDinh, // Lấy toàn bộ thuộc tính từ cấu hình mặc định
  baseUrl: "https://neko.vn", // Đổi sang địa chỉ production
  retries: 0, // Ở production thì không thử lại
};

// In ra cấu hình production để kiểm tra kết quả
console.log(configProd);

// Tạo cấu hình debug từ cấu hình mặc định và tắt chế độ headless
const configDebug = { ...configMacDinh, headless: false };

// Toán tử spread trong tham số hàm

// Khai báo mảng chứa danh sách các mức giá.
const danhSachGia = [10000, 20000, 30000];

// Dùng toán tử spread (...) để tách từng phần tử trong mảng
// thành các đối số riêng lẻ truyền vào hàm Math.max().
const giaMax = Math.max(...danhSachGia);

// Cách viết bên dưới tương đương với dòng trên:
// const giaMax = Math.max(10000, 20000, 30000);


// Bài toán
// Cho dữ liệu đầu vào như sau:
// Cấu hình mặc định của bài tập
const configMacDinhBaiTap = {
  baseUrl: "https://staging.neko.vn", // Địa chỉ mặc định đang trỏ tới môi trường staging
  timeout: 30000, // Thời gian chờ tối đa là 30 giây
  headless: true, // Chạy trình duyệt ở chế độ không hiển thị giao diện
  retries: 2, // Số lần thử lại khi có lỗi
};

// Cấu hình dùng để ghi đè một số giá trị mặc định
const configGhiDe = {
  timeout: 10000,
  headless: false,
};

// Danh sách tag mặc định
const tagsMacDinh = [" smoke  ", "  login "];

// Danh sách tag cần thêm
const tagsThem = ["  check out  ", "  smoke  ", "  regression "];

// Mảng thời gian phản hồi
const tocDoPhanHoi = [1200, 3400, 800, 1500];

// Tên suite thô, chưa được làm sạch
const tenSuiteRaw = "  Payment  Flow  ";

// Yêu cầu
// Viết hàm taoCauHinhChayTest().
// - Dùng object spread để tạo configCuoi từ configMacDinhBaiTap và configGhiDe.
// - Dùng array spread để gộp tagsMacDinh và tagsThem thành một mảng mới.
// - Sau đó xử lý mảng mới bằng cách loại bỏ tag rỗng và chuyển về chữ thường.
// - Làm sạch tenSuiteRaw.
// - Nếu tenSuiteRaw rỗng thì dùng giá trị mặc định là "unknown-suite".
// - Tìm thời gian phản hồi lớn nhất bằng spread với Math.max.
// - Trả về object có dạng sau:

// Kết quả mong đợi
// {
//   suiteName: "Payment Flow",
//   config: {
//     baseUrl: "https://staging.neko.vn", // Địa chỉ mặc định đang trỏ tới môi trường staging
//     timeout: 10000, // Thời gian chờ tối đa là 30 giây
//     headless: false, // Chạy trình duyệt ở chế độ không hiển thị giao diện
//     retries: 2,
//   },
//   tags: ["smoke", "login", "checkout", "regression"],
//   slowestRespone: 3400
// }

function taoCauHinhChayTest() {
  const configCuoi = {...configMacDinhBaiTap, ...configGhiDe};
  const allTags = [...tagsMacDinh, ...tagsThem];

  const cleanTags = [];
  for (const tag of allTags) {
    const tagDaLamSach = tag.trim().toLocaleLowerCase();
    if (tagDaLamSach === "") {
      continue;
    }
    if (!cleanTags.includes(tagDaLamSach)) {
      cleanTags.push(tagDaLamSach);
    }
  }

  let tenSuite = tenSuiteRaw.trim();
  if (tenSuite === "") {
    tenSuite = "unknown-suite";
  }

  const slowestRespone = Math.max(...tocDoPhanHoi);

  return {
    suiteName: tenSuite, 
    config: configCuoi,
    tags: cleanTags,
    slowestRespone,
  }
}
console.log(taoCauHinhChayTest());





const sanPhamUI = [
  { ten: "Chuột", gia: 150000, tonKho: true },
  { ten: "Bàn phím", gia: 500000, tonKho: false },
  { ten: "Màn hình", gia: 3000000, tonKho: true },
  { ten: "Tai nghe", gia: 200000, tonKho: true },
];

//Lọc cấc sản phẩm còn hàng
//dùng for lọc các sản phẩm còn hàng
const sanPhamConHang = []

for (const conHang of sanPhamUI) {
    if (conHang.tonKho === true) {
        sanPhamConHang.push(conHang)
    } 
}

//lọc giá nhỏ hơn 200000 và còn hàng
const sanPhamDaFilter = sanPhamUI.filter((sanPham) => {
    return sanPham.gia < 200000 && sanPham.tonKho === true
}) 
console.log(sanPhamDaFilter);


const users = [
  { id: 1, ten: "neko", role: "admin" },
  { id: 2, ten: "mew", role: "tester" },
  { id: 3, ten: "Cat", role: "tester" },
];

//tìm phần tử có role là admin

const roleAdmin = users.find((user) => {
  return user.role === "admin"
})
console.log(roleAdmin);
