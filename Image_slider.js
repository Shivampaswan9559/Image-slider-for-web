let val = 1;
function next()
{
   let hello = document.querySelector(".image").id;
   if(hello === "1")
   {
      box2();
      
   }
   else if (hello === "2")
   {
      box3();
      
   }
   else if (hello === "3")
   {
      box4();
   }
   else if (hello === "4")
      {
         box5();
      }
      else if (hello === "5")
         {
            box6();
         }
         else if (hello === "6")
            {
               box7();
            }
            else if (hello === "7")
               {
                  box8();
               }
               else if (hello === "8")
                  {
                     box9();
                  }
                  else if (hello === "9")
                     {
                        window.alert("Currently no photo available");
                     
                     }


}
function prev()
{
   let hello = document.querySelector(".image").id;
   if(hello === "1")
      {
         box9();
         
      }
      else if (hello === "2")
      {
         box1();
         
      }
      else if (hello === "3")
      {
         box2();
      }
      else if (hello === "4")
         {
            box3();
         }
         else if (hello === "5")
            {
               box4();
            }
            else if (hello === "6")
               {
                  box5();
               }
               else if (hello === "7")
                  {
                     box6();
                  }
                  else if (hello === "8")
                     {
                        box7();
                     }
                     else if (hello === "9")
                        {
                           box8();
                        }
    
}
function see_more()
{
   window.alert("Currently no photo available")
}
function box1()

{
   let image = document.querySelector(".image");
   image.id = "1";
   image.style.backgroundImage = "URL('/photo1.jpg')";
   image.style.backgroundSize = "contain";
   let box1 = document.querySelector("#box1");
   let box2 = document.querySelector("#box2");
   let box3 = document.querySelector("#box3");
   let box4 = document.querySelector("#box4");
   let box5 = document.querySelector("#box5");
   let box6 = document.querySelector("#box6");
   let box7 = document.querySelector("#box7");
   let box8 = document.querySelector("#box8");
   let box9 = document.querySelector("#box9");

   box1.style.border = "3px solid rgb(0, 91, 84)";
   box2.style.border = "1px solid yellow";
   box3.style.border = "1px solid yellow";
   box4.style.border = "1px solid yellow";
   box5.style.border = "1px solid yellow";
   box6.style.border = "1px solid yellow";
   box7.style.border = "1px solid yellow";
   box8.style.border = "1px solid yellow";
   box9.style.border = "1px solid yellow";

   box1.style.opacity = "1";
   box2.style.opacity = "0.7";
   box3.style.opacity = "0.7";
   box4.style.opacity = "0.7";
   box5.style.opacity = "0.7";
   box6.style.opacity = "0.7";
   box7.style.opacity = "0.7";
   box8.style.opacity = "0.7";
   box9.style.opacity = "0.7";
}
function box2()
{
  
   let image = document.querySelector(".image");
   image.id = "2";
   image.style.backgroundImage = "URL('/photo2.jpg')";
   image.style.backgroundSize = "contain";
   
   let box1 = document.querySelector("#box1");
   let box2 = document.querySelector("#box2");
   let box3 = document.querySelector("#box3");
   let box4 = document.querySelector("#box4");
   let box5 = document.querySelector("#box5");
   let box6 = document.querySelector("#box6");
   let box7 = document.querySelector("#box7");
   let box8 = document.querySelector("#box8");
   let box9 = document.querySelector("#box9");
   box1.style.border = "1px solid yellow";
   box2.style.border = "3px solid rgb(0, 91, 84)";
   box3.style.border = "1px solid yellow";
   box4.style.border = "1px solid yellow";
   box5.style.border = "1px solid yellow";
   box6.style.border = "1px solid yellow";
   box7.style.border = "1px solid yellow";
   box8.style.border = "1px solid yellow";
   box9.style.border = "1px solid yellow";


  box1.style.opacity = "0.7";
  box2.style.opacity = "1";
  box3.style.opacity = "0.7";
  box4.style.opacity = "0.7";
  box5.style.opacity = "0.7";
  box6.style.opacity = "0.7";
  box7.style.opacity = "0.7";
  box8.style.opacity = "0.7";
  box9.style.opacity = "0.7";
}

