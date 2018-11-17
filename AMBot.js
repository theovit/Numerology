/*
 * Antimatter Dimensions bot
 * technodestructo
 * 09/02/17
 */

var intervals = [];

var amBot = document.createElement('script');
amBot.src = "//code.jquery.com/jquery-1.10.2.min.js";
document.getElementsByTagName('head')[0].appendChild(amBot);

var GUIsetup = setInterval(initGUI, 1000);

function initGUI() {
	$("#body").append('<div id="AMBotContainer" style="background-color:#29333d; width:105px; height:40px; position:absolute; top:0px; left:0; z-index:200000000">' +

			  '</div>'
	);
	
	$("#AMBotContainer").append('<button id="AMBotStartStop" style="height:80%; background-color:#c6d9ec; width:45px;">Start</button>');
	
	$("#AMBotStartStop").bind('click', function() {
		if($(this).html() === "Start") {
			startAMBot();
			$(this).html("Stop");
		}
		else {
			stopAMBot();
			$(this).html("Start");
		}
	});
	
	clearInterval(GUIsetup);
	
	$("#AMBotContainer").append('<div id="AMBotTitleTab" sytle="position:absolute; left:0; top:0; bottom:0; width:45px">');
	$("#AMBotTitleTab").append('<p style="position:absolute; right:0; top:0; bottom:0; font-family:Helvetica; font-weight:Light; font-size:14pt; color:#c6d9ec;">ambot&nbsp</p>');
	/*$("#dimensions").prepend('<div id="thisInfinity">');
	$("#dimensions").prepend('<div id="bestInfinity">');
	$("#dimensions").prepend('<div id="infinitied">');*/
}

function el(id) {
	return document.getElementById(id);
}

var $maxall = el("maxall");
var $secondResetLabel = el("secondResetLabel");
var $secondSoftReset = el("secondSoftReset");
var $resetLabel = el("resetLabel");
var $softReset = el("softReset");


function startAMBot() {
	intervals = [
		setInterval(clickinfinity, 1),
		setInterval(clickMaxAll, 1),
		setInterval(clickSingles, 1),
		setInterval(clickMaxes, 1),
		setInterval(clickInfDims, 1),
		setInterval(clickReplicanti, 1),
		setInterval(clickTheorem, 1),
		setInterval(function () {
			//var second_html = $secondResetLabel.innerHTML;
			var reset_html = $resetLabel.innerHTML;
			var reset_num = reset_html.replace(/^\D+|\D+$/g, "");
			//if(second_html === "Antimatter Galaxies: requires 71 Eighth Dimensions") {
				clickGalaxy();
			//}
			if(parseInt(reset_num) > 500) {
				clickBoost();
			}
		}, 1)
	];
}
	
function stopAMBot() {
	intervals.forEach(function (interval) { clearInterval(interval); });
}

//var $replicantiunlock = el("replicantiunlock");
var $replicantichance = el("replicantichance");
var $replicantiinterval = el("replicantiinterval");
var $replicantimax = el("replicantimax");
var $replicantireset = el("replicantireset");

function clickReplicanti(){
	//$replicantiunlock.click();
	$replicantichance.className==="storebtn" && $replicantichance.click();
	$replicantiinterval.className==="storebtn" && $replicantiinterval.click();
	$replicantimax.className==="storebtn" && $replicantimax.click();
	$replicantireset.className==="storebtn" && $replicantireset.click();
}

var $theoremam = el("theoremam");
var $theoremip = el("theoremip");

function clickTheorem(){
	$theoremam.className==="timetheorembtn" && $theoremam.click();
	$theoremip.className==="timetheorembtn" && $theoremip.click();
}

function clickMaxAll() {
	$maxall.click();
}

function clickGalaxy() {
	$secondSoftReset.click();
}

function clickBoost() {
	$softReset.click();
}

var $tickSpeed = el("tickSpeed");

function clickSingles() {
	$tickSpeed.click();
}

var $tickSpeedMax = el("tickSpeedMax");
var $eightMax = el("eightMax");
var $seventhMax = el("seventhMax");
var $sixthMax = el("sixthMax");
var $fifthMax = el("fifthMax");
var $fourthMax = el("fourthMax");
var $thirdMax = el("thirdMax");
var $secondMax = el("secondMax");
var $firstMax = el("firstMax");
var $newDim = el("newDimensionButton");

function clickMaxes() {
	$tickSpeedMax.click();
	$eightMax.className==="storebtn" && $eightMax.click();
	$firstMax.className==="storebtn" && $firstMax.click();
	$seventhMax.className==="storebtn" && $seventhMax.click();
	$sixthMax.className==="storebtn" && $sixthMax.click();
	$fifthMax.className==="storebtn" && $fifthMax.click();
	$fourthMax.className==="storebtn" && $fourthMax.click();
	$thirdMax.className==="storebtn" && $thirdMax.click();
	$secondMax.className==="storebtn" && $secondMax.click();
	$newDim.click();
}

var $infDim1 = el("infMax1");
var $infDim2 = el("infMax2");
var $infDim3 = el("infMax3");
var $infDim4 = el("infMax4");
var $infDim5 = el("infMax5");
var $infDim6 = el("infMax6");
var $infDim7 = el("infMax7");
var $infDim8 = el("infMax8");

function clickInfDims(){
	$infDim8.className==="storebtn" && $infDim8.click();
	$infDim7.className==="storebtn" && $infDim7.click();
	$infDim6.className==="storebtn" && $infDim6.click();
	$infDim5.className==="storebtn" && $infDim5.click();
	$infDim4.className==="storebtn" && $infDim4.click();
	$infDim3.className==="storebtn" && $infDim3.click();
	$infDim2.className==="storebtn" && $infDim2.click();
	$infDim1.className==="storebtn" && $infDim1.click();
}

var $bigcrunch = el("bigcrunch");

function clickinfinity() {
	$bigcrunch.style.display === "block" && $bigcrunch.click();
}

//var amBot = document.createElement('script');
//amBot.src = "https://raw.github.com/technodestructo/AMBot/am_bot.js";
//document.getElementsByTagName('head')[0].appendChild(amBot);