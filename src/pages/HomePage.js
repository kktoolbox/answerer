import React, { useState, useEffect } from "react";
import { db } from "../App";
import Button from "../components/common/Button";
import Title from "../components/common/Title";

const HomePage = ({ onPageChange, onRoomChange }) => {
  const [roomName, setRoomName] = useState("");
  const [roomData, setRoomData] = useState("");

  // const openChatRoom = () => {
  //   //指定firebase的primary key
  //   db.collection("rooms")
  //     .doc(`${roomName}`)
  //     .set({
  //       name: `${roomName}`
  //     })
  //     .then(() => console.log("送出成功！"))
  //     .catch(error => {
  //       console.log("error");
  //     });

  //   //firbase將自動給primary key
  //   /*     db.collection("rooms").add({
  //     name: "xxx"
  //   }); */
  // };

  // useEffect(() => {
  //   openChatRoom();
  // }, []);

  return (
    <div>
      <Title>問答首頁</Title>
      <input
        name="name"
        value={roomName}
        type="text"
        onChange={e => {
          setRoomName(e.currentTarget.value);
          onRoomChange(e.currentTarget.value);
        }}
      />
      {/* <Button onClick={() => handleRoomID(roomName)}>創建聊天室ID</Button> */}
      <Button
        onClick={() => {
          onPageChange("lecturer");
        }}
      >
        看結果頁面
      </Button>
      <Button
        onClick={() => {
          onPageChange("attendee");
        }}
      >
        答答題頁面
      </Button>
    </div>
  );
};

export default HomePage;