function box3()
{
  
   let image = document.querySelector(".image");
   image.id = "3";
   image.style.backgroundImage = "URL('/photo3.jpg')";
   image.style.backgroundSize = "contain";

   let box1 = document.querySelector("#box1");
   let box2 = document.querySelector("#box2");
   let box3 = document.querySelector("#box3");
   let box4 = document.querySelector("#box4");
   let box5 = document.querySelector("#box5");
   let box6 = document.querySelector("#box6");
   let box7 = document.querySelector("#box7");
   let box8 = document.querySelector("#box8");
   let box9 = document.querySelector("#box9");

   box1.style.border = "1px solid yellow";
   box2.style.border = "1px solid yellow";
   box3.style.border = "3px solid rgb(0, 91, 84)";
   box4.style.border = "1px solid yellow";
   box5.style.border = "1px solid yellow";
   box6.style.border = "1px solid yellow";
   box7.style.border = "1px solid yellow";
   box8.style.border = "1px solid yellow";
   box9.style.border = "1px solid yellow";

   box1.style.opacity = "0.7";
   box2.style.opacity = "0.7";
   box3.style.opacity = "1";
   box4.style.opacity = "0.7";
   box5.style.opacity = "0.7";
   box6.style.opacity = "0.7";
   box7.style.opacity = "0.7";
   box8.style.opacity = "0.7";
   box9.style.opacity = "0.7";
   
}
function box4()
{
  
   let image = document.querySelector(".image");
   image.id = "4";
   image.style.backgroundImage = "URL('/photo4.jpg')";
   image.style.backgroundSize = "contain";
   

   let box1 = document.querySelector("#box1");
   let box2 = document.querySelector("#box2");
   let box3 = document.querySelector("#box3");
   let box4 = document.querySelector("#box4");
   let box5 = document.querySelector("#box5");
   let box6 = document.querySelector("#box6");
   let box7 = document.querySelector("#box7");
   let box8 = document.querySelector("#box8");
   let box9 = document.querySelector("#box9");

   box1.style.border = "1px solid yellow";
   box2.style.border = "1px solid yellow";
   box3.style.border = "1px solid yellow";
   box4.style.border = "3px solid rgb(0, 91, 84)";
   box5.style.border = "1px solid yellow";
   box6.style.border = "1px solid yellow";
   box7.style.border = "1px solid yellow";
   box8.style.border = "1px solid yellow";
   box9.style.border = "1px solid yellow";

   box1.style.opacity = "0.7";
   box2.style.opacity = "0.7";
   box3.style.opacity = "0.7";
   box4.style.opacity = "1";
   box5.style.opacity = "0.7";
   box6.style.opacity = "0.7";
   box7.style.opacity = "0.7";
   box8.style.opacity = "0.7";
   box9.style.opacity = "0.7";
   
}
function box5()
{
  
   let image = document.querySelector(".image");
   image.id = "5";
   image.style.backgroundImage = "URL('/photo5.jpg')";
   image.style.backgroundSize = "contain";
   

   let box1 = document.querySelector("#box1");
   let box2 = document.querySelector("#box2");
   let box3 = document.querySelector("#box3");
   let box4 = document.querySelector("#box4");
   let box5 = document.querySelector("#box5");
   let box6 = document.querySelector("#box6");
   let box7 = document.querySelector("#box7");
   let box8 = document.querySelector("#box8");
   let box9 = document.querySelector("#box9");

   box1.style.border = "1px solid yellow";
   box2.style.border = "1px solid yellow";
   box3.style.border = "1px solid yellow";
   box4.style.border = "1px solid yellow";
   box5.style.border = "3px solid rgb(0, 91, 84)";
   box6.style.border = "1px solid yellow";
   box7.style.border = "1px solid yellow";
   box8.style.border = "1px solid yellow";
   box9.style.border = "1px solid yellow";

   box1.style.opacity = "0.7";
   box2.style.opacity = "0.7";
   box3.style.opacity = "0.7";
   box4.style.opacity = "0.7";
   box5.style.opacity = "1";
   box6.style.opacity = "0.7";
   box7.style.opacity = "0.7";
   box8.style.opacity = "0.7";
   box9.style.opacity = "0.7";
   
}
function box6()
{
  
   let image = document.querySelector(".image");
   image.id = "6";
   image.style.backgroundImage = "URL('/photo6.jpg')";
   image.style.backgroundSize = "contain";
   

   let box1 = document.querySelector("#box1");
   let box2 = document.querySelector("#box2");
   let box3 = document.querySelector("#box3");
   let box4 = document.querySelector("#box4");
   let box5 = document.querySelector("#box5");
   let box6 = document.querySelector("#box6");
   let box7 = document.querySelector("#box7");
   let box8 = document.querySelector("#box8");
   let box9 = document.querySelector("#box9");

   box1.style.border = "1px solid yellow";
   box2.style.border = "1px solid yellow";
   box3.style.border = "1px solid yellow";
   box4.style.border = "1px solid yellow";
   box5.style.border = "1px solid yellow";
   box6.style.border = "3px solid rgb(0, 91, 84)";
   box7.style.border = "1px solid yellow";
   box8.style.border = "1px solid yellow";
   box9.style.border = "1px solid yellow";

   box1.style.opacity = "0.7";
   box2.style.opacity = "0.7";
   box3.style.opacity = "0.7";
   box4.style.opacity = "0.7";
   box5.style.opacity = "0.7";
   box6.style.opacity = "1";
   box7.style.opacity = "0.7";
   box8.style.opacity = "0.7";
   box9.style.opacity = "0.7";
   
}
function box7()
{
  
   let image = document.querySelector(".image");
   image.id = "7";
   image.style.backgroundImage = "URL('/photo7.jpg')";
   image.style.backgroundSize = "contain";
   
   let box1 = document.querySelector("#box1");
   let box2 = document.querySelector("#box2");
   let box3 = document.querySelector("#box3");
   let box4 = document.querySelector("#box4");
   let box5 = document.querySelector("#box5");
   let box6 = document.querySelector("#box6");
   let box7 = document.querySelector("#box7");
   let box8 = document.querySelector("#box8");
   let box9 = document.querySelector("#box9");

   box1.style.border = "1px solid yellow";
   box2.style.border = "1px solid yellow";
   box3.style.border = "1px solid yellow";
   box4.style.border = "1px solid yellow";
   box5.style.border = "1px solid yellow";
   box6.style.border = "1px solid yellow";
   box7.style.border = "3px solid rgb(0, 91, 84)";
   box8.style.border = "1px solid yellow";
   box9.style.border = "1px solid yellow";

   box1.style.opacity = "0.7";
   box2.style.opacity = "0.7";
   box3.style.opacity = "0.7";
   box4.style.opacity = "0.7";
   box5.style.opacity = "0.7";
   box6.style.opacity = "0.7";
   box7.style.opacity = "1";
   box8.style.opacity = "0.7";
   box9.style.opacity = "0.7";
   
}
function box8()
{
  
   // let image = document.querySelector(".image");
   // image.id = "8";
   // image.style.backgroundImage = "URL('/1658919121246.jpg)";
   // image.style.backgroundSize = "contain";
   let image = document.querySelector(".image");
   image.id = "8";
   image.style.backgroundImage = "URL('/photo8.jpg')";
   image.style.backgroundSize = "contain";
   

   let box1 = document.querySelector("#box1");
   let box2 = document.querySelector("#box2");
   let box3 = document.querySelector("#box3");
   let box4 = document.querySelector("#box4");
   let box5 = document.querySelector("#box5");
   let box6 = document.querySelector("#box6");
   let box7 = document.querySelector("#box7");
   let box8 = document.querySelector("#box8");
   let box9 = document.querySelector("#box9");

   box1.style.border = "1px solid yellow";
   box2.style.border = "1px solid yellow";
   box3.style.border = "1px solid yellow";
   box4.style.border = "1px solid yellow";
   box5.style.border = "1px solid yellow";
   box6.style.border = "1px solid yellow";
   box7.style.border = "1px solid yellow";
   box8.style.border = "3px solid rgb(0, 91, 84)";
   box9.style.border = "1px solid yellow";

   box1.style.opacity = "0.7";
   box2.style.opacity = "0.7";
   box3.style.opacity = "0.7";
   box4.style.opacity = "0.7";
   box5.style.opacity = "0.7";
   box6.style.opacity = "0.7";
   box7.style.opacity = "0.7";
   box8.style.opacity = "1";
   box9.style.opacity = "0.7";
   
}
function box9()
{
  
   // let image = document.querySelector(".image");
   // image.id = "9";
   // image.style.backgroundImage = "URL('/1658919121273.jpg)";
   // image.style.backgroundSize = "contain";
   // window.alert("why not show the pic");
   
   let image = document.querySelector(".image");
   image.id = "9";
   image.style.backgroundImage = "URL('/photo9.jpg')";
   image.style.backgroundSize = "contain";
   

   let box1 = document.querySelector("#box1");
   let box2 = document.querySelector("#box2");
   let box3 = document.querySelector("#box3");
   let box4 = document.querySelector("#box4");
   let box5 = document.querySelector("#box5");
   let box6 = document.querySelector("#box6");
   let box7 = document.querySelector("#box7");
   let box8 = document.querySelector("#box8");
   let box9 = document.querySelector("#box9");

   box1.style.border = "1px solid yellow";
   box2.style.border = "1px solid yellow";
   box3.style.border = "1px solid yellow";
   box4.style.border = "1px solid yellow";
   box5.style.border = "1px solid yellow";
   box6.style.border = "1px solid yellow";
   box7.style.border = "1px solid yellow";
   box8.style.border = "1px solid yellow";
   box9.style.border = "3px solid rgb(0, 91, 84)";

   box1.style.opacity = "0.7";
   box2.style.opacity = "0.7";
   box3.style.opacity = "0.7";
   box4.style.opacity = "0.7";
   box5.style.opacity = "0.7";
   box6.style.opacity = "0.7";
   box7.style.opacity = "0.7";
   box8.style.opacity = "0.7";
   box9.style.opacity = "1";
   
}

