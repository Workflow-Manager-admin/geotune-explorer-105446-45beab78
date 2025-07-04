/**
 * Stub module for integrating with Spotify, Last.fm, etc.
 * Replace with real API calls when credentials are available.
 */

// PUBLIC_INTERFACE
export async function getTracksForRecommendation({ location, timeOfDay, activity, language }) {
  // Placeholder implementation: returns mocked track objects
  return [
    {
      trackId: '001',
      title: 'Into the Sunlight',
      artist: 'Daydreamers',
      language: language || 'Any',
      source: 'spotify',
      uri: "spotify:track:001"
    },
    {
      trackId: '002',
      title: 'Evening Chill',
      artist: 'Night Owl',
      language: language || 'Any',
      source: 'lastfm',
      uri: "lastfm:track:002"
    }
  ];
}

// PUBLIC_INTERFACE
export async function getTrendingTracks({ lat, lng, radius }) {
  // Placeholder: returns same mock for all locations
  return [
    {
      trackId: '003',
      title: 'Global Groove',
      artist: 'DJ World',
      location: { lat, lng },
      source: 'spotify'
    },
    {
      trackId: '004',
      title: 'Map Beat',
      artist: 'Explorer',
      location: { lat, lng },
      source: 'lastfm'
    }
  ];
}
