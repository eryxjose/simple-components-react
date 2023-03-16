import Table from "../components/Table";
import SortableTable from "../components/SortableTable";

function TablePage() {
    const config = [
        { 
            label: 'Item',
            render: (item) => item.name,
            sortValue: (item) => item.name
        },
        { 
            label: 'Cor',
            render: (item) => <div className={`p-3 m-2 ${item.color}`}></div>
        },
        { 
            label: 'Ranking',
            render: (item) => item.score,
            sortValue: (item) => item.score
        },
    ];

    const data = [
        { name: 'Item 1', color: 'bg-orange-500', score: '5' },
        { name: 'Item 2', color: 'bg-red-500', score: '2' },
        { name: 'Item 3', color: 'bg-yellow-500', score: '3' },
        { name: 'Item 4', color: 'bg-blue-500', score: '4' },
        { name: 'Item 5', color: 'bg-green-500', score: '5' }
    ];

    const keyFn = (item) => {
        return item.name;
    };

    return (
        <div>
            <SortableTable data={data} config={config} keyFn={keyFn} />
        </div>
    );
}


export default TablePage;