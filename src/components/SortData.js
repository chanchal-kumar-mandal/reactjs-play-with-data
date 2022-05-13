import React, { useState, useMemo } from 'react';

//Custom hook
const useSortableData = (items, fieldOrder = null) => {
    const [sortFieldOrder, setSortFieldOrder] = useState(fieldOrder);

    const requestSort = (field) => {
        let order = 'ascending';
        if (sortFieldOrder && sortFieldOrder.field === field && sortFieldOrder.order === 'ascending') {
            order = 'descending';
        }
        setSortFieldOrder({ field, order });
    };

    // Using useMemo() to avoid un necessary re render for items, sortFieldOrder change
    const sortedItems = useMemo(() => {
        let sortableItems = [...items];
        
        if (sortFieldOrder !== null) {
            sortableItems.sort((a, b) => {
                if (a[sortFieldOrder.field] < b[sortFieldOrder.field]) {
                    return sortFieldOrder.order === 'ascending' ? -1 : 1;
                }
                if (a[sortFieldOrder.field] > b[sortFieldOrder.field]) {
                    return sortFieldOrder.order === 'ascending' ? 1 : -1;
                }
                return 0;
            });
        }
        return sortableItems;
    }, [items, sortFieldOrder]);

    return { sortFieldOrder, requestSort, items: sortedItems };
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

    const { sortFieldOrder, requestSort, items } = useSortableData(products);
    
    const getClassNamesFor = (fieldName) => {
        if (!sortFieldOrder) return;
        return sortFieldOrder.field === fieldName ? sortFieldOrder.order : undefined;
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
