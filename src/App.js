import React from 'react';
import TopLine from './components/TopLine'
import Header from './components/Header'
import MainSlider from './components/MainSlider'



function App() {
  return (
    <>
      <div className="preloader">
        <div className="preloader_image"></div>
      </div>
      <div className="modal" tabIndex="-1" role="dialog" aria-labelledby="search_modal" id="search_modal">
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">
            <i className="rt-icon2-cross2"></i>
          </span>
        </button>
        <div className="widget widget_search">
          <form method="get" className="searchform search-form form-inline" action="./">
            <div className="form-group bottommargin_0">
              <input type="text" defaultValue="" name="search" className="form-control" placeholder="Search keyword" id="modal-search-input" />
            </div>
            <button type="submit" className="theme_button no_bg_button">Search</button>
          </form>
        </div>
      </div>
      <div id="canvas">
        <div id="box_wrapper">
          <TopLine />
          <Header />
          <MainSlider />
        </div>
      </div>
    </>
  );
}

export default App;
