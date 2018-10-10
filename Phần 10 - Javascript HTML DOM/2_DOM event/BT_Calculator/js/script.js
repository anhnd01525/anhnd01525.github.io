// gán các element vào biến
var num = document.querySelectorAll(".btn-no");
var show = document.getElementById('show');
var result = document.getElementById('result');
var no0 = document.getElementById('btn-no0');
var dot = document.getElementById('btn-dot');
var equal = document.getElementById('btn-equal');
var divide = document.getElementById('btn-div');
var times = document.getElementById('btn-times');
var minus = document.getElementById('btn-minus');
var plus = document.getElementById('btn-plus');
var ce = document.getElementById('btn-ce');
var c = document.getElementById('btn-c');
var per = document.getElementById('btn-per');
var fac = document.getElementById('btn-fac');
var sQRT = document.getElementById('btn-sqrt');
var pOW = document.getElementById('btn-pow');

// Hàm bắt sự kiện khi click vào các nút số từ 1-9
// kiểm tra điều kiện
// chạy qua hàm checkNum, nếu checkNum == false thì ngăn ko cho click vào các nút số
// thỏa mãn điều kiện thì mỗi lần click sẽ cộng dồn số vào chuỗi đầu vào show.innerHTML
// nếu chuỗi đầu vào có chứa ký tự đường dẫn ảnh căn bậc 2 thì gọi đến hàm tính căn bậc 2 là squareRoot()
// ngược lại nếu chuỗi đầu vào chứa các kí tự khác là ^ + - x /
// thì gọi đến các hàm tính toán là thePower(), operatorAdd(), operatorSub(), operatorMul(), operatorDiv()
num.forEach(function(element) {
	element.addEventListener('click',function() {
		if (checkNum(show.innerHTML) == false) {
			event.preventDefault();
		} else {
			show.innerHTML += element.textContent;
		}
		if (show.innerHTML.includes('<img src="img/square-root.png">') == true) {
			squareRoot();
		} else {
			thePower();
			operatorAdd();
			operatorSub();
			operatorMul();
			operatorDiv();
		}
	})
})

// Hàm bắt sự kiện khi click vào nút số 0
// phải chạy qua 2 hàm checkNum và checkZero để kiểm tra đầu vào
no0.addEventListener('click', function() {
	if (checkNum(show.innerHTML) == false) {
		event.preventDefault();
	} else if (checkZero(show.innerHTML) == false) {
		event.preventDefault();		
	} else {
		show.innerHTML += no0.innerHTML;
	}
	if (show.innerHTML.includes('<img src="img/square-root.png">') == true) {
		squareRoot();
	} else {
		thePower();
		operatorAdd();
		operatorSub();
		operatorMul();
		operatorDiv();
	}
})

// Hàm bắt sự kiện khi click vào nút dấu .
// chạy qua hàm 2 hàm checkDot và checkDot2 để kiểm tra điều kiện
// nếu false thì ngăn ko cho click vào nút dấu .
// trường hợp chuỗi đầu vào == "" cũng ngăn ko cho click vào nút dấu .
// thỏa mãn tất cả các điều kiện thì cộng thêm dấu . vào chuỗi
dot.addEventListener('click', function() {
	if (checkDot(show.innerHTML) == false || checkDot2(show.innerHTML) == false || show.innerHTML == "") {
		event.preventDefault();
	} else {
		console.log(show.innerHTML);
		show.innerHTML += dot.innerHTML;
	}
})

// Hàm bắt sự kiện khi click vào nút =
// kiểm tra điều kiện, nếu chuỗi kết quả = rỗng hoặc ký tự cuối cùng của chuỗi đầu vào là + - x / . ^
// thì ngăn ko cho click vào nút =
// thỏa mãn điều kiện thì click được vào nút =
// khi đó chuỗi đầu vào được gán = chuỗi kết quả và chuỗi kết quả sẽ dc xóa đi
equal.addEventListener('click', function() {
	if (result.innerHTML == "" || show.innerHTML.endsWith('/') == true || show.innerHTML.endsWith('x') == true ||
		show.innerHTML.endsWith('+') == true || show.innerHTML.endsWith('-') == true || 
		show.innerHTML.endsWith('.') == true || show.innerHTML.endsWith('^') == true) {
		event.preventDefault();
	} else {
		show.innerHTML = result.innerHTML;
		result.innerHTML = "";
	}
})

