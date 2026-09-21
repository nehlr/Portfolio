import React, { useState } from 'react';
import { Mail, MapPin, Check, Copy, ArrowRight, Loader2 } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import confetti from 'canvas-confetti';
import { scrapbookData } from '../data/scrapbookData';
import TextPressure from './TextPressure';

export default function ScrapbookContact() {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const { profile } = scrapbookData;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message || isSubmitting) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${profile.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `New Portfolio Message from ${form.name}`,
        }),
      });

      const data = await response.json();
      // FormSubmit returns success: "true" (or sends activation on first request)
      if (data.success === 'true' || response.ok) {
        setSubmitted(true);
        try {
          confetti({
            particleCount: 50,
            spread: 60,
            origin: { y: 0.7 },
            colors: ['#801232', '#f472b6', '#fce7ef', '#ffffff'],
          });
        } catch (_) { }
      } else {
        setSubmitError(data.message || 'Something went wrong. Please try again or email directly.');
      }
    } catch (err) {
      setSubmitError('Unable to send message right now. Please reach out via email directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-spacious bg-[#fdf0f4]">
      <div className="site-container-narrow">

        {/* Section header */}
        <div className="mb-20 text-center">
          <p className="label-kicker mb-5">04 / Get in Touch</p>
          <h2 className="text-4xl sm:text-5xl md:text-[56px] text-[#801232] tracking-tight leading-tight">
            <TextPressure
              text="Ready to Collaborate"
              minWeight={250}
              maxWeight={850}
              minWidth={75}
              maxWidth={135}
              minItalic={0}
              maxItalic={0.8}
              maxDistance={190}
              textColor="#801232"
            />
            <br />
            <TextPressure
              text="& Build Together?"
              minWeight={200}
              maxWeight={800}
              minWidth={75}
              maxWidth={135}
              minItalic={0.3}
              maxItalic={1}
              maxDistance={190}
              textColor="#660d26"
            />
          </h2>
          <p className="font-sans text-base text-[#57534e] leading-relaxed max-w-md mx-auto mt-6">
            Open for full-stack engineering roles and AI development in Barcelona.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">

          {/* ── Left: Contact details ── */}
          <div className="space-y-8">

            {/* Location & email */}
            <div className="space-y-4 font-sans text-sm text-[#57534e]">
              <p className="flex items-center gap-3">
                <MapPin size={15} className="text-[#801232] shrink-0" />
                {profile.location}
              </p>
              <p className="flex items-center gap-3 font-medium text-[#1c1917]">
                <Mail size={15} className="text-[#801232] shrink-0" />
                {profile.email}
              </p>
            </div>

            {/* Copy email */}
            <button
              onClick={handleCopyEmail}
              className="btn-outline w-full flex items-center justify-center gap-2"
            >
              {copied ? <Check size={13} className="text-emerald-600" /> : <Copy size={13} />}
              {copied ? 'Email Copied!' : 'Copy Email Address'}
            </button>

            {/* Social links */}
            <div className="flex gap-3">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="flex-1 btn-ghost flex items-center justify-center gap-1.5 py-3"
              >
                <Github size={13} /> GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex-1 btn-ghost flex items-center justify-center gap-1.5 py-3"
              >
                <Linkedin size={13} className="text-[#801232]" /> LinkedIn
              </a>
            </div>

          </div>

          {/* ── Right: Form ── */}
          <div>
            {submitted ? (
              <div className="py-16 text-center space-y-5">
                <div className="w-12 h-12 mx-auto rounded-full bg-[#fae5eb] flex items-center justify-center text-[#801232]">
                  <Check size={22} />
                </div>
                <h3 className="font-serif text-3xl text-[#801232]">Message Received</h3>
                <p className="font-sans text-sm text-[#57534e] leading-relaxed max-w-xs mx-auto">
                  Thank you, <strong>{form.name}</strong>. I'll review your note and respond promptly.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', message: '' }); }}
                  className="btn-outline text-xs py-2.5 px-7 mt-2"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Name */}
                <div>
                  <label className="block font-sans text-[10px] uppercase tracking-[0.18em] font-semibold text-[#801232] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="input-underline"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block font-sans text-[10px] uppercase tracking-[0.18em] font-semibold text-[#801232] mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jane@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="input-underline"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block font-sans text-[10px] uppercase tracking-[0.18em] font-semibold text-[#801232] mb-1">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about the opportunity or project..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="input-underline resize-none"
                  />
                </div>

                {submitError && (
                  <p className="text-xs text-[#801232] bg-[#fae5eb] border border-[#f4c2d0] rounded-sm px-3.5 py-2.5 leading-relaxed">
                    {submitError}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={14} className="animate-spin" /> Sending Message...
                    </>
                  ) : (
                    <>
                      Send Message <ArrowRight size={14} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
