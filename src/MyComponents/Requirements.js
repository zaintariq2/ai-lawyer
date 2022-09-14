import React from 'react'
import { Link } from 'react-router-dom';

export default function Requirements() {
    return (
        <div>
            <h1>Functional Requirements</h1>
            <ul className='color: indigo'>
                <li><Link to="">Software Legal policy</Link></li>
                <li><Link to="">Software privacy policy</Link></li>
                <li><Link to="">Email Client</Link></li>
                <li><Link to="">Discord username</Link></li>
                <li><Link to="">Account profile name</Link></li>
                <li><Link to="">Account Name</Link></li>
                <li><Link to="">Notifications</Link></li>
                <li><Link to="">Car Repossession Issue</Link></li>
                <li><Link to="">Taxes</Link></li>
                <li><Link to="">Car Registration Renewal</Link></li>
                <li><Link to="">Child Support Payment</Link></li>
                <li><Link to="">Close Bank Accounts</Link></li>
                <li><Link to="">Copyright Protection</Link></li>
                <li><Link to="">File for Bankruptcy</Link></li>
                <li><Link to="">File SEC Complaint</Link></li>
                <li><Link to="">Hotel Complaint and Refund</Link></li>
                <li><Link to="">Inflation Pay Request</Link></li>
                <li><Link to="">Insurance Claims</Link></li>
                <li><Link to="">Input the number of hours</Link></li>
                <li><Link to="">Get the output</Link></li>
                <li><Link to="">View the Functional Requirement</Link></li>
                <li><Link to="">View the Non-Functional Requirements</Link></li>
                <li><Link to="">User can get solution to their legal issue</Link></li>
            </ul>

            <h1>Non-Functional Requirements</h1>
            <ul>
                <li><Link to="">Response Time</Link></li>
                <li><Link to="">Net processing time</Link></li>
                <li><Link to="">Software availability timing</Link></li>
                <li><Link to="">User Experience</Link></li>
                <li><Link to="">Ease of software</Link></li>
                <li><Link to="">Software maintenance time</Link></li>
                <li><Link to="">Number of users software can handle concurrently</Link></li>
                <li><Link to="">Number of users use a specific function concurrently</Link></li>
                <li><Link to="">Data usage</Link></li>
                <li><Link to="">Computation power</Link></li>
            </ul>
        </div>
    )
}
