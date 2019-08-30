
function encodeURIAll(text)  {
    return text.replace(/./g, function(aCharacter) {

       // Characters is not encoded by encodeURIComponent(): . ! ~ * ' ( )
       if(aCharacter === '.') {
          return "%2e";
       } else if(aCharacter === '!') {
          return "%21";
       } else if(aCharacter === '~') {
          return "%7e";
       } else if(aCharacter === '*') {
          return "%2a";
       } else if(aCharacter === "'") {
          return "%27";
       } else if(aCharacter === "(") {
          return "%28";
       } else if(aCharacter === ")") {
          return "%29";
       }
       return encodeURIComponent(aCharacter);
    });
}
