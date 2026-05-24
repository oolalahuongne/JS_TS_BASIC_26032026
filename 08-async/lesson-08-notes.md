1. **Bản chất đơn luồng (single-thread) của JavaScript**

- JavaScript chỉ có **một luồng chính (Main Thread)** để thực thi code.
- Có thể hình dung như một nhân viên duy nhất vừa làm thu ngân vừa làm pha chế.
- Với **multi-threading**, có nhiều nhân viên xử lý nhiều việc cùng lúc.
- Nhưng với JavaScript, mỗi việc phải được xử lý **từng cái một**: dòng này xong mới tới dòng khác.

2. **Lập trình đồng bộ (synchronous)**

- Trong mô hình đồng bộ, nếu một tác vụ đầu tiên quá nặng hoặc quá lâu:
  - Main Thread phải đứng chờ xử lý xong tác vụ đó.
  - Toàn bộ các tác vụ phía sau đều bị chặn (**blocked**).
  - Không ai được phục vụ tiếp cho đến khi việc hiện tại hoàn tất.

- Ví dụ:
  - Khách đầu tiên gọi một món cực kỳ phức tạp.
  - Nhân viên phải tập trung pha món đó.
  - Tất cả khách còn lại đều phải chờ.

3. **Trong automation, tác vụ nặng nhất thường không phải là tính toán**

- Phần khiến máy tính mất nhiều thời gian thường là **I/O (Input/Output)**, tức là giao tiếp với thế giới bên ngoài.

- Gọi là I/O vì:
  - CPU không tự hoàn thành các tác vụ này một mình.
  - Nó chỉ **gửi yêu cầu ra ngoài (output)**.
  - Sau đó **ngồi chờ kết quả trả về (input)**.
  - Thời gian chờ này nằm ngoài sự kiểm soát trực tiếp của CPU.
  - Nó phụ thuộc vào:
    - tốc độ mạng,
    - tốc độ phản hồi của server,
    - tốc độ đọc/ghi file,
    - và nhiều yếu tố bên ngoài khác.

4. **Những loại I/O thường gặp trong Automation Testing**

- **I/O với hệ thống file**
  - Đọc/ghi file dung lượng lớn để lấy dữ liệu.
  - Lưu ảnh chụp màn hình vào report sau khi chạy test.

- **I/O với trình duyệt**
  - Ví dụ: `page.click()`
  - CPU gửi lệnh click cho trình duyệt.
  - Sau đó phải chờ trình duyệt:
    - xử lý sự kiện,
    - render lại DOM,
    - rồi phản hồi kết quả.

- **I/O với server (network)**
  - Gọi API để tạo dữ liệu.
  - Kết nối database và chờ server trả về kết quả query.

5. **Vì vậy JavaScript cần mô hình bất đồng bộ (asynchronous)**

- Thay vì để Main Thread đứng chờ một tác vụ nặng hoàn tất, JavaScript xử lý theo cách khác:

1. Nhân viên nhận order tải một trang web hoặc làm một tác vụ nặng.
2. Nó chuyển tác vụ đó cho hệ thống phía sau xử lý, đồng thời phát cho người dùng một **tờ biên lai**.
3. Tờ biên lai đó chính là **Promise**.
4. Main Thread lập tức rảnh tay để tiếp tục làm các việc khác, ví dụ chạy các dòng code bên dưới.
5. Khi tác vụ hoàn tất, hệ thống sẽ quay lại thông báo kết quả thông qua Promise để xử lý tiếp.

6. **Promise là gì?**

- Trong JavaScript, **Promise** là một "lời hứa".
- Có thể hiểu Promise như **tờ biên lai theo dõi kết quả của một tác vụ sẽ có trong tương lai**.

7. **Ba trạng thái của Promise**

- `pending`
  - Promise vừa được tạo.
  - Tác vụ bất đồng bộ đang chạy.
  - Chưa có dữ liệu trả về.

- `fulfilled` / `resolved`
  - Tác vụ đã hoàn thành thành công.
  - Promise trả về kết quả.

- `rejected`
  - Tác vụ thất bại.
  - Promise trả về lỗi, ví dụ timeout hoặc mất kết nối.

8. **Cách lấy kết quả từ Promise**

- Chúng ta thường dùng hai phương thức ghép nối:

- `.then(callback)`
  - Được gọi khi Promise thành công (`resolved` / `fulfilled`).
  - Dùng để lấy dữ liệu và xử lý bước tiếp theo.

- `.catch(callback)`
  - Được gọi khi Promise thất bại (`rejected`).
  - Dùng để xử lý lỗi.

9. **Cú pháp**

```js
const tenPromise = new Promise((resolve, reject) => {
  // Thực hiện tác vụ bất đồng bộ ở đây

  if (thanhCong) {
    resolve(giaTriThanhCong);
  } else {
    reject(lyDoLoi);
  }
});
```

- Đầu ra của `new Promise(...)` là một Promise.
- Chúng ta sẽ dùng `.then()` hoặc `.catch()` để đón kết quả từ Promise.

Giá trị truyền vào resolve(), reject() sẽ tự động chảy ra thành tham số đầu vào cho .then() hoăck catch()

.Đâ chính là cầu nối dữ liệu giúp luôn chuyển xuyên suốt promise
resolve() và reject() chỉ nhận đúng 1 giá trị, giá trị đó có thể là

Chaining (xâu chuỗi) - Khi then() truyền dữ liệu cho nhau

nếu bên trong then() return 1 giá trị -> giá trị đó sẽ tự động trở thành đầu vào cho .then() khác tiếp theo trong chuỗi
Dữ liệu cứ thế chảy từ bước này sang bước khác

Các cách bắt lỗi (catch reject)
Khi 1 promise bị reject() -> Js sẽ tìm chỗ xử lý lỗi gần nhất
có 3 cách
c1: catch() ở cuối chuỗi (hay dùng nhât)
bắt lỗi từ bất kfi trhen() nào phía trên văn lỗi
c2: Mình có thể dùng catch() khi dùng then() 2 tham số (ít dùng)
c3L catch() xen giữa chuối (NÂNG CAO) -> bắt lỗi từng bước , xử lý xong rồi chạy tiếp
setTimeout()
cú pháp setTimeout(callBack, delay)
=> trả về id số nguyên có thể hủy hẹn giờ nếu cần

async/await -> cứu tinh
-> là 1 lớp vỏ bọc của promise và then() -> tác dụng viết code dễ nhìn hơn thôi
->warp () lên trên thằng primise và then() -> để viết code đẹpk hơn và thuận tiện hơn

sẽ có 2 từ khóa
1 async -> biến 1 thàm thường thành 1 h àm bất đồng bộ

-> làm cho hàm đó ochacs chắn 100% là sẽ trả về 1 promise -> dù mình có return 1 giá trị bình tường.
JS sẽ tự động bọc nó trong PROMISE.resolve()
-> bên trong hàm ta có quyền sử dụng từ await

await -
đặt await trước lệnh trả về promise -> nó sẽ

tạm dừng dòng code bên trong hàm async -> chờ promise hoàn tất
trả về giá tị mà promise resolve() -> có thể gán thẳng vào biến
ko làm đóng băng hệ thống
