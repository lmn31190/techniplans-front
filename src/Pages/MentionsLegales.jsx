import React from "react";
import "./MentionsLegales.css";
import ReturnHome from "../components/ReturnHome";

const MentionsLegales = () => {
    return (
        <div className="mentions-wrapper">
            <div className="mentions-container">
                <ReturnHome />
                <h1 className="mentions-title">Mentions Légales</h1>

                <section className="mentions-section">
                    <h2 className="mentions-heading">1. Édition du site</h2>
                    <p className="mentions-text">
                        Le site <a href="https://techniplans.net" className="mentions-link">https://techniplans.net</a> est édité par la
                        succursale <strong>TECHNIPLANS</strong>, exploitée sous l'entité{" "}
                        <strong>MAISONS PYRÉNÉES</strong>, société de droit andorran.
                    </p>
                    <ul className="mentions-list">
                        <li><strong>Dénomination sociale :</strong> MAISONS PYRÉNÉES – Succursale TECHNIPLANS</li>
                        <li><strong>Numéro SIREN :</strong> 877 741 991 00013</li>
                        <li><strong>Adresse :</strong> 2 Av. des Guinguettes, 09100 Les Pujols, France</li>
                        <li><strong>Adresse société mère :</strong> APPARTEMENT Prat de Casa Bloc B, Apt 1-2, AD300 La Cortinada, Andorre</li>
                        <li><strong>Téléphone :</strong> 06 86 76 86 30</li>
                        <li><strong>Email :</strong> <a href="mailto:oceane.techniplans@hotmail.com" className="mentions-link">oceane.techniplans@hotmail.com</a></li>
                        <li><strong>Directeur de la publication :</strong> Frédéric Lagrange</li>
                        <li><strong>Responsable de la rédaction :</strong> Océane Lagrange</li>
                    </ul>
                </section>

                <section className="mentions-section">
                    <h2 className="mentions-heading">2. Hébergement</h2>
                    <ul className="mentions-list">
                        <li><strong>Nom de l’hébergeur :</strong> Vercel Inc.</li>
                        <li><strong>Adresse :</strong> 440 N Barranca Ave #4133, Covina, CA 91723, USA</li>
                        <li><strong>Site web :</strong> <a href="https://vercel.com" className="mentions-link">https://vercel.com</a></li>
                    </ul>
                </section>

                <section className="mentions-section">
                    <h2 className="mentions-heading">3. Propriété intellectuelle</h2>
                    <p className="mentions-text">
                        Tous les contenus du site (textes, images, graphismes, vidéos, plans 3D, etc.) sont la propriété exclusive de TECHNIPLANS et MAISONS PYRÉNÉES, sauf mention contraire.
                    </p>
                    <p className="mentions-text">
                        Toute reproduction, représentation, modification ou diffusion, sans autorisation expresse, est interdite et constitue une contrefaçon sanctionnée par l’article <strong>L.335-2 du Code de la propriété intellectuelle</strong>.
                    </p>
                </section>

                <section className="mentions-section">
                    <h2 className="mentions-heading">4. Données personnelles et cookies</h2>
                    <p className="mentions-text">
                        Le site peut collecter des données personnelles via des formulaires de contact ou des outils analytiques.
                    </p>
                    <h3 className="mentions-subheading">Données collectées</h3>
                    <ul className="mentions-list">
                        <li>Nom, prénom, e-mail, téléphone (via le formulaire de contact).</li>
                        <li>Adresse IP et données de navigation (via les cookies analytiques).</li>
                    </ul>
                    <h3 className="mentions-subheading">Finalité du traitement</h3>
                    <p className="mentions-text">
                        Ces données sont collectées pour la gestion des demandes de contact, l’amélioration de l’expérience utilisateur et la mesure d’audience via Google Analytics.
                    </p>
                    <h3 className="mentions-subheading">Droits des utilisateurs</h3>
                    <p className="mentions-text">
                        Conformément au <strong>RGPD</strong>, vous disposez d’un droit d’accès, de rectification et de suppression des données vous concernant. Vous pouvez exercer ces droits en envoyant un email à <a href="mailto:oceane.techniplans@hotmail.com" className="mentions-link">oceane.techniplans@hotmail.com</a>.
                    </p>
                </section>

                <section className="mentions-section">
                    <h2 className="mentions-heading">5. Responsabilité</h2>
                    <p className="mentions-text">
                        Le site <a href="https://techniplans.net" className="mentions-link">https://techniplans.net</a> s’efforce de fournir des informations à jour, mais ne peut garantir l’absence d’erreurs. L’éditeur décline toute responsabilité en cas d’utilisation des informations du site.
                    </p>
                </section>

                <section className="mentions-section">
                    <h2 className="mentions-heading">6. Droit applicable et juridiction compétente</h2>
                    <p className="mentions-text">
                        Les présentes mentions légales sont soumises au <strong>droit français</strong>. Tout litige sera porté devant le Tribunal de commerce de Foix (09), France.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default MentionsLegales;
