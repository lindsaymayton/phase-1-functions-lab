function distanceFromHqInBlocks(value) {
    return Math.abs(value - 42);
}
function distanceFromHqInFeet(currentLocation) {
    const blocks = distanceFromHqInBlocks(currentLocation);
    const feet = blocks * 264;
    return feet;

}
  function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * 264;

  }
  const feetInOneUnit = 3;
  function calculatesFarePrice(start, destination) {
    const distance = Math.abs(destination - start) * 264;
    if (distance <= 400) {
      return 0; // Fare is free
    } else if (distance <= 2000) {
      const fare = (distance - 400) * 0.02;
      console.log(distance); // Add this line
      console.log(fare); // Add this line
      return fare; // Remove toFixed(2)
    } else if (distance <= 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  } 