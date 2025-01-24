import React, { useState } from "react";
import Sidebar from "../components/SideBar";
import ChatRoom from "../components/ChatRoom";
import styles from "../css/ChatPage.module.css";


const staticRooms = [
  { _id: "1", name: "General", isPublic: true },
  { _id: "2", name: "Sports", isPublic: true },
  { _id: "3", name: "Tech", isPublic: true },
  { _id: "4", name: "Private Room", isPublic: false },
];

export default function ChatPage() {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [messages, setMessages] = useState(
    staticRooms.reduce((acc, room) => ({ ...acc, [room._id]: [] }), {})
  );

  const handleSelectRoom = (roomId) => {
    const room = staticRooms.find((room) => room._id === roomId);
    setSelectedRoom(room);
  };

  const handleSendMessage = (roomId, message) => {
    setMessages((prevMessages) => ({
      ...prevMessages,
      [roomId]: [...prevMessages[roomId], message],
    }));
  };

  return (
    <div className={styles.parent}>
      <Sidebar rooms={staticRooms} selectRoom={handleSelectRoom} />
      {selectedRoom ? (
        <ChatRoom
          className={styles.ChatRoom}
          roomId={selectedRoom._id}
          roomName={selectedRoom.name}
          messages={messages[selectedRoom._id]}
          onSendMessage={handleSendMessage}
        />
      ) : (
        <div className={styles.placeHolder}>
          Select a room to start chatting!
        </div>
      )}
    </div>
  );
}