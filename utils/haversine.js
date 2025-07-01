export default function haversineFormular(latitude1, longitude1, latitude2, longitude2) {
  function toRadius(deg) {
    return deg * (Math.PI / 180);
  }

  const R = 6371e3;

  const dlat = toRadius(latitude2 - latitude1);
  const dlon = toRadius(longitude2 - longitude1);

  const a =
    Math.sin(dlat / 2) ** 2 +
    Math.cos(toRadius(latitude1)) *
    Math.cos(toRadius(latitude2)) *
    Math.sin(dlon / 2) ** 2;

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c;
}
