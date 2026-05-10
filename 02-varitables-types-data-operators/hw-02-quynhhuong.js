//Bài 1
// "Tình huống Automation: Bạn cần kiểm tra xem tính năng Giảm giá (Discount) trên trang Shopee hoạt động có đúng logic toán học không.

// Dữ liệu đầu vào:

// Giá gốc (Lấy từ UI - String): "" 1.000.000 đ ""
// Phần trăm giảm (Lấy từ DB - Number): 20 (tức là 20%)
// Giá sau giảm (Lấy từ UI - String): "" 800.000 đ ""
// Yêu cầu: Viết code để:

// Làm sạch và chuyển đổi Giá gốc về Number.
// Tính toán giá mong đợi: Giá gốc * (100 - 20) / 100."

const priceString = " 1.000.000 đ ";

const originalPrice = Number(priceString.replaceAll(".","").replace("đ","").trim());
console.log(originalPrice);

const discountPrice = originalPrice *(100-20)/100;
console.log(discountPrice);

// Bài 2:
// "Bạn đang viết script test cho trang thương mại điện tử. Bạn lấy được thông tin đơn hàng từ giao diện web, nhưng dữ liệu trả về rất “bẩn” (lẫn lộn chữ, số, ký tự lạ, khoảng trắng).

// Nhiệm vụ của bạn là làm sạch chúng, tính toán tổng tiền, và in ra một cái Hóa đơn (Receipt) chuẩn chỉnh."
// Dữ liệu đầu vào
// "let tenSanPham = "   macbook pro m3   ";
// let giaGoc = "Price: 30,000,000 vnđ";
// let soLuong = "Sl: 2 máy";
// let maGiamGia = "DISCOUNT CODE: 10% OFF";
// "Bạn phải viết code xử lý để khi chạy console.log, màn hình hiện ra y hệt như sau:

// HÓA ĐƠN THANH TOÁN - ID: #0002
// Sản phẩm: MACBOOK PRO M3
// Đơn giá: 30000000
// Số lượng: 2
// Tổng tiền (Gốc): 60000000
// Giảm giá: 10%
// THÀNH TIỀN: 54.000.000 VNĐ

let tenSanPham = "   macbook pro m3   ";
let giaGoc = "Price: 30,000,000 vnđ";
let soLuong = "Sl: 2 máy";
let maGiamGia = "DISCOUNT CODE: 10% OFF";

const sanPham = (tenSanPham.trim().toLocaleUpperCase());
 console.log(sanPham);

const donGia = Number(giaGoc.replace("Price: ","").replace(" vnđ","").replaceAll(",",""));
 console.log(donGia);

const soLuongChuan = Number(soLuong.replace("Sl: ","").replace("máy",""));
 console.log(soLuongChuan);

const giamGia = Number(maGiamGia.replace("DISCOUNT CODE: ","").replace("% OFF",""));
 console.log(giamGia);

const tongTienGoc = soLuongChuan*donGia;
 console.log(tongTienGoc);

const thanhTien = tongTienGoc * (100-giamGia)/100;
 console.log(thanhTien);


console.log(
    `HÓA ĐƠN THANH TOÁN - ID: #0002
    \nSản phẩm: ${sanPham}
    \nĐơn giá: ${donGia}
    \nSố lượng: ${soLuongChuan}
    \nTổng tiền (Gốc): ${tongTienGoc}
    \nGiảm giá: ${giamGia}%
    \nTHÀNH TIỀN: ${thanhTien} VNĐ`
);

//Bài tập hôm Chủ Nhật
let rawText = "    Order ID: ORD-2026-123 | Status: Success   ";
// yêu cầu lấy ra được ORD-2026-123
// dùng indexof + length + slice

let start = rawText.indexOf("Order ID:") + ("Order ID:").length;
console.log(start);

let end = rawText.indexOf("|");
console.log(end);

let orderId = rawText.slice(start, end).trim();
console.log(orderId);