let height = 725
let width = 1365
let i = 0
let diameter = 65
let onCircle = false
let rect1 = 72
let rect2 = 24
let gravityA
let angleA = 0
let angleV = 0
let multiplier = 0.9970
let gravityNumber = 0.5
let angle
let angleConst
let myVector
let angleA_Pendulum

function setup() 
{
  createCanvas(width,height)
  origin = createVector(width/2,0)
  angle = 0
  myVector = createVector()
}
function draw() 
{ 
  if(i == 0)
    {
      myVector.x = width/2
      myVector.y = height/2
      background(100)
      printObjects()
      i = 1
    }

  if(mouseIsPressed === true)
    {
        if(i == 1)
        {
            mouseXX = mouseX - width/2
            mouseYY = mouseY - height/2
            if(dist(mouseXX, mouseYY, 0, 0) < diameter/2)
            {
            i = 2
            onCircle = true 
            } 
        }    
        if(onCircle === true)
        { 
            background(100) 

            myVector.x = mouseX
            myVector.y = mouseY

           if(myVector.x < diameter/2)
           {
             myVector.x = diameter/2+1.5
           }
           if(myVector.x > width - diameter/2)
           {
             myVector.x = width-diameter/2-1
           }  
           if(myVector.y > height - diameter/2)
           {
             myVector.y = height - diameter/2-1
           }
           if(myVector.y < diameter/2)
           {
             myVector.y = diameter/2+1.5
           }
            printObjects()
            gravityA = gravityNumber
            angleA = 0
            angleV = 0
        }      
    }

  if(mouseIsPressed===false && i == 2)
  {
  length = dist(myVector.x, myVector.y, origin.x, origin.y)

  angle = asin((myVector.x-width/2)/length)

  if(angle > PI/2)
  {
    angle = PI/2
  } 
  if(angle < -PI/2)
{
  angle = -PI/2
}
  background(100) 
  
  angleA_Pendulum = gravityA*sin(angle)
  angleA = -angleA_Pendulum/length
  angleV += angleA
  angle += angleV
  angleV *= multiplier

  myVector.x = sin(angle)*length + origin.x
  myVector.y = cos(angle)*length + origin.y

  printObjects()
  }
 
} 
function printObjects()
{
  strokeWeight(3)
  stroke(0,255,0)
  line(origin.x, origin.y,myVector.x, myVector.y)
  fill(255,20,255)
  stroke(255,255,0)
  strokeWeight(3)
  circle(myVector.x, myVector.y,diameter) 
  fill(255,20,255)
  stroke(255,255,0)
  rect(origin.x-rect1/2,origin.y-rect2/2, rect1,rect2)
}
