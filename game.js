var score = 0;
const tiger=document.getElementById("tiger");
const answer=document.getElementById("answer");
const option1=document.getElementById("option1");
const option2=document.getElementById("option2");
const option3=document.getElementById("option3");
const option4=document.getElementById("option4");
const button=document.getElementById("button");


var staticGK=[
    {
      state:"Andhra Pradesh",
      number:1 ,
    capital:"Amaravati",
    governor:"Shri Biswa Bhusan Harichandan",
    cheifMinister:"Shri YS Jagan Mohan Reddy",
    status:"notclicked"
    },
    {
      state:"Arunachal Pradesh",
      number:2 ,
    capital:"Itanagar",
    governor:"Brig. (Dr.) B. D. Mishra (Retd.)",
    cheifMinister:"Shri Pema Khandu",
    status:"notclicked"
    },
    {
      state:"Assam",
      number:3 ,
    capital:"Dispur",
    governor:"Prof. Jagdish Mukhi",
    cheifMinister:"Shri Sarbananda Sonowal",
    status:"notclicked"
    },
    {
      state:"Bihar",
      number:4 ,
    capital:"Patna" ,
    governor: "Shri Phagu Chauhan",
    cheifMinister:"Shri Nitish Kumar",
    status:"notclicked"
    },
    {
      state:"Chhattisgarh",
      number:5 ,
    capital:"Raipur"  ,
    governor:"Sushri Anusuiya Uikey",
    cheifMinister:"Shri Bhupesh Baghel",
    status:"notclicked"
    },
    {
      state:"Goa",
      number:6 ,
    capital:"Panaji" ,
    governor: "Shri Bhagat Singh Koshyari",
    cheifMinister:"Shri Pramod Sawant",
    status:"notclicked"
    },
    {
      state:"Gujarat",
      number:7 ,
    capital:"Gandhinagar",
    governor:  "Shri Acharya Dev Vrat",
    cheifMinister:"Shri Vijaybhai R. Rupani",
    status:"notclicked"
    },
    {
      state:"Haryana",
      number:8 ,
    capital:"Chandigarh"  ,
    governor:"Shri Satyadeo Narain Arya",
    cheifMinister:"Shri Manohar Lal",
    status:"notclicked"
    },
    {
      state:"Himachal Pradesh",
      number:9 ,
    capital:"Shimla"  ,
    governor:"Shri Bandaru Dattatraya",
    cheifMinister:"Shri Jairam Thakur",
    status:"notclicked"
    },
    {
      state:"Jharkhand",
      number:10,
    capital:"Ranchi"  ,
    governor:"Shrimati Droupadi Murmu",
    cheifMinister:"Shri Hemant Soren",
    status:"notclicked"
    },
    {
      state:"Karnataka",
      number: 11,
    capital:"Bengaluru" ,
    governor: "Shri Vajubhai Vala",
    cheifMinister:"Sri B. S. Yediyurappa",
    status:"notclicked"
    },
    {
      state:"Kerala",
      number:12 ,
    capital:"Thiruvananthapuram"  ,
    governor:"Shri Arif Mohammed Khan",
    cheifMinister:"Shri Pinarayi Vijayan",
    status:"notclicked"
    },
    {
      state:"Madhya Pradesh",
      number:13 ,
    capital:"Bhopal"  ,
    governor:"Smt. Anandiben Patel",
    cheifMinister:"Shri Shivraj Singh Chouhan",
    status:"notclicked"
    },
    {
      state:"Maharashtra",
      number:14 ,
    capital:"Mumbai"  ,
    governor:"Shri Bhagat Singh Koshyari",
    cheifMinister:"Shri Uddhav Thackeray",
    status:"notclicked"
    },
    {
      state:"Manipur",
      number:15 ,
    capital:"Imphal"  ,
    governor:"Dr. Najma Heptulla",
    cheifMinister:"Shri N. Biren Singh",
    status:"notclicked"
    },
    {
      state:"Meghalaya",
      number:16 ,
    capital:"Shillong" ,
    governor: "Shri Satya Pal Malik",
    cheifMinister:"Shri Conrad Kongkal Sangma",
    status:"notclicked"
    },
    {
      state:"Mizoram",
      number:17 ,
    capital:"Aizawl"  ,
    governor:"Shri P.S. Sreedharan Pillai",
    cheifMinister:"Shri Pu Zoramthanga",
    status:"notclicked"
    },
    {
      state:"Nagaland",
      number:18 ,
    capital:"Kohima"  ,
    governor:"Shri R. N. Ravi",
    cheifMinister:"Shri Neiphiu Rio",
    status:"notclicked"
    },
    {
      state:"Odisha",
      number:19 ,
    capital:"Bhubaneswar" ,
    governor: "Prof. Ganeshi Lal",
    cheifMinister:"Shri Naveen Patnaik",
    status:"notclicked"
    },
    {
      state:"Punjab",
      number:20 ,
    capital:"Chandigarh" ,
    governor: "Shri V.P. Singh Badnore",
    cheifMinister:"Shri Capt. Amarinder Singh",
    status:"notclicked"
    },
    {
      state:"Rajasthan",
      number:21 ,
    capital:"Jaipur"  ,
    governor:"Shri Kalraj Mishra",
    cheifMinister:"Shri Ashok Gehlot",
    status:"notclicked"
    },
    {
      state:"Sikkim",
      number: 22,
    capital:"Gangtok"  ,
    governor:"Shri Ganga Prasad",
    cheifMinister:"Shri PS Golay",
    status:"notclicked"
    },
    {state:"Tamil Nadu",
    number:23 ,
    capital:"Chennai",
    governor:"Shri Banwarilal Purohit",
    cheifMinister:"Thiru Edappadi K. Palaniswami",
    status:"notclicked"
    },
    {
      state:"Telangana",
      number:24 ,
    capital:"Hyderabad"  ,
    governor:"Dr. Tamilisai Soundararajan",
    cheifMinister:"Shri K Chandrasekhar Rao",
    status:"notclicked"
    },
    {
      state:"Tripura",
      number:25 ,
    capital:"Agartala"  ,
    governor:"Shri Ramesh Bais",
    cheifMinister:"Shri Biplab Kumar Deb",
    status:"notclicked"
    },
    {
      state:"Uttar Pradesh",
      number:26 ,
    capital:"Lucknow"  ,
    governor:"Smt. Anandiben Patel",
    cheifMinister:"Shri Yogi Aditya Nath",
    status:"notclicked"
    },
    {
      state:"Uttarakhand",
      number:27 ,
    capital:"Dehradun (Winter) Gairsain (Summer)" ,
    governor: "Smt. Baby Rani Maurya",
    cheifMinister:"Shri Trivendra Singh Rawat",
    status:"notclicked"
    },
    {
      state:"West Bengal",
      number:28 ,
    capital:"Kolkata"  ,
    governor:"Shri Jagdeep Dhankhar",
    cheifMinister:"Km. Mamata Banerjee",
    status:"notclicked"
    }
]

