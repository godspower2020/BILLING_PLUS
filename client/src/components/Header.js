import React from 'react';

const Header = () => {
  return(
    <>
        {/* main header @s */}
        <div className="nk-header nk-header-fixed is-light">
            <div className="container-fluid">
                <div className="nk-header-wrap">
                <div className="nk-menu-trigger d-xl-none ml-n1">
                    <a href="/" className="nk-nav-toggle nk-quick-nav-icon" data-target="sidebarMenu"><em className="icon ni ni-menu" /></a>
                </div>
                <div className="nk-header-brand d-xl-none">
                    <a href="html/index.html" className="logo-link">
                    <img className="logo-light logo-img" src="./images/logo.png" srcSet="./images/logo2x.png 2x" alt="logo" />
                    <img className="logo-dark logo-img" src="./images/logo-dark.png" srcSet="./images/logo-dark2x.png 2x" alt="logo-dark" />
                    </a>
                </div>{/* .nk-header-brand */}
                <div className="nk-header-news d-none d-xl-block">
                    <div className="nk-news-list">
                    <a className="nk-news-item" href="/">
                        <div className="nk-news-icon">
                        <em className="icon ni ni-card-view" />
                        </div>
                        <div className="nk-news-text">
                        <p>Do you know the latest update of 2021? <span> A overview of our is now available on YouTube</span></p>
                        <em className="icon ni ni-external" />
                        </div>
                    </a>
                    </div>
                </div>{/* .nk-header-news */}
                <div className="nk-header-tools">
                    <ul className="nk-quick-nav">
                    <li className="dropdown language-dropdown d-none d-sm-block mr-n1">
                        <a href="/" className="dropdown-toggle nk-quick-nav-icon" data-toggle="dropdown">
                        <div className="user-avatar sm border border-light">
                            <img src="./images/flags/english-sq.png" alt="flag" />
                        </div>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right dropdown-menu-s1">
                        <ul className="language-list">
                            <li>
                            <a href="/" className="language-item">
                                <img src="./images/flags/english.png" alt="english" className="language-flag" />
                                <span className="language-name">English</span>
                            </a>
                            </li>
                            <li>
                            <a href="/" className="language-item">
                                <img src="./images/flags/spanish.png" alt="spanish" className="language-flag" />
                                <span className="language-name">Español</span>
                            </a>
                            </li>
                            <li>
                            <a href="/" className="language-item">
                                <img src="./images/flags/french.png" alt="french" className="language-flag" />
                                <span className="language-name">Français</span>
                            </a>
                            </li>
                            <li>
                            <a href="/" className="language-item">
                                <img src="./images/flags/turkey.png" alt="turkish" className="language-flag" />
                                <span className="language-name">Türkçe</span>
                            </a>
                            </li>
                        </ul>
                        </div>
                    </li>{/* .dropdown */}
                    <li className="dropdown user-dropdown">
                        <a href="/" className="dropdown-toggle" data-toggle="dropdown">
                        <div className="user-toggle">
                            <div className="user-avatar sm">
                            <em className="icon ni ni-user-alt" />
                            </div>
                            <div className="user-info d-none d-md-block">
                            <div className="user-status">Administrator</div>
                            <div className="user-name dropdown-indicator">Abu Bin Ishityak</div>
                            </div>
                        </div>
                        </a>
                        <div className="dropdown-menu dropdown-menu-md dropdown-menu-right dropdown-menu-s1">
                        <div className="dropdown-inner user-card-wrap bg-lighter d-none d-md-block">
                            <div className="user-card">
                            <div className="user-avatar">
                                <span>AB</span>
                            </div>
                            <div className="user-info">
                                <span className="lead-text">Abu Bin Ishtiyak</span>
                                <span className="sub-text">info@softnio.com</span>
                            </div>
                            </div>
                        </div>
                        <div className="dropdown-inner">
                            <ul className="link-list">
                            <li><a href="html/user-profile-regular.html"><em className="icon ni ni-user-alt" /><span>View Profile</span></a></li>
                            <li><a href="html/user-profile-setting.html"><em className="icon ni ni-setting-alt" /><span>Account Setting</span></a></li>
                            <li><a href="html/user-profile-activity.html"><em className="icon ni ni-activity-alt" /><span>Login Activity</span></a></li>
                            <li><a className="dark-switch" href="/"><em className="icon ni ni-moon" /><span>Dark Mode</span></a></li>
                            </ul>
                        </div>
                        <div className="dropdown-inner">
                            <ul className="link-list">
                            <li><a href="/"><em className="icon ni ni-signout" /><span>Sign out</span></a></li>
                            </ul>
                        </div>
                        </div>
                    </li>{/* .dropdown */}
                    <li className="dropdown notification-dropdown mr-n1">
                        <a href="/" className="dropdown-toggle nk-quick-nav-icon" data-toggle="dropdown">
                        <div className="icon-status icon-status-info"><em className="icon ni ni-bell" /></div>
                        </a>
                        <div className="dropdown-menu dropdown-menu-xl dropdown-menu-right dropdown-menu-s1">
                        <div className="dropdown-head">
                            <span className="sub-title nk-dropdown-title">Notifications</span>
                            <a href="/">Mark All as Read</a>
                        </div>
                        <div className="dropdown-body">
                            <div className="nk-notification">
                            <div className="nk-notification-item dropdown-inner">
                                <div className="nk-notification-icon">
                                <em className="icon icon-circle bg-warning-dim ni ni-curve-down-right" />
                                </div>
                                <div className="nk-notification-content">
                                <div className="nk-notification-text">You have requested to <span>Widthdrawl</span></div>
                                <div className="nk-notification-time">2 hrs ago</div>
                                </div>
                            </div>
                            <div className="nk-notification-item dropdown-inner">
                                <div className="nk-notification-icon">
                                <em className="icon icon-circle bg-success-dim ni ni-curve-down-left" />
                                </div>
                                <div className="nk-notification-content">
                                <div className="nk-notification-text">Your <span>Deposit Order</span> is placed</div>
                                <div className="nk-notification-time">2 hrs ago</div>
                                </div>
                            </div>
                            <div className="nk-notification-item dropdown-inner">
                                <div className="nk-notification-icon">
                                <em className="icon icon-circle bg-warning-dim ni ni-curve-down-right" />
                                </div>
                                <div className="nk-notification-content">
                                <div className="nk-notification-text">You have requested to <span>Widthdrawl</span></div>
                                <div className="nk-notification-time">2 hrs ago</div>
                                </div>
                            </div>
                            <div className="nk-notification-item dropdown-inner">
                                <div className="nk-notification-icon">
                                <em className="icon icon-circle bg-success-dim ni ni-curve-down-left" />
                                </div>
                                <div className="nk-notification-content">
                                <div className="nk-notification-text">Your <span>Deposit Order</span> is placed</div>
                                <div className="nk-notification-time">2 hrs ago</div>
                                </div>
                            </div>
                            <div className="nk-notification-item dropdown-inner">
                                <div className="nk-notification-icon">
                                <em className="icon icon-circle bg-warning-dim ni ni-curve-down-right" />
                                </div>
                                <div className="nk-notification-content">
                                <div className="nk-notification-text">You have requested to <span>Widthdrawl</span></div>
                                <div className="nk-notification-time">2 hrs ago</div>
                                </div>
                            </div>
                            <div className="nk-notification-item dropdown-inner">
                                <div className="nk-notification-icon">
                                <em className="icon icon-circle bg-success-dim ni ni-curve-down-left" />
                                </div>
                                <div className="nk-notification-content">
                                <div className="nk-notification-text">Your <span>Deposit Order</span> is placed</div>
                                <div className="nk-notification-time">2 hrs ago</div>
                                </div>
                            </div>
                            </div>{/* .nk-notification */}
                        </div>{/* .nk-dropdown-body */}
                        <div className="dropdown-foot center">
                            <a href="/">View All</a>
                        </div>
                        </div>
                    </li>{/* .dropdown */}
                    </ul>{/* .nk-quick-nav */}
                </div>{/* .nk-header-tools */}
                </div>{/* .nk-header-wrap */}
            </div>{/* .container-fliud */}
        </div>
        {/* main header @e */}
    </>
  )
};

export default Header;
