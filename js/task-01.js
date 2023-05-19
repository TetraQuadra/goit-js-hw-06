const listEl = document.querySelector("#categories");
const listItemElsCollection = listEl.querySelectorAll("li.item");
console.log(`Number of categories: ${listItemElsCollection.length}`);
listItemElsCollection.forEach((el) => {
  console.log(
    `Сategory: ${el.querySelector("h2").textContent}\nElements: ${
      el.querySelectorAll("li").length
    }`
  );
});
