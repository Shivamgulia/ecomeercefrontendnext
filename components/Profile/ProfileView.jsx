import React, { useState } from "react";
import styles from "@/styles/components/Profile/ProfileView.module.css";
import Modal from "../Modal/Modal";
import UpdateUserForm from "../Forms/UpdateUserForm";

function ProfileView({ user }) {
  const [showModal, setShowModal] = useState(false);

  function editProfile() {
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
  }

  return (
    <div className={styles.profileContainer}>
      <div className={styles.modal}>
        <Modal isOpen={showModal} onClose={closeModal}>
          <UpdateUserForm user={user} />
        </Modal>
      </div>
      <h2 className={styles.profileTitle}>Profile Information</h2>
      <div className={styles.profileInfo}>
        <div className={styles.profileItem}>
          <span className={styles.label}>Name:</span> {user?.name}
        </div>
        <div className={styles.profileItem}>
          <span className={styles.label}>Address:</span> {user?.address}
        </div>
        <div className={styles.profileItem}>
          <span className={styles.label}>Contact:</span> {user?.contact}
        </div>
        <div className={styles.profileItem}>
          <span className={styles.label}>Email:</span> {user?.email}
        </div>
      </div>
      <button onClick={editProfile}>Edit Profile</button>
    </div>
  );
}

export default ProfileView;
