// const productName = "iphone 15 promax";
// const productSelector = `h2:has-text("${productName}")`;
// console.log(productSelector);

// let matKhau = "123456";
// console.log(matKhau.length);

// let emailWeb = " user01 ";
// let emailChuan = emailWeb.trim();
// console.log(emailChuan);


// // IPHONE 15 - data test iphone 15
// // chuyển cà 2 về cùng 1 kiểu (thường là lower case) rồi mới so sánh 
// let tenSanPham = "iPhone 15";
// console.log(tenSanPham.toLowerCase());

// let thongBao = "Đăng nhập thất bại. Sai mật khẩu";
// console.log(thongBao.includes("Thành công")); // return false

// let errorMsg = "Error 404: Page not found";

// let pos = errorMsg.indexOf(":");
// console.log();

// let rawText = "    Order ID: ORD-2026-123 | Status: Success   ";
// // yêu cầu lấy ra được ORD-2026-123
// // dùng indexof + length + slice

// let start = rawText.indexOf("Order ID:");
// console.log(start);

// let end = rawText.indexOf("|");
// console.log(end);

// let orderId = rawText.slice(start, end);
// console.log(orderId);


// const slug = " Playwright Basic First test "

// const editedSlug = slug.toLocaleLowerCase().trim().replaceAll(" ","-")

// console.log(editedSlug);


// const isAgeValid = userAge >= 18
// console.log(isAgeValid);

// const isPasswordValid = passwordInput.length == 8
// console.log(isPasswordValid);

// const isSubmitButtonEnabled = isAgeValid && isPasswordValid && isTermAccepted

// console.log(isSubmitButtonEnabled);



// promotion rule: khách hàng trên 18 tuổi và là thành viên VIP -> giảm 30% giá vé, ngược lại giữ nguyên
// yêu cầu: 
//1. làm sạch và ép kiểu 
//2. kiểm tra điều kiện: nếu đủ tính giá giảm 30%, nếu không giữ nguyên
//3. in kết quả
let rawAge = " 25 tuổi"; // need number
let rawVip = "true"; // need boolean
let rawTicketPrice = "  500.000 đ "; //need number 

const currentAge = Number(rawAge.trim().replace("tuổi", ""));
const ticketPrice = Number(rawTicketPrice.trim().replace(".","").replace("đ",""));
const vipCondition = Boolean(rawVip === "true");
console.log(currentAge, ticketPrice, vipCondition);

const promotionCondition = currentAge > 18 && vipCondition === true;
console.log(promotionCondition);

if (promotionCondition){
    const getPromotion = ticketPrice * (100-30)/100
    console.log(`Price After Discount: ${getPromotion}`); 
} else {
    console.log("No Promotion");   
}


