import { useContext, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { NavBarContext, NavbarColorContext } from "../../context/NavContext";


const FullScreenNav = () => {
  const FullScreenRef = useRef(null);
  // const stairParentRef =useRef(null);
  const fullNavLinksRef = useRef(null);

  const [NavOpen, setNavOpen] = useContext(NavBarContext);
  // console.log(NavOpen);

  //     function GSAPanimation(){
  //         const tl = gsap.timeline()

  //         tl.to('.fullscreennav', {
  //             display: 'block'
  //         })

  //         tl.to(".stairing", {
  //             delay:0.2,
  //             height: '100%',
  //             stagger: {
  //                 amount: -0.3,
  //             },
  //         });

  //         tl.to('.Link',{
  //             opacity:1,
  //             rotateX: 0,
  //             stagger: {
  //                 amount: 0.3
  //             }
  //         })

  //         tl.to('.NavLink',{
  //             opacity:1,
  //         })
  // }

  //     function GSAPanimationReverse(){
  //         const tl = gsap.timeline()

  //         tl.to('.Link',{
  //             opacity:0,
  //             rotateX: 90,
  //             stagger: {
  //                 amount: 0.1
  //             }
  //         })

  //         tl.to(".stairing", {
  //             delay:0.5,
  //             height: 0,
  //             stagger: {
  //                 amount: 0.1
  //             }
  //         });

  //         tl.to('.NavLink',{
  //             opacity:0
  //         })

  //         tl.to('.FullScreenNav',{
  //             display:"none",
  //             delay:1,
  //         })
  // }

  // useGSAP(() => {
  //   if (NavOpen) {
  //     const tl = gsap.timeline();
  //     tl.to(
  //       ".stair",
  //       {
  //         height: 0,
  //       },
  //       {
  //         height: "100%",
  //         duration: 0.3,
  //         stagger: { amount: -0.2 },
  //       }
  //     );
  //     // ...other animations...

  //   //   tl.to(".fullscreennav", {
  //   //     display: "none",
  //   //   });

  //   //   tl.to(".stair", {
  //   //     delay: 0.2,
  //   //     height: "100%",
  //   //     stagger: {
  //   //       amount: -0.3,
  //   //     },
  //   //   });

  //     tl.to(".Link", {
  //       opacity: 1,
  //       rotateX: 0,
  //       stagger: {
  //         amount: 0.3,
  //       },
  //     });

  //     tl.to(".NavLink", {
  //       opacity: 1,
  //     });
  //   } else {
  //     tl.to(".Link", {
  //       opacity: 0,
  //       rotateX: 90,
  //       stagger: {
  //         amount: 0.1,
  //       },
  //     });

  //     tl.to(".stair", {
  //       delay: 0.5,
  //       height: 0,
  //       stagger: {
  //         amount: 0.1,
  //       },
  //     });

  //     tl.to(".NavLink", {
  //       opacity: 0,
  //     });

  //     tl.to(".FullScreenNav", {
  //       display: "none",
  //       delay: 1,
  //     });
  //   }
  // }, [NavOpen]);


  //  useGSAP(() => {
  //   if (NavOpen) {
  //     gsap.fromTo(
  //       ".stair",
  //       { height: 0 },
  //       { height: "100%", duration: 0.3, stagger: { amount: -0.2 } }
  //     );
  //     gsap.fromTo(
  //       ".Link",
  //       { opacity: 0, rotateX: 90 },
  //       { opacity: 1, rotateX: 0, duration: 0.5, stagger: { amount: 0.3 } }
  //     );
  //   } else {
  //     gsap.to(".Link", {
  //       opacity: 0,
  //       rotateX: 90,
  //       duration: 0.3,
  //       stagger: { amount: 0.1 }
  //     });
  //     gsap.to(".stair", {
  //       height: 0,
  //       duration: 0.3,
  //       stagger: { amount: 0.1 }
  //     });
  //   }
  // }, [NavOpen]);


  useGSAP(() => {
  if (NavOpen) {
    const tl = gsap.timeline();
    // tl.fromTo(
    //   ".stair",
    //   { height: 0, opacity:1 },
    //   { height: "100%", duration: 0.2, stagger: { amount: -0.5 } }
    // );
    // tl.to(".stair", {
    //   height: 0,
    //   duration: 0.2,
    //   stagger: { amount: -0.4 }
    // }, "-=0.1");

    tl.from(
      ".Link",
      { opacity: 0, rotateX: 90, duration:0.2, stagger: {amount:0.2}},
      // { opacity: 1, rotateX: 0, duration: 0.2, stagger: { amount: 0.4 } },
      // "+=0.2"
    );
  } else {
    const tl = gsap.timeline();
    tl.to(".Link", {
      opacity: 0,
      rotateX: 90,
      stagger: { amount: 0.2,duration: 0.2, },
    });
    tl.to(".stair", {
      height: 0,
      duration: 0.2,
      stagger: { amount: -0.6 }
    }, "+=0.2");
  }
}, [NavOpen]);

  return (
    <div
      ref={FullScreenRef}
      id="fullscreen"
      className=" FullScreenNav z-50 h-screen bg-black text-white w-screen absolute overflow-hidden"
    >
      <div className="h-full w-full fixed">
        <div className="h-screen w-screen flex">
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black "></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black "></div>
          <div className="stair h-full w-1/5 bg-black"></div>
        </div>
      </div>
      <div ref={fullNavLinksRef}>
        <div
          id="fixednav"
          className="NavLink w-screen relative flex items-start justify-between p-2"
        >
          <div id="K72logo" className="lg:w-30 w-25">
            <svg
              className="w-full"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 103 44"
            >
              <path
                fill="white" fillRule="evenodd"
                d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
              ></path>
            </svg>
          </div>
          <div
            onClick={() => {
              setNavOpen(false);
            }}
            id="cross"
            className="relative lg:h-28 lg:w-28 h-20 w-20 cursor-pointer"
          >
            <div className="line absolute lg:h-38 h-27 w-[2px] lg:w-[3px] bg-white -rotate-45 origin-top"></div>
            <div className="line absolute lg:h-38 h-27 w-[2px] lg:w-[3px] bg-white rotate-45 right-0 origin-top"></div>
            <div></div>
          </div>
        </div>

        <div id="all4 " className=" h-full lg:py-[5vw] md:py-[10%] py-[30%]">
          <div
            id="projects"
            className="Link origin-top border-t-1 h-full w-full relative"
          >
            <h1 className="font-[font2] lg:text-[8vw] text-[13vw] leading-[0.8] lg:pt-4 pt-2">
              PROJECTS
            </h1>
            <div className="moveLink h-full text-black flex absolute bg-[#d3fd50] top-0 gap-x-[41vw]">
              <div className="moveX flex items-center">
                <h1 className="font-[font2] lg:text-[8vw] md:text-[10vw] text-[12vw] leading-[0.8] lg:pt-4 md:pt-3 pt-2 whitespace-nowrap">
                  POUR TOUT VOIR
                </h1>
                <img
                  className="lg:h-24 lg:w-72 md:h-18 md:w-45 h-10 w-25 rounded-full shrink-0 object-cover"
                  src="	https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                  alt=""
                />
                <h1 className="font-[font2] lg:text-[8vw] md:text-[10vw] text-[12vw] leading-[0.8] lg:pt-4 md:pt-3 pt-2 whitespace-nowrap">
                  POUR TOUT VOIR
                </h1>
                <img
                  className="lg:h-24 lg:w-72 md:h-18 md:w-45 h-10 w-25 rounded-full shrink-0 object-cover "
                  src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99"
                  alt=""
                />
              </div>
              <div className="moveX flex items-center">
                <h1 className="font-[font2] lg:text-[8vw] md:text-[10vw] text-[12vw] leading-[0.8] lg:pt-4 md:pt-3 pt-2 whitespace-nowrap">
                  POUR TOUT VOIR
                </h1>
                <img
                  className="lg:h-24 lg:w-72 md:h-18 md:w-45 h-10 w-25 rounded-full shrink-0 object-cover"
                  src="	https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                  alt=""
                />
                <h1 className="font-[font2] lg:text-[8vw] md:text-[10vw] text-[12vw] leading-[0.8] lg:pt-4 md:pt-3 pt-2 whitespace-nowrap">
                  POUR TOUT VOIR
                </h1>
                <img
                  className="lg:h-24 lg:w-72 md:h-18 md:w-45 h-10 w-25 rounded-full shrink-0 object-cover"
                  src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div
            id="agents"
            className="Link origin-top border-t-1 h-full w-full relative"
          >
            <h1 className="font-[font2] lg:text-[8vw] text-[13vw] leading-[0.8] lg:pt-4 pt-2">
              AGENTS
            </h1>
            <div className="moveLink h-full text-black flex absolute bg-[#d3fd50] top-0 gap-x-[41vw]">
              <div className="moveX flex items-center">
                <h1 className="font-[font2] lg:text-[8vw] md:text-[10vw] text-[12vw] leading-[0.8] lg:pt-4 md:pt-3 pt-2 whitespace-nowrap">
                  POUR TOUT VOIR
                </h1>
                <img
                  className="lg:h-24 lg:w-72 md:h-18 md:w-45 h-10 w-25 rounded-full shrink-0 object-cover"
                  src="	https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                  alt=""
                />
                <h1 className="font-[font2] lg:text-[8vw] md:text-[10vw] text-[12vw] leading-[0.8] lg:pt-4 md:pt-3 pt-2 whitespace-nowrap">
                  POUR TOUT VOIR
                </h1>
                <img
                  className="lg:h-24 lg:w-72 md:h-18 md:w-45 h-10 w-25 rounded-full shrink-0 object-cover"
                  src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99"
                  alt=""
                />
              </div>
              <div className="moveX flex items-center">
                <h1 className="font-[font2] lg:text-[8vw] md:text-[10vw] text-[12vw] leading-[0.8] lg:pt-4 md:pt-3 pt-2 whitespace-nowrap">
                  POUR TOUT VOIR
                </h1>
                <img
                  className="lg:h-24 lg:w-72 md:h-18 md:w-45 h-10 w-25 rounded-full shrink-0 object-cover"
                  src="	https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                  alt=""
                />
                <h1 className="font-[font2] lg:text-[8vw] md:text-[10vw] text-[12vw] leading-[0.8] lg:pt-4 md:pt-3 pt-2 whitespace-nowrap">
                  POUR TOUT VOIR
                </h1>
                <img
                  className="lg:h-24 lg:w-72 md:h-18 md:w-45 h-10 w-25 rounded-full shrink-0 object-cover"
                  src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div
            id="contacts"
            className="Link origin-top border-t-1 h-full w-full relative"
          >
            <h1 className="font-[font2] lg:text-[8vw] text-[13vw] leading-[0.8] lg:pt-4 pt-2">
              CONTACT
            </h1>
            <div className="moveLink h-full text-black flex absolute bg-[#d3fd50] top-0 gap-x-[41vw]">
              <div className="moveX flex items-center">
                <h1 className="font-[font2] lg:text-[8vw] md:text-[10vw] text-[12vw] leading-[0.8] lg:pt-4 md:pt-3 pt-2 whitespace-nowrap">
                  POUR TOUT VOIR
                </h1>
                <img
                  className="lg:h-24 lg:w-72 md:h-18 md:w-45 h-10 w-25 rounded-full shrink-0 object-cover"
                  src="	https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                  alt=""
                />
                <h1 className="font-[font2] lg:text-[8vw] md:text-[10vw] text-[12vw] leading-[0.8] lg:pt-4 md:pt-3 pt-2 whitespace-nowrap">
                  POUR TOUT VOIR
                </h1>
                <img
                  className="lg:h-24 lg:w-72 md:h-18 md:w-45 h-10 w-25 rounded-full shrink-0 object-cover"
                  src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99"
                  alt=""
                />
              </div>
              <div className="moveX flex items-center">
                <h1 className="font-[font2] lg:text-[8vw] md:text-[10vw] text-[12vw] leading-[0.8] lg:pt-4 md:pt-3 pt-2 whitespace-nowrap">
                  POUR TOUT VOIR
                </h1>
                <img
                  className="lg:h-24 lg:w-72 md:h-18 md:w-45 h-10 w-25 rounded-full shrink-0 object-cover"
                  src="	https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                  alt=""
                />
                <h1 className="font-[font2] lg:text-[8vw] md:text-[10vw] text-[12vw] leading-[0.8] lg:pt-4 md:pt-3 pt-2 whitespace-nowrap">
                  POUR TOUT VOIR
                </h1>
                <img
                  className="lg:h-24 lg:w-72 md:h-18 md:w-45 h-10 w-25 rounded-full shrink-0 object-cover"
                  src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div
            id="blogue"
            className="Link origin-top border-y-1 h-full w-full relative"
          >
            <h1 className="font-[font2] lg:text-[8vw] text-[13vw] leading-[0.8] lg:pt-4 pt-2">
              BLOG
            </h1>
            <div className="moveLink h-full text-black flex absolute bg-[#d3fd50] top-0 gap-x-[41vw]">
              <div className="moveX flex items-center">
                <h1 className="font-[font2] lg:text-[8vw] md:text-[10vw] text-[12vw] leading-[0.8] lg:pt-4 md:pt-3 pt-2 whitespace-nowrap">
                  POUR TOUT VOIR
                </h1>
                <img
                  className="lg:h-24 lg:w-72 md:h-18 md:w-45 h-10 w-25 rounded-full shrink-0 object-cover"
                  src="	https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                  alt=""
                />
                <h1 className="font-[font2] lg:text-[8vw] md:text-[10vw] text-[12vw] leading-[0.8] lg:pt-4 md:pt-3 pt-2 whitespace-nowrap">
                  POUR TOUT VOIR
                </h1>
                <img
                  className="lg:h-24 lg:w-72 md:h-18 md:w-45 h-10 w-25 rounded-full shrink-0 object-cover"
                  src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99"
                  alt=""
                />
              </div>
              <div className="moveX flex items-center">
                <h1 className="font-[font2] lg:text-[8vw] md:text-[10vw] text-[12vw] leading-[0.8] lg:pt-4 md:pt-3 pt-2 whitespace-nowrap">
                  POUR TOUT VOIR
                </h1>
                <img
                  className="lg:h-24 lg:w-72 md:h-18 md:w-45 h-10 w-25 rounded-full shrink-0 object-cover"
                  src="	https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                  alt=""
                />
                <h1 className="font-[font2] lg:text-[8vw] md:text-[10vw] text-[12vw] leading-[0.8] lg:pt-4 md:pt-3 pt-2 whitespace-nowrap">
                  POUR TOUT VOIR
                </h1>
                <img
                  className="lg:h-24 lg:w-72 md:h-18 md:w-45 h-10 w-25 rounded-full shrink-0 object-cover"
                  src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullScreenNav;
