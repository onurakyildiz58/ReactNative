export class Place {
    constructor(title, imageUri, location) {
        this.id = new Date().toString() + Math.random().toString();
        this.title = title;
        this.imageUri = imageUri;
        this.address = location?.address || 'No address provided';
        this.location = { lat: location.lat, lon: location.lon };
    }
}
