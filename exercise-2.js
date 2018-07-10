// by Renaldy Pratama

function balikString(string) {
  var panjangString = string.length;
  var i = 1;
  var output = '';

  while (i <= panjangString) {
    output = output + string[panjangString - i]
    i++;
  }

  return output
}

console.log(balikString('hello world!')); // !dlrow olleh
console.log(balikString('Renaldy')); // ydlaneR
console.log(balikString('I am a future developer!')); // !repoleved erutuf a ma I