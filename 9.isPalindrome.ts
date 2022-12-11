// function isPalindrome(x: number): boolean {
//   if (x < 0) return false;
//   return (
//     String(Math.abs(x)).split("").reverse().join("") === String(Math.abs(x))
//   );
// }
function isPalindrome(x: number): boolean {
  return parseInt(x.toString().split("").reverse().join("")) === x;
}
console.log(isPalindrome(-121));
