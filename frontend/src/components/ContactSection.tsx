import React, { useState } from 'react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', countryCode: '+91', phone: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const countryCodes = [
    { code: '+1', country: 'United States' },
    { code: '+44', country: 'United Kingdom' },
    { code: '+91', country: 'India' },
    { code: '+61', country: 'Australia' },
    { code: '+1', country: 'Canada' },
    { code: '+33', country: 'France' },
    { code: '+49', country: 'Germany' },
    { code: '+39', country: 'Italy' },
    { code: '+34', country: 'Spain' },
    { code: '+31', country: 'Netherlands' },
    { code: '+46', country: 'Sweden' },
    { code: '+41', country: 'Switzerland' },
    { code: '+43', country: 'Austria' },
    { code: '+45', country: 'Denmark' },
    { code: '+47', country: 'Norway' },
    { code: '+358', country: 'Finland' },
    { code: '+353', country: 'Ireland' },
    { code: '+32', country: 'Belgium' },
    { code: '+48', country: 'Poland' },
    { code: '+81', country: 'Japan' },
    { code: '+86', country: 'China' },
    { code: '+82', country: 'South Korea' },
    { code: '+65', country: 'Singapore' },
    { code: '+60', country: 'Malaysia' },
    { code: '+66', country: 'Thailand' },
    { code: '+62', country: 'Indonesia' },
    { code: '+63', country: 'Philippines' },
    { code: '+64', country: 'New Zealand' },
    { code: '+27', country: 'South Africa' },
    { code: '+55', country: 'Brazil' },
    { code: '+52', country: 'Mexico' },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contactus`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: `${formData.countryCode}${formData.phone}`,
          message: formData.message,
        }),
      });
      if (!response.ok) throw new Error('Network response was not ok');
      setStatus('success');
      setFormData({ name: '', email: '', countryCode: '+91', phone: '', message: '' });
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <section className="bg-gray-50 py-20 px-6 md:px-12 border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        {/* Section Header + Form Layout */}
        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Left: Section Header */}
          <div className="w-full md:flex-1 md:max-w-md">
            <h2 className="font-medium text-gray-900 mb-4" style={{fontSize: '40px'}}>
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600">
              Have questions about pricing or want a custom quote? Reach out to us and we'll get back to you shortly.
            </p>
          </div>

          {/* Right: Form */}
          <div className="w-full md:flex-1">
            {status === 'success' ? (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
                <div className="text-5xl mb-4">✨</div>
                <h3 className="text-2xl font-bold mb-2 text-green-700">Message Sent Successfully!</h3>
                <p className="mb-6 text-green-600">Thank you for reaching out. We will get back to you shortly.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="px-8 py-3 bg-mello-bg text-white hover:bg-mello-bg/90 rounded-full font-semibold transition"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="flex flex-col">
                <label htmlFor="name" className="text-sm text-gray-700 font-medium mb-2">Your Name</label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-white border border-gray-300 rounded-2xl px-5 py-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-mello-bg focus:ring-1 focus:ring-mello-bg transition"
                  placeholder="Enter your name"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="text-sm text-gray-700 font-medium mb-2">Your Email</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-white border border-gray-300 rounded-2xl px-5 py-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-mello-bg focus:ring-1 focus:ring-mello-bg transition"
                  placeholder="Enter email address"
                />
              </div>
            </div>

            <div className="flex flex-col mb-6">
              <label htmlFor="phone" className="text-sm text-gray-700 font-medium mb-2">Phone Number</label>
              <div className="flex gap-3">
                <select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  className="bg-white border border-gray-300 rounded-2xl px-4 py-4 text-gray-900 focus:outline-none focus:border-mello-bg focus:ring-1 focus:ring-mello-bg transition w-32 flex-shrink-0"
                >
                  {countryCodes.map((item, index) => (
                    <option key={index} value={item.code}>
                      {item.code} {item.country}
                    </option>
                  ))}
                </select>
                <input 
                  type="tel" 
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-white border border-gray-300 rounded-2xl px-5 py-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-mello-bg focus:ring-1 focus:ring-mello-bg transition flex-1"
                  placeholder="Enter phone number"
                />
              </div>
            </div>

            <div className="flex flex-col mb-6">
              <label htmlFor="message" className="text-sm text-gray-700 font-medium mb-2">Message</label>
              <textarea 
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="bg-white border border-gray-300 rounded-2xl px-5 py-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-mello-bg focus:ring-1 focus:ring-mello-bg transition resize-none"
                placeholder="Enter your message"
              />
            </div>

            {status === 'error' && (
              <p className="text-red-600 text-sm font-medium text-center mb-6">Failed to send message. Please try again later.</p>
            )}

            <div className="flex justify-center">
              <button 
                type="submit" 
                disabled={status === 'loading'}
                className="bg-mello-bg text-white font-semibold py-3 px-10 rounded-full hover:bg-mello-bg/90 transition disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>
            </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
