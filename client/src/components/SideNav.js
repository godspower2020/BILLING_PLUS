import React from 'react';

const SideNav = () => {
  return(
    <>
        {/* sidebar @s */}
        <div className="nk-sidebar nk-sidebar-fixed is-dark " data-content="sidebarMenu">
        <div className="nk-sidebar-element nk-sidebar-head">
            <div className="nk-menu-trigger">
            <a href="#" className="nk-nav-toggle nk-quick-nav-icon d-xl-none" data-target="sidebarMenu"><em className="icon ni ni-arrow-left" /></a>
            <a href="#" className="nk-nav-compact nk-quick-nav-icon d-none d-xl-inline-flex" data-target="sidebarMenu"><em className="icon ni ni-menu" /></a>
            </div>
            <div className="nk-sidebar-brand">
            <a href="html/index.html" className="logo-link nk-sidebar-logo">
                <img className="logo-light logo-img" src="./images/billing-plus.png" srcSet="./images/billing-plus2x.png 2x" alt="logo" />
                <img className="logo-dark logo-img" src="./images/billing-plus.png" srcSet="./images/billing-plus2x.png 2x" alt="logo-dark" />
            </a>
            <a href="html/index.html" className="logo-link nk-sidebar-logo">
                <img className="logo-light logo-img logo-v2" src="./images/billing.png" srcSet="./images/billing2x.png 2x" alt="logo2" />
            </a>
            </div>
        </div>{/* .nk-sidebar-element */}
        <div className="nk-sidebar-element nk-sidebar-body">
            <div className="nk-sidebar-content">
            <div className="nk-sidebar-menu" data-simplebar>
                <ul className="nk-menu">
                <li className="nk-menu-item">
                    <a href="html/crm/index.html" className="nk-menu-link">
                    <span className="nk-menu-icon"><em className="icon ni ni-dashboard-fill" /></span>
                    <span className="nk-menu-text">Home</span>
                    </a>
                </li>{/* .nk-menu-item */}
                <li className="nk-menu-item has-sub">
                    <a href="#" className="nk-menu-link nk-menu-toggle">
                    <span className="nk-menu-icon"><em className="icon ni ni-todo" /></span>
                    <span className="nk-menu-text">Invoices</span>
                    </a>
                    {/*<ul class="nk-menu-sub">
                                        <li class="nk-menu-item">
                                            <a href="html/crm/people.html" class="nk-menu-link"><span class="nk-menu-text">People</span></a>
                                        </li>
                                        <li class="nk-menu-item">
                                            <a href="html/crm/organizations.html" class="nk-menu-link"><span class="nk-menu-text">Organization</span></a>
                                        </li>
                                    </ul><!-- .nk-menu-sub */}
                </li>{/* .nk-menu-item */}
                <li className="nk-menu-item">
                    <a href="html/crm/customer-list.html" className="nk-menu-link">
                    <span className="nk-menu-icon"><em className="icon ni ni-file-text-fill" /></span>
                    <span className="nk-menu-text">Reciepts</span>
                    </a>
                </li>{/* .nk-menu-item */}
                <li className="nk-menu-item has-sub">
                    <a href="#" className="nk-menu-link nk-menu-toggle">
                    <span className="nk-menu-icon"><em className="icon ni ni-users" /></span>
                    <span className="nk-menu-text">Clients</span>
                    </a>
                    {/*<ul class="nk-menu-sub">
                                        <li class="nk-menu-item">
                                            <a href="html/crm/invoices.html" class="nk-menu-link"><span class="nk-menu-text">Invoices</span></a>
                                        </li>
                                        <li class="nk-menu-item">
                                            <a href="html/crm/payment.html" class="nk-menu-link"><span class="nk-menu-text">Payment</span></a>
                                        </li>
                                        <li class="nk-menu-item">
                                            <a href="html/crm/recent-sale.html" class="nk-menu-link"><span class="nk-menu-text">Recent Sale</span></a>
                                        </li>
                                        <li class="nk-menu-item">
                                            <a href="html/crm/estimates.html" class="nk-menu-link"><span class="nk-menu-text">Estimates</span></a>
                                        </li>
                                        <li class="nk-menu-item">
                                            <a href="html/crm/expenses.html" class="nk-menu-link"><span class="nk-menu-text">Expenses</span></a>
                                        </li>
                                    </ul><!-- .nk-menu-sub */}
                </li>{/* .nk-menu-item */}
                <li className="nk-menu-item has-sub">
                    <a href="#" className="nk-menu-link nk-menu-toggle">
                    <span className="nk-menu-icon"><em className="icon ni ni-package-fill" /></span>
                    <span className="nk-menu-text">Products</span>
                    </a>
                    {/*<ul class="nk-menu-sub">
                                        <li class="nk-menu-item">
                                            <a href="html/crm/deposit.html" class="nk-menu-link"><span class="nk-menu-text">Recent Deposits</span></a>
                                        </li>
                                        <li class="nk-menu-item">
                                            <a href="html/crm/transaction.html" class="nk-menu-link"><span class="nk-menu-text"> All Transaction</span></a>
                                        </li>
                                        <li class="nk-menu-item">
                                            <a href="html/crm/transfer-report.html" class="nk-menu-link"><span class="nk-menu-text">Transfer Report</span></a>
                                        </li>
                                    </ul><!-- .nk-menu-sub */}
                </li>{/* .nk-menu-item */}
                <li className="nk-menu-item has-sub">
                    <a href="#" className="nk-menu-link nk-menu-toggle">
                    <span className="nk-menu-icon"><em className="icon ni ni-wallet" /></span>
                    <span className="nk-menu-text">Expenses</span>
                    </a>
                    {/* <ul class="nk-menu-sub">
                                        <li class="nk-menu-item">
                                            <a href="html/crm/running-task.html" class="nk-menu-link"><span class="nk-menu-text">Running Task</span></a>
                                        </li>
                                        <li class="nk-menu-item">
                                            <a href="html/crm/archive-task.html" class="nk-menu-link"><span class="nk-menu-text">Archived Task</span></a>
                                        </li>
                                    </ul><!-- .nk-menu-sub */}
                </li>{/* .nk-menu-item */}
                {/*<li class="nk-menu-item has-sub">
                                    <a href="#" class="nk-menu-link nk-menu-toggle">
                                        <span class="nk-menu-icon"><em class="icon ni ni-coin"></em></span>
                                        <span class="nk-menu-text">Settings</span>
                                    </a>
                                    <ul class="nk-menu-sub">
                                        <li class="nk-menu-item">
                                            <a href="html/crm/client-payment.html" class="nk-menu-link"><span class="nk-menu-text">Client Payment</span></a>
                                        </li>
                                        <li class="nk-menu-item">
                                            <a href="html/crm/expense-management.html" class="nk-menu-link"><span class="nk-menu-text">Expense Management</span></a>
                                        </li>
                                    </ul> 
                                </li>
                                <li class="nk-menu-item has-sub">
                                    <a href="#" class="nk-menu-link nk-menu-toggle">
                                        <span class="nk-menu-icon"><em class="icon ni ni-truck"></em></span>
                                        <span class="nk-menu-text">Product Management</span>
                                    </a>
                                    <ul class="nk-menu-sub">
                                        <li class="nk-menu-item">
                                            <a href="html/crm/products.html" class="nk-menu-link"><span class="nk-menu-text">Products</span></a>
                                        </li>
                                        <li class="nk-menu-item">
                                            <a href="html/crm/warehouse.html" class="nk-menu-link"><span class="nk-menu-text">Warehouse</span></a>
                                        </li>
                                        <li class="nk-menu-item">
                                            <a href="html/crm/product-transfer.html" class="nk-menu-link"><span class="nk-menu-text">Product Transfer</span></a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nk-menu-item has-sub">
                                    <a href="#" class="nk-menu-link nk-menu-toggle">
                                        <span class="nk-menu-icon"><em class="icon ni ni-growth-fill"></em></span>
                                        <span class="nk-menu-text">Report</span>
                                    </a>
                                    <ul class="nk-menu-sub">
                                        <li class="nk-menu-item">
                                            <a href="html/crm/dealing-info.html" class="nk-menu-link"><span class="nk-menu-text">Dealing Info</span></a>
                                        </li>
                                        <li class="nk-menu-item">
                                            <a href="html/crm/client-report.html" class="nk-menu-link"><span class="nk-menu-text">Client Report</span></a>
                                        </li>
                                        <li class="nk-menu-item">
                                            <a href="html/crm/expense-report.html" class="nk-menu-link"><span class="nk-menu-text">Expense Report</span></a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nk-menu-item">
                                    <a href="html/crm/employee.html" class="nk-menu-link">
                                        <span class="nk-menu-icon"><em class="icon ni ni-layers-fill"></em></span>
                                        <span class="nk-menu-text">Employees</span>
                                    </a>
                                </li>
                                <li class="nk-menu-item">
                                    <a href="html/crm/projects.html" class="nk-menu-link">
                                        <span class="nk-menu-icon"><em class="icon ni ni-list-index-fill"></em></span>
                                        <span class="nk-menu-text">Projects</span>
                                    </a>
                                </li>
                                <li class="nk-menu-item has-sub">
                                    <a href="#" class="nk-menu-link nk-menu-toggle">
                                        <span class="nk-menu-icon"><em class="icon ni ni-coins"></em></span>
                                        <span class="nk-menu-text">Payroll</span>
                                    </a>
                                    <ul class="nk-menu-sub">
                                        <li class="nk-menu-item">
                                            <a href="html/crm/salary-grade.html" class="nk-menu-link"><span class="nk-menu-text">Salary grade</span></a>
                                        </li>
                                        <li class="nk-menu-item">
                                            <a href="html/crm/employee-salary-list.html" class="nk-menu-link"><span class="nk-menu-text">Employee Salary List</span></a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nk-menu-item">
                                    <a href="html/crm/time-history.html" class="nk-menu-link">
                                        <span class="nk-menu-icon"><em class="icon ni ni-calendar-check-fill"></em></span>
                                        <span class="nk-menu-text">Attendance</span>
                                    </a>
                                </li>
                                <li class="nk-menu-item">
                                    <a href="html/crm/subscription.html" class="nk-menu-link">
                                        <span class="nk-menu-icon"><em class="icon ni ni-invest"></em></span>
                                        <span class="nk-menu-text">Subscription</span>
                                    </a>
                                </li>
                                <li class="nk-menu-item">
                                    <a href="html/crm/notice-board.html" class="nk-menu-link">
                                        <span class="nk-menu-icon"><em class="icon ni ni-notice"></em></span>
                                        <span class="nk-menu-text">Notice Board</span>
                                    </a>
                                </li> 
                                <li class="nk-menu-item">
                                    <a href="html/crm/support.html" class="nk-menu-link">
                                        <span class="nk-menu-icon"><em class="icon ni ni-chat-circle-fill"></em></span>
                                        <span class="nk-menu-text">Support</span>
                                    </a>
                                </li> .nk-menu-item */}
                <li className="nk-menu-item">
                    <a href="html/crm/settings.html" className="nk-menu-link">
                    <span className="nk-menu-icon"><em className="icon ni ni-setting-alt-fill" /></span>
                    <span className="nk-menu-text">Settings</span>
                    </a>
                </li>{/* .nk-menu-item */}
                {/*<li class="nk-menu-heading">
                                    <h6 class="overline-title text-primary-alt">Return to</h6>
                                </li> 
                                <li class="nk-menu-item">
                                    <a href="html/index.html" class="nk-menu-link">
                                        <span class="nk-menu-icon"><em class="icon ni ni-dashlite-alt"></em></span>
                                        <span class="nk-menu-text">Main Dashboard</span>
                                    </a>
                                </li>
                                <li class="nk-menu-item">
                                    <a href="html/components.html" class="nk-menu-link">
                                        <span class="nk-menu-icon"><em class="icon ni ni-layers-fill"></em></span>
                                        <span class="nk-menu-text">All Components</span>
                                    </a>
                                </li> .nk-menu-item */}
                </ul>{/* .nk-menu */}
            </div>{/* .nk-sidebar-menu */}
            </div>{/* .nk-sidebar-content */}
        </div>{/* .nk-sidebar-element */}
        </div>
        {/* sidebar @e */}
    </>
  )
};

export default SideNav;
