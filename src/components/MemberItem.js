import React from "react";
import styles from '../styles/MemberItem.module.css'; 

export default function MemberItem({ member }) {
    return (
        <div className={styles.memberItem}>
            <div className={styles.memberName}>
                <i className="fa-solid fa-user"></i>
                <span>{member}</span>
            </div>
            <input type="checkbox" />
        </div>
    );
}
