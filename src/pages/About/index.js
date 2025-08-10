import classNames from "classnames/bind";
import styles from "./About.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const cx = classNames.bind(styles);

function About() {
  // Phần chữ kéo ngang
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // Bắt đầu khi phần tử xuất hiện
  });
  const x = useTransform(scrollYProgress, [0, 1], ["100%", "-75%"]);

  // Phần step scroll
  const ref1 = useRef(null);
  const { scrollYProgress: scrollY1 } = useScroll({
    target: ref1,
    offset: ["center end", "end start"],
  });
  const y1 = useTransform(scrollY1, [0, 0.6], ["0px", "558px"]);
  const backgroundColor1 = useTransform(
    scrollY1,
    [0, 0.6],
    ["#fff", "#ffc2b0"]
  );

  const ref2 = useRef(null);
  const { scrollYProgress: scrollY2 } = useScroll({
    target: ref2,
    offset: ["start center", "end start"],
  });
  const y2 = useTransform(scrollY2, [0, 0.6], ["0px", "558px"]);
  const backgroundColor2 = useTransform(
    scrollY2,
    [0, 0.6],
    ["#fff", "#ffc2b0"]
  );

  const ref3 = useRef(null);
  const { scrollYProgress: scrollY3 } = useScroll({
    target: ref3,
    offset: ["start center", "end start"],
  });
  const y3 = useTransform(scrollY3, [0, 0.6], ["0px", "558px"]);
  const backgroundColor3 = useTransform(
    scrollY3,
    [0, 0.6],
    ["#fff", "#ffc2b0"]
  );

  return (
    <div className={cx("About")}>
      <div className={cx("hero")}>
        <div className={cx("left")}>
          <h1 className={cx("header")}>
            <span className={cx("title")}>WHO WE</span>
            <span className={cx("title-bite")}>Are</span>
          </h1>

          <p>
            We’re passionate about creating delicious, high-quality fast food
            that brings people together. We believe that fast food should be
            more than just quick and convenient — it should be a flavorful
            experience that you look forward to every time.
          </p>

          <div className={cx("contact-us-btn")}>
            <a href="/contact" className={cx("btn-link")}>
              CONTACT US
              <div className={cx("btn-arrow")}>
                <FontAwesomeIcon
                  className={cx("icon-arrow")}
                  icon={faArrowRight}
                />
              </div>
            </a>
          </div>
        </div>

        <div className={cx("marquee-wrapper")}>
          <div className={cx("marquee-list")}>
            <img
              src={cx(
                "https://cdn.prod.website-files.com/678b0c0393efc5b8320e8808/678b0c0393efc5b8320e8848_Frame%201.webp"
              )}
              alt={"Burger"}
              className={cx("marquee-image")}
            />
            <img
              src={cx(
                "https://cdn.prod.website-files.com/678b0c0393efc5b8320e8808/678b0c0393efc5b8320e8843_Frame%2010.webp"
              )}
              alt={"Burger"}
              className={cx("marquee-image")}
            />
            <img
              src={cx(
                "https://cdn.prod.website-files.com/678b0c0393efc5b8320e8808/678b0c0393efc5b8320e8844_Frame%203.webp"
              )}
              alt={"Burger"}
              className={cx("marquee-image")}
            />
            <img
              src={cx(
                "https://cdn.prod.website-files.com/678b0c0393efc5b8320e8808/678b0c0393efc5b8320e884a_Frame%206.webp"
              )}
              alt={"Burger"}
              className={cx("marquee-image")}
            />
            <img
              src={cx(
                "https://cdn.prod.website-files.com/678b0c0393efc5b8320e8808/678b0c0393efc5b8320e884d_Frame%208.webp"
              )}
              alt={"Burger"}
              className={cx("marquee-image")}
            />
            <img
              src={cx(
                "https://cdn.prod.website-files.com/678b0c0393efc5b8320e8808/678b0c0393efc5b8320e884b_Frame%2011.webp"
              )}
              alt={"Burger"}
              className={cx("marquee-image")}
            />
            <img
              src={cx(
                "https://cdn.prod.website-files.com/678b0c0393efc5b8320e8808/678b0c0393efc5b8320e8846_Frame%205.webp"
              )}
              alt={"Burger"}
              className={cx("marquee-image")}
            />
            <img
              src={cx(
                "https://cdn.prod.website-files.com/678b0c0393efc5b8320e8808/678b0c0393efc5b8320e884c_Frame%207.webp"
              )}
              alt={"Burger"}
              className={cx("marquee-image")}
            />
            <img
              src={cx(
                "https://cdn.prod.website-files.com/678b0c0393efc5b8320e8808/678b0c0393efc5b8320e8845_Frame%202.webp"
              )}
              alt={"Burger"}
              className={cx("marquee-image")}
            />
          </div>
        </div>
      </div>

      <div
        ref={ref}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "var(--yellow-color)",
          overflow: "hidden",
        }}
      >
        <motion.h2 style={{ x, whiteSpace: "nowrap" }} className="header">
          <span
            className={cx("title", "phone")}
            style={{ fontSize: "12.5rem", color: "#000", fontWeight: "500" }}
          >
            WHERE TASTE COMES
          </span>
          <span
            className={cx("title-bite", "phone")}
            style={{ fontSize: "10rem" }}
          >
            Alive
          </span>
        </motion.h2>
      </div>

      <div className={cx("our-story")}>
        <div className={cx("our-story-wrapper")}>
          <img
            src={cx(
              "https://cdn.prod.website-files.com/678b0c0393efc5b8320e8808/678d0e09d862a1b5bb213ea9_Frame%2023.webp"
            )}
            alt={"Core Values"}
            className={cx("our-story-image")}
          />
          <div className={cx("our-story-content")}>
            <p>Our Story</p>
            <h2 className={cx("our-story-header")}>
              <span className={cx("our-story-title")}>WHERE IT ALL</span>
              <span className={cx("our-story-title-highlight")}>Began</span>
            </h2>

            <div className={cx("our-story-description")}>
              <p>
                We started with the love of good food and the vision of
                redefining the concept of fast food. What began as a small idea
                has grown into a place where taste, quality and community come
                together.
              </p>
              <p>
                From our first burger to every meal we serve today, our story is
                about passion, innovation, and a commitment to making every bite
                memorable.
              </p>
            </div>

            <div className={cx("menu-btn")}>
              <a href="/menu" className={cx("btn-link")}>
                OUR MENU
                <div className={cx("btn-arrow")}>
                  <FontAwesomeIcon
                    className={cx("icon-arrow")}
                    icon={faArrowRight}
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={cx("our-story")}>
        <div className={cx("our-story-wrapper")}>
          <div className={cx("our-mission-content")}>
            <p>Our Mission</p>
            <h2 className={cx("our-story-header")}>
              <span className={cx("our-story-title")}>FLAVOR WITH</span>
              <span className={cx("our-story-title-highlight")}>Purpose</span>
            </h2>

            <div className={cx("our-story-description")}>
              <p>
                Our mission is simple: to deliver fast, fresh, and flavorful
                meals that bring joy to every bite. We’re dedicated to creating
                a dining experience that combines quality ingredients,
                exceptional taste, and unbeatable convenience.
              </p>
              <p>
                Whether it’s a quick snack or a full meal, we strive to make
                every moment with us unforgettable.
              </p>
            </div>

            <div className={cx("menu-btn")}>
              <a href="/menu" className={cx("btn-link")}>
                OUR MENU
                <div className={cx("btn-arrow")}>
                  <FontAwesomeIcon
                    className={cx("icon-arrow")}
                    icon={faArrowRight}
                  />
                </div>
              </a>
            </div>
          </div>
          <img
            src={cx(
              "https://cdn.prod.website-files.com/678b0c0393efc5b8320e8808/678d0e09760478a30ec3be2d_Frame%2021.webp"
            )}
            alt={"Core Values"}
            className={cx("our-story-image")}
          />
        </div>
      </div>

      <div className={cx("our-process")}>
        <div className={cx("our-process-wrapper")}>
          <div className={cx("our-mission-content")}>
            <p>Our Process</p>
            <h2 className={cx("our-story-header")}>
              <span className={cx("our-story-title")}>FRESH, FAST,</span>
              <span className={cx("our-story-title-highlight")}>Purpose</span>
            </h2>
          </div>

          <div className={cx("step-wrapper")}>
            <div className={cx("step-1")}>
              <div className={cx("step-left")}>
                <motion.div
                  className={cx("scroll-container")}
                  ref={ref1}
                  style={{ y: y1 }}
                >
                  <p>STEP 1:</p>
                  <motion.div
                    style={{ backgroundColor: backgroundColor1 }}
                    className={cx("step-dot")}
                  >
                    <span>01</span>
                  </motion.div>
                </motion.div>
              </div>

              <div className={cx("step-right")}>
                <div className={cx("step-description")}>
                  <h3>Sourcing Quality Ingredients</h3>
                  <p>
                    We start by carefully selecting the freshest and
                    highest-quality ingredients. From premium cuts of meat to
                    farm-fresh produce, every component of our menu is chosen to
                    ensure maximum flavor and nutritional value.
                  </p>
                  <img
                    src={cx(
                      "https://cdn.prod.website-files.com/678b0c0393efc5b8320e8808/6791015142bf197859a505a9_member-picture-05.webp"
                    )}
                    alt={"Core Values"}
                    className={cx("our-process-image")}
                  />
                </div>
              </div>
            </div>

            <div className={cx("line")}></div>

            <div className={cx("step-2")}>
              <div className={cx("step-left")}>
                <motion.div
                  className={cx("scroll-container")}
                  ref={ref2}
                  style={{ y: y2 }}
                >
                  <p>STEP 2:</p>
                  <motion.div
                    style={{ backgroundColor: backgroundColor2 }}
                    className={cx("step-dot")}
                  >
                    <span>02</span>
                  </motion.div>
                </motion.div>
              </div>

              <div className={cx("step-right")}>
                <div className={cx("step-description")}>
                  <h3>Crafting with Care</h3>
                  <p>
                    Our team of expert chefs prepares each meal with precision
                    and passion. Whether it’s grilling the perfect burger or
                    frying golden, crispy fries, we follow tried-and-true
                    methods to bring out the best in every dish.
                  </p>
                  <img
                    src={cx(
                      "https://cdn.prod.website-files.com/678b0c0393efc5b8320e8808/6791015142bf197859a505a1_member-picture-06.webp"
                    )}
                    alt={"Core Values"}
                    className={cx("our-process-image")}
                  />
                </div>
              </div>
            </div>

            <div className={cx("line")}></div>

            <div className={cx("step-3")}>
              <div className={cx("step-left")}>
                <motion.div
                  className={cx("scroll-container")}
                  ref={ref3}
                  style={{ y: y3 }}
                >
                  <p>STEP 3:</p>
                  <motion.div
                    style={{ backgroundColor: backgroundColor3 }}
                    className={cx("step-dot")}
                  >
                    <span>03</span>
                  </motion.div>
                </motion.div>
              </div>

              <div className={cx("step-right")}>
                <div className={cx("step-description")}>
                  <h3>Serving with Speed</h3>
                  <p>
                    Once your meal is ready, we deliver it fresh and fast to
                    your table or doorstep. With our streamlined process, we
                    ensure you enjoy your food at its peak — hot, fresh, and
                    ready to satisfy your cravings.
                  </p>
                  <img
                    src={cx(
                      "https://cdn.prod.website-files.com/678b0c0393efc5b8320e8808/6791015142bf197859a50589_member-picture-02.webp"
                    )}
                    alt={"Core Values"}
                    className={cx("our-process-image")}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={cx("our-team")}>
        <h2 className={cx("our-team-header")}>
          <span className={cx("our-team-title")}>THE PEOPLE BEHIND</span>
          <div className={cx("title-wrapper")}>
            <span className={cx("our-team-title")}>THE</span>
            <span className={cx("our-team-title-highlight")}>Flavor</span>
          </div>
        </h2>

        <div className={cx("team-avatar-wrapper")}>
          <div className={cx("member-info")}>
            <div className={cx("avatar-img-wrapper")}>
              <img
                src={cx(
                  "https://cdn.prod.website-files.com/678b0c0393efc5b8320e8808/6791015142bf197859a50591_member-picture-01.webp"
                )}
                alt={"Core Values"}
                className={cx("avatar-image")}
              />
            </div>
            <div>
              <h3>Michael Reynolds</h3>
              <p>Head Chef</p>
            </div>
            <div className={cx("socials")}>
              <a
                className={cx("icon-wrapper")}
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className={cx("icon-social")}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                >
                  <path d="M576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 440 146.7 540.8 258.2 568.5L258.2 398.2L205.4 398.2L205.4 320L258.2 320L258.2 286.3C258.2 199.2 297.6 158.8 383.2 158.8C399.4 158.8 427.4 162 438.9 165.2L438.9 236C432.9 235.4 422.4 235 409.3 235C367.3 235 351.1 250.9 351.1 292.2L351.1 320L434.7 320L420.3 398.2L351 398.2L351 574.1C477.8 558.8 576 450.9 576 320z" />
                </svg>
              </a>
              <a
                className={cx("icon-wrapper")}
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className={cx("icon-social")}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                >
                  <path d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z" />
                </svg>
              </a>
              <a
                className={cx("icon-wrapper")}
                href="https://www.x.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className={cx("icon-social")}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                >
                  <path d="M453.2 112L523.8 112L369.6 288.2L551 528L409 528L297.7 382.6L170.5 528L99.8 528L264.7 339.5L90.8 112L236.4 112L336.9 244.9L453.2 112zM428.4 485.8L467.5 485.8L215.1 152L173.1 152L428.4 485.8z" />
                </svg>
              </a>
              <a
                className={cx("icon-wrapper")}
                href="https://www.web.whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className={cx("icon-social")}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                >
                  <path d="M476.9 161.1C435 119.1 379.2 96 319.9 96C197.5 96 97.9 195.6 97.9 318C97.9 357.1 108.1 395.3 127.5 429L96 544L213.7 513.1C246.1 530.8 282.6 540.1 319.8 540.1L319.9 540.1C442.2 540.1 544 440.5 544 318.1C544 258.8 518.8 203.1 476.9 161.1zM319.9 502.7C286.7 502.7 254.2 493.8 225.9 477L219.2 473L149.4 491.3L168 423.2L163.6 416.2C145.1 386.8 135.4 352.9 135.4 318C135.4 216.3 218.2 133.5 320 133.5C369.3 133.5 415.6 152.7 450.4 187.6C485.2 222.5 506.6 268.8 506.5 318.1C506.5 419.9 421.6 502.7 319.9 502.7zM421.1 364.5C415.6 361.7 388.3 348.3 383.2 346.5C378.1 344.6 374.4 343.7 370.7 349.3C367 354.9 356.4 367.3 353.1 371.1C349.9 374.8 346.6 375.3 341.1 372.5C308.5 356.2 287.1 343.4 265.6 306.5C259.9 296.7 271.3 297.4 281.9 276.2C283.7 272.5 282.8 269.3 281.4 266.5C280 263.7 268.9 236.4 264.3 225.3C259.8 214.5 255.2 216 251.8 215.8C248.6 215.6 244.9 215.6 241.2 215.6C237.5 215.6 231.5 217 226.4 222.5C221.3 228.1 207 241.5 207 268.8C207 296.1 226.9 322.5 229.6 326.2C232.4 329.9 268.7 385.9 324.4 410C359.6 425.2 373.4 426.5 391 423.9C401.7 422.3 423.8 410.5 428.4 397.5C433 384.5 433 373.4 431.6 371.1C430.3 368.6 426.6 367.2 421.1 364.5z" />
                </svg>
              </a>
            </div>
          </div>
          <div className={cx("member-info")}>
            <div className={cx("avatar-img-wrapper")}>
              <img
                src={cx(
                  "https://cdn.prod.website-files.com/678b0c0393efc5b8320e8808/6791015142bf197859a50599_member-picture-04.webp"
                )}
                alt={"Core Values"}
                className={cx("avatar-image")}
              />
            </div>
            <div>
              <h3>Laura Bennett</h3>
              <p>Marketing Manager</p>
            </div>
            <div className={cx("socials")}>
              <a
                className={cx("icon-wrapper")}
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className={cx("icon-social")}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                >
                  <path d="M576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 440 146.7 540.8 258.2 568.5L258.2 398.2L205.4 398.2L205.4 320L258.2 320L258.2 286.3C258.2 199.2 297.6 158.8 383.2 158.8C399.4 158.8 427.4 162 438.9 165.2L438.9 236C432.9 235.4 422.4 235 409.3 235C367.3 235 351.1 250.9 351.1 292.2L351.1 320L434.7 320L420.3 398.2L351 398.2L351 574.1C477.8 558.8 576 450.9 576 320z" />
                </svg>
              </a>
              <a
                className={cx("icon-wrapper")}
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className={cx("icon-social")}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                >
                  <path d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z" />
                </svg>
              </a>
              <a
                className={cx("icon-wrapper")}
                href="https://www.x.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className={cx("icon-social")}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                >
                  <path d="M453.2 112L523.8 112L369.6 288.2L551 528L409 528L297.7 382.6L170.5 528L99.8 528L264.7 339.5L90.8 112L236.4 112L336.9 244.9L453.2 112zM428.4 485.8L467.5 485.8L215.1 152L173.1 152L428.4 485.8z" />
                </svg>
              </a>
              <a
                className={cx("icon-wrapper")}
                href="https://www.web.whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className={cx("icon-social")}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                >
                  <path d="M476.9 161.1C435 119.1 379.2 96 319.9 96C197.5 96 97.9 195.6 97.9 318C97.9 357.1 108.1 395.3 127.5 429L96 544L213.7 513.1C246.1 530.8 282.6 540.1 319.8 540.1L319.9 540.1C442.2 540.1 544 440.5 544 318.1C544 258.8 518.8 203.1 476.9 161.1zM319.9 502.7C286.7 502.7 254.2 493.8 225.9 477L219.2 473L149.4 491.3L168 423.2L163.6 416.2C145.1 386.8 135.4 352.9 135.4 318C135.4 216.3 218.2 133.5 320 133.5C369.3 133.5 415.6 152.7 450.4 187.6C485.2 222.5 506.6 268.8 506.5 318.1C506.5 419.9 421.6 502.7 319.9 502.7zM421.1 364.5C415.6 361.7 388.3 348.3 383.2 346.5C378.1 344.6 374.4 343.7 370.7 349.3C367 354.9 356.4 367.3 353.1 371.1C349.9 374.8 346.6 375.3 341.1 372.5C308.5 356.2 287.1 343.4 265.6 306.5C259.9 296.7 271.3 297.4 281.9 276.2C283.7 272.5 282.8 269.3 281.4 266.5C280 263.7 268.9 236.4 264.3 225.3C259.8 214.5 255.2 216 251.8 215.8C248.6 215.6 244.9 215.6 241.2 215.6C237.5 215.6 231.5 217 226.4 222.5C221.3 228.1 207 241.5 207 268.8C207 296.1 226.9 322.5 229.6 326.2C232.4 329.9 268.7 385.9 324.4 410C359.6 425.2 373.4 426.5 391 423.9C401.7 422.3 423.8 410.5 428.4 397.5C433 384.5 433 373.4 431.6 371.1C430.3 368.6 426.6 367.2 421.1 364.5z" />
                </svg>
              </a>
            </div>
          </div>
          <div className={cx("member-info")}>
            <div className={cx("avatar-img-wrapper")}>
              <img
                src={cx(
                  "https://cdn.prod.website-files.com/678b0c0393efc5b8320e8808/6791015142bf197859a50589_member-picture-02.webp"
                )}
                alt={"Core Values"}
                className={cx("avatar-image")}
              />
            </div>
            <div>
              <h3>James Carter</h3>
              <p>Restaurant Manager</p>
            </div>
            <div className={cx("socials")}>
              <a
                className={cx("icon-wrapper")}
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className={cx("icon-social")}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                >
                  <path d="M576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 440 146.7 540.8 258.2 568.5L258.2 398.2L205.4 398.2L205.4 320L258.2 320L258.2 286.3C258.2 199.2 297.6 158.8 383.2 158.8C399.4 158.8 427.4 162 438.9 165.2L438.9 236C432.9 235.4 422.4 235 409.3 235C367.3 235 351.1 250.9 351.1 292.2L351.1 320L434.7 320L420.3 398.2L351 398.2L351 574.1C477.8 558.8 576 450.9 576 320z" />
                </svg>
              </a>
              <a
                className={cx("icon-wrapper")}
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className={cx("icon-social")}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                >
                  <path d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z" />
                </svg>
              </a>
              <a
                className={cx("icon-wrapper")}
                href="https://www.x.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className={cx("icon-social")}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                >
                  <path d="M453.2 112L523.8 112L369.6 288.2L551 528L409 528L297.7 382.6L170.5 528L99.8 528L264.7 339.5L90.8 112L236.4 112L336.9 244.9L453.2 112zM428.4 485.8L467.5 485.8L215.1 152L173.1 152L428.4 485.8z" />
                </svg>
              </a>
              <a
                className={cx("icon-wrapper")}
                href="https://www.web.whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className={cx("icon-social")}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                >
                  <path d="M476.9 161.1C435 119.1 379.2 96 319.9 96C197.5 96 97.9 195.6 97.9 318C97.9 357.1 108.1 395.3 127.5 429L96 544L213.7 513.1C246.1 530.8 282.6 540.1 319.8 540.1L319.9 540.1C442.2 540.1 544 440.5 544 318.1C544 258.8 518.8 203.1 476.9 161.1zM319.9 502.7C286.7 502.7 254.2 493.8 225.9 477L219.2 473L149.4 491.3L168 423.2L163.6 416.2C145.1 386.8 135.4 352.9 135.4 318C135.4 216.3 218.2 133.5 320 133.5C369.3 133.5 415.6 152.7 450.4 187.6C485.2 222.5 506.6 268.8 506.5 318.1C506.5 419.9 421.6 502.7 319.9 502.7zM421.1 364.5C415.6 361.7 388.3 348.3 383.2 346.5C378.1 344.6 374.4 343.7 370.7 349.3C367 354.9 356.4 367.3 353.1 371.1C349.9 374.8 346.6 375.3 341.1 372.5C308.5 356.2 287.1 343.4 265.6 306.5C259.9 296.7 271.3 297.4 281.9 276.2C283.7 272.5 282.8 269.3 281.4 266.5C280 263.7 268.9 236.4 264.3 225.3C259.8 214.5 255.2 216 251.8 215.8C248.6 215.6 244.9 215.6 241.2 215.6C237.5 215.6 231.5 217 226.4 222.5C221.3 228.1 207 241.5 207 268.8C207 296.1 226.9 322.5 229.6 326.2C232.4 329.9 268.7 385.9 324.4 410C359.6 425.2 373.4 426.5 391 423.9C401.7 422.3 423.8 410.5 428.4 397.5C433 384.5 433 373.4 431.6 371.1C430.3 368.6 426.6 367.2 421.1 364.5z" />
                </svg>
              </a>
            </div>
          </div>
          <div className={cx("member-info")}>
            <div className={cx("avatar-img-wrapper")}>
              <img
                src={cx(
                  "https://cdn.prod.website-files.com/678b0c0393efc5b8320e8808/6791015142bf197859a505a1_member-picture-06.webp"
                )}
                alt={"Core Values"}
                className={cx("avatar-image")}
              />
            </div>
            <div>
              <h3>Sophia Collins</h3>
              <p>Experience Specialist</p>
            </div>
            <div className={cx("socials")}>
              <a
                className={cx("icon-wrapper")}
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className={cx("icon-social")}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                >
                  <path d="M576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 440 146.7 540.8 258.2 568.5L258.2 398.2L205.4 398.2L205.4 320L258.2 320L258.2 286.3C258.2 199.2 297.6 158.8 383.2 158.8C399.4 158.8 427.4 162 438.9 165.2L438.9 236C432.9 235.4 422.4 235 409.3 235C367.3 235 351.1 250.9 351.1 292.2L351.1 320L434.7 320L420.3 398.2L351 398.2L351 574.1C477.8 558.8 576 450.9 576 320z" />
                </svg>
              </a>
              <a
                className={cx("icon-wrapper")}
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className={cx("icon-social")}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                >
                  <path d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z" />
                </svg>
              </a>
              <a
                className={cx("icon-wrapper")}
                href="https://www.x.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className={cx("icon-social")}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                >
                  <path d="M453.2 112L523.8 112L369.6 288.2L551 528L409 528L297.7 382.6L170.5 528L99.8 528L264.7 339.5L90.8 112L236.4 112L336.9 244.9L453.2 112zM428.4 485.8L467.5 485.8L215.1 152L173.1 152L428.4 485.8z" />
                </svg>
              </a>
              <a
                className={cx("icon-wrapper")}
                href="https://www.web.whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className={cx("icon-social")}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                >
                  <path d="M476.9 161.1C435 119.1 379.2 96 319.9 96C197.5 96 97.9 195.6 97.9 318C97.9 357.1 108.1 395.3 127.5 429L96 544L213.7 513.1C246.1 530.8 282.6 540.1 319.8 540.1L319.9 540.1C442.2 540.1 544 440.5 544 318.1C544 258.8 518.8 203.1 476.9 161.1zM319.9 502.7C286.7 502.7 254.2 493.8 225.9 477L219.2 473L149.4 491.3L168 423.2L163.6 416.2C145.1 386.8 135.4 352.9 135.4 318C135.4 216.3 218.2 133.5 320 133.5C369.3 133.5 415.6 152.7 450.4 187.6C485.2 222.5 506.6 268.8 506.5 318.1C506.5 419.9 421.6 502.7 319.9 502.7zM421.1 364.5C415.6 361.7 388.3 348.3 383.2 346.5C378.1 344.6 374.4 343.7 370.7 349.3C367 354.9 356.4 367.3 353.1 371.1C349.9 374.8 346.6 375.3 341.1 372.5C308.5 356.2 287.1 343.4 265.6 306.5C259.9 296.7 271.3 297.4 281.9 276.2C283.7 272.5 282.8 269.3 281.4 266.5C280 263.7 268.9 236.4 264.3 225.3C259.8 214.5 255.2 216 251.8 215.8C248.6 215.6 244.9 215.6 241.2 215.6C237.5 215.6 231.5 217 226.4 222.5C221.3 228.1 207 241.5 207 268.8C207 296.1 226.9 322.5 229.6 326.2C232.4 329.9 268.7 385.9 324.4 410C359.6 425.2 373.4 426.5 391 423.9C401.7 422.3 423.8 410.5 428.4 397.5C433 384.5 433 373.4 431.6 371.1C430.3 368.6 426.6 367.2 421.1 364.5z" />
                </svg>
              </a>
            </div>
          </div>
          <div className={cx("member-info")}>
            <div className={cx("avatar-img-wrapper")}>
              <img
                src={cx(
                  "https://cdn.prod.website-files.com/678b0c0393efc5b8320e8808/6791015142bf197859a505b1_member-picture-03.webp"
                )}
                alt={"Core Values"}
                className={cx("avatar-image")}
              />
            </div>
            <div>
              <h3>Daniel Harris</h3>
              <p>Supply Chain Coordinator</p>
            </div>
            <div className={cx("socials")}>
              <a
                className={cx("icon-wrapper")}
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className={cx("icon-social")}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                >
                  <path d="M576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 440 146.7 540.8 258.2 568.5L258.2 398.2L205.4 398.2L205.4 320L258.2 320L258.2 286.3C258.2 199.2 297.6 158.8 383.2 158.8C399.4 158.8 427.4 162 438.9 165.2L438.9 236C432.9 235.4 422.4 235 409.3 235C367.3 235 351.1 250.9 351.1 292.2L351.1 320L434.7 320L420.3 398.2L351 398.2L351 574.1C477.8 558.8 576 450.9 576 320z" />
                </svg>
              </a>
              <a
                className={cx("icon-wrapper")}
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className={cx("icon-social")}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                >
                  <path d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z" />
                </svg>
              </a>
              <a
                className={cx("icon-wrapper")}
                href="https://www.x.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className={cx("icon-social")}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                >
                  <path d="M453.2 112L523.8 112L369.6 288.2L551 528L409 528L297.7 382.6L170.5 528L99.8 528L264.7 339.5L90.8 112L236.4 112L336.9 244.9L453.2 112zM428.4 485.8L467.5 485.8L215.1 152L173.1 152L428.4 485.8z" />
                </svg>
              </a>
              <a
                className={cx("icon-wrapper")}
                href="https://www.web.whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className={cx("icon-social")}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                >
                  <path d="M476.9 161.1C435 119.1 379.2 96 319.9 96C197.5 96 97.9 195.6 97.9 318C97.9 357.1 108.1 395.3 127.5 429L96 544L213.7 513.1C246.1 530.8 282.6 540.1 319.8 540.1L319.9 540.1C442.2 540.1 544 440.5 544 318.1C544 258.8 518.8 203.1 476.9 161.1zM319.9 502.7C286.7 502.7 254.2 493.8 225.9 477L219.2 473L149.4 491.3L168 423.2L163.6 416.2C145.1 386.8 135.4 352.9 135.4 318C135.4 216.3 218.2 133.5 320 133.5C369.3 133.5 415.6 152.7 450.4 187.6C485.2 222.5 506.6 268.8 506.5 318.1C506.5 419.9 421.6 502.7 319.9 502.7zM421.1 364.5C415.6 361.7 388.3 348.3 383.2 346.5C378.1 344.6 374.4 343.7 370.7 349.3C367 354.9 356.4 367.3 353.1 371.1C349.9 374.8 346.6 375.3 341.1 372.5C308.5 356.2 287.1 343.4 265.6 306.5C259.9 296.7 271.3 297.4 281.9 276.2C283.7 272.5 282.8 269.3 281.4 266.5C280 263.7 268.9 236.4 264.3 225.3C259.8 214.5 255.2 216 251.8 215.8C248.6 215.6 244.9 215.6 241.2 215.6C237.5 215.6 231.5 217 226.4 222.5C221.3 228.1 207 241.5 207 268.8C207 296.1 226.9 322.5 229.6 326.2C232.4 329.9 268.7 385.9 324.4 410C359.6 425.2 373.4 426.5 391 423.9C401.7 422.3 423.8 410.5 428.4 397.5C433 384.5 433 373.4 431.6 371.1C430.3 368.6 426.6 367.2 421.1 364.5z" />
                </svg>
              </a>
            </div>
          </div>
          <div className={cx("member-info")}>
            <div className={cx("avatar-img-wrapper")}>
              <img
                src={cx(
                  "https://cdn.prod.website-files.com/678b0c0393efc5b8320e8808/6791015142bf197859a505a9_member-picture-05.webp"
                )}
                alt={"Core Values"}
                className={cx("avatar-image")}
              />
            </div>
            <div>
              <h3>Emily Rivera</h3>
              <p>Social Media Manager</p>
            </div>
            <div className={cx("socials")}>
              <a
                className={cx("icon-wrapper")}
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className={cx("icon-social")}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                >
                  <path d="M576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 440 146.7 540.8 258.2 568.5L258.2 398.2L205.4 398.2L205.4 320L258.2 320L258.2 286.3C258.2 199.2 297.6 158.8 383.2 158.8C399.4 158.8 427.4 162 438.9 165.2L438.9 236C432.9 235.4 422.4 235 409.3 235C367.3 235 351.1 250.9 351.1 292.2L351.1 320L434.7 320L420.3 398.2L351 398.2L351 574.1C477.8 558.8 576 450.9 576 320z" />
                </svg>
              </a>
              <a
                className={cx("icon-wrapper")}
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className={cx("icon-social")}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                >
                  <path d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z" />
                </svg>
              </a>
              <a
                className={cx("icon-wrapper")}
                href="https://www.x.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className={cx("icon-social")}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                >
                  <path d="M453.2 112L523.8 112L369.6 288.2L551 528L409 528L297.7 382.6L170.5 528L99.8 528L264.7 339.5L90.8 112L236.4 112L336.9 244.9L453.2 112zM428.4 485.8L467.5 485.8L215.1 152L173.1 152L428.4 485.8z" />
                </svg>
              </a>
              <a
                className={cx("icon-wrapper")}
                href="https://www.web.whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className={cx("icon-social")}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                >
                  <path d="M476.9 161.1C435 119.1 379.2 96 319.9 96C197.5 96 97.9 195.6 97.9 318C97.9 357.1 108.1 395.3 127.5 429L96 544L213.7 513.1C246.1 530.8 282.6 540.1 319.8 540.1L319.9 540.1C442.2 540.1 544 440.5 544 318.1C544 258.8 518.8 203.1 476.9 161.1zM319.9 502.7C286.7 502.7 254.2 493.8 225.9 477L219.2 473L149.4 491.3L168 423.2L163.6 416.2C145.1 386.8 135.4 352.9 135.4 318C135.4 216.3 218.2 133.5 320 133.5C369.3 133.5 415.6 152.7 450.4 187.6C485.2 222.5 506.6 268.8 506.5 318.1C506.5 419.9 421.6 502.7 319.9 502.7zM421.1 364.5C415.6 361.7 388.3 348.3 383.2 346.5C378.1 344.6 374.4 343.7 370.7 349.3C367 354.9 356.4 367.3 353.1 371.1C349.9 374.8 346.6 375.3 341.1 372.5C308.5 356.2 287.1 343.4 265.6 306.5C259.9 296.7 271.3 297.4 281.9 276.2C283.7 272.5 282.8 269.3 281.4 266.5C280 263.7 268.9 236.4 264.3 225.3C259.8 214.5 255.2 216 251.8 215.8C248.6 215.6 244.9 215.6 241.2 215.6C237.5 215.6 231.5 217 226.4 222.5C221.3 228.1 207 241.5 207 268.8C207 296.1 226.9 322.5 229.6 326.2C232.4 329.9 268.7 385.9 324.4 410C359.6 425.2 373.4 426.5 391 423.9C401.7 422.3 423.8 410.5 428.4 397.5C433 384.5 433 373.4 431.6 371.1C430.3 368.6 426.6 367.2 421.1 364.5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