// Hàm bắt sự kiện khi click vào nút dấu /
// kiếm tra điều kiện
// chạy qua hàm checkOperator, nếu checkOperator == false thì ngăn ko cho click vào nút dấu /
// tức là: nếu chuỗi đầu vào rỗng hoặc ký tự cuối chuỗi là + - x / . hoặc chuỗi có chứa đường dẫn ảnh, % ! ^
// thì ngăn ko cho click tiếp vào nút dấu /
// trường hợp chuỗi đầu vào == "" cũng ngăn ko cho click vào nút dấu /
// thỏa mãn tất cả các điều kiện thì cộng thêm dấu / vào chuỗi
divide.addEventListener('click', function() {
	if (checkOperator(show.innerHTML) == false || show.innerHTML == "") {
		event.preventDefault();
	} else {
		show.innerHTML += divide.innerHTML;
	}	
})

// Hàm bắt sự kiện khi click vào nút dấu x
times.addEventListener('click', function() {
	if (checkOperator(show.innerHTML) == false || show.innerHTML == "") {
		event.preventDefault();
	} else {
		show.innerHTML += times.innerHTML;
	}
})

// Hàm bắt sự kiện khi click vào nút dấu -
// trường hợp chuỗi đầu vào == "" thì vẫn cho click vào nút - để nhập số âm
minus.addEventListener('click', function() {
	if (checkOperatorSub(show.innerHTML) == false) {
		event.preventDefault();
	} else {
		show.innerHTML += minus.innerHTML;
	}
})

// Hàm bắt sự kiện khi click vào nút dấu +
plus.addEventListener('click', function() {
	if (checkOperator(show.innerHTML) == false) {
		event.preventDefault();
	} else if (show.innerHTML == "") {
		event.preventDefault();
	} else {
		show.innerHTML += plus.innerHTML;
	}
})

// Hàm convert dùng để đổi chuỗi có chứa ký tự x => * để thực hiện phép tính *
function convert(str) {
	if(str.includes('x') == true) {
		var str = str.replace(/x/g, '*');		
	}
	//nếu chuỗi ko chứa ký tự x thì trả về chuỗi ban đầu
	return str;
}

// Hàm phép tính +, 
// kiểm tra điều kiện chuỗi đầu vào show.innerHTML
// nếu chuỗi đầu vào có chứa dấu + và dấu + ko nằm ở cuối chuỗi thì thực hiện phép tính
// gọi đến hàm convert để đổi chuỗi có chứa ký tự x => * để thực hiện phép *
// Hàm eval để tính toán 1 biểu thức toán học dưới dạng chuỗi
// eval bị lỗi khi tính toán số thập phân nên ta dùng toFixed(1) để giữ lại 1 chữ số thập phân sau dấu phẩy
// gán kết quả của hàm eval vào 1 biến res
// nếu ký tự cuối chuỗi = '0' thì cắt ký tự '0' và dấu thập phân đi (là 2 vị trí cuối chuỗi)
// gán res vào chuỗi kết quả hiển thị ở result.innerHTML
function operatorAdd() {
	if(show.innerHTML.includes('+') == true && show.innerHTML.endsWith('+') != true) {
		console.log(show.innerHTML);
		var res = eval(convert(show.innerHTML)).toFixed(1);
		if (res.endsWith('0') == true) {
			result.innerHTML = res.slice(0,-2);
		} else {
			result.innerHTML = res;
		}
	}
}

