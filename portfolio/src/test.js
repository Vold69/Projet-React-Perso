import React from "react";
import "./newCss.scss";

const Test = () => {
  return (
    <>
      <section className="main-container-contact">
        <div className="contact-svg-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
            xmlSpace="preserve"
            className="u-svg-content"
            viewBox="0 0 160 140"
            x="0px"
            y="0px"
            id="svg-c4d4"
          >
            <g>
              <g>
                <path
                  fill="#2f4ace"
                  d="M138.9,102.2c-9.5,10.1-24.4,20.2-41.2,27.4C63.2,144.5,21,147.1,3.1,112.4c-9.9-19.1,6.5-28.8,11.8-45.7
			c5.3-16.9-11.4-32.3-5.1-49.9c1.8-4.9,4.9-9,8.9-11.9C24,1,30.8-0.8,37.8,0.3C43.6,1.2,49,3.5,54.3,5.7c8.8,3.7,17.4,7.1,26.3,9.8
			c15.7,4.7,31.3,3.7,47.1,7.2c8.5,1.9,16.7,5.6,22.6,11.8C170.3,55.7,155.8,84.1,138.9,102.2z"
                />
              </g>
            </g>
          </svg>
        </div>
        <div className="contact-svg-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
            xmlSpace="preserve"
            className="u-svg-content"
            viewBox="0 0 160 120"
            x="0px"
            y="0px"
            id="svg-b310"
          >
            <path
              transform="rotate(9.5)"
              fill="#2f4ace"
              d="M124.3,80.3c20.5-1.1,32-18.4,34.8-31.5c4.7-22.6-6.7-55.4-81.5-47.7c-124.8,12.7-75.1,145.7-16.9,114
	C99.9,93.7,86.4,82.3,124.3,80.3z"
            />
          </svg>
        </div>
        <div className="contact-container ">
          <div className="contact-info ">
            <h2 className="">Contact us</h2>
            <p className="">
              3045 10 Sunrize Avenue, 123-456-7890
              <br />
              Mon – Fri: 9:00 am – 8:00 pm,
              <br />
              Sat – Sun: 9:00 am – 10 pm
              <br />
              <a href="" className="" target="_blank">
                contacts@esbnyc.com
              </a>
            </p>
          </div>
          <div className="input-container ">
            <form
              action="#"
              method="POST"
              className=""
              source="custom"
              name="form"
            >
              <div className="input input-1">
                <input type="text" name="name" className="" required />
                <label htmlFor="name-3b9a" className="">
                  Enter your Name
                </label>
              </div>
              <div className="input input-2">
                <input type="email" name="email" className="" required />
                <label htmlFor="email-3b9a" className="">
                  Enter a valid email address
                </label>
              </div>
              <div className="input textarea">
                <textarea
                  rows={6}
                  cols={50}
                  name="message"
                  className=""
                  required
                  defaultValue={""}
                />
                <label htmlFor="message-3b9a" className="label-textarea">
                  Enter your message
                </label>
              </div>
              {/* <div> */}
              <button className="submit">SUBMIT</button>
              {/* <a href="#" className="">
                  Submit
                </a> */}
              {/* <input type="submit" defaultValue="submit" className="" /> */}
              {/* </div> */}
              {/* <div className="none">Thank you! Your message has been sent.</div>
              <div className="none">
                Unable to send your message. Please fix errors then try again.
              </div> */}
              {/* <input type="hidden" defaultValue name="recaptchaResponse" /> */}
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Test;
