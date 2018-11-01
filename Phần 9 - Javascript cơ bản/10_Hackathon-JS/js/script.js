// Bài 9
console.log("Bài 9")
console.log("Truyền chuỗi vào hàm bai9()")
console.log("-------------\n")
function bai9(str) {
	return str + " la so 1"
}

// Bài 8
console.log("Bài 8")
console.log("Truyền số > 10000 vào hàm bai8()")
console.log("-------------")
function bai8(num) {
	if (num <= 10000) {
		return "Số nhập vào phải > 10000. Nhập lại!"
	}
	var len = num.toString();
	var test = 0;
	var n;
	while(num > 0) {
		n = num % 10;
		if (n % 2 == 0) {
			test++
		}
		num = parseInt(num/10);
	}
	if(test == len.length) {
		return true
	}
	return false;
}

// Bài 7
console.log("Bài 7")
console.log("Truyền vào hàm arrReplace() 3 tham số: mảng đầu vào, ký tự muốn thay, ký tự thay thế")
console.log("-------------")
function arrReplace(arr, x, y) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] == x) {
			arr[i] = y;
		}
	}
	return arr
}

// Bài 4
console.log("Bài 4")
console.log("Truyền vào hàm bai4() Mảng các số và tính tích các số liền kề nhau")
console.log("-------------")
function bai4(arr) {
	var maxx = 0;
	//console.log(arr)
	for (var i = 0; i <= arr.length - 2; i++) {
		//console.log("i là: ",arr[i]);
		for (var j = i+1; j <= arr.length - 1; j++) {
			//console.log("j là: ",arr[j]);
			if (maxx < arr[i]*arr[j]) {
				maxx = arr[i]*arr[j];				
			}
		}
	}
	return maxx;
}

// Bài 3
console.log("Bài 3")
console.log("Truyền vào hàm bai3() Mảng các số nguyên dương")
console.log("-------------")
function bai3(arr) {
	for (var i = 0; i <= arr.length - 2; i++) {
		for (var j = i+1; j <= arr.length - 1; j++) {
			if (arr[i] >= arr[j]) {
				return false;
			}
		}
	}
	return true;
}

// Bài 2
console.log("Bài 2")
console.log("Truyền vào hàm bai2() 2 chuỗi")
console.log("-------------")
function bai2(str, str2) {
	var arr = str2.split("");
	for (var i = 0; i <= arr.length - 1; i++) {
		if (str.includes(arr[i]) == false) {
			return false;
		}
	}
	return true;
}

// Bài 1
console.log("Bài 1")
console.log("Truyền vào hàm bai1() 1 chuỗi")
console.log("-------------")
function bai1(str) {
	if (str.includes('?') == true) {
		str = str.replace('?', '');
	}
	if (str.includes(',') == true) {
		str = str.replace(',', '');
	}
	if (str.includes('.') == true) {
		str = str.replace('.', '');
	}
	if (str.includes('!') == true) {
		str = str.replace('!', '');
	}
	arr = str.split(" ");
	var maxCount = 0;
	var maxStr = '';
	
	for (var i = 0; i <= arr.length - 1; i++) {
		if (maxCount < arr[i].length) {
			maxCount = arr[i].length;
			maxStr = arr[i];
			var arr2 = [];
			arr2.push(maxCount, maxStr);
		} 
		else if (maxCount == arr[i].length) {
			maxCount = arr[i].length;
			maxStr = arr[i];
			arr2.push(maxCount, maxStr);
		}
	}
	return arr2;
}