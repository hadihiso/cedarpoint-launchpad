import { Facebook, Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
            <p className="text-background/80 mb-6">
              Ready to start your tech journey? Contact us today!
            </p>
          </div>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-background/10 hover:bg-background/20 rounded-full flex items-center justify-center transition-colors group"
            >
              <Instagram className="h-5 w-5 group-hover:scale-110 transition-transform" />
            </a>
            
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-background/10 hover:bg-background/20 rounded-full flex items-center justify-center transition-colors group"
            >
              <Facebook className="h-5 w-5 group-hover:scale-110 transition-transform" />
            </a>
            
            <a 
              href="mailto:info@cedarpointlearning.com"
              className="w-12 h-12 bg-background/10 hover:bg-background/20 rounded-full flex items-center justify-center transition-colors group"
            >
              <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
            </a>
            
            <a 
              href="tel:+1234567890"
              className="w-12 h-12 bg-background/10 hover:bg-background/20 rounded-full flex items-center justify-center transition-colors group"
            >
              <Phone className="h-5 w-5 group-hover:scale-110 transition-transform" />
            </a>
          </div>
          
          <div className="border-t border-background/20 pt-8">
            <div className="mb-4">
              <h3 className="text-xl font-bold">CedarPoint Learning</h3>
              <p className="text-background/60 text-sm">Empowering the next generation of tech professionals</p>
            </div>
            
            <p className="text-background/60 text-sm">
              © 2025 CedarPoint Learning. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;