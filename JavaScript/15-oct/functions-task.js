// Create a function called oddArray
// that accept an array
// and return an array have only the odd elemnts
​
// var nums= [1,2,3,8,9]
// Ex: oddArray(nums) => [1,3,9]
​
// ** solve it one time using for loop and another using while loop
// **try more cases by your self
​
​
/******* Start Your Code *********/
//ـــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــfor loop:
​var nums = [1,2,3,8,9];
var oddarr = [];
          function oddArray(anyarr) {
              for (i = 0; i < anyarr.length; i++) {
                  if (anyarr[i] % 2 == 1) {
                      oddarr.push(anyarr[i]);
                  } 
              }
          }
          oddArray(nums);
          console.log(oddarr);
//ــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــwhile loop:
var nums = [1,2,3,8,9];
  var oddarr = [];
  i=-1;
			function oddArray(anyarr) {
				while (i < anyarr.length) {
          i++
        
					if (anyarr[i] % 2 == 1) {
						oddarr.push(anyarr[i]);
					} 
				}
			}
			oddArray(nums);
			console.log(oddarr);
			

         
​
/******* End Your Code ********* */
​
​
​
​
// Create a function called aveArray
// that accept an array
// and return the average of the numbers inside this array
​
// var nums= [1,2,3,8,9]
// Ex: aveArray(nums) => 4.6
​
// var nums2= [1,2,3,8,9,77]
// Ex: aveArray(nums) => 16.6
​
// ** solve it one time using for loop and another using while loop
// **try more cases by your self
​
​
/******* Start Your Code *********/
​var nums= [1,2,3,8,9]
const x = nums.length;
function sum(anyarr) {
  
				var total = 0;
				for (i = 0; i < anyarr.length; i++) {
					total = total + anyarr[i];
				}
				return total/x;
			}
			var avg = sum(nums);

      console.log(avg)
​//ــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــ
var nums= [1,2,3,8,9]
const x = nums.length;
function sum(anyarr) {
  
				var total = 0;
        var i = 0; 
				while (i < anyarr.length) {
					total = total + anyarr[i];
          i++
				}
				return total/x;
			}
			var avg = sum(nums);

      console.log(avg);
/******* End Your Code ********* */
​
​
​
​
// Create a function called factorial
// that takes a single parameter n,
// and return the product of all integers up to n starting from 1
// Ex: factorial(2); => 2 * 1 => 2
// Ex: factorial(4); => 4 * 3 * 2 * 1 => 24
​
​
​
/******* Start Your Code *********/
function factorial(n) {
    let fac = 1;
    if (n == 0 || n == 1) {
      return fac;
    } else {
      for (var i = n; i >= 1; i--) {
        fac = fac * i;
      }
    }
    return fac;
  }
​
/******* End Your Code ********* */
