import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"

const Navbar = () => {
    return (
        <nav style={styles.navbar}>
            <h1 style={styles.logo}>Online Library</h1>
            <ul style={styles.navLinks}>
                <li><Link to="/" style={styles.link}>Home</Link></li>
                <li><Link to="/browse" style={styles.link}>Browse Books</Link></li>
                <li><Link to="/add" style={styles.link}>Add Book</Link></li>
            </ul>
        </nav>
    );
};

const styles = {
    navbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#2C3E50',
        padding: '10px 20px',
        color: '#ECF0F1',
    },
    logo: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
    },
    navLinks: {
        listStyle: 'none',
        display: 'flex',
        gap: '20px',
    },
    link: {
        color: '#ECF0F1',
        textDecoration: 'none',
        fontSize: '1.1rem',
    }
};

export default Navbar;
