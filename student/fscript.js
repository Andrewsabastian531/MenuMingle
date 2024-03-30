const firebaseConfig = {
    apiKey: "AIzaSyBKqIB2VivfVtUV0hqR7Z2i32HwPoB05Bw",
    authDomain: "studentlogin-c9301.firebaseapp.com",
    databaseURL: "https://studentlogin-c9301-default-rtdb.firebaseio.com",
    projectId: "studentlogin-c9301",
    storageBucket: "studentlogin-c9301.appspot.com",
    messagingSenderId: "556481464520",
    appId: "1:556481464520:web:db628c12affbf1af407dfd"
  };

//   initialize firebase
  firebase.initializeApp(firebaseConfig);

//   reference your database
var studentLoginDB = firebase.database().ref('studentLogin')

document.getElementById('studentLogin').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();

    var name = getElementVal('name');
    var email = getElementVal('email');
    var rollNumber = getElementVal('rollno');
    var hostelId = getElementVal('hostelid');
    var password = getElementVal('password');

    saveMessages(name, email, rollNumber, hostelId, password);
}

const saveMessages = (name, email, rollNumber, hostelId, password) => {
    var newStudentLogin = studentLoginDB.push();

    newStudentLogin.set({
        name: name,
        email: email,
        rollNumber: rollno,
        hostelId: hostelid,
        password: password,
    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
}