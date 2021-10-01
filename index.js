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