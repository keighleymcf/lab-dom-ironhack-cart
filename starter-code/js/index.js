function deleteItem(e) {

}

function getPriceByProduct(itemNode) {
  return parseFloat(document.getElementsByClassName("product-price")[itemNode].innerText.substring(1));
}

function updatePriceByProduct(index) {

  let productPrice = getPriceByProduct(index);
  let productQty = parseFloat(document.getElementsByClassName("qty")[index].value);
  console.log(productPrice, productQty)
  document.getElementsByClassName("total-product-price")[index].innerText = "$ " + productPrice * productQty;

  // productPrice = document.getElementById("qty") * productPrice;

  // document.getElementsByClass("total-product-price").innerText = productPrice;

}

function getTotalPrice(index) {
  updatePriceByProduct(index);
}

function createQuantityInput() {

}

function createDeleteButton() {

}

function createQuantityNode() {

}

function createItemNode(dataType, itemData) {

}

function createNewItemRow(itemName, itemUnitPrice) {

}

function createNewItem() {

}

window.onload = function () {
  var calculatePriceButton = document.getElementById('calc-prices-button');
  // var createItemButton = document.getElementById('new-item-create');
  // var deleteButtons = document.getElementsByClassName('btn-delete');
  document.getElementsByClassName("product-list"));

function (product) {
  getPriceByProduct(indexOf(product));
})

calculatePriceButton.onclick = getTotalPrice;
// createItemButton.onclick = createNewItem;

// for (var i = 0; i < deleteButtons.length; i++) {
//   deleteButtons[i].onclick = deleteItem;
// }
};