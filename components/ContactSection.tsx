'use client';

import { useState } from 'react';
import FadeInSection from '@/components/FadeInSection';
import Image from 'next/image';
import { Phone, Mail, Send, Paperclip, X } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone || 'Not provided');
      formDataToSend.append('message', formData.message);
      
      if (file) {
        formDataToSend.append('attachment', file);
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formDataToSend,
      });

      const data = await response.json();

      if (data.success) {
        alert('✅ Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', phone: '', message: '' });
        setFile(null);
      } else {
        alert('❌ Failed to send message. Please email us directly at dansoalex84@gmail.com');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('❌ Failed to send message. Please email us directly at dansoalex84@gmail.com or call 0541158139');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      // Validate file size (max 10MB)
      if (selectedFile.size > 10 * 1024 * 1024) {
        alert('File size must be less than 10MB');
        return;
      }
      setFile(selectedFile);
    }
  };

  const removeFile = () => {
    setFile(null);
    // Reset the file input
    const fileInput = document.getElementById('file') as HTMLInputElement;
    if (fileInput) fileInput.value = '';
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ backgroundColor: '#FAF9F6' }}>
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none opacity-8">
        <Image
          src="/mainbackground.jpg"
          alt=""
          fill
          className="object-cover"
          unoptimized
        />
      </div>

      <div className="mx-auto max-w-6xl relative z-10">
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6" style={{ color: '#1E3A56' }}>
              Get In Touch
            </h2>
            <div className="section-divider mx-auto mb-6"></div>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: '#2B2B2B' }}>
              Contact us to discuss your research or training needs and explore how we can work together for impact.
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <FadeInSection delay={0.2} direction="left">
              <div className="card">
                <h3 className="text-2xl font-bold mb-6" style={{ color: '#1E3A56' }}>Contact Information</h3>
                <p className="mb-6" style={{ color: '#5A5A5A' }}>Reach out to us directly.</p>
                
                <motion.div 
                  className="flex items-start gap-4 mb-6"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#C4B37E' }}>
                    <Phone className="h-6 w-6" style={{ color: '#1E3A56' }} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1" style={{ color: '#1E3A56' }}>Phone</h4>
                    <a 
                      href="tel:0541158139" 
                      className="transition-colors"
                      style={{ color: '#2B2B2B' }}
                      onMouseEnter={(e) => e.currentTarget.style.color = '#1E3A56'}
                      onMouseLeave={(e) => e.currentTarget.style.color = '#2B2B2B'}
                    >
                      0541158139
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start gap-4"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#C4B37E' }}>
                    <Mail className="h-6 w-6" style={{ color: '#1E3A56' }} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1" style={{ color: '#1E3A56' }}>Email</h4>
                    <a 
                      href="mailto:dansoalex84@gmail.com" 
                      className="transition-colors break-all"
                      style={{ color: '#2B2B2B' }}
                      onMouseEnter={(e) => e.currentTarget.style.color = '#1E3A56'}
                      onMouseLeave={(e) => e.currentTarget.style.color = '#2B2B2B'}
                    >
                      dansoalex84@gmail.com
                    </a>
                  </div>
                </motion.div>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.3} direction="left">
              <div className="card">
                <p className="leading-relaxed" style={{ color: '#2B2B2B' }}>
                  We typically respond within 24 hours during business days. 
                  Whether you have a question, need a quote, or want to discuss your project, 
                  we&apos;re here to help.
                </p>
              </div>
            </FadeInSection>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <FadeInSection delay={0.2} direction="right">
              <div className="card-glass">
                <h3 className="text-3xl font-bold mb-2" style={{ color: '#1E3A56' }}>Send Us a Message</h3>
                <p className="mb-8" style={{ color: '#5A5A5A' }}>
                  Fill out the form below and we&apos;ll get back to you as soon as possible.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-semibold" style={{ color: '#1E3A56' }}>
                        Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="input-custom"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-semibold" style={{ color: '#1E3A56' }}>
                        Phone
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="Your phone number"
                        value={formData.phone}
                        onChange={handleChange}
                        className="input-custom"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold" style={{ color: '#1E3A56' }}>
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="input-custom"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-semibold" style={{ color: '#1E3A56' }}>
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your project or inquiry..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="textarea-custom"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="file" className="text-sm font-semibold" style={{ color: '#1E3A56' }}>
                      Attachment (Optional)
                    </label>
                    <div className="relative">
                      <input
                        id="file"
                        name="file"
                        type="file"
                        onChange={handleFileChange}
                        className="hidden"
                        accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png,.zip"
                      />
                      <label
                        htmlFor="file"
                        className="flex items-center gap-2 px-4 py-3 rounded-lg cursor-pointer transition-all duration-300 input-custom hover:border-opacity-100"
                        style={{ borderColor: '#DEDDD9' }}
                      >
                        <Paperclip className="h-5 w-5" style={{ color: '#5A5A5A' }} />
                        <span style={{ color: '#5A5A5A' }}>
                          {file ? file.name : 'Choose file (Max 10MB)'}
                        </span>
                      </label>
                      {file && (
                        <button
                          type="button"
                          onClick={removeFile}
                          className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full transition-colors"
                          style={{ backgroundColor: '#E4E3DF' }}
                          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#DEDDD9'}
                          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#E4E3DF'}
                        >
                          <X className="h-4 w-4" style={{ color: '#2B2B2B' }} />
                        </button>
                      )}
                    </div>
                    <p className="text-xs" style={{ color: '#5A5A5A' }}>
                      Supported formats: PDF, DOC, DOCX, TXT, JPG, PNG, ZIP
                    </p>
                  </div>

                  <div className="flex justify-center">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <button 
                        type="submit" 
                        className="btn-primary text-lg px-10 py-4"
                        disabled={isSubmitting}
                      >
                        <Send className="h-5 w-5" />
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </button>
                    </motion.div>
                  </div>
                </form>
              </div>
            </FadeInSection>
          </div>
        </div>
      </div>
    </section>
  );
}
