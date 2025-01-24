import React, { useState, useEffect, useRef } from "react";
import styles from "../css/ChatRoom.module.css";

export default function ChatRoom({
  className,
  roomId,
  roomName,
  messages,
  onSendMessage,
}) {
  const [newMessage, setNewMessage] = useState("");
  const messageEndRef = useRef(null);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (newMessage.trim() === "") return;

    const message = {
      content: newMessage,
      timestamp: new Date().toISOString(),
      sender: "Demo user 1 ", // Replace with the actual user data if available
    };

    onSendMessage(roomId, message);
    setNewMessage("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div className={className}>
      <div className={styles.messageContainer}>
        <h1 className={styles.welcomeMessage}>
          You are now connected to {roomName}
        </h1>
        {messages.map((msg, index) => (
          <div key={index} className={styles.messages}>
            <div className={styles.msgAll}>
              <div className={styles.msgInfo}>
                <strong className={styles.name}>{msg.sender}</strong>
                <span className={styles.timestamp}>
                  {new Date(msg.timestamp).toLocaleTimeString()}
                </span>
              </div>
              <span className={styles.msgSpan}>{msg.content}</span>
            </div>
          </div>
        ))}
        <div ref={messageEndRef} />
      </div>
      <input
        className={styles.messageField}
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type a message..."
      />
    </div>
  );
}