//手動等待秒數改變標題
setTimeout(seth1, 2000);
//猜數字
const targetNumber = parseInt(Math.random() * 100);
console.log(targetNumber);
displayTextOnConsole("目標數字介於0~100之間，你需要根據提示，猜到正確的數字來贏得遊戲！");
displayTextOnConsole("Tips：可點擊 送出按鈕 或 鍵盤Enter 來提交答案喔！");
displayTextOnConsole("請輸入一個數字");

const inputObject = document.getElementById("input")
//取得按鈕
let gameButton = document.querySelector(".testOutput")

//監聽Enter
inputObject.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        event.preventDefault(); // 防止預設的 Enter 鍵行為（例如提交表單）
        gameButton.click(); // 模擬按下按鈕
    }
});

//監聽點擊
gameButton.addEventListener("click", onSubmmit);
//傳入變數的漂亮寫法
// consolebutton.addEventListener("click", () => displayTextOnConsole("test"));

function isScrolledToBottom() {
    var console = document.querySelector(".console");
// allow 1px inaccuracy by adding 1
    return console.scrollHeight - console.clientHeight <= console.scrollTop + 1;
}

function seth1() {
    const head1 = document.querySelector("h1");
    head1.textContent = "歡迎來到猜數字遊戲（Number Guessing）";
}

function displayTextOnConsole(textToDisplay) {
    const targetConsole = document.querySelector(".console");
    const para = document.createElement("p");
    para.textContent = textToDisplay;
    targetConsole.appendChild(para);
    //強制將有Overflow的區塊滾動到底部//可看邏輯移動執行位置
    targetConsole.scrollTop = targetConsole.scrollHeight - targetConsole.clientHeight;
}

function onSubmmit() {

    console.log(inputObject);
    console.log(inputObject.value);
    console.log("====");
    var nowNumberStr = inputObject.value;
    //錯誤寫法，因為如果字串前半段是數字的話，parseInt還是會解析成功 //var nowNumber = parseInt(nowNumberStr); //if isNaN(nowNumber)
    //較好寫法，用正則表達式判斷
    var numberPattern = /^\d+$/;
    if (!numberPattern.test(nowNumberStr)) {
        const targetConsole = document.querySelector(".console");
        while (targetConsole.firstChild) {
            targetConsole.removeChild(targetConsole.firstChild);
        }
        displayTextOnConsole("目標數字介於0~100之間，你需要根據提示，猜到正確的數字來贏得遊戲！");
        displayTextOnConsole("Tips：可點擊 送出按鈕 或 鍵盤Enter 來提交答案喔！");
        displayTextOnConsole("輸入錯誤，請輸入數字");
        inputObject.value = "";
    } else {
        var nowNumber = parseInt(nowNumberStr);
        if (targetNumber > nowNumber) {
            displayTextOnConsole("太小，猜大一點");
            inputObject.value = "";
        }
        if (targetNumber < nowNumber) {
            displayTextOnConsole("太大，猜小一點");
            inputObject.value = "";
        }
        if (targetNumber === nowNumber) {
            displayTextOnConsole("你猜中了");
            inputObject.value = "";
            inputObject.setAttribute("disabled", "true");
            gameButton.setAttribute("disabled", "true");
        }
    }
}