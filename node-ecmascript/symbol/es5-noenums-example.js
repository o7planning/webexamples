var SEASON_SPRING = "SPRING";
var SEASON_SUMMER = "SUMMER";
var SEASON_AUTUMN = "AUTUMN";
var SEASON_WINTER = "WINTER";

function getWeather(season)  {
   switch(season) {
      case SEASON_SPRING:
         return "warm";
      case SEASON_SUMMER:
         return "hot";
      case SEASON_AUTUMN:
         return "cool";
      case SEASON_WINTER:
          return "cold";
      default:
         throw 'Invalid season';
   }
}

console.log( getWeather(SEASON_SPRING) ); // warm
