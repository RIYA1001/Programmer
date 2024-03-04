import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  collection,
  addDoc,
  query,
  orderBy,
  limit,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import Message from "./Message";

const Chat = ({ user = null, db = null }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const { uid, displayName, photoURL } = user;
  const auth = getAuth();

  useEffect(() => {
    if (db) {
      const q = query(
        collection(db, "messages"),
        orderBy("createdAt"),
        limit(100)
      );
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setMessages(data);
      });
      return unsubscribe;
    }
  }, [db]);

  const handleOnChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (db) {
      try {
        await addDoc(collection(db, "messages"), {
          text: newMessage,
          createdAt: serverTimestamp(),
          uid,
          displayName,
          photoURL,
        });
        setNewMessage("");
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    }
  };

  return (
    <div className="mx-auto p-2">
      <ul>
        {messages.map((message) => (
          <li key={message.id}>
            <Message {...message} />
          </li>
        ))}
      </ul>
      <form className="m-4 p-2 grid grid-cols-4" onSubmit={handleOnSubmit}>
        <input
          className="md:col-span-3 col-span-2 text-sm bg-gray-300 font-bold py-2 px-4 rounded-3xl my-4"
          type="text"
          value={newMessage}
          onChange={handleOnChange}
          placeholder="Message..."
        />
        <button
          className="bg-green-500 md:col-span-1 col-span-2 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-3xl my-4 mx-4"
          type="submit"
          disabled={!newMessage}
        >
          Send
        </button>
      </form>
    </div>
  );
};

Chat.propTypes = {
  user: PropTypes.object,
  db: PropTypes.object,
};

export default Chat;
