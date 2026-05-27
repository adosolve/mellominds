import pool from '../config/database.js';

export async function initializeDatabase() {
  try {
    // Test connection
    const result = await pool.query('SELECT NOW()');
    console.log('✅ Database connected:', result.rows[0]);

    // Create tables if they don't exist
    await createTables();
  } catch (error) {
    console.error('❌ Database connection failed:', error.message);
    process.exit(1);
  }
}

async function createTables() {
  const dropQueries = [
    'DROP TABLE IF EXISTS billing CASCADE',
    'DROP TABLE IF EXISTS session_notes CASCADE',
    'DROP TABLE IF EXISTS appointments CASCADE',
    'DROP TABLE IF EXISTS visitors CASCADE',
    'DROP TABLE IF EXISTS users CASCADE',
    'DROP TABLE IF EXISTS contactus CASCADE'
  ];

  // Drop existing tables
  for (const query of dropQueries) {
    try {
      await pool.query(query);
    } catch (error) {
      console.error('Error dropping table:', error.message);
    }
  }

  const queries = [
    // Users table
    `CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      email VARCHAR(255) UNIQUE NOT NULL,
      password_hash VARCHAR(255) NOT NULL,
      first_name VARCHAR(100),
      last_name VARCHAR(100),
      phone VARCHAR(20),
      profile_picture_url VARCHAR(500),
      is_therapist BOOLEAN DEFAULT false,
      specializations TEXT[],
      bio TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`,

    // Visitors table
    `CREATE TABLE IF NOT EXISTS visitors (
      id SERIAL PRIMARY KEY,
      session_id VARCHAR(255) UNIQUE NOT NULL,
      ip_address VARCHAR(45),
      user_agent TEXT,
      page_visited VARCHAR(500),
      visited_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      duration_seconds INTEGER DEFAULT 0
    )`,

    // Appointments table
    `CREATE TABLE IF NOT EXISTS appointments (
      id SERIAL PRIMARY KEY,
      therapist_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
      client_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
      appointment_date TIMESTAMP NOT NULL,
      duration_minutes INTEGER DEFAULT 60,
      status VARCHAR(50) DEFAULT 'scheduled',
      notes TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`,

    // Session notes table
    `CREATE TABLE IF NOT EXISTS session_notes (
      id SERIAL PRIMARY KEY,
      appointment_id INTEGER REFERENCES appointments(id) ON DELETE CASCADE,
      therapist_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
      notes TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`,

    // Billing table
    `CREATE TABLE IF NOT EXISTS billing (
      id SERIAL PRIMARY KEY,
      therapist_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
      client_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
      appointment_id INTEGER REFERENCES appointments(id) ON DELETE CASCADE,
      amount DECIMAL(10, 2) NOT NULL,
      currency VARCHAR(3) DEFAULT 'INR',
      status VARCHAR(50) DEFAULT 'pending',
      payment_method VARCHAR(50),
      transaction_id VARCHAR(255),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`,

    // Contact Us table
    `CREATE TABLE IF NOT EXISTS contactus (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      phone VARCHAR(20),
      message TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`
  ];

  try {
    for (const query of queries) {
      await pool.query(query);
    }
    console.log('✅ Database tables initialized');
  } catch (error) {
    console.error('❌ Error creating tables:', error.message);
  }
}
