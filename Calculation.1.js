function Calculation() {
	var Day = document.getElementById('userInputDay').value;
	var Month = document.getElementById('userInputMonth').value;
	var Year = document.getElementById('userInputYear').value;
	//	***************************************************************************************************************************************************************************************************************
	var FullName = ("" + document.getElementById('userInputFirstName').value + document.getElementById('userInputMiddleName').value + document.getElementById('userInputLastName').value).toString().toUpperCase();
	//	***************************************************************************************************************************************************************************************************************

	var Name = convert(FullName)
	var LLNWhole = parseInt(Month) + parseInt(Day) + parseInt(reduce(Year))
	var LLNReduced = reduce(LLNWhole)
	var SNReduced = reduce(Name.SNWWhole)
	var OPNReduced = reduce(Name.OPNWhole)
	var PODReduced = reduce(Name.PODNWhole)
	var LLNResult = "Your Life Lesson Number Is:" + LLNWhole + "/" + LLNReduced;
	var OPNResult = "Your Outer Personality Number is:" + Name.OPNWhole + "/" + OPNReduced;
	var SNResult = "Your Soul Number is:" + Name.SNWWhole + "/" + SNReduced;
	var PODNResult = "Your Path of Destiny Number is:" + Name.PODNWhole + "/" + PODReduced;
	if (LLNWhole != 0 && isNaN(LLNWhole) == false) {
		document.getElementById("LLNResult").innerHTML = LLNResult;
	}
	if (Name.PODNWhole != 0) {
		document.getElementById("OPNResult").innerHTML = OPNResult;
		document.getElementById("SNResult").innerHTML = SNResult;
		document.getElementById("PODNResult").innerHTML = PODNResult;
	}

}

function reduce(Value) {
	var i = 0;
	var ValueLength = parseInt(Value.toString().length);
	var ValueTemp = 0;
	while (i < ValueLength) {
		ValueTemp += parseInt(Value.toString().charAt(i));
		i++;
	}
	if (!isNaN(ValueTemp)) {
		if (parseInt(ValueTemp.toString().length) >= 2) {
			ValueTemp = reduce(ValueTemp)
		}
		return ValueTemp
	}
}

function convert(Value) {
	var FullNameLength = parseInt(Value.length);
	var PODNWhole = 0;
	var OPNWhole = 0;
	var SNWWhole = 0;
	var i = 0;
	while (i < FullNameLength) {
		NameTemp1 = Value.charAt(i);
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
		OPNWhole += OPNTemp;
		SNWWhole += SNTemp;
		PODNWhole += SNTemp;
		PODNWhole += OPNTemp;
		i++;
	}
	return{
		OPNWhole: OPNWhole,
		SNWWhole: SNWWhole,
		PODNWhole: PODNWhole
	}

}