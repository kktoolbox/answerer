import React, { useState, useCallback, useEffect } from "react";
import Button from "../components/common/Button";
import Title from "../components/common/Title";
import { db } from "../App";

const LecturerPage = ({ onPageChange, roomID }) => {
  const [answers, setAnswers] = useState([]);
  console.log(roomID);
  useEffect(() => {
    db.collection("rooms")
      .doc(roomID)
      .collection("answers")
      .onSnapshot(snapshot => setAnswers(snapshot.docs.map(doc => doc.data())));
  }, []);
  console.log(answers);
  const renderData = answers.map(({ username, answer }) => {
    return (
      <div>
        {username}:{answer}
      </div>
    );
  });
  return (
    <div>
      <Title>看答案 - {roomID}</Title>
      {renderData}
      <Button
        onClick={() => {
          onPageChange("home");
        }}
      >
        回首頁
      </Button>
    </div>
  );
};

export default LecturerPage;
