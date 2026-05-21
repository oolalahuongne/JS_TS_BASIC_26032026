//Bài 1
// "Tình huống Automation: Bạn cần kiểm tra xem tính năng Giảm giá (Discount) trên trang Shopee hoạt động có đúng logic toán học không.

// Dữ liệu đầu vào:

// Giá gốc (Lấy từ UI - String): "" 1.000.000 đ ""
// Phần trăm giảm (Lấy từ DB - Number): 20 (tức là 20%)
// Giá sau giảm (Lấy từ UI - String): "" 800.000 đ ""
// Yêu cầu: Viết code để:

// Làm sạch và chuyển đổi Giá gốc về Number.
// Tính toán giá mong đợi: Giá gốc * (100 - 20) / 100."

// Khai báo biến đúng, dùng const — good practice
const priceString = " 1.000.000 đ ";

// Một dòng chain gọn: replaceAll(".",""") bỏ dấu chấm, replace("đ","") bỏ chữ đ, trim() xóa khoảng trắng, Number() ép kiểu
// Thứ tự xử lý hợp lý, gọn nhất có thể
const originalPrice = Number(priceString.replaceAll(".","").replace("đ","").trim());
console.log(originalPrice);

// Công thức đúng: 1000000 * (100-20) / 100 = 800000
const discountPrice = originalPrice *(100-20)/100;
console.log(discountPrice);

// Bài 2:

// Khai báo biến input đúng
let tenSanPham = "   macbook pro m3   ";
let giaGoc = "Price: 30,000,000 vnđ";
let soLuong = "Sl: 2 máy";
let maGiamGia = "DISCOUNT CODE: 10% OFF";

// trim() + toLocaleUpperCase() — đúng
// Lưu ý: toLocaleUpperCase() vs toUpperCase()
//    toLocaleUpperCase() xử lý tốt hơn cho một số ngôn ngữ đặc biệt (tiếng Đức, Thổ Nhĩ Kỳ)
//    Ở đây cả 2 đều cho cùng kết quả, nhưng biết dùng toLocaleUpperCase — hay
const sanPham = (tenSanPham.trim().toLocaleUpperCase());
 console.log(sanPham);

// replace("Price: ","") bỏ nhãn, replace(" vnđ","") bỏ đơn vị, replaceAll(",","") bỏ dấu phẩy, Number() ép kiểu
// Cách tiếp cận trực tiếp, tường minh — rất dễ hiểu!
const donGia = Number(giaGoc.replace("Price: ","").replace(" vnđ","").replaceAll(",",""));
 console.log(donGia);

// Cùng cách tiếp cận replace trực tiếp — nhất quán
// Góp ý nhỏ: replace("máy","") bỏ chữ "máy" nhưng có thể còn khoảng trắng cuối
//    Number("2 ") vẫn cho 2 nên đúng, nhưng nên thêm .trim() cho chắc
const soLuongChuan = Number(soLuong.replace("Sl: ","").replace("máy",""));
 console.log(soLuongChuan);

// Bỏ "DISCOUNT CODE: " và "% OFF" cho ra "10", Number() ép kiểu thành 10
const giamGia = Number(maGiamGia.replace("DISCOUNT CODE: ","").replace("% OFF",""));
 console.log(giamGia);

// Tổng tiền gốc đúng: 30000000 x 2 = 60000000
const tongTienGoc = soLuongChuan*donGia;
 console.log(tongTienGoc);

// Thành tiền đúng: 60000000 x (100-10) / 100 = 54000000
const thanhTien = tongTienGoc * (100-giamGia)/100;
 console.log(thanhTien);


// Góp ý: Cách dùng multiline template literal (backtick nhiều dòng) — sáng tạo!
//    Tuy nhiên mỗi dòng bị thụt đầu dòng (do indentation trong code)
//    + thêm \n tường minh — output sẽ có khoảng trắng thừa ở đầu mỗi dòng
//    Nên dùng từng console.log riêng rẽ, hoặc bỏ indentation trong template literal
console.log(
    `HÓA ĐƠN THANH TOÁN - ID: #0002
    \nSản phẩm: ${sanPham}
    \nĐơn giá: ${donGia}
    \nSố lượng: ${soLuongChuan}
    \nTổng tiền (Gốc): ${tongTienGoc}
    \nGiảm giá: ${giamGia}%
    \nTHÀNH TIỀN: ${thanhTien} VNĐ`
);

// Góp ý: Thành tiền in ra "54000000 VNĐ" — thiếu format dấu chấm phân cách nghìn
// Gợi ý: chuyển thành chuỗi rồi dùng slice chèn dấu chấm:
//    let str = String(thanhTien);
//    let formatted = str.slice(0,-6) + "." + str.slice(-6,-3) + "." + str.slice(-3);


//Bài tập hôm Chủ Nhật
let rawText = "    Order ID: ORD-2026-123 | Status: Success   ";
// yêu cầu lấy ra được ORD-2026-123
// dùng indexof + length + slice

// Đúng: indexOf("Order ID:") tìm vị trí bắt đầu, + ("Order ID:").length nhảy qua hết chữ "Order ID:"
// Cách dùng .length để tính độ dài chuỗi — hay, linh hoạt hơn đếm tay
let start = rawText.indexOf("Order ID:") + ("Order ID:").length;
console.log(start);

// indexOf("|") tìm vị trí dấu gạch đứng — dùng làm điểm kết thúc
let end = rawText.indexOf("|");
console.log(end);

// slice(start, end) cắt ra "ORD-2026-123", trim() xóa khoảng trắng — đúng, gọn
let orderId = rawText.slice(start, end).trim();
console.log(orderId);

// ===================================================
// TỔNG KẾT REVIEW — QUỲNH HƯƠNG
// ===================================================
// Bài 1: Đạt — Code cực gọn, xử lý đúng
// Bài 2: Đạt — Logic đúng, kết quả đúng, output đầy đủ
//
// Điểm tốt:
//   - Code cực kỳ gọn gàng, clean — dùng replace() trực tiếp rất tường minh
//   - Dùng const xuyên suốt — excellent practice
//   - Biết toLocaleUpperCase() — kiến thức nâng cao
//   - Bài 1 chain method trong 1 dòng — gọn nhất lớp
//   - Nộp cả bài cũ (bài Chủ Nhật) — chăm chỉ
//
// Cần cải thiện:
//   - Multiline template literal có indentation thừa — output sẽ có khoảng trắng đầu dòng
//     Nên dùng console.log riêng từng dòng hoặc không indent trong template
//   - Thành tiền chưa format (54000000 thay vì 54.000.000)
//     Gợi ý: chuyển thành chuỗi rồi dùng slice chèn dấu chấm
//   - Có khoảng trắng thừa trước console.log ở vài dòng (indentation không đều)
//
// ===================================================
