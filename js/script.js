let bar = document.getElementById("burgerbar");
let navbar = document.getElementById("nav");

bar.addEventListener("click", function () {
  navbar.classList.toggle("nav-active");
  bar.classList.toggle("li-active");
});

// to-do list logic
let input = document.querySelector("#input-block");
let formelement = document.querySelector(".form-wrapper");
let deletebtn = document.querySelector("#deleteall");
let add = document.querySelector("#addbtn");
let ullist = document.querySelector(".ul-list");

formelement.addEventListener("submit", function (event) {
  event.preventDefault();
  let value = input.value;
  if (value == " ") {
    return;
  }
  let li = document.createElement("li");
  li.classList.add("li-active");

  let deleteone = document.createElement("i");
  deleteone.classList.add("fa-solid", "fa-trash", "deleteone1");
  deleteone.addEventListener("click", function () {
    li.remove();
  });

  li.innerText = value;
  li.appendChild(deleteone);
  ullist.appendChild(li);
  input.value = "";
});
deletebtn.addEventListener("click", function () {
  ullist.innerHTML = "";
});
