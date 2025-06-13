import { useState } from 'react';
import Globe from 'react-globe.gl';

import Button from '../components/Button.jsx';

// About section component
const About = () => {
  // State to track if email has been copied
  const [hasCopied, setHasCopied] = useState(false);

  // Handles copying email to clipboard
  const handleCopy = () => {
    navigator.clipboard.writeText(' Faizannazir100@gmail.com');
    setHasCopied(true);

    // Reset copy state after 2 seconds
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      {/* Main grid layout for About section */}
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        {/* Introduction block */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Hi, I’m Faizan</p>
              <p className="grid-subtext">
                {/* Brief experience summary */}
                With 1 years of experience, I have honed my skills in  AI, Frontend, Computer Vision and backend dev, creating dynamic
                and responsive websites.
              </p>
            </div>
          </div>
        </div>  

        {/* Tech stack block */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable
                applications
              </p>
            </div>
          </div>
        </div>

        {/* Globe visualization and location info */}
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              {/* Interactive globe component */}
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[
                  { lat: 24.8607, lng: 67.0011, text: 'Karachi, Pakistan', color: 'white', size: 5 },
                  // { lat: 24.8547, lng: 67.2066, text: 'Landhi, Karachi', color: 'yellow', size: 12 }
                ]}
              />
              </div>
              <div>
                <p className="grid-headtext">I’m very flexible with time zone communications & locations</p>
                <p className="grid-subtext">I&apos;m based in Karachi, Pakistan and open to remote work worldwide.</p>
                {/* Contact button */}
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        {/* Coding passion block */}
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                {/* Personal statement about coding */}
                I love solving problems and building things through code. Programming isn&apos;t just my
                profession—it&apos;s my passion. I enjoy exploring new technologies, and enhancing my skills.
              </p>
            </div>
          </div>
        </div>

        {/* Contact/email copy block */}
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              {/* Clickable email copy area */}
              <div className="copy-container" onClick={handleCopy}>
                {/* Show tick icon if copied, else show copy icon */}
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">Faizannazir100@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
