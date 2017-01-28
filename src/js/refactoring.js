//Задача #1
const getSubstring = ({str, subStr1, subStr2}) => {
  if (str === '') return -1;
  let subStrPosition1 = str.lastIndexOf(subStr1, str.length - 1);
  let subStrPosition2 = str.lastIndexOf(subStr2, str.length - 1);

  return subStrPosition1 !== -1 ? subStrPosition1 :
         subStrPosition2 !== -1 ? subStrPosition2 :
         subStrPosition1 === subStrPosition2 ? subStrPosition1 : -1;

}

function func(s, a, b) {

  if (s.match(/^$/)) {
    return -1;
  }

  var i = s.length -1;
  var aIndex =     -1;
  var bIndex =     -1;

  while ((aIndex == -1) && (bIndex == -1) && (i > 0)) {
    if (s.substring(i, i +1) == a) {
      aIndex = i;
    }
    if (s.substring(i, i +1) == b) {
      bIndex = i;
    }
    i = i - 1;
  }
  if (aIndex != -1) {
    if (bIndex == -1) {
      return aIndex;
    }
    else {
      return Math.max(aIndex, bIndex);
    }
  }

  if (bIndex != -1) {
    return bIndex;
  }
  else {
    return -1;
  }
}

console.log(
    'Refactoring task 1',
    func('12345560', '0', '0'), getSubstring({str: '12345560', subStr1: '0', subStr2: '0'})
)


//Задача 2
const drawRating = (vote, range = [0, 20, 40, 60, 80, 100], stars = '★☆☆☆☆') => {
  let returnedValue;
  for (let i = 0; i < range.length - 1; i++) {
     if (vote >= range[i] && vote <= range[i + 1]) {
       returnedValue = stars;
       break;
     }
  }
  return returnedValue;
}
let range = [0, 20, 40, 60, 80, 100];

// Проверка работы результата
console.log(drawRating(0, range, '★☆☆☆☆') );
console.log(drawRating(1, range, '★☆☆☆☆') );
console.log(drawRating(50, range, '★★★☆☆'));
console.log(drawRating(99, range, '★★★★★'));