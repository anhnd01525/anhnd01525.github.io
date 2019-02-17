// Bài 9
console.log("Bài 9")
console.log("Truyền chuỗi vào hàm bai9()")
console.log("-------------\n")
function bai9(str) {
	var text = " la so 1";
	return str + text;
}

// Bài 8
console.log("Bài 8")
console.log("Truyền số > 10000 vào hàm bai8()")
console.log("-------------")
// Cách 1
function bai8(num) {
	if (num <= 10000) {
		return "Số nhập vào phải > 10000. Nhập lại!"
	}
	var n;

	// vòng lặp while mỗi 1 lần lặp chia 10 để lấy ra từng chữ số, từ chữ số cuối đến đầu
	while(num > 0) {
		// biến n gán = kết quả của phép chia 10 lấy phần dư (%10), chính là chữ số cuối
		n = num % 10;
		// xét điều kiện n có phải số chẵn ko
		if (n % 2 == 1) {
			// nếu n % 2 == 1, tức là có 1 chữ số lẻ => sai, trả về false
			return false
		}
		// số ban đầu chia 10 để bỏ đi chữ số cuối cùng
		num = parseInt(num/10);
	}
	// kết thúc vòng while ko có kết quả nào false, trả về true
	return true;
}

// Cách 2
// function bai8(num) {
// 	if (num <= 10000) {
// 		return "Số nhập vào phải > 10000. Nhập lại!"
// 	}
// 	// chuyển số num thành string gán vào biến strNum
// 	var strNum = num.toString();
// 	var len = strNum.length;

// 	// vòng for chạy từ i = 0 đến chiều dài của strNum
// 	for (var i = 0; i < len; i++) {
// 		// chuyển phần tử thứ i của strNum thành số gán vào biến temp
// 		var temp = parseInt(strNum[i]);
// 		// kiểm tra điều kiện của temp, tức là kiểm tra từng phần tử của strNum
// 		if (temp % 2 !== 0) {
// 			// nếu temp % 2 !== 0, tức là số lẻ
// 			// thì trả về false
// 			return false;
// 		}
// 	}
// 	// ngược lại, nếu tất cả các số temp đều ko phải số lẻ
// 	// trả về true
// 	return true;
// }

// Bài 7
console.log("Bài 7")
console.log("Truyền vào hàm arrReplace() 3 tham số: mảng đầu vào, ký tự muốn thay, ký tự thay thế")
console.log("-------------")
function arrReplace(arr, x, y) {
	// tạo 1 mảng mới res
	var res = [];
	var len = arr.length;
	// chạy vòng for duyệt từng phần tử của mảng đầu vào
	for (var i = 0; i < len; i++) {
		// kiểm tra điều kiện của từng phần tử
		if (arr[i] == x) {
			// nếu phần tử thứ i == x (ký tự muốn thay thế)
			// thì push y (ký tự thay thế) vào mảng res
			res.push(y);
		} else {
			// ngược lại nếu phần tử thứ i != x
			// thì push arr[i] vào mảng res
			res.push(arr[i]);
		}
	}
	return res;
}

// Bài 6
console.log("Bài 6")
console.log("Truyền vài hàm bai6() một Mảng các đoạn text có độ dài bằng nhau")
console.log("-------------")
// Cách 1
// function bai6(arr) {
// 	// biến len gán = chiều dài của mảng arr
// 	var len = arr.length;
// 	// biến lenElement gán = chiều dài của phần tử đầu tiên của mảng arr
// 	var lenElement = arr[0].length;
// 	var res = [];
// 	var star = "";

// 	// vòng lặp for chạy từ i = 0 đến (chiều dài của phần tử đầu tiên của mảng arr + 2)
// 	// vì ta thấy 1 phần tử của mảng mới > phần tử của mảng đầu vào là 2 phần tử
// 	for (var i = 0; i < lenElement + 2; i++) {
// 		// mỗi lần chạy + dồn ký tự * vào chuỗi star
// 		star += "*";
// 	}
// 	// kết thúc vòng lặp, ta có chuỗi star có số ký tự * = chiều dài của mảng + 2
// 	// ví dụ phần tử của mảng đầu vào có chiều dài = 3, => ta có chuỗi star = 3 + 2 = 5 (*****)
// 	// chuỗi star này chính là phần tử đầu tiên và phần tử cuối cùng của mảng kết quả
// 	// ta push chuỗi star vào mảng res là mảng kết quả
// 	res.push(star);

