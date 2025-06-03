require('dotenv').config()
const express = require('express');
const cors = require('cors');
const { Sequelize, DataTypes } = require('sequelize');

const app = express();
app.use(cors({ origin: ['http://localhost:5173', 'https://turnos-facil-demo.vercel.app'] }));
app.use(express.json());

// Initialize Sequelize
const sequelize = new Sequelize({
  dialect: 'postgres',
  host: process.env.PG_HOST || 'localhost',
  port: process.env.PG_PORT || 5432,
  database: process.env.PG_DATABASE || 'turnos_facil',
  username: process.env.PG_USER || 'postgres',
  password: process.env.PG_PASSWORD || 'tu-password',
});

// Define Booking model
const Booking = sequelize.define('Booking', {
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false },
  service: { type: DataTypes.STRING, allowNull: false },
  date: { type: DataTypes.DATE, allowNull: false },
  time: { type: DataTypes.STRING, allowNull: false },
}, {
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: false,
});

// Sync database
(async () => {
  try {
    await sequelize.sync({ force: false }); // Use force: true only for dev to recreate tables
    console.log('Database synced');
  } catch (error) {
    console.error('Database sync error:', error);
  }
})();

// Book appointment endpoint
app.post('/book', async (req, res) => {
  const { name, email, service, date, time } = req.body;
  try {
    const booking = await Booking.create({ name, email, service, date, time });
    res.status(200).json({ message: 'Appointment booked successfully', booking });
  } catch (error) {
    console.error('Booking error:', error);
    res.status(500).json({ error: 'Failed to book appointment' });
  }
});

// Fetch bookings by email
app.get('/bookings', async (req, res) => {
  const { email } = req.query;
  try {
    const bookings = await Booking.findAll({ where: { email } });
    res.status(200).json({ bookings });
  } catch (error) {
    console.error('Fetch bookings error:', error);
    res.status(500).json({ error: 'Failed to fetch bookings' });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));