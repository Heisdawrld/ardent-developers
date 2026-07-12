"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="w-full relative flex flex-col items-center"
      style={{
        gap: 36,
        padding: "60px 30px 40px",
        background: "var(--cream)",
      }}
    >
      {/* Logo block */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center"
        style={{ gap: 16 }}
      >
        <img
          src="/logo.png"
          alt="Ardent Limited"
          className="w-[160px] md:w-[200px] h-auto"
          style={{ objectFit: "contain" }}
        />
        <h3
          className="text-ink font-semibold text-center"
          style={{
            fontSize: "clamp(28px, 3vw, 40px)",
            lineHeight: "40px",
            letterSpacing: "-0.03em",
          }}
        >
          Ardent
        </h3>
      </motion.div>

      {/* Main CTA content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="flex flex-col items-center text-center max-w-3xl"
        style={{ gap: 24 }}
      >
        <h1
          className="text-ink font-semibold"
          style={{
            fontSize: "clamp(32px, 5.5vw, 80px)",
            lineHeight: 1.0,
            letterSpacing: "-0.03em",
          }}
        >
          Build Bold.
          <br />
          Live Ardent.
        </h1>

        <h3
          className="text-ink font-semibold"
          style={{
            fontSize: "clamp(18px, 2vw, 28px)",
            lineHeight: 1.3,
            letterSpacing: "0.01em",
          }}
        >
          Land Today · Home Tomorrow · Community Forever
        </h3>

        <p
          className="text-body"
          style={{
            fontSize: "clamp(14px, 1.2vw, 20px)",
            lineHeight: 1.5,
            maxWidth: 680,
          }}
        >
          Ardent Limited is a next-generation Lagos real estate
          development brand. We design-led communities where
          architecture, landscape, and lifestyle meet.
        </p>

        {/* CTA pills */}
        <div
          className="flex flex-wrap items-center justify-center"
          style={{ gap: 16 }}
        >
          <a href="#pricing" className="btn-pill">
            <span className="btn-txt">Get Started</span>
            <span className="btn-round">
              <svg
                className="arrow arrow-primary"
                width="17"
                height="16"
                viewBox="0 0 17 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.2071 8.7071C16.5976 8.31658 16.5976 7.68341 16.2071 7.29289L9.84315 0.928931C9.45262 0.538406 8.81946 0.538406 8.42893 0.928931C8.03841 1.31946 8.03841 1.95262 8.42893 2.34314L14.0858 8L8.42893 13.6569C8.03841 14.0474 8.03841 14.6805 8.42893 15.0711C8.81946 15.4616 9.45262 15.4616 9.84315 15.0711L16.2071 8.7071ZM0.5 8L0.5 9L15.5 9L15.5 8L15.5 7L0.5 7L0.5 8Z"
                  fill="var(--black)"
                />
              </svg>
              <svg
                className="arrow arrow-secondary"
                width="17"
                height="16"
                viewBox="0 0 17 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.2071 8.7071C16.5976 8.31658 16.5976 7.68341 16.2071 7.29289L9.84315 0.928931C9.45262 0.538406 8.81946 0.538406 8.42893 0.928931C8.03841 1.31946 8.03841 1.95262 8.42893 2.34314L14.0858 8L8.42893 13.6569C8.03841 14.0474 8.03841 14.6805 8.42893 15.0711C8.81946 15.4616 9.45262 15.4616 9.84315 15.0711L16.2071 8.7071ZM0.5 8L0.5 9L15.5 9L15.5 8L15.5 7L0.5 7L0.5 8Z"
                  fill="var(--black)"
                />
              </svg>
            </span>
          </a>

          <a
            href="https://wa.me/2348000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill btn-pill-outline"
            style={{ borderColor: "var(--black)", color: "var(--black)" }}
          >
            <span className="btn-txt" style={{ color: "var(--black)" }}>
              Chat on WhatsApp
            </span>
            <span className="btn-round" style={{ background: "var(--whatsapp)" }}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="var(--white)"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </span>
          </a>
        </div>
      </motion.div>

      {/* Social links */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex items-center"
        style={{ gap: 24 }}
      >
        <a
          href="https://instagram.com/ardentdevelopers"
          target="_blank"
          rel="noopener noreferrer"
          className="text-ink hover:text-gold transition-colors"
          aria-label="Instagram"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
          </svg>
        </a>
        <a
          href="https://wa.me/2348000000000"
          target="_blank"
          rel="noopener noreferrer"
          className="text-ink hover:text-gold transition-colors"
          aria-label="WhatsApp"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
      </motion.div>

      {/* Bottom bar */}
      <div
        className="w-full max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between pt-8 mt-8 border-t border-line"
        style={{ gap: 16 }}
      >
        <p className="text-muted text-[13px]">
          &copy; {new Date().getFullYear()} Ardent Limited. All rights
          reserved.
        </p>
        <p className="text-muted text-[13px]">
          Redefining Modern Living · Lagos, Nigeria
        </p>
      </div>
    </footer>
  );
}
