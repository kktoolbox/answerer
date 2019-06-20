import React, { useState } from "react";
import HomePage from "./pages/HomePage";
import LecturerPage from "./pages/LecturerPage";
import AttendeePage from "./pages/AttendeePage";
import { firestore, initializeApp } from "firebase";

const App = () => {
  const [page, setPage] = useState("home");
  const [roomID, setRoomID] = useState("");

  switch (page) {
    case "home":
      return (
        <HomePage
          onPageChange={pageName => setPage(pageName)}
          onRoomChange={setRoomID}
        />
      );
    case "lecturer":
      return (
        <LecturerPage
          onPageChange={pageName => setPage(pageName)}
          roomID={roomID}
        />
      );
    case "attendee":
      return (
        <AttendeePage
          onPageChange={pageName => setPage(pageName)}
          roomID={roomID}
        />
      );
    default:
      return <div>Page not found.</div>;
  }
};

const firebaseConfig = {
  apiKey: "AIzaSyC49qa8y8IxT9p02JAFuUfXk9tD_r5EgGw",
  authDomain: "just-answer-now-c0de3.firebaseapp.com",
  databaseURL: "https://just-answer-now-c0de3.firebaseio.com",
  projectId: "just-answer-now-c0de3",
  storageBucket: "just-answer-now-c0de3.appspot.com",
  messagingSenderId: "501114093767",
  appId: "1:501114093767:web:4042bc8f10fe7682"
};

initializeApp(firebaseConfig);
export const db = firestore();

export default App;
