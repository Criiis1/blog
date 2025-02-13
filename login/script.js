// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCPBg7niHCnHij3Nkfhxq2b6JeL3lQywrg",
    authDomain: "blog-829a8.firebaseapp.com",
    projectId: "blog-829a8",
    storageBucket: "blog-829a8.firebasestorage.app",
    messagingSenderId: "152262917883",
    appId: "1:152262917883:web:f740b1fd6847b34b823a5e"
  };// Initialize Firebase
    firebase.initializeApp(firebaseConfig);// Initialize Firebase Authentication
    const auth = firebase.auth();// HTML Elements
    const loginButton = document.getElementById('login');
    const logoutButton = document.getElementById('logout');
    const userDetails = document.getElementById('user-details');
    const userName = document.getElementById('user-name');
    const userPic = document.getElementById('user-pic');// Login Event
    loginButton.addEventListener('click', () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
    .then(result => {
    const user = result.user;
    displayUser(user);
    })
    .catch(error => {
    console.error("Error during sign in: ", error);
    });
    });// Logout Event
    logoutButton.addEventListener('click', () => {
    auth.signOut()
    .then(() => {
    hideUser();
    })
    .catch(error => {
    console.error("Error during sign out: ", error);
    });
    });// Display User Info
    const displayUser = (user) => {
    userName.textContent = `Hola, ${user.displayName}`;
    userPic.src = user.photoURL;
    userDetails.style.display = '';
    loginButton.style.display = 'none';
    logoutButton.style.display = '';
    };// Hide User Info
    const hideUser = () => {
    userDetails.style.display = 'none';
    loginButton.style.display = '';
    logoutButton.style.display = 'none';
    };// Firebase Auth State Change Listener
    auth.onAuthStateChanged(user => {
    if (user) {
    displayUser(user);
    } else {
    hideUser();
    }
    });
    
