let parkingState = [
  [1, 0, 1, 1],
  [0, 0, 0, 2],
  [1, 1, 2, 1],
  [2, 1, 1, 1]
]

// Your code here
let contOccupied = 0;
let contAvailable = 0;
let contNoParking = 0;
let occupied = "occupiedSlots";
let available = "availableSlots";
let totalSlots = "totalSlots";
let contTotalSlots= contOccupied + contNoParking + contAvailable;
let state = {};
function getParkingLotState (plazas) {
  plazas.forEach(plaza => {
    plaza.forEach(placita =>{
      if (placita == 1){
        contOccupied++     
      }else if (placita == 2){
        contAvailable++;
      }else {
        contNoParking++
      }
    })
    
  });
  state = {
    [totalSlots] : contOccupied+contAvailable+contNoParking,
    [occupied] : contOccupied,
    [available] : contAvailable
  }
  return state;
}

console.log(getParkingLotState(parkingState))

// 1-occupied
// 2-available
// 0-not a parking

// let state = {
//   totalSlots: 12,
//   availableSlots: 3,
//   occupiedSlots: 9
// }