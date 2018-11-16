// Lưu các câu hỏi và nội dung vào object q1, q2, q3, q4, q5
var q1 = {
	question: "Câu 1: Trong kỳ chuyển nhượng mùa hè năm 2009, MU đã bán Cristiano Ronaldo cho Real Madrid với giá bao nhiêu?",
	answerA: "A. 70 triệu bảng",
	answerB: "B. 80 triệu bảng",
	answerC: "C. 90 triệu bảng",
	answerD: "D. 100 triệu bảng",
	trueanswer: "answerB"
}

var q2 = {
	question: "Câu 2: Cầu thủ có số lần ra sân nhiều nhất trong lịch sử MU là ai?",
	answerA: "A. Wayne Rooney",
	answerB: "B. Paul Scholes",
	answerC: "C. Ryan Giggs",
	answerD: "D. Sir Bobby Charlton",
	trueanswer: "answerC"
}

var q3 = {
	question: "Câu 3: Trong kỷ nguyên của Sir Alex Ferguson, MU đã giành được bao nhiêu danh hiệu vô địch Ngoại Hạng Anh?",
	answerA: "A. 10",
	answerB: "B. 11",
	answerC: "C. 12",
	answerD: "D. 13",
	trueanswer: "answerD"
}

var q4 = {
	question: "Câu 4: Thảm họa hàng không Munich xảy ra với MU vào năm bao nhiêu?",
	answerA: "A. 1957",
	answerB: "B. 1958",
	answerC: "C. 1959",
	answerD: "D. 1960",
	trueanswer: "answerB"
}

var q5 = {
	question: "Câu 5: 2 bàn thắng quyết định giúp MU lội ngược dòng trước Bayern Munich trong trận chung kết Champion League 1999 diễn ra vào các phút bao nhiêu?",
	answerA: "A. 89 và 90",
	answerB: "B. 90 và 90+2",
	answerC: "C. 90+1 và 90+3",
	answerD: "D. 90+2 và 90+4",
	trueanswer: "answerC"
}

// Lưu tập hợp các câu hỏi vào mảng questionBank
var questionBank = [q1, q2, q3, q4, q5];
// Tạo 1 biến đếm count để đánh số thứ tự các câu hỏi
var count = 0;

// Gán các element vào các biến
// yes là element bắt đầu chơi
// quiz là element chứa câu hỏi và 4 đáp án
// again là button chơi lại nằm trong element lose khi sai hết hoặc đúng 1 câu
// again2 là button chơi lại nằm trong element draw khi chỉ đúng 2, 3 hoặc 4 câu
var yes = document.getElementById('yes');
var quiz = document.getElementById('quiz');
var again = document.getElementById('again');
var again2 = document.getElementById('again2');

// Hàm bắt sự kiện khi click vào nút Yes
yes.addEventListener('click', function() {
	console.log(count);
	// Khi click vào nút Yes, element play sẽ dc set opacity = 0 để ẩn đi
	document.getElementById('play').style.opacity = 0;

	// Set zIndex của element quiz chứa câu hỏi và 4 đáp án = 1 để hiển thị câu hỏi lên
	var setZindex = function() {
		quiz.style.zIndex = "1";
	};
	setTimeout(setZindex, 500);

	// Gán giá trị cho element question và answer bằng các object chứa câu hỏi và đáp án đã khởi tạo
	// Object được lấy từ mảng questionBank thông qua biến đếm count
	// ở đây biến count = 0 => phần tử đầu tiên của mảng questionBank => hiển thị câu hỏi số 1
	document.getElementById('question').innerHTML = questionBank[count].question;
	document.getElementById('answerA').innerHTML = questionBank[count].answerA;
	document.getElementById('answerB').innerHTML = questionBank[count].answerB;
	document.getElementById('answerC').innerHTML = questionBank[count].answerC;
	document.getElementById('answerD').innerHTML = questionBank[count].answerD;
})

