// Queue Array

let queue = [];



// Token Counter

let tokenCounter = 1;



// Doctor Statistics

const doctorStats = {



  "Dr. Arun": {

    total: 0,

    waiting: 0

  },



  "Dr. Meera": {

    total: 0,

    waiting: 0

  },



  "Dr. Rahul": {

    total: 0,

    waiting: 0

  },



  "Dr. Neha": {

    total: 0,

    waiting: 0

  }



};



// Register Patient

function registerPatient(){



  const name =

    document.getElementById("patientName").value.trim();



  const age =

    document.getElementById("patientAge").value.trim();



  const doctor =

    document.getElementById("doctorSelect").value;



  const healthProblem =

    document.getElementById("healthProblem").value.trim();



  // Validation

  if(

    name === "" ||

    age === "" ||

    doctor === "" ||

    healthProblem === ""

  ){



    alert("Please fill all fields");



    return;

  }



  // Generate Token

  const token = "T" + tokenCounter;



  tokenCounter++;



  // Create Patient Object

  const patient = {



    token: token,



    name: name,



    age: age,



    doctor: doctor,



    healthProblem: healthProblem



  };



  // Add To Queue

  queue.push(patient);



  // Update Doctor Stats

  doctorStats[doctor].total += 1;



  doctorStats[doctor].waiting += 1;



  // Show Token

  document.getElementById("tokenBox").style.display =

    "block";



  document.getElementById("tokenNumber").innerText =

    token;



  // Clear Inputs

  document.getElementById("patientName").value = "";



  document.getElementById("patientAge").value = "";



  document.getElementById("doctorSelect").value = "";



  document.getElementById("healthProblem").value = "";



  // Refresh UI

  updateQueue();



}



// Update Queue

function updateQueue(){



  const queueList =

    document.getElementById("queueList");



  const emptyText =

    document.getElementById("emptyText");



  // Clear Queue List

  queueList.innerHTML = "";



  // Show Empty Text

  if(queue.length === 0){



    emptyText.style.display = "block";



  }

  else{



    emptyText.style.display = "none";



  }



  // Display Queue

  queue.forEach((patient, index) => {



    const li = document.createElement("li");



    li.innerHTML = `



      <div class="patient-details">



        <strong>${patient.token}</strong><br>



        ${patient.name} (${patient.age})<br>



        ${patient.doctor}<br>



        <b>Problem:</b> ${patient.healthProblem}



      </div>



      <div class="badge">



        Position ${index + 1}



      </div>



    `;



    queueList.appendChild(li);



  });



  // Update Stats Properly

  document.getElementById("arunTotal").innerText =

    doctorStats["Dr. Arun"].total;



  document.getElementById("arunWaiting").innerText =

    doctorStats["Dr. Arun"].waiting;



  document.getElementById("meeraTotal").innerText =

    doctorStats["Dr. Meera"].total;



  document.getElementById("meeraWaiting").innerText =

    doctorStats["Dr. Meera"].waiting;



  document.getElementById("rahulTotal").innerText =

    doctorStats["Dr. Rahul"].total;



  document.getElementById("rahulWaiting").innerText =

    doctorStats["Dr. Rahul"].waiting;



  document.getElementById("nehaTotal").innerText =

    doctorStats["Dr. Neha"].total;



  document.getElementById("nehaWaiting").innerText =

    doctorStats["Dr. Neha"].waiting;



}



// Call Next Patient

function callNextPatient(){



  // Empty Queue Check

  if(queue.length === 0){



    alert("No patients in queue");



    return;

  }



  // Remove First Patient

  const currentPatient = queue.shift();



  // Reduce Waiting Count

  doctorStats[currentPatient.doctor].waiting -= 1;



  // Show Current Serving

  document.getElementById("currentServing").innerText =



    currentPatient.token +



    " - " +



    currentPatient.name +



    " (" +



    currentPatient.doctor +



    ")";
