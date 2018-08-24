// Bài 1
console.log('-----Bài 1-----');
console.log('Gọi hàm bai1() để hiển thị Thời gian hiện tại!');
function bai1() {
	var now = new Date();
	var date = now.getDate();
	var month = now.getMonth() + 1;
	var year = now.getFullYear();
	var season;

	if (month <= 3) {
		season = "Spring";
	} else if (month <= 6) {
		season = "Summer";
	} else if (month <= 9) {
		season = "Autumn";
	} else {
		season = "Winter";
	}
	return date + "/" + month + "/" + year + ": " + season;
}

// Bài 2
console.log('-----Bài 2-----');
console.log('Truyền chuỗi bất kỳ vào hàm bai2()')
function bai2(test) {
	if (typeof(test) != String) {
		var t = test.toString();
		if (t.length < 10) {
			return t;
		} else {
			var tt = t.slice(0,10) + '...';
			return tt + " Chuỗi có độ dài > 10";
		}
	} else {
		if (test.length < 10) {
			return test;
		} else {
			var test2 = test.slice(0,10) + '...';
			return test2 + " Chuỗi có độ dài > 10";
		}
	}
}

// Bài 3
console.log('-----Bài 3-----');
console.log('Nhập vào điểm kiểm tra x dưới dạng số (0 <= x <= 10) vào hàm bai3()');
function bai3(x) {
	if (typeof(x) != "number") {
		return "Nhập sai! Bạn cần nhập vào số!";
	} else if (x < 0 || x > 10) {
		return "Nhập sai! Bạn chỉ được nhập số trong khoảng 0 <= x <= 10!";
	} else {
		if (x <= 3.9) {
			return "Bạn được điểm: F";
		} else if (x <= 5.4) {
			return "Bạn được điểm: D";
		} else if (x <= 6.9) {
			return "Bạn được điểm: C";
		} else if (x <= 8.4) {
			return "Bạn được điểm: B";
		} else {
			return "Bạn được điểm: A";
		}
	}
}

// Bài 4
console.log('-----Bài 4-----');
console.log('Truyền vào hàm translate() mã Quốc Gia để tiến hành chuyển đổi ngôn ngữ:');
console.log('Nhật Bản: JP');
console.log('Hàn Quốc: KR');
console.log('Trung Quốc: CN');
console.log('Pháp: FR');
console.log('Đức: DE');
function translate(y) {
	switch(y) {
		case "JP":
			return "Konnichiwa";
			break;
		case "KR":
			return "Yeoboseyo";
			break;
		case "CN":
			return "Nǐ hǎo";
			break;
		case "FR":
			return "Bonjour";
			break;
		case "DE":
			return "Hallo";
			break;
		default:
			return "Xin chào";
			break;
	}
}

// Bài 5
console.log('-----Bài 5-----');
console.log('Truyền vào hàm bai5() một mảng gồm các giá trị true và false.');
function bai5(arr) {
	if (Array.isArray(arr)) {
		for (var i = 0; i < arr.length; i++) {
			if (arr[i] == true) {
				return "True xuất hiện lần đầu ở vị trí: " + (i+1);
			}	
		}
	} else {
		return "Đầu vào không phải là mảng! Nhập lại!";
	}
}
console.log('Testcase');
var arr1 = [false, false, false, true, false, true, false, true];
console.log('Mảng 1: ',arr1);
console.log(bai5(arr1));
var arr2 = [true,true,false,false,true,true];
console.log('Mảng 2: ',arr2);
console.log(bai5(arr2));

// Bài 6
console.log('-----Bài 6-----');
console.log('Dãy số từ 1 đến 100');
