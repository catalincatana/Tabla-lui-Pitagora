function colorLineColumn2() {
	/*$("td").css("background-color", "white");*/	
	$(".linia3").css("background-color", "red");
	$(".coloana3").css("background-color", "red");
	$("#2").css("background-color", "yellow");
}

function colorLineColumn7() {
	/*$("td").css("background-color", "white");*/
	$(".linia8").css("background-color", "green");
	$(".coloana8").css("background-color", "green");
	$("#7").css("background-color", "yellow");
}

function colorLineColumn5() {
	/*$("td").css("background-color", "white");*/
	$(".linia6").css("background-color", "blue");
	$(".coloana6").css("background-color", "blue");
	$("#5").css("background-color", "yellow");
}

function colorLineColumn3() {
	/*$("td").css("background-color", "white");*/
	$(".linia4").css("background-color", "orange");
	$(".coloana4").css("background-color", "orange");
	$("#3").css("background-color", "yellow");
}

function colorMainLineColumn() {
	/*$("td").css("background-color", "white");*/
	$("#1").css("background-color", "violet");
	$("#4").css("background-color", "violet");
	$("#9").css("background-color", "violet");
	$("#16").css("background-color", "violet");
	$("#25").css("background-color", "violet");
	$("#36").css("background-color", "violet");
	$("#49").css("background-color", "violet");
	$("#64").css("background-color", "violet");
	$("#81").css("background-color", "violet");
	$("#100").css("background-color", "violet");

}

function colorLineColumn1() {
	/*$("td").css("background-color", "white");*/
	$(".linia1").css("background-color", "yellow");
	$(".coloana1").css("background-color", "yellow");
	$("#coloana1").css("background-color", "white");
}

