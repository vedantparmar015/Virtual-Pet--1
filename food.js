class Food {
    constructor(foodStock, lastFed){
        var foodObj
    }
    getFoodStock()
    updateFoodStock()
    deductFood()
    display() {
        if(lastFed>=12){
            text("Last Feed: "+ lastFed%12 + " PM",350,30);
        } else if(lastFed==0){
            text("Last Feed : 12 AM", 350,30);
        } else{
            text("Last Feed :" + lastFed + " AM", 350,30);
        }
    }
}