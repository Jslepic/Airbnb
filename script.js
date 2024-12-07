function filterByCity(targetCity, listingCityArray) {
  let indexArray = [];
  for (let i = 0; i < listingCityArray.length; i++) {
    if (targetCity.toLowerCase() == listingCityArray[i].toLowerCase()) {
      indexArray.push(i);
    }
  }
  return indexArray;
}

function filterByPrice(minPrice, maxPrice, listingPriceArray) {
  // Note: Comment out the following line when you start working on this function!
  //return [...listingPriceArray.keys()];
  let indexArray = [];
  for (let i = 0; i < listingPriceArray.length; i++) {
    if (listingPriceArray[i] < maxPrice && listingPriceArray[i] > minPrice) {
      indexArray.push(i);
    }
  }
  return indexArray;
}

// LevelUp!
function filterByTypes(targetTypes, listingTypeArray) {
  // Note: Comment out the following line when you attempt the LevelUp!
  //return [...listingTypeArray.keys()];
  let indexArray = [];
  for (let i = 0; i < listingTypeArray.length; i++) {
    if (targetTypes.includes(listingTypeArray[i])) {
      indexArray.push(i);
    }
  }
  return indexArray;
}
