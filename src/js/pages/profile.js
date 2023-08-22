const listMySkill = [
  {
    name: "React",
    img: "/image/React.png",
    desc: " What is React used for? React is a JavaScript library developed by Facebook which, among other things, was used to build Instagram.com. Its aim is to allow developers to easily create fast user interfaces for websites and applications alike.",
  },
  {
    name: "Laravel",
    img: "/image/laravel.jpg",
    desc: "Laravel is a powerful framework that allows building web applications of any complexity and purpose from simple one-page websites to enterprise-level solutions",
  },
  {
    name: "Node Js",
    img: "/image/nodejs.png",
    desc: "Node. js is primarily used for non-blocking, event-driven servers, due to its single-threaded nature.",
  },
];

const listMyProject = [
  {
    name: "Notes App",
    img: "/image/notesapp.jpg",
  },
  {
    name: "Siaga Cloud App ",
    img: "/image/cloud.jpg",
  },
  {
    name: "Magic  Resto App ",
    img: "/image/resto.jpg",
  },
];
const listMyExperience = [
  {
    name: "Administrator",
    at: "2016 sampai 2017",
  },
  {
    name: "Sales",
    at: "2017 sampai 2021",
  },
  {
    name: "Frontend Web Developer",
    at: "2021 sampai sekarang",
  },
];
const Profile = {
  async init() {
    this._initialData();
  },

  _initialData() {
    this._myExperience();
    this._mySkill();
    this._myProject()
  },

  _myProject() {
    let myProject = document.getElementById("myproject");
    for (let i = 0; i < listMyProject.length; i++) {
      let tempHtml = `<div class="content-grid-child">
        <img src="${listMyProject[i].img}" height="150px"  />
        <div>
            <h4>${listMyProject[i].name}</h4>
            
        </div>
    </div>`;
      myProject.innerHTML += tempHtml;
    }
  },
  _myExperience() {
    let myExperience = document.getElementById("myexperience");
    for (let i = 0; i < listMyExperience.length; i++) {
      let tempHtml = `<div class="content-experience">
        <div>${listMyExperience[i].name}</div>
        <div> ${listMyExperience[i].at}</div>
    </div>`;
      myExperience.innerHTML += tempHtml;
    }
  },
  _mySkill() {
    let myskill = document.getElementById("myskill");
    console.log(myskill);
    for (let i = 0; i < listMySkill.length; i++) {
      let tempHtml = `<div class="content-grid-child">
        <img src="${listMySkill[i].img}" height="150px"  />
        <div>
            <h4>${listMySkill[i].name}</h4>
            <p>
               ${listMySkill[i].desc}
            </p>
        </div>
    </div>`;
      myskill.innerHTML += tempHtml;
    }
  },
};
export default Profile