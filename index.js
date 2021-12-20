
// you have to enter 4 inputs..
// numberOfGuest , selectBedroomType, waterSplitValueFirst, waterSplitValueSecond

let a= 0 ;
let b = 500, c= 1000, d=1500, e=1501;
var finalPrice = 0;
var storePrice =0;
var borewellWaterPrice = 0;
var corporationWaterPrice = 0;
let numberOfTwoBedroom = 1;
let numberOfThreeBedroom = 1;
let numberofTwoBedroomPeople = numberOfTwoBedroom * 3;
let numberOfThreeBedroomPeople = numberOfThreeBedroom * 5;
let two = numberofTwoBedroomPeople * 10 * 30;
let three = numberOfThreeBedroomPeople * 10 * 30;

// hear we have to enter inputs
//i.e. Number of Guest...
// select bedRoom Type  i.e.  two for two_bedroom.
// nd three  for three_bedroom.
// enter the water split number.

let numberOfGuest = 5; // change guest number as per required;
let selectBedroomType = three;
let waterSplitValueFirst = 2; // for corporation Water Price
let waterSplitValueSecond = 1; // for borewell Water Price




let totalSplitWaterValue = waterSplitValueFirst + waterSplitValueSecond;
let waterRatioCalculate = selectBedroomType / totalSplitWaterValue;
corporationWaterPrice = waterSplitValueFirst * waterRatioCalculate * 1;
borewellWaterPrice = waterSplitValueSecond * waterRatioCalculate * 1.5;
var waterConsumedByGuest = numberOfGuest * 10 * 30;
let totalWaterConsumed = waterConsumedByGuest + selectBedroomType

let DemoLiter = waterConsumedByGuest;
//for getting water prices used by guest.
if(DemoLiter > a){
  if(DemoLiter > b){
    storePrice = 500 * 2;
    DemoLiter = DemoLiter-b;
    if(DemoLiter > c){
      storePrice += 1000 * 3;
      DemoLiter = DemoLiter - c;
      if(DemoLiter > d){
        storePrice += 1500 * 5;
        DemoLiter = DemoLiter - d;
        if(DemoLiter > e){
          storePrice += DemoLiter * 8;
        }
      }else{
        storePrice += DemoLiter * 5;
      }
    }else{
      storePrice += DemoLiter * 3;
    }
  }else{
    storePrice = DemoLiter * 2
  }
}
finalPrice = storePrice + corporationWaterPrice + borewellWaterPrice
console.log("result " + totalWaterConsumed  + " "+finalPrice)
