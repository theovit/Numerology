Calculate();
var a, b;
function Calculate() {
	var BirthDay = (741993).toString();
	var FullName = "jakovdavnegrams".toString().toUpperCase();
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

	function NameConversion(FullName) {
		var i = 0,
			OPN = 0,
			SN = 0,
			PODN = 0,
			PODNWhole = 0,
			NameTemp1 = 0,
			OPNWhole = 0,
			SNWWhole = 0,
			FullNameLength = 0,
			OPNTemp = 0,
			SNTemp = 0;
//		var FullNameLength = parseInt(FullName.length);
		while (i < parseInt(FullName.length)) {
			NameTemp1 = FullName.charAt(i);
			var OPNTemp = 0;
			var SNTemp = 0;
			if (NameTemp1 == "A") SNTemp = 1;
			if (NameTemp1 == "J" || NameTemp1 == "S") OPNTemp = 1;
			if (NameTemp1 == "B" || NameTemp1 == "K" || NameTemp1 == "T") OPNTemp = 2;
			if (NameTemp1 == "C" || NameTemp1 == "L") OPNTemp = 3;
			if (NameTemp1 == "U") SNTemp = 3;
			if (NameTemp1 == "D" || NameTemp1 == "M" || NameTemp1 == "V") OPNTemp = 4;
			if (NameTemp1 == "E") SNTemp = 5;
			if (NameTemp1 == "N" || NameTemp1 == "W") OPNTemp = 5;
			if (NameTemp1 == "F" || NameTemp1 == "X") OPNTemp = 6;
			if (NameTemp1 == "O") SNTemp = 6;
			if (NameTemp1 == "G" || NameTemp1 == "P") OPNTemp = 7;
			if (NameTemp1 == "Y") {
				if (confirm('You seem to have a Y in your name.')) {

				}
			}
			if (NameTemp1 == "H" || NameTemp1 == "Q" || NameTemp1 == "Z") OPNTemp = 8;
			if (NameTemp1 == "I") SNTemp = 9;
			if (NameTemp1 == "R") OPNTemp = 9;
			SNWWhole += SNTemp;
			OPNWhole += OPNTemp;
			PODNWhole += SNTemp;
			PODNWhole += OPNTemp;
			i++;
		}
		MasterArray.push(SNWWhole);
		MasterArray.push(OPNWhole);
		MasterArray.push(PODNWhole)
			//	return [OPNWhole, SNWWhole, PODNWhole];
	}

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
