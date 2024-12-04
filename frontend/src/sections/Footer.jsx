import { Logo } from "../images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className='max-container bg-[#e1e1e1]'>
      <div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col px-20 pt-10'>
        <div className='flex flex-col items-start'>
          <a href='/'>
            <img
              src={Logo}
              alt='logo'
              width={120}
              height={46}
              className='m-0'
            />
          </a>
          <p className='mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm'>
          Get ready for the new term with advanced traffic simulation tools.
          Find Your Perfect Solution Online.
          </p>
          <div className='flex items-center gap-5 mt-8'>
            {socialMedia.map((icon) => (
              <div
                className={`flex justify-center items-center w-12 h-12 bg-white rounded-full hover:bg-[${icon.color}]`}
                key={icon.alt}
              >
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>

        <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'>
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className='font-montserrat text-2xl leading-normal font-medium mb-6 text-[#1A2B6D]'>
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    className='mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray'
                    key={link.name}
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className='flex justify-between text-white-400 mt-12 max-sm:flex-col max-sm:items-center px-20'>
        <div className='flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer'>
         
          
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;