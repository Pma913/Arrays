var cats = ["tabby", "Bangal", "Tiger", "calico"];

var luckNumbers = [7, 555, 777, 22];

var winterCurrently = [true, true, true, true]

// The pop will take out the element in the position specified
cats.pop([3]);
console.log(cats);

// This method will log only the element in the selected position 
console.log(winterCurrently[3]);
 // This method will add an element at the end of the array.
luckNumbers.push(576);
console.log(luckNumbers);
// This method will shift all the elements to the left, the number of spots specified
cats.shift(1);
console.log(cats);

// My understanding so far on index positions is that they start on the 
// left with 0 and then increase be one with each position after that.
// I know that you can call on the position number and it can pull up or omit a 
// log of the element in that position. Example is my first array call
// with the `pop` method. I called on Index 3 and the log showed all but
// the specified index.