// Component that places cacti where the ground is clicked

export const tapPlaceComponent = {
    schema: {
      min: {default: 6},
      max: {default: 10},
    },
    init() {
      const ground = document.getElementById('ground')
      ground.addEventListener('click', (event) => {
        // Create new entity for the new object
        const newElement = document.createElement('a-entity')
  
        // The raycaster gives a location of the touch in the scene
        const touchPoint = event.detail.intersection.point
        newElement.setAttribute('position', touchPoint)
  
        // randomize rotation of new object
        const randomYRotation = Math.random() * 360
        newElement.setAttribute('rotation', `0 ${randomYRotation} 0`)
  
        // assign entity the rose id
        const roseId = "newRose"
        newElement.setAttribute('id', roseId)
        
        // create / populate a custom data object with the above specs ^^
  
        newElement.setAttribute('visible', 'false')
        newElement.setAttribute('scale', '0.0001 0.0001 0.0001')
  
        newElement.setAttribute('shadow', {
          receive: false,
        })
  
        newElement.setAttribute('gltf-model', '#cactusModel')
        this.el.sceneEl.appendChild(newElement)
  
        newElement.addEventListener('model-loaded', () => {
          // Once the model is loaded, we are ready to show it popping in using an animation
          newElement.setAttribute('visible', 'true')
          newElement.setAttribute('animation', {
            property: 'scale',
            to: `7 7 7`,
            easing: 'easeOutElastic',
            dur: 800,
          })
        })
      }, {once: true})
    },
  }