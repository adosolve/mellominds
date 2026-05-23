import axios from 'axios';

/**
 * Get geolocation data from IP address using ip-api.com (free tier)
 * Returns: { country, state, city, latitude, longitude }
 */
export async function getGeoLocationFromIP(ipAddress) {
  try {
    // Skip private IPs
    if (isPrivateIP(ipAddress)) {
      return {
        country: 'Local',
        state: 'Local',
        city: 'Local',
        latitude: null,
        longitude: null
      };
    }

    const response = await axios.get(`http://ip-api.com/json/${ipAddress}`, {
      timeout: 5000,
      params: {
        fields: 'country,regionName,city,lat,lon,status'
      }
    });

    if (response.data.status === 'success') {
      return {
        country: response.data.country || 'Unknown',
        state: response.data.regionName || 'Unknown',
        city: response.data.city || 'Unknown',
        latitude: response.data.lat || null,
        longitude: response.data.lon || null
      };
    }

    return {
      country: 'Unknown',
      state: 'Unknown',
      city: 'Unknown',
      latitude: null,
      longitude: null
    };
  } catch (error) {
    console.error('Geolocation lookup error:', error.message);
    return {
      country: 'Unknown',
      state: 'Unknown',
      city: 'Unknown',
      latitude: null,
      longitude: null
    };
  }
}

/**
 * Check if IP is private/local
 */
function isPrivateIP(ip) {
  const privateRanges = [
    /^127\./,
    /^10\./,
    /^172\.(1[6-9]|2[0-9]|3[01])\./,
    /^192\.168\./,
    /^::1$/,
    /^fc00:/i,
    /^fe80:/i
  ];
  return privateRanges.some(range => range.test(ip));
}
