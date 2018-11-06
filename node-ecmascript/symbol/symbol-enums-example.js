// Season Enums:
const SEASON_SPRING = Symbol();
const SEASON_SUMMER = Symbol();
const SEASON_AUTUMN = Symbol();
const SEASON_WINTER = Symbol();

// Framework Enums:
const FRAMEWORK_SPRING = Symbol();
const FRAMEWORK_STRUTS = Symbol();

function getWeather(season)  { // Season Enums
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

console.log( getWeather(FRAMEWORK_SPRING) ); // Throw Error: Invalid season
