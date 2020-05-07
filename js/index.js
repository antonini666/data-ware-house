function getLangResources() {
  let ru = [];
  let us = [];

  ru["title_1"] = "Привет";
  ru["title_2"] = "Как ты?";

  us["title_1"] = "Hello";
  us["title_2"] = "How are you?";

  let resourses = [];

  resourses["ru"] = ru;
  resourses["us"] = us;

  return resourses;
}

function changeLanguage(lng) {
  let resourses = getLangResources()[lng];

  [...document.querySelectorAll("[name='translate']")].map((i) => {
    i.textContent = resourses[i.getAttribute("caption")];
  });
}

document.querySelector(".lng").addEventListener("change", (e) => {
  changeLanguage(e.target.value);
});
