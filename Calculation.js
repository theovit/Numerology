function BirthDayCalculation() {
	var LLNTemp1 = 0;
	var LLNTemp2 = 0;
	var LLNReduce1 = 0;
	var LLNReduce2 = 0;
	var NameTemp1 = 0;
	var NameTemp2 = 0;
	var OPNReduce1 = 0;
	var OPNReduce2 = 0;
	var SNReduce1 = 0;
	var SNReduce2 = 0;
	var PODNReduce1 = 0;
	var PODNReduce2 = 0;
	var Reduction1 = 0;
	var LLNReduceFinal2 = 0;
	var OPNWhole = 0;
	var SNWWhole = 0;
	var Day = document.getElementById('userInputDay').value;
	var Month = document.getElementById('userInputMonth').value;
	var Year = document.getElementById('userInputYear').value;
	var FirstName = document.getElementById('userInputFirstName').value;
	var MiddleName = document.getElementById('userInputMiddleName').value;
	var LastName = document.getElementById('userInputLastName').value;
	var LLN = ("" + Day + Month + Year).toString();
	var FullName = ("" + FirstName + MiddleName + LastName).toString().toUpperCase();
	var FullNameLength = parseInt(FullName.length);
	var LLNLength = parseInt(("" + Day + Month + Year).length);
	var i = 0;
	var LLNTemp2 = 0;
	while (i < LLNLength) {
		LLNTemp1 = parseInt(LLN.charAt(i));
		LLNTemp2 += LLNTemp1;
		i++;
	}
	if (LLNTemp2 > 9) {
		var i = 0;
		var a = parseInt(LLNTemp2.toString().length);
		var LLNReduceFinal1 = 0;
		var LLNTemp3String = LLNTemp2.toString();
			while (i < a) {
			LLNReduce1 = parseInt(LLNTemp3String.charAt(i));
			LLNReduceFinal1 += LLNReduce1;
			i++;
			}
		var LLNReduceFinal2 = 0;
		var Reduction1 = LLNReduceFinal1;
		if (LLNReduceFinal1 > 9) {
			var i = 0;
			var a = parseInt(Reduction1.toString().length);
			var LLNTemp3String = Reduction1.toString();
			while (i < a) {
				LLNReduce1 = parseInt(LLNTemp3String.charAt(i));
				LLNReduceFinal2 += LLNReduce1;
				i++;
			}
		}
	}
	var OPN = 0;
	var SN = 0;
	var PODN = 0;
	var PODNWhole = 0;
	var i = 0;
	while (i < FullNameLength) {
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
		if (NameTemp1 == "R") OPNTemp =9;
		OPNWhole += OPNTemp;
		SNWWhole += SNTemp;
		PODNWhole += SNTemp;
		PODNWhole += OPNTemp;
		i++;
	}
	var OPN = OPNWhole;
	var OPNReduceFinal = 0;
	while (OPN > 9) {
		var OPNLength = parseInt(OPN.toString().length);	
//		var OPNTempString = OPN.toString();
		var i = 0;
		while (i < OPNLength) {
			OPNReduce1 += parseInt(OPN.toString().charAt(i));
			i++;
		}
			OPNReduceFinal = OPNReduce1;
			OPN = OPNReduce1;
			OPNReduce1 = 0;
	}	
	var SN = SNWWhole;
	var SNReduceFinal = 0;
	while (SN > 9) {
		var SNLength = parseInt(SN.toString().length);	
//		var SNTempString = SN.toString();
		var i = 0;
		while (i < SNLength) {
			SNReduce1 += parseInt(SN.toString().charAt(i));
			i++;
		}
			SNReduceFinal = SNReduce1;
			SN = SNReduce1;
			SNReduce1 = 0;
	}	
	var PODN = PODNWhole;
	var PODNReduceFinal = 0;
	while (PODN > 9) {
		var PODNLength = parseInt(PODN.toString().length);	
//		var PODNTempString = PODN.toString();
		 i = 0;
		while (i < PODNLength) {
			PODNReduce1 += parseInt(PODN.toString().charAt(i));
			i++;
		}
		PODNReduceFinal = PODNReduce1;
		PODN = PODNReduce1;
		PODNReduce1 = 0;
	}
	var LLNResult = "Your Life Lesson Number Is:" + LLNTemp2 + "/" + Reduction1;
	if (LLNReduceFinal2 != 0) {
		LLNResult = LLNResult + "/" + LLNReduceFinal2;
	}
	var OPNResult = "Your Outer Personality Number is:" + OPNWhole;
	if (OPNReduceFinal != 0) {
		var OPNResult = OPNResult + "/" + OPNReduceFinal;
	}
	var SNResult = "Your Soul Number is:" + SNWWhole;
	if (SNReduceFinal != 0) {
		var SNResult = SNResult + "/" + SNReduceFinal;
	}
	var PODNResult = "Your Path of Destiny Number is:" + PODNWhole;
	if (PODNReduceFinal != 0) {
		var PODNResult = PODNResult + "/" + PODNReduceFinal;
	}
	if (LLNTemp2 != 0) {
		document.getElementById("LLNResult").innerHTML = LLNResult;
	}
	if (PODNWhole != 0) {
		document.getElementById("OPNResult").innerHTML = OPNResult;
		document.getElementById("SNResult").innerHTML = SNResult;
		document.getElementById("PODNResult").innerHTML = PODNResult;
	}
		
}