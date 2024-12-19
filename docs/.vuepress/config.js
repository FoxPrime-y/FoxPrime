import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import theme from 'timers'
export default defineUserConfig({
  bundler: viteBundler(),
  // theme: defaultTheme(),
  theme,
  title:"FoxPrime",
  description:"FoxPrime",
  base:"/FoxPrime/",
  lang:"zh-CN"
})