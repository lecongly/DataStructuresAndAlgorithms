//Time = O(n) , Space = O(1)
function maxArea(height: number[]): number {
  let left = 0,
    right = height.length - 1;
  let result = 0;
  while (left < right) {
    let w = right - left;
    let h = Math.min(height[left], height[right]);
    let area = h * w;
    result = Math.max(result, area);
    if (height[left] < height[right]) left++;
    else if (height[left] > height[right]) right--;
    else {
      left++;
      right--;
    }
  }
  return result;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
