import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { ReactComponent as AdobeLogo } from '../assets/adobe-logo.svg';
import { ReactComponent as BehanceFullLogo } from '../assets/behance-full-logo.svg';
import { ReactComponent as Pinterest } from '../assets/pinterest.svg';
import footerData from '../data/footerData';
import { footerLinks, languageOptions } from '../constants';

const Footer = () => {
  const iconMapping = {
    Instagram: <Instagram height={16} width={16} />,
    Twitter: <Twitter height={16} width={16} />,
    Pinterest: <Pinterest height={16} width={16} fill="#FFF" />,
    Facebook: <Facebook height={16} width={16} />,
    LinkedIn: <Linkedin height={16} width={16} />,
  };

  return (
    <footer className="bg-[#191919] pt-[60px] px-[35px] pb-10 text-white w-full">
      <div id="behance-full-logo" className="w-full mb-[60px]">
        <BehanceFullLogo
          fill="#FFF"
          height={32}
          width={160}
          className="mx-auto"
        />
      </div>

      <div className="grid grid-cols-12 gap-x-4 gap-y-8 py-16">
        {footerData.map((section) => {
          const { sectionHeading, sectionContent } = section;

          return (
            <div
              id="footer-menu-container"
              className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3"
              key={sectionHeading}
            >
              <div
                id="section-heading"
                className="text-base font-bold mb-[40px] text-left"
              >
                {sectionHeading}
              </div>
              <ul id="section-content" className="list-none">
                {sectionContent.map((content) => {
                  return (
                    <li
                      className="text-base font-normal mb-[19px] flex justify-start cursor-pointer"
                      tabIndex={0}
                      key={content}
                    >
                      {iconMapping[content] && (
                        <span className="w-fit my-auto mr-2">
                          {iconMapping[content]}
                        </span>
                      )}
                      <div className="whitespace-nowrap max-w-52 transition-all duration-300 ease-in-out hover:underline">
                        {content}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>

      <hr />

      <div className="pt-9 pb-3 text-[13px] tracking-wider">
        <div className="grid grid-cols-12 pb-4 sm:pb-3">
          <span className="flex justify-center xs:pb-3 col-span-12 sm:col-span-3 my-auto">
            <AdobeLogo width={80} height={20} fill="#FFF" />
          </span>
          <div className="xs:pt-3 my-auto col-span-12 sm:col-span-9 sm:text-left">
            &#169; 2024 Adobe Inc. All rights reserved.
          </div>
        </div>

        <nav>
          <ul className="flex flex-wrap justify-evenly sm:pt-3">
            <li className="p-2" key="Language">
              <select
                name="language"
                id="language"
                className="bg-[#191919] cursor-pointer"
              >
                {languageOptions.map((lang, langIndex) => {
                  return (
                    <option value={lang} key={langIndex}>
                      {lang}
                    </option>
                  );
                })}
              </select>
            </li>
            {footerLinks.map((link) => {
              return (
                <li key={link} className="p-2">
                  <a href="/" className="hover:underline">
                    {link}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
