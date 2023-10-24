
const fruits = [
    "Apple",
    "Banana",
    "Orange",
    "Strawberry",
    "Grapes",
    "Mango",
    "Watermelon",
    "Pineapple",
    "Cherry",
    "Kiwi",
    "Pear",
    "Blueberry",
    "Raspberry",
    "Lemon",
    "Peach",
    "Cantaloupe",
    "Plum",
    "Coconut",
    "Apricot",
    "Pomegranate",
    "Blackberry",
    "Lime",
    "Avocado",
    "Guava",
    "Passion Fruit",
    "Papaya",
    "Fig",
    "Tangerine",
    "Cranberry",
    "Mandarin Orange",
    "Dragon Fruit",
    "Lychee",
    "Starfruit",
    "Boysenberry",
    "Grapefruit",
    "Nectarine",
    "Currant",
    "Elderberry",
    "Persimmon",
    "Clementine",
    "Rhubarb",
    "Mulberry",
    "Cucumber",
    "Jackfruit",
    "Durian",
    "Kumquat",
    "Loquat",
    "Rambutan"
  ];
  
const fruitList = document.createElement("ul");

/*
<ul>
    <li>Banana</li>
</ul>
*/
for (let fruit of fruits) {
const fruitItem = document.createElement("li");
fruitItem.textContent = fruit;
fruitList.append(fruitItem);
}

document.body.append(fruitList);
