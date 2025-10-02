import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/scrollTrigger";
import React , {useRef} from "react";
import { useEffect,useState } from "react";

const Agence=()=> {
  gsap.registerPlugin(ScrollTrigger);

  const imageDivRef= useRef(null); 
  const imageRef= useRef(null);

  const imageArray=[
    'https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7',
    'https://k72.ca/images/teamMembers/Olivier_480x640.jpg?w=480&h=640&fit=crop&s=c13569c0753117d04f1a93cf7b446d64',
    'https://k72.ca/images/teamMembers/Lawrence_480x640.jpg?w=480&h=640&fit=crop&s=0a878205586092164001a9afe0ef4007',
    'https://k72.ca/images/teamMembers/HugoJoseph_480x640.jpg?w=480&h=640&fit=crop&s=f152025b8a59b062d1e7978b5d6544c3',
    'https://k72.ca/images/teamMembers/ChantalG_480x640.jpg?w=480&h=640&fit=crop&s=13093769c4a19cecd291ddcccd898991',
    'https://k72.ca/images/teamMembers/MyleneS_480x640.jpg?w=480&h=640&fit=crop&s=55944189ac2aa83e83e2ef8125e4809e',
    'https://k72.ca/images/teamMembers/SophieA_480x640.jpg?w=480&h=640&fit=crop&s=fcb556060c29623e706dfbc4eeca87ac',
    'https://k72.ca/images/teamMembers/Claire_480x640.jpg?w=480&h=640&fit=crop&s=2a5f6181f85b2d13f7fb30c5555835aa',
    'https://k72.ca/images/teamMembers/Michele_480X640.jpg?w=480&h=640&fit=crop&s=ce85dc6d140947736baa739d0e59dab2',
    'https://k72.ca/images/teamMembers/MEL_480X640.jpg?w=480&h=640&fit=crop&s=07c9bfee89816720b873e6748a276af6',
    'https://k72.ca/images/teamMembers/CAMILLE_480X640_2.jpg?w=480&h=640&fit=crop&s=74317575b2d72fd11c5296615c383e4a',
    'https://k72.ca/images/teamMembers/MEGGIE_480X640_2.jpg?w=480&h=640&fit=crop&s=3604b19f8fc7b40f517954147698d847',
    'https://k72.ca/images/teamMembers/joel_480X640_3.jpg?w=480&h=640&fit=crop&s=1cadbf143b3aa916b1b414464acbb4d6',
    'https://k72.ca/images/teamMembers/Olivier_640X960.jpg?w=640&h=960&s=9b715851e76624b3d00c6715af5c47cd',

  ]

  imageArray.forEach(src => {
  const img = new window.Image();
  img.src = src;
  });

  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev =>
        prev === imageArray.length - 1 ? 0 : prev + 1
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [imageArray.length]);
  

  // useGSAP(() => {
  //   gsap.to(imageDivRef.current, {
  //     scrollTrigger: {
  //       trigger: imageDivRef.current,
  //       // markers: true,
  //       start: 'top 28%',
  //       end: 'top -160%',
  //       pin: true,
  //       pinSpacing: true,
  //       pinReparent: true,
  //       pinType: 'transform',
  //       scrub: true, // smooth scrubbing with 1s easing
  //       anticipatePin: 1,
  //       // invalidateOnRefresh: true,

  //       onUpdate: (elem) => {
  //         let imageIndex;
  //         if (elem.progress < 1) {
  //           imageIndex = Math.floor(elem.progress * imageArray.length);
  //         } else {
  //           imageIndex = imageArray.length - 1;
  //         }
  //         imageRef.current.src = imageArray[imageIndex]
  //       } ,

  //       onUpdate: (elem) => {
  //         let imageIndex = Math.floor(elem.progress * (imageArray.length - 1));
  //         imageRef.current.src = imageArray[imageIndex];
  //       }
  //     }
  //   })
  // })

  return (
    <div className="parent">
      <div id ="page1" className="section1 py-1">
        <div ref={imageDivRef} className="lg:h-[20vw] lg:w-[15vw] h-[25vw] w-[20vw] lg:top-[30vh] top-[20vh] lg:left-[30vw] left-[25vw] absolute lg:rounded-3xl rounded-[20px] overflow-hidden">
          <img
            ref={imageRef}
            className="h-full w-full object-cover"
            src={imageArray[currentIndex]}>
          </img>
        </div>
        <div className="font-[font2] h-[100vh] w-[100vw] relative">
          <div className="lg:mt-[57vh] mt-[30vh]">
            <h1 className="lg:text-[22vw] md:text-[20vw] text-[22vw] text-center leading-[17vw]">
              SEVEN7Y TWO
            </h1>
          </div>
          <div className=" lg:pl-[42%] lg:leading-12 lg:mt-5 mt-[15vh]">
            <p className="lg:text-[5vh] text-[3vh] text-left lg:leading-[4vw] leading-[5vw]">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              We’re inquisitive and open-minded, and we make sure creativity
              crowds out ego from every corner. A brand is a living thing, with
              values, a personality and a story. If we ignore that, we can
              achieve short-term success, but not influence that goes the
              distance. We bring that perspective to every brand story we help
              tell.
            </p>
          </div>
        </div>
      </div>
      <div className="section2">

      </div>
    </div>
  );
}

export default Agence;