// Khởi tạo biến point để tính điểm cho mỗi câu trả lời đúng
var point = 0;
// Gán các element chứa câu trả lời là answer-item vào biến answer
var answer = document.querySelectorAll(".answer-item");
// duyệt vòng lặp forEach, bắt sự kiện mỗi khi click vào 1 câu trả lời
answer.forEach(function(element) {
	element.addEventListener('click', function() {
		console.log(event.srcElement.id);
		console.log(questionBank[count].trueanswer);

		// event.srcElement.id để lấy ra id của element mà ta click vào, ở đây là lấy ra id của element chứa câu trả lời
		// nếu id này == giá trị trueanswer, tức là câu trả lời đc chọn chính là đáp án đúng
		if(event.srcElement.id == questionBank[count].trueanswer) {
			// thì biến point + 1
			point += 1;
			console.log(point);
		} else {
			// nếu id khác giá trị trueanswer, tức là chọn sai
			// gán id của element đó vào biến res
			var res = event.srcElement.id;
			// replace chuỗi "answer" trong res thành "wrong" và gán vào biến wrong
			// ta đc biến wrong chứa element "dấu gạch đỏ", ý nghĩa là đây là đáp án sai  
			var wrong = res.replace("answer", "wrong");
			console.log(wrong);
			// set opacity = 0 để hiển thị dấu gạch đỏ 
			document.getElementById(wrong).style.opacity = 1;
			// dùng hàm setTimeout để làm dấu gạch đỏ biến mất trong 0.4s
			setTimeout(function() {
				document.getElementById(wrong).style.opacity = 0; 
			}, 400);		
		}

		// dùng hàm setTimeout để mỗi lần chuyển câu hỏi, sẽ có 1 khoảng thời gian chờ = 0.8s
		setTimeout(function() {
			// từ câu hỏi số 2 trở đi, mỗi lần click vào câu trả lời, biến count tăng thêm 1
			count++;
			// nếu count < chiều dài của mảng questionBank
			if(count < questionBank.length) {
				// lại gán giá trị cho element question và answer từ phần tử ứng vs số count của mảng questionBank
				// như vậy mỗi lần chọn câu trả lời xong sẽ hiển thị câu hỏi tiếp theo
				document.getElementById('question').innerHTML = questionBank[count].question;
				document.getElementById('answerA').innerHTML = questionBank[count].answerA;
				document.getElementById('answerB').innerHTML = questionBank[count].answerB;
				document.getElementById('answerC').innerHTML = questionBank[count].answerC;
				document.getElementById('answerD').innerHTML = questionBank[count].answerD;
			} else { 
				// nếu count = chiều dài của mảng questionBank, tức là đã trả lời hết các câu hỏi
				// khi đó gán lại biến đếm count = 0 để dùng cho trường hợp play again		
				count = 0;
				console.log(count);

				// trả lời hết câu hỏi xong, ta xét đến biến point
				// nếu point = chiều dài mảng questionBank, tức là tất cả các câu trả lời đều đúng
				if (point == questionBank.length) {
					// chuyển sang trang chúc mừng win.html = window.location.assign
					setTimeout(function() {
						window.location.assign("win.html");
					}, 750);
				} else if (point == questionBank.length-1 || point == questionBank.length-2 || point == questionBank.length-3) {
					// nếu chỉ đúng đc 2, 3, 4 câu thì
					// ẩn element quiz đi bằng cách set zIndex = -1
					setTimeout(function() {
						quiz.style.zIndex = "-1";
					}, 200);

					// hiện element draw lên bằng cách set zIndex = 1
					// element draw có chứa nút play again
					setTimeout(function() {
						document.getElementById('draw').style.zIndex = "1";
					}, 500);
				} else {
					// trường hợp còn lại, tức là sai hết hoặc chỉ đúng dc 1 câu
					// ẩn element quiz đi bằng cách set zIndex = -1
					setTimeout(function() {
						quiz.style.zIndex = "-1";
					}, 200);

					// hiện element lose lên bằng cách set zIndex = 1
					// element lose có chứa nút play again
					setTimeout(function() {
						document.getElementById('lose').style.zIndex = "1";
					}, 500);
				}
				// Gán lại giá trị biến point = 0 để dùng cho trường hợp play again
				point = 0;
			}		
		}, 800)
	})
})

// Hàm bắt sự kiện khi click vào nút Again
// Nút Again là button chơi lại có id="again" nằm trong element lose khi sai hết hoặc đúng 1 câu
again.addEventListener('click', function() {
	// ẩn element lose đi
	setTimeout(function() {
		document.getElementById('lose').style.zIndex = "-1";
	}, 200)
	// hiện element quiz lên
	setTimeout(function() {
		quiz.style.zIndex = "1";
	}, 500);

	// lại gán giá trị cho element question và answer từ phần tử ứng vs số count của mảng questionBank
	// ở đây biến count = 0 do đã dc gán lại => hiện thị lại câu hỏi đầu tiên
	document.getElementById('question').innerHTML = questionBank[count].question;
	document.getElementById('answerA').innerHTML = questionBank[count].answerA;
	document.getElementById('answerB').innerHTML = questionBank[count].answerB;
	document.getElementById('answerC').innerHTML = questionBank[count].answerC;
	document.getElementById('answerD').innerHTML = questionBank[count].answerD;
})

// Hàm bắt sự kiện khi click vào nút Again
// Nút Again này là button chơi lại có id="again2" nằm trong element draw khi chỉ đúng 2, 3 hoặc 4 câu
again2.addEventListener('click', function() {
	setTimeout(function() {
		document.getElementById('draw').style.zIndex = "-1";
	}, 200)
	setTimeout(function() {
		quiz.style.zIndex = "1";
	}, 500);

	document.getElementById('question').innerHTML = questionBank[count].question;
	document.getElementById('answerA').innerHTML = questionBank[count].answerA;
	document.getElementById('answerB').innerHTML = questionBank[count].answerB;
	document.getElementById('answerC').innerHTML = questionBank[count].answerC;
	document.getElementById('answerD').innerHTML = questionBank[count].answerD;
})