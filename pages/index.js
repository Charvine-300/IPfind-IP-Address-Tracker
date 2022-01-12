import Head from 'next/head'
import dynamic from 'next/dynamic'
import Search from '../components/Search'
import { useState } from 'react';
import styles from '../styles/Home.module.css'

export default function Home() {
  const Map = dynamic(() => import("../components/Map"), {ssr: false});
  const bearing = 0;
  const nullData = '- -';
  const [IP, setIP] = useState();
  const [data1, setData1] = useState(nullData);
  const [data2, setData2] = useState(nullData);
  const [data3, setData3] = useState(nullData);
  const [data4, setData4] = useState(nullData);
  const [lng, setLng] = useState(bearing);
  const [lat, setLat] = useState(bearing);
  const apiKey = 'at_Ha3uvchXkKlQeqqK5MLOs6I2N4U5f';

  const GenerateIP = async () => {
    setData1(nullData);
    setData2(nullData);
    setData3(nullData);
    setData4(nullData);
    const res = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${IP}`);
    const data = await res.json();

    setData1(data.ip);
    setData2(`${data.location.city}, ${data.location.region}, ${data.location.country}`);
    setData3(`UTC  ${data.location.timezone}`);
    setData4(data.isp);
    setLng(data.location.lng);
    setLat(data.location.lat);
  }

  function changeIP(event) {
    setIP(event.target.value);
  }

  function searchIP() {
    GenerateIP();
  }

  function enterKey(event) {
    if (event.key === 'Enter')  {
      event.preventDefault();
      event.stopPropagation();
    }
  }

  return (
    <>
      <Head>
        <title> IPfind | IP Address tracker </title>
        <meta name="description" content="IP Address tracker. Tracking IP addresses all  over the world and beyond." />
        <link rel="icon" href="/ipfind.png" />
      </Head>
      <Search data1={data1} data2={data2} data3={data3} data4={data4} changeIP={changeIP} searchIP={searchIP} enterKey={enterKey} />
      <div className={styles.body}>
        <div className={styles.header}>
          <h1> IP Address Tracker </h1>
        </div>
        <Map lng={lng} lat={lat} data1={data1} data2={data2} />
      </div>
    </>
  )
}
