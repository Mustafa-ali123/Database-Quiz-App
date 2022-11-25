
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";

import {
    getDatabase,
    ref,
    set,
    push,
    onChildAdded,
    onValue,
    remove


} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDfTqYzVmmd2ev3UiZyAcQU4qvhuU6xtVY",
    authDomain: "quzi-app-database.firebaseapp.com",
    projectId: "quzi-app-database",
    storageBucket: "quzi-app-database.appspot.com",
    messagingSenderId: "1067594739927",
    appId: "1:1067594739927:web:2db4ed95f7d0dc89db0092",
    measurementId: "G-DR80EQD2HK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase();


window.sendtodo = function () {

    const refrence = ref(database, `todotask/`);

    const keyRef = ref(database, 'todotask/')
     obj.id = push(keyRef).key;
    const refrences = ref(database, `todotask/${obj.id}`);


    set(refrences, obj)
    alert("your Todo send successfully")
  

}



var question = document.getElementById("questioninp");
var opt = document.getElementById("opt")
var correctans = document.getElementById("correctans");

var opt2 = []
var obj;
window.send = function () {


    obj = {

        question: question.value,
        opt2: opt2,
        correctans: correctans.value
    }
    console.log(obj)

    question.innerHTML = ""
    correctans.innerHTML = ""

}

window.xyz = function () {

    window.location.href = "home.html"


}

// function check() {
//     var opt = document.getElementById("opt").value;
//     var ans1 = opt2[0];
//     var ans2 = opt2[1];
//     var ans3 = opt2[2];
//     var ans4 = opt2[3];

//     if (correctans.value == opt2[0]) {

//         alert("ok")

//     }

//     if (correctans.value == opt2[1]) {

//         alert("ok")

//     }
//     if (correctans.value == opt2[2]) {

//         alert("ok")

//     }
//     if (correctans.value == opt2[3]) {
//         console.log(obj)
//         alert("mus ma")

//     }
// }


window.abc = function () {

    var f = opt2.push(opt.value)
    console.log(f)

}









// var question = document.getElementById('question');
// var opt1 = document.getElementById('opt1');
// var opt2 = document.getElementById('opt2');
// var opt3 = document.getElementById('opt3');
// var opt4 = document.getElementById('opt4');


// window.sendquiz = function () {
//   var obj = {
//     question: question.value,
//     a: opt1.value,
//     b: opt2.value,
//     c: opt3.value,
//     d: opt4.value,

//   }
//   const keyofref = ref(database, 'Quiz/')
//   obj.id = push(keyofref).key;
//   const refrences = ref(database, `Quiz/${obj.id}/`);
//   set(refrences, obj)
//   console.log(obj.id)
//   console.log(obj)

//   question.value = ""
//   opt1.value = ""
//   opt2.value = ""
//   opt3.value = ""
//   opt4.value = ""
 
// };


// var list = [];
// function renderdata() {
//   const refrences = ref(database, `Quiz/`);
//   var parent = document.getElementById('parent');

//   parent.innerHTML = "";
//   for (var i = 0; i < list.length; i++) {
//     parent.innerHTML += `<h2 >${list[i].question}</h2>
//    <ul> 
//    <li>
//         <input type="radio" checked onclick="submitresult()" id="a" name="answer" class="answer">
//         <label id="a_text"  for="a">${list[i].a}</label>
//          </li>
//           <li>
//            <input type="radio" checked id="b" name="answer" class="answer">
//                 <label id="b_text" for="b">${list[i].b}</label>
//               </li>
//               <li>
//                 <input type="radio" checked id="c" name="answer" class="answer">
//                   <label id="c_text" for="c">${list[i].c}</label>
//                 </li>
//                 <li>
//                   <input type="radio"  id="d" name="answer" class="answer">
//                   <label id="d_text" for="d">${list[i].d}</label>
//                 </li>
//   </ul>`;
//   }
// }
// window.getdata = function () {
//   onValue(ref(database, '/Quiz/'),
//     (snapshot) => {
//       console.log(snapshot.val())
//     });
//   const quizRef = ref(database, 'Quiz/');
//   onChildAdded(quizRef, function (data) {
//     list.push(data.val());
//     console.log(data.val());
//     renderdata();
//   });

// }

// var currentquizscore = 0;
// window.chkquestion = function (done){
//   var a = done.parent.getAttribute("id")
//   var b = list[a].correct
//   if(done.innerHTML.trim()===b){
//     ++score;
//     console.log(score)
//   }
// }


