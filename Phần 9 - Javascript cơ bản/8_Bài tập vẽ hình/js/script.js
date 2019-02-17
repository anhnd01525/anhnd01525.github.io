// Demo: Vẽ hình vuông
function printSquare(n) {
	var str = '';
	for (var i = 1; i <= n; i++) {
		for (var j = 1; j <= n; j++) {
			// In ra n dấu *
			str += ' * ';		
		}

		// In ra dấu xuống dòng
		str += '</br>';
		// console.log:
		// str += '\n';
	}
	return str;
	// console.log:
	// return '\n' + str;
}

// Bài 1: Vẽ tam giác vuông cân
function printTrigangle(n) {
	var str = '';
	for (var i = 1; i <= n; i++) {
	// vòng lặp ngoài: chạy từ trên xuống
		// vòng lặp trong: chạy ngang      
		for (var j = 1; j <= i; j++) {
			// những ô có j <= i thì in ra * 	 				 
			str += ' * ';
		}

		// chạy hết 1 hàng ngang in ra dấu xuống dòng	
		str += '</br>';
	}
	return str;
}

// Bài 2: Vẽ hình chữ nhật rỗng
function printEmptyRectangle(a, b) {
	var str = '';
	for (var i = 1; i <= b; i++) {							
		for (var j = 1; j <= a; j++) {						
			if (i == 1 || i == b || j == 1 || j == a) {	
				// những ô ở 4 đường biên: i=1, j=1, i=b, j=a thì in ra *
				str += ' * ';
			} else {
				// những ô còn lại thì in ra khoảng trắng (nonbreaking space)
				str += ' \xa0\xa0 ';		
			};
		};

		str += '</br>';										
	};
	return str;
}

// Bài 3: Vẽ tam giác cân ngược
function printSpecialTrigangle(n) {
	var str = '';
	// //Cách 1: Tay to
	// for (var i = 1; i <= n; i++) {
	// // vòng lặp ngoài: chạy từ trên xuống
	// 	// vòng lặp trong số 1: chạy ngang, in ra khoảng trắng để dịch dấu * ra giữa						
	// 	for (var k = 2; k <= i; k++) {
	// 		// cho k chạy từ 2, nếu k <= i thì in ra khoảng trắng
	// 		str += ' \xa0\xa0 ';
	// 	};

	// 	// vòng lặp trong số 2: chạy ngang, in ra dấu *
	// 	for (var j = 1; j <= 2*n - 2*i + 1; j++) {
	// 		// những ô có j <= 2*n - 2*i + 1 (độ dài cạnh đáy ứng với mỗi lần giảm n) thì in ra dấu *
	// 		str += ' * ';								
	// 	};

	// 	str += '</br>';
	// };
	// return str;
	
	// Cách 2: Tối ưu
	for (var i = 1; i <= n; i++) {
		for (var j = 1; j <= 2*n - 1; j++) {
			// vòng lặp trong: chạy ngang, điều kiện là j <= 2*n - 1 (độ dài cạnh đáy)
			if (j >= i && j <= 2*n - i) {
				// những ô có có j >= i đồng thời j <= 2*n - i
				// tức là giới hạn ở 2 điểm nằm trên 2 cạnh bên
				// thì in ra * 
				str += ' * ';
			} else {
				// những ô còn lại thì in ra khoảng trắng
				str += ' \xa0\xa0 ';
			}
		};

		str += '</br>'
	};
	return str;
}

// Bài 4: Vẽ chữ X
function printX(n) {
	var str = '';
	for (var i = 1; i <= n; i++) {						
		for (var j = 1; j <= n; j++) {					
			if (j == i || j == (n-i+1)) {
				// những ô có j = i hoặc j = (n-i+1) thì in ra *
				str += ' * ';
			} else {
				// những ô còn lại thì in ra khoảng trắng
				str += ' \xa0\xa0 ';
			};
		};

		str += '</br>';									
	};
	return str;
}

// Bài 5: Vẽ bướm
function printButterfly(n) {
	var str = '';
	for (var i = 1; i <= n; i++) {									
		for (var j = 1; j <= n; j++) {								
			if ((j > i && j <= n-i) || (j < i && j > n-i+1)) {
				// những ô có đồng thời j > i và j <= n-i hoặc
				// những ô có đồng thời j < i và j > n-i+1
				// thì in ra khoảng trắng
				str += ' \xa0\xa0 ';
			} else {
				// những ô còn lại thì in ra *
				str += ' * ';
			};
		};

		str += '</br>';
	};
	return str;
}

// Bài 6 (Bonus): Vẽ tam giác cân rỗng
function printEmptySpecialTrigangle(n) {
	var str = '';

	// Cách 1: Tay to
	for (var i = 1; i <= n; i++) {
		// vòng lặp trong: chạy ngang, in ra khoảng trắng để dịch dấu * ra giữa
		for (var k = 1; k <= n-i; k++) {
			// điều kiện vòng lặp là k <= chiều cao - 1 thì in ra khoảng trắng
			str += ' \xa0\xa0 ';								
		};

		// điều kiện i < n để in ra 2 cạnh bên
		if (i < n) {
			for (var j = 1; j <= 2*i - 1; j++) {
				// điều kiện vòng lặp là j <= 2*i - 1 (độ dài cạnh đáy)
				if(j == 1 || j == 2*i - 1 ) {
					// những ô có j == 1 hoặc j == 2*i - 1
					// tức là 2 điểm nằm trên 2 cạnh bên
					// thì in ra dấu *
					str += ' * ';	
				} else {
					// ngược lại, tức là những điểm nằm bên trong tam giác
					// thì in ra khoảng trắng
					str += ' \xa0\xa0 ';
				}							
			};
			// kết thúc vòng lặp, ta in dc 2 cạnh bên nhưng thiếu cạnh đáy vì điều kiện i < n ở trên
		} else {
			// ngược lại nếu i == n, in ra cạnh đáy
			for (var j = 1; j <= 2*n - 1; j++) {
				// điều kiện vòng lặp là j <= 2*n - 1 (độ dài cạnh đáy)
				// thì in ra dấu *
				str += ' * ';
			}
		}

		str += '</br>';	
	};
	return str;
	
	// // Cách 2: Tối ưu
	// for (var i = 1; i <= n; i++) {
	// 	for (var j = 1; j <= 2*n - 1; j++) {
	// 		// điều kiện vòng lặp là j <= 2*n - 1 (độ dài cạnh đáy)
	// 		if (j == n - i + 1 || j == n + i - 1 || i == n) {
	// 			// những ô có j == n - i +1 hoặc những ô có j == n + i -1 (tức là 2 cạnh bên)
	// 			// hoặc những ô có i == n (tức là cạnh đáy)
	// 			// thì in ra dấu *
	// 			str += ' * ';
	// 		} else {
	// 			// những ô còn lại thì in ra khoảng trắng
	// 			str += ' \xa0\xa0 ';
	// 		};
	// 	};

	// 	str += '</br>';
	// };
	// return str;
}