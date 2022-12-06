class Ejercicio11 {
    constructor() {
        navigator.geolocation.getCurrentPosition(this.previo.bind(this), this.verErrores.bind(this));
        this.mostrado = false;
    }

    previo(p) {
        this.posicion = p;
    }

    verErrores(error) {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                this.mensaje = "<p>El usuario no permite la petición de geolocalización</p>"
                break;
            case error.POSITION_UNAVAILABLE:
                this.mensaje = "<p>Información de geolocalización no disponible</p>"
                break;
            case error.TIMEOUT:
                this.mensaje = "<p>La petición de geolocalización ha caducado</p>"
                break;
            case error.UNKNOWN_ERROR:
                this.mensaje = "<p>Se ha producido un error desconocido</p>"
                break;
        }
        $(this.mensaje).appendTo("main");
        this.mostrado = true;
    }

    mostrar() {
        if (!this.mostrado) {
            this.longitud = this.posicion.coords.longitude;
            this.latitud = this.posicion.coords.latitude;
            var apiKey = "&key=AIzaSyB6ExMX3WpoM_QXhu8daAGbZoTymITL4ek";
            var url = "https://maps.googleapis.com/maps/api/staticmap?";
            var centro = "center=" + this.latitud + "," + this.longitud;
            var zoom = "&zoom=15";
            var tamaño = "&size=800x600";
            var marcador = "&markers=color:red%7Clabel:S%7C" + this.latitud + "," + this.longitud;
            var sensor = "&sensor=false";

            this.imagenMapa = url + centro + zoom + tamaño + marcador + sensor + apiKey;
            var imagen = "<img src='" + this.imagenMapa + "' alt='mapa estático google' />";

            $(imagen).appendTo("main");
            this.mostrado= true;
        }
    }
}
var ej11 = new Ejercicio11();