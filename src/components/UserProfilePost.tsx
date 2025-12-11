import React from "react";
import styles from "./UserProfile.module.css";

// --- 데이터 타입 정의 ---
interface PostItem {
  id: number;
  imageUrl: string;
  caption: string;
}

const UserProfilePost: React.FC<PostItem> = ({ id, imageUrl, caption }) => {
  return (
    <div key={id} className={styles.postItem}>
      <img src={imageUrl} alt={caption} className={styles.postImage} />
    </div>
  );
};

export default UserProfilePost;
