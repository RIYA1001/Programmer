import { useState, useEffect } from 'react';
import Button from './Button';

import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, GoogleAuthProvider, useDeviceLanguage } from 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAwlVxcoIJLuAX0VHAXMLJ4GHTUYUja4fY",
    authDomain: "programmer-1218b.firebaseapp.com",
    projectId: "programmer-1218b",
    storageBucket: "programmer-1218b.appspot.com",
    messagingSenderId: "1006788566648",
    appId: "1:1006788566648:web:464a6d2df17971e5cf978d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function Login() {

    const [user, setUser] = useState(() => auth.currentUser);
    const [initializing, setInitializing] = useState(true);

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, user => {
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

    }, [auth, initializing]);

    const signInWithGoogle = async () => {

        const provider = new GoogleAuthProvider();
        useDeviceLanguage();
        try {
            await auth.signInWithPopup(provider);
        } catch (error) {
            console.error(error);
        }
    };

    const signOut = async () => {

        try {
            await auth.signOut();
        } catch (error) {
            console.log(error.message);
        }

    };

    if (initializing) return "Loading...";

    return (
        <div className='m-20'>

            {user ? (
                <>
                    <button onClick={signOut}>Sign out</button>
                    <p>Welcome to the chat</p>
                </>) : (<button onClick={signInWithGoogle}>Sign in with Google</button>)
            }

        </div>
    );
}

export default Login;
