function distanceFromHqInBlocks(loc) {
    const start = 42;
    let distance;
    if (loc >= 42) {
        distance = loc - start;
    } else if (loc > 0 && loc < 42) {
        distance = start - loc;
    } else {
        return "Sorry, your location is not valid."
    }
    return distance;
}

function distanceFromHqInFeet(loc) {
    return distanceFromHqInBlocks(loc) * 264;
}   

function distanceTravelledInFeet(start, end) {
    if (start > end) {
        return (start - end) * 264;
    } else {
        return (end - start) * 264;
    }
}

function calculatesFarePrice(start, end) {
    const distanceF = distanceTravelledInFeet(start, end);
    if (distanceF <= 400) {
        return 0;
    } else if (distanceF > 400 && distanceF <= 2000) {
        return (distanceF - 400) * 0.02;
    } else if (distanceF > 2000 && distanceF <= 2500) {
        return 25;
    } else {
        return "cannot travel that far";
    }
}
 