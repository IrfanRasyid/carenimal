import React from 'react';

const SearchResult = ({ filteredProducts }) => {
    return (
        <div>
            <h2>Search Results</h2>
            <ul>
                {filteredProducts.map((product) => (
                    <li key={product.id}>
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>Price: {product.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SearchResult;
