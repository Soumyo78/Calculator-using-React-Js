// import logo from './logo.svg';
import './App.css';

let num2 = null;
let num1 = null;
function onNumClick(inputNum){
    num1 = document.getElementById('input-box').value;
    num1 = num1.toString();
    num2 = num1 + inputNum;
    document.getElementById('input-box').value = num2;
}

function onClrClick(){
    num1 = document.getElementById('input-box').value;
    num1 = num1.toString();
    num2 = num1.slice(0, -1);
    document.getElementById('input-box').value = num2;
}

function onAClrClick(){
    document.getElementById('input-box').value = "";
    num1 = null;
    num2 = null;
}

function onRootOver(){
    num1 = document.getElementById('input-box').value;
    num1 = num1.toString();
    num2 = Math.sqrt(num1);
    document.getElementById('input-box').value = num2;
}

function onEql(){
    let a = document.getElementById('input-box').value;
    let result = eval(a);
    document.getElementById('input-box').value = result;
}

function onPercentClick(){
    num1 = document.getElementById('input-box').value;
    num1 = num1.toString();
    num2 = num1 + "*(1/100)";
    document.getElementById('input-box').value = num2;
}

function App() {
  return (
    <div className="App">
       <div className="input-box-container">
          <input id="input-box" type="text" value="" placeholder="0" disabled/>
        </div>
        <div className="num-pad">
            <div className="num-pad-1-2">
                <div className="num-pad-1">
                    <button id="btn-%" onClick={onPercentClick}>%</button>
                    <button id="btn-/" onClick={()=>onNumClick("/")}>/</button>
                    <button id="btn-*" onClick={()=>onNumClick("*")}>*</button>
                    <button id="btn-7" onClick={()=>onNumClick("7")}>7</button>
                    <button id="btn-8" onClick={()=>onNumClick("8")}>8</button>
                    <button id="btn-9" onClick={()=>onNumClick("9")}>9</button>
                    <button id="btn-4" onClick={()=>onNumClick("4")}>4</button>
                    <button id="btn-5" onClick={()=>onNumClick("5")}>5</button>
                    <button id="btn-6" onClick={()=>onNumClick("6")}>6</button>
                    <button id="btn-1" onClick={()=>onNumClick("1")}>1</button>
                    <button id="btn-2" onClick={()=>onNumClick("2")}>2</button>
                    <button id="btn-3" onClick={()=>onNumClick("3")}>3</button>
                </div>
                <div className="num-pad-2">
                    <button id="btn-0" onClick={()=>onNumClick("0")}>0</button>
                    <button id="btn-dot" onClick={()=>onNumClick(".")}>.</button>
                </div>
            </div>
            <div className="num-pad-3">
                <button id="btn-minus" onClick={()=>onNumClick("-")}>-</button>
                <button id="btn-plus" onClick={()=>onNumClick("+")}>+</button>
                <button id="btn-eql" onClick={onEql}>=</button>
            </div>
            <div className="num-pad-4">
                <button id="btn-c" onClick={onClrClick}>C</button>
                <button id="btn-ac" onClick={onAClrClick}>AC</button>
                <button id="btn-(" onClick={()=>onNumClick("(")}>(</button>
                <button id="btn-)" onClick={()=>onNumClick(")")}>)</button>
                <button id="btn-rootOver" onClick={onRootOver}>√</button>
            </div>
        </div>
    </div>
  );
}

export default App;
