var formulaInput = document.getElementById("formula-input")
var calcHistDiv =document.getElementById("calc-history")

formulaInput.addEventListener("keyup", function(e) {
    if (e.code === "Enter")
    calculate();
})

function calculate () {
    // 입력칸의 문자열이 사칙연산 형식이 맞는지 확인
    var fm = formulaInput.value;
var formulaRegex = /^\d+(.\d+)?[+\-*/]{1}\d+(.\d+)?$/;
var formulaValid = formulaRegex.test(fm);

var resultText = "틀린 형식입니다.";
if (formulaValid) {
    //형식에 맞을시 식을 계산, 결과 문자열은 설정
    var answer;
    eval('answer=' +fm);
    resultText = fm +" = ";
    resultText
    += (answer % 1 > 0 ? answer.toFixed(2) : answer.toString());

}

//clac-history 상자에 넣을 또 다른 상자를 생성하고 내용을 설정한 뒤 삽입
var resultDiv = document.createElement("DIV")
resultDiv.appendChild(document.createTextNode(resultText));
if (!formulaValid)
resultDiv.classList.add("invalid");
calcHistDiv.insertBefore(resultDiv, calcHistDiv.firstChild);

//입력칸을 빈칸으로
formulaInput.value = "";
}