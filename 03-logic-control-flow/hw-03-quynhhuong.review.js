// HW-03: Báo cáo kiểm tra trước khi release

let rawProjectName = "   Neko CRM   ";
let rawEnvName = "   ";
let rawPassRate = "82";
let rawHasReport = "true";
let rawCriticalMessage = "   ";
let browserUsed = "chrome"; // "chrome", "firefox", "safari", "edge"

// 1. trim() — đúng
// Hay! Dùng const — best practice
const projectName = rawProjectName.trim();
const envName = rawEnvName.trim();

// 2. Ternary gọn — đúng: "" === "" → "Development"
const environment = envName === "" ? "Development" : envName;

// 3. Number() — đúng
const passRate = Number(rawPassRate);

// 4. Ép Boolean
// Đúng: .trim().toLowerCase() === "true" → true/false (kết quả Boolean)
// Góp ý: Boolean() bọc ngoài thừa — vì === đã trả về Boolean rồi
//    Viết gọn: const hasReport = rawHasReport.trim().toLowerCase() === "true";
const hasReport = Boolean(rawHasReport.trim().toLowerCase() === "true");

// 5. hasCriticalBug
// Hay! Dùng == null thay vì === null || === undefined — gọn hơn
//    == null kiểm tra cả null lẫn undefined (loose equality)
let hasCriticalBug
if (rawCriticalMessage == null) {
    hasCriticalBug = false
} else if (rawCriticalMessage.trim() === "") {
    hasCriticalBug = false
} else {
    hasCriticalBug = true
}
const CriticalMessage = hasCriticalBug ? "Có bug nghiêm trọng" : "Không có bug nghiêm trọng";

// 6. if/else if xếp hạng — đúng thứ tự, gọn
let grade;
if (passRate >= 95) {
    grade = "EXCELLENT";
} else if (passRate >= 80) {
    grade = "GOOD";
} else if (passRate >= 60) {
    grade = "NEEDS IMPROVEMENT";
} else {
    grade = "CRITICAL"
}

// 7. switch/case — đúng, đầy đủ
// Góp ý: chrome/edge cùng "Chromium" — có thể gộp case (fall-through)
// Góp ý nhỏ: dòng engine = "WebKit";; có 2 dấu chấm phẩy (;; thừa 1)
let engine;
switch (browserUsed) {
    case "chrome":
        engine = "Chromium";
        break;
    case "edge":
        engine = "Chromium";
        break;
    case "firefox":
        engine = "Gecko";
        break;
    case "safari":
        engine = "WebKit";;
        break;
    default:
        engine = "Unknown"
}

// 8. Ternary — đúng
// Góp ý: hasReport === true thừa — hasReport đã là Boolean, viết gọn: hasReport ? ...
const report = hasReport === true ? "Có report" : "Chưa có report";

// 9. isReadyToRelease — gộp 3 điều kiện bằng && — gọn, đúng
const isReadyToRelease = passRate >= 80 && hasCriticalBug === false && hasReport === true
const readyMessage = isReadyToRelease ? "YES" : "NO";

// Output đúng format, alignment đều, khớp đề
console.log(`Project:         ${projectName}`);
console.log(`Environment:     ${environment}`);
console.log(`Browser:         ${browserUsed}`);
console.log(`Engine:          ${engine}`);
console.log(`Pass Rate:       ${passRate.toFixed(2)}%`);
console.log(`Grade:           ${grade}`);
console.log(`Report:          ${report}`);
// Góp ý nhỏ: CriticalMessage viết hoa chữ C — convention JS: camelCase → criticalMessage
console.log(`Critical Bug:    ${CriticalMessage}`);
console.log(`Ready:           ${readyMessage}`);


// ============================================
// BÀI THÊM:
// ============================================

let rawAge = " 25 tuổi"; // need number
let rawVip = "true"; // need boolean
let rawTicketPrice = "  500.000 đ "; //need number

// trim() + replace() gọn 1 dòng — đúng
const currentAge = Number(rawAge.trim().replace("tuổi", ""));
// Góp ý: replace(".", "") chỉ bỏ dấu chấm ĐẦU TIÊN
//    "500.000" → "500000" (đúng vì chỉ có 1 dấu chấm)
//    Nhưng nếu giá lớn hơn (1.000.000) → "1000.000" (sai!)
//    Sửa: dùng replaceAll(".", "") hoặc replace(/\./g, "")
const ticketPrice = Number(rawTicketPrice.trim().replace(".","").replace("đ",""));
// Góp ý: Boolean("true") → true (đúng ở đây)
//    Nhưng Boolean("false") cũng → true! Nên dùng === "true"
const vipCondition = Boolean(rawVip);

const promotionCondition = currentAge >= 18 && vipCondition === true;
console.log(promotionCondition);

// if/else tính giá giảm — đúng logic
if (promotionCondition){
    const getPromotion = ticketPrice * (100-30)/100
    console.log(`Price After Discount: ${getPromotion}`);
} else {
    console.log("No Promotion");
}

// ===================================================
// TỔNG KẾT REVIEW — QUỲNH HƯƠNG — HW-03
// ===================================================
// Kết quả: Đạt — Bài hoàn chỉnh, output khớp đề, còn làm thêm bài bonus
//
// Điểm tốt:
//   - Dùng const xuyên suốt — best practice, tốt nhất lớp
//   - Ép Boolean đúng: .trim().toLowerCase() === "true" (dù bọc thêm Boolean() thừa)
//   - hasCriticalBug dùng == null — gọn hơn === null || === undefined
//   - isReadyToRelease gộp 3 điều kiện && — gọn
//   - Output alignment đều đẹp, khớp đề 100%
//   - toFixed(2) format "82.00%"
//   - Tự làm thêm bài bonus (Promotion Rule) — chủ động luyện tập
//
// Cần cải thiện:
//   - Boolean() bọc ngoài === "true" thừa — === đã trả về Boolean rồi
//   - CriticalMessage viết hoa chữ C — convention JS: camelCase (criticalMessage)
//   - engine = "WebKit";; có 2 dấu chấm phẩy — bỏ 1
//   - chrome/edge nên gộp case (fall-through)
//   - hasReport === true và hasCriticalBug === false thừa — đã là Boolean
//     Viết gọn: passRate >= 80 && !hasCriticalBug && hasReport
//   - Bài bonus: replace(".","") chỉ bỏ dấu chấm đầu tiên — dùng replaceAll
//   - Bài bonus: Boolean(rawVip) cùng lỗi Boolean() — nên dùng === "true"
// ===================================================
