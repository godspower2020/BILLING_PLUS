import React from 'react';

const Footer = () => {
  return(
    <>
      {/* footer @s */}
        <div className="nk-footer">
          <div className="container-fluid">
            <div className="nk-footer-wrap">
              <div className="nk-footer-copyright"> © 2021 DashLite. Template by <a href="https://softnio.com" target="_blank" rel="noreferrer">Softnio</a>
              </div>
              <div className="nk-footer-links">
                <ul className="nav nav-sm">
                  <li className="nav-item dropup">
                    <a href="/" className="dropdown-toggle dropdown-indicator has-indicator nav-link" data-toggle="dropdown" data-offset="0,10"><span>English</span></a>
                    <div className="dropdown-menu dropdown-menu-sm dropdown-menu-right">
                      <ul className="language-list">
                        <li>
                          <a href="#" alt="english" className="language-item">
                            <span className="language-name">English</span>
                          </a>
                        </li>
                        <li>
                          <a href="#" alt="spanish" className="language-item">
                            <span className="language-name">Español</span>
                          </a>
                        </li>
                        <li>
                          <a href="#" alt="french" className="language-item">
                            <span className="language-name">Français</span>
                          </a>
                        </li>
                        <li>
                          <a href="#" alt="turkish" className="language-item">
                            <span className="language-name">Türkçe</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a href="#" data-toggle="modal" data-target="#region" className="nav-link"><em className="icon ni ni-globe" /><span className="ml-1">Select Region</span></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      {/* footer @e */}
    </>
  )
};

export default Footer;
