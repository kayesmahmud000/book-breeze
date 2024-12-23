import React from 'react';
import { use } from 'react';
import { useLoaderData } from 'react-router-dom';

const CategoryBookPage = () => {
    const categoryBooks= useLoaderData()
    
    return (
        <div>
            Hare is book {categoryBooks.length}
        </div>
    );
};

export default CategoryBookPage;