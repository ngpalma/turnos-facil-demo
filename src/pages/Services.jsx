import { Helmet } from 'react-helmet';

function Services() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <Helmet>
        <title>Estilo Salon - Services</title>
        <meta name="description" content="Explore services at Estilo Salon." />
      </Helmet>
      <h1 className="text-3xl font-bold text-center">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div className="bg-white p-4 rounded shadow">Haircut - $5000</div>
        <div className="bg-white p-4 rounded shadow">Coloring - $8000</div>
        <div className="bg-white p-4 rounded shadow">Manicure - $3000</div>
        <div className="bg-white p-4 rounded shadow">Styling - $4000</div>
      </div>
    </div>
  );
}
export default Services;