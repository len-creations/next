export default async function maintenancehistory({ params }: 
    { params: Promise<{ assetid: string, maintenanceid: string }> }) {
    const { assetid, maintenanceid } = await params;
    
    return <h1>Maintenance history {maintenanceid} for asset {assetid}</h1>;
  }
  