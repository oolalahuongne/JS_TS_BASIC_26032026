//bài tập
//viét 1 hàm taoBoDem(tenNut) trả về 1 object với 2 method
// - click() - tắng số lần click lên 1 và in ra "tên nút số click clicks"
// - reset () - đặt lại click  - 0 và in a "tên nút reset"

// ví dụ kết quả mong muốn
// const nutLogin = taoBoDem("Login Button");
// nutLogin.click() -> login button: 1 clicks
// nutLogin.click() -> login button: 2 clicks
//nutLogin.reset()
// nutLogin.click() -> login button: 1 clicks


function taoBoDem(tenNut) {
  let soClick = 0;
  return {
    click() {
      soClick++;
      console.log(`${tenNut}: ${soClick} clicks`);
    },
    reset() {
      soClick = 0;
      console.log(`${tenNut} reset Xong`);
    },
  };
}

const boDem = taoBoDem("nút");
boDem.click();
boDem.click();
boDem.reset();
boDem.click();