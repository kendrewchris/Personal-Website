import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl'; 

const Education = () => {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1Ijoia2Vubnl0aGVnb2F0IiwiYSI6ImNsamRqNG00ZTE3ZWEzanFyMno4NWtkemgifQ.BA0FOJ1Cbsd9BosqS9vpdA'; 

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-117.326, 33.9734],
      zoom: 10,
    });

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
      }
    };
  }, []);

  const handleCardClick = (lng, lat) => {
    if (mapRef.current) {
      mapRef.current.flyTo({
        center: [lng, lat],
        zoom: 14,
      });
    }
  };

  const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    padding: '1rem',
    backgroundColor: '#f1f1f1',
    borderRadius: '5px',
    cursor: 'pointer',
    marginBottom: '1rem',
  };

  const Riverside = () => (
    <div className="education-card">
        <h4 className="font-poppins font-semibold text-white text-[18px] leading=[23px] mb-1 ">
          University of California, Riverside
        </h4>
        <p className="font-poppins font-normal text-white text-[16px] leading=[24px] mb-1 education-padding "> 
          Riverside, CA
        </p>
        <p className="font-poppins font-normal text-white text-[12px] leading=[20px] mb-1 education-padding "> 
          Expected Graduation: December 2023
        </p>
        <p className="font-poppins font-normal text-white text-[10px] leading=[18px] mb-1 education-padding">
        Relevant Coursework: Data Structures & Algorithms, Machine Organization & Assembly Language, 
        Design of Computer Operating Systems, Database Management Systems, Instruction Set Architecture, 
        Software Construction, Data Analysis Methods, Introduction to Artificial Intelligence, Introduction to Information Retrieval, 
        Compiler Design, Technical Communications
        </p>
        <button onClick={() => handleCardClick(-117.326, 33.9734)} className = 'education-button'>View</button>
    </div>
  )
  
  const Diablo = () => (
    <div className="education-card">
        <h4 className="font-poppins font-semibold text-white text-[18px] leading=[23px] mb-1 ">
          Diablo Valley College
        </h4>
        <p className="font-poppins font-normal text-white text-[16px] leading=[24px] mb-1 education-padding "> 
          San Ramon, CA
        </p>
        <p className="font-poppins font-normal text-white text-[12px] leading=[20px] mb-1 education-padding "> 
          Attendance: June 2019 - May 2021
        </p>
        <p className="font-poppins font-normal text-white text-[12px] leading=[20px] mb-1 education-padding">
          Graduated with Honors
        </p>
        <button onClick={() => handleCardClick(-121.9098, 37.7549)} className = 'education-button'>View</button>
    </div>
  )

  return (
    <section id='education'>
    <div className = 'education-container'>
      <Riverside/>
      <Diablo/>
      <div
        style={{
          flex: 1,
          height: '40vw',
          width: '40vw',
          border: '1px solid #ddd',
          borderRadius: '1vw',
        }}
        ref={mapContainerRef}
      ></div>
    </div>
    </section>
  );
};

export default Education;


