# Lesson-2: Git & Javascript
## Git
## Khái niệm VCS(Version Control System): Phần mềm lưu trữ dữ liệu ở máy cá nhân hoặc mảy chủ hoăc lưu ở nhiều máy khác nhau 
## Khái niệm Git, so sánh Git và VCS
## Khái niệm GitHub, so sánh Git và GitHub
## 3 vùng Git: Working Directory, Staging Area, Repository
Khởi tạo Git cho Folder: git init
Chuyển data sang Git Staging area : git add. or git add + tên file
Chuyển data từ Git staging area sang Git Repository: git commit -m "message"
Kiểm tra lịch sử commit: git log
## Commit convention: Là format chung của công ty hay team quy định khi nhâp message lúc commit

# Javascript
## File có đuôi là .js
## Variable: biến, dùng để lưu trữ giá trị, có thể thay đổi giá trị được.
var <ten_bien> = <gia tri>;
## Khác nhau giữa var và let?
var khai báo lại được, let thì không
Phạm vi của biến
○ var: phạm vi toàn cục (global), có thể gán lại
○ let: phạm vi trong cặp ngoặc {}, có thể gán lại
Nên dùng: let
## Constant = hằng số. Dùng để khai báo các giá trị không thể thay đổi. không thể gán lại
## Data type = kiểu dữ liệu.
Có 8 loại kiểu dữ liệu: String, Number,Bigint, Boolean, Undefined, Null,Symbol, Object.
## Comparison operator = toán tử so sánh.
● Dùng để so sánh giá trị giữa 2 biến với
nhau. Kết quả sẽ trả về Boolean (true hoặc false).
● Các toán tử so sánh:
○ So sánh hơn kém: >, <
○ So sánh bằng: ==, ===,!=, !==, >=, <=
## Unary operator = toán tử một ngôi.
● Dùng để tăng hoặc giảm giá trị
● i++ bằng với i=i+1
● i-- bằng với i=i-1
## Arithmetic operator = toán tử số học.
Các phép toán: +, -, *, /

## Conditional = điều kiện, dùng để kiểm tra có nên thực hiện một đoạn logic không.
Cú pháp: if (<điều kiện>) { // code }. Nếu
điều kiện đúng, sẽ chạy đoạn code

## Loops = vòng lặp
- Dùng để thực hiện một đoạn logic một số lần nhất định
- Cú pháp: for(<khởi tạo>; <điều kiện dừng>; <điều kiện tăng>) 
{
// code 
}
- Ví dụ:
for (let i = 1; i <= 10; i++) 
{
console.log("Giá trị của i là: ", i);
}

# Format code: 
Mac: Option + Shift + F