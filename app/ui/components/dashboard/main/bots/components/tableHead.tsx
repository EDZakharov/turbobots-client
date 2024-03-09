// Компонент строки таблицы
const headerColsStyle = ' text-center dark:border-gray-700 border-gray-300';
export const TableHead = () => {
    return (
        <div className="grid grid-cols-10 py-5 place-items-center">
            <div className={`${headerColsStyle}`}>Step</div>
            <div className={`${headerColsStyle}`}>Order Deviation</div>
            <div className={`${headerColsStyle}`}>
                Order Secondary Pair Volume
            </div>
            <div className={`${headerColsStyle}`}>Order Base Pair Volume</div>
            <div className={`${headerColsStyle}`}>Order Price To Step</div>
            <div className={`${headerColsStyle}`}>Order Average Price</div>
            <div className={`${headerColsStyle}`}>Order Target Price</div>
            <div className={`${headerColsStyle}`}>Order Target Deviation</div>
            <div className={`${headerColsStyle}`}>
                Summarized Order Secondary Pair Volume
            </div>
            <div className={`rounded-tr-lg ${headerColsStyle} border-r-0 `}>
                Summarized Order Base Pair Volume
            </div>
        </div>
    );
};
