import React, { useState } from 'react';
import './Calculator.scss';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [memory, setMemory] = useState(0);
  const [waitingForOperand, setWaitingForOperand] = useState(true);
  const [pendingOperator, setPendingOperator] = useState(null);
  const [firstOperand, setFirstOperand] = useState(null);

  const calculate = (rightOperand, pendingOperator) => {
    let newResult = 0;
    const leftOperand = firstOperand;

    switch (pendingOperator) {
      case '+':
        newResult = leftOperand + rightOperand;
        break;
      case '-':
        newResult = leftOperand - rightOperand;
        break;
      case '×':
        newResult = leftOperand * rightOperand;
        break;
      case '÷':
        if (rightOperand === 0) {
          return 'Error';
        }
        newResult = leftOperand / rightOperand;
        break;
      default:
        return rightOperand;
    }
    return newResult;
  };

  const inputDigit = (digit) => {
    if (waitingForOperand) {
      setDisplay(String(digit));
      setWaitingForOperand(false);
    } else {
      setDisplay(display === '0' ? String(digit) : display + digit);
    }
  };

  const inputDecimal = () => {
    if (waitingForOperand) {
      setDisplay('0.');
      setWaitingForOperand(false);
    } else if (display.indexOf('.') === -1) {
      setDisplay(display + '.');
    }
  };

  const clear = () => {
    setDisplay('0');
    setFirstOperand(null);
    setWaitingForOperand(true);
    setPendingOperator(null);
  };

  const clearEntry = () => {
    setDisplay('0');
    setWaitingForOperand(true);
  };

  const percentage = () => {
    const currentValue = parseFloat(display);
    if (currentValue === 0) return;
    const newValue = currentValue / 100;
    setDisplay(String(newValue));
    setWaitingForOperand(true);
  };

  const changeSign = () => {
    const value = parseFloat(display);
    setDisplay(String(-value));
  };

  const memoryAdd = () => {
    setMemory(memory + parseFloat(display));
  };

  const memorySubtract = () => {
    setMemory(memory - parseFloat(display));
  };

  const memoryRecall = () => {
    setDisplay(String(memory));
    setWaitingForOperand(true);
  };

  const memoryClear = () => {
    setMemory(0);
  };

  const handleOperator = (operator) => {
    const operand = parseFloat(display);

    if (firstOperand === null) {
      setFirstOperand(operand);
    } else if (pendingOperator) {
      const result = calculate(operand, pendingOperator);
      setDisplay(String(result));
      setFirstOperand(result);
    }

    setPendingOperator(operator);
    setWaitingForOperand(true);
  };

  const equals = () => {
    const operand = parseFloat(display);

    if (pendingOperator && !waitingForOperand) {
      const result = calculate(operand, pendingOperator);
      setDisplay(String(result));
      setFirstOperand(null);
      setPendingOperator(null);
      setWaitingForOperand(true);
    }
  };

  return (
    <div className="calculator">
      <div className="calculator-display">{display}</div>
      <div className="calculator-keypad">
        <div className="input-keys">
          <div className="function-keys">
            <button className="calculator-key key-clear" onClick={() => clear()}>AC</button>
            <button className="calculator-key key-sign" onClick={() => changeSign()}>±</button>
            <button className="calculator-key key-percent" onClick={() => percentage()}>%</button>
          </div>
          <div className="memory-keys">
            <button className="calculator-key key-memory" onClick={() => memoryClear()}>MC</button>
            <button className="calculator-key key-memory" onClick={() => memoryRecall()}>MR</button>
            <button className="calculator-key key-memory" onClick={() => memoryAdd()}>M+</button>
            <button className="calculator-key key-memory" onClick={() => memorySubtract()}>M-</button>
          </div>
          <div className="digit-keys">
            <button className="calculator-key key-0" onClick={() => inputDigit(0)}>0</button>
            <button className="calculator-key key-dot" onClick={() => inputDecimal()}>●</button>
            <button className="calculator-key key-1" onClick={() => inputDigit(1)}>1</button>
            <button className="calculator-key key-2" onClick={() => inputDigit(2)}>2</button>
            <button className="calculator-key key-3" onClick={() => inputDigit(3)}>3</button>
            <button className="calculator-key key-4" onClick={() => inputDigit(4)}>4</button>
            <button className="calculator-key key-5" onClick={() => inputDigit(5)}>5</button>
            <button className="calculator-key key-6" onClick={() => inputDigit(6)}>6</button>
            <button className="calculator-key key-7" onClick={() => inputDigit(7)}>7</button>
            <button className="calculator-key key-8" onClick={() => inputDigit(8)}>8</button>
            <button className="calculator-key key-9" onClick={() => inputDigit(9)}>9</button>
          </div>
        </div>
        <div className="operator-keys">
          <button className="calculator-key key-divide" onClick={() => handleOperator('÷')}>÷</button>
          <button className="calculator-key key-multiply" onClick={() => handleOperator('×')}>×</button>
          <button className="calculator-key key-subtract" onClick={() => handleOperator('-')}>−</button>
          <button className="calculator-key key-add" onClick={() => handleOperator('+')}>+</button>
          <button className="calculator-key key-equals" onClick={() => equals()}>=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