// 	// vòng lặp for chạy từ i = 0 đến chiều dài của mảng arr
// 	// vòng lặp này để in ra các phần tử ở giữa của mảng kết quả
// 	// và số lượng các phần tử ở giữa chính là = chiều dài của mảng arr
// 	for (var i = 0; i < len; i++) {
// 		// chuỗi temp chứa các phần tử ở giữa = phần tử thứ i của mảng arr được bao bởi 2 ký tự *
// 		var temp = "*" + arr[i] + "*";
// 		// push chuỗi temp vào mảng kết quả res
// 		res.push(temp);
// 	}
// 	// kết thúc vòng lặp, ta có mảng res có phần tử đầu tiên là chuỗi star và các phần tử ở giữa là chuỗi temp

// 	// ta push chuỗi star vào mảng res thêm 1 lần nữa, chính là phần tử cuối cùng của mảng res
// 	res.push(star);

// 	// for (var i = 0; i < res.length; i++) {
// 	// 	console.log(res[i]);
// 	// }
// 	return res;
// }

// Cách 2
function bai6(arr) {
	var str = '';
	var arrNew = [];
	var len = arr.length;
	var lenElement = arr[0].length;
	// chạy 2 vòng for 
	// vòng for j bên trong để in ra từng phần tử của mảng như yêu cầu
	// vòng for i bên ngoài để push từng phần tử vào 1 mảng mới
	
	// vòng for i bên ngoài, chạy từ 0 đến (chiều dài của mảng + 2), vì ta thấy mảng mới > mảng đầu vào 2 phần tử 
	for (var i = 0; i < len + 2; i++) {
		// vòng for j bên trong, chạy từ 0 đến (chiều dài của phẩn tử đầu tiên của mảng ban đầu + 2)
		// vì các phần tử của mảng đầu vào đều có chiều dài bằng nhau nên ta chọn arr[0] luôn
		// và từng phần tử của mảng mới cũng có chiều dài > mảng đầu vào 2 đơn vị
		for (var j = 0; j < lenElement + 2; j++) {
			// kiểm tra điều kiện từng vị trí để in ra các phần tử của mảng mới
			if (i == 0 || i == len + 1 || j == 0 || j == lenElement + 1) {
				// nếu i và j ở các vị trí đầu tiên và cuối cùng thì + dồn ký tự * vào chuỗi str
				// để tạo thành các ký tự * bao lấy phần tử của mảng ban đầu 
				str += '*';
			} else {
				// những vị trí còn lại, tức là vị trí ở bên trong thì in ra phần tử của mảng ban đầu
				// i-1 và j-1 là để trả về đúng vị trí của từng ký tự từng phần tử con của mảng ban đầu
				// vì với i = 0 và j = 0 ta đã in ra ký tự * như ở trên
				str += arr[i-1][j-1];
			}
		}
		// kết thúc vòng lặp j, ta được 1 chuỗi str, chính là 1 phần tử của mảng mới theo yêu cầu
		console.log(str);
		// push str đó vào mảng mới arrNew		
		arrNew.push(str);		
		// gán lại giá trị của str = '' để tiếp tục vòng lặp j tiếp theo
		str = '';	
	}
	return arrNew;
}

// Bài 5
console.log("Bài 5")
console.log("Truyền vào hàm bai5() Mảng các số nguyên dương")
console.log("-------------")
function bai5(arr) {
	// gọi hàm sort() để sắp xếp mảng đầu vào theo thứ tự tăng dần
	arr.sort();
	var arr2 = [];
	var lastElement = arr[arr.length-1];
	// vòng for chạy từ 1 đến phần tử cuối cùng của mảng ban đầu
	// vì mảng đã đc sắp xếp nên phần tử cuối là phần tử lớn nhất
	for (var i = 1; i <= lastElement; i++) {
		// kiểm tra điều kiện của i
		if (arr.indexOf(i) == -1) {
			// nếu trong mảng ban đầu ko có số i đó indexOf(i) == -1
			// thì ta push i vào mảng mới
			arr2.push(i);
		}
		// (arr.indexOf(i) == -1) <=> (arr.includes(i) == false)
		// if (!arr.includes(i)) {
		// 	arr2.push(i);
		// }
	}
	return arr2;
}

