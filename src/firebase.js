import { initializeApp } from 'firebase/app';
import { getDatabase, onValue, ref } from 'firebase/database';
import { useEffect, useState } from 'react';

const firebaseConfig = {
    apiKey: "AIzaSyBflD629j7uEXefBerc_95X9e8U8fo_GqQ",
    authDomain: "king-family-1b378.firebaseapp.com",
    databaseURL: "https://king-family-1b378-default-rtdb.firebaseio.com",
    projectId: "king-family-1b378",
    storageBucket: "king-family-1b378.appspot.com",
    messagingSenderId: "88666411910",
    appId: "1:88666411910:web:0edf1e04335df05f23d207",
    measurementId: "G-C3LY3XHZXQ"
};
const firebase = initializeApp(firebaseConfig);
const database = getDatabase(firebase);

ref(database)
ref(database, '/')
ref(database, '/children')

export const useData = (path, transform) => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
  
    useEffect(() => {
      const dbRef = ref(database, path);
      const devMode = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
      if (devMode) { console.log(`loading ${path}`); }
      return onValue(dbRef, (snapshot) => {
        const val = snapshot.val();
        if (devMode) { console.log(val); }
        setData(transform ? transform(val) : val);
        setLoading(false);
        setError(null);
      }, (error) => {
        setData(null);
        setLoading(false);
        setError(error);
      });
    }, [path, transform]);
  
    return [data, loading, error];
  };