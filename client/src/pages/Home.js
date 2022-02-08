import React from 'react';
import { SideNav, Header, Footer } from '../components';

const Home = () => {
  return(
    <>
      <div className="nk-app-root">
        {/* main @s */}
        <div className="nk-main ">
          {/* sidebar @s */}
          <SideNav />
          {/* sidebar @e */}
          <div className="nk-wrap ">
            {/* main header @s */}
            <Header />
            {/* main header @e */}
            {/* content @s */}
            <div className="nk-content ">
              <div className="container-fluid">
                <div className="nk-content-inner">
                  <div className="nk-content-body">
                    <div className="nk-block-head nk-block-head-sm">
                      <div className="nk-block-between">
                        <div className="nk-block-head-content">
                          <h3 className="nk-block-title page-title">CRM Dashboard</h3>
                          <div className="nk-block-des text-soft">
                            <p>Welcome to CRM Dashboard.</p>
                          </div>
                        </div>{/* .nk-block-head-content */}
                        <div className="nk-block-head-content">
                          <div className="toggle-wrap nk-block-tools-toggle">
                            <a href="#" className="btn btn-icon btn-trigger toggle-expand mr-n1" data-target="pageMenu"><em className="icon ni ni-more-v" /></a>
                            <div className="toggle-expand-content" data-content="pageMenu">
                              <ul className="nk-block-tools g-3">
                                <li>
                                  <div className="dropdown">
                                    <a href="#" className="dropdown-toggle btn btn-white btn-dim btn-outline-light" data-toggle="dropdown"><em className="d-none d-sm-inline icon ni ni-calender-date" /><span><span className="d-none d-md-inline">Last</span> 30 Days</span><em className="dd-indc icon ni ni-chevron-right" /></a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                      <ul className="link-list-opt no-bdr">
                                        <li><a href="#"><span>Last 30 Days</span></a></li>
                                        <li><a href="#"><span>Last 6 Months</span></a></li>
                                        <li><a href="#"><span>Last 1 Years</span></a></li>
                                      </ul>
                                    </div>
                                  </div>
                                </li>
                                <li className="nk-block-tools-opt"><a href="#" className="btn btn-primary"><em className="icon ni ni-reports" /><span>Reports</span></a></li>
                              </ul>
                            </div>
                          </div>
                        </div>{/* .nk-block-head-content */}
                      </div>{/* .nk-block-between */}
                    </div>
                    <div className="nk-block">
                      <div className="row g-gs">
                        <div className="col-md-6 col-lg-5">
                          <div className="card card-bordered h-100">
                            <div className="card-inner">
                              <div className="card-title-group align-start pb-3 g-2">
                                <div className="card-title card-title-sm">
                                  <h6 className="title">Sales Revenue</h6>
                                  <p>In last 30 days revenue from subscription.</p>
                                </div>
                                <div className="card-tools">
                                  <em className="card-hint icon ni ni-help" data-toggle="tooltip" data-placement="left" title="Customer of this month" />
                                </div>
                              </div>
                              <div className="analytic-au">
                                <div className="analytic-data-group analytic-au-group g-3">
                                  <div className="analytic-data analytic-au-data">
                                    <div className="title">Monthly</div>
                                    <div className="amount">9.28K</div>
                                    <div className="change up"><em className="icon ni ni-arrow-long-up" />4.63%</div>
                                  </div>
                                  <div className="analytic-data analytic-au-data">
                                    <div className="title">Weekly</div>
                                    <div className="amount">2.69K</div>
                                    <div className="change down"><em className="icon ni ni-arrow-long-down" />1.92%</div>
                                  </div>
                                  <div className="analytic-data analytic-au-data">
                                    <div className="title">Daily (Avg)</div>
                                    <div className="amount">0.94K</div>
                                    <div className="change up"><em className="icon ni ni-arrow-long-up" />3.45%</div>
                                  </div>
                                </div>
                                <div className="analytic-au-ck">
                                  <canvas className="analytics-au-chart" id="analyticAuData" />
                                </div>
                                <div className="chart-label-group">
                                  <div className="chart-label">01 Feb, 2021</div>
                                  <div className="chart-label">30 Feb, 2021</div>
                                </div>
                              </div>
                            </div>
                          </div>{/* .card */}
                        </div>{/* .col */}
                        <div className="col-md-6 col-lg-7">
                          <div className="card card-bordered h-100">
                            <div className="card-inner">
                              <div className="card-title-group pb-3 g-2">
                                <div className="card-title card-title-sm">
                                  <h6 className="title">Import &amp; Expense Report Statistics</h6>
                                  <p>Report Comparison</p>
                                </div>
                                <div className="card-tools shrink-0 d-none d-sm-block">
                                  <ul className="nav nav-switch-s2 nav-tabs bg-white">
                                    <li className="nav-item"><a href="#" className="nav-link">7 D</a></li>
                                    <li className="nav-item"><a href="#" className="nav-link active">1 M</a></li>
                                    <li className="nav-item"><a href="#" className="nav-link">3 M</a></li>
                                  </ul>
                                </div>
                              </div>
                              <div className="analytic-ov">
                                <div className="analytic-data-group analytic-ov-group g-3">
                                  <div className="analytic-data analytic-ov-data">
                                    <div className="title">Yearly</div>
                                    <div className="amount">2.57K</div>
                                    <div className="change up"><em className="icon ni ni-arrow-long-up" />12.37%</div>
                                  </div>
                                  <div className="analytic-data analytic-ov-data">
                                    <div className="title">Monothly</div>
                                    <div className="amount">3.98K</div>
                                    <div className="change up"><em className="icon ni ni-arrow-long-up" />47.74%</div>
                                  </div>
                                  <div className="analytic-data analytic-ov-data">
                                    <div className="title">Weekly</div>
                                    <div className="amount">28.49%</div>
                                    <div className="change down"><em className="icon ni ni-arrow-long-down" />12.37%</div>
                                  </div>
                                  <div className="analytic-data analytic-ov-data">
                                    <div className="title">Daily</div>
                                    <div className="amount">5.95%</div>
                                    <div className="change up"><em className="icon ni ni-arrow-long-up" />9.35%</div>
                                  </div>
                                </div>
                                <div className="analytic-ov-ck">
                                  <canvas className="analytics-line-large" id="analyticOvData" />
                                </div>
                                <div className="chart-label-group ml-5">
                                  <div className="chart-label">01 Jan, 2021</div>
                                  <div className="chart-label d-none d-sm-block">15 Jan, 2021</div>
                                  <div className="chart-label">30 Jan, 2021</div>
                                </div>
                              </div>
                            </div>
                          </div>{/* .card */}
                        </div>{/* .col */}
                        <div className="col-md-7 col-xxl-4">
                          <div className="card card-bordered h-100">
                            <div className="card-inner mb-n2">
                              <div className="card-title-group">
                                <div className="card-title card-title-sm">
                                  <h6 className="title">Lead</h6>
                                  <p>Lead Statictics</p>
                                </div>
                                <div className="card-tools">
                                  <div className="drodown">
                                    <a href="#" className="dropdown-toggle dropdown-indicator btn btn-sm btn-outline-light btn-white" data-toggle="dropdown">30 Days</a>
                                    <div className="dropdown-menu dropdown-menu-right dropdown-menu-xs">
                                      <ul className="link-list-opt no-bdr">
                                        <li><a href="#"><span>7 Days</span></a></li>
                                        <li><a href="#"><span>15 Days</span></a></li>
                                        <li><a href="#"><span>30 Days</span></a></li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="nk-tb-list is-loose traffic-channel-table">
                              <div className="nk-tb-item nk-tb-head">
                                <div className="nk-tb-col"><span>Duration</span></div>
                                <div className="nk-tb-col"><span>Count</span></div>
                                <div className="nk-tb-col"><span>Prev Count</span></div>
                                <div className="nk-tb-col"><span>Change</span></div>
                                <div className="nk-tb-col tb-col-sm text-right"><span>Statistics</span></div>
                              </div>{/* .nk-tb-head */}
                              <div className="nk-tb-item">
                                <div className="nk-tb-col">
                                  <span className="tb-lead">Yearly</span>
                                </div>
                                <div className="nk-tb-col">
                                  <span className="tb-sub tb-amount"><span>4,305</span></span>
                                </div>
                                <div className="nk-tb-col">
                                  <span className="tb-sub tb-amount"><span>4,129</span></span>
                                </div>
                                <div className="nk-tb-col">
                                  <span className="tb-sub"><span>4.29%</span> <span className="change up"><em className="icon ni ni-arrow-long-up" /></span></span>
                                </div>
                                <div className="nk-tb-col text-right">
                                  <div className="traffic-channel-ck ml-auto">
                                    <canvas className="analytics-line-small" id="OrganicSearchData" />
                                  </div>
                                </div>
                              </div>{/* .nk-tb-item */}
                              <div className="nk-tb-item">
                                <div className="nk-tb-col">
                                  <span className="tb-lead">Monthly</span>
                                </div>
                                <div className="nk-tb-col">
                                  <span className="tb-sub tb-amount"><span>859</span></span>
                                </div>
                                <div className="nk-tb-col">
                                  <span className="tb-sub tb-amount"><span>936</span></span>
                                </div>
                                <div className="nk-tb-col">
                                  <span className="tb-sub"><span>15.8%</span> <span className="change down"><em className="icon ni ni-arrow-long-down" /></span></span>
                                </div>
                                <div className="nk-tb-col text-right">
                                  <div className="traffic-channel-ck ml-auto">
                                    <canvas className="analytics-line-small" id="SocialMediaData" />
                                  </div>
                                </div>
                              </div>{/* .nk-tb-item */}
                              <div className="nk-tb-item">
                                <div className="nk-tb-col">
                                  <span className="tb-lead">Weekly</span>
                                </div>
                                <div className="nk-tb-col">
                                  <span className="tb-sub tb-amount"><span>482</span></span>
                                </div>
                                <div className="nk-tb-col">
                                  <span className="tb-sub tb-amount"><span>793</span></span>
                                </div>
                                <div className="nk-tb-col">
                                  <span className="tb-sub"><span>41.3%</span> <span className="change down"><em className="icon ni ni-arrow-long-down" /></span></span>
                                </div>
                                <div className="nk-tb-col text-right">
                                  <div className="traffic-channel-ck ml-auto">
                                    <canvas className="analytics-line-small" id="ReferralsData" />
                                  </div>
                                </div>
                              </div>{/* .nk-tb-item */}
                              <div className="nk-tb-item">
                                <div className="nk-tb-col">
                                  <span className="tb-lead">Daily</span>
                                </div>
                                <div className="nk-tb-col">
                                  <span className="tb-sub tb-amount"><span>138</span></span>
                                </div>
                                <div className="nk-tb-col">
                                  <span className="tb-sub tb-amount"><span>97</span></span>
                                </div>
                                <div className="nk-tb-col">
                                  <span className="tb-sub"><span>12.6%</span> <span className="change up"><em className="icon ni ni-arrow-long-up" /></span></span>
                                </div>
                                <div className="nk-tb-col text-right">
                                  <div className="traffic-channel-ck ml-auto">
                                    <canvas className="analytics-line-small" id="OthersData" />
                                  </div>
                                </div>
                              </div>{/* .nk-tb-item */}
                            </div>{/* .nk-tb-list */}
                          </div>{/* .card */}
                        </div>{/* .col */}
                        <div className="col-md-5">
                          <div className="card card-bordered card-full">
                            <div className="card-inner-group">
                              <div className="card-inner">
                                <div className="card-title-group">
                                  <div className="card-title">
                                    <h6 className="title">Recent Sale</h6>
                                  </div>
                                  <div className="card-tools">
                                    <a href="html/crm/recent-sale.html" className="link">View All</a>
                                  </div>
                                </div>
                              </div>
                              <div className="card-inner p-0">
                                <table className="nk-tb-list nk-tb-ulist">
                                  <thead>
                                    <tr className="nk-tb-item nk-tb-head">
                                      <th className="nk-tb-col"><span className="sub-text">ID</span></th>
                                      <th className="nk-tb-col"><span className="sub-text">Name</span></th>
                                      <th className="nk-tb-col"><span className="sub-text">Price</span></th>
                                      <th className="nk-tb-col tb-col-lg"><span className="sub-text">Status</span></th>
                                      <th className="nk-tb-col nk-tb-col-tools text-right">
                                        <div className="dropdown">
                                          <a href="#" className="btn btn-xs btn-trigger btn-icon dropdown-toggle mr-n1" data-toggle="dropdown" data-offset="0,5"><em className="icon ni ni-more-h" /></a>
                                          <div className="dropdown-menu dropdown-menu-right">
                                            <ul className="link-list-opt no-bdr">
                                              <li><a href="#"><em className="icon ni ni-check-round-cut" /><span>Mark As Done</span></a></li>
                                              <li><a href="#"><em className="icon ni ni-archive" /><span>Mark As Archive</span></a></li>
                                              <li><a href="#"><em className="icon ni ni-trash" /><span>Remove Tasks</span></a></li>
                                            </ul>
                                          </div>
                                        </div>
                                      </th>
                                    </tr>{/* .nk-tb-item */}
                                  </thead>
                                  <tbody>
                                    <tr className="nk-tb-item">
                                      <td className="nk-tb-col">
                                        <span>P-78</span>
                                      </td>
                                      <td className="nk-tb-col">
                                        <span>Mackbook<span className="dot dot-success d-lg-none ml-1" /></span>
                                      </td>
                                      <td className="nk-tb-col">
                                        <span>$999.00</span>
                                      </td>
                                      <td className="nk-tb-col tb-col-lg">
                                        <span className="badge badge-dot badge-dot-xs badge-success">Available</span>
                                      </td>
                                      <td className="nk-tb-col nk-tb-col-tools">
                                        <ul className="nk-tb-actions">
                                          <li>
                                            <div className="dropdown">
                                              <a href="#" className="dropdown-toggle btn btn-icon btn-trigger" data-toggle="dropdown"><em className="icon ni ni-more-h" /></a>
                                              <div className="dropdown-menu dropdown-menu-right">
                                                <ul className="link-list-opt no-bdr">
                                                  <li><a href="#" data-toggle="modal" data-target="#editDataDash"><em className="icon ni ni-edit" /><span>Edit Info</span></a></li>
                                                  <li><a href="#" data-toggle="modal" data-target="#deleteData"><em className="icon ni ni-trash" /><span>Trash</span></a></li>
                                                </ul>
                                              </div>
                                            </div>
                                          </li>
                                        </ul>
                                      </td>
                                    </tr>{/* .nk-tb-item */}
                                    <tr className="nk-tb-item">
                                      <td className="nk-tb-col">
                                        <span>P-56</span>
                                      </td>
                                      <td className="nk-tb-col">
                                        <span>iPhone<span className="dot dot-danger d-lg-none ml-1" /></span>
                                      </td>
                                      <td className="nk-tb-col">
                                        <span>$700.00</span>
                                      </td>
                                      <td className="nk-tb-col tb-col-lg">
                                        <span className="badge badge-dot badge-dot-xs badge-danger">Out of Stock</span>
                                      </td>
                                      <td className="nk-tb-col nk-tb-col-tools">
                                        <ul className="nk-tb-actions">
                                          <li>
                                            <div className="dropdown">
                                              <a href="#" className="dropdown-toggle btn btn-icon btn-trigger" data-toggle="dropdown"><em className="icon ni ni-more-h" /></a>
                                              <div className="dropdown-menu dropdown-menu-right">
                                                <ul className="link-list-opt no-bdr">
                                                  <li><a href="#" data-toggle="modal" data-target="#editDataDash"><em className="icon ni ni-edit" /><span>Edit Info</span></a></li>
                                                  <li><a href="#" data-toggle="modal" data-target="#deleteData"><em className="icon ni ni-trash" /><span>Trash</span></a></li>
                                                </ul>
                                              </div>
                                            </div>
                                          </li>
                                        </ul>
                                      </td>
                                    </tr>{/* .nk-tb-item */}
                                    <tr className="nk-tb-item">
                                      <td className="nk-tb-col">
                                        <span>P-68</span>
                                      </td>
                                      <td className="nk-tb-col">
                                        <span>Watch<span className="dot dot-success d-lg-none ml-1" /></span>
                                      </td>
                                      <td className="nk-tb-col">
                                        <span>$260.00</span>
                                      </td>
                                      <td className="nk-tb-col tb-col-lg">
                                        <span className="badge badge-dot badge-dot-xs badge-success">Available</span>
                                      </td>
                                      <td className="nk-tb-col nk-tb-col-tools">
                                        <ul className="nk-tb-actions">
                                          <li>
                                            <div className="dropdown">
                                              <a href="#" className="dropdown-toggle btn btn-icon btn-trigger" data-toggle="dropdown"><em className="icon ni ni-more-h" /></a>
                                              <div className="dropdown-menu dropdown-menu-right">
                                                <ul className="link-list-opt no-bdr">
                                                  <li><a href="#" data-toggle="modal" data-target="#editDataDash"><em className="icon ni ni-edit" /><span>Edit Info</span></a></li>
                                                  <li><a href="#" data-toggle="modal" data-target="#deleteData"><em className="icon ni ni-trash" /><span>Trash</span></a></li>
                                                </ul>
                                              </div>
                                            </div>
                                          </li>
                                        </ul>
                                      </td>
                                    </tr>{/* .nk-tb-item */}
                                    <tr className="nk-tb-item">
                                      <td className="nk-tb-col">
                                        <span>P-56</span>
                                      </td>
                                      <td className="nk-tb-col">
                                        <span>Earbuds<span className="dot dot-warning d-lg-none ml-1" /></span>
                                      </td>
                                      <td className="nk-tb-col">
                                        <span>$180.00</span>
                                      </td>
                                      <td className="nk-tb-col tb-col-lg">
                                        <span className="badge badge-dot badge-dot-xs badge-warning">Low Stock</span>
                                      </td>
                                      <td className="nk-tb-col nk-tb-col-tools">
                                        <ul className="nk-tb-actions">
                                          <li>
                                            <div className="dropdown">
                                              <a href="#" className="dropdown-toggle btn btn-icon btn-trigger" data-toggle="dropdown"><em className="icon ni ni-more-h" /></a>
                                              <div className="dropdown-menu dropdown-menu-right">
                                                <ul className="link-list-opt no-bdr">
                                                  <li><a href="#" data-toggle="modal" data-target="#editDataDash"><em className="icon ni ni-edit" /><span>Edit Info</span></a></li>
                                                  <li><a href="#" data-toggle="modal" data-target="#deleteData"><em className="icon ni ni-trash" /><span>Trash</span></a></li>
                                                </ul>
                                              </div>
                                            </div>
                                          </li>
                                        </ul>
                                      </td>
                                    </tr>{/* .nk-tb-item */}
                                  </tbody>
                                </table>{/* .nk-tb-list */}
                              </div>{/* .card-inner */}
                            </div>
                          </div>{/* .card */}
                        </div>{/* .col */}
                        <div className="col-md-5 col-sm-6 col-xxl-3">
                          <div className="card card-bordered h-100">
                            <div className="card-inner">
                              <div className="card-title-group mb-5">
                                <div className="card-title card-title-sm">
                                  <h6 className="title">Client Payment Status</h6>
                                </div>
                                <div className="card-tools">
                                  <div className="dropdown">
                                    <a href="#" className="dropdown-toggle dropdown-indicator btn btn-sm btn-outline-light btn-white" data-toggle="dropdown">30 Days</a>
                                    <div className="dropdown-menu dropdown-menu-right dropdown-menu-xs">
                                      <ul className="link-list-opt no-bdr">
                                        <li><a href="#"><span>7 Days</span></a></li>
                                        <li><a href="#"><span>15 Days</span></a></li>
                                        <li><a href="#"><span>30 Days</span></a></li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="payment-status">
                                <div className="nk-ck-md">
                                  <canvas className="polar-chart" id="polarChartData" />
                                </div>
                                <ul className="traffic-channel-group mt-3 pl-4">
                                  <li className="m-1">
                                    <div className="title">
                                      <span className="dot dot-lg sq" data-bg="#9cabff" />
                                      <span>Started</span>
                                    </div>
                                  </li>
                                  <li className="m-1">
                                    <div className="title">
                                      <span className="dot dot-lg sq" data-bg="#f4aaa4" />
                                      <span>Inprogress</span>
                                    </div>
                                  </li>
                                  <li className="m-1">
                                    <div className="title">
                                      <span className="dot dot-lg sq" data-bg="#9785FF" />
                                      <span>Completed</span>
                                    </div>
                                  </li>
                                  <li className="m-1">
                                    <div className="title">
                                      <span className="dot dot-lg sq" data-bg="#E85347" />
                                      <span>Cencel</span>
                                    </div>
                                  </li>
                                  <li className="m-1">
                                    <div className="title">
                                      <span className="dot dot-lg sq" data-bg="#8feac5" />
                                      <span>Success</span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>{/* .card */}
                        </div>{/* .col */}
                        <div className="col-md-7 col-sm-6 col-xxl-4">
                          <div className="card card-bordered card-full">
                            <div className="card-inner d-flex flex-column h-100">
                              <div className="card-title-group mb-3">
                                <div className="card-title">
                                  <h6 className="title">Running Projects</h6>
                                  <p>In last 30 days top projects.</p>
                                </div>
                                <div className="card-tools mt-n4 mr-n1">
                                  <div className="dropdown">
                                    <a href="#" className="dropdown-toggle btn btn-icon btn-trigger" data-toggle="dropdown"><em className="icon ni ni-more-h" /></a>
                                    <div className="dropdown-menu dropdown-menu-sm dropdown-menu-right">
                                      <ul className="link-list-opt no-bdr">
                                        <li><a href="#"><span>15 Days</span></a></li>
                                        <li><a href="#" className="active"><span>30 Days</span></a></li>
                                        <li><a href="#"><span>3 Months</span></a></li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="progress-list gy-3">
                                <div className="progress-wrap">
                                  <div className="progress-text">
                                    <div className="progress-label">IT Solution</div>
                                    <div className="progress-amount">78%</div>
                                  </div>
                                  <div className="progress progress-md">
                                    <div className="progress-bar" data-progress={78} />
                                  </div>
                                </div>
                                <div className="progress-wrap">
                                  <div className="progress-text">
                                    <div className="progress-label">Internet configuration</div>
                                    <div className="progress-amount">48.49%</div>
                                  </div>
                                  <div className="progress progress-md">
                                    <div className="progress-bar bg-orange" data-progress="48.49" />
                                  </div>
                                </div>
                                <div className="progress-wrap">
                                  <div className="progress-text">
                                    <div className="progress-label">Database Management</div>
                                    <div className="progress-amount">29%</div>
                                  </div>
                                  <div className="progress progress-md">
                                    <div className="progress-bar bg-teal" data-progress={29} />
                                  </div>
                                </div>
                                <div className="progress-wrap">
                                  <div className="progress-text">
                                    <div className="progress-label">Design tool</div>
                                    <div className="progress-amount">56%</div>
                                  </div>
                                  <div className="progress progress-md">
                                    <div className="progress-bar bg-pink" data-progress={56} />
                                  </div>
                                </div>
                                <div className="progress-wrap">
                                  <div className="progress-text">
                                    <div className="progress-label">Banner completation</div>
                                    <div className="progress-amount">33%</div>
                                  </div>
                                  <div className="progress progress-md">
                                    <div className="progress-bar bg-azure" data-progress={33} />
                                  </div>
                                </div>
                                <div className="progress-wrap">
                                  <div className="progress-text">
                                    <div className="progress-label">SEO Marketing</div>
                                    <div className="progress-amount">65%</div>
                                  </div>
                                  <div className="progress progress-md">
                                    <div className="progress-bar bg-info" data-progress={65} />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>{/* .col */}
                        <div className="col-md-6 col-xxl-5">
                          <div className="card card-bordered h-100">
                            <div className="card-inner border-bottom">
                              <div className="card-title-group">
                                <div className="card-title">
                                  <h6 className="title">Support Requests</h6>
                                </div>
                                <div className="card-tools">
                                  <a href="#" className="link">All Requests</a>
                                </div>
                              </div>
                            </div>
                            <ul className="nk-support">
                              <li className="nk-support-item">
                                <div className="user-avatar">
                                  <img src="./images/avatar/a-sm.jpg" alt />
                                </div>
                                <div className="nk-support-content">
                                  <div className="title">
                                    <span>Vincent Lopez</span>
                                    <div className="status delivered">
                                      <em className="icon ni ni-check-circle-fill" />
                                    </div>
                                  </div>
                                  <p>Thanks for contact us with your issues...</p>
                                  <span className="time">6 min ago</span>
                                </div>
                              </li>
                              <li className="nk-support-item">
                                <div className="user-avatar bg-purple-dim">
                                  <span>DM</span>
                                </div>
                                <div className="nk-support-content ">
                                  <div className="title">
                                    <span>Daniel Moore</span>
                                    <div className="status unread">
                                      <em className="icon ni ni-bullet-fill" />
                                    </div>
                                  </div>
                                  <p>Thanks for contact us with your issues...</p>
                                  <span className="time">2 Hours ago</span>
                                </div>
                              </li>
                              <li className="nk-support-item">
                                <div className="user-avatar">
                                  <img src="./images/avatar/b-sm.jpg" alt />
                                </div>
                                <div className="nk-support-content">
                                  <div className="title">
                                    <span>Larry Henry</span>
                                    <div className="status sent">
                                      <em className="icon ni ni-check-circle" />
                                    </div>
                                  </div>
                                  <p>Thanks for contact us with your issues...</p>
                                  <span className="time">3 Hours ago</span>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>{/* .col */}
                        <div className="col-md-6 col-xxl-3">
                          <div className="card card-bordered h-100">
                            <div className="card-inner">
                              <div className="card-title-group">
                                <div className="card-title card-title-sm">
                                  <h6 className="title">Traffic Channel</h6>
                                </div>
                                <div className="card-tools">
                                  <div className="drodown">
                                    <a href="#" className="dropdown-toggle dropdown-indicator btn btn-sm btn-outline-light btn-white" data-toggle="dropdown">30 Days</a>
                                    <div className="dropdown-menu dropdown-menu-right dropdown-menu-xs">
                                      <ul className="link-list-opt no-bdr">
                                        <li><a href="#"><span>7 Days</span></a></li>
                                        <li><a href="#"><span>15 Days</span></a></li>
                                        <li><a href="#"><span>30 Days</span></a></li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="traffic-channel">
                                <div className="traffic-channel-doughnut-ck">
                                  <canvas className="analytics-doughnut" id="TrafficChannelDoughnutData" />
                                </div>
                                <div className="traffic-channel-group g-2">
                                  <div className="traffic-channel-data">
                                    <div className="title"><span className="dot dot-lg sq" data-bg="#9cabff" /><span>Organic Search</span></div>
                                    <div className="amount">4,305 <small>58.63%</small></div>
                                  </div>
                                  <div className="traffic-channel-data">
                                    <div className="title"><span className="dot dot-lg sq" data-bg="#b8acff" /><span>Social Media</span></div>
                                    <div className="amount">859 <small>23.94%</small></div>
                                  </div>
                                  <div className="traffic-channel-data">
                                    <div className="title"><span className="dot dot-lg sq" data-bg="#ffa9ce" /><span>Referrals</span></div>
                                    <div className="amount">482 <small>12.94%</small></div>
                                  </div>
                                  <div className="traffic-channel-data">
                                    <div className="title"><span className="dot dot-lg sq" data-bg="#f9db7b" /><span>Others</span></div>
                                    <div className="amount">138 <small>4.49%</small></div>
                                  </div>
                                </div>{/* .traffic-channel-group */}
                              </div>{/* .traffic-channel */}
                            </div>
                          </div>{/* .card */}
                        </div>{/* .col */}
                      </div>{/* .row */}
                    </div>{/* .nk-block */}
                  </div>
                </div>
              </div>
            </div>
            {/* content @e */}
            {/* footer @s */}
            <Footer />
            {/* footer @e */}
          </div>
            {/* wrap @e */}
        </div>
        {/* main @e */}
      </div>
    </>
  )
};

export default Home;
