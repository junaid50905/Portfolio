export default function Footer() {
  return (
    <footer className="bg-white border-t pt-16 pb-10">
      {/* Newsletter Section */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-blue-600 text-white rounded-2xl p-10 flex flex-col md:flex-row items-center gap-10">
          
          {/* Left Image */}
          <div className="flex justify-center w-full md:w-1/2">
            <img
              src="/footer-machine.png"
              alt="clean-machine"
              className="w-72 drop-shadow-xl"
            />
          </div>

          {/* Right Content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-semibold leading-snug">
              Subscribe to our newsletter to get <br /> updates to our latest collections
            </h2>

            <p className="mt-2 text-sm opacity-90">
              Get 20% off on your first order just by subscribing to our newsletter
            </p>

            <div className="mt-6 flex bg-white rounded-full p-2 items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-full text-gray-700 outline-none"
              />
              <button className="bg-gray-800 text-white px-6 py-2 rounded-full text-sm hover:bg-black transition">
                Subscribe
              </button>
            </div>

            <p className="text-xs mt-2 opacity-70">
              You will be able to unsubscribe at any time. <br />
              Read our privacy policy <a href="#" className="underline">here</a>
            </p>
          </div>

        </div>
      </div>

      {/* Footer Links */}
      <div className="max-w-7xl mx-auto px-6 mt-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Brand */}
        <div>
          <h3 className="text-xl font-bold flex items-center gap-2">
            <span className="text-blue-600 text-3xl">🧼</span> Stay Clean
          </h3>
          <p className="mt-3 text-sm text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sit aliquam,
            purus sit amet luctus venenatis.
          </p>

          <div className="flex gap-4 mt-4 text-gray-600">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-linkedin"></i>
          </div>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-3">Company</h4>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Community</a></li>
            <li><a href="#">Testimonial</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-3">Support</h4>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Tweet @ Us</a></li>
            <li><a href="#">Webinars</a></li>
            <li><a href="#">Feedback</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-3">Contact Us</h4>
          <ul className="space-y-3 text-gray-600 text-sm">
            <li>📞 +91 98765 4321 54</li>
            <li>📧 support@mail.com</li>
          </ul>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="border-t mt-12 pt-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between text-sm text-gray-600">
          <p>© Copyright by CodedUI. All rights reserved.</p>
          <div className="flex gap-6 mt-3 md:mt-0">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <a href="#">Legal</a>
            <a href="#">Site Map</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
