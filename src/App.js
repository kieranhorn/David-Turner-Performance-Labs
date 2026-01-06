import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { 
  MessageSquare, 
  Phone, 
  Instagram, 
  Award, 
  Target, 
  Zap, 
  Mail,
  ArrowRight,
  TrendingUp,
  Shield,
  MapPin,
  ArrowLeft
} from 'lucide-react';

const LegalDocs = ({ view, onBack }) => {
  return (
    <div className="container" style={{ paddingTop: 'clamp(100px, 15vh, 140px)', paddingBottom: '100px', minHeight: '100vh' }}>
      <button onClick={onBack} className="btn btn-outline" style={{ padding: '0.75rem 1.5rem', marginBottom: '3rem' }}>
        <ArrowLeft size={16} /> Back to Lab
      </button>

      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 className="display-font" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '2rem' }}>
          {view === 'privacy' ? 'Privacy Policy' : 'Terms & Liability'}
        </h1>

        {view === 'privacy' ? (
          <div style={{ lineHeight: '1.8', color: '#444' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '900', marginTop: '2.5rem', marginBottom: '1rem' }}>1. Data Collection</h3>
            <p>We collect information you provide directly to us via our intake forms, including your name, email address, professional background, and physical performance objectives. We operate in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.</p>
            
            <h3 style={{ fontSize: '1.5rem', fontWeight: '900', marginTop: '2.5rem', marginBottom: '1rem' }}>2. Use of Information</h3>
            <p>Your data is used strictly for:</p>
            <ul style={{ listStyle: 'disc', paddingLeft: '20px', margin: '1rem 0' }}>
              <li>Assessing your suitability for our performance programs.</li>
              <li>Scheduling and communication regarding your sessions.</li>
              <li>Legal and safety compliance.</li>
            </ul>
            <p>We do not sell your personal data to third parties.</p>

            <h3 style={{ fontSize: '1.5rem', fontWeight: '900', marginTop: '2.5rem', marginBottom: '1rem' }}>3. Data Security</h3>
            <p>We implement security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.</p>
          </div>
        ) : (
          <div style={{ lineHeight: '1.8', color: '#444' }}>
             <div style={{ padding: '2rem', background: '#f0f0f0', borderRadius: '20px', marginBottom: '3rem' }}>
               <h4 style={{ fontWeight: '900', marginBottom: '1rem' }}>CRITICAL LIABILITY NOTICE</h4>
               <p style={{ fontSize: '0.9rem' }}>By participating in any services provided by David Turner Performance Labs, you expressly waive your right to sue for any injury or physical distress occurred during training or restoration.</p>
             </div>

            <h3 style={{ fontSize: '1.5rem', fontWeight: '900', marginTop: '2.5rem', marginBottom: '1rem' }}>1. Assumption of Risk</h3>
            <p>You acknowledge that participation in high-intensity strength training, metabolic conditioning, and manual therapy ("Services") involves inherent risks, including but not limited to: muscle strains, rhabdomyolysis, cardiovascular stress, and joint injury. You voluntarily assume all such risks.</p>
            
            <h3 style={{ fontSize: '1.5rem', fontWeight: '900', marginTop: '2.5rem', marginBottom: '1rem' }}>2. Medical Disclaimer</h3>
            <p>David Turner Performance Labs is not a medical facility. Our staff are not physicians. No advice or training program provided should be considered medical advice. You certify that you have consulted with a physician and have full clearance to engage in strenuous physical activity.</p>

            <h3 style={{ fontSize: '1.5rem', fontWeight: '900', marginTop: '2.5rem', marginBottom: '1rem' }}>3. Release of Liability</h3>
            <p>To the fullest extent permitted by law, you release, indemnify, and hold harmless David Turner Performance Labs, its owners, and employees from any claims, demands, or causes of action arising out of your participation in our programs, including those arising from negligence.</p>
            
            <h3 style={{ fontSize: '1.5rem', fontWeight: '900', marginTop: '2.5rem', marginBottom: '1rem' }}>4. Cancellation Policy</h3>
            <p>Cancellations made less than 24 hours before a scheduled session will be charged at the full session rate. This policy is in addition to your statutory rights under the Consumer Rights Act 2015.</p>
          </div>
        )}
      </div>
    </div>
  );
};

