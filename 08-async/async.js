// console.log("khách order matcha siêu phức tạp");

// console.log("nhân viên ok, đợi tại quầy");

// //tác vụ nặng chạy đồng bộ sẽ lm đóng năng hệ thống

// let thoiGianBatDau = Date.now();
// while(Date.now() - thoiGianBatDau < 3000) {
//     //BLOCKING - CPU BỊ NHỐT TRONG VÒNG LẶP NÀY
//   //TRONG SUỐT 3 giây
//   //1.JS sẽ bị mù và điếc vs thé giới bên ngoài
//   //2. KO 1 dòng code nào khác đc chạy

// }

// console.log("matcha xong");
// console.log("tới lượt khách sau");

// function taoBienLai(thanhCong) {
//     return new Promise((resolve, reject) => {
//         if(thanhCong) {
//             resolve("pha matcha xong");
//         } else {
//             reject(new Error("hết matcha"));
//         }
//     });
// }

// taoBienLai(true).then((ketQua)=>{
//     console.log(".then nhận", ketQua);
// })

// taoBienLai(false).catch((Loi)=>{
//     console.log(".catch nhận", Loi);
    
// })

function datHangOnline(maDon, conHang) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (conHang) {
        resolve({
          maDon: maDon,
          sanPham: "Matcha",
          tongTien: 40000,
        });
      } else {
        reject(new Error(`Đơn ${maDon}: sản phẩm đã hết hàng`));
      }
    }, 5000);
  });
}

console.log("1, gửi yêu cầu đặt hàng");
datHangOnline("SP001", true).then((donHang)=>{
    console.log("3. then() nhận đơn hàng", donHang);
    return donHang.maDon;
    
}).then((maDon)=>{
    console.log(`4. chuyển sang bước thanh toán cho mã đơn`, maDon);
    
}).catch((loi)=>{
    console.log("không chạy vào đây vì SP001 thành công", loi.message);
    
})

console.log("2, code dưới này vẫn chạy không chờ promise xong");

datHangOnline("SP002", false)
  .then((donHang) => {
    console.log("Không chạy vào đây vfi SP002 thất bại", donHang);
  })
  .catch((loi) => {
    console.log("5. catch bắt lỗi", loi.message);
  });