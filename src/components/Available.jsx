import Bedrooms from "./SvgComnets/Bedrooms";
import Bathrooms from "./SvgComnets/Bathrooms";
const allData = [
  {
    id: 1,
    houseName: "Greenwood Villa",
    rent: 1200,
    bedrooms: 3,
    bathrooms: 2,
    image:
      "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    houseName: "Sunset Apartments",
    rent: 1500,
    bedrooms: 2,
    bathrooms: 1,
    image:
      "https://images.unsplash.com/photo-1507086186665-15b18c201b3d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    houseName: "Maplewood Estates",
    rent: 1800,
    bedrooms: 4,
    bathrooms: 3,
    image:
      "https://images.unsplash.com/photo-1600607686784-000c50c8474e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    houseName: "Pinehill Townhouse",
    rent: 1350,
    bedrooms: 3,
    bathrooms: 2,
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    houseName: "Cedar Park Cottage",
    rent: 1100,
    bedrooms: 2,
    bathrooms: 1,
    image:
      "https://images.unsplash.com/photo-1594222552571-9e8b3d7dbb29?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    houseName: "Oakwood Residence",
    rent: 1750,
    bedrooms: 4,
    bathrooms: 3,
    image:
      "https://images.unsplash.com/photo-1507084110434-428a0dba6b6b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

function Available() {
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
                      <span className="font-bold text-gray-900">
                        {item.bedrooms}
                      </span>{" "}
                      Bedrooms
                    </p>
                  </div>
                  <div className="flex items-center">
                    <Bathrooms />
                    <p>
                      <span className="font-bold text-gray-900">
                        {item.bathrooms}
                      </span>{" "}
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
