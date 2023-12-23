import React,{useEffect} from 'react'
import './main.scss'
import img1 from '../../Assets/borabora.jpg'
import img from '../../Assets/borabora.jpg'
import img2 from '../../Assets/img2.jpeg'
import img3 from '../../Assets/img3.jpg'
import img4 from '../../Assets/img4.jpeg'
import img5 from '../../Assets/img5.jpeg'
import img6 from '../../Assets/img6.jpeg'

import img7 from '../../Assets/img7.jpg'
import img8 from '../../Assets/img8.jpeg'
import img9 from '../../Assets/img9.jpeg'
// import img10 from '../../Assets/img10.jpeg'






import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";

import Aos, { init } from 'aos'
import 'aos/dist/aos.css'

const Data = [
  {
    id: 1,
    imgSrc: img1,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The epitome of rommance, Bora Bora is one of the best travel destinations in the World. Thi splace is known for its luxurious stays and adventuros activities.'
  },
  {
    id:2,
    imgSrc: img2,
    destTitle: 'Paris',
    location: 'France',
    grade: 'CULTURAL RELAX',
    fees: '$1200',
    description: "The City of Light draws millions of visitors every year with its unforgettable ambiance. Of course, the divine cuisine and vast art collections deserve some of the credit as well. The gentle River Seine rambles through the city, flanked by stately museums, centuries-old churches, and blocks of Rococo- and Neoclassic-design architecture, further enhanced by cascading trees and glowing streetlamps. Peppering the Seine's cobbled walks and graceful bridges are impossibly chic Parisians, probably on their way to the market, cafe or cinema."
  },
  {
    id:3,
    imgSrc: img3,
    destTitle: 'Glacier National Park',
    location: 'USA',
    grade: 'CULTURAL RELAX',
    fees: '$900',
    description: `Named for the remnants of glaciers from the ice age, Glacier National Park is located on the border of Canada and Montana. It is often called the "Crown of the Continent," because of its dizzying array of natural beauty. A favorite spot among hikers, the park features a variety of trails for all skill levels, ranging from the easy Trail of the Cedars (home to towering and beautiful cedars) to the challenging Grinnell Glacier (which offers sweeping views). What's more, the park boasts more than 700 lakes, numerous waterfalls and two mountain ranges, spread across more than 1 million acres that shelter a variety of wildlife.`
  },
  {
    id:4,
    imgSrc: img4,
    destTitle: 'Rome',
    location: 'Italy',
    grade: 'CULTURAL RELAX',
    fees: '$900',
    description: `Rome, the city of seven hills, enjoyed a mythic beginning. Romulus and Remus – twin brothers who were nursed by a she-wolf and fathered by a war god – reportedly founded the Eternal City. And although historians are a little skeptical about this epic entry into the world, most travelers are absolutely certain that there is something magical about Rome. Whether it's the mystery of nearby Vatican City or the ghosts of the Colosseum, an afternoon caffè on Piazza Navona or a piled-high plate of pasta at a trattoria, Rome is sure to enchant.`
  },
  {
    id:5,
    imgSrc: img5,
    destTitle: 'Swiss Alps',
    location: 'Switzerland',
    grade: 'CULTURAL RELAX',
    fees: '$1000',
    description: `Snow-covered mountains, charming towns and flower-strewn meadows make the Swiss Alps a year-round fairy tale destination. Visit in the winter for world-class skiing (and après-ski fondue and drinks) in locales such as the exclusive St. Moritz and the picturesque Zermatt, home of the craggy Matterhorn. Opt for warmer months to hike through the verdant valleys of Swiss National Park or attend lively festivals in the foothill city of Montreux. Regardless of the time of year, no trip would be complete without a visit to the Jungfrau Region, where you can experience idyllic mountain villages like Grindelwald and Mürren or take the Jungfrau Railway to Europe's highest railway station.`
  },
  {
    id:6,
    imgSrc: img6,
    destTitle: 'Maui',
    location: 'USA',
    grade: 'CULTURAL RELAX',
    fees: '$1100',
    description: 'The epitome of rommance, Bora Bora is one of the best travel destinations in the World. Thi splace is known for its luxurious stays and adventuros activities.'
  },
  {
    id:7,
    imgSrc: img7,
    destTitle: 'London',
    location: 'England',
    grade: 'CULTURAL RELAX',
    fees: '$1300',
    description: `The English writer Samuel Johnson famously said, "You find no man, at all intellectual, who is willing to leave London. No, Sir, when a man is tired of London, he is tired of life; for there is in London all that life can afford." More than two centuries have passed since Johnson's era, but his words still ring true. Life in London is nothing short of invigorating, and travelers find that one visit isn't enough to experience everything this two-millennia-old city has to offer.`
  },
  {
    id:8,
    imgSrc: img8,
    destTitle: 'Maldives',
    location: 'Asia',
    grade: 'CULTURAL RELAX',
    fees: '$500',
    description: `The island nation of the Maldives is popular with honeymooners looking for seclusion and adventurers looking to explore the depths of the sea on a scuba diving and snorkeling excursion. Travelers seeking relaxation can unwind at one of the island spas and all visitors should certainly spend a day exploring the Maldivian capital of Malé. The hotels in this region are also spectacular, ranging from underwater hotels to overwater bungalows to incredibly beautiful resorts. However, getting to and staying in this tropical paradise requires patience (there are no direct flights from the United States) and plentiful cash. Located between the Arabian and Laccadive seas, roughly 500 miles southwest of Sri Lanka, the Maldives is about as isolated as you can get – and that's just another one of its many allures.`
  },
  {
    id:9,
    imgSrc: img9,
    destTitle: 'Tokyo',
    location: 'Japan',
    grade: 'CULTURAL RELAX',
    fees: '$800',
    description: `"Animated" is perhaps the best word to describe Tokyo. Crazy about its anime, Japan's mega city is constantly buzzing with movement – feet clacking down sidewalks, cars zooming along streets, subway trains humming below ground, ships cruising in and out. And yet bright lights and loud signs beg you to pause, to break your motion for just one second to pray (oops, we mean pay) at the altar of consumerism. This is a city that feeds on motion and progress.`
  },
  // {
  //   id:10,
  //   imgSrc: img,
  //   destTitle: 'Bora Bora',
  //   location: 'New Zealand',
  //   grade: 'CULTURAL RELAX',
  //   fees: '$700',
  //   description: 'The epitome of rommance, Bora Bora is one of the best travel destinations in the World. Thi splace is known for its luxurious stays and adventuros activities.'
  // },

]
const Main = () => {


  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])


  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Most visited destination
        </h3>
      </div>

      <div className="sectionContent grid">
        {
          Data.map(({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div key={id} data-aos="fade-up" className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className='icon' />
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>{grade}<small>+1</small></span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{`${description.substring(0,150)}...`}</p>
                  </div>

                  <button className="btn flex">
                    DETAILS <HiOutlineClipboardCheck className='icon'/>
                  </button>
                </div>

              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Main