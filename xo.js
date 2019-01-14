var player = "X";
var count = 0;
var draw = 1;
var allCells = document.querySelectorAll("#table td");
var wonCountO = 1;
var wonCountX = 1;
var clearbutton = document.querySelector("#clear"); 
clearbutton.addEventListener("click",clear_button);

for(var i = 0; i < allCells.length; i++) {
	allCells[i].addEventListener("click",cell_click);
}

function allCellsEvents5x5() {
	var allCells = document.querySelectorAll("#table5 td");
		for(var i = 0; i < allCells.length; i++) {
			allCells[i].innerHTML = "";
			allCells[i].style.backgroundColor = "rgba(163, 152, 152, 0.884)";
			allCells[i].addEventListener("click",cell_click);
		}
}

function allCellsEvents3x3() {
	var allCells = document.querySelectorAll("#table td");
		for(var i = 0; i < allCells.length; i++) {
			allCells[i].innerHTML = "";
			allCells[i].style.backgroundColor = "rgba(163, 152, 152, 0.884)";
			allCells[i].addEventListener("click",cell_click);
		}
}

var check = 1;
function play5x5() {	 
	if (check == 1) { 
		startgame();
		document.getElementById("hiddiv").innerHTML = "";
		document.getElementById("table").style.display = "none";
		document.getElementById("table5").style.display = "block";
		document.getElementById("x5").innerHTML = "3X3";
		allCellsEvents5x5();
		count = 0;
		player = "X";
		check=2;
	}else if (check == 2) {
		startgame()
		document.getElementById("hiddiv").innerHTML = "";
		document.getElementById("table").style.display = "block";
		document.getElementById("table5").style.display = "none";
		document.getElementById("x5").innerHTML = "5X5";
		allCellsEvents3x3();
		count = 0
		player = "X";
		check=1;
	}
}

function cell_click() {
	this.innerHTML = player;
	this.removeEventListener("click",cell_click);
	if (player == "X") {
		player = "O";
	} else {
		player = "X"; }

	count++;
	if(document.getElementById("x5").innerHTML == "5X5"){tie3x3()};
	if(document.getElementById("x5").innerHTML == "3X3"){tie5x5()};
	winning();
	winning5();
}

function tie3x3(){
	if (count == 9) { 
		document.getElementById("hiddiv").innerHTML = "DRAW";
		document.getElementById("p2").innerHTML = "The game was a tie " + draw++ + " rounds";
		removeList();
	}
}

function tie5x5(){
	if (count == 25) {
		document.getElementById("hiddiv").innerHTML = "DRAW";
		document.getElementById("p2").innerHTML = "The game was a tie " + draw++ + " rounds";
		removeList();
	}
}

function startgame() {
	count = 0;
	player = "X";
	document.getElementById("svg").style.display="none";
	document.getElementById("l1").style.display="none";
	document.getElementById("l2").style.display="none";
	document.getElementById("l3").style.display="none";
	document.getElementById("l4").style.display="none";
	document.getElementById("l5").style.display="none";
	document.getElementById("l6").style.display="none";
	document.getElementById("l7").style.display="none";
	document.getElementById("l8").style.display="none";

	document.getElementById("svg5x5").style.display="none";
	document.getElementById("l11").style.display="none";
	document.getElementById("l22").style.display="none";
	document.getElementById("l33").style.display="none";
	document.getElementById("l44").style.display="none";
	document.getElementById("l55").style.display="none";
	document.getElementById("l66").style.display="none";
	document.getElementById("l77").style.display="none";
	document.getElementById("l88").style.display="none";
	document.getElementById("l99").style.display="none";
	document.getElementById("l10").style.display="none";
	document.getElementById("l101").style.display="none";
	document.getElementById("l12").style.display="none";
		
	document.getElementById("hiddiv").innerHTML = "";
	if (document.getElementById("x5").innerHTML == "3X3") {
		allCellsEvents5x5();
	}
	else if (document.getElementById("x5").innerHTML == "5X5") {
		allCellsEvents3x3()
	}
}

