import { Mail, Phone, Instagram, Facebook, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { motion } from "framer-motion";
import CrescentMoon from "./CrescentMoon";

const Contact = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-primary/5 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <CrescentMoon size={32} className="text-primary" />
          </div>
          <span className="text-sm font-medium text-primary tracking-widest uppercase">Contact</span>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mt-3 mb-5">
            Hai să Creăm Împreună
          </h2>
          <p className="text-muted-foreground text-lg">
            Contactează-ne pentru comenzi personalizate sau întrebări
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-3 glass rounded-2xl p-8"
            >
              <div className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input placeholder="Numele tău" className="bg-background/50 rounded-xl h-12 border-border/50" />
                  <Input type="email" placeholder="Email" className="bg-background/50 rounded-xl h-12 border-border/50" />
                </div>
                <Input placeholder="Telefon" className="bg-background/50 rounded-xl h-12 border-border/50" />
                <Textarea placeholder="Mesajul tău..." className="bg-background/50 rounded-xl min-h-32 border-border/50" />
                <Button className="w-full h-12 rounded-xl glow-sm" size="lg">
                  <Send className="w-4 h-4 mr-2" />
                  Trimite Mesajul
                </Button>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="glass rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-5">
                  Informații de Contact
                </h3>
                <div className="space-y-4">
                  <a href="mailto:contact@izabloom.ro" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Mail className="w-4 h-4" />
                    </div>
                    contact@izabloom.ro
                  </a>
                  <a href="tel:+40700000000" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Phone className="w-4 h-4" />
                    </div>
                    +40 700 000 000
                  </a>
                </div>
              </div>

              <div className="glass rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-5">
                  Urmărește-ne
                </h3>
                <div className="flex gap-3">
                  <a href="#" className="w-12 h-12 rounded-xl bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300 hover:scale-105">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-xl bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300 hover:scale-105">
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
