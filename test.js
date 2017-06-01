var FunctionResults = [], i;
var LongNumber = [611993, 741993];
var LongNumberLength = LongNumber.length;
for (i = 0; i < LongNumberLength; i++){
   FunctionResults.push(myFunction(LongNumber[i]));
}
//FunctionResults.push(myFunction(LongNumber[0]));
//FunctionResults.push(myFunction(LongNumber[1]));

function myFunction(a) {
    var LoopTemp = parseInt(a), LoopTempLength = 0, LoopTempString, i = 0, TempReduce = 0, Result = [], ResultLength, Results = [];
    while (LoopTemp > 9) {
        LoopTempLength = parseInt(LoopTemp.toString().length);
        LoopTempString = LoopTemp.toString();
        for (i = 0; i < LoopTempLength; i++) {
            TempReduce += parseInt(LoopTempString.charAt(i));
        }
        Result.push(TempReduce);
        LoopTemp = TempReduce;
        TempReduce = 0;
    }
    ResultLength = Result.length;
    for (i = 0; i < ResultLength; i++) {
        if (i == 0) {
            Results = Result[i];
        }
        if (i != 0) {
            Results += "/" + Result[i];
        }
    }
    return Results; 
}
document.getElementById("Result").innerHTML = FunctionResults;
