// Bài 4
console.log("Bài 4:")
console.log("Gọi hàm bai4() để in ra chữ H")
console.log("-------------")
function bai4() {
	var str = " ";
	str += '\n' + " * " + " \xa0 " + " \xa0 " + " \xa0 " + " * ";
	str += '\n' + " * " + " \xa0 " + " \xa0 " + " \xa0 " + " * ";
	str += '\n' + " * " + " \xa0 " + " \xa0 " + " \xa0 " + " * ";
	str += '\n' + " * " + " * " + " * " + " * " + " * ";
	str += '\n' + " * " + " \xa0 " + " \xa0 " + " \xa0 " + " * ";
	str += '\n' + " * " + " \xa0 " + " \xa0 " + " \xa0 " + " * ";
	str += '\n' + " * " + " \xa0 " + " \xa0 " + " \xa0 " + " * ";
	return str;
}

// Bài 3
console.log("Bài 3:")
console.log("Truyền vào hàm bai3() 2 mảng các số")
console.log("-------------")
function bai3(arr1, arr2) {
	if (arr1.length > arr2.length) {
		var temp;
		temp = arr1;
		arr1 = arr2;
		arr2 = temp;
	}

	var len1 = arr1.length;
	var len2 = arr2.length;
	var arrTemp = [];
	var count = 0;

	for (var i = 0; i <= len1 - 1; i++) {
		if (arr2.includes(arr1[i]) == false) {
			arrTemp.push(arr1[i]);
		}
	}

	for (var i = 0; i <= len1 - 1; i++) {
		for (var j = 0; j <= len2 - 1; j++) {
			if (arr1[i] == arr2[j]) {
				arr2.splice(j,1," ");
			}
			
		}

	}

	arr2 = arr2.filter(function(x){
	  return (x !== (undefined || null || ' '));
	});
	var arrResult = arrTemp.concat(arr2);
	arrResult.sort(function(a, b){return b - a});

	if (arrResult.length == 0) {
		return "MISION FAILED";
	} else {
		return arrResult;
	}
}

// Bài 1
console.log("Bài 1:")
console.log("Truyền vào hàm bai1() 1 mảng các số")
console.log("-------------")
function bai1(arr) {
	var len = arr.length;
	var total = 0;
	var result = []
	for (var i = 0; i <= len - 1; i++) {
		total += arr[i];
	}
	result.push(total);
	result.push(len);
	return result;
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
	for (var i = 1; i < DATA.length; i++) {
		if (DATA[i].carName === str) {
			return DATA[i].firstName + " " + DATA[i].lastName;
		} else {
			return "";
		}
	}
}

console.log("2.2: Truyền vào hàm bai2_2() 1 năm nào đó, In ra những loại xe có carModelYear lớn hơn năm đó.")
function bai2_2(n) {
	var arr = []
	for (var i = 1; i < DATA.length; i++) {
		if (DATA[i].carModelYear > n) {
			arr.push(DATA[i].carName);
		}
	}
	return arr;
}