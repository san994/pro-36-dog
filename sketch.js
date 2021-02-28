var dog,sadDog,happyDog;

var nm = "";
var feed,addfood;


var foodD = 20;
var foodF = 20;
var lastFeed = 0;
var foodSt;
var foodObj;
var database

var enter,input;

function preload(){

  sadDog = loadImage("images/Dog.png");
  happyDog = loadImage("images/happy dog.png");
  
}

function setup() {
 
  database = firebase.database();
  createCanvas(900,400);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  var feed = createButton("feed the dog")
  feed.position(600,100);
  feed.mousePressed(()=>{

    dog.addImage(happyDog);

    milk = createSprite(740,200,20,20)
    milk.addImage(foodObj.image);

    database.ref('/').update({

     time : hour()

    })
   
    milk.scale = 0.1

    foodObj.deductFood();

      foodD-=1

      update(foodD);

  })

  
  var addfood = createButton("add the food")
   addfood.position(700,100);
   addfood.mousePressed(()=>{
     
     foodF +=1

     update(foodF)

     foodObj.updateFoodStock(foodF)

   })

   input = createInput("dog name")
   input.position(900,100)

   enter = createButton("enter")
   enter.position(900,150);

  foodObj = new Food();

}

function draw() {
  background(46,139,87);


  foodObj.display();

   
 enter.mousePressed(()=>{

  input.hide();
  enter.hide();

   nm = input.value();

  dogname(nm)

  })

  var feedTime= database.ref('time')
  feedTime.on("value",(data)=>{

   lastFeed = data.val();

  })


  drawSprites();

  textSize(18)
  fill("red")
  text(" Your dog name :- " + nm,600,100);

  textSize(18)
  fill("white")
   if(lastFeed>=12){

    text("last Feed : "+ lastFeed%12 +" PM",200,30)

   }else if(lastFeed===0){

    text("last Feed : 12 AM",200,30)

   }else{

    text("last Feed : " + lastFeed+"AM",200,30)

   }

}



function dogname(name){

  //var petname = database.ref("vertual pet")
 
   database.ref('/').update({
 
     name : name
 
   })
   
 }
 
function update(foodS){

database.ref('/').update({

food : foodS

})



}


