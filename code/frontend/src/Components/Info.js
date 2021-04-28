import React from "react";
import { useQuery } from "@apollo/client";
import { ME_DETAIL_QUERY } from "../Graphql/meDetailQuery";

const InfoCustomer = () => {
  const { loading, error, data } = useQuery(ME_DETAIL_QUERY, {
    fetchPolicy: "network-only",
  });
  console.log(data);
  if (loading) {
    return "Loading...";
  }
  if (error) {
    return "Error !!";
  }
  return (
    //form
    <section className="#">
      <div className="font-sans">
        <div className="relative mt-8 flex flex-col lg:justify-center items-center">
          <div className="mt-5 relative lg:max-w-screen-2xl w-full">
            <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-lg">
              <h1 className="font-bold tracking-wider text-3xl mb-8 w-full text-gray-800">
                <i className="fas fa-user-alt"></i> Profile {data?.me?.role}
              </h1>
              <hr></hr>
              <br></br>
              <h3 className="text-left md:text-center">
                <i className="fas fa-address-card"></i> Name :{" "}
                {data?.me?.fullname}
              </h3>
              <h3 className="text-left md:text-center">
                <i className="fas fa-envelope"></i> Email : {data?.me?.email}
                <button className="text-red-900 font-bold no-underline hover:underline">
                  <a href="#">
                    {" "}
                    (<i class="fas fa-edit"></i> Edit Email)
                  </a>
                </button>
              </h3>
              <h3 className="text-left md:text-center">
                <button className="text-red-900 font-bold no-underline hover:underline">
                  <a href="#">
                    {" "}
                    (<i class="fas fa-edit"></i> Edit Password)
                  </a>
                </button>
              </h3>
              <br></br>
              <h3 className="no-underline hover:underline">
                <a href="/customer/orders">
                  <i className="fas fa-shopping-cart"></i> ดูรายการสั่งซื้อ
                </a>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default InfoCustomer;
