import promptSync from 'prompt-sync'

interface Weather {
    forecast(): void

    
}

interface Location {
    getLocation(): string
  }

class Rain implements Weather {
    forecast(){
        console.log ("Expecting rain today")
        
    }}

class Snow implements Weather {
    forecast(){
        console.log("Expecting snowfall")

    }}
    
class Sun implements Weather {
    forecast() {
        console.log("Expecting sunny weather")
        
    }}   


    class LocationProvider implements Location {
        private prompt: any
      
        constructor() {
          this.prompt = promptSync()
        }
      
        getLocation(): string {
          return this.prompt("Enter your location: ")
        }
      }
      
      function forecastWeather(weather: Weather) {
        weather.forecast()
      }
      
      function getWeatherForecast(): Weather {
        const randomNum = Math.random()
        if (randomNum < 0.3) {
          return new Rain()
        } else if (randomNum < 0.6) {
          return new Snow()
        } else {
          return new Sun()
        }
      }
      
      function provideWeatherForecast(locationProvider: LocationProvider) {
        const location = locationProvider.getLocation()
        console.log(`Weather forecast for ${location}:`)
        const weatherForecast = getWeatherForecast()
        forecastWeather(weatherForecast)
      }
      
      const locationProvider = new LocationProvider()
      provideWeatherForecast(locationProvider)
    
    

