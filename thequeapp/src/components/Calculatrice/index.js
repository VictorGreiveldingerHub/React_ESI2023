import React from 'react';
import './styles.css';

const Calculatrice = ({updateCalc, calc, result, calculate, deleteLast}) => {
    const createDigits = () => {
        const digits = [];
        
        for (let i = 1; i < 10; i++){
            digits.push(
                <button key={i} onClick={() => updateCalc(i.toString())}>{i}</button>
            );
        };
        
        return digits;
    };
    
    return (
        <div className="calculatrice" id="calculatrice">
            <h2>Calculatrice</h2>
            <div className="machine">
                <div className="result">
                    {result ? <span>{result}</span> : '' }
                    &nbsp;
                    { calc || "0"}
                </div>
                <div className="operateurs">
                    <button onClick={() => updateCalc('/')}>/</button>
                    <button onClick={() => updateCalc('*')}>*</button>
                    <button onClick={() => updateCalc('+')}>+</button>
                    <button onClick={() => updateCalc('-')}>-</button>
                    <button onClick={deleteLast}>DEL</button>
                </div>
                
                <div className="numbers">
                    {createDigits()}
                    <button onClick={() => updateCalc('0')}>0</button>
                    <button onClick={() => updateCalc('.')}>.</button>
                    <button onClick={calculate}>=</button>
                </div>
            </div>
        </div>
    );
};

export default Calculatrice;