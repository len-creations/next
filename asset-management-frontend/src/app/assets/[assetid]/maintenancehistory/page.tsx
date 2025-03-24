export default function MaintenanceHistoryList() {
    // Create an array with 100 history items
    const historyItems = Array.from({ length: 100 }, (_, index) => `History ${index + 1}`);
  
    return (
      <>
        <h1>Maintenance History List</h1>
        <ul>
          {historyItems.map((history, index) => (
            <li key={index}>{history}</li>
          ))}
        </ul>
      </>
    );
  }