// Bài 4
console.log("Bài 4")
console.log("Truyền vào hàm bai4() Mảng các số và tính tích các số liền kề nhau")
console.log("-------------")
function bai4(arr) {
	// gán cho biến maxx = tích của 2 phần tử đầu của mảng
	var maxx = arr[0] * arr[1];
	var len = arr.length;
	// vòng for i chạy từ i = 0 đến vị trí gần cuối của mảng (arr.length-2)
	for (var i = 0; i <= len - 2; i++) {
		// kiểm tra điều kiện, so sánh số maxx với tích của 2 số liên tiếp nhau (arr[i] * arr[i+1])
		if (maxx < arr[i] * arr[i+1]) {
			// nếu maxx < arr[i] * arr[i+1] thì gán maxx = arr[i] * arr[i+1]
			maxx = arr[i] * arr[i+1];				
		}
	}
	return maxx;
}

// Bài 3
console.log("Bài 3")
console.log("Truyền vào hàm bai3() Mảng các số nguyên dương")
console.log("-------------")
function bai3(arr) {
	var len = arr.length;
	// vòng for i chạy từ i = 0 đến vị trí gần cuối của mảng (arr.length-2)
	for (var i = 0; i <= len - 2; i++) {
		// kiểm tra điều kiện, so sánh 2 số liên tiếp nhau arr[i] và arr[i+1]	
		if (arr[i] >= arr[i+1]) {
			// nếu số trước >= số sau thì trả về false
			return false;
		}
	}
	// trả về true
	return true;
}

// Bài 2
console.log("Bài 2")
console.log("Truyền vào hàm bai2() 2 chuỗi")
console.log("-------------")
function bai2(str, str2) {
	// hoán vị 2 chuỗi đầu vào, nếu chuỗi 2 ngắn hơn thì đảo lên trc
	if (str.length > str2.length) {
		var temp;
		temp = str;
		str = str2;
		str2 = temp;
	}

	var arrTemp = [];
	// cắt chuỗi 1 thành mảng arr
	var arr = str.split("");
	var len = arr.length;
	// cắt chuỗi 2 thành mảng arr2
	var arr2 = str2.split("");
	var len2 = arr2.length;


	// chạy 2 vòng for để so sánh từng phần tử của mảng ngắn hơn với từng phần tử của mảng dài hơn
	
	// vòng for i bên ngoài duyệt qua từng phần tử của mảng arr là mảng ngắn hơn
	for (var i = 0; i <= len - 1; i++) {
		// vòng for j bên trong duyệt qua từng phần tử của mảng arr2 là mảng dài hơn
		for (var j = 0; j <= len2 - 1; j++) {
			// kiểm tra điều kiện, so sánh phần tử thứ i của mảng ngắn hơn vs phần tử thứ j của mảng dài hơn
			if (arr[i] == arr2[j]) {
				// nếu arr[i] == arr2[j] thì push arr[i] (phần tử thứ i của mảng ngắn hơn) vào mảng arrTemp
				arrTemp.push(arr[i]);
				// console.log('arrTemp: ', arrTemp);
				// sau đó, ta thay thế arr2[j] (phần tử thứ j của mảng dài hơn) = 1 chuỗi rỗng " "
				// làm như vậy để khi vòng lặp i bên ngoài chạy lại thì ta sẽ ko phải duyệt qua phần tử đó nữa
				arr2.splice(j,1," ");
				// console.log('arr2 : ', arr2);
				// sau khi thay thế phần tử j của mảng dài hơn xong ta break lệnh if luôn
				// làm vậy để ko tiếp tục duyệt những phần tử phía sau của mảng arr2
				break;
			}			
		}
		// kết thúc 1 lần vòng lặp j bên trong, nếu phẩn tử arr[i] trùng với 1 phần tử arr2[j] nào đó
		// thì ở mảng arrTemp ta có 1 phần tử	
	}
	// kết thúc vòng lặp i bên ngoài, tức là ta đã duyệt qua hết các phần tử của arr
	// nếu có bao nhiêu phần tử của arr trùng vs phần tử của arr2 thì ta sẽ có mảng arrTemp tương ứng
	
	// console.log('arrTemp: ', arrTemp);
	// console.log('arr: ', arr);

	// kiểm tra điều kiện, so sánh chiều dài của mảng arrTemp vs arr (là mảng ngắn hơn)
	if (arrTemp.length != len) {
		// nếu chiều dài 2 mảng ko = nhau
		// => ko phải tất cả các phần tử của mảng arr đều thuộc mảng arr2
		// trả về false
		return false;
	} else {
		// ngược lại, nếu chiều dài 2 mảng = nhau
		// => tất cả các phần tử của mảng arr đều thuộc mảng arr2
		// trả về true
		return true;
	}
}

