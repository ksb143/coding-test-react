import React from "react";
import styles from "./UserProfile.module.css";

// --- 데이터 타입 정의 ---
interface UserStats {
  posts: number;
  followers: number;
  following: number;
}

const UserProfileStates: React.FC<UserStats> = ({
  posts,
  followers,
  following,
}) => {
  return (
    <div className={styles.profileContainer}>
      {/* 3. 사용자 통계 */}
      <section className={styles.statsSection}>
        <div className={styles.statItem}>
          <span className={styles.statValue}>{posts}</span>
          <span className={styles.statLabel}>게시물</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statValue}>{followers}</span>
          <span className={styles.statLabel}>팔로워</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statValue}>{following}</span>
          <span className={styles.statLabel}>팔로잉</span>
        </div>
      </section>
    </div>
  );
};

export default UserProfileStates;
