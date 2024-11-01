import React from "react";
import MembersList from "./MembersList";
import styles from '../styles/AddMembers.module.css';

export default function AddMembers() {
    const membersList = [
        "Carolien Bloeme",
        "Sun Jun",
        "Song Bao",
        "Olivia Arribas",
        "Bonginkosi Mdlalana",
        "Arina Belomestnykh",
        "Jacqueline Likoki"
    ];

    return (
        <div className={styles.addMembersContainer}>
            <p>Add members to Front-end development team</p>
            <MembersList membersList={membersList} />
            <div className={styles.buttons}>
                <button className={styles.cancelButton}>Cancel</button>
                <button className={styles.saveButton}>Save</button>
            </div>
        </div>
    );
}