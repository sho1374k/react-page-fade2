
インストール
```
npm install react-transition-group
```

```
import {Link, Route, 
        useLocation, 
        Switch, BrowserRouter } from "react-router-dom";
```

インストール
```
npm install framer-motion
```

親
```
import { AnimatePresence} from "framer-motion";
```

子
```
import { motion } from "framer-motion"
```



コンポーネントがReactツリーから削除された時にアニメーションを行うようにするために囲む

リンク : https://www.framer.com/api/motion/animate-presence/


親
```
<AnimatePresence initial={true}></AnimatePresence>
```
initial={true}・・・初期リロード時にもアニメーションを行う


子
```
<motion.div
  key="modal"            ツリー内で追跡できるように記述
  animate={{}}           アニメーション
  initial={{}}           初期表示
  exit={{}}              切り替え時
  transition={{}}        トランジション
/>
```

![画面収録 2020-10-28 22 47 54 mov](https://user-images.githubusercontent.com/61724976/97444621-b2fe3300-196f-11eb-80de-c6acd2c3263c.gif)
