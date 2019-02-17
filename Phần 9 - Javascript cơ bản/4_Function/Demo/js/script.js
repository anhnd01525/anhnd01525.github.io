function thongbao() {
	alert("Demo Javascript");
}

function tingtong(x, y) {
	alert(x + y);
}

var tinhtong = function(x, y) {
	// alert("Ket qua: " + (x + y));
	return x + y;
}

var z = 5;

var tinhtoan = function(x, y) {
	return x + y + z;
}
// alert(z);

var hero = {
	name: "Andy",
	level: 99,
	say: function() {
		alert("Xin chao cac ban, toi la " + this.name + " level " + this.level)
	}
}

function sort(a, b, c) {
	var temp;
	while (a > b || b > c) {
		if(a > b) {
			temp = a;
			a = b;
			b = temp;
		}
		if(b > c) {
			temp = b;
			b = c;
			c = temp;
		}		
	}
	
	return a + ", " + b + ", " + c;
}

console.log(sort(3,5,4));

function maxNo2(a, b, c, d) {
	var temp, max2;
	while(a>b || b>c || c>d) {
		if(a > b) {
			temp = a;
			a = b;
			b = temp;
		}
		if(b > c) {
			temp = b;
			b = c;
			c = temp;
		}
		if(c > d) {
			temp = c;
			c = d;
			d = temp;
		}
	}

	max2 = c; 
	return "Max 2: " + max2;
}

console.log(maxNo2(3,5,4,1));