// Hàm phép tính -
function operatorSub() {
	if (show.innerHTML.includes('-') == true && show.innerHTML.endsWith('-') != true &&
		show.innerHTML.lastIndexOf('-') > 0 && show.innerHTML.includes('^') == false) {
		console.log(show.innerHTML);
		var res = eval(convert(show.innerHTML)).toFixed(1);
		if (res.endsWith('0') == true) {
			res = res.slice(0,-2);
			if (res.includes("-0") == true && res.length == 2) {
				result.innerHTML = "0";
			} else {
				result.innerHTML = res;
			}
		} else {
			result.innerHTML = res;
		}
	}
}

// Hàm phép tính *
function operatorMul() {
	if(show.innerHTML.includes('x') == true && show.innerHTML.endsWith('x') != true) {
		console.log(show.innerHTML);
		var res = eval(convert(show.innerHTML)).toFixed(1);
		if (res.endsWith('0') == true) {
			result.innerHTML = res.slice(0,-2);
		} else {
			result.innerHTML = res;
		}
	}
}

// Hàm phép tính /
function operatorDiv() {
	if(show.innerHTML.includes('/') == true && show.innerHTML.endsWith('/') != true) {
		console.log(show.innerHTML);
		var res = eval(convert(show.innerHTML)).toFixed(1);
		if (res.endsWith('0') == true) {
			result.innerHTML = res.slice(0,-2);
		} else {
			result.innerHTML = res;
		}
	}
}

// Hàm tính %, nếu chuỗi đầu vào có chứa '%' và '%' nằm ở cuối chuỗi thì thực hiện phép tính
// Cắt ký tự '%' đi, đưa vào hàm Number() để chuyển thành số rồi / 100
function percent100() {
	if (show.innerHTML.includes('%') == true && show.innerHTML.endsWith('%') == true) {
		var per = show.innerHTML.slice(0,-1);
		result.innerHTML = Number(per) / 100;
	}
}

// Hàm tính giai thừa
function factorial() {
	if (show.innerHTML.includes('!') == true && show.innerHTML.endsWith('!') == true) {
		var fac = show.innerHTML.slice(0,-1);
		var fa = 1;
		for (var i = 1; i <= Number(fac); i++) {
			fa = fa * i;
		}
		result.innerHTML = fa;
	}
}

// Hàm tính căn bậc 2
// nếu chuỗi đầu vào có chứa những ký tự là đường dẫn của file ảnh ký tự căn thì tính toán
// Cắt đi 31 ký tự là đường dẫn của ảnh
// đưa vào hàm Number() để chuyển thành số rồi đưa vòa hàm Math.sqrt để tính căn
function squareRoot() {
	if(show.innerHTML.includes('<img src="img/square-root.png">') == true) {
		var s = show.innerHTML.slice(31);
		console.log(s);
		var kq = Math.sqrt(Number(s));
		result.innerHTML = kq;
	}
}

// Hàm tính mũ
// cắt chuỗi đầu vào thành 2 mảng với vị trí cắt là ký tự '^'
// đưa 2 mảng [0] và [1] vào hàm Number() để chuyển thành số rồi đưa vào hàm Math.pow để tính mũ
function thePower() {
	if(show.innerHTML.includes('^') == true && show.innerHTML.endsWith('^') != true) {
		var p = show.innerHTML.split('^');
		console.log(p);
		result.innerHTML = Math.pow(Number(p[0]), Number(p[1]));
	}
}

// Hàm bắt sự kiện khi click vào nút CE
// mỗi lần click sẽ xóa đi ký tự cuối cùng của chuỗi đầu vào
// mỗi lần xóa đi 1 ký tự sẽ chạy lại các hàm tính căn, + - x /
ce.addEventListener('click', function() {
	show.innerHTML = show.innerHTML.slice(0,-1);
	console.log(show.innerHTML);
	if (show.innerHTML.endsWith('+') == false && show.innerHTML.endsWith('-') == false &&
		show.innerHTML.endsWith('x') == false && show.innerHTML.endsWith('/') == false &&
		show.innerHTML.endsWith('^') == false && show.innerHTML != '<img src="img/square-root.png">') {
		squareRoot();
		operatorAdd();
		operatorSub();
		operatorMul();
		operatorDiv();
	}
})

