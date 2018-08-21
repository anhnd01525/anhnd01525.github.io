// Bài 1
console.log('-----Bài 1-----');
console.log("Truyền vào hàm bai1() 2 tham số a và b để Test.")
function bai1(a, b) {
	if (typeof a != "number" && typeof b == "number") {
		return "A không là Number!";
	};
	if (typeof a == "number" && typeof b != "number") {
		return "B không là Number!";
	};
	if (typeof a != "number" && typeof b != "number") {
		return "A và B không là Number!";
	};
	if (typeof a == "number" && typeof b == "number") {
		if (a > b ) {
			return "A và B là Number!" + " " + "Số lớn hơn là A: " + a;
		};
		if (a < b) {
			return "A và B là Number!" + " " + "Số lớn hơn là B: " + b;
		};
	};
};

// Bài 2
console.log('-----Bài 2-----');
console.log("Truyền vào hàm bai2() 1 số nguyên dương để Test.")
function bai2(n) {
	if (n <= 0) {
		return "Số nhập vào không phải là số nguyên dương(Integer)!";
	};
	if (n > 0) {
		var i;
		var gt = 1;
		for (i = 1; i <= n; i++) {
		    gt = gt * i;
		}
		return "Giai thừa của " + n + " là: " + gt;
	};
}

// Bài 3
console.log('-----Bài 3-----');
function bai3(arr) {
	var arr2 = [];
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] % 2 == 0) {
			arr2.push(arr[i]);
		}
	}
	arr2.sort(function(a, b){return b-a});
	return arr2;
}
console.log('Testcase');
arr = [3,6,8,4,2,7,10];
console.log('Mảng ban đầu:',arr);
console.log('Mảng chẵn giảm dần:',bai3(arr));
console.log("Truyền vào hàm bai3() 1 mảng bất kỳ để tự test!");

// Bài 4
console.log('-----Bài 4-----');
var acc1 = {
	userName: "duyanh",
	passWord: "secret",
	conFirm: "secret"
};

function bai4(acc) {
	if (acc.userName.length == "" || acc.userName == " ") {
		return "Tên đăng nhập rỗng! Nhập lại!";		
	} else if (acc.userName.length > 20) {
		return "Tên đăng nhập quá dài! Nhập lại";			
	} else if (acc.passWord.length < 6) {
		return "Mật khẩu quá ngắn! Nhập lại!";			
	} else if (acc.passWord.length > 32) {
		return "Mật khẩu quá dài! Nhập lại!" ;
	} else if (acc.conFirm != acc.passWord) {
		return "Xác nhận mật khẩu bị sai!";
	};
	
	if (acc.userName.length <= 20 && acc.userName.length != "" && acc.userName != " " && acc.passWord.length >= 6 && acc.passWord.length <= 32 && acc.conFirm == acc.passWord) {
		console.log("User name:",acc.userName);
		console.log("Password:",acc.passWord);	
		return "Confirm!";
	};	
};

var acc2 = {
	userName: "nguyenduyanhnguyenduyanh",
	passWord: "secret",
	conFirm: "secret"
};
var acc3 = {
	userName: "duyanh03",
	passWord: "secr",
	conFirm: "secr"
};
var acc4 = {
	userName: "duyanh04",
	passWord: "secretsecretsecretsecretsecretsecret",
	conFirm: "secretsecretsecretsecretsecretsecret"
};
var acc5 = {
	userName: "duyanh05",
	passWord: "secret",
	conFirm: "secr"
};
var acc6 = {
	userName: " ",
	passWord: "secret",
	conFirm: "secret"
};
console.log('Testcase');
console.log("Nhập tài khoản 1:",acc1);
console.log(bai4(acc1));
console.log("Nhập tài khoản 2:",acc2);
console.log(bai4(acc2));
console.log("Nhập tài khoản 3:",acc3);
console.log(bai4(acc3));
console.log("Nhập tài khoản 4:",acc4);
console.log(bai4(acc4));
console.log("Nhập tài khoản 5:",acc5);
console.log(bai4(acc5));
console.log("Nhập tài khoản 6:",acc6);
console.log(bai4(acc6));