// Bài 1
console.log("Bài 1")
console.log("Truyền vào hàm bai1() 1 chuỗi")
console.log("-------------")
// Cách 1
function bai1(str) {
	// xóa các ký tự đặc biệt, \w biểu thị cho ký tự đặc biết, g-global tìm tất cả
	var strReplace = str.replace(/\W/g, " ");
	// console.log(strReplace);
	// cắt chuỗi đầu vào thành mảng các chuỗi
	arr = strReplace.split(" ");
	var len = arr.length;

	// biến maxCount: đếm ký tự trong 1 từ
	var maxCount = 0;
	// biến maxStr: chứa chuỗi con dài nhất
	var maxStr = '';
	
	// chạy vòng for i từ i = 0 đến phần tử cuối của mảng arr
	for (var i = 0; i <= len - 1; i++) {
		// kiểm tra điều kiện, so sánh biến maxCount với chiều dài của phần tử thứ i
		if (maxCount < arr[i].length) {
			// nếu maxCount < arr[i].length thì gán maxCount = arr[i].length
			maxCount = arr[i].length;
			// gán maxStr = arr[i]
			maxStr = arr[i];
			// khởi tạo 1 mảng mới arr2 để chứa maxCount và maxStr
			// khi vòng for chạy vòng tiếp theo nếu có 1 arr[i].length mới > maxCount
			// thì arr2 được khởi tạo lại
			var arr2 = [];
			// push maxCount và maxStr vào mảng arr2
			arr2.push(maxCount, maxStr);
		}
		// trường hợp nếu có phần tử tiếp theo mà cũng có chiều dài = phần tử dài nhất trước đó
		else if (maxCount == arr[i].length) {
			// lại gán maxStr = phần tử đó
			maxStr = arr[i];
			// push tiếp maxStr vào mảng arr2 có sẵn
			// như vậy arr2 sẽ có 2 maxStr có chiều dài lớn nhất
			arr2.push(maxStr);
		}
	}
	return arr2;
}

// Cách 2
// function bai1(str) {
// 	var strReplace = str.replace(/\W/g, " ");
// 	arr = strReplace.split(" ");

// 	// biến maxCount gán = chiều dài của phần tử đầu tiên của mảng arr
// 	// ko nên gán maxCount = 0 dù cũng ra dc kết quả
// 	var maxCount = arr[0].length;
// 	var len = arr.length;
	
// 	// chạy vòng for từ i = 0 đến hết chiều dài của mảng arr để tìm chiều dài lớn nhất
// 	for (var i = 0; i < len; i++) {
// 		// biến temp gán = chiều dài của phần tử thứ i
// 		var temp = arr[i].length;
// 		// kiểm tra điều kiện, so sánh maxCount vs temp
// 		if (maxCount <= temp) {
// 			// nếu maxCount <= temp thì gán maxCount = temp
// 			maxCount = temp;
// 		}
// 	}
// 	// kết thúc vòng for ta có biến maxCount là chiều dài lớn nhất của phần tử trong mảng

// 	// tạo biến res là mảng chứa kết quả
// 	var res = [];
// 	// push maxCount vào mảng res
// 	res.push(maxCount);

// 	// tạo biến maxStr là mảng chứa những phần tử có chiều dài lớn nhất (độ dài == maxCount)
// 	var maxStr = [];
// 	// hàm filter dùng để lọc ra những phần tử của mảng arr mà có độ dài == maxCount
// 	maxStr = arr.filter(word => word.length === maxCount);
// 	// push cả mảng maxStr vào mảng res
// 	res.push(maxStr);
	
// 	// var maxStr = [];
// 	// for (var i = 0; i < len; i++) {
// 	// 	if (maxCount === arr[i].length) {
// 	// 		maxStr.push(arr[i]);
// 	// 	}
// 	// }
// 	// res.push(maxStr);

// 	return res;
// }