// Hàm bắt sự kiện khi click vào nút C
// mỗi lần click sẽ reset toàn bộ máy tính về ban đầu 
c.addEventListener('click', function() {
	show.innerHTML = null;
	result.innerHTML = null;
})

// Hàm bắt sự kiện khi click vào nút %
// kiểm tra điều kiện
// chạy qua hàm checkSpecialOpe, nếu checkSpecialOpe == false thì ngăn ko cho click vào nút %
// tức là: nếu chuỗi rỗng hoặc ký tự cuối là % . ! hoặc chuỗi có chứa + x / ^
// thì ngăn ko cho click vào nút %
// thỏa mãn điều kiện thì cộng thêm dấu % vào chuỗi sau đó gọi đến hàm tính %
// phép tính % chỉ sử dụng đơn lẻ chứ ko ghép vào 1 chuỗi phép tính như + - x /
per.addEventListener('click', function() {	
	if (checkSpecialOpe(show.innerHTML) == false) {
		event.preventDefault();
	} else {
		show.innerHTML += per.innerHTML;
		percent100();
	}
})

// Hàm bắt sự kiện khi click vào nút !
// kiểm tra điều kiện
// nếu checkSpecialOpe == false và chuỗi đầu vào có chứa dấu - (để ko cho tính giai thừa vs số âm)
// thì ngăn ko cho click vào nút !
// phép tính ! chỉ sử dụng đơn lẻ chứ ko ghép vào 1 chuỗi phép tính như + - x /
fac.addEventListener('click', function() {
	if (checkSpecialOpe(show.innerHTML) == false || show.innerHTML.includes('-') == true ||
		show.innerHTML.includes('.') == true || Number(show.innerHTML) >= 19) {
		event.preventDefault();
	} else {
		show.innerHTML += fac.innerHTML;
		factorial();
	}
})

// Hàm bắt sự kiện khi click vào nút căn bậc 2
// kiểm tra điều kiện
// nếu chuỗi đầu vào != "" thì ngăn ko cho click vào nút căn bậc 2
// tức là nút căn bậc 2 phải click đầu tiên thì mới thực hiện dc phép tính
sQRT.addEventListener('click', function() {
	if(show.innerHTML != "") {
		event.preventDefault();
	} else {
		show.innerHTML += sQRT.innerHTML;
	}	
})

// Hàm bắt sự kiện khi click vào nút ^
// phép tính ^ chỉ sử dụng đơn lẻ chứ ko ghép vào 1 chuỗi phép tính như + - x /
pOW.addEventListener('click', function() {
	if (checkSpecialOpe(show.innerHTML) == false) {
		event.preventDefault();			
	} else {
		show.innerHTML += pOW.innerHTML;
	}	
})

// Hàm checkOperator, để kiểm tra đầu vào, dùng khi click vào các nút + - x / .
// Nếu ký tự cuối chuỗi là + - x / . hoặc chuỗi có chứa đường dẫn ảnh, % ! ^
// thì hàm checkOperator gán = false
function checkOperator(str) {
	if(str.endsWith('/') == true || str.endsWith('x') == true || str.endsWith('+') == true || 
		str.endsWith('-') == true || str.endsWith('.') == true || str.includes('%') == true || 
		str.includes('!') == true || str.includes('^') == true || str.length >= 15 ||
		str.includes('<img src="img/square-root.png">') == true || str == "-0") {
		return false;
	}
}

// Hàm checkSpecialOpe, để kiểm tra đầu vào, dùng khi click vào các nút đặc biệt % ! ^
// Nếu chuỗi rỗng hoặc ký tự cuối là % . ! hoặc chuỗi có chứa + x / thì gán = false
function checkSpecialOpe(str) {
	if(str == "" || str.endsWith('%') == true || str == "-0" ||
		str.endsWith('.') == true || str.endsWith('!') == true || 
		str.includes('^') == true || str.includes('+') == true || 
		str.includes('x') == true || str.includes('/') == true ) {
		return false;
	}
}

