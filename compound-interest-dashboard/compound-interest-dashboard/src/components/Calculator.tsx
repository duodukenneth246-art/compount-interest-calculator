import React, { useState } from 'react';

const Calculator: React.FC = () => {
    const [principal, setPrincipal] = useState<number>(0);
    const [rate, setRate] = useState<number>(0);
    const [time, setTime] = useState<number>(0);
    const [frequency, setFrequency] = useState<number>(1);
    const [result, setResult] = useState<number | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        switch (name) {
            case 'principal':
                setPrincipal(Number(value));
                break;
            case 'rate':
                setRate(Number(value));
                break;
            case 'time':
                setTime(Number(value));
                break;
            case 'frequency':
                setFrequency(Number(value));
                break;
            default:
                break;
        }
    };

    const calculateCompoundInterest = () => {
        const amount = principal * Math.pow((1 + rate / (100 * frequency)), frequency * time);
        const compoundInterest = amount - principal;
        setResult(compoundInterest);
    };

    return (
        <div>
            <h2>Compound Interest Calculator</h2>
            <input
                type="number"
                name="principal"
                value={principal}
                onChange={handleInputChange}
                placeholder="Principal Amount"
            />
            <input
                type="number"
                name="rate"
                value={rate}
                onChange={handleInputChange}
                placeholder="Annual Interest Rate (%)"
            />
            <input
                type="number"
                name="time"
                value={time}
                onChange={handleInputChange}
                placeholder="Time (years)"
            />
            <input
                type="number"
                name="frequency"
                value={frequency}
                onChange={handleInputChange}
                placeholder="Compounding Frequency (times per year)"
            />
            <button onClick={calculateCompoundInterest}>Calculate</button>
            {result !== null && <h3>Compound Interest: {result.toFixed(2)}</h3>}
        </div>
    );
};

export default Calculator;