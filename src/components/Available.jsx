import Bedrooms from "./SvgComnets/Bedrooms";
import Bathrooms from "./SvgComnets/Bathrooms";
import AllData from "../../public/AllData";
function Available() {
  const allData = AllData();
  return (
    <section>
      <div className="container">
        <div className="mx-auto mb-12 max-w-[485px] text-center lg:mb-[70px]">
          <span className="mb-2 block text-lg font-semibold text-primary">
            Properties
          </span>
          <h2 className="mb-3 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
            Grab your Dream Property
          </h2>
          <p className="text-base text-body-color dark:text-dark-6">
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* <!-- Property Item 1 --> */}

          {allData.map((item) => {
            return (
              <div
                key={item.id}
                className="p-4 bg-white rounded-lg border border-gray-600/10"
              >
                <img src={item.image} alt="property" />

                <div className="p-6">
                  <h4 className="text-2xl font-bold cursor-pointer">
                    {item.houseName}
                  </h4>
                  {/* <!-- <div>
                      2 beds &bull; 2 baths
                  </div> --> */}
                  <div className="mt-2">
                    <span className="text-xl font-extrabold text-blue-600">
                      {"$" + item.rent + ".00"}
                    </span>
                    /M
                  </div>
                </div>
                <div className="flex justify-between p-4 text-gray-700 border-t border-gray-300">
                  <div className="flex items-center">
                    <Bedrooms />
                    <p>
                      <span className="font-bold text-gray-900 mr-1">
                        {item.bedrooms}
                      </span>
                      Bedrooms
                    </p>
                  </div>
                  <div className="flex items-center">
                    <Bathrooms />
                    <p>
                      <span className="font-bold text-gray-900 mr-1">
                        {item.bathrooms}
                      </span>
                      Bathrooms
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Available;