// Hàm checkOperatorSub, để kiểm tra đầu vào, dùng riêng cho nút -
function checkOperatorSub(str) {
	if (str.endsWith('/') == true || str.endsWith('x') == true ||
		str.endsWith('+') == true || str.endsWith('-') == true || 
		str.endsWith('.') == true || str.includes('<img src="img/square-root.png">') == true ||
		str.includes('%') == true || str.includes('!') == true || str == "-0" || str.length >= 15) {
		return false;
	} else if (str.length > 1 && str.includes('^') == true) {
			if (str.includes('^-') == true || str.endsWith('0') == true || 
			str.endsWith('1') == true || str.endsWith('2') == true || 
			str.endsWith('3') == true || str.endsWith('4') == true || 
			str.endsWith('5') == true || str.endsWith('6') == true ||
			str.endsWith('7') == true || str.endsWith('8') == true ||
			str.endsWith('9') == true) {
			return false;
		}	
	}
}

// Hàm checkDot, để kiểm tra đầu vào, dùng khi click vào nút dấu .
// hàm này để chặn trường hợp tiếp tục click vào nút dấu . trong khi đang nhập 1 số thập phân (vd: 2.55.)
// dùng hàm split cắt chuỗi đầu vào rồi gán vào mảng res
// tạo 1 mảng arr mới
// duyệt phòng for với chiều dài = chiều dài của mảng res
// nếu phần tử res[i] là 1 trong những ký tự + - x / . ^ thì push res[i] vào mảng arr
// hết vòng lặp for ta xét điều kiện phần tử cuối cùng của mảng arr (arr[arr.length - 1])
// nếu phần tử cuối của arr == "."
// thì hàm checkDot gán = false
function checkDot(str) {
	if (str.includes('<img src="img/square-root.png">') == false) {
		var res = str.split("");
		var arr = [];
		for (var i = 0; i < res.length; i++) {
			if (res[i] == "." || res[i] == "+" || res[i] == "-" || res[i] == "x" || 
				res[i] == "/" || res[i] == "^") {
				arr.push(res[i]);
			}  
		}
		if (arr[arr.length - 1] == ".") {
			return false;
		}
	}
}

// Hàm checkDot2, để kiểm tra đầu vào, cũng dùng khi click vào nút dấu .
// hàm này để chặn trường hợp tiếp tục click vào nút dấu . sau khi vừa click vào các nút phép tính
function checkDot2(str) {
	if (str.includes('<img src="img/square-root.png">') == false) {
		if (str.endsWith('/') == true || str.endsWith('x') == true || str.endsWith('+') == true || 
			str.endsWith('-') == true || str.endsWith('^') == true || str.endsWith('.') == true || 
			str.includes('%') == true || str.includes('!') == true || str.length >= 15 ) {
				return false;
		}
	} else {
		if (str.length == 31) {
			return false;
		} else if (str.length > 31) {
			var res = str.split("");
			var arr = [];
			for (var i = 0; i < res.length; i++) {
				if (res[i] == ".") {
					arr.push(res[i]);
				}  
			}
			if (arr.length == 2) {
				return false;
			}
		}		
	}
}

// Hàm checkNum, dùng để kiểm tra đầu vào, dùng khi click vào những nút số 0-9
function checkNum(str) {
	if (str.endsWith('%') == true || str.endsWith('!') == true) {
		return false;	
	} else if (str == "0" || str == "0^0" || str == "-0") {
		return false;
	} else if (str.includes('^0') == true && str.includes('.') == false) {
		return false;
	} else if (str.includes('^-0') == true && str.includes('.') == false) {
		return false;
	} else if (str.includes('<img src="img/square-root.png">') == false && str.length >= 16) {
		return false;
	}
}

// Hàm checkZero, dùng để kiểm tra đầu vào, dùng riêng cho nút số 0
function checkZero(str) {
	if (str.endsWith('+0') == true || str.endsWith('x0') == true || 
		str.endsWith('/0') == true || str.endsWith('^0') == true ||
		str.endsWith('-0') == true || str.endsWith('>0') == true) {
		return false;
	} else if (str.startsWith('-0') == true && str.length == 2) {
		return false;
	}
}