"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const restaurants_1 = require("./restaurants");
const dollarSigns = '$$';
const deliveryTimeMax = '90';
const maxDistance = 10;
const hour = new Date().getHours();
let result;
const priceBracket = dollarSigns.length;
const filteredRestaurants = restaurants_1.default.filter((restaurant) => {
    if (Number(restaurant.priceBracket) > priceBracket
        && Number(restaurant.openHour) > hour
        && Number(restaurant.closeHour) < hour) {
        return false;
    }
    if (restaurant.deliveryTimeMinutes > Number(deliveryTimeMax)) {
        return false;
    }
    if (Number(restaurant.distance) > maxDistance) {
        return false;
    }
    return restaurant;
});
if (filteredRestaurants.length === 0) {
    result = 'There are no restaurants available right now.';
}
else {
    result = `We found ${filteredRestaurants.length} restaurants, the first is ${filteredRestaurants[0].name}.`;
}
console.log(result);
