// Bài 1
console.log('-----Bài 1-----');
function bai1(n) {
	var i;
	var gt = 1;
	for (i = 1; i <= n; i++) {
	    gt = gt * i;
	}
	return gt;
};
console.log('Testcase');
console.log('Giai thừa của 5 là:',bai1(5));
console.log('Giai thừa của 6 là:',bai1(6));

// Bài 2
console.log('-----Bài 2-----');
function bai2(str) {
	var i;
	var rev = '';
	for (i = str.length-1; i >= 0; i--) {
		rev += str[i];	
	}
	return rev;
};
console.log('Testcase');
var str = "Welcome to Techmaster";
console.log('Ta có chuỗi:',str);
console.log('Chuỗi đảo ngược là:',bai2(str));

// Bài 3
console.log('-----Bài 3-----');
function bai3(str) {
	var	dup = str;
	for (var i = 0; i < 9; i++) {
		dup += ('-' + str);
	};
	return dup;
};
console.log('Testcase');
var str = "123";
console.log(bai3(str));

// Bài 4
console.log('-----Bài 4-----');

// Bài 5
console.log('-----Bài 5-----');
function bai5(arr) {
	for (var i = 0; i < arr.length; i++) {
		arr[i] = arr[i] * 2;
	};
	return arr;
};
console.log('Testcase');
arr = [3,6,8,4,2,7];
console.log('Mảng ban đầu:',arr);
console.log('Double:',bai5(arr));

// Bài 6
console.log('-----Bài 6-----');
function bai6(arr) {
	for (var i = 0; i < arr.length; i++) {
		arr[i] = arr[i] % 2;
	};
	return arr;
};
console.log('Testcase');
arr = [3,5,8,10,2,9];
console.log('Mảng ban đầu:',arr);
console.log('Lấy % 2:',bai6(arr));