import React, { useState } from "react";
import Sidebar from "../components/Common/Sidebar";
import Header from "../components/Common/Header";

function Dashboard() {
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <>
      <div className="flex">
        <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} activeMe="dashboard"/>

        <Header setOpenSidebar={setOpenSidebar} />

        <main className="md:ml-[16.25rem] xl:ml-[21.125rem] pt-[62px] md:pt-[6.5625rem] w-full">
          {/* DASHBOARD */}
          <div className="pt-10 pb-[10.4375rem] py-[3.0625rem] xl:py-[3.8125rem] px-[26px] md:px-8 xl:px-[3.4375rem]">
            <div className="bg-black-200 pt-[30px] md:pt-9 pl-5 md:pl-10 xl:pl-[3.4375rem] pr-3 md:pr-8 pb-[5.3125rem] xl:pb-[6.375rem] rounded-[25px]">
              {/* TITLE */}
              <div className="mb-4 md:mb-[38px]">
                <h1 className="text-f_45_l_57 font-supremeMedium">
                  Welcome {localStorage.getItem('profile')}
                </h1>
              </div>

              {/* Learn How to use this System */}
              <div className="mb-[18px] md:mb-8 xl:mb-9">
                <h3 className="bg-gradient-text text-f_25_l_32 mb-3 md:mb-2.5">
                  Learn How to use this System
                </h3>
                <p className="text-f_18_l_28">
                  Here you will find simple tutorials on how to use the CFMOTO
                  WORLD software. A new user needs to read carefully and
                  understand how the system works. We have created guides for
                  the dealer, the service person and the vehicle owner.
                </p>
              </div>

              {/* STEPS */}
              <div className="space-y-3 md:space-y-[5px] xl:space-y-[18px] mb-4 md:mb-6 xl:mb-11">
                {/* STEP 1 */}
                <div>
                  <h3 className="bg-gradient-text text-f_22_l_28 mb-[5px]">
                    Step 1
                  </h3>
                  <p className="text-f_18_l_28">
                    Everyone who joins the system identifies themselves and the
                    system identifies a specific person. Each person is
                    personally responsible for the requests made with their user
                    account and the data entered.
                  </p>
                </div>

                {/* STEP 2 */}
                <div>
                  <h3 className="bg-gradient-text text-f_22_l_28 mb-[5px]">
                    Step 2
                  </h3>
                  <p className="text-f_18_l_28">
                    Each user group can perform queries, enter data and view the
                    previous history of the vehicle according to the permitted
                    rights.
                  </p>
                </div>

                {/* STEP 3 */}
                <div>
                  <h3 className="bg-gradient-text text-f_22_l_28 mb-[5px]">
                    Step 3
                  </h3>
                  <p className="text-f_18_l_28">
                    Dear partners, all the information entered here is necessary
                    for you and other partners. To simplify vehicle maintenance
                    and to know how to perform the best maintenance for this
                    particular vehicle.
                  </p>
                </div>
              </div>

              {/* System tutorial videos */}
              
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Dashboard;
// 