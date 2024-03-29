# Zcademy - ToDo Application

## Project Setup

1. Install Firebase  
   `npm install -g firebase-tools`
2. Login to your firebase account  
   `firebase login`

3. Create a file called **`.credentials.js`** with the following content:

```javascript
export const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: "",
};
```

Note: Navigate to [Firebase Console](https://console.firebase.google.com/) > Project > Project Settings and retrieve the `firebaseConfig`

4. Run `npm start` in the console.

## Project Deployment

```
npm run build
firebase deploy
```
