import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { BiSolidDownArrow } from "react-icons/bi";
import { BsHouseHeartFill } from "react-icons/bs";
import "./OurValue.css";
import Image1 from "../../../../assets/abj4.jpg";

const OurValue = () => {
  return (
    <div className='ourvalue__container'>
      <div className='container__content'>
        <div className='content__1'>
          <div className='img__container'>
            <img src={Image1} alt='' />
          </div>
        </div>

        <div className='content__2'>
          <div className='top__text'>
            <h4>Our Value</h4>
            <h5>Value we Give to You</h5>
          </div>

          <div className='tabs__container'>
            <div className='tabs__template'>
              <h3>
                <BsHouseHeartFill className='icon' />
                Best interest rates
                <BiSolidDownArrow className='icon' />
              </h3>
              <Tabs>
                <TabList className='tablist'>
                  <Tab className='tab tab__1'>Rate Lock</Tab>
                  <Tab className='tab tab__2'>Flexible Terms</Tab>
                  <Tab className='tab tab__3'>Transparency</Tab>
                </TabList>

                <TabPanel>
                  <p className='para__1'>
                    Worried about rate fluctuations? Take advantage of our rate
                    lock feature to secure your rate while you shop for your new
                    home.
                  </p>
                </TabPanel>
                <TabPanel>
                  <p className='para__2'>
                    We offer a range of mortgage terms, including fixed-rate and
                    adjustable rate options, so you can choose what works best
                    for you.
                  </p>
                </TabPanel>
                <TabPanel>
                  <p className='para__3'>
                    We believe in complete transparency. You'll receive clear
                    and detailed information about our interest rates, fees, and
                    terms, empowering you to make informed choices.
                  </p>
                </TabPanel>
              </Tabs>
            </div>

            <div className='tabs__template'>
              <h3>
                <BsHouseHeartFill className='icon' />
                Prevent unstable prices
                <BiSolidDownArrow className='icon' />
              </h3>
              <Tabs>
                <TabList className='tablist'>
                  <Tab className='tab tab__1'>Rate Lock</Tab>
                  <Tab className='tab tab__2'>Flexible Terms</Tab>
                  <Tab className='tab tab__3'>Transparency</Tab>
                </TabList>

                <TabPanel>
                  <p className='para__1'>
                    Worried about rate fluctuations? Take advantage of our rate
                    lock feature to secure your rate while you shop for your new
                    home.
                  </p>
                </TabPanel>
                <TabPanel>
                  <p className='para__2'>
                    We offer a range of mortgage terms, including fixed-rate and
                    adjustable rate options, so you can choose what works best
                    for you.
                  </p>
                </TabPanel>
                <TabPanel>
                  <p className='para__3'>
                    We believe in complete transparency. You'll receive clear
                    and detailed information about our interest rates, fees, and
                    terms, empowering you to make informed choices.
                  </p>
                </TabPanel>
              </Tabs>
            </div>

            <div className='tabs__template'>
              <h3>
                <BsHouseHeartFill className='icon' />
                Best price
                <BiSolidDownArrow className='icon' />
              </h3>
              <Tabs>
                <TabList className='tablist'>
                  <Tab className='tab tab__1'>Rate Lock</Tab>
                  <Tab className='tab tab__2'>Flexible Terms</Tab>
                  <Tab className='tab tab__3'>Transparency</Tab>
                </TabList>

                <TabPanel>
                  <p className='para__1'>
                    Worried about rate fluctuations? Take advantage of our rate
                    lock feature to secure your rate while you shop for your new
                    home.
                  </p>
                </TabPanel>
                <TabPanel>
                  <p className='para__2'>
                    We offer a range of mortgage terms, including fixed-rate and
                    adjustable rate options, so you can choose what works best
                    for you.
                  </p>
                </TabPanel>
                <TabPanel>
                  <p className='para__3'>
                    We believe in complete transparency. You'll receive clear
                    and detailed information about our interest rates, fees, and
                    terms, empowering you to make informed choices.
                  </p>
                </TabPanel>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurValue;
