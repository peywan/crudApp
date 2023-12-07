let form = document.getElementById("form");
let post = document.getElementById("post");
let msg = document.getElementById("msg");
let input = document.getElementById("input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("button clicked");

  formValidation();
});

let formValidation = () => {
  if (input.value === "") {
    msg.innerHTML = "post cannot be blank";
    console.log("Failure");
  } else {
    console.log("success");
    msg.innerHTML = "";
  }
};

let data = {};

let acceptdata = () => {
  data["text"] = input.value;
};
