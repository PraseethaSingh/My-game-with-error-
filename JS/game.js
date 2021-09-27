class Game{
    constructor(){

    }
    

        getState(){
            var gameStateref = database.ref('gameState')
            //console.log(gameStateref)
            gameStateref.on("value",function(data){gameState=data.val();}) 
            console.log(gameState)
        }
        update (state){
            database.ref('/').update({gameState:state})
        }
        async start (){
            
            if(gameState === 0){
                console.log("started")
                //player = new Player()
                //player.getCount()
                form = new Form()
                form.display();
            }
    
         //   car1 = createSprite(100,200)
           // car1.addImage(car1_image)
           // car2 = createSprite(300,200)
            //car2.addImage(car2_image)
            
        }    

}