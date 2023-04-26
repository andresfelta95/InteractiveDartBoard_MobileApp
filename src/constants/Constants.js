// Constants to give a range of loctions for each section of the dart board
// The locations are based on the ESP32 coordinates:
// 0,0 is the center of the board
// 19,0 is the right edge of the board
// 0,19 is the top edge of the board
// -19,0 is the left edge of the board
// 0,-19 is the bottom edge of the board
//

export async function calclateScore(pointX, pointY){
    let score = 0;
    let distance = 0;
    console.log("calclating");
    // using Pythagoras formula to calculate the distance to the centre.
    distance  = Math.sqrt(Math.pow(pointX,2) + Math.pow(pointY,2));
    console.log(distance);

    //   #Use SOCATOA to calculate the angle matching the arrow position
    let angle = Math.atan2(pointX, pointY) * (180 / Math.PI);
    if (angle < 0){
        angle+=360
    }
    console.log(angle); 

    if(angle < 9){
        score = 6;
    }else if (angle < 27 && angle >=9){
        score = 13;
    }else if(angle < 45 && angle >= 27){
        score = 4;
    }else if (angle < 63 && angle >= 45){
        score = 18;
    }else if(angle < 81 && angle >= 63){
        score = 1;
    }else if (angle < 99 && angle >= 81){
        score = 20;
    }else if (angle < 117 && angle >= 99){
        score = 5;
    }else if (angle < 135 && angle >= 117){
        score = 12;
    }else if (angle < 153 && angle >= 135){
        score = 9;
    }else if (angle < 171 && angle >= 153){
        score = 14;
    }else if(angle < 189 && angle >= 171){
        score = 11;
    }else if(angle < 207 && angle >= 189){
        score = 8;
    }else if(angle < 225 && angle >= 207){
        score = 16;
    }else if(angle < 243 && angle >= 225){
        score = 7;
    }else if(angle < 261 && angle >= 243){
        score = 19;
    }else if(angle < 279 && angle >= 261){
        score = 3;
    }else if(angle < 297 && angle >= 279){
        score = 17;
    }else if(angle < 315 && angle >= 297){
        score = 2;
    }else if(angle < 333 && angle >= 315){
        score = 15;
    }else if(angle < 351 && angle >= 333){
        score = 10;
    }else if(angle < 360 && angle >= 351){
        score = 6;
    }

    
    if(distance > 0 && distance < 1){
        score = 50;
    }else if(distance > 1 && distance < 2.5){
        score = 25;
    }else if(distance > 7 && distance < 8.5){
        score = score * 3;
    }else if(distance > 13 && distance < 14.6){
        score = score * 2;
    }else if(distance > 14.6){
        score = 0;
    }
    console.log(score);
    return score; 
}

// def calculateScore(arrowx,arrowy):
//   score = 0
//   distance = 0
//   #Add code here using Pythagoras formula to calculate the distance to the centre.
//   #distance = ....
//   center  = math.sqrt(math.pow(arrowx,2) + math.pow(arrowy,2))
//   print(center)
//   #Use SOCATOA to calculate the angle matching the arrow position
//   angle = math.degrees(math.atan2(arrowy,arrowx))
//   if angle<0:
//     angle+=360
//   print(angle) 
  
//   #Use a collection of IF statements to calculate the score of the arrow based on the distance and angle
//   #...
//   if angle < 9:
//     score = 6
//   elif angle < 27 and angle >= 9:
//     score = 13
//   elif angle < 45 and angle >= 27:
//     score = 4
//   elif angle < 63 and angle >= 45:
//     score = 18
//   elif angle < 81 and angle >= 63 : 
//     score = 1
//   elif angle < 99 and angle >= 81:
//     score = 20
//   elif angle < 117 and angle >= 99:
//     score = 5
//   elif angle < 135 and angle >= 117:
//     score = 12
//   elif angle < 153 and angle >= 135:
//     score = 9
//   elif angle < 171 and angle >= 153:
//     score = 14
//   elif angle < 189 and angle >= 171:
//     score = 11
//   elif angle < 207 and angle >= 189:
//     score = 8
//   elif angle < 225 and angle >= 207:
//     score = 16
//   elif angle < 243 and angle >= 225:
//     score = 7
//   elif angle < 261 and angle >= 243:
//     score = 19
//   elif angle < 279 and angle >= 261:
//     score = 3
//   elif angle < 297 and angle >= 279:
//     score =17 
//   elif angle < 315 and angle >= 297:
//     score = 2
//   elif angle < 333 and angle >= 315:
//     score = 15
//   elif angle < 351 and angle >= 333:
//     score = 10
//   elif angle < 360 and angle >= 351:
//     score = 6
  
//   if center > 0 and center < 10:
//     score = 50
//   elif center > 10 and center < 20:
//     score = 25
//   elif center > 73 and center < 84:
//     score = score * 3
//   elif center > 134 and center < 144:
//     score = score * 2
//   elif center > 144:
//     score = 0
//   return score