// Auto swipe button java_script

function swipe()
{
   
   let image = document.querySelector(".image");
   image.style.animation =" my_anim 80s  1s infinite alternate";
   let full_image = document.querySelector(".other");
   full_image.style.visibility = "hidden";
   image.style.height = "34.5rem";
   let main_image = document.querySelector(".main_image");
   main_image.style.height = "100%";

   let boton1 = document.querySelector("#botm1");
   let boton2 = document.querySelector("#botm2");
   let boton3= document.querySelector("#botm3");
   let boton4 = document.querySelector("#botm4");
   boton1.style.visibility = "hidden";
   boton2.style.visibility = "hidden";
   boton3.style.visibility = "hidden";
   boton4.style.visibility = "hidden";
   let back_col = document.querySelector("#swipe");
   back_col.style.backgroundColor = "#960200"
   
}
function swipe2()
{
   let image = document.querySelector(".image");
   image.style.animation ="none";
   let full_image = document.querySelector(".other");
   full_image.style.visibility = "visible";
   image.style.height = "31.1rem";
   let main_image = document.querySelector(".main_image");
   main_image.style.height = "90%"; 

   let boton1 = document.querySelector("#botm1");
   let boton2 = document.querySelector("#botm2");
   let boton3= document.querySelector("#botm3");
   let boton4 = document.querySelector("#botm4");
   boton1.style.visibility = "visible";
   boton2.style.visibility = "visible";
   boton3.style.visibility = "visible";
   boton4.style.visibility = "visible";
   let back_col = document.querySelector("#swipe");
   back_col.style.backgroundColor = "#8BB174"
}