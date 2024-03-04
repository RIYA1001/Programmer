// Import the required Firebase functions
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, GoogleAuthProvider, useDeviceLanguage, signOut as signOutAuth, signInWithPopup } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

import { useState, useEffect } from 'react';
import Button from './Button';
import Chat from './Chat';

// Initialize Firebase with your configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwlVxcoIJLuAX0VHAXMLJ4GHTUYUja4fY",
  authDomain: "programmer-1218b.firebaseapp.com",
  projectId: "programmer-1218b",
  storageBucket: "programmer-1218b.appspot.com",
  messagingSenderId: "1006788566648",
  appId: "1:1006788566648:web:464a6d2df17971e5cf978d"
};

const firebaseApp = initializeApp(firebaseConfig);

// Get the authentication and Firestore instances
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

function Login() {
  const [user, setUser] = useState(() => auth.currentUser);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }

      if (initializing) {
        setInitializing(false);
      }
    });

    return unsubscribe;
  }, [initializing]);

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    useDeviceLanguage(auth);

    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error(error);
    }
  };

  const signOut = async () => {
    try {
      await signOutAuth(auth);
    } catch (error) {
      console.log(error.message);
    }
  };

  if (initializing) return "Loading...";

  return (
    <div className="m-40">
      {user ? (
        <>
          <Button onClick={signOut}>Sign out</Button>
          <Chat user={user} db={db} />
        </>
      ) : (
        <Button onClick={signInWithGoogle}>Sign in with Google</Button>
      )}
    </div>
  );
}

export default Login;
