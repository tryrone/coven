import React, { useState } from 'react';
import CustomCard from './CustomCard';
import CustomModal from './CustomModal';

export default function Dashboard() {
  const [modalStatus, setModalStatus] = useState(false);
  const [myData, setMyData] = useState({
    airName: '',
    code: '',
  });
  const airportArray = [
    {
      airportName: 'Atlanta Airport',
      icaoCode: 'KATL',
      image:
        'https://www.ajc.com/resizer/ur8tz4YoUS3lQnNRsUKtZm6KLBg=/1066x600/cloudfront-us-east-1.images.arcpublishing.com/ajc/WAITLFBXMXRKHN5OF6RWDGG6WQ.jpg',
    },
    {
      airportName: 'Tampa International Airport',
      icaoCode: 'KTPA',
      image:
        'https://i.pinimg.com/originals/02/7e/4b/027e4bd229b9fdf4b2c2e5827a05a16a.jpg',
    },
    {
      airportName: 'Los Angeles International Airport',
      icaoCode: 'KLAX',
      image:
        'https://i2.wp.com/airwaysmag.com/wp-content/uploads/2020/09/DSC_1524-1.jpg?fit=4648%2C3099&ssl=1',
    },
    {
      airportName: "O 'Hare International Airport",
      icaoCode: 'KORD',
      image:
        'https://i.guim.co.uk/img/media/4c5e95c18a593c5390c8655cf633c8cacf8f72ba/0_323_5030_3018/master/5030.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=1b4c00b52376ef77e04cc1de24fa88c0',
    },
    {
      airportName: 'London Heathrow Airport',
      icaoCode: 'EGLL',
      image:
        'https://cdn1.matadornetwork.com/blogs/1/2019/04/Schiphol-Airport-in-Amsterdam.jpg',
    },
    {
      airportName: 'Charles de Gaulle Airport',
      icaoCode: 'LFPG',
      image:
        'https://www.discoverholland.com/product-images/f6859cc2-950b-4637-80e8-c0643012a032.jpg',
    },
    {
      airportName: 'Dubai International',
      icaoCode: 'OMDB',
      image: 'https://www.airlive.net/wp-content/uploads/2016/02/dubai_dxb.jpg',
    },
    {
      airportName: 'Madrid Barajas Airport',
      icaoCode: 'LEMD',
      image:
        'https://image.cnbcfm.com/api/v1/image/106148163-1569416684892gettyimages-1170982755.jpeg?v=1569416757',
    },
    {
      airportName: 'Barcelona–El Prat Airport',
      icaoCode: 'LEBL',
      image:
        'https://media.architecturaldigest.com/photos/5d8d2004b9bc39000864c260/master/w_2835,h_2568,c_limit/05_ZHA_Beijing%20Daxing%20Int%20Airport_%C2%AEHufton+Crow.jpg',
    },
    {
      airportName: 'Istanbul Airport',
      icaoCode: 'LTBA',
      image: 'http://www.hebels.nl/flights/20120220-3/img/008.jpg',
    },
  ];
  return (
    <div className="mainDashboard">
      <h1 className="dash-header">dashboard content</h1>

      <div className="imageContainer ">
        {airportArray.map((item, index) => {
          return (
            <div>
              <CustomCard
                setOpen={(val) => {
                  setModalStatus(val);
                  setMyData({ airName: item.airportName, code: item.icaoCode });
                }}
                key={index + 'djhbcn'}
                image={item.image}
                name={item.airportName}
              />
            </div>
          );
        })}
      </div>
      <CustomModal
        visible={modalStatus}
        title={myData.airName}
        code={myData.code}
        setVisible={(val) => {
          setModalStatus(val);
        }}
      />
    </div>
  );
}
