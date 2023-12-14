"use client"
import '../styles/index.css'
import { Roboto, Oswald } from 'next/font/google'
import { Provider } from "react-redux";
import store from "@/redux/store";

const body = Roboto({
  weight: ['100','300','400', '500', '700', '900'],
  subsets: ['latin'],
  variable: '--eg-body-font-family',
});

const heading = Oswald({
  weight: ['200','300','400','500','600','700'],
  subsets: ['latin'],
  variable: '--eg-heading-font-family',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content="Suxnix - Health Supplement React Next js Template high-quality template with a unique style and clean code. You can use it for multipurpose like Body Enhancement Product, Weight Loss & Diet Product, and many more other services. This template is built with the world’s most popular responsive CSS framework Bootstrap 5.1x, HTML5, CSS3, jQuery and so many modern technologies. The template is created and tested in all devices and browsers like Firefox, Chrome, Microsoft Edge and it works perfectly without any issue." />
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body suppressHydrationWarning={true} className={` ${body.variable} ${heading.variable}`}>
        <Provider store={store}>
          {children}
        </Provider>
      </body>
    </html>
  )
}
