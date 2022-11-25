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
    var a = []
    // const keyRef = ref(database, 'data of Quiz/')

    const refrences = ref(database, `data of Quiz/`);

    set(refrences, a)
    alert("your Todo send successfully")
    console.log()

}


var a=[]
const refrences = ref(database, `data of Quiz/`);
var mar = document.getElementById("mar")
var stat = document.getElementById("status")
var percen = document.getElementById("percentage")

var currentindex = 0;
var mark = 0;
var list = []
function renderData() {

    var parent = document.getElementById('parent')
    parent.innerHTML = "";
 
    parent.innerHTML += 
    `
    <div class="div">
    <h2>${list[currentindex].question}</h2><br><button onclick="check1(this)" id='btn1'>${list[currentindex].opt2[0]}</button><button onclick="check2(this)" id='btn2'>${list[currentindex].opt2[1]}</button><button onclick="check3(this)" id='btn3'>${list[currentindex].opt2[2]}</button><br><br>
    </div>
`
    
   }

var mar = document.getElementById("mar")
var status = document.getElementById("status")
var show = document.getElementById("lastdiv")
 window.check1 = function () {


  var btn1 = document.getElementById('btn1')
  var text1 = btn1.innerHTML
  for (var i = 0; i < list.length; i++) {
    console.log(list[i].correctans)
  if(text1==list[i].correctans){
  console.log(text1)

    mark++
    mar.innerHTML=mark
    console.log(mark)
    status.innerHTML="Pass"

    }
    else{
      
        status.innerHTML="Fail"
        mar.innerHTML=mark

    }
   }

currentindex++
renderData()

 }

 //vhchchcc

 window.checking1 = function () {
   
    var atext = document.getElementById('atext')
    var txt1 = atext.innerText;
  console.log(txt1)

    for (var i = 0; i < list.length; i++) {
        console.log(list[i].correctans)
        if (txt1 == list[i].correctans) {
            mark++;
            console.log(mark)
            stat.innerText="Pass"
            status.innerHTML="Pass"
            mar.innerText=mark
    break;
        }

    else{
      
        status.innerHTML="Fail"
        mar.innerHTML=mark

    }
   
    }
}

 
 window.check2 = function () {

    var btn2 = document.getElementById('btn2')
    var text2 = btn2.innerHTML;
    for (var i = 0; i < list.length; i++) {
         console.log(list[i].correctans)
     if(text2==list[i].correctans){
            console.log(text2)

         mark++
         mar.innerHTML=mark
         console.log(mark)
            break;
     }
    }
         currentindex++
         renderData()
}

    window.check3 = function () {
        var btn3 = document.getElementById('btn3')
        var text3 = btn3.innerHTML;
        for (var i = 0; i < list.length; i++) {
             console.log(list[i].correctans)
         if(text3==list[i].correctans){
                console.log(text3)
               
            mark=mark+1
            mar.innerHTML=mark
              console.log(mark)
            status.innerHTML="Pass"
             break;   
         }

    else{
      
        status.innerHTML="Fail"
        mar.innerHTML=mark

    }
        }
             currentindex++
             renderData()
    }
    
    
    
    window.getdata = function () {
    
        const refrences = ref(database, 'todotask/');
        onChildAdded(refrences, function (data) {
            list.push(data.val());
            console.log(data.val());
            console.log(list)
            renderData();
    
    
        });
    
    }

    window.result = function () {
        show.setAttribute('id','second')


    }
    window.hidd = function () {

        show.setAttribute('id','lastdiv')
    }
