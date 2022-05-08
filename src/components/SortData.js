import React, { useState, useMemo } from 'react';

//Custom hook
const useSortableData = (items, config = null) => {
    const [sortConfig, setSortConfig] = useState(config);

    // Using useMemo() to avoin un necessary re render
    const sortedItems = useMemo(() => {
        let sortableItems = [...items];
        
        if (sortConfig !== null) {
            sortableItems.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? -1 : 1;
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? 1 : -1;
                }
                return 0;
            });
        }
        return sortableItems;
    }, [items, sortConfig]);

    const requestSort = (key) => {
        let direction = 'ascending';
        if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    return { items: sortedItems, requestSort, sortConfig };
};

const SortData = () => {

    const products = [
        { id: 1, name: 'Cheese', price: 4.9, stock: 20 },
        { id: 2, name: 'Milk', price: 1.9, stock: 32 },
        { id: 3, name: 'Yoghurt', price: 2.4, stock: 12 },
        { id: 4, name: 'Heavy Cream', price: 3.9, stock: 9 },
        { id: 5, name: 'Butter', price: 0.9, stock: 99 },
        { id: 6, name: 'Sour Cream ', price: 2.9, stock: 86 },
        { id: 7, name: 'Fancy French', price: 99, stock: 12 },
    ];

    const { items, requestSort, sortConfig } = useSortableData(products);
    
    const getClassNamesFor = (name) => {
        if (!sortConfig) return;
        return sortConfig.key === name ? sortConfig.direction : undefined;
    };

    return (
        <>
            <h3>Sortable Data Representation</h3>
            <div className="table_content">
                <table>
                    <thead>
                        <tr>
                            <th>
                                <button type="button" onClick={() => requestSort('name')} className={getClassNamesFor('name')} >Name</button>
                            </th>
                            <th>
                                <button type="button" onClick={() => requestSort('price')} className={getClassNamesFor('price')} >Price</button>
                            </th>
                            <th>
                                <button type="button" onClick={() => requestSort('stock')} className={getClassNamesFor('stock')} >In Stock</button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item) => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>${item.price}</td>
                                <td>{item.stock}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
};

export default SortData;
