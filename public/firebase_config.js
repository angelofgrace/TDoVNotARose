// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrvEo-vtYFLtX3RBZ1W45tuyO8ARHQR8s",
  authDomain: "tdov-webvr-2022.firebaseapp.com",
  projectId: "tdov-webvr-2022",
  storageBucket: "tdov-webvr-2022.appspot.com",
  messagingSenderId: "1044578005648",
  appId: "1:1044578005648:web:aff0622f9605a8fa8c5e15",
  measurementId: "G-1XPKHVYP9Z"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()

const roses = db.collection('roses')
roses.where('model', '==', './rose').get().then(function (col) {
  col.docs.forEach(doc => {
    let data = doc.data()
    console.log(data.vectorPos)
    let vPosArray = data.vectorPos

    let newElement = document.createElement('a-entity')
    console.log(newElement)

    // set position from array of three values from db
    newElement.setAttribute('position', {x: vPosArray[0], y: vPosArray[1], z: vPosArray[2]})

    // randomize rotation of new object
    let randomYRotation = Math.random() * 360
    newElement.setAttribute('rotation', `0 ${randomYRotation} 0`)

    // assign entity the rose id
    const roseId = "newRose"
    newElement.setAttribute('id', roseId)

    let randomScale = Math.floor(Math.random() * (12 - 6 + 1) + 6)
    console.log(randomScale)
    newElement.setAttribute('scale', `${randomScale} ${randomScale} ${randomScale}`)

    newElement.setAttribute('visible', 'true')
    newElement.setAttribute('shadow', {
      receive: false,
    })

    var sceneEl = document.querySelector('a-scene')
    newElement.setAttribute('gltf-model', '#cactusModel')
    sceneEl.appendChild(newElement)
  })
})