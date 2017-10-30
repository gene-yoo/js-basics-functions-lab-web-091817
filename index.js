// Code your solution in this file!
function distanceFromHqInBlocks (target) {
  return Math.abs(target - 42)
}

function distanceFromHqInFeet (target) {
  return distanceFromHqInBlocks(target)*264
}

function distanceTravelledInFeet (start, end) {
  return Math.abs(start - end)*264
}

function calculatesFarePrice (start, end) {
  const distance = distanceTravelledInFeet(start, end);

  if (distance > 2500) {
    return 'cannot travel that far';
  }

  const fare = 0.02;

  switch (true) {
    case (distance <= 400):
      return 0;
    case (distance > 2000):
      return 25;
    default:
      return distance*fare;
  }
}