var tigerRF=[
  {
      tigerReserve:"Bandipur (1973–74)",
      state:"Karnataka"
  },
  {
    tigerReserve:"Corbett (1973–74)",
    state:"Uttarakhand"
},
{
    tigerReserve:"Kanha (1973–74)",
    state:"Madhya Pradesh"
},
{
    tigerReserve:"Manas (1973–74)",
    state:"Assam"
},
{
    tigerReserve:"Melghat (1973–74)",
    state:"Maharashtra"
},
{
    tigerReserve:"Palamau (1973–74)",
    state:"Jharkhand"
},
{
    tigerReserve:"Ranthambore (1973–74)",
    state:"Rajasthan"
},
{
    tigerReserve:"Similipal (1973–74)",
    state:"Odisha"
},
{
    tigerReserve:"Sunderbans (1973–74)",
    state:"West Bengal"
},
{
    tigerReserve:"Periyar (1978–79)",
    state:"Kerala"
},
{
    tigerReserve:"Sariska (1978–79)",
    state:"Rajasthan"
},
{
    tigerReserve:"Buxa (1982–83)",
    state:"West Bengal"
},
{
    tigerReserve:"Indravati (1982–83)",
    state:"Chhattisgarh"
},
{
    tigerReserve:"Namdapha (1982–83)",
    state:"Arunachal Pradesh"
},
{
    tigerReserve:"Dudhwa (1987–88)",
    state:"Uttar Pradesh"
},
{
    tigerReserve:"Kalakad-Mundanthurai (1988–89)",
    state:"Tamil Nadu"
},
{
    tigerReserve:"Valmiki (1989–90)",
    state:"Bihar"
},
{
    tigerReserve:"Pench (1992–93)",
    state:"Madhya Pradesh"
},
{
    tigerReserve:"Tadoba-Andhari (1993–94)",
    state:"Maharashtra"
},
{
    tigerReserve:"Bandhavgarh (1993–94)",
    state:"Madhya Pradesh"
},
{
    tigerReserve:"Panna (1994–95)",
    state:"Madhya Pradesh"
},
{
    tigerReserve:"Dampa (1994–95)",
    state:"Mizoram"
},
{
    tigerReserve:"Bhadra (1998–99)",
    state:"Karnataka"
},
{
    tigerReserve:"Pench (1998–99)",
    state:"Maharashtra"
},
{
    tigerReserve:"Pakke or Pakhui (1999-2000)",
    state:"Arunachal Pradesh"
},
{
    tigerReserve:"Nameri (1999-2000)",
    state:"Assam"
},
{
    tigerReserve:"Satpura (1999-2000)",
    state:"Madhya Pradesh"
},
{
    tigerReserve:"Anamalai (2008–09)",
    state:"Tamil Nadu"
},
{
    tigerReserve:"Udanti-Sitanadi (2008–09)",
    state:"Chhattisgarh"
},
{
    tigerReserve:"Satkosia (2008–09)",
    state:"Odisha"
},
{
    tigerReserve:"Kaziranga (2008–09)",
    state:"Assam"
},
{
    tigerReserve:"Achanakmar (2008–09)",
    state:"Chhattisgarh"
},
{
    tigerReserve:"Dandeli-Anshi Tiger Reserve(Kali) (2008–09)",
    state:"Karnataka"
},
{
    tigerReserve:"Sanjay-Dubri (2008–09)",
    state:"Madhya Pradesh"
},
{
    tigerReserve:"Mudumalai (2008–09)",
    state:"Tamil Nadu"
},
{
    tigerReserve:"Nagarahole (2008–09)",
    state:"Karnataka"
},
{
    tigerReserve:"Parambikulam (2008–09)",
    state:"Kerala"
},
{
    tigerReserve:"Sahyadri (2009–10)",
    state:"Maharashtra"
},
{
    tigerReserve:"Biligiri Ranganatha Temple (2010–11)",
    state:"Karnataka"
},
{
    tigerReserve:"Kawal (2012–13)",
    state:"Telangana"
},
{
    tigerReserve:"Sathyamangalam (2013–14)",
    state:"Tamil Nadu"
},
{
    tigerReserve:"Mukandra Hills (2013–14)",
    state:"Rajasthan"
},
{
    tigerReserve:"Nawegaon-Nagzira (2013–14)",
    state:"Maharashtra"
},
{
    tigerReserve:"Nagarjunsagar Srisailam (1982–83)",
    state:"Andhra Pradesh"
},
{
    tigerReserve:"Amrabad (2014)",
    state:"Telangana"
},
{
    tigerReserve:"Pilibhit (2020)",
    state:"Uttar Pradesh"
},
{
    tigerReserve:"Bor (2014)",
    state:"Maharashtra"
},
{
    tigerReserve:"Rajaji (2015)",
    state:"Uttarakhand"
},
{
    tigerReserve:"Orang (2016)",
    state:"Assam"
},
{
    tigerReserve:"Kamlang (2016)",
    state:"Arunachal Pradesh"
},

]

