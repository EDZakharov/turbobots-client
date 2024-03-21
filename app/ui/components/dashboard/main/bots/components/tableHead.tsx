const headerColsStyle = 'text-center dark:border-gray-700 border-gray-300';

export const TableHead = ({ coin }: { coin?: string }) => {
    const headerTitles = [
        'Order',
        'Order Deviation',
        `${coin ? coin.slice(0, coin.length - 4) : ''} Volume`,
        'USDT Volume',
        'Order price',
        'Average Price',
        'Target Price',
        'Target Deviation',
        `Summarized ${coin ? coin.slice(0, coin.length - 4) : ''} Volume`,
        'Summarized USDT Volume',
    ];
    return (
        <div className="grid grid-cols-10 py-5 place-items-center">
            {headerTitles.map((title, index) => (
                <div key={index} className={`${headerColsStyle}`}>
                    {title}
                </div>
            ))}
        </div>
    );
};
