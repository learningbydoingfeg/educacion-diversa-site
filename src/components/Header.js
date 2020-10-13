import React from 'react'

export default function Header() {
  return (
    <header className="page_header header_white toggler_xs_right columns_margin_0">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 display_table">
            <div className="header_left_logo display_table_cell"> <a href="./" className="logo logo_with_text">
              <img src="images/logo.png" alt="" />
              <span className="logo_text">
                Educación<br/>Diversa
                            <small className="highlight4"></small>
              </span>
            </a> </div>
            <div className="header_mainmenu display_table_cell text-center">
              <nav className="mainmenu_wrapper">
                <ul className="mainmenu nav sf-menu">
                  <li className="active"> <a href="index.html">Home</a>
                    <ul>
                      <li> <a href="index.html">Home</a> </li>
                      <li> <a href="index-static.html">Home static intro</a> </li>
                      <li> <a href="index-single.html">Home single page</a> </li>
                    </ul>
                  </li>
                  <li> <a href="about.html">Pages</a>
                    <ul>
                      <li> <a href="shortcodes_teasers.html">Shortcodes &amp; Widgets</a>
                        <ul>
                          <li> <a href="shortcodes_typography.html">Typography</a> </li>
                          <li> <a href="shortcodes_buttons.html">Buttons</a> </li>
                          <li> <a href="shortcodes_teasers.html">Teasers</a> </li>
                          <li> <a href="shortcodes_progress.html">Progress</a> </li>
                          <li> <a href="shortcodes_tabs.html">Tabs &amp; Collapse</a> </li>
                          <li> <a href="shortcodes_bootstrap.html">Bootstrap Elements</a> </li>
                          <li> <a href="shortcodes_widgets.html">Widgets</a> </li>
                          <li> <a href="shortcodes_animation.html">Animation</a> </li>
                          <li> <a href="shortcodes_icons.html">Template Icons</a> </li>
                          <li> <a href="shortcodes_socialicons.html">Social Icons</a> </li>
                        </ul>
                      </li>
                      <li> <a href="about.html">About</a> </li>
                      <li> <a href="team.html">Team</a>
                        <ul>
                          <li> <a href="team.html">Leaders</a> </li>
                          <li> <a href="team-single.html">Team Member</a> </li>
                        </ul>
                      </li>
                      <li> <a href="donate.html">Donate</a> </li>
                      <li> <a href="timetable.html">Timetable</a> </li>
                      <li> <a href="events-left.html">Events</a>
                        <ul>
                          <li> <a href="events-left.html">Left Sidebar</a> </li>
                          <li> <a href="events-right.html">Right Sidebar</a> </li>
                          <li> <a href="events-full.html">Full Width</a> </li>
                          <li> <a href="event-single-left.html">Single Event</a>
                            <ul>
                              <li> <a href="event-single-left.html">Left Sidebar</a> </li>
                              <li> <a href="event-single-right.html">Right Sidebar</a> </li>
                              <li> <a href="event-single-full.html">Full Width</a> </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li> <a href="comingsoon1.html">Comingsoon</a>
                        <ul>
                          <li> <a href="comingsoon1.html">Comingsoon</a> </li>
                          <li> <a href="comingsoon2.html">Comingsoon 2</a> </li>
                        </ul>
                      </li>
                      <li> <a href="faq.html">FAQ</a>
                        <ul>
                          <li> <a href="faq.html">FAQ</a> </li>
                          <li> <a href="faq2.html">FAQ 2</a> </li>
                          <li> <a href="faq3.html">FAQ 3</a> </li>
                        </ul>
                      </li>
                      <li> <a href="404.html">404</a>
                        <ul>
                          <li> <a href="404.html">404</a> </li>
                          <li> <a href="404-2.html">404 2</a> </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li> <a href="services.html">Services</a>
                    <ul>
                      <li> <a href="services.html">Services</a> </li>
                      <li> <a href="service-single.html">Single Service</a> </li>
                    </ul>
                  </li>
                  <li> <a href="#">Features</a>
                    <div className="mega-menu">
                      <ul className="mega-menu-row">
                        <li className="mega-menu-col"> <a href="#">Headers</a>
                          <ul>
                            <li> <a href="header1.html">Header Type 1</a> </li>
                            <li> <a href="header2.html">Header Type 2</a> </li>
                            <li> <a href="header3.html">Header Type 3</a> </li>
                            <li> <a href="header4.html">Header Type 4</a> </li>
                            <li> <a href="header5.html">Header Type 5</a> </li>
                            <li> <a href="header6.html">Header Type 6</a> </li>
                            <li> <a href="header7.html">Header Type 7</a> </li>
                            <li> <a href="header8.html">Header Type 8</a> </li>
                          </ul>
                        </li>
                        <li className="mega-menu-col"> <a href="#">Side Menus</a>
                          <ul>
                            <li> <a href="header_side1.html">Slide Left Light</a> </li>
                            <li> <a href="header_side2.html">Slide Right Light</a> </li>
                            <li> <a href="header_side3.html">Push Left Light</a> </li>
                            <li> <a href="header_side4.html">Push Right Light</a> </li>
                            <li> <a href="header_side5.html">Slide Left Dark</a> </li>
                            <li> <a href="header_side6.html">Slide Right Dark</a> </li>
                            <li> <a href="header_side7.html">Push Left Dark</a> </li>
                            <li> <a href="header_side8.html">Push Right Dark</a> </li>
                            <li> <a href="header_side_superfish.html">Superfish Menu</a> </li>
                            <li> <a href="header_side_sticked.html">Sticked Menu</a> </li>
                          </ul>
                        </li>
                        <li className="mega-menu-col"> <a href="breadcrumbs1.html">Breadcrumbs</a>
                          <ul>
                            <li> <a href="breadcrumbs1.html">Breadcrumbs 1</a> </li>
                            <li> <a href="breadcrumbs2.html">Breadcrumbs 2</a> </li>
                            <li> <a href="breadcrumbs3.html">Breadcrumbs 3</a> </li>
                            <li> <a href="breadcrumbs4.html">Breadcrumbs 4</a> </li>
                            <li> <a href="breadcrumbs5.html">Breadcrumbs 5</a> </li>
                            <li> <a href="breadcrumbs6.html">Breadcrumbs 6</a> </li>
                          </ul>
                        </li>
                        <li className="mega-menu-col"> <a href="footer1.html">Footers</a>
                          <ul>
                            <li> <a href="footer1.html">Footer Type 1</a> </li>
                            <li> <a href="footer2.html">Footer Type 2</a> </li>
                            <li> <a href="footer3.html">Footer Type 3</a> </li>
                            <li> <a href="footer4.html">Footer Type 4</a> </li>
                            <li> <a href="footer5.html">Footer Type 5</a> </li>
                            <li> <a href="footer6.html">Footer Type 6</a> </li>
                          </ul>
                        </li>
                        <li className="mega-menu-col"> <a href="copyright1.html">Copyrights</a>
                          <ul>
                            <li> <a href="copyright1.html">Copyrights 1</a> </li>
                            <li> <a href="copyright2.html">Copyrights 2</a> </li>
                            <li> <a href="copyright3.html">Copyrights 3</a> </li>
                            <li> <a href="copyright4.html">Copyrights 4</a> </li>
                            <li> <a href="copyright5.html">Copyrights 5</a> </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li> <a href="gallery-regular.html">Gallery</a>
                    <ul>
                      <li> <a href="gallery-regular.html">Gallery Regular</a>
                        <ul>
                          <li> <a href="gallery-regular.html">1 column</a> </li>
                          <li> <a href="gallery-regular-2-cols.html">2 columns</a> </li>
                          <li> <a href="gallery-regular-3-cols.html">3 columns</a> </li>
                        </ul>
                      </li>
                      <li> <a href="gallery-fullwidth.html">Gallery Full Width</a>
                        <ul>
                          <li> <a href="gallery-fullwidth.html">2 column</a> </li>
                          <li> <a href="gallery-fullwidth-3-cols.html">3 columns</a> </li>
                          <li> <a href="gallery-fullwidth-4-cols.html">4 columns</a> </li>
                        </ul>
                      </li>
                      <li> <a href="gallery-extended.html">Gallery Extended</a>
                        <ul>
                          <li> <a href="gallery-extended.html">1 column</a> </li>
                          <li> <a href="gallery-extended-2-cols.html">2 columns</a> </li>
                          <li> <a href="gallery-extended-3-cols.html">3 columns</a> </li>
                        </ul>
                      </li>
                      <li> <a href="gallery-carousel.html">Gallery Carousel</a>
                        <ul>
                          <li> <a href="gallery-carousel.html">1 column</a> </li>
                          <li> <a href="gallery-carousel-2-cols.html">2 columns</a> </li>
                          <li> <a href="gallery-carousel-3-cols.html">3 columns</a> </li>
                        </ul>
                      </li>
                      <li> <a href="gallery-tile.html">Gallery Tile</a> </li>
                      <li> <a href="gallery-left.html">Gallery Left Sidebar</a>
                        <ul>
                          <li> <a href="gallery-left.html">1 column</a> </li>
                          <li> <a href="gallery-left-2-cols.html">2 columns</a> </li>
                        </ul>
                      </li>
                      <li> <a href="gallery-right.html">Gallery Right Sidebar</a>
                        <ul>
                          <li> <a href="gallery-right.html">1 column</a> </li>
                          <li> <a href="gallery-right-2-cols.html">2 columns</a> </li>
                        </ul>
                      </li>
                      <li> <a href="gallery-single.html">Gallery Item</a>
                        <ul>
                          <li> <a href="gallery-single.html">Style 1</a> </li>
                          <li> <a href="gallery-single2.html">Style 2</a> </li>
                          <li> <a href="gallery-single3.html">Style 3</a> </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li> <a href="blog-right.html">Blog</a>
                    <ul>
                      <li> <a href="blog-right.html">Right Sidebar</a> </li>
                      <li> <a href="blog-left.html">Left Sidebar</a> </li>
                      <li> <a href="blog-full.html">No Sidebar</a> </li>
                      <li> <a href="blog-mosaic.html">Blog Grid</a> </li>
                      <li> <a href="blog-single-right.html">Post</a>
                        <ul>
                          <li> <a href="blog-single-right.html">Right Sidebar</a> </li>
                          <li> <a href="blog-single-left.html">Left Sidebar</a> </li>
                          <li> <a href="blog-single-full.html">No Sidebar</a> </li>
                        </ul>
                      </li>
                      <li> <a href="blog-single-video-right.html">Video Post</a>
                        <ul>
                          <li> <a href="blog-single-video-right.html">Right Sidebar</a> </li>
                          <li> <a href="blog-single-video-left.html">Left Sidebar</a> </li>
                          <li> <a href="blog-single-video-full.html">No Sidebar</a> </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li> <a href="shop.html">Shop</a>
                    <ul>
                      <li> <a href="shop.html">Shop</a> </li>
                      <li> <a href="shop-product.html">Single Product</a> </li>
                      <li> <a href="shop-cart.html">Shopping Cart</a> </li>
                      <li> <a href="shop-checkout.html">Checkout</a> </li>
                      <li> <a href="shop-register.html">Registration</a> </li>
                    </ul>
                  </li>
                  <li> <a href="contact.html">Contacts</a>
                    <ul>
                      <li> <a href="contact.html">Contact 1</a> </li>
                      <li> <a href="contact2.html">Contact 2</a> </li>
                      <li> <a href="contact3.html">Contact 3</a> </li>
                      <li> <a href="contact4.html">Contact 4</a> </li>
                    </ul>
                  </li>
                </ul>
              </nav>
              <span className="toggle_menu"><span></span></span>
            </div>
            <div className="header_right_buttons display_table_cell text-right hidden-xs">
              <a href="donate.html" className="theme_button color2 margin_0">Donate us now!</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}