var i=0;
function randomise(){
  console.log(i);
    var j = Math.round(Math.random() * 27);
    var k = Math.round(Math.random() * 27);
    var l = Math.round(Math.random() * 27);
    
    if(i==j||i==k ||i==l || j==k || j==l || k==l || j==0 || k==0 ||l==0){
      answer.innerHTML="";
      randomise();
  }else{
    console.log(staticGK[i].state);
      tiger.innerHTML=tigerRF[i].tigerReserve; 
      option1.innerHTML=tigerRF[i].state;
      option2.innerHTML=staticGK[j].state;
      option3.innerHTML=staticGK[k].state;
      option4.innerHTML=staticGK[l].state;
      var m = Math.round(Math.random() * 100);
option1.style.order=m;
answer.innerHTML="";
if(tigerRF[i].state===staticGK[j].state||tigerRF[i].state===staticGK[k].state|| tigerRF[i].state===staticGK[l].state){
    randomise();
}
  }
}
  option1.onclick=()=>{
    score++;
    if(i==49){
      answer.style.display="block";
      answer.innerHTML="You have mastered all the Tiger reserve forest and its location, Awesome 🤩"
    }else{
      i++;
      randomise();
      resetTime(timerId)
    }
}

option2.onclick=()=>{
  answer.innerHTML="Sorry 😅 the answer is" +" "+ tigerRF[i].state;
  button.style.display="block";
  
}

option3.onclick=()=>{
  answer.innerHTML="Sorry 😅 the answer is" +" "+ tigerRF[i].state;
  button.style.display="block";
  
}

option4.onclick=()=>{
  answer.innerHTML="Sorry 😅 the answer is" +" " + tigerRF[i].state;
  button.style.display="block";
  
}

button.onclick=()=>{
  location.href = "gameover.html?score=" + score;
}
randomise();
var time = 20;
var timerId;

function startTimer() {
    time = 20;
    timer.innerHTML = time;
    timerId = setInterval(() => {
        time--;
        if (time == 0) location.href = "./gameover.html?score=" + score;
        timer.innerHTML = time;
    }, 1000);
}

function resetTime(intervalId) {
    clearInterval(intervalId);
    startTimer();
}

startTimer();