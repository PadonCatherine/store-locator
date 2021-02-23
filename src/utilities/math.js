export const haversineInKM = (
    centerLatitude,
    centerLongitude,
    itemLatitude,
    itemLongitude,
) => {
    const radiusCenterLatitude = (Math.PI * centerLatitude) / 180;
    const radiusitemLatitude = (Math.PI * itemLatitude) / 180;
    const theta = centerLongitude - itemLongitude;
    const radiusTheta = (Math.PI * theta) / 180;
    let dist = 
        Math.sin(radiusCenterLatitude) * Math.sin(radiusitemLatitude) +
        Math.cos(radiusCenterLatitude) * 
            Math.cos(radiusitemLatitude) *
            Math.cos(radiusTheta);
    dist = Math.acos(dist);
    dist = (dist * 180 ) / Math.PI;
    dist = dist * 60 *1.1515;
    dist *= 1.609344;
    
    return dist;

}