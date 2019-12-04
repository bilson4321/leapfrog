/* This part is assigned for maintaining canvas status and maintaning loop*/

class Game
{
    static score=0;
    static gameState={
        currentState:1,
        getReady:0,
        gamePlaying:1,
        gameOver:2
    };
    constructor(gameDiv)
    {
        this.parentHtmlElement=gameDiv;
      
        var temp=document.createElement('CANVAS');
        
        temp.height=600;
        temp.width=450;
        
        this.canvas=temp;
        this.canvasContext=this.canvas.getContext('2d');
        this.parentHtmlElement.appendChild(this.canvas);

        this.getReady=new GetReady();
        this.gameWorld=new GameWorld();
        this.gameOver=new GameOver();
        /*
        this.canvas.addEventListener('click',function(event)
                                        {
                                            switch(Game.gameState.currentState)
                                            {
                                                case Game.gameState.getReady:
                                                {
                                                    Game.gameState.currentState=Game.gameState.gamePlaying;
                                                    break;
                                                }
                                                case Game.gameState.gamePlaying:
                                                    {
                                                        this.gameWorld.handleClickInput();
                                                        break;
                                                    }
                                                case Game.gameState.gameOver:
                                                    {
                                                        Game.gameState.currentState=Game.gameState.getReady;
                                                        break;
                                                    }
                                                   
                                            }
                                        });*/
    }
    render() 
    {
        this.canvasContext.clearRect(0,0,600,600);
        if(Game.gameState.currentState==Game.gameState.getReady)
        {
            this.getReady.update();
            this.getReady.draw(this.canvasContext);
        }
        if(Game.gameState.currentState==Game.gameState.gamePlaying)
        {
            this.gameWorld.update();
            this.gameWorld.draw(this.canvasContext);
        }
        if(Game.gameState.currentState==Game.gameState.gameOver)
        {
            this.gameOver.update();
            this.gameOver.draw(this.canvasContext);
        }
    }
    start()
    {
        setInterval(this.render.bind(this),40);
    }
    
}
let mainDiv=document.getElementById('container');
let game=new Game(mainDiv);
game.start();