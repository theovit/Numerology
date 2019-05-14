//sweets-BlingBling - https://stackoverflow.com/users/427242
//https://stackoverflow.com/questions/3514784/what-is-the-best-way-to-detect-a-mobile-device?page=1&tab=votes#tab-top
var isMobile = false; //initiate as false
// device detection
if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
	|| /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
	isMobile = true;
}

if (isMobile == true) {
	// Map [Enter] key to work like the [Tab] key
	// Daniel P. Clark 2014

	// Catch the keydown for the entire document
	$(document).keydown(function (e) {

		// Set self as the current item in focus
		var self = $(':focus'),
			// Set the form by the current item in focus
			form = self.parents('form:eq(0)'),
			focusable;

		// Array of Indexable/Tab-able items
		focusable = form.find('input,ons-input,a,select,button,textarea,div[contenteditable=true]').filter(':visible');

		function enterKey() {
			if (e.which === 13 && !self.is('textarea,div[contenteditable=true]')) { // [Enter] key

				// If not a regular hyperlink/button/textarea
				if ($.inArray(self, focusable) && (!self.is('a,button'))) {
					// Then prevent the default [Enter] key behaviour from submitting the form
					e.preventDefault();
				} // Otherwise follow the link/button as by design, or put new line in textarea

				// Focus on the next item (either previous or next depending on shift)
				focusable.eq(focusable.index(self) + (e.shiftKey ? -1 : 1)).focus();

				return false;
			}
		}
		// We need to capture the [Shift] key and check the [Enter] key either way.
		if (e.shiftKey) { enterKey() } else { enterKey() }
	});
}

function Calculation(FoundY) {
	//pulls in HTML Elements
	var Day = document.getElementById('userInputDay').value;
	var Month = document.getElementById('userInputMonth').value;
	var Year = document.getElementById('userInputYear').value;
	var FullName = ("" + document.getElementById('userInputFirstName').value + document.getElementById('userInputMiddleName').value + document.getElementById('userInputLastName').value).toString().toUpperCase();
	//Starts using the "convert()" function to assign numbers to letters
	var Name = convert(FullName, FoundY)
	//Starts the reduction process and addition 
	var LLNWhole = parseInt(Month) + parseInt(Day) + parseInt(reduce(Year, true))
	var LLNReduced = reduce(LLNWhole)
	var SNReduced = reduce(Name.SNWWhole)
	var OPNReduced = reduce(Name.OPNWhole)
	var PODReduced = reduce(Name.PODNWhole)
	//Sets the vareables for output to HTML
	var LLNResult = "Life Lesson: " + LLNWhole + "/" + LLNReduced;
	var OPNResult = "Outer Personality: " + Name.OPNWhole + "/" + OPNReduced;
	var SNResult = "Soul: " + Name.SNWWhole + "/" + SNReduced;
	var PODNResult = "Path of Destiny: " + Name.PODNWhole + "/" + PODReduced;
	//Adds the new calculations to the HTML
	if (LLNWhole != 0 && isNaN(LLNWhole) == false) {
		document.getElementById("LLNResult").innerHTML = LLNResult;
	}
	if (Name.PODNWhole != 0) {
		document.getElementById("OPNResult").innerHTML = OPNResult;
		document.getElementById("SNResult").innerHTML = SNResult;
		document.getElementById("PODNResult").innerHTML = PODNResult;
	}

}
/*This function does the reduction of multi-digit numbers.
It will first get the length then add every digit individually.
It will then check if it needs to be reduced further and will continue if specified.
Outputting a single digit number that is the result of all other numbers summed*/
function reduce(Value, Once = false) {
	var i = 0;
	var ValueLength = parseInt(Value.toString().length);
	var ValueTemp = 0;
	while (i < ValueLength) {
		ValueTemp += parseInt(Value.toString().charAt(i));
		i++;
	}
	if (!isNaN(ValueTemp)) {
		if (parseInt(ValueTemp.toString().length) >= 2 && Once == false) {
			ValueTemp = reduce(ValueTemp)
		}
		return ValueTemp
	}
}
/*Converts letters to numbers.
Each letter has a number assigned to it based on its position in the alphabet.
A=1 B=2 J=(10)1 U=(21)3 and on. From there all the Vowles then contents are added together.
Creating two numbers, which then get added together to create the 3rd.
All three numbers will be reduced by the end*/

function findY() {
	var FullName = ("" + document.getElementById('userInputFirstName').value + document.getElementById('userInputMiddleName').value + document.getElementById('userInputLastName').value).toString().toUpperCase();
	var FullNameLength = parseInt(FullName.length);
	var i = 0;
	while (i < FullNameLength) {
		NameTemp1 = FullName.charAt(i);
		if (NameTemp1 == "Y") {
			var FoundY = true;
		}
		i++
	}
	if (FoundY == true) {
		functionConfirm("You seam to have a Y in your name. Which sound dose it make?", function Yes() { Calculation("V") }, function No() { Calculation("C") })
	} else {
		Calculation()
	}
}

function convert(Value, FoundY) {
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
			if (FoundY == "V") {
				SNTemp = 7;
			} else if (FoundY == "C") {
				OPNTemp = 7;
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
	return {
		OPNWhole: OPNWhole,
		SNWWhole: SNWWhole,
		PODNWhole: PODNWhole
	}
}

function functionConfirm(msg, myYes, myNo) {
	var confirmBox = $("#confirm");
	confirmBox.find(".message").text(msg);
	confirmBox.find(".yes,.no").unbind().click(function () {
		confirmBox.hide();
	});
	confirmBox.find(".yes").click(myYes);
	confirmBox.find(".no").click(myNo);
	confirmBox.show();
}

window.fn = {};

window.fn.open = function () {
	var menu = document.getElementById('menu');
	menu.open();
};

window.fn.load = function (page) {
	var content = document.getElementById('content');
	var menu = document.getElementById('menu');
	content.load(page)
		.then(menu.close.bind(menu));
}


