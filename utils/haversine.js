export default function haversineFormular(latitude1, longitude1, latitude2, longitude2){
    function toRadius(deg){deg * (Math.PI/180)}

    const dlat = toRadius(latitude2 - latitude1)
    const dlon = toRadius(longitude2- longitude1)

    const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) *
    Math.cos(toRad(lat2)) *
    Math.sin(dLon / 2) ** 2;

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));


    return R * c;
}