import React from "react";
import styles from "../css/SideBar.module.css";

export default function Sidebar({ rooms, selectRoom }) {
  return (
    <div className={styles.sidebar}>
      <h2>Chat Rooms:</h2>
      <ul>
        {rooms.map((room) => (
          <li
            key={room._id}
            className={room.isPublic ? styles.publicRoom : styles.privateRoom}
          >
            <span onClick={() => selectRoom(room._id)}>
              {room.name} {room.isPublic ? "(Public)" : "(Private)"}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}