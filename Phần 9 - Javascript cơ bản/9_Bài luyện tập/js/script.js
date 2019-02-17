// Bài 1
function bai1(a,b,c) {
	var max;
	max = a;
	if (max < b) {
		max = b;
	}
	if (max < c) {
		max = c;
	}
	return max + " là số lớn nhất"
}

// Bài 2
function bai2(hour,salary) {
	var total;
	if (hour <= 40) {
		total = hour * salary;
	} else {
		var ot = hour - 40;
		total = (40 * salary) + (ot * salary * 2)
	}
	return total;
}

// Bài 3
function bai3(a,b,c) {
	if (a + b > c && b + c > a && c + a > b) {
		return "Yes";
	}
	return "No";
}

// Bài 4
function bai4(a,b) {
	if (a > b) {
		var temp;
		temp = a;
		a = b;
		b = temp;
	}
	for(var i = a; i < b; i++) {
		console.log(i);
	}
	return b;
}

// Bài 5
function bai5(n) {
	var sum = 0;
	for(var i = 0; i <= n; i++) {
		sum += i;
	}
	return sum;
}

// Bài 6
function bai6(n) {
	var sum = 0;
	for(var i = 0; i <= n; i++) {
		if(i % 2 != 0) {
			sum += i;
		}
	}
	return sum;
}

// Bài 7
function bai7(n) {
	if (n < 2) {
		return n + " không phải là số nguyên tố"
	}
	for(var i = 2; i < n; i++) {
		if (n % i == 0) {
			return n + " không phải là số nguyên tố"
		}
	}
	return n + " là số nguyên tố"
}

// Bài 8
function uCLN(a, b) {
	var minn = a;
	if (a > b) {
		minn = b;
	}
	var uC;
	for(var i = minn; i > 0; i--) {
		if (a % i == 0 && b % i == 0) {
			uC = i;
			return uC;
		}
	}
}

function bCNN(a, b) {
	var bC = (a * b) / uCLN(a, b);
	return bC;
}

function bai8(a, b) {
	return [uCLN(a, b), bCNN(a, b)];
}

// Bài 9
// Cách 1:
function bai9(n) {
	var sum = 0;
	var m;
	while(n > 0) {
		m = n % 10;
		sum += m;
		n = parseInt(n/10);
	}
	return sum;
}

// Cách 2:
// function bai9(n) {
// 	var toStrNum = n.toString();
// 	var sum = 0;
// 	var len = toStrNum.length;
// 	for (var i = 0; i < len; i++) {
// 		var temp = parseInt(toStrNum[i]);
// 		sum += temp;
// 	}
// 	return sum;
// }

// Bài 10
// Cách 1:
function bai10(n) {
	var maxx = 0;
	var m;
	while(n > 0) {
		m = n % 10;
		if (m > maxx) {
			maxx = m;
		}
		n = parseInt(n/10);
	}
	return maxx;
}

// Cách 2:
// function bai10(n) {
// 	var toStrNum = n.toString();
// 	var maxx = 0;
// 	var len = toStrNum.length;
// 	for (var i = 0; i < len; i++) {
// 		var temp = parseInt(toStrNum[i]);
// 		if (temp > maxx) {
// 			maxx = temp
// 		}
// 	}
// 	return maxx;
// }

// Bài 11
function bai11(n) {
	var maxx1 = n%10;
	var maxx2 = -1;
	var temp;
	while(n > 0) {
		temp = n % 10;
		if (temp > maxx1) {
			maxx2 = maxx1;
			maxx1 = temp;
		}
		if (temp > maxx2 && temp < maxx1) {
			maxx2 = temp;
		}
		n = parseInt(n/10)
	}
	console.log(maxx1);
	if (maxx2 == -1) {
		return "No Max 2"
	} else {
		return maxx2;
	}
}

// Bài 12
function bai12(n) {
	if (n > 32767) {
		return "Số quá lớn, nhập lại!"
	} else {	
		for (var number = 1; number <= n; number++) {
			var sum = 0;
			for (var i = 1; i <= number/2; i++){
				if (number % i == 0) {
					sum += i;
				}
			}
			if (sum == number) {
				console.log(number);
			}
		}	
	}
	return "Là những số hoàn hảo."
}