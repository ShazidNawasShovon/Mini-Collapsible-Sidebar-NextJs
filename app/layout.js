
import "./globals.css";
import {poppins, roboto} from "@/fonts";
import { Toaster } from "react-hot-toast";
import Navbar from "@/app/components/common/Navbar";
import Sidebar from "@/app/components/common/Sidebar";
import Footer from "@/app/components/common/Footer";

export const metadata = {
    title: "Next Js Mini Collapsable Sidebar",
    description: "Next Js Mini Collapsable Sidebar",
};

export default function RootLayout({ children }) {

  return (
      <html lang="en">
      <body className={`${poppins.variable} ${roboto.variable} antialiased`}>
      <div className="h-screen overflow-auto flex flex-col">
          <Navbar/>
          <Sidebar/>
          <Toaster
              toastOptions={{
                  success: {
                      className: "h-16",
                  },
                  error: {},
              }}
              position="top-right"
              reverseOrder={false}
          />
          <div className="content grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen overflow-hidden overflow-y-auto px-8 pt-20 pb-10 gap-16 transition-all ease-linear duration-300 md:ml-12">
              {children}
            <Footer/>
          </div>
      </div>
      </body>
      </html>
);
}
