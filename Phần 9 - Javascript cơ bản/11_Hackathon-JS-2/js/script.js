// Bài 4
console.log("Bài 4:")
console.log("Gọi hàm bai4() để in ra chữ H")
console.log("-------------")
function bai4(n) {
	// var str = " ";
	// str += '\n' + " * " + " \xa0 " + " \xa0 " + " \xa0 " + " * ";
	// str += '\n' + " * " + " \xa0 " + " \xa0 " + " \xa0 " + " * ";
	// str += '\n' + " * " + " \xa0 " + " \xa0 " + " \xa0 " + " * ";
	// str += '\n' + " * " + " * " + " * " + " * " + " * ";
	// str += '\n' + " * " + " \xa0 " + " \xa0 " + " \xa0 " + " * ";
	// str += '\n' + " * " + " \xa0 " + " \xa0 " + " \xa0 " + " * ";
	// str += '\n' + " * " + " \xa0 " + " \xa0 " + " \xa0 " + " * ";
	// return str;

	var str = '\n';
	for (var i = 1; i <= n; i++) {
		for (var j = 1; j <= n; j++) {
			if (j == 1 || j == n || i == Math.round(n/2)) {
				str += " * ";
			} else {
				str += " \xa0 ";
			}
		}
		str += '\n';
	}
	return str;
}

// Bài 3
console.log("Bài 3:")
console.log("Truyền vào hàm bai3() 2 mảng các số")
console.log("-------------")
function bai3(arr1, arr2) {
	// if (arr1.length > arr2.length) {
	// 	var temp;
	// 	temp = arr1;
	// 	arr1 = arr2;
	// 	arr2 = temp;
	// }

	var len1 = arr1.length;
	var len2 = arr2.length;
	var arrTemp = [];

	// chạy vòng lặp for i duyệt qua từng phần tử của mảng arr1
	// xét điều kiện, nếu mảng arr2 không chứa 1 phần tử nào đó của mảng arr1
	// thì push phần tử đó vào mảng arrTemp 
	for (var i = 0; i <= len1 - 1; i++) {
		if (arr2.includes(arr1[i]) == false) {
			arrTemp.push(arr1[i]);
		}
	}

	// tương tự như trên
	// chạy vòng lặp for i duyệt qua từng phần tử của mảng arr2
	// xét điều kiện, nếu mảng arr1 không chứa 1 phần tử nào đó của mảng arr2
	// thì push phần tử đó vào mảng arrTemp
	for (var i = 0; i <= len2 - 1; i++) {
		if (arr1.includes(arr2[i]) == false) {
			arrTemp.push(arr2[i])
		}
	}
	// kết thúc 2 vòng lặp, ta được mảng arrTemp gồm các số khác nhau của 2 mảng arr1 và arr2
	
	// gọi hàm sort sắp xếp mảng arrTemp từ lớn đến bé
	arrTemp.sort(function(a, b){return b - a});
	// xét điều kiện mảng arrTemp
	// nếu arrTemp = [] => 2 mảng ko có phần tử nào khác nhau => return fail
	// ngược lại => return arrTemp
	if (arrTemp.length == 0) {
		return "MISION FAILED";
	} else {
		return arrTemp;
	}

	// CODE NGÁO ĐÁ VL
	// // chạy 2 vòng lặp lồng nhau, duyệt từng phần tử của từng mảng
	// // nếu phần tử i của arr1 == phần tử j của arr2
	// // thì xóa phần tử j đó khỏi arr2 và thay bằng phần tử " "
	// for (var i = 0; i <= len1 - 1; i++) {
	// 	for (var j = 0; j <= len2 - 1; j++) {
	// 		if (arr1[i] == arr2[j]) {
	// 			arr2.splice(j,1," ");
	// 		}						
	// 	}
	// }
	// // kết thúc vòng lặp, ta đc mảng arr2 gồm những phần từ mà arr1 không có
	// // dùng hàm filter lọc ra những phần tử " " của arr2
	// arr2 = arr2.filter(function(x){
	//   return (x !== (undefined || null || ' '));
	// });
	// // dùng hàm concat nối arr2 vào arrTemp và gán kết quả vào mảng mới là arrResult
	// var arrResult = arrTemp.concat(arr2);
	// // dùng hàm sort để sắp xếp mảng arrResult từ lớn đến bé
	// arrResult.sort(function(a, b){return b - a});

	// if (arrResult.length == 0) {
	// 	return "MISION FAILED";
	// } else {
	// 	return arrResult;
	// }
}

