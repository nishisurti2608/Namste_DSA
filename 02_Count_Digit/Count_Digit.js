 function countDigit(a) {
          a = Math.abs(a); // Handle negative numbers

        if (a === 0) return 1; // Special case for 0

        let count = 0;
        while (a > 0) {
            a = Math.floor(a / 10); // Remove last digit
            count++;
        }

        return count; // Return number of digits
    
    }

    const result= countDigit(345)
    console.log(result)