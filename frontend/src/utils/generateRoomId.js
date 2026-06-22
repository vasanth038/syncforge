 
 function generateRoomId(){
 let  int =  Math.floor(Math.random()*100000000);
 var  roomId = int.toString();
 return roomId;
 }
 export default generateRoomId ;

