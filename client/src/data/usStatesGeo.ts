// This module loads and converts the US states TopoJSON to GeoJSON
// The actual TopoJSON file is at /public/geo/us-states-topo.json
// This placeholder provides the type for static import fallback
// Real data is loaded via fetch + topojson-client in useGeoData hook

const US_STATES_GEO: GeoJSON.FeatureCollection | null = null;
export default US_STATES_GEO;
