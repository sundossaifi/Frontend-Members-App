import React from "react";
import styles from '../styles/SearchBar.module.css'

export default function SearchBar({ placeholder }) {
    return (
        <div className={styles.searchContainer}>
            <i className={`fa fa-search ${styles.searchIcon}`}></i>
            <input
                type="text"
                placeholder={placeholder}
                className={styles.searchInput}
            />
        </div>
    );
}