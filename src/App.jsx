import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Book from './pages/Book';
import MyBookings from './pages/MyBookings';

function App() {
  return (
    <div>
      <nav className="bg-teal-700 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-xl font-bold">Estilo Salon</Link>
          <div className="space-x-4">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/services" className="hover:underline">Services</Link>
            <Link to="/book" className="hover:underline">Book</Link>
            <Link to="/my-bookings" className="hover:underline">My Bookings</Link>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/book" element={<Book />} />
        <Route path="/my-bookings" element={<MyBookings />} />
      </Routes>
    </div>
  );
}
export default App;