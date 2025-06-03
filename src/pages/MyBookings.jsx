import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';

function MyBookings() {
  const [email, setEmail] = useState('');
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchBookings = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`http://localhost:4000/bookings?email=${email}`);
      setBookings(response.data.bookings);
    } catch (error) {
      alert(`Error fetching bookings: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <Helmet>
        <title>Estilo Salon - My Bookings</title>
        <meta name="description" content="View your bookings at Estilo Salon." />
      </Helmet>
      <h1 className="text-3xl font-bold text-center">My Bookings</h1>
      <div className="max-w-md mx-auto mt-6">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full p-3 mb-4 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        />
        <button
          onClick={fetchBookings}
          className="bg-teal-600 text-white px-6 py-3 rounded disabled:opacity-50"
          disabled={isLoading || !email}
        >
          {isLoading ? 'Loading...' : 'View Bookings'}
        </button>
        {bookings.length > 0 && (
          <div className="mt-6">
            {bookings.map((booking) => (
              <div key={booking.id} className="bg-white p-4 mb-4 rounded shadow">
                <p><strong>Service:</strong> {booking.service}</p>
                <p><strong>Date:</strong> {new Date(booking.date).toLocaleDateString()}</p>
                <p><strong>Time:</strong> {booking.time}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
export default MyBookings;