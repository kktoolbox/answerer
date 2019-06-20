import React, { useState, useCallback } from "react";
import Button from "../components/common/Button";
import Title from "../components/common/Title";
import { db } from "../App";

const UsernameInput = ({ value, onChange }) => {
  return (
    <input
      name="username"
      placeholder="請輸入姓名"
      value={value}
      onChange={onChange}
    />
  );
};

const AnswerInput = ({ value, onChange }) => {
  return (
    <input
      name="answer"
      placeholder="請輸入答案"
      value={value}
      onChange={onChange}
    />
  );
};

const AttendeePage = ({ onPageChange, roomID }) => {
  const [usernameValue, setUsernameValue] = useState("");
  const [answerValue, setAnswerValue] = useState("");

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      alert("username: " + usernameValue + " / answer: " + answerValue);
      db.collection("rooms")
        .doc(roomID)
        .collection("answers")
        .add({
          username: usernameValue,
          answer: answerValue
        })
        .then(() => alert("送出答案成功"))
        .catch(error => {
          alert("送出失敗");
        });
    },
    [usernameValue, answerValue]
  );

  return (
    <>
      <Title>回答問題 - {roomID}</Title>
      <form onSubmit={handleSubmit}>
        <UsernameInput
          value={usernameValue}
          onChange={e => setUsernameValue(e.currentTarget.value)}
        />
        <AnswerInput
          value={answerValue}
          onChange={e => setAnswerValue(e.currentTarget.value)}
        />
        <input type="submit" value="送出" />
      </form>
      <Button
        onClick={() => {
          onPageChange("home");
        }}
      >
        回首頁
      </Button>
    </>
  );
};

export default AttendeePage;
