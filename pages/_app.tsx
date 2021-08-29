/*
 * @Author: VoidY
 * @Date: 2021-08-28 16:32:53
 * @LastEditTime: 2021-08-29 17:56:07
 * @LastEditors: VoidY
 * @Description:
 */
import 'normalize.css'
import '../styles/globals.scss'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
