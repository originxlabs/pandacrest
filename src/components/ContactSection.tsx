import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your enquiry! We will get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" ref={ref} className="py-16 md:py-20 gradient-hero">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-display text-3xl md:text-4xl font-extrabold text-foreground mb-12">
          Get In <span className="text-gradient">Touch</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="contact-info space-y-6">
            {[
              { icon: MapPin, title: "Visit Us", info: "123 Learning Lane, Education District, City - 400001" },
              { icon: Phone, title: "Call Us", info: "+91 98765 43210", href: "tel:+919876543210" },
              { icon: Mail, title: "Email Us", info: "info@pandacrest.edu", href: "mailto:info@pandacrest.edu" },
              { icon: Clock, title: "School Hours", info: "Mon – Fri: 8:00 AM – 2:00 PM" },
            ].map((item) => (
              <div key={item.title} className="surface-card flex items-start gap-4 rounded-2xl p-5">
                <div className="p-3 rounded-xl bg-mint">
                  <item.icon className="w-5 h-5 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-foreground">{item.title}</h4>
                  {item.href ? (
                    <a href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">{item.info}</a>
                  ) : (
                    <p className="text-sm text-muted-foreground">{item.info}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Map embed */}
            <div className="rounded-2xl overflow-hidden shadow-card h-48">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.0!2d72.8!3d19.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA2JzAwLjAiTiA3MsKwNDgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Panda Crest School Location"
              />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="contact-form surface-card rounded-3xl p-8 shadow-card-hover space-y-5">
            <h3 className="font-display text-xl font-bold text-foreground mb-2">Send an Enquiry</h3>
            {[
              { name: "name", label: "Your Name", type: "text", placeholder: "Enter your name" },
              { name: "email", label: "Email Address", type: "email", placeholder: "Enter your email" },
              { name: "phone", label: "Phone Number", type: "tel", placeholder: "Enter your phone number" },
            ].map((field) => (
              <div key={field.name}>
                <label className="block text-sm font-semibold text-foreground mb-1.5">{field.label}</label>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  required
                  value={formData[field.name as keyof typeof formData]}
                  onChange={(e) => setFormData((d) => ({ ...d, [field.name]: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
                />
              </div>
            ))}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-1.5">Message</label>
              <textarea
                rows={4}
                placeholder="Tell us about your child and any questions you have"
                required
                value={formData.message}
                onChange={(e) => setFormData((d) => ({ ...d, message: e.target.value }))}
                className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-accent text-accent-foreground font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-float"
            >
              <Send className="w-4 h-4" />
              Send Enquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
