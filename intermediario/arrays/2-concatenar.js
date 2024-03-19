const nums1 = [1, 2, 3];
const nums2 = [4, 5, 6];

// const conc = nums1.concat(nums2, [7, 8, 9], "Luiz");
const conc = [...nums1, ...nums2, 7, 8, 9, "Luiz", ...[10, 11, 12]];
console.log(conc);
