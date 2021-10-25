import { appendFile } from "fs";
import db from "./firebaseInit";
let parameters = {
  companyLogo: "https://treepodia.com/assets/img/TREEPODIA1.png",
  name: "",
  managerName: "",
  managerPositon: "",
  gender: "",
};

// document.getElementById("mySubmit").addEventListener("submit", (e) => {
e.preventDefault();

new Vue({
  el: "#app",
  data: { errors: [], parameters },
  methods: {
    generateVideo: (e) => {
      addDataToDB();
      console.log(
        parameters.name,
        parameters.managerName,
        parameters.managerPosition,
        parameters.gender
      );
      this.errors = [];
      if (!parameters.name) this.errors.push("Name required.");
      if (!parameters.gender) this.errors.push("Gender required.");
      if (!parameters.managerName) this.errors.push("Manager Name required.");
      if (!parameters.managerPosition)
        this.errors.push("Manager Position required.");
      if (!this.errors.length) {
        this.errors = [];
        let player = document.getElementById("videoPlayer");
        console.log("gen video being called");
        player.load({
          dataUrl: "persovidHRCartoonBday.js",
          debug: false,
          parameters: parameters,
        });
      }
      this.errors.forEach((el) => {
        alert(el);
      });
      this.errors = [];
    },
  },
});
// });
export default { app, generateVideo };
