import React from "react";
import "./MentionsLegales.css";
import ReturnHome from "../components/ReturnHome";

const LegalNotices = () => {
    return (
        <div className="mentions-wrapper">
            <div className="mentions-container">
                <ReturnHome />
                <h1 className="mentions-title">Legal Notices</h1>

                <section className="mentions-section">
                    <h2 className="mentions-heading">1. Website Publisher</h2>
                    <p className="mentions-text">
                        The website <a href="https://techniplans.net" className="mentions-link">https://techniplans.net</a> is published by the subsidiary 
                        <strong> TECHNIPLANS</strong>, operated under the entity <strong>MAISONS PYRÉNÉES</strong>, a company governed by Andorran law.
                    </p>
                    <ul className="mentions-list">
                        <li><strong>Corporate name:</strong> MAISONS PYRÉNÉES – TECHNIPLANS Subsidiary</li>
                        <li><strong>SIREN Number:</strong> 877 741 991 00013</li>
                        <li><strong>Address:</strong> 2 Av. des Guinguettes, 09100 Les Pujols, France</li>
                        <li><strong>Parent company address:</strong> APPARTEMENT Prat de Casa Bloc B, Apt 1-2, AD300 La Cortinada, Andorra</li>
                        <li><strong>Phone:</strong> 06 86 76 86 30</li>
                        <li><strong>Email:</strong> <a href="mailto:oceane.techniplans@hotmail.com" className="mentions-link">oceane.techniplans@hotmail.com</a></li>
                        <li><strong>Publication Director:</strong> Frédéric Lagrange</li>
                        <li><strong>Editorial Manager:</strong> Océane Lagrange</li>
                    </ul>
                </section>

                <section className="mentions-section">
                    <h2 className="mentions-heading">2. Hosting</h2>
                    <ul className="mentions-list">
                        <li><strong>Hosting provider:</strong> Vercel Inc.</li>
                        <li><strong>Address:</strong> 440 N Barranca Ave #4133, Covina, CA 91723, USA</li>
                        <li><strong>Website:</strong> <a href="https://vercel.com" className="mentions-link">https://vercel.com</a></li>
                    </ul>
                </section>

                <section className="mentions-section">
                    <h2 className="mentions-heading">3. Intellectual Property</h2>
                    <p className="mentions-text">
                        All content on this website (texts, images, graphics, videos, 3D plans, etc.) is the exclusive property of TECHNIPLANS and MAISONS PYRÉNÉES unless otherwise stated.
                    </p>
                    <p className="mentions-text">
                        Any reproduction, representation, modification, or distribution without express authorization is prohibited and constitutes an infringement punishable under <strong>Article L.335-2 of the French Intellectual Property Code</strong>.
                    </p>
                </section>

                <section className="mentions-section">
                    <h2 className="mentions-heading">4. Personal Data & Cookies</h2>
                    <p className="mentions-text">
                        The website may collect personal data through contact forms or analytics tools.
                    </p>
                    <h3 className="mentions-subheading">Collected Data</h3>
                    <ul className="mentions-list">
                        <li>Name, surname, email, phone number (via the contact form).</li>
                        <li>IP address and browsing data (via analytics cookies).</li>
                    </ul>
                    <h3 className="mentions-subheading">Purpose of Data Processing</h3>
                    <p className="mentions-text">
                        The collected data is used for managing contact requests, improving user experience, and measuring audience reach through Google Analytics.
                    </p>
                    <h3 className="mentions-subheading">User Rights</h3>
                    <p className="mentions-text">
                        In accordance with the <strong>General Data Protection Regulation (GDPR)</strong>, you have the right to access, rectify, and delete your personal data. 
                        You can exercise these rights by sending an email to <a href="mailto:oceane.techniplans@hotmail.com" className="mentions-link">oceane.techniplans@hotmail.com</a>.
                    </p>
                </section>

                <section className="mentions-section">
                    <h2 className="mentions-heading">5. Liability</h2>
                    <p className="mentions-text">
                        The website <a href="https://techniplans.net" className="mentions-link">https://techniplans.net</a> strives to provide up-to-date information, 
                        but cannot guarantee the absence of errors. The publisher disclaims any liability for the use of the site's information.
                    </p>
                </section>

                <section className="mentions-section">
                    <h2 className="mentions-heading">6. Applicable Law & Jurisdiction</h2>
                    <p className="mentions-text">
                        These legal notices are governed by <strong>French law</strong>. Any disputes will be brought before the Commercial Court of Foix (09), France.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default LegalNotices;
