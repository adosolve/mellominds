import express from 'express';
import { trackVisitor, updateVisitorDuration, getVisitorStats } from '../services/visitorService.js';

const router = express.Router();

// Track visitor
router.post('/track', async (req, res) => {
  try {
    const sessionId = await trackVisitor(req);
    res.json({ sessionId });
  } catch (error) {
    console.error('Error tracking visitor:', error);
    res.status(500).json({ error: 'Failed to track visitor' });
  }
});

// Update visitor duration
router.post('/duration', async (req, res) => {
  try {
    const { sessionId, duration } = req.body;
    
    if (!sessionId || duration === undefined) {
      return res.status(400).json({ error: 'sessionId and duration required' });
    }

    await updateVisitorDuration(sessionId, duration);
    res.json({ success: true });
  } catch (error) {
    console.error('Error updating duration:', error);
    res.status(500).json({ error: 'Failed to update duration' });
  }
});

// Get visitor stats
router.get('/stats', async (req, res) => {
  try {
    const stats = await getVisitorStats();
    res.json(stats);
  } catch (error) {
    console.error('Error getting stats:', error);
    res.status(500).json({ error: 'Failed to get stats' });
  }
});

export default router;
