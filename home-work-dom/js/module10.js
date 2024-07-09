//1
const list = document.querySelector("ul");

for (let i = 0; i < list.children.length; i++) {
  const item = list.children[i];
  if (
    !["Mercedes-Benz", "Audi", "Ferrari", "Porshe"].includes(item.textContent)
  ) {
    console.log(`${item.textContent}`);
    item.remove();
  }
}

//3
const newListItem = document.createElement("li");
newListItem.textContent = "Bugatti";

list.prepend(newListItem);

//2
const listItems = document.querySelectorAll("ul li");

document.querySelector("ul").classList.add("list");

listItems.forEach((item) => {
  item.classList.add("listItem");
});

//4
const newFordListItem = document.createElement("li");
newFordListItem.textContent = "Ford";
list.appendChild(newFordListItem);
newFordListItem.classList.add("listItem");

//5
const form = document.querySelector("form");

const nameInput = document.createElement("input");
nameInput.type = "text";
nameInput.placeholder = "Name";
nameInput.name = "name";

const surnameInput = document.createElement("input");
surnameInput.type = "text";
surnameInput.placeholder = "Surname";
surnameInput.name = "surname";

const passwordInput = document.createElement("input");
passwordInput.type = "password";
passwordInput.placeholder = "Password";
passwordInput.name = "password";

const passwordConfirmInput = document.createElement("input");
passwordConfirmInput.type = "password";
passwordConfirmInput.placeholder = "Confirm Password";
passwordConfirmInput.name = "passwordConfirm";

form.appendChild(nameInput);
form.appendChild(surnameInput);
form.appendChild(passwordInput);
form.appendChild(passwordConfirmInput);

//6
const img = document.createElement("img");
img.src = "./cat.jpg";
img.alt = "Моя картинка";
img.width = 200;
img.height = 200;

document.body.appendChild(img);

//7
const paragraph = document.querySelector("p");

paragraph.classList.remove("red", "italic");

//8 //9

const h1Wrapper = document.getElementById("h1Wrapper");

const h1Tag = document.createElement("h1");
h1Tag.textContent = "this is h1 tag";

h1Tag.style.color = "blue";
h1Tag.style.fontSize = "40px";

h1Wrapper.appendChild(h1Tag);
