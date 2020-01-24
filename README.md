# qr.junic.jp

> My posh Nuxt.js project

## がいよう
nuxtでオフライン対応のPWAをやるためだけに作った、
クソ雑魚PWAなんでもバーコードリーダーです。

Vuetify を使えばきれいに見れる、そう考えたときもありました。
ドキュメントもスクロールすると英語だったりで、なかなかつらい。

## かんそう
nuxtjs/pwaはworkboxの出力がnuxt向けの出力をするのでprecacheが無理やりになった。
nuxtjs/pwaに頼らないprecacheをするなり、
無理やりshellでぶっこむなりすればよい？のかもしれない？

## Build Setup

``` bash
# install dependencies
$ npm run install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
