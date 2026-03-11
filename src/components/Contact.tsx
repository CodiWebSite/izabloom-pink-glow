import { Mail, Phone, Instagram, Facebook } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const Contact = () => {
  return (
    <section className="py-20" style={{ background: "hsl(340 40% 97%)" }}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
              Hai să Creăm Împreună
            </h2>
            <p className="text-muted-foreground text-lg">
              Contactează-ne pentru comenzi personalizate sau întrebări
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="space-y-6">
              <div className="space-y-4">
                <Input placeholder="Numele tău" className="bg-card" />
                <Input type="email" placeholder="Email" className="bg-card" />
                <Input placeholder="Telefon" className="bg-card" />
                <Textarea placeholder="Mesajul tău..." className="bg-card min-h-32" />
              </div>
              <Button className="w-full" size="lg">
                Trimite Mesajul
              </Button>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Informații de Contact
                </h3>
                <div className="space-y-4">
                  <a
                    href="mailto:contact@izabloom.ro"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    contact@izabloom.ro
                  </a>
                  <a
                    href="tel:+40700000000"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    +40 700 000 000
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Urmărește-ne
                </h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
