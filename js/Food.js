class Food{



constructor(){

this.foodStock = 20;
this.image = loadImage("images/Milk.png");


}

getFoodStock(){

 return this.foodStock

}

updateFoodStock(foodS){

this.foodStock = foodS

}


deductFood(){


 this.foodStock = this.foodStock - 1

}

display(){

var x = 80,y = 100;

imageMode(CENTER)


if(this.foodStock!=0){

for(var i=0 ; i<this.foodStock ; i++){

  if(i%10===0){

  x=80;
  y=y+50;

  }

  //imageMode(CENTER)
  image(this.image,x,y,50,50)
  x=x+30

 }

}

}

 


}