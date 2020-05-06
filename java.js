// for (count = 0; count <= 1000; count++) {
// 	for (i = 1; i <= 12; i++) {
// 		function diceRoll(min, max) {
// 			min = Math.ceil(1);
// 			max = Math.floor(6);
// 			let roll = 0;
// 			roll = Math.floor(Math.random() * 6);

// 			document.getElementById("table2").innerHTML = count[roll] + 1;

// 			let newElement = document.createElement("div");
// 			newElement.className = "graph";
// 			newElement.style.width = roll * 100 + "px";

// 			let label = document.createTextNode("Die roll" + roll);
// 			newElement.appendChild(label);

// 			let destination = document.getElementById("graph");
// 			destination.appendChild(newElement);
// 		}
// 	}
// }
let count = [];
let result2 = 0;
let result3 = 0;
let result4 = 0;
let result5 = 0;
let result6 = 0;
let result7 = 0;
let result8 = 0;
let result9 = 0;
let result10 = 0;
let result11 = 0;
let result12 = 0;

for (rolls = 0; rolls < 1000; rolls++) {
	function diceRoll(min, max) {
		min = Math.ceil(1);
		max = Math.floor(6);
		let o = 0;
		var rollA = Math.floor(Math.random() * 6) + 1;
		var rollB = Math.floor(Math.random() * 6) + 1;
		o = rollA + rollB;
		count.push(o);
		switch (o) {
			case 2:
				result2 += 1;
				document.getElementById("table2").innerHTML = "2: " + result2;
				let newElement2 = document.createElement("div");
				let destination2 = document.getElementById("graph2");
				destination2.innerHTML = "Die roll 2: " + result2;
				destination2.style.width = result2 * 5 + "px";
				break;
			case 3:
				result3 += 1;
				document.getElementById("table3").innerHTML = "3: " + result3;
				let newElement3 = document.createElement("div");
				let destination3 = document.getElementById("graph3");
				destination3.innerHTML = "Die roll 3: " + result3;
				destination3.style.width = result3 * 5 + "px";
				break;
			case 4:
				result4 += 1;
				document.getElementById("table4").innerHTML = "4: " + result4;
				let newElement4 = document.createElement("div");
				let destination4 = document.getElementById("graph4");
				destination4.innerHTML = "Die roll 4: " + result4;
				destination4.style.width = result4 * 5 + "px";
				break;
			case 5:
				result5 += 1;
				document.getElementById("table5").innerHTML = "5: " + result5;
				let newElement5 = document.createElement("div");
				let destination5 = document.getElementById("graph5");
				destination5.innerHTML = "Die roll 5: " + result5;
				destination5.style.width = result5 * 5 + "px";
				break;
			case 6:
				result6 += 1;
				document.getElementById("table6").innerHTML = "6: " + result6;
				let newElement6 = document.createElement("div");
				let destination6 = document.getElementById("graph6");
				destination6.innerHTML = "Die roll 6: " + result6;
				destination6.style.width = result6 * 5 + "px";
				break;
			case 7:
				result7 += 1;
				document.getElementById("table7").innerHTML = "7: " + result7;
				let newElement7 = document.createElement("div");
				let destination7 = document.getElementById("graph7");
				destination7.innerHTML = "Die roll 7: " + result7;
				destination7.style.width = result7 * 5 + "px";
				break;
			case 8:
				result8 += 1;
				document.getElementById("table8").innerHTML = "8: " + result8;
				let newElement8 = document.createElement("div");
				let destination8 = document.getElementById("graph8");
				destination8.innerHTML = "Die roll 8: " + result8;
				destination8.style.width = result8 * 5 + "px";
				break;
			case 9:
				result9 += 1;
				document.getElementById("table9").innerHTML = "9: " + result9;
				let newElement9 = document.createElement("div");
				let destination9 = document.getElementById("graph9");
				destination9.innerHTML = "Die roll 9: " + result9;
				destination9.style.width = result9 * 5 + "px";
				break;
			case 10:
				result10 += 1;
				document.getElementById("table10").innerHTML = "10: " + result10;
				let newElement10 = document.createElement("div");
				let destination10 = document.getElementById("graph10");
				destination10.innerHTML = "Die roll 10: " + result10;
				destination10.style.width = result10 * 5 + "px";
				break;
			case 11:
				result11 += 1;
				document.getElementById("table11").innerHTML = "11: " + result11;
				let newElement11 = document.createElement("div");
				let destination11 = document.getElementById("graph11");
				destination11.innerHTML = "Die roll 11: " + result11;
				destination11.style.width = result11 * 5 + "px";
				break;
			case 12:
				result12 += 1;
				document.getElementById("table12").innerHTML = "12: " + result12;
				let newElement12 = document.createElement("div");
				let destination12 = document.getElementById("graph12");
				destination12.innerHTML = "Die roll 12: " + result12;
				destination12.style.width = result12 * 5 + "px";
				break;
		}
	}
	diceRoll();
}
