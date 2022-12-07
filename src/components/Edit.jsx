import React from "react";

const UserBalance = () => {
    return (
        <section className="h-fit w-full  flex items-center lg:px-20 justify-between px-8 flex-wrap gap-2 my-5">
            <div className="flex flex-col">
                <h2 className="text-[42px] overflow-y-hidden text-color-black-100 font-extrabold">$120,420.50</h2>
                <p className="text-color-black-50 text-sm ">
                    Total balance from all accounts <span className="text-color-blue-100 font-bold">USD</span>
                </p>
            </div>
            <div className="flex items-center gap-2 font-bold text-color-black-100">
                <i className="ri-add-circle-line"></i>
                <span className="text-sm">Open an account or deposit</span>
            </div>
        </section>
    );
};

export default UserBalance;
