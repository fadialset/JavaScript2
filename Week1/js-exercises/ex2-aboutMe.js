/**
 
 ** Exercise 2: About me **

 1. See HTML
 2. Change the body tag 's style so it has a font-family of "Arial, sans-serif".
 3. Replace each of the spans(nickname, fav - food, hometown) with your own information.
 4. Iterate through each li and change the class to "list-item".
 5. See HTML
 6. Create a new img element and set its src attribute to a picture of you.Append that element to the page.
 */

 // changing the font family of the body
document.body.style.fontFamily = "Arial, sans-serif";

//adding my name to the nickaName li
const nickName = document.getElementById("nickname");
nickName.textContent = 'Fadi';

// adding the my favorite food 
const favFood = document.getElementById("fav-food");
favFood.textContent = 'Pizza';

// adding my hometown 
const homeTown = document.getElementById("hometown");
homeTown.textContent = 'Syria';

// changing the className of the list items
const list = document.querySelectorAll('li');
for (let i = 0; i<list.length; i++){
    list[i].className = 'list-item';
}
// adding my personal image 
const image = document.createElement('img');
image.src = 'https://i.ibb.co/QYT1mHz/Whats-App-Image-2020-10-06-at-18-30-44.jpg'
image.style.width = '200px';
document.body.appendChild(image);