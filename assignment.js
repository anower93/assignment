
//Kilometer To Meter Conversion Calculator

var perKilometer = 1000; //WE know that 1 Kilometer is equal to 1000 meter

function kilometerToMeter(numberOfKilometer){
    //Conditions
    if(typeof(numberOfKilometer) == 'number' && numberOfKilometer > 0){
        var convertResult = perKilometer * numberOfKilometer;
        return convertResult;
        
    }else{
        return "Please input a valid positive number!";
    }
   
}
// var totalMeter = kilometerToMeter();




//Budget Calculator

// From here is starting Budget Calculator Code.

var watchPrice = 50;
var phonePrice = 100;
var laptopPrice = 500;

function budgetCalculator(watch, phone, laptop){
    if((typeof(watch) == 'number' && watch > 0) && (typeof(phone) == 'number' && phone > 0) && (typeof(laptop) == 'number' && laptop > 0)){
       var totalBudget = (watch*watchPrice) + (phone*phonePrice) + (laptop*laptopPrice);
       return totalBudget;

    }else{
        return "Please give your valid watch, phone and laptop amount with a comma";
    }
}
// var myTotalBudget = budgetCalculator();





// HotelCost Calculator

//From here is starting Hotel Cost Function

var rentFirstTenDays = 100;
var rentSecondTenDays = 80;
var rentMoreThanTwenty = 50;
var FirstTenDaysCost = 1000;
var FirstTwentyDaysCost = 1800;

function hotelCost(duration){
    if(typeof(duration) == "number" && duration>0 && duration<=10 ){
            var hotelCostFirst = rentFirstTenDays*duration;
                return hotelCostFirst;
    }else if(typeof(duration) == "number" && duration>10 && duration<=20 ){
            var hotelCostSecond = (rentSecondTenDays * (duration-10)) + FirstTenDaysCost;
                return hotelCostSecond;
    }else if(typeof(duration) == "number" && duration>20){
            var hotelCostThird = (rentMoreThanTwenty * (duration-20)) + FirstTwentyDaysCost;
                return hotelCostThird;
    }else{
        return "Please input a valid number!";
    }
}
// var totalHotelCost = hotelCost();





// Searching Longest Name from my All friends Name
// From here is starting MegaFriend 

function megaFriend(myFriends){ 
   if(Array.isArray(myFriends) == true){
        if(myFriends.length <= 0){
            return "Please give me an Arry to find Longest Friend Name";
        }
        else{
            var longestName = "";
            for(var i = 0; i < myFriends.length; i++){        
                if(longestName.length < myFriends[i].length){
                    longestName = myFriends[i];
                }
            }
            return longestName;
        }  
   }
}
//  var longestName = megaFriend();
