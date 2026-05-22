// Tình huống: Bạn đang viết một bản kiểm tra trước khi release. Hệ thống trả về dữ liệu thô từ UI và config. Bạn cần xử lý thành báo cáo rõ ràng.																									
																									
// Dữ liệu đầu vào:																																																	
let rawProjectName = "   Neko CRM   ";																									
let rawEnvName = "   ";																									
let rawPassRate = "82";																									
let rawHasReport = "true";																									
let rawCriticalMessage = "   ";																									
let browserUsed = "chrome"; // "chrome", "firefox", "safari", "edge"																									
																																																		
// Yêu cầu:																									
// 1. Dùng .trim() để làm sạch rawProjectName và rawEnvName.	
const projectName = rawProjectName.trim();
const envName = rawEnvName.trim();																								
// 2. Nếu rawEnvName sau khi trim() là rỗng -> gán environment = "Development". Nếu không rỗng -> dùng chính giá trị đã làm sạch
const environment = envName === "" ? "Development" : envName;  															
// 3. Ép rawPassRate sang Number.				
const passRate = Number(rawPassRate);																					
// 4. Ép rawHasReport sang Boolean đúng cách.
const hasReport = Boolean(rawHasReport.trim().toLowerCase() === "true");																																												
// 5. Tạo hasCriticalBug theo quy tắc: 																								
// nếu message là null hoặc undefined -> false																									
// nếu sau trim() là rỗng -> false																									
// ngược lại -> true	
let hasCriticalBug
if (rawCriticalMessage == null) {
    hasCriticalBug = false
} else if (rawCriticalMessage.trim() === "") {
    hasCriticalBug = false
} else {
    hasCriticalBug = true
}
const CriticalMessage = hasCriticalBug ? "Có bug nghiêm trọng" : "Không có bug nghiêm trọng";
// 6. Dùng if / else if để xếp hạng:																									
// >= 95 -> "EXCELLENT"																									
// >= 80 -> "GOOD"																									
// >= 60 -> "NEEDS IMPROVEMENT"																									
// còn lại -> "CRITICAL"	
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
																									
// 7. Dùng switch/case để gán tên engine cho browserUsed:																									
// chrome -> "Chromium"																									
// edge -> "Chromium"																									
// firefox -> "Gecko"																									
// safari -> "WebKit"																									
// Nếu không khớp -> "Unknown"	
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
// 8. Dùng toán tử 3 ngôi để tạo message cho report:																									
// nếu hasReport là true -> "Có report"																									
// ngược lại -> "Chưa có report"	
const report = hasReport === true ? "Có report" : "Chưa có report";																																																
// 9. Tạo isReadyToRelease theo quy tắc:																									
// nếu pass rate dưới 80 -> false																									
// nếu có critical bug -> false																									
// nếu chưa có report -> false																									
// còn lại -> true																									
// In báo cáo ra console.						
const isReadyToRelease = passRate >= 80 && hasCriticalBug === false && hasReport === true		
const readyMessage = isReadyToRelease ? "YES" : "NO";				
// Expected output																									
// Project:         Neko CRM																									
// Environment:     Development																									
// Browser:         chrome																									
// Engine:          Chromium																									
																									
// Pass Rate:       82.00%																									
// Grade:           GOOD																									
// Report:          Có report																									
// Critical Bug:    Không có bug nghiêm trọng																									
																									
// Ready:           YES																									
console.log(`Project:         ${projectName}`);
console.log(`Environment:     ${environment}`);
console.log(`Browser:         ${browserUsed}`);
console.log(`Engine:          ${engine}`);
console.log(`Pass Rate:       ${passRate.toFixed(2)}%`);
console.log(`Grade:           ${grade}`);
console.log(`Report:          ${report}`);
console.log(`Critical Bug:    ${CriticalMessage}`);
console.log(`Ready:           ${readyMessage}`);

																																																																																																																																																																																																																																																																																																																																																																																																																												
																																														
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
const vipCondition = Boolean(rawVip);
// console.log(currentAge, ticketPrice, vipCondition);

const promotionCondition = currentAge >= 18 && vipCondition === true;
console.log(promotionCondition);

if (promotionCondition){
    const getPromotion = ticketPrice * (100-30)/100
    console.log(`Price After Discount: ${getPromotion}`); 
} else {
    console.log("No Promotion");   
}																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									