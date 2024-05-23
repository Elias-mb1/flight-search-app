// components/Results.js
'use client'
const Results = ({ flights }) => {
    return (
      <div className="mt-6">
        {flights.length === 0 ? (
          <p className="text-gray-700">No flights found.</p>
        ) : (
          <ul>
            {flights.map((flight, index) => (
              <li key={index} className="mb-4 p-4 border rounded-lg shadow-md">
                <p><strong>Flight:</strong> {flight.origin} to {flight.destination}</p>
                <p><strong>Date:</strong> {flight.date}</p>
                <p><strong>Price:</strong> ${flight.price}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };
  
  export default Results;
  