import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

function Privacy() {
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
        <h1>Privacy Policy</h1>
      <p className="last-updated">Last Updated: January 23, 2025</p>

      <section>
        <h2>1. Introduction</h2>
        <p>
          This Privacy Policy describes how Askarasu ("we," "us," or "our") collects, uses, and shares information when you use our mobile application ("the App"). By using the App, you agree to the collection and use of information in accordance with this policy.
        </p>
      </section>

      <section>
        <h2>2. Information We Collect</h2>

        <h3>2.1 Account Information</h3>
        <p>
          When you sign in using Google or Apple authentication, we receive basic profile information including:
        </p>
        <ul>
          <li>Name</li>
          <li>Email address</li>
          <li>Unique user identifier</li>
          <li>Profile picture (if provided by the authentication provider)</li>
        </ul>

        <h3>2.2 Game Data</h3>
        <p>We collect and store:</p>
        <ul>
          <li>Questions you ask the AI</li>
          <li>Guesses you submit</li>
          <li>Credit/Coin balance and transaction history</li>
          <li>Achievements earned</li>
          <li>Streak data and puzzle completion history</li>
        </ul>

        <h3>2.3 Analytics Data</h3>
        <p>
          Through Firebase Analytics, we automatically collect:
        </p>
        <ul>
          <li>Device information (model, operating system, version)</li>
          <li>App usage patterns and session data</li>
          <li>Crash reports and performance data</li>
          <li>General location (country/region level)</li>
        </ul>

        <h3>2.4 Purchase Information</h3>
        <p>
          Through RevenueCat, we collect information about your in-app purchases, including purchase history and subscription status. Payment details are processed by Apple or Google and are not stored by us.
        </p>

        <h3>2.5 Advertising Data</h3>
        <p>
          Google AdMob may collect advertising identifiers and information about your interactions with advertisements. This may include your device's advertising ID and information about ads viewed or clicked.
        </p>
      </section>

      <section>
        <h2>3. How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Provide and maintain the App</li>
          <li>Process your questions and deliver AI responses</li>
          <li>Track your coins, achievements, and streaks</li>
          <li>Process in-app purchases</li>
          <li>Deliver relevant advertisements</li>
          <li>Analyze usage to improve the App</li>
          <li>Detect and prevent fraud or abuse</li>
          <li>Communicate with you about the App</li>
        </ul>
      </section>

      <section>
        <h2>4. Third-Party Services</h2>
        <p>We use the following third-party services that may collect information:</p>

        <h3>4.1 Firebase (Google LLC)</h3>
        <p>
          We use Firebase for authentication and analytics. Firebase's privacy policy can be found at: <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer">https://firebase.google.com/support/privacy</a>
        </p>

        <h3>4.2 RevenueCat</h3>
        <p>
          We use RevenueCat to manage in-app purchases and subscriptions. RevenueCat's privacy policy can be found at: <a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer">https://www.revenuecat.com/privacy</a>
        </p>

        <h3>4.3 Google AdMob</h3>
        <p>
          We use Google AdMob to display advertisements. AdMob may use cookies and advertising identifiers to serve personalized ads. Google's privacy policy can be found at: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a>
        </p>

        <h3>4.4 Anthropic (Claude AI)</h3>
        <p>
          Questions you submit are processed by Claude, an AI assistant developed by Anthropic. Your questions are sent to Anthropic's servers for processing. Anthropic's privacy policy can be found at: <a href="https://www.anthropic.com/privacy" target="_blank" rel="noopener noreferrer">https://www.anthropic.com/privacy</a>
        </p>

        <h3>4.5 Apple and Google Authentication</h3>
        <p>
          When you sign in with Apple or Google, those companies process your authentication in accordance with their respective privacy policies.
        </p>
      </section>

      <section>
        <h2>5. Data Retention</h2>
        <p>
          We retain your account information and game data for as long as your account is active. If you delete your account:
        </p>
        <ul>
          <li>Your account information, achievements, and streaks will be permanently deleted</li>
          <li>Questions and messages you sent to the AI will be retained in anonymized form (no longer linked to your account) for service improvement and analytical purposes</li>
          <li>Purchase history may be retained as required for legal and accounting purposes</li>
        </ul>
      </section>

      <section>
        <h2>6. Data Security</h2>
        <p>
          We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
        </p>
      </section>

      <section>
        <h2>7. Your Rights</h2>
        <p>Depending on your location, you may have the right to:</p>
        <ul>
          <li>Access the personal information we hold about you</li>
          <li>Request correction of inaccurate data</li>
          <li>Request deletion of your account and associated data</li>
          <li>Opt out of personalized advertising</li>
          <li>Export your data in a portable format</li>
        </ul>
        <p>
          To delete your account, use the account deletion option in the App's Settings menu.
        </p>
      </section>

      <section>
        <h2>8. Children's Privacy</h2>
        <p>
          The App is not intended for children under the age of 13 (or the applicable age of digital consent in your jurisdiction). We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us so we can delete it.
        </p>
      </section>

      <section>
        <h2>9. Advertising Choices</h2>
        <p>
          You can opt out of personalized advertising by adjusting your device settings:
        </p>
        <ul>
          <li><strong>iOS:</strong> Settings → Privacy → Tracking → disable "Allow Apps to Request to Track"</li>
          <li><strong>Android:</strong> Settings → Google → Ads → Opt out of Ads Personalization</li>
        </ul>
        <p>
          Note that opting out of personalized ads does not prevent you from seeing advertisements; you will still see non-personalized ads.
        </p>
      </section>

      <section>
        <h2>10. International Data Transfers</h2>
        <p>
          Your information may be transferred to and processed in countries other than your own. These countries may have different data protection laws. By using the App, you consent to such transfers.
        </p>
      </section>

      <section>
        <h2>11. Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
        </p>
      </section>

      <section>
        <h2>12. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy or our data practices, please contact us via email to commit451 at gmail dot com.
        </p>
      </section>
      </div>
    </>
  )
}

export default Privacy
