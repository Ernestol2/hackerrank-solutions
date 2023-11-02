function totalMealCost(meal_cost, tip_percent, tax_percent) {

    let tip = (meal_cost/100) * tip_percent
    let tax = (tax_percent/100) * meal_cost

    return Math.round(meal_cost+tip+tax)
}

console.log(totalMealCost(12, 20, 8));