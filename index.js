import Handsfree from './node_modules/handsfree/src/handsfree.js'
const handsfree = new Handsfree({
  assetsPath: './assets',
  face: true
})

handsfree.start()