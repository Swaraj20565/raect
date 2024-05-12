import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './Loder.css';

const MyComponent = () => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios('https://fakestoreapi.com/products');
                // Simulating a delay of 2 seconds before setting data and hiding loader
                await new Promise(resolve => setTimeout(resolve, 9000));
                setData(response.data);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, []); // Empty dependency array to run only once on mount

    return (
        <div>
            {isLoading ? (
                <div className="loader"></div>
            ) : (
                <div>
                    {/* Display your data here */}
                    {data && (
                        <ul>
                            {data.map(item => (
                                <li key={item.id}>{item.title}</li>
                            ))}
                        </ul>
                    )}
                </div>
            )}
        </div>
    );
};

export default MyComponent;