function removeList(allCells){
	for(var i = 0; i < allCells.length; i++) {
		allCells[i].removeEventListener("click",cell_click);
	}
}

function winning() {
	var arrWin = [ [0,1,2,document.getElementById("l6")], 
					  [3,4,5,document.getElementById("l7")],
					  [6,7,8,document.getElementById("l8")],
					  [0,3,6,document.getElementById("l3")],
					  [1,4,7,document.getElementById("l4")],
					  [2,5,8,document.getElementById("l5")],
					  [0,4,8,document.getElementById("l2")],
					  [2,4,6,document.getElementById("l1")] ]

	for (var i = 0; i < arrWin.length; i++) {
		var fst = arrWin[i];
			
		if (allCells[fst[0]].innerHTML == allCells[fst[1]].innerHTML &&
			allCells[fst[1]].innerHTML == allCells[fst[2]].innerHTML &&
			allCells[fst[0]].innerHTML != "") 
		{   
			if (player == "X") { 
				player = "O";
				removeList(allCells);
				arrWin[i][3].style.display = "block";
				document.getElementById("svg").style.display="block";
				document.getElementById("hiddiv").innerHTML = "WON - " + player;
				document.getElementById("p1").innerHTML = "Player O won " + wonCountO++ + " rounds"; 

			}

			else{
				player = "X";
				removeList(allCells);
				arrWin[i][3].style.display = "block";
				document.getElementById("svg").style.display="block";
				document.getElementById("hiddiv").innerHTML = "WON - " + player;
				document.getElementById("p").innerHTML = "Player X won " + wonCountX++ + " rounds";
			}
		}
	}
}

function winning5() {
    var allCells = document.querySelectorAll("#table5 td");	
	var arrWin = [ [0,1,2,3,4,document.getElementById("l11")],
				   [5,6,7,8,9,document.getElementById("l22")], 
				   [10,11,12,13,14,document.getElementById("l33")], 
				   [15,16,17,18,19,document.getElementById("l44")], 
				   [20,21,22,23,24,document.getElementById("l55")], 
				   [0,5,10,15,20,document.getElementById("l66")],
				   [1,6,11,16,21,document.getElementById("l77")],
				   [2,7,12,17,22,document.getElementById("l88")],
				   [3,8,13,18,23,document.getElementById("l99")],
				   [4,9,14,19,24,document.getElementById("l10")],
				   [0,6,12,18,24,document.getElementById("l101")],
				   [4,8,12,16,20,document.getElementById("l12")]
			     ]
	for (var i = 0; i < arrWin.length; i++) {
		var fst = arrWin[i];	
		if (allCells[fst[0]].innerHTML == allCells[fst[1]].innerHTML &&
				allCells[fst[1]].innerHTML == allCells[fst[2]].innerHTML &&
				allCells[fst[2]].innerHTML == allCells[fst[3]].innerHTML &&
				allCells[fst[3]].innerHTML == allCells[fst[4]].innerHTML &&
				allCells[fst[2]].innerHTML != "") { 

			if (player == "X") { 
				player = "O";
				removeList(allCells);
				
				arrWin[i][5].style.display = "block";
				document.getElementById("svg5x5").style.display="block";

				document.getElementById("hiddiv").innerHTML = "WON - " + player;
				document.getElementById("p1").innerHTML = "Player O won " + wonCountO++ + " rounds"; ;
			} else{
				player = "X";
				removeList(allCells);
				arrWin[i][5].style.display = "block";
				document.getElementById("svg5x5").style.display="block";

				document.getElementById("hiddiv").innerHTML = "WON - " + player;
				document.getElementById("p").innerHTML = "Player X won " + wonCountX++ + " rounds";
			}
		}
	}
}

function clear_button(){
	wonCountX = 1;
	wonCountO = 1;
	draw = 1;
	document.getElementById("p").innerHTML = "Player X won 0 rounds"; 
	document.getElementById("p1").innerHTML = "Player O won 0 rounds"; 
	document.getElementById("p2").innerHTML = "The game was a tie 0 rounds" ; 
}