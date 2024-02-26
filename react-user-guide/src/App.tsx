import { useState } from 'react'
import UserGuide from "./components/UserGuide/index"
import './App.css'
interface Props {
  x: string | number;
  y: string | number;
  width: string | number;
  height: string;
  tips?: string;
  prevTxt?: string;
  nextTxt?: string;
}
function App() {
  const [guideIndex, setGuideIndex] = useState<number>(0);
  const guideConfig: Props[] = [
    {
      x: "0px",
      y: "30px",
      width: "0px",
      height: "0px",
      tips: "这是引导用语一引导用语一引导用语一引导用语一引导用语一引导用语一引导用语一引导用语一引导用语一引导用语一引导用语一引导用语一",
      prevTxt: "",
      nextTxt: "继续",
    },
    {
      x: "10px",
      y: "10px",
      width: "25vw",
      height: "16vw",
      tips: "引导用语2引导用语2引导用语2引导用语2引导用语2引导用语2引导用语2引导用语2引导用语2引导用语2引导用语2引导用语2引导用语2引导用语2",
      prevTxt: "上一步",
      nextTxt: "继续",
    },
    {
      x: "26vw",
      y: "10px",
      width: "25vw",
      height: "16vw",
      tips: "引导语3引导语3引导语3引导语3引导语3引导语3引导语3引导语3引导语3引导语3引导语3引导语3引导语3引导语3引导语3引导语3引导语3",
      prevTxt: "上一步",
      nextTxt: "继续",
    },
    {
      x: "49vw",
      y: "10px",
      width: "25vw",
      height: "16vw",
      tips: "四四四四四四四四四四四四四四四四四四四四四四四四四四四四四四四四四四四四四四四四四四四四四四四四四四四四四四四四四四四四四四四四四四四四四四四四",
      prevTxt: "上一步",
      nextTxt: "继续",
    },
    {
      x: "calc(75vw - 10px)",
      y: "10px",
      width: "25vw",
      height: "16vw",
      tips: "五五五五五五五五五五五五五五五五五五五五五五五五五五五五五五五五五五五五五五五五五五五五五五五五五五五五五五五五五五五五五五五五五五五五五五",
      prevTxt: "上一步",
      nextTxt: "继续",
    },
    {
      x: "0px",
      y: "30px",
      width: "0px",
      height: "0px",
      tips: "六六六六六六六六六六六六六六六六六六六六六六六六六六六六六六六六六六六六六六六六六六六六六六六六六六六六六六六六六六六六六六六六六六六六六",
      prevTxt: "上一步",
      nextTxt: "我知道了",
    },
  ];
  const guidePrev = () => {
    if (guideIndex !== 0) {
      setGuideIndex(guideIndex - 1)
    }
  };
  const guideNext = () => {
    setGuideIndex(guideIndex + 1);
  };
  return (
    <>
      {
        guideIndex < guideConfig.length ? <UserGuide
          x={guideConfig[guideIndex].x}
          y={guideConfig[guideIndex].y}
          width={guideConfig[guideIndex].width}
          height={guideConfig[guideIndex].height}
          tips={guideConfig[guideIndex].tips}
          prevTxt={guideConfig[guideIndex].prevTxt}
          nextTxt={guideConfig[guideIndex].nextTxt}
          prev={guidePrev}
          next={guideNext}
        /> : ""
      }

      这是页面主体
    </>
  )
}

export default App
