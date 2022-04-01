// Component that places cacti where the ground is clicked

// Register custom A-Frame components
AFRAME.registerComponent('tap-place', tapPlaceComponent = {
  schema: {
    min: { default: 6 },
    max: { default: 10 },
  },
  init() {
    const ground = document.getElementById('ground')
    ground.addEventListener('click', (event) => {

      const collection = db.collection('roses')

      // Create new entity for the new object
      const newElement = document.createElement('a-entity')

      // The raycaster gives a location of the touch in the scene
      const touchPoint = event.detail.intersection.point
      newElement.setAttribute('position', touchPoint)
      console.log(touchPoint)

      // randomize rotation of new object
      const randomYRotation = Math.random() * 360
      newElement.setAttribute('rotation', `0 ${randomYRotation} 0`)

      // assign entity the rose id
      const roseId = "newRose"
      newElement.setAttribute('id', roseId)

      newElement.setAttribute('visible', 'true')
      newElement.setAttribute('scale', '3 3 3')

      newElement.setAttribute('shadow', {
        receive: false,
      })

/*       var modelOptions = [
        "#cactusModel"
      ]

      const randomModel = modelOptions[Math.floor(Math.random()*modelOptions.length)];
      console.log(randomModel) */
      newElement.setAttribute('gltf-model', `#cactusModel`)
      this.el.sceneEl.appendChild(newElement)

      const newData = {
        model: "./rose",
        texture: "./texture",
        vectorPos: [touchPoint.x, touchPoint.y, touchPoint.z]
      }
      collection.add(newData).then(function (docRef) {
        // You can use the docRef.id now
        // console.log('Document ID ', docRef.id)
        collection.doc(docRef.id).get().then(function (doc) {
          let data = doc.data()
/*           console.log(data.model)
          console.log(data.texture)
          console.log(data.vectorPos) */
        })
      })

      const randomScale = Math.floor(Math.random() * (Math.floor(this.data.max) - Math.ceil(this.data.min)) + Math.ceil(this.data.min))

/*       newElement.addEventListener('model-loaded', () => {
        // Once the model is loaded, we are ready to show it popping in using an animation
        console.log("Model loaded")
        newElement.setAttribute('visible', 'true')
        newElement.setAttribute('animation', {
          property: 'scale',
          to: `${randomScale}`,
          easing: 'easeOutElastic',
          dur: 800,
        })
      }) */
    }, {once: true})
  },
})