import { useState } from "react";
import Table from "./Table";

function SortableTable(props) {
    const [ sortOrder, setSortOrder ] = useState(null);
    const [ sortBy, setSortBy ] = useState(null);
    const { config, data } = props;

    const handleClick = (label) => {
        console.log(label);
        if (sortOrder === null) {
            setSortOrder('asc');
            setSortBy(label);
        } else if (sortOrder === 'asc') {
            setSortOrder('desc');
            setSortBy(label);
        } else if (sortOrder === 'desc') {
            setSortOrder(null);
            setSortBy(null);
        }
    };

    const updatedConfig = config.map((column) => {
        if (!column.sortValue) {
            return column;
        } 

        return {
            ...column,
            header: () => <th onClick={() => handleClick(column.label)}>{column.label} IS SORTABLE</th>
        }
    });
    
    let sortedData = data;
    if (sortOrder && sortBy) {
        const { sortValue } = config.find(column => column.label === sortBy);
        sortedData = [...data].sort((a, b) => {
            const valueA = sortValue(a);
            const valueB = sortValue(b);

            const reversedOrder = sortOrder === 'asc' ? 1 : -1;

            if (typeof valueA === 'string') {
                return valueA.localeCompare(valueB) * reversedOrder;
            } else {
                return (valueA -valueB);
            }
        });
    }

    return <Table {...props} config={updatedConfig} />;
}

export default SortableTable;