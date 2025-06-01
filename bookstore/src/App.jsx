import './App.css'
import './AppMobile.css'
import Icon from '@mdi/react';
import { mdiMagnify, mdiCartOutline, mdiHomeOutline, mdiBookmarkOutline, mdiBookmarkPlusOutline, mdiSaleOutline,
  mdiInstagram, mdiTwitter, mdiMapMarker
 } from '@mdi/js';

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
              
              <div className='textContOffr'>  
                <h1>Jane Eyre</h1>
                <span>Charlotte Brontë</span>
                <div className='learnMoreOffers'>
                  Learn more
                </div>
              </div>
              <div className='coverContainerOffer'>
                <img src="https://www.penguinlibros.com/co/3153136-large_default/jane-eyre-coleccion-alfaguara-clasicos.webp" alt="Jane Eyre" />
              </div>
            </div>

            <div className="slideshowOffers">
              
              <div className='textContOffr'>  
                <h1>The Odyssey</h1>
                <span>Homer</span>
                <div className='learnMoreOffers'>
                  Learn more
                </div>
              </div>
              <div className='coverContainerOffer'>
                <img src="https://monsieurdidot.com/wp-content/uploads/2020/02/The-Odyssey.jpg" alt="The Odyssey" />
              </div>
            </div>

            <div className="slideshowOffers longForm">
              <div className='coverContainerOfferLong'>
                <img src="https://i.natgeofe.com/n/b4846484-ba2c-46ab-91af-b7824aec8106/Odyssey5.jpg" alt="Artwork" />
              </div>
              <div className='textContOffr'>  
                <h1>15% OFF</h1>
                <span>Use the code "AQUILABOOKSTORE"</span>
              </div>
            </div>
          </div>
        </div>

        <div className='suggestions'>
          <h1>Suggestions</h1>

          <div className='suggCont'>
            <div>
              <div className='suggCoverCont'><img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1654371463i/18144590.jpg" alt="The Alchemist" /></div>
              <div className='suggTxtCont'>
                <span className=''>The Alchemist</span>
                <span className='suggAuth'>Paulo Coelho</span>
                <div>
                  <span className='suggPrice'>$10.35</span>
                  <span className='suggBuy'>Buy</span>
                </div>
              </div>
            </div>
            
            <div>
              <div className='suggCoverCont'><img src="https://m.media-amazon.com/images/I/611X8GI7hpL.jpg" alt="48 laws of power" /></div>
              <div className='suggTxtCont'>
                <span className=''>48 laws of power</span>
                <span className='suggAuth'>Robert Greene</span>
                <div>
                  <span className='suggPrice'>$75.99</span>
                  <span className='suggBuy'>Buy</span>
                </div>
              </div>
            </div>

            <div>
              <div className='suggCoverCont'><img src="https://bookcorner.mk/storage/images/products/18/front.jpg" alt="Rich dad, poor dad" /></div>
              <div className='suggTxtCont'>
                <span className=''>Rich dad poor dad</span>
                <span className='suggAuth'>Robert T. Kiyosaki</span>
                <div>
                  <span className='suggPrice'>$15.55</span>
                  <span className='suggBuy'>Buy</span>
                </div>
              </div>
            </div>

            <div>
              <div className='suggCoverCont'><img src="https://res.cloudinary.com/bloomsbury-atlas/image/upload/w_568,c_scale,dpr_1.5/jackets/9781408855669.jpg" alt="Harry Potter and the chambers of secrets" /></div>
              <div className='suggTxtCont'>
                <span className=''>Harry Potter and...</span>
                <span className='suggAuth'>J.K. Rowling</span>
                <div>
                  <span className='suggPrice'>$69.45</span>
                  <span className='suggBuy'>Buy</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='findMore'>
          <h1>Find More</h1>

          <div className='fmContainer'>
            <div className='fmBookOM'>
              <div>
                <span className='bestBook'>Best book of this month</span>
                <span className='fmReadMore'>Read more</span>
              </div>
            </div>

            <div className='bestSeller'>
              <h2>Best sellers</h2>
              <div className='fmCont'>
                <div className='fmBSCont'>
                  <div className='fmCoverCont'>
                    <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1654371463i/18144590.jpg" alt="" /></div>
                  <div className='fmTxtCont'>
                    <span className='fmName'>The Alchemist</span>
                    <span className='fmAuth'>Paulo Coelho</span>
                    <span className='fmPrice'>$10.35</span>
                  </div>
                </div>
                <div className='fmBSCont'>
                  <div className='fmCoverCont'>
                    <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1654371463i/18144590.jpg" alt="" /></div>
                  <div className='fmTxtCont'>
                    <span className='fmName'>The Alchemist</span>
                    <span className='fmAuth'>Paulo Coelho</span>
                    <span className='fmPrice'>$10.35</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer>
          <div className='footerPart1'>
            <h1>Bookie</h1>
            <span className='pc'>Get in touch with our newsletter</span>
          </div>
          <hr />
          <div className='footerPart2'>
            <div className='footerIcons'>
              <Icon path={mdiInstagram} size={1.5}></Icon>
              <Icon path={mdiTwitter} size={1.5}></Icon>
              <Icon path={mdiMapMarker} size={1.5}></Icon>
            </div>
            <div className='submitEmail'>
              <input type="text" placeholder='example@email.com'/>
              <button>Submit</button>
            </div>
          </div>
        </footer>
      </main>

      <footer>

      </footer>
    </>
  )
}

export default Bookstore