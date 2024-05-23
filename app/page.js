// pages/index.js
'use client'
import { useState } from 'react';
import SearchForm from './components/SearchForm';
import Results from './components/Results';

const mockFlights = [
  { origin: 'New York', destination: 'London', date: '2023-06-01', price: 500 },
  { origin: 'Los Angeles', destination: 'Tokyo', date: '2023-06-05', price: 700 },
  { origin: 'Chicago', destination: 'Paris', date: '2023-06-10', price: 600 },
];

export default function Home() {
  const [flights, setFlights] = useState([]);

  const handleSearch = (searchParams) => {
    // In a real app, you would fetch data from an API based on searchParams
    const filteredFlights = mockFlights.filter(
      (flight) =>
        flight.origin.toLowerCase().includes(searchParams.origin.toLowerCase()) &&
        flight.destination.toLowerCase().includes(searchParams.destination.toLowerCase()) &&
        flight.date === searchParams.departureDate
    );
    setFlights(filteredFlights);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Find the Cheapest Flights</h1>
      <SearchForm onSearch={handleSearch} />
      <Results flights={flights} />
    </div>
  );
}
