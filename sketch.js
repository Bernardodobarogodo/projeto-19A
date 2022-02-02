var carro_mario,carroImg
var pista,pistaImg

function preload(){
    carro_mario = loadImge("mario.jpg");
    pista = loadImge("path.png")



}

function setup() {
    createCanvas(400, 400);

    pista=crateSprite(200,200);
    pista.addImage(pistaImg)
    pista.velocityY = 4;
    pista.scale=1.2

    carro_mario = createSprite(180,340,40,40);
    carro_mario.scale=0.08;
    carro_mario.addImage("carro_mario",carroImg);


    leftBoundary=crateSprite(0,0,100,800);
    leftBoundary.visible = false

    rightBoundary=createSprite(410,0,100,800);
    rightBoundary=visible = false;

}

function draw() {
    background (0);
    pista.velocityY = 4;

    carro_mario.x = World.mouseX;

    wdges = createEdgeSprites ();
    carro_mario.collide (edges[3]);
    carro_mario.collide(leftBoundary);
    carro_mario.collide(rightBoundary);

    if(carro_mario.y > 400){
        carro_mario.y = height/2;
    }

    drawSprites ();
 
}