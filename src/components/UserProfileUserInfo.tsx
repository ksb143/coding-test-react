import React from "react";
import styles from "./UserProfile.module.css";

// --- 데이터 타입 정의 ---
interface User {
  id: number;
  name: string;
  username: string;
  bio: string;
  avatarUrl: string;
}

const UserProfileUserInfo: React.FC<User> = ({ name, bio }) => {
  return (
    <div className={styles.profileContainer}>
      {/* 2. 사용자 정보 */}
      <section className={styles.userInfoSection}>
        <h1 className={styles.name}>{name}</h1>
        <p className={styles.bio}>{bio}</p>
      </section>
    </div>
  );
};

export default UserProfileUserInfo;
