    function maxprofit(prices){

        let minprice = prices[0];
        let maxprofit =0;

        if(prices[i] < minprice){
            minprice = prices[i];
        }

        let profit = prices[i] - minprice;
        if(profit > maxprofit){
            maxprofit = profit;
        }
    }