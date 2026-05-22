import pool from '../config/database.js';
import { v4 as uuidv4 } from 'uuid';

export async function trackVisitor(req) {
  try {
    const sessionId = uuidv4();
    const ipAddress = req.ip || req.connection.remoteAddress;
    const userAgent = req.get('user-agent');
    const pageVisited = req.body?.page || '/';

    await pool.query(
      `INSERT INTO visitors (session_id, ip_address, user_agent, page_visited)
       VALUES ($1, $2, $3, $4)`,
      [sessionId, ipAddress, userAgent, pageVisited]
    );

    return sessionId;
  } catch (error) {
    console.error('Error tracking visitor:', error);
    throw error;
  }
}

export async function updateVisitorDuration(sessionId, durationSeconds) {
  try {
    await pool.query(
      `UPDATE visitors SET duration_seconds = $1 WHERE session_id = $2`,
      [durationSeconds, sessionId]
    );
  } catch (error) {
    console.error('Error updating visitor duration:', error);
    throw error;
  }
}

export async function getVisitorStats() {
  try {
    const result = await pool.query(
      `SELECT 
        COUNT(*) as total_visitors,
        COUNT(DISTINCT ip_address) as unique_visitors,
        AVG(duration_seconds) as avg_duration,
        MAX(visited_at) as last_visit
       FROM visitors
       WHERE visited_at > NOW() - INTERVAL '30 days'`
    );
    return result.rows[0];
  } catch (error) {
    console.error('Error getting visitor stats:', error);
    throw error;
  }
}
