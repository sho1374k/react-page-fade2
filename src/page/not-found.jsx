import React from "react";
import {motion} from "framer-motion";

export const NotFound = () => {
  return(
     <motion.div
      animate={{
        // スライド
        // x: 0, opacity: 1

        // ズーム
        scale: (1, 1), opacity: 1

        // フリップ
        // transform: "rotateY(0deg)", opacity:1
      }}
      initial={{
        // スライド
        // x: 100, opacity: 0

        // ズーム
        scale: (0, 0), opacity: 1

        // フリップ
        // transform: "rotateY(180deg)", opacity:0
      }}
      exit={{
        // スライド
        // x: -100, opacity: 0

        // ズーム
        scale: (0, 0), opacity: 0

        // フリップ
        // transform: "rotateY(-180deg)",  opacity:0
      }}
      transition={{
        // スライド
        // duration: 0.2

        // ズーム
        duration: 0.4
        // delay: 1
      }}
    >
      <div className="content">
        <div className="center">
          <h1>Not Found</h1>
        </div>
      </div>
      
    </motion.div>
  )
}
