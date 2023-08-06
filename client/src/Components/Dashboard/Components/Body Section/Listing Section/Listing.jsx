import React from 'react'
import './listing.css'

import img from '../../../Assets/image1.jpg'

// IMPORTED ICONS
import {BsArrowRightShort} from 'react-icons/bs'
import {AiFillHeart} from 'react-icons/ai'

const Listing = () => {
  return (
    <div className='listingSection'>

      <div className="heading flex">
        <h1>My Listings</h1>
        <button className='btn flex'>
          See All <BsArrowRightShort className='icon'/>
        </button>
      </div>
      <div className="secContainer flex">

        <div className="singleItem">
          <AiFillHeart className='icon'/>
          <img src={img} alt="Image" />
          <h3>Annual Vince</h3>
        </div>

        <div className="singleItem">
          <AiFillHeart className='icon'/>
          <img src={img} alt="Image" />
          <h3>Coffee Plant</h3>
        </div>

        <div className="singleItem">
          <AiFillHeart className='icon'/>
          <img src={img} alt="Image" />
          <h3>Button Fern</h3>
        </div>

        <div className="singleItem">
          <AiFillHeart className='icon'/>
          <img src={img} alt="Image" />
          <h3>Spider Plant</h3>
        </div>

      </div>

      <div className="sellers flex">
        <div className="topSellers">
          <div className="heading flex">
            <h3>Top Sellers</h3>
            <button className='btn flex'>
          See All <BsArrowRightShort className='icon'/>
        </button>
          </div>
          <div className="card flex">
            <div className="users">
              <img src={img} alt="User Image" />
              <img src={img} alt="User Image" />
              <img src={img} alt="User Image" />
              <img src={img} alt="User Image" />
            </div>
            <div className="cardText">
              <span>
                1544 Plants sold <br />
                21 Sellers <span className='date'>7 Days</span>
              </span>
            </div>
          </div>
        </div>
        <div className="featuredSellers">
          <div className="heading flex">
            <h3>Featured Sellers</h3>
            <button className='btn flex'>
          See All <BsArrowRightShort className='icon'/>
        </button>
          </div>
          <div className="card flex">
            <div className="users">
              <img src={img} alt="User Image" />
              <img src={img} alt="User Image" />
              <img src={img} alt="User Image" />
              <img src={img} alt="User Image" />
            </div>
            <div className="cardText">
              <span>
                1544 Plants sold <br />
                21 Sellers <span className='date'>7 Days</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Listing