function aparPrime(){
	document.getElementById('NrPrime').innerHTML = '11-13-17';
}
function createTable()
{
	
	var tbody = '';
        var theader = '<div style="position:relative; left:50%; top:30%" id="tabelanimatie" ><table border="1" id="table" >\n';
              		tbody += '<tr class = "linia1">';
					tbody += '<td id = "coloana1" style="border:0px">';
					tbody += 'x';
					tbody += '</td >'
					tbody += '<td class = "coloana2">';
					tbody += '1';
					tbody += '</td>'
					tbody += '<td id="2" class = "coloana3">';
					tbody += '2';
					tbody += '</td>'
					tbody += '<td id="3" class = "coloana4">';
					tbody += '3';
					tbody += '</td>'
					tbody += '<td class = "coloana5">';
					tbody += '4';
					tbody += '</td>'
					tbody += '<td id="5" class = "coloana6">';
					tbody += '5';
					tbody += '</td>'
					tbody += '<td class = "coloana7">';
					tbody += '6';
					tbody += '</td>'
					tbody += '<td id="7" class = "coloana8">';
					tbody += '7';
					tbody += '</td>'
					tbody += '<td class = "coloana9">';
					tbody += '8';
					tbody += '</td>'
					tbody += '<td class = "coloana10">';
					tbody += '9';
					tbody += '</td>'
					tbody += '<td class = "coloana11">';
					tbody += '10';
					tbody += '</td>'
			tbody += '</tr>\n';
			tbody += '<tr class = "linia2">';
					tbody += '<td class = "coloana1">';
					tbody += '1';
					tbody += '</td >'
					tbody += '<td id = "1" class = "coloana2">';
					tbody += '1';
					tbody += '</td>'
					tbody += '<td class = "coloana3">';
					tbody += '2';
					tbody += '</td>'
					tbody += '<td id="3" class = "coloana4">';
					tbody += '3';
					tbody += '</td>'
					tbody += '<td class = "coloana5">';
					tbody += '4';
					tbody += '</td>'
					tbody += '<td class = "coloana6">';
					tbody += '5';
					tbody += '</td>'
					tbody += '<td class = "coloana7">';
					tbody += '6';
					tbody += '</td>'
					tbody += '<td class = "coloana8">';
					tbody += '7';
					tbody += '</td>'
					tbody += '<td class = "coloana9">';
					tbody += '8';
					tbody += '</td>'
					tbody += '<td class = "coloana10">';
					tbody += '9';
					tbody += '</td>'
					tbody += '<td class = "coloana11">';
					tbody += '10';
					tbody += '</td>'
			tbody += '</tr>\n';
			tbody += '<tr class = "linia3">';
					tbody += '<td class = "coloana1">';
					tbody += '2';
					tbody += '</td >'
					tbody += '<td class = "coloana2">';
					tbody += '2';
					tbody += '</td>'
					tbody += '<td id = "4" class = "coloana3">';
					tbody += '4';
					tbody += '</td>'
					tbody += '<td class = "coloana4">';
					tbody += '6';
					tbody += '</td>'
					tbody += '<td class = "coloana5">';
					tbody += '8';
					tbody += '</td>'
					tbody += '<td class = "coloana6">';
					tbody += '10';
					tbody += '</td>'
					tbody += '<td class = "coloana7">';
					tbody += '12';
					tbody += '</td>'
					tbody += '<td class = "coloana8">';
					tbody += '14';
					tbody += '</td>'
					tbody += '<td class = "coloana9">';
					tbody += '16';
					tbody += '</td>'
					tbody += '<td class = "coloana10">';
					tbody += '18';
					tbody += '</td>'
					tbody += '<td class = "coloana11">';
					tbody += '20';
					tbody += '</td>'
			tbody += '</tr>\n';
			tbody += '<tr class = "linia4">';
					tbody += '<td class = "coloana1">';
					tbody += '3';
					tbody += '</td >'
					tbody += '<td class = "coloana2">';
					tbody += '3';
					tbody += '</td>'
					tbody += '<td class = "coloana3">';
					tbody += '6';
					tbody += '</td>'
					tbody += '<td  id = "9" class = "coloana4">';
					tbody += '9';
					tbody += '</td>'
					tbody += '<td class = "coloana5">';
					tbody += '12';
					tbody += '</td>'
					tbody += '<td class = "coloana6">';
					tbody += '15';
					tbody += '</td>'
					tbody += '<td class = "coloana7">';
					tbody += '18';
					tbody += '</td>'
					tbody += '<td class = "coloana8">';
					tbody += '21';
					tbody += '</td>'
					tbody += '<td class = "coloana9">';
					tbody += '24';
					tbody += '</td>'
					tbody += '<td class = "coloana10">';
					tbody += '27';
					tbody += '</td>'
					tbody += '<td class = "coloana11">';
					tbody += '30';
					tbody += '</td>'
			tbody += '</tr>\n';
			tbody += '<tr class = "linia5">';
					tbody += '<td class = "coloana1">';
					tbody += '4';
					tbody += '</td >'
					tbody += '<td class = "coloana2">';
					tbody += '4';
					tbody += '</td>'
					tbody += '<td class = "coloana3">';
					tbody += '8';
					tbody += '</td>'
					tbody += '<td class = "coloana4">';
					tbody += '12';
					tbody += '</td>'
					tbody += '<td  id = "16" class = "coloana5">';
					tbody += '16';
					tbody += '</td>'
					tbody += '<td class = "coloana6">';
					tbody += '20';
					tbody += '</td>'
					tbody += '<td class = "coloana7">';
					tbody += '24';
					tbody += '</td>'
					tbody += '<td class = "coloana8">';
					tbody += '28';
					tbody += '</td>'
					tbody += '<td class = "coloana9">';
					tbody += '32';
					tbody += '</td>'
					tbody += '<td class = "coloana10">';
					tbody += '36';
					tbody += '</td>'
					tbody += '<td class = "coloana11">';
					tbody += '40';
					tbody += '</td>'
			tbody += '</tr>\n';
			tbody += '<tr class = "linia6">';
					tbody += '<td class = "coloana1">';
					tbody += '5';
					tbody += '</td >'
					tbody += '<td class = "coloana2">';
					tbody += '5';
					tbody += '</td>'
					tbody += '<td class = "coloana3">';
					tbody += '10';
					tbody += '</td>'
					tbody += '<td class = "coloana4">';
					tbody += '15';
					tbody += '</td>'
					tbody += '<td class = "coloana5">';
					tbody += '20';
					tbody += '</td>'
					tbody += '<td  id = "25" class = "coloana6">';
					tbody += '25';
					tbody += '</td>'
					tbody += '<td class = "coloana7">';
					tbody += '30';
					tbody += '</td>'
					tbody += '<td class = "coloana8">';
					tbody += '35';
					tbody += '</td>'
					tbody += '<td class = "coloana9">';
					tbody += '40';
					tbody += '</td>'
					tbody += '<td class = "coloana10">';
					tbody += '45';
					tbody += '</td>'
					tbody += '<td class = "coloana11">';
					tbody += '50';
					tbody += '</td>'
			tbody += '</tr>\n';
			tbody += '<tr class = "linia7">';
					tbody += '<td class = "coloana1">';
					tbody += '6';
					tbody += '</td >'
					tbody += '<td class = "coloana2">';
					tbody += '6';
					tbody += '</td>'
					tbody += '<td class = "coloana3">';
					tbody += '12';
					tbody += '</td>'
					tbody += '<td class = "coloana4">';
					tbody += '18';
					tbody += '</td>'
					tbody += '<td class = "coloana5">';
					tbody += '24';
					tbody += '</td>'
					tbody += '<td class = "coloana6">';
					tbody += '30';
					tbody += '</td>'
					tbody += '<td id = "36" class = "coloana7">';
					tbody += '36';
					tbody += '</td>'
					tbody += '<td class = "coloana8">';
					tbody += '42';
					tbody += '</td>'
					tbody += '<td class = "coloana9">';
					tbody += '48';
					tbody += '</td>'
					tbody += '<td class = "coloana10">';
					tbody += '54';
					tbody += '</td>'
					tbody += '<td class = "coloana11">';
					tbody += '60';
					tbody += '</td>'
			tbody += '</tr>\n';
			tbody += '<tr class = "linia8">';
					tbody += '<td class = "coloana1">';
					tbody += '7';
					tbody += '</td >'
					tbody += '<td class = "coloana2">';
					tbody += '7';
					tbody += '</td>'
					tbody += '<td class = "coloana3">';
					tbody += '14';
					tbody += '</td>'
					tbody += '<td class = "coloana4">';
					tbody += '21';
					tbody += '</td>'
					tbody += '<td class = "coloana5">';
					tbody += '28';
					tbody += '</td>'
					tbody += '<td class = "coloana6">';
					tbody += '35';
					tbody += '</td>'
					tbody += '<td class = "coloana7">';
					tbody += '42';
					tbody += '</td>'
					tbody += '<td id = "49" class = "coloana8">';
					tbody += '49';
					tbody += '</td>'
					tbody += '<td class = "coloana9">';
					tbody += '56';
					tbody += '</td>'
					tbody += '<td class = "coloana10">';
					tbody += '63';
					tbody += '</td>'
					tbody += '<td class = "coloana11">';
					tbody += '70';
					tbody += '</td>'
			tbody += '</tr>\n';
			tbody += '<tr class = "linia9">';
					tbody += '<td class = "coloana1">';
					tbody += '8';
					tbody += '</td >'
					tbody += '<td class = "coloana2">';
					tbody += '8';
					tbody += '</td>'
					tbody += '<td class = "coloana3">';
					tbody += '16';
					tbody += '</td>'
					tbody += '<td class = "coloana4">';
					tbody += '24';
					tbody += '</td>'
					tbody += '<td class = "coloana5">';
					tbody += '32';
					tbody += '</td>'
					tbody += '<td class = "coloana6">';
					tbody += '40';
					tbody += '</td>'
					tbody += '<td class = "coloana7">';
					tbody += '48';
					tbody += '</td>'
					tbody += '<td class = "coloana8">';
					tbody += '56';
					tbody += '</td>'
					tbody += '<td id = "64" class = "coloana9">';
					tbody += '64';
					tbody += '</td>'
					tbody += '<td class = "coloana10">';
					tbody += '72';
					tbody += '</td>'
					tbody += '<td class = "coloana11">';
					tbody += '80';
					tbody += '</td>'
			tbody += '</tr>\n';
			tbody += '<tr class = "linia10">';
					tbody += '<td class = "coloana1">';
					tbody += '9';
					tbody += '</td >'
					tbody += '<td class = "coloana2">';
					tbody += '9';
					tbody += '</td>'
					tbody += '<td class = "coloana3">';
					tbody += '18';
					tbody += '</td>'
					tbody += '<td class = "coloana4">';
					tbody += '27';
					tbody += '</td>'
					tbody += '<td class = "coloana5">';
					tbody += '36';
					tbody += '</td>'
					tbody += '<td class = "coloana6">';
					tbody += '45';
					tbody += '</td>'
					tbody += '<td class = "coloana7">';
					tbody += '54';
					tbody += '</td>'
					tbody += '<td class = "coloana8">';
					tbody += '63';
					tbody += '</td>'
					tbody += '<td class = "coloana9">';
					tbody += '72';
					tbody += '</td>'
					tbody += '<td id = "81" class = "coloana10">';
					tbody += '81';
					tbody += '</td>'
					tbody += '<td class = "coloana11">';
					tbody += '90';
					tbody += '</td>'
			tbody += '</tr>\n';
			tbody += '<tr class = "linia11">';
					tbody += '<td class = "coloana1">';
					tbody += '10';
					tbody += '</td >'
					tbody += '<td class = "coloana2">';
					tbody += '10';
					tbody += '</td>'
					tbody += '<td class = "coloana3">';
					tbody += '20';
					tbody += '</td>'
					tbody += '<td class = "coloana4">';
					tbody += '30';
					tbody += '</td>'
					tbody += '<td class = "coloana5">';
					tbody += '40';
					tbody += '</td>'
					tbody += '<td class = "coloana6">';
					tbody += '50';
					tbody += '</td>'
					tbody += '<td class = "coloana7">';
					tbody += '60';
					tbody += '</td>'
					tbody += '<td class = "coloana8">';
					tbody += '70';
					tbody += '</td>'
					tbody += '<td class = "coloana9">';
					tbody += '80';
					tbody += '</td>'
					tbody += '<td class = "coloana10">';
					tbody += '90';
					tbody += '</td>'
					tbody += '<td id = "100" class = "coloana11">';
					tbody += '100';
					tbody += '</td>'
			tbody += '</tr>\n';
    var tfooter = '</table></div>';
    document.getElementById('tabelpitagora').innerHTML = theader + tbody + tfooter;

}
