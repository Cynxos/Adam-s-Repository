import React, { useState, useEffect } from 'react';
import useCounter from './useCounter';

const CombinedComponent: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [data, setData] = useState<string[]>([]);
    const { count, increment, decrement } = useCounter(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                const result = await response.json();
                setData(result.slice(0, 5).map((item: any) => item.title)); // Limiting to first 5 items
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Combined Component</h1>
            <div>
                <label>
                    Name: 
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <p>Hello, {name}</p>
            </div>

            <div>
                <p>Current Count: {count}</p>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
            </div>

            <div>
                <h2>Fetched Data</h2>
                <ul>
                    {data.map((title, index) => (
                        <li key={index}>{title}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CombinedComponent;
