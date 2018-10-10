var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var p3 = document.getElementById("p3");

// Bài 1
console.log('-----Bài 1-----');
console.log('Truyền vào hàm changeFontSize(x) tham số x: Thay đổi kích thước font chữ của cả 3 đoạn văn')
function changeFontSize(x) {
	p1.style.fontSize = x+"px";
	p2.style.fontSize = x+"px";
	p3.style.fontSize = x+"px";
}

// Bài 2
console.log('-----Bài 2-----');
console.log('Truyền vào hàm increaseFontSize(p) id của 1 đoạn văn bất kỳ: Tăng kích thước font chữ của đoạn văn mong muốn lên 1 pixel so với kích thước hiện tại');
function increaseFontSize(p) {
	var fontSize = p.style.fontSize;
	var x = parseInt(fontSize);
	if (x < 30) {
		x++;
		p.style.fontSize = x+"px";
	} else {
		alert("Font size của đoạn văn > 30px! Không thể tăng thêm!");
	}
}

// Bài 3
console.log('-----Bài 3-----');
console.log('Truyền vào hàm decreaseFontSize(p) id của 1 đoạn văn bất kỳ: Giảm kích thước font chữ của đoạn văn mong muốn xuống 1 pixels so với kích thước hiện tại');
function decreaseFontSize(p) {
	var fontSize = p.style.fontSize;
	var x = parseInt(fontSize);
	if (x > 10) {
		x--;
		p.style.fontSize = x+"px";
	} else {
		alert("Font size của đoạn văn < 10px! Không thể giảm thêm");
	}
}

// Bài 4
console.log('-----Bài 4-----');
console.log('Gọi hàm changeColor(): Đổi màu chữ của 3 đoạn văn theo thứ tự xanh, vàng, đỏ');
function changeColor() {
	p1.style.color = "blue";
	p2.style.color = "yellow";
	p3.style.color = "red";
}

// Bài 5
console.log('-----Bài 5-----');
console.log('Truyền vào hàm changeBgColor(color) 1 color bất kỳ: Thay đổi màu nền của trang thành màu color');
function changeBgColor(color) {
	var main_menu = document.getElementById("main-menu");
	main_menu.style.backgroundColor = color;

	// var content = document.getElementsByClassName("content");
	// content[0].style.backgroundColor = color;
	
	var content = document.querySelector(".content");
	content.style.backgroundColor = color;
}

// Bài 6
console.log('-----Bài 6-----');
console.log('Truyền vào hàm copyContent(para1, para2) id của 2 đoạn văn: Thay đổi nội dung của đoạn văn paragraph1 thành giống nội dung của đoạn văn paragraph2');
function copyContent(para1, para2) {	
	para1.innerHTML = para2.innerHTML;
}