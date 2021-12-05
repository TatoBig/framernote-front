// import { initializeApp } from 'firebase/app'

// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
//   measurementId: 'G-24MSMZQBXM'
// }

// const app = initializeApp(firebaseConfig)

// export default app

import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyC3SpMpZDAE4qcYH5fQBPHOWnKEO4EAojk',
  authDomain: 'framernote.firebaseapp.com',
  projectId: 'framernote',
  storageBucket: 'framernote.appspot.com',
  messagingSenderId: '335228103482',
  appId: '1:335228103482:web:69f44d1ca419112a08fe03',
  measurementId: 'G-24MSMZQBXM'
}

const app = initializeApp(firebaseConfig)

export default app
