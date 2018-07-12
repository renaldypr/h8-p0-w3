// by Renaldy Pratama

function groupAnimals(animals) {
  animals = animals.sort();
  var panjangArr = animals.length;
  var hurufDepan = animals[0][0];
  var i = 0;
  var hurufDepanTemp;
  var tempArr = [];
  var resultArr = [];
  
  while (i < panjangArr) {
    hurufDepanTemp = animals[i][0];
    if (hurufDepan === hurufDepanTemp) {
        tempArr.push(animals[i]);
    } else {
        hurufDepan = hurufDepanTemp;
        resultArr.push(tempArr);
        tempArr = [];
        tempArr.push(animals[i]);
    }
    i++;
  }
  resultArr.push(tempArr);
  return resultArr;
}
  
// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ [ 'anoa', 'ayam' ], [ 'cacing', 'cicak' ], [ 'kancil', 'kuda' ], [ 'unta' ] ]