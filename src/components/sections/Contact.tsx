import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, MapPin, Phone, Mail, CheckCircle2, Loader2 } from "lucide-react";
import { FiGithub as Github } from "react-icons/fi";
import { personalData } from "../../constants/personalData";
import { SectionHeading, GlassCard, Button } from "../ui";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // Simulate sending then redirect to WhatsApp/Email
    setTimeout(() => {
      setStatus("sent");
    }, 1000);
  };

  const handleWhatsApp = () => {
    const text = `Hi Basit! I'm ${formData.name}. ${formData.message}`;
    window.open(
      `https://wa.me/${personalData.whatsapp}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  const handleEmail = () => {
    window.location.href = `mailto:${personalData.email}?subject=Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}`;
  };

  const resetForm = () => {
    setFormData({ name: "", email: "", message: "" });
    setStatus("idle");
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Contact"
          title="Let's Connect"
          subtitle="Have a project in mind? Let's discuss how we can work together."
        />

        <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {/* Contact form */}
          <GlassCard
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 p-8"
            hover={false}
          >
            <AnimatePresence mode="wait">
              {status !== "sent" ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-semibold uppercase tracking-wider text-muted mb-2">
                        Your Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-foreground placeholder-muted/50 focus:border-accent/50 focus:ring-1 focus:ring-accent/20 outline-none transition-all text-sm"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-semibold uppercase tracking-wider text-muted mb-2">
                        Email Address
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-foreground placeholder-muted/50 focus:border-accent/50 focus:ring-1 focus:ring-accent/20 outline-none transition-all text-sm"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold uppercase tracking-wider text-muted mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-foreground placeholder-muted/50 focus:border-accent/50 focus:ring-1 focus:ring-accent/20 outline-none transition-all text-sm resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <Button variant="primary" size="lg" onClick={() => {}}>
                    {status === "sending" ? (
                      <Loader2 size={16} className="animate-spin" />
                    ) : (
                      <Send size={16} />
                    )}
                    {status === "sending" ? "Sending..." : "Send Message"}
                  </Button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-10 space-y-6"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <CheckCircle2 size={56} className="mx-auto text-emerald-500" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Message Received!</h3>
                    <p className="text-sm text-muted">
                      Choose how you'd like to connect:
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-center gap-3">
                    <Button variant="primary" size="sm" onClick={handleWhatsApp}>
                      Chat on WhatsApp
                    </Button>
                    <Button variant="secondary" size="sm" onClick={handleEmail}>
                      Send via Email
                    </Button>
                  </div>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="text-xs text-muted hover:text-foreground transition-colors underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </GlassCard>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-4"
          >
            {[
              { icon: MapPin, label: "Location", value: personalData.address },
              { icon: Phone, label: "Phone", value: personalData.phone },
              { icon: Mail, label: "Email", value: personalData.email },
              { icon: Github, label: "GitHub", value: personalData.githubUsername, href: personalData.github },
            ].map((item) => (
              <GlassCard
                key={item.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-5 flex items-start gap-4"
              >
                <div className="p-2.5 rounded-xl bg-accent/10">
                  <item.icon size={18} className="text-accent" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-muted mb-0.5">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-foreground hover:text-accent transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm text-foreground">{item.value}</p>
                  )}
                </div>
              </GlassCard>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
