// import firebase from "firebase";
// import "firebase/firestore";
// import firebaseConfig from "./firebaseConfig";
// const firebaseApp = firebase.initializeApp(firebaseConfig);

//sssss
// console.log("HEY:", parameters);
// document.getElementsByClassName("#Submit");
document.getElementById("mySubmit").addEventListener("submit", (e) => {
  console.log(e);
  e.preventDefault();
  const name = document.querySelector("eName");
  const gender = document.getElementById("gender");
  const mName = document.getElementById("mName");
  const mPosition = document.getElementById("mPosition");
  const cLogo = document.getElementById("cLogo");
  console.log("vals: ", name, gender, mName, mPosition, cLogo);
});
function addDataToDB(params) {
  return 1;
}
//sssss

// export default firebaseApp.firestore();
