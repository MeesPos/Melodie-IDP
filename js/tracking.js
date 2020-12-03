import Handsfree from 'handsfree'
const handsfree = new Handsfree({
  assetsPath: '/js/tracking.js',
  face: true
})

handsfree.start()