# About Opshell

喜歡交流、學習技術的Opshell，
從高中開始對程式語言萌生興趣，獨立製作了一個RPG畢業專題
在大學、實習時期確認了喜愛的程式類型，並完成網頁技術相關的國科會計畫。
在之後的工作中，一頭熱的投入了全端網頁技術的海洋，
熟練HTML、CSS、Javascript、Vue、JQuery等前端語言，
使用PHP、SQL撰寫網站後端，串接各式API。
用GCP配合LAMP架站。

對設計美感與使用體驗有要求的我，
持續的學習與成長，面對新的挑戰，一步步超越自己。
不喜歡停滯不前，在時代與技術的洪流中，
只有被沖走或逆流而上兩個選項。

在網頁圈打滾了 7-8 年的全端碼農，
輾轉花園與動物園、外星與冥界的世界中，
渾渾噩噩<br />
一回首......連燈火闌珊處也不存在。

所以磕磕絆絆先把這個部落格弄出來，
(偉哉 Vitepress~~

## Syntax Highlighting

VitePress provides Syntax Highlighting powered by [Shiki](https://github.com/shikijs/shiki), with additional features like line-highlighting:

**Input**

````md
```js{4}
export default {
  data () {
    if ('a' !== 'b') {
      return {
        msg: 'Highlighted!'
      }
    } else {
      return {
        msg: 'Highlighted!'
      }
    }
  }
}
```
````

**Output**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## Custom Containers

**Input**

```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

**Output**

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

## More

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).
