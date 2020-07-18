function feetToMile(feetValue){
    return feetValue/5280;
}
console.log(feetToMile(156));

function woodCalculator(numberofChair,numberofTable,numberofBed){
    var chairNeededWood = numberofChair*1;
    var tableNeededWood = numberofTable*3;
    var bedNeededWood = numberofBed*5;
    return chairNeededWood+tableNeededWood+bedNeededWood;
}
console.log(woodCalculator(1,3,5));

function brickCalculator(floorNumber){
    if(floorNumber<=10){
        var neededBrickNumber = floorNumber*15*1000;
        return neededBrickNumber;
    } 
    if(floorNumber>10 && floorNumber<=20){
        var forfirst = 10*15*1000;
        var neededBrickNumber = (floorNumber-10)*12*1000;
        return forfirst+neededBrickNumber;
    }
    if(floorNumber>20){
        var forfirstfloor = 10*15*1000;
        var forsecondfloor = 10*12*1000;
        var neededBrickNumber = (floorNumber-20)*10*1000;
        return forfirstfloor+forsecondfloor+neededBrickNumber;
    }
}
console.log(brickCalculator(21));

function tinyFriend(friendNames){
    var finalMin=1000;
    for(var i=0; i<friendNames.length;i++){
        var  min = friendNames[i].length;
        if(min<finalMin){
            finalMin = min;
            var tinyFriendName = friendNames[i];
        }
    }
    return tinyFriendName;
}

 var value = tinyFriend(["Anik","Babu","sagor","oi","h"]);
 console.log(value);