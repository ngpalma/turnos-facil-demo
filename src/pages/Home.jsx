import { Helmet } from 'react-helmet';

function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Helmet>
        <title>Estilo Salon - Home</title>
        <meta name="description" content="Book your appointment at Estilo Salon." />
      </Helmet>
      <section className="bg-teal-600 text-white p-10 text-center">
        <h1 className="text-4xl font-bold">Welcome to Estilo Salon</h1>
        <p className="mt-4">Premium hair and beauty services in Argentina.</p>
        <button className="mt-4 bg-white text-teal-600 px-6 py-2 rounded">
          Book Now
        </button>
      </section>
    </div>
  );
}
export default Home;