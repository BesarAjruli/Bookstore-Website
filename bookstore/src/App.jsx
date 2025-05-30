import './App.css'
import Icon from '@mdi/react';
import { mdiMagnify, mdiCartOutline, mdiHomeOutline, mdiBookmarkOutline, mdiBookmarkPlusOutline, mdiSaleOutline } from '@mdi/js';

function Bookstore() {
  return(
    <>
      <header>
        <h1>Bookie</h1>

        <div className='searchContainer'>
          <input type="search" name="search" id="search" placeholder='Search...' />
          <Icon path={mdiMagnify} size={1.2} className='searchIcon'/>
        </div>

        <div className='cartContainer'>
          <Icon path={mdiCartOutline} size={1}/>
          <span>$0</span>
        </div>
      </header>

      <nav>
        <div>
          <Icon path={mdiHomeOutline} size={1.2}/>
          <span>Home</span>
        </div>

        <div>
          <Icon path={mdiBookmarkOutline} size={1.2}/>
          <span>Saves</span>
        </div>

        <div>
          <Icon path={mdiBookmarkPlusOutline} size={1.2}/>
          <span>New releases</span>
        </div>

        <div style={{color: 'red'}}>
          <Icon path={mdiSaleOutline} size={1.2}/>
          <span>Sales</span>
        </div>
      </nav>
       
      <main>
        <div className='slideshow'>
          <div className='offersContainer'>
            <div className="slideshowOffers">
              
              <div>  
                <h1>Jane Eyre</h1>
                <span>Charlotte Brontë</span>
                <div className='learnMoreOffers'>
                  Learn more
                </div>
              </div>
              <div>
                <img src="" alt="" />
              </div>
            </div>
            <div className="slideshowOffers"></div>
            <div className="slideshowOffers"></div>
          </div>
        </div>
      </main>

      <footer>

      </footer>
    </>
  )
}

export default Bookstore