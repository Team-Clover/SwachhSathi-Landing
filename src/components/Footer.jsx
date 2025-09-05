const Footer = () => {
  return (
    <footer className="bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Logo + Description */}
        <div>
          <h2
            className="text-3xl font-extrabold
                       bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-400 
                       bg-clip-text text-transparent"
          >
            SwachhSathi
          </h2>
          <p className="mt-4 text-gray-700 text-sm">
            Revolutionizing waste management through smart technology and community engagement.
            Join us in creating a cleaner, more sustainable future for all.
          </p>

          <div className="mt-4 space-y-2 text-sm">
            <p>📧 support@swachhsathi.com</p>
            <p>📞 +91 1800-123-4567</p>
            <p>📍 Mumbai, Maharashtra, India</p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-700">
            <li>About Us</li>
            <li>Features</li>
            <li>How It Works</li>
            <li>Impact</li>
            <li>Testimonials</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-bold text-lg mb-3">Support</h3>
          <ul className="space-y-2 text-gray-700">
            <li>Help Center</li>
            <li>FAQs</li>
            <li>Contact Support</li>
            <li>User Guide</li>
            <li>Training</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-bold text-lg mb-3">Legal</h3>
          <ul className="space-y-2 text-gray-700">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Data Protection</li>
            <li>Cookie Policy</li>
            <li>Compliance</li>
          </ul>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-gray-100 py-8 px-6 text-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Stay Updated</h3>
        <p className="text-sm text-gray-600 mb-4">
          Subscribe to our newsletter for the latest updates on sustainability initiatives and app features.
        </p>
        <div className="flex justify-center gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 border rounded-lg w-64 focus:outline-none"
          />
          <button className="bg-gradient-to-r from-pink-500 to-cyan-400 text-white px-4 py-2 rounded-lg font-semibold">
            Subscribe
          </button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center py-6 text-sm border-t border-gray-200">
        <p className="text-gray-600">
          © 2024{" "}
          <span
            className="bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-400 
                       bg-clip-text text-transparent font-bold"
          >
            SwachhSathi
          </span>
          . All rights reserved. Made with 💚 for a sustainable future.
        </p>

        {/* Socials */}
        <div className="mt-4 flex justify-center gap-5 text-gray-600">
          <a href="#">🌐</a>
          <a href="#">🐦</a>
          <a href="#">📸</a>
          <a href="#">💼</a>
          <a href="#">▶️</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
