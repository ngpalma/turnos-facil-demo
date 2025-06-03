import { useState } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function Book() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    date: null,
    time: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await axios.post('http://localhost:4000/book', {
        ...formData,
        date: formData.date?.toISOString(),
      }, { timeout: 3000 });
      alert(response.data.message);
      setFormData({ name: '', email: '', service: '', date: null, time: '' });
    } catch (error) {
      alert(`Error booking appointment: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <Helmet>
        <title>Estilo Salon - Book Appointment</title>
        <meta name="description" content="Book your appointment at Estilo Salon." />
      </Helmet>
      <h1 className="text-3xl font-bold text-center">Book Appointment</h1>
      <form onSubmit={handleSubmit} className="mt-6 max-w-md mx-auto">
        <input
          type="text"
          placeholder="Name"
          className="w-full p-3 mb-4 border rounded"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          disabled={isSubmitting}
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 border rounded"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          disabled={isSubmitting}
        />
        <select
          className="w-full p-3 mb-4 border rounded"
          value={formData.service}
          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
          disabled={isSubmitting}
        >
          <option value="">Select Service</option>
          <option value="Haircut">Haircut</option>
          <option value="Coloring">Coloring</option>
          <option value="Manicure">Manicure</option>
          <option value="Styling">Styling</option>
        </select>
        <DatePicker
          selected={formData.date}
          onChange={(date) => setFormData({ ...formData, date })}
          minDate={new Date()}
          className="w-full p-3 mb-4 border rounded"
          placeholderText="Select Date"
          disabled={isSubmitting}
        />
        <input
          type="time"
          className="w-full p-3 mb-4 border rounded"
          value={formData.time}
          onChange={(e) => setFormData({ ...formData, time: e.target.value })}
          disabled={isSubmitting}
        />
        <button
          type="submit"
          className="bg-teal-600 text-white px-6 py-3 rounded disabled:opacity-50"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Booking...' : 'Book'}
        </button>
      </form>
    </div>
  );
}
export default Book;