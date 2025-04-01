import Footer from "@/components/Footer";
import BreadcrumbSection from "@/components/Shipping-Components/breadcrumb-section";
import FormCompare from "@/components/Shipping-Components/form-compare";
import SubmitShipping from "@/components/Shipping-Components/submit-shipping";

const Page = () => {
  return (
    <>
      <div className="px-24 py-16 space-y-8">
        <div className="space-y-2">
          <BreadcrumbSection />
          <h1 className="font-bold text-3xl">Dostawa i płatność</h1>
        </div>
        <div className="flex gap-16">
          <div className="flex-1">
            <FormCompare />
          </div>
          <div className="flex-1">
            <SubmitShipping />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Page;
