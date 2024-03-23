export default async function Page({ params }: { params: { option: string } }) {
    return <div className="">{params.option}</div>;
}
