import { Mail, MapPin, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h3 className="font-display text-2xl font-bold mb-2">
                Prof. Dhananjai K. Pandey
              </h3>
              <p className="text-primary-foreground/70 text-sm mb-4">
                Professor, School of Environmental Sciences
                <br />
                Jawaharlal Nehru University, New Delhi – 110067, India
              </p>
              <div className="flex flex-col gap-2 text-sm text-primary-foreground/70">
                <a
                  href="mailto:dhananjai@jnu.ac.in"
                  className="flex items-center gap-2 hover:text-primary-foreground transition-colors"
                >
                  <Mail size={14} />
                  dhananjai@jnu.ac.in
                </a>
                <span className="flex items-center gap-2">
                  <MapPin size={14} />
                  Room 108B, SES Building
                </span>
                <a
                  href="https://www.jnu.ac.in/content/dhananjai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-primary-foreground transition-colors"
                >
                  <ExternalLink size={14} />
                  JNU Faculty Profile
                </a>
              </div>
            </div>

            <div className="md:text-right">
              <p className="text-primary-foreground/50 text-xs leading-relaxed">
                School of Environmental Sciences
                <br />
                Jawaharlal Nehru University
                <br />
                New Mehrauli Road, New Delhi – 110067
                <br />
                India
              </p>
            </div>
          </div>

          <div className="border-t border-primary-foreground/10 mt-8 pt-6 text-center">
            <p className="text-xs text-primary-foreground/40">
              © {new Date().getFullYear()} Prof. Dhananjai K. Pandey. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
