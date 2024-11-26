// import React from "react";
// import "./footer.css";
// import milk from "../images/milk.jpg";
// import jui from "../images/jui.jpg";
// import juice1 from "../images/juice1.jpg";
// import new3 from "../images/new3.avif";
// import rice from "../images/rice.jpg";

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-column">
//         <h3>Pals'</h3>
//         <p>For more infomation follow us on our social media platforms.</p>
//         <div className="social-icons">
//           {/* <a href="#">
//             <i className="fa fa-twitter"></i>
//           </a> */}
//           <a href="https://www.facebook.com/PalsFoodCourtskireka/">
//             <i className="fa fa-facebook"></i>
//           </a>
//           <a href="https://www.instagram.com/palzfoodcourtofficial_/">
//             <i className="fa fa-instagram"></i>
//           </a>
//         </div>
//       </div>
//       <div className="footer-column">
//         <h3>Open Hours</h3>
//         <ul>
//           <li>
//             Sunday <span>24hrs</span>
//           </li>
//           <li>
//             Monday <span>24hrs</span>
//           </li>
//           <li>
//             Tuesday <span>24hrs</span>
//           </li>
//           <li>
//             Wednesday <span>24hrs</span>
//           </li>
//           <li>
//             Thursday <span>24hrs</span>
//           </li>
//           <li>
//             Friday <span>24hrs</span>
//           </li>
//           <li>
//             Saturday <span>6pm-6am</span>
//           </li>
//         </ul>
//       </div>
//       <div className="footer-column">
//         <h3>Instagram</h3>
//         <div className="instagram-images">
//           <img
//             src="https://scontent.fnbo16-1.fna.fbcdn.net/v/t1.6435-9/87362677_478992969670782_2391547763050414080_n.jpg?stp=dst-jpg_p526x296&_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_ohc=BHSNC0bYsOIQ7kNvgHi3w9A&_nc_ht=scontent.fnbo16-1.fna&oh=00_AYDa646PvkuMnZeBpWqMce8PYXV317SlUgQkY2PH7m02Aw&oe=66AB60DF"
//             alt="Instagram"
//           />
//           <img
//             src="https://scontent.fnbo16-1.fna.fbcdn.net/v/t1.6435-9/87330534_478981256338620_2151039283920633856_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=7b2446&_nc_ohc=J4BBjv3uNoQQ7kNvgGWAYMk&_nc_ht=scontent.fnbo16-1.fna&oh=00_AYAWWk6jSHG-2FLuBeyQLwG6rbi_g5eRTjXIZ2VgKb7SBA&oe=66AB6D5F"
//             alt="Instagram"
//           />
//           <img
//             src="https://scontent.fnbo16-1.fna.fbcdn.net/v/t1.6435-9/87848156_478981339671945_8489605878247325696_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_ohc=VzhfPKtg-0kQ7kNvgHTdp-5&_nc_ht=scontent.fnbo16-1.fna&gid=AMjiXTPhqMszQ2vPWl0-DdK&oh=00_AYApitCwJihVZOxZU6K_wPcL8C5EmxnnjP-RlbFCwmVYWw&oe=66AB6234"
//             alt="Instagram"
//           />
//           <img
//             src="https://scontent.fnbo16-1.fna.fbcdn.net/v/t1.6435-9/87253080_478981389671940_301968245659795456_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_ohc=jZBGDSlE1YoQ7kNvgHOSaGs&_nc_ht=scontent.fnbo16-1.fna&oh=00_AYDvI5NO3CdrQvY2goWgZIbwLHPfxdpT49fgMi2RJMRJlA&oe=66AB58B1"
//             alt="Instagram"
//           />
//           <img
//             src="https://scontent.fnbo16-1.fna.fbcdn.net/v/t1.6435-9/44049097_173079450262137_3880818438758727680_n.jpg?stp=dst-jpg_p180x540&_nc_cat=105&ccb=1-7&_nc_sid=13d280&_nc_ohc=Wl4s7RqYJJMQ7kNvgFT0APQ&_nc_ht=scontent.fnbo16-1.fna&oh=00_AYDWVXtsNNCNWJBWqCWFNByE5lXkIO5lEJpgkpIMXwt3jQ&oe=66AB562D"
//             alt="Instagram"
//           />
//           <img src={milk} alt="Instagram" />

//           <img src={jui} alt="Instagram" />
//           <img src={juice1} alt="Instagram" />
//           <img src={rice} alt="Instagram" />
//           <img src={new3} alt="Instagram" />
//         </div>
//       </div>
//       <div className="footer-column">
//         <h3>Newsletter</h3>
//         <p>
//           Far far away, behind the word mountains, come and enjoy the great
//           taste.
//         </p>
//         <form>
//           <input type="email" placeholder="Enter email address" />
//           <button type="submit">Subscribe</button>
//         </form>
//       </div>
//       <div className="footer-bottom">
//         <marquee>
//           Copyright ©2024 All rights reserved | @ Pals' Food Court{" "}
//           <i className="fa fa-heart"></i>
//         </marquee>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import { Link } from "react-router-dom";
import "./footer.css"; // Assuming you have a CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-column">
        <h3>Contact us</h3>
        <p>
          <Link to="/contact">palsfoodcourt@gmail.com</Link>
        </p>
        <p>
          <Link to="/contact">+256 753175000</Link>
        </p>
        <p>
          <Link to="/contact">+256 200 78 888</Link>
        </p>
      </div>
      <div className="footer-column">
        <h3>Pals'</h3>
        <p>For more information follow us on our social media platforms;</p>
        <div className="social-icons">
          <a href="https://www.facebook.com/PalsFoodCourtskireka/">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/palzfoodcourtofficial_/">
            <i className="fa fa-instagram"></i>
          </a>
        </div>
      </div>
      <div className="footer-column">
        <h3>Open Hours</h3>
        <ul>
          <p>
            Sunday - Friday: <span>24hrs</span>
          </p>
          {/* <li>
            Monday <span>24hrs</span>
          </li>
          <li>
            Tuesday <span>24hrs</span>
          </li>
          <li>
            Wednesday <span>24hrs</span>
          </li>
          <li>
            Thursday <span>24hrs</span>
          </li>
          <li>
            Friday <span>24hrs</span>
          </li> */}
          <p>
            Saturday : <span>6pm-6am</span>
          </p>
        </ul>
      </div>
      <div className="our-menu">
        <h4>OUR MENU</h4>
        <ul>
          <li>
            <Link to={`/menu/breakfast?menu=${8}`}>Breakfast</Link>
          </li>
          <li>
            <Link to={`/menu/breakfast?menu=${9}`}>Lunch</Link>
          </li>
          <li>
            <Link to={`/menu/breakfast?menu=${10}`}>Fast Foods</Link>
          </li>
          <li>
            <Link to={`/menu/breakfast?menu=${12}`}>Pizza,Salads & Fruits</Link>
          </li>
          <li>
            <Link to={`/menu/breakfast?menu=${13}`}>Drinks</Link>
          </li>
        </ul>
      </div>
      <div className="footer-bottom">
        <marquee>
          Copyright ©2024 All rights reserved | @ Pals' Food Court{" "}
          <i className="fa fa-heart"></i>
        </marquee>
      </div>
    </footer>
  );
};

export default Footer;
