const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <a href="#" className="hover:underline">Terms & Conditions</a>
        <p>|</p>
        <a href="#" className="hover:underline">Privacy Policy</a>
      </div>
      {/* Here All the Icons used in footer */}
      <div className="flex gap-3">
        {/* anchor for the social icons */}
        {/* anchor for the github icon */}
        <a
          className="social-icon hover:scale-110 transition-transform duration-300"
          href="https://github.com/revfaiz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
        </a>
        {/* anchor for the twitter icon */}
        <a
          className="social-icon hover:scale-110 transition-transform duration-300"
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/assets/twitter.svg" alt="twitter" className="w-1/2 h-1/2" />
        </a>
        {/* anchor for the linkedin icon */}  
         <a
          className="social-icon hover:scale-110 transition-transform duration-300"
          href="https://linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/assets/linkedin.svg" alt="linkedin" className="w-1/2 h-1/2" />
        </a>
        
      </div>

      <p className="text-white-500">© 2025 Faizan. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
