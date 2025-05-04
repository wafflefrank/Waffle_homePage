---
outline: deep
---

# enum 按鍵使用實例

1. 用enum列舉常用modules的參數類別
2. 權限表弄enum
3. 產品如果需要快捷鍵支援的話，也會做這種類似MOUSE、方向鍵、keydown之類操作(策略模式+enum)

<!-- ## typescript -->

```typescript
enum Key {
  UP = 'ArrowUp',
  DOWN = 'ArrowDown',
  LEFT = 'ArrowLeft',
  RIGHT = 'ArrowRight',
  Q = 'Q',
  W = 'W',
  E = 'E',
  R = 'R'
}

const handleUp = () => {
  console.log('Move up')
}

const handleDown = () => {
  console.log('Move down')
}

const handleLeft = () => {
  console.log('Move left')
}

const keyStrategies: { [key in Key]: () => void } = {
  [Key.UP]: handleUp,
  [Key.DOWN]: handleDown,
  [Key.LEFT]: handleLeft,
  [Key.RIGHT]: handleRight,
  [Key.Q]: handleQ,
  [Key.W]: handleW,
  [Key.E]: handleE,
  [Key.R]: handleR
}

const handleKeydown = (event: KeyboardEvent) => {
  const key = event.key as Key
  if (key in keyStrategies) {
    keyStrategies[key]()
  }
}
```

4. 後端比較常用來列舉狀態或錯誤類型，例如某個資料的 type 種類、某個 service 會 throw 的錯誤類型等等。
   前端我後來比較常用 defineConstants，[具體作法](https://vocus.cc/article/6695fd2cfd897800013893bc)
5. 狀態控管用 ENUM
6. 系統內應該會有不少需要判別字串是否符合某些POOL的條件，這就是enum的用意
