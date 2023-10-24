
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

const faceEmojis = ["😀", "😃", "😄", "😁", "😆", "😅", "😂", "🤣", "😊", "😇"];

const fruitContainer = document.querySelector("#fruit-container");
const fruitList = document.createElement("ul");

/*
<ul>
	<li>Banana</li>
	<li>Banana</li>
	<li>Banana</li>
	<li>Banana</li>
	<li>Banana</li>
	<li>Banana</li>
</ul>
*/
for (let i = 0; i < fruits.length; i++) {
  const fruitItem = document.createElement("li");
  const randomEmoji = faceEmojis[Math.floor(Math.random() * faceEmojis.length)];
  fruitItem.textContent = `${fruits[i]}${randomEmoji}`;
  fruitList.append(fruitItem);
}

fruitContainer.append(fruitList);