const App = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeService, setActiveService] = useState(null);
  const [view, setView] = useState('home');
  const [showCookieBanner, setShowCookieBanner] = useState(() => {
    return !localStorage.getItem('cookieConsent');
  });
  const form = useRef();

  const handleCookieAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowCookieBanner(false);
  };

  if (view !== 'home') {
    return (
      <div>
        <style>{`
          :root { --primary: #000000; --secondary: #ffffff; --gray-light: #f8f8f8; --gray-medium: #d1d1d1; --transition: all 0.5s cubic-bezier(0.2, 1, 0.3, 1); }
          * { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Inter', sans-serif; }
          .btn { display: inline-flex; align-items: center; justify-content: center; padding: 1.25rem 2.75rem; border-radius: 99px; font-weight: 800; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.1em; cursor: pointer; transition: var(--transition); border: none; gap: 0.75rem; }
          .btn-outline { background: transparent; border: 2px solid var(--primary); color: var(--primary); }
          .btn-outline:hover { background: var(--primary); color: var(--secondary); }
          .display-font { font-weight: 900; text-transform: uppercase; letter-spacing: -0.04em; line-height: 0.85; }
          .container { max-width: 1300px; margin: 0 auto; padding: 0 40px; }
          @media (max-width: 768px) { .container { padding: 0 20px; } }
        `}</style>
        <LegalDocs view={view} onBack={() => setView('home')} />
      </div>
    );
  }

  const services = [
    {
      id: 'training',
      title: 'Elite Personal Training',
      price: 'Contact for Details',
      description: 'Scientific strength and conditioning protocols tailored to your specific physiological profile and lifestyle goals.'
    },
    {
      id: 'nutrition',
      title: 'Metabolic Engineering',
      price: 'Contact for Details',
      description: 'Data-driven nutrition strategies focusing on hormonal optimization, cognitive clarity, and sustained energy.'
    },
    {
      id: 'restoration',
      title: 'Structural Restoration',
      price: '£30 (30m) / £50 (1h)',
      description: 'Advanced therapeutic massage and myofascial release to eliminate pain, improve posture, and accelerate recovery.'
    }
  ];

  const handleBooking = (title) => {
    setActiveService(title);
    const contactSection = document.getElementById('contact-section');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // 1. Send Admin Notification (To You)
    const sendAdminNotification = emailjs.sendForm('service_q7li2we', 'template_j11lhp6', form.current, '6VCaNAARojB5FUW0-');

    // 2. Send Auto-Reply (To User)
    const sendAutoReply = emailjs.sendForm('service_q7li2we', 'template_i3q5a9n', form.current, '6VCaNAARojB5FUW0-');

    // Wait for both to complete
    Promise.all([sendAdminNotification, sendAutoReply])
      .then((results) => {
          console.log('SUCCESS! Admin and Auto-reply sent.', results);
          setFormSubmitted(true);
      }, (error) => {
          console.error('FAILED...', error);
          alert(`Error sending message: ${JSON.stringify(error)}`);
      });
  };

  const styles = `
    :root {
      --primary: #000000;
      --secondary: #ffffff;
      --gray-light: #f8f8f8;
      --gray-medium: #d1d1d1;
      --transition: all 0.5s cubic-bezier(0.2, 1, 0.3, 1);
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Inter', sans-serif;
    }

    body {
      background-color: var(--secondary);
      color: var(--primary);
      overflow-x: hidden;
      line-height: 1.6;
    }

    .display-font {
      font-weight: 900;
      text-transform: uppercase;
      letter-spacing: -0.04em;
      line-height: 0.85;
    }

    .container {
      max-width: 1300px;
      margin: 0 auto;
      padding: 0 40px;
    }

    @media (max-width: 768px) {
      .container { padding: 0 20px; }
    }

    /* Navigation */
    nav {
      position: fixed;
      top: 0;
      width: 100%;
      height: 100px;
      display: flex;
      align-items: center;
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(10px);
      z-index: 1000;
      border-bottom: 1px solid var(--gray-light);
    }

    .nav-content {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo {
      font-size: 1.1rem;
      font-weight: 900;
      letter-spacing: 0.1em;
    }

    @media (max-width: 480px) {
      .logo { font-size: 0.9rem; }
      nav { height: 80px; }
    }

    /* Buttons */
    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 1.25rem 2.75rem;
      border-radius: 99px;
      font-weight: 800;
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      cursor: pointer;
      transition: var(--transition);
      border: none;
      gap: 0.75rem;
    }

    @media (max-width: 768px) {
      .btn { padding: 1rem 2rem; }
    }

    @media (max-width: 480px) {
      .btn { padding: 0.8rem 1.5rem; font-size: 0.75rem; }
    }

    .btn-black {
      background: var(--primary);
      color: var(--secondary);
    }

    .btn-black:hover {
      background: #333;
      transform: scale(1.05);
    }

    .btn-outline {
      background: transparent;
      border: 2px solid var(--primary);
      color: var(--primary);
    }

    .btn-outline:hover {
      background: var(--primary);
      color: var(--secondary);
    }

    /* Hero */
    .hero {
      padding-top: 220px;
      padding-bottom: 120px;
    }

    .hero-title {
      font-size: clamp(2.5rem, 10vw, 10rem);
      margin-bottom: 3rem;
      word-wrap: break-word;
      hyphens: auto;
    }

    .hero-meta {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 100px;
      padding-top: 40px;
      border-top: 2px solid var(--primary);
    }

    @media (max-width: 768px) {
      .hero { padding-top: 140px; padding-bottom: 80px; }
      .hero-meta { grid-template-columns: 1fr; gap: 40px; }
    }

    /* Services Section */
    .services-wrapper {
      background: #000;
      color: #fff;
      padding: 140px 0;
    }

    .services-header {
      margin-bottom: 80px;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }

    @media (max-width: 768px) {
      .services-wrapper { padding: 80px 0; }
      .services-header { flex-direction: column; align-items: flex-start; gap: 20px; }
      .services-header p { text-align: left; }
    }

    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 30px;
    }

    @media (max-width: 400px) {
      .services-grid { grid-template-columns: 1fr; }
    }

    .service-card {
      background: #111;
      padding: 60px 40px;
      border-radius: 40px;
      transition: var(--transition);
      display: flex;
      flex-direction: column;
      border: 1px solid #222;
    }

    @media (max-width: 768px) {
      .service-card { padding: 40px 30px; border-radius: 30px; }
    }

    .service-card:hover {
      border-color: #555;
      transform: translateY(-10px);
    }

    .service-icon {
      margin-bottom: 40px;
      opacity: 0.5;
    }

    /* Contact Form & Layout */
    .contact-card {
      background: var(--gray-light);
      border-radius: 60px;
      padding: 80px;
      margin-bottom: 100px;
    }

    @media (max-width: 1024px) {
      .contact-card { padding: 40px; border-radius: 40px; }
    }

    @media (max-width: 480px) {
      .contact-card { padding: 30px 20px; }
    }

    .contact-info-strip {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 40px;
      padding-bottom: 60px;
      margin-bottom: 60px;
      border-bottom: 1px solid var(--gray-medium);
    }

    .contact-info-footer {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 40px;
      padding-top: 60px;
      margin-top: 60px;
      border-top: 1px solid var(--gray-medium);
    }

    .info-item {
      display: flex;
      align-items: center;
      gap: 1.5rem;
    }

    .info-icon-box {
      width: 54px;
      height: 54px;
      background: #000;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      flex-shrink: 0;
    }

    .questionnaire-layout {
      display: grid;
      grid-template-columns: 1fr 1.2fr;
      gap: 100px;
    }

    @media (max-width: 1024px) {
      .questionnaire-layout { grid-template-columns: 1fr; gap: 60px; }
    }

    .input-field {
      width: 100%;
      padding: 1.5rem;
      border-radius: 24px;
      border: 1px solid var(--gray-medium);
      margin-bottom: 1.5rem;
      font-size: 1rem;
      background: white;
      transition: var(--transition);
    }

    .input-field:focus {
      outline: none;
      border-color: var(--primary);
      box-shadow: 0 0 0 4px rgba(0,0,0,0.05);
    }

    label {
      display: block;
      margin-bottom: 0.75rem;
      font-weight: 800;
      font-size: 0.7rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: #666;
    }

    /* Footer */
    footer {
      background: white;
      padding: 120px 0 60px;
      border-top: 1px solid var(--gray-light);
    }

    .footer-content {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr;
      gap: 60px;
    }

    @media (max-width: 768px) {
      .footer-content { grid-template-columns: 1fr; }
    }

    .social-link {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      border: 1px solid var(--gray-medium);
      display: flex;
      align-items: center;
      justify-content: center;
      color: black;
      text-decoration: none;
      transition: var(--transition);
    }

    .social-link:hover {
      background: black;
      color: white;
      border-color: black;
    }

    /* Cookie Banner */
    .cookie-banner {
      position: fixed;
      bottom: 30px;
      left: 50%;
      transform: translateX(-50%);
      background: white;
      border: 1px solid var(--gray-medium);
      padding: 24px 32px;
      border-radius: 24px;
      display: flex;
      align-items: center;
      gap: 24px;
      z-index: 2000;
      box-shadow: 0 20px 40px rgba(0,0,0,0.1);
      width: calc(100% - 40px);
      max-width: 600px;
    }

    @media (max-width: 600px) {
      .cookie-banner {
        flex-direction: column;
        text-align: center;
        bottom: 20px;
        padding: 24px;
      }
    }
  `;

  return (
    <div>
      <style>{styles}</style>

      {/* Navigation */}
      <nav>
        <div className="container nav-content">
          <div className="logo">DAVID TURNER / PERF LABS</div>
          <div>
            <button className="btn btn-black" onClick={() => handleBooking('General')}>
              Inquire
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero container">
        <h1 className="hero-title display-font">Peak<br />Evolution.</h1>
        <div className="hero-meta">
          <div>
            <p style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '2rem' }}>
              David Turner Performance Labs provides bespoke human optimization for high achievers, dedicated athletes, and those who demand excellence from their bodies.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
               <div style={{ padding: '0.5rem 1.25rem', border: '1px solid #000', borderRadius: '99px', fontSize: '0.75rem', fontWeight: '800' }}>HIGH PERFORMANCE</div>
               <div style={{ padding: '0.5rem 1.25rem', border: '1px solid #000', borderRadius: '99px', fontSize: '0.75rem', fontWeight: '800' }}>DATA DRIVEN</div>
               <div style={{ padding: '0.5rem 1.25rem', border: '1px solid #000', borderRadius: '99px', fontSize: '0.75rem', fontWeight: '800' }}>PRIVATE LAB</div>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
            <div>
              <TrendingUp size={32} strokeWidth={3} />
              <h4 style={{ margin: '1rem 0', fontWeight: '900', textTransform: 'uppercase', fontSize: '0.9rem' }}>Sustainable Gains</h4>
              <p style={{ fontSize: '0.85rem', color: '#666' }}>We focus on long-term vitality, ensuring your performance scales alongside your ambitions.</p>
            </div>
            <div>
              <Shield size={32} strokeWidth={3} />
              <h4 style={{ margin: '1rem 0', fontWeight: '900', textTransform: 'uppercase', fontSize: '0.9rem' }}>Total Vitality</h4>
              <p style={{ fontSize: '0.85rem', color: '#666' }}>Merging physical training with metabolic health and soft-tissue restoration.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-wrapper">
        <div className="container">
          <div className="services-header">
            <h2 className="display-font" style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)' }}>The Lab<br />Disciplines</h2>
            <p style={{ maxWidth: '400px', opacity: '0.6', textAlign: 'right' }}>
              A holistic ecosystem designed to transform how you move, fuel, and recover.
            </p>
          </div>

          <div className="services-grid">
            {services.map(service => (
              <div key={service.id} className="service-card">
                <div className="service-icon">
                  {service.id === 'training' && <Target size={48} />}
                  {service.id === 'nutrition' && <Zap size={48} />}
                  {service.id === 'restoration' && <Award size={48} />}
                </div>
                <h3 className="display-font" style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>{service.title}</h3>
                <p style={{ opacity: '0.5', marginBottom: '2.5rem', flexGrow: 1 }}>{service.description}</p>
                <div style={{ borderTop: '1px solid #333', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontWeight: '900', fontSize: '1.25rem' }}>{service.price}</span>
                  <button className="btn btn-outline" style={{ borderColor: '#fff', color: '#fff', padding: '0.75rem 1.5rem' }} onClick={() => handleBooking(service.title)}>
                    Book <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Consultation */}
      <section id="contact-section" className="section container" style={{ padding: '120px 0' }}>
        <div className="contact-card">
          
          {/* Contact Details Before Questionnaire */}
          <div className="contact-info-strip">
            <div className="info-item">
              <div className="info-icon-box"><Phone size={22} /></div>
              <div>
                <label>Direct Office</label>
                <p style={{ fontWeight: '800' }}>+44 7877 460210</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon-box"><Mail size={22} /></div>
              <div>
                <label>Email Inquiry</label>
                <p style={{ fontWeight: '800' }}>contact@dtperformancelabs.com</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon-box"><MessageSquare size={22} /></div>
              <div>
                <label>Response Time</label>
                <p style={{ fontWeight: '800' }}>Under 12 Hours</p>
              </div>
            </div>
          </div>

          <div className="questionnaire-layout">
            <div>
              <p className="sub-heading" style={{ color: '#000', marginBottom: '1rem' }}>Step 01 / Discovery</p>
              <h2 className="display-font" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', marginBottom: '2.5rem' }}>The Lab<br />Protocol</h2>
              <p style={{ color: '#666', fontSize: '1.1rem' }}>
                Before we begin, David needs to understand your current physiology and mission objectives. Complete this brief intake to prioritize your consultation.
              </p>
            </div>

            <div>
              {!formSubmitted ? (
                <form ref={form} onSubmit={sendEmail}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    <div>
                      <label>Full Name</label>
                      <input type="text" name="user_name" className="input-field" placeholder="Athlete / Client Name" required />
                    </div>
                    <div>
                      <label>Email Address</label>
                      <input type="email" name="user_email" className="input-field" placeholder="email@example.com" required />
                    </div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    <div>
                      <label>Background</label>
                      <input type="text" name="user_background" className="input-field" placeholder="Discipline / Profession" required />
                    </div>
                    <div>
                      <label>Service Area</label>
                      <select name="service" className="input-field" value={activeService || ''} onChange={(e) => setActiveService(e.target.value)}>
                        <option value="">Select Department</option>
                        {services.map(s => <option key={s.id} value={s.title}>{s.title}</option>)}
                      </select>
                    </div>
                  </div>
                  <label>Mission Vision</label>
                  <textarea name="message" className="input-field" rows="4" placeholder="What are your 6-month performance objectives?"></textarea>
                  
                  <div style={{ marginBottom: '2rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <input type="checkbox" id="marketing_consent" name="marketing_consent" style={{ marginTop: '0.3rem' }} />
                    <label htmlFor="marketing_consent" style={{ fontSize: '0.8rem', textTransform: 'none', letterSpacing: 'normal', fontWeight: '400' }}>
                      I agree to receive communications from David Turner Performance Labs regarding my enquiry and future performance opportunities. You can unsubscribe at any time.
                    </label>
                  </div>

                  <button type="submit" className="btn btn-black" style={{ width: '100%' }}>Initiate Review</button>
                </form>
              ) : (
                <div style={{ textAlign: 'center', padding: '60px 0' }}>
                  <div style={{ width: '100px', height: '100px', background: 'black', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem' }}>
                    <Zap color="white" size={48} />
                  </div>
                  <h3 className="display-font" style={{ fontSize: '2.5rem' }}>Data<br />Transmitted</h3>
                  <p style={{ marginTop: '1rem', color: '#666' }}>David's team will review your objectives and contact you shortly.</p>
                  <button className="btn btn-outline" style={{ marginTop: '2rem' }} onClick={() => setFormSubmitted(false)}>New Submission</button>
                </div>
              )}
            </div>
          </div>

          {/* Contact Details After Questionnaire */}
          <div className="contact-info-footer">
            <div className="info-item">
              <div className="info-icon-box"><MapPin size={22} /></div>
              <div>
                <label>Lab Location</label>
                <p style={{ fontWeight: '800' }}>Portsmouth, United Kingdom</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon-box"><Award size={22} /></div>
              <div>
                <label>Operating Hours</label>
                <p style={{ fontWeight: '800' }}>05:00 — 21:00 GMT</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon-box"><Instagram size={22} /></div>
              <div>
                <label>Follow The Work</label>
                <p style={{ fontWeight: '800' }}>dtperformancelabs</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container footer-content">
          <div>
            <div className="logo" style={{ marginBottom: '2rem', fontSize: '1.5rem' }}>DAVID TURNER / PL</div>
            <p style={{ color: '#777', maxWidth: '300px' }}>
              The gold standard for human optimization. Science-backed training, nutrition, and recovery for high-performing lives.
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
              <a href="https://www.instagram.com/dxvidxi_fitness?igsh=NDl4MnhiNWJ5NTI5&utm_source=qr" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://www.tiktok.com/@dxvidxi_fitness?_r=1&_t=ZG-92qYsY8NrkX" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="TikTok">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 style={{ fontWeight: '900', textTransform: 'uppercase', marginBottom: '2rem', fontSize: '0.8rem' }}>The Lab</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.9rem', color: '#666' }}>
              <button onClick={() => setView('home')} style={{ background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', color: '#666' }}>About David</button>
              <button onClick={() => setView('home')} style={{ background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', color: '#666' }}>The Methodology</button>
              <button onClick={() => setView('terms')} style={{ background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', color: '#666' }}>Terms & Liability</button>
              <button onClick={() => setView('privacy')} style={{ background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', color: '#666' }}>Privacy Policy</button>
            </div>
          </div>

          <div>
            <h4 style={{ fontWeight: '900', textTransform: 'uppercase', marginBottom: '2rem', fontSize: '0.8rem' }}>Contact</h4>
            <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: '1.8' }}>
              David Turner Performance Labs<br />
              Portsmouth, United Kingdom<br />
              
              <br />
              <span style={{ fontSize: '0.75rem', opacity: 0.8 }}>
                Registered in England & Wales<br />
                Company No: 16119263<br />
                
              </span>
            </p>
          </div>
        </div>
        <div className="container" style={{ marginTop: '80px', paddingTop: '40px', borderTop: '1px solid #f0f0f0', textAlign: 'center', fontSize: '0.7rem', color: '#aaa', fontWeight: '700' }}>
          &copy; 2026 DAVID TURNER PERFORMANCE LABS. ALL RIGHTS RESERVED.
        </div>
      </footer>

      {showCookieBanner && (
        <div className="cookie-banner">
          <div style={{ flexGrow: 1 }}>
            <p style={{ fontSize: '0.85rem', fontWeight: '600' }}>
              We use cookies to optimize your performance tracking and site experience.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button className="btn btn-black" style={{ padding: '0.75rem 1.5rem' }} onClick={handleCookieAccept}>
              Accept
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
