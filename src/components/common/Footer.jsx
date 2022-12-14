import React from "react"
import { social } from "../data/dummydata"

const Footer = () => {
  return (
    <>
      <footer data-aos="zoom-in">
        {social.map((item) => (
          <>
            <i>{item.icon}</i>
          </>
        ))}
        <p>All Right Reserved 2022</p>
      </footer>
      {/* <footer>
        {social.map((item) => (
          <>
            <i data-aos='zoom-in'>{item.icon}</i>
          </>
        ))}
        <p data-aos='zoom-in'>All Right Reserved 2022</p>
      </footer> */}
    </>
  );
}

export default Footer
