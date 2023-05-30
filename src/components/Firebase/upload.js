import MOCK_DATA from './MOCK_DATA.json' assert { type: 'json' }
import { collection, addDoc } from 'firebase/firestore'
import { db } from './Config.js'

MOCK_DATA.forEach((el) => delete el.id)

const productosRef = collection(db, 'items')

MOCK_DATA.forEach((el) => {
    addDoc(productosRef, el)
})