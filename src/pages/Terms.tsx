import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

function Terms() {
  return (
    <>
      <header className="app-bar">
        <Link to="/" className="back-button">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          <img src={logo} alt="Askarasu" className="app-bar-logo" />
          Back
        </Link>
      </header>
      <div className="page-container legal-page">
        <h1>Terms of Service</h1>
      <p className="last-updated">Last Updated: January 23, 2025</p>

      <section>
        <h2>1. Acceptance of Terms</h2>
        <p>
          By downloading, installing, or using Askarasu ("the App"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the App.
        </p>
      </section>

      <section>
        <h2>2. Description of Service</h2>
        <p>
          Askarasu is a daily puzzle game where users ask questions to an AI assistant to identify a mystery subject (person, place, thing, etc.). The AI responds with YES, NO, UNKNOWN, or FORBIDDEN. A new puzzle is available each day. Users can earn achievements and maintain streaks by successfully solving puzzles.
        </p>
      </section>

      <section>
        <h2>3. Account Registration</h2>
        <p>
          To use certain features of the App, you must create an account using either Google Sign-In or Apple Sign-In. These are the only authentication methods available. You are responsible for maintaining the confidentiality of your account and for all activities that occur under your account.
        </p>
      </section>

      <section>
        <h2>4. Credits/Coin System</h2>
        <p>The App operates on a credit-based system, called "coins":</p>
        <ul>
          <li><strong>Asking a question:</strong> Costs 1 coin</li>
          <li><strong>Submitting a guess:</strong> Costs 5 coins</li>
        </ul>
        <p>Coins can be obtained through:</p>
        <ul>
          <li><strong>In-App Purchases:</strong> Coins can be purchased through the App using payment processing provided by RevenueCat and the respective app store (Google Play or Apple App Store).</li>
          <li><strong>Watching Advertisements:</strong> Coins can be earned by watching full-screen video advertisements served through Google AdMob.</li>
        </ul>
      </section>

      <section>
        <h2>5. In-App Purchases</h2>
        <p>
          All in-app purchases are processed through RevenueCat and are subject to the terms and conditions of the respective app store (Google Play Store or Apple App Store). All purchases are final and non-refundable, except as required by applicable law or the policies of the respective app store. Coins have no monetary value and cannot be exchanged for cash.
        </p>
      </section>

      <section>
        <h2>6. Advertisements</h2>
        <p>
          The App displays advertisements through Google AdMob. By using the App, you consent to receiving these advertisements. Advertisement availability and credit rewards may vary and are subject to change without notice.
        </p>
      </section>

      <section>
        <h2>7. Account Deletion</h2>
        <p>
          You may delete your account at any time through the Settings menu within the App. Please be aware that:
        </p>
        <ul>
          <li>Upon account deletion, <strong>you will NOT receive a refund</strong> for any coins you have earned or purchased.</li>
          <li>Messages and questions you have sent to the AI will be retained for analytical and service improvement purposes, but will no longer be associated with your account.</li>
          <li>Your achievements, streaks, and other account-specific data will be permanently deleted.</li>
        </ul>
      </section>

      <section>
        <h2>8. User Conduct</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Use the App for any unlawful purpose</li>
          <li>Attempt to manipulate, exploit, or abuse the credit system</li>
          <li>Use automated systems, bots, or scripts to interact with the App</li>
          <li>Attempt to reverse engineer, decompile, or disassemble the App</li>
          <li>Circumvent any security measures or access restrictions</li>
          <li>Submit harmful, offensive, or inappropriate content through questions or guesses</li>
        </ul>
      </section>

      <section>
        <h2>9. AI Responses</h2>
        <p>
          The AI assistant is powered by Claude, developed by Anthropic. AI responses are generated automatically and may not always be accurate. The App and its operators are not responsible for incorrect or misleading AI responses. The AI may refuse to answer certain questions by responding with "FORBIDDEN" at its discretion.
        </p>
      </section>

      <section>
        <h2>10. Intellectual Property</h2>
        <p>
          All content, features, and functionality of the App, including but not limited to text, graphics, logos, and software, are the exclusive property of Askarasu and are protected by copyright, trademark, and other intellectual property laws.
        </p>
      </section>

      <section>
        <h2>11. Disclaimer of Warranties</h2>
        <p>
          THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT THE APP WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
        </p>
      </section>

      <section>
        <h2>12. Limitation of Liability</h2>
        <p>
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL ASKARASU OR ITS OPERATORS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF CREDITS, DATA, OR OTHER INTANGIBLE LOSSES.
        </p>
      </section>

      <section>
        <h2>13. Changes to Terms</h2>
        <p>
          We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to the App or our website. Your continued use of the App after any changes constitutes acceptance of the new Terms.
        </p>
      </section>

      <section>
        <h2>14. Third-Party Services</h2>
        <p>The App uses the following third-party services, each with their own terms and privacy policies:</p>
        <ul>
          <li>Firebase (Authentication and Analytics) - Google LLC</li>
          <li>RevenueCat - for in-app purchase management</li>
          <li>Google AdMob - for advertisements</li>
          <li>Anthropic Claude - for AI responses</li>
        </ul>
      </section>

      <section>
        <h2>15. Governing Law</h2>
        <p>
          These Terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles.
        </p>
      </section>

      <section>
        <h2>16. Contact Us</h2>
        <p>
          If you have any questions about these Terms, please contact us via email to commit451 at gmail dot com.
        </p>
      </section>
      </div>
    </>
  )
}

export default Terms
