var menuItems = ['hamburgers', 'pizza', 'enchiladas', 'sushi'];
var itemPrices = [3, 6, 5, 10];
var taxRate = 0.08;
var tipPercent = 0.15;
var sum = 0;
var Diner = function(meal) {
    this.meal = meal;
    this.itemIndex = menuItems.indexOf(meal);
    this.cost = itemPrices[this.itemIndex];
    this.taxPaid = this.cost * taxRate;
    this.total = this.cost + this.taxPaid;
};
var John = new Diner('pizza');
var Paul = new Diner('hamburgers');
var George = new Diner('enchiladas');
var Ringo = new Diner('sushi');
var dinnerParty = [John, Paul, George, Ringo];
var partySize = dinnerParty.length;
function mealCalculator() {
    for (var i = 0; i < dinnerParty.length; i++) {
        sum += dinnerParty[i].cost;
    }
    var addedTax = sum * taxRate;
    var tipShare = (sum * tipPercent) / partySize;
    var grandTotal = sum + addedTax;
    var totalBill = `The food total is $${sum.toFixed(2)}, with a tax of $${addedTax.toFixed(2)}, and the grand total is $${grandTotal.toFixed(2)}`;
    var johnOwes = `John's ${John.meal} cost $${John.cost.toFixed(2)}. The tax on the meal is $${John.taxPaid.toFixed(2)}, for a total of $${John.total.toFixed(2)}. His share of the tip is $${tipShare.toFixed(2)}`;
    var paulOwes = `Paul's ${Paul.meal} cost $${Paul.cost.toFixed(2)}. The tax on the meal is $${Paul.taxPaid.toFixed(2)}, for a total of $${Paul.total.toFixed(2)}. His share of the tip is $${tipShare.toFixed(2)}`;
    var georgeOwes = `George's ${George.meal} cost $${George.cost.toFixed(2)}. The tax on the meal is $${George.taxPaid.toFixed(2)}, for a total of $${George.total.toFixed(2)}. His share of the tip is $${tipShare.toFixed(2)}`;
    var ringoOwes = `Ringo's ${Ringo.meal} cost $${Ringo.cost.toFixed(2)}. The tax on the meal is $${Ringo.taxPaid.toFixed(2)}, for a total of $${Ringo.total.toFixed(2)}. His share of the tip is $${tipShare.toFixed(2)}`;
    console.log(totalBill);
    console.log(johnOwes);
    console.log(paulOwes);
    console.log(georgeOwes);
    console.log(ringoOwes);
}
mealCalculator();