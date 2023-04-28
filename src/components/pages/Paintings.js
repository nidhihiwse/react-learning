
// import CardList from '.src/pages/CardList';
import './paintings.css';

import CardList from "../../cards/CardList";


function PaintingsPage() {
  const DUMMY_DATA = [
    {
      id: "01",
      title: "ROBIN'S RESORT",
      image: "https://images.saatchiart.com/saatchi/710107/art/10161621/9224387-ZRKWAOPE-6.jpg",
      description: "Paintings, 91.4 W x 61 H x 2.5 D cm Tatiana Iliina"
    },
    {
      id: "02",
      title: "Spent Horses",
      image: "https://images.saatchiart.com/saatchi/185414/art/3526333/2596220-KVOJOOID-6.jpg",
      description: "Paintings, 203.2 W x 188 H x 5.1 D cm Matthew Dibble"
    },
    {
      id: "03",
      title: "Todd Mires",
      image: "https://images.saatchiart.com/saatchi/837389/art/9680821/8743921-GUDIAUDC-6.jpg",
      description: "Paintings, 182.9 W x 91.4 H x 3.8 D cm"
    },
  ]
  return (
    <section className="section-wrapper">
      <h1><i>“Painting is just another way of keeping a diary”</i></h1>
      <div className="gallery-container">
        <div className="gallery">
        <CardList cards={DUMMY_DATA}/>
        </div>
      </div>  
    </section>
  )
}

export default PaintingsPage;