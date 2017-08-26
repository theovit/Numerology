Calculate();
var a, b;
var Month = document.getElementById('userInputMonth').value;
var Day = document.getElementById('userInputDay').value;
var Year = document.getElementById('userInputYear').value;
function Calculate() {
	var Month = document.getElementById('userInputMonth').value;
	var Day = document.getElementById('userInputDay').value;
	var Year = Reduction((document.getElementById('userInputYear').value).toString());
	var 
	var BirthDay = (Month + Day + Year).toString();
	var BirthDayLength = parseInt(BirthDay.length);
	var MasterArray = [];
	
	MasterArray.push(Reduction(BirthDay));
	NameConversion(FullName);
//	var MasterArrayLength = MasterArray.length;
	for (a = 0; a < MasterArray.length; a++) {
		MasterArray[a][b] = Reduction(MasterArray[a]);
	}
	//Reduction(MasterArray);
	//MasterArray.push(NameConversion(FullName));


	function Reduction(a) {
		var LoopTemp = parseInt(a),
			LoopTempLength = 0,
			LoopTempString, i = 0,
			TempReduce = 0,
			Result = [],
			ResultLength, Results = [];
		while (LoopTemp > 9) {
			LoopTempLength = parseInt(LoopTemp.toString().length);
			LoopTempString = LoopTemp.toString();
			for (i = 0; i < LoopTempLength; i++) {
				TempReduce += parseInt(LoopTempString.charAt(i));
			}
			if (TempReduce == 11 || TempReduce == 22 || TempReduce == 33 || TempReduce == 44) {
				if (i == 0) {
					
				}
			}
			Result.push(TempReduce);
			LoopTemp = TempReduce;
			TempReduce = 0;
		}
//		ResultLength = Result.length;
//		for (i = 0; i < ResultLength; i++) {
//			if (i == 0) {
//				Results = Result[i];
//			}
//			if (i != 0) {
//				Results += "/" + Result[i];
//			}
//		}
		return Results;
	}
}
