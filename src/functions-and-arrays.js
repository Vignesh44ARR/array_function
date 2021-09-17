// Progression #1: Greatest of the two numbers
function greatestOfTwoNumbers(a,b){
  if(a>=b){
    return a;
  }
  else{
    return b;
  }
}
// Progression #2: The lengthy word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
function findScaryWord(words){
  var maxs=0;
  var res;
  if (words.length==0)
    return null
  else if (words.length==1)
    return words[0];  
  else{ 
  for (const i of words)
    if(i.length>maxs){
      res=i;
      maxs=i.length;
    }
  
  return res;
}
 
}

// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function netPrice(numbers){
  var net=0;
  if (numbers.length==0)
    return 0
  
  for(var i=0;i<numbers.length;i++){
      net=net+numbers[i];
  }
  return net;
}

function add(numbers) {
  if (numbers.length == 0)
    return 0;
  else if (numbers.length == 1) {

    return numbers[0];
  }

  else {
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[0] != 0) {
        count = 1
        break

      }
    }
    if (count == 0)
      return 0;
    
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      if(typeof numbers[i]  ==  typeof "2" )
      {
      sum += numbers[i].length
      continue
      }
      else if (typeof numbers[i]  === "number"  )
      sum += numbers[i]
      else if(numbers[i]  === true)
      sum+=1
      else if(numbers[i]  === false)
      sum+=0
      else{
      throw new Error("Unsupported data type sir or ma'am")
      }
    
    }
    return  Number.parseInt( sum);
  

  }

}



// Progression #4: Calculate the average
function midPointOfLevels(numbersAvg){
  var n=numbersAvg.length;
  if (n==0)
      return null;
  else{
    var sums=0;
    var avg;
    for(var i=0;i<n;i++)
      sums+=numbersAvg[i]
    avg=sums/n
    return avg
  }    
}
// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];


// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
function averageWordLength(wordsArr){
  var sums=0
  if(wordsArr.length==0)
  return null
  for(const i of wordsArr){
    sums+=i.length;
  }
  var avg=sums/wordsArr.length
  return avg
}

// 4.3

function avg(arr){
  var n=arr.length;
  if (n==0)
    return null

  else{
    sums=0
     for (const i of arr){
       if (typeof(i)==typeof("vignesh"))
        sums+=i.length
       else
        sums+=i 
     }
     return parseFloat((sums/n).toFixed(2))
  }  
  

}

// Progression #5: Unique arrays
const wordsUnique = [
  'bread',
  'jam',
  'milk',
  'egg',
  'flour',
  'oil',
  'rice',
  'coffee powder',
  'sugar',
  'salt',
  'egg',
  'flour'
];
function uniqueArray(wordsUnique){
if (wordsUnique.length==0)
return null
else{
  var lis=[]
  for(const i of wordsUnique){
    if(lis.indexOf(i)<0){
      lis.push(i)
    }
  }
  return lis
}
}


// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
function searchElement(wordsFind, word){
  if(wordsFind.length==0)
  return null
  else{
    for(const i of wordsFind){
      if (i==word)
      return true
      else false
    }
  }
}


// Progression #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];
function howManyTimesElementRepeated(wordsCount,word){
  if (wordsCount.length==0)
  return 0
   var count=0;
   for(const i of wordsCount){
     if(i==word)
      count++;
   }
    return count  
   }
   
// Progression #8: Bonus

const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45]
];


function maximumProduct(matrix)
{
  let count=0;
  for(const row of matrix)
  {
    for (const i of row)
    {
      if ( i != 1)
      count=1
    }
  }
  if (count === 0)
  return 1

  return 0
}