import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            <footer className="footer">
                {/* <p className="ml-0">Copyright</p> */}
                <p className="mr-5">zaintariq#9731</p> |
                <Link className="ml-5" to="mailto: bsce19023@itu.edu.pk">bsce19023@itu.edu.pk</Link>
                {/* <a href="mailto: bsce19023@itu.edu.pk" className="ml-5">bsce19023@itu.edu.pk</a> */}
            </footer>
        </div>
    )
}

export default Footer