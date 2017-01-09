module.exports= {
    getPrimes: function(n) {
        // checks and lists prime number from 2(since anything below isn't a prime number) till n using a nested for loop.
        var a = [];
        for (var count1 = 2; count1 <= n; count1++) {    
            var prime = true;
            for (var count2 = 2; count2 <= count1; count2++) {
                //simultaneously checks each number for prime no conditions
                if (count1 % count2 === 0 && count1 !== count2) {
                    prime = false;
                }
            }
            if (prime === true) {
                        a.push(count1);
            }
        }
        return a
    }
}