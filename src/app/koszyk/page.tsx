import ItemsListSection from "@/components/Cart-Components/itemsList-section";
import SubmitOrderSection from "@/components/Cart-Components/submitOrder-section";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

const Page = () => {
  return (
    <>
      <NavBar />
      <div className="flex p-24">
        <div className="flex-1">
          <ItemsListSection />
        </div>
        <div className="flex-1 flex justify-center items-center">
            <SubmitOrderSection />
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Page;
