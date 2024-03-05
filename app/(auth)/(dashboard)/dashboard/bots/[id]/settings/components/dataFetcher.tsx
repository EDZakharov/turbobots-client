import { ReactNode } from 'react';

interface DataFetcherProps {
    fetchData: () => Promise<any>;
    children: (data: any) => ReactNode;
}

const DataFetcher: React.FC<DataFetcherProps> = async ({
    fetchData,
    children,
}) => {
    const result = await fetchData();
    return <>{children(result)}</>;
};

export default DataFetcher;
