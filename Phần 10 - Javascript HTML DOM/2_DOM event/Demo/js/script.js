function press() {
	alert("OKAY!");
}

function press2(str) {
	alert(str + " is pressed!");
}

function press3(button) {
	alert(button.innerHTML + " is pressed!");
}

function sum() {
	var x = document.getElementById('x').value; // để lấy ra giá trị của input ta dùng thuộc tính value
	var y = document.getElementById('y').value;
	//sau khi lấy đc dữ liệu ta tính tổng rồi gán vào thẻ <b> có id = result
	//dữ liệu ng dụng nhập vào là dạng string
	document.getElementById('result').innerText = Number(x) + Number(y); //convert string thành number
}

//lấy đối tượng
var button = document.getElementById('show-btn');
//thêm sự kiện cho đối tượng
button.onclick = function() {
	alert("Bạn vừa click vào button " + button.innerHTML);
}

//lấy đối tượng
var a_list = document.getElementsByClassName('show');
//lặp và gán sự kiện cho đối tượng
for (var i = 0; i < a_list.length; i++) {
	a_list[i].onclick = function() {
		alert("Xin chào!");
		return false;
	}
}

document.getElementById('txt-val').value = "...";
//lấy đối tượng
var input = document.getElementById('txt-val');
//thêm sự kiện cho đối tượng
input.addEventListener('keyup', function()	{
	//gán giá trị vào div
	document.getElementById('res').innerHTML = input.value;
});
//bổ sung thêm hành động nữa
input.addEventListener('keyup', function() {
	if (input.value.length > 5) {
		alert('Bạn đã nhập nhiều hơn 5 ký tự');
	};
});

//thêm sự kiện cho đối tượng window
window.addEventListener("resize", function() {
	document.getElementById('res2').innerHTML = "Bạn vừa zoom trình duyệt thành công!";
});

//có thể đặt thêm 1 biến để lấy đối tượng
//var btn = document.getElementById('btn');
//hoặc thêm sự kiện luôn
document.getElementById('btn').addEventListener('click', function() {
	mul();
	//gọi đến hàm mul()
});

function mul() {
	var a = document.getElementById('a').value;
	var b = document.getElementById('b').value;
	document.getElementById('res3').innerHTML = Number(a) * Number(b);
}