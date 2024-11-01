import React from "react";
import MemberItem from "./MemberItem";
import SearchBar from "./SearchBar";
import styles from "../styles/MembersList.module.css"
export default function MembersList({ membersList }) {
    if (!membersList) {
        return <div>No members found.</div>;
    }

    return (
        <div className={styles.membersList}>
            <SearchBar placeholder="Find members" />
            <div className={styles.members}>
                {membersList.map((member, index) => (
                    <MemberItem key={index} member={member} />
                ))}
            </div>
        </div>
    );
}