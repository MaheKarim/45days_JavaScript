
nums = [ 2, 3, 4, 5, 6];


    function getSecondLargest(nums) {
        // Complete The Code
        const max = Math.max(...nums)
        nums = nums.filter(num => num !== max);
        return Math.max(...nums)
    }