
export default async function assetdetails({params}:{
    params: Promise<{assetid: string}>;
})

{
    const assetid =(await params).assetid
    return <h1>details about asset {assetid}</h1>;
}