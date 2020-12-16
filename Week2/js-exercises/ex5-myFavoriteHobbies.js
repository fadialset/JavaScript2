/**
 
 ** Exercise 5: My favorite hobbies **
 
 Write a program that outputs each of these inside an HTML file
 Create an HTML and JavaScript file, link them together
 Use the map and / or forEach function to put each hobby into a list item
 Put the list items in an unordered list
 */
const heading = document.createElement('h1');
heading.textContent = 'My favorite hobbies are ';
document.body.appendChild(heading);
heading.style.textAlign = 'center';
const myHobbies = [
  'Meditation',
  'Reading',
  'Programming',
  'Hanging out with friends',
  'Going to the gym',
];
function createHTMLList(arr) {
  // your code goes in here
  const hobbies = arr.map(hobby => {
  const listItem = document.createElement('li')
  listItem.textContent = hobby;
  const list = document.createElement('ul');
    list.appendChild(listItem);
    list.style.textAlign = 'center';
    list.style.listStyle = 'none';

  return document.body.appendChild(list);
 });
  return hobbies
};

createHTMLList(myHobbies);

