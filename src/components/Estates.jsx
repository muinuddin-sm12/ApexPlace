import { useLoaderData } from "react-router-dom";
import Estate from "./Estate";

const Estates = () => {
  const estates = useLoaderData();
  // console.log(estateData)
  return (
    <section className="max-w-[1440px] py-10 mx-auto px-4 md:px-[135px] sm:py-12 mb-6">
      <div className="container mx-auto md:space-y-5 lg:space-y-8 space-y-2">
        <div className="space-y-2 text-center">
          <h2 className="text-2xl md:text-[28px] font-semibold">Estates</h2>
        </div>
        <div className="grid grid-cols-1  gap-x-4 gap-y-4 md:grid-cols-2 lg:grid-cols-3">
          {estates.map((estate) => (
            <Estate key={estate.id} estate={estate}></Estate>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Estates;
