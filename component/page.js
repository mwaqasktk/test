import Image from "next/image";
import Header from "./header/header";
import MainPage from "./mainPage/main";
import Sidebar from "./sidebar/sidebar";
import Footer from "./footer/footer";
import Number from "./number/page";
export default function Component() {
  return (
    <div>
      <div className=" ">
        <img className="  h-screen w-screen  opacity-80 " src="mountain.jpg" />

        <div className="absolute  top-0 ">
          <div className=" ">
            <Header />
          </div>
          <div className=" flex top-20  relative ">
            <Sidebar />
            <MainPage />
            <Sidebar />
          </div>
         
        </div>
      </div>

      <Footer />
    </div>
  );
}
