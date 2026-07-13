"use client";

/**
 * Letter — Habitat "Our Letter to You" / CEO letter pattern.
 *
 * Structure:
 *   .letter-super-container
 *     .letter-section
 *       .letter-header       ← "Yours sincerely, Ardent..." + "Our Letter to You:" + "Your Journey Starts Now."
 *       .letter-body         ← scrollable letter text
 *       .letter-signature    ← CEO name + title
 */

export default function Letter() {
  return (
    <div className="letter-super-container">
      <div className="letter-section">
        {/* ===== Header block ===== */}
        <div className="letter-header">
          <p className="letter-salutation">Yours sincerely, Ardent...</p>
          <h3>Our Letter to You:</h3>
          <h2>Your Journey Starts Now.</h2>
        </div>

        {/* ===== Letter body ===== */}
        <div className="letter-body">
          <p>Dear Reader,</p>
          <p>
            The year is 2026, and Nigeria is changing faster than most people
            realise.
          </p>
          <p>
            The country is finally building the critical infrastructure to
            unlock large-scale development, and the conversations around
            opportunity are shifting fast.
          </p>
          <p>
            You&apos;re likely in your 20s or 30s, thinking seriously about
            building sustainable wealth. You&apos;re reading this at the perfect
            moment.
          </p>
          <p>
            This is one of those rare times when infrastructure, policy, and
            timing align. The real question is no longer whether wealth will be
            created in this corridor, it&apos;s who will be positioned to
            capture it?
          </p>
          <p>
            By investing in residential plots at Ardent, you enter a world of
            modern community living and smart real estate.
          </p>
          <p>
            Come 2028, your estate is flourishing, generating strong value as
            you build your dream home at the centre of a thriving community.
          </p>
          <p>
            By 2030, Ardent has become a landmark community. Your property
            provides solid passive growth, while your lifestyle spaces earn
            additional value from the surrounding development.
          </p>
          <p>Your adventure begins with a single step. Will you take it?</p>
        </div>

        {/* ===== Signature ===== */}
        <div className="letter-signature">
          <p className="letter-name">Ardent Limited</p>
          <p className="letter-title">Development Team</p>
        </div>
      </div>
    </div>
  );
}