// Bài 1
console.log("Bài 1:")
console.log("Truyền vào hàm bai1() 1 mảng các số")
console.log("-------------")
// Chú ý input bài này là argument
function bai1(...args) {
	var len = args.length;
	var total = 0;
	for (var i = 0; i <= len - 1; i++) {
		total += args[i];
	}
	return total + " " + len;
}

// Bài 2
const DATA = [{
  "id": 1,
  "firstName": "Heidi",
  "lastName": "Josilowski",
  "carName": "Chrysler",
  "carModelYear": 1996
}, {
  "id": 2,
  "firstName": "Ezekiel",
  "lastName": "Corcoran",
  "carName": "Land Rover",
  "carModelYear": 2008
}, {
  "id": 3,
  "firstName": "Giana",
  "lastName": "Ewols",
  "carName": "Lincoln",
  "carModelYear": 1993
}, {
  "id": 4,
  "firstName": "Manfred",
  "lastName": "Betteney",
  "carName": "Audi",
  "carModelYear": 2001
}, {
  "id": 5,
  "firstName": "Levey",
  "lastName": "Nursey",
  "carName": "Dodge",
  "carModelYear": 1996
}, {
  "id": 6,
  "firstName": "Sheff",
  "lastName": "Burgan",
  "carName": "Nissan",
  "carModelYear": 2008
}, {
  "id": 7,
  "firstName": "Benji",
  "lastName": "Nel",
  "carName": "Volkswagen",
  "carModelYear": 1991
}, {
  "id": 8,
  "firstName": "Wilie",
  "lastName": "Allender",
  "carName": "Acura",
  "carModelYear": 2012
}, {
  "id": 9,
  "firstName": "Eolande",
  "lastName": "McCloud",
  "carName": "Kia",
  "carModelYear": 2009
}, {
  "id": 10,
  "firstName": "Allyn",
  "lastName": "Notman",
  "carName": "Hyundai",
  "carModelYear": 1995
}]

console.log("Bài 2:")
console.log("2.1: Truyền vào hàm bai2_1() tên loại xe, In ra thông tin người dùng sở hữu một loại xe đấy")
function bai2_1(str) {
	for (var i = 0; i < DATA.length; i++) {
		if (DATA[i].carName === str) {
			return DATA[i].firstName + " " + DATA[i].lastName;
		}
	}
	return "";
}

console.log("2.2: Truyền vào hàm bai2_2() 1 năm nào đó, In ra những loại xe có carModelYear lớn hơn năm đó.")
function bai2_2(n) {
	var arr = []
	for (var i = 0; i < DATA.length; i++) {
		if (DATA[i].carModelYear > n) {
			arr.push(DATA[i].carName);
		}
	}
	return arr;
}

console.log("2.3: Gọi đến hàm bai2_3() Sắp xếp dữ liệu trên thứ tự từ nhỏ đến lớn theo carModelYear")
function bai2_3() {
	DATA.sort(function(a, b) {
		var yearA = a.carModelYear;
		var yearB = b.carModelYear;
		if (yearA < yearB) {
			return -1;
		}
		if (yearA > yearB) {
			return 1;
		}
		return 0
	});
	
	for (var i = 0; i < DATA.length-1; i++) {
		console.log(DATA[i]);
	}
	return DATA[DATA.length-1];
}

console.log("2.4 Gọi đến hàm bai2_4() Sắp xếp dữ liệu trên thứ tự bảng chữ cái theo carName")
function bai2_4() {
	DATA.sort(function(a, b) {
		var nameA = a.carName;
		var nameB = b.carName;
		if (nameA < nameB) {
			return -1;
		}
		if (nameA > nameB) {
			return 1;
		}
		return 0
	});

	for (var i = 0; i < DATA.length-1; i++) {
		console.log(DATA[i]);
	}
	return DATA[DATA.length-1];
}