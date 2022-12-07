import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { cardHistory, firstHistory, secondHistory, userStats } from "../data";

const data = [
  {
    time: "9:10:00 AM",
    price: 80000,
  },
  {
    time: "9:15:00 AM",
    price: 20000,
  },
  {
    time: "9:20:00 AM",
    price: 70000,
  },
  {
    time: "9:35:00 AM",
    price: 40000,
  },
  {
    time: "9:50:00 AM",
    price: 50000,
  },
  {
    time: "9:58:00 AM",
    price: 80000,
  },
  {
    time: "9:60:00 AM",
    price: 90000,
  },
  {
    time: "10:05:00 AM",
    price: 40000,
  },
  {
    time: "10:10:00 AM",
    price: 95000,
  },
  {
    time: "10:40:00 AM",
    price: 85000,
  },
];

function CustomTooltip({ active, payload, label }) {
  if (active) {
    return (
      <div className="bg-white border p-4">
        <h4 className="text-color-black-50 text-sm">{label}</h4>
        <p className="text-color-black-100 font-bold">${payload[0].value}</p>
      </div>
    );
  }
}

const Stats = () => {
  return (
    <>
      {/* desktop */}
      <section className="h-fit w-full bg-white lg:px-20 hidden lg:grid xl:grid-cols-2 lg:grid-cols-1 gap-6 px-8">
        {/* col1 */}
        <div className="grid grid-cols-1 gap-6">
          {/* col1-1 */}
          <div className="grid grid-cols-2 gap-6">
            {userStats.map((stat, index) => {
              return (
                <div
                  className="flex justify-between p-6 border rounded-xl"
                  key={index}
                >
                  <div className="flex gap-[13px] flex-col">
                    <h4 className="text-sm text-color-black-50">
                      {stat.title}
                    </h4>
                    <div>
                      <h3 className="font-extrabold text-xl text-color-black-100">
                        ${stat.price}
                      </h3>
                      <p className="text-xs text-color-black-100 font-medium">
                        {stat.para}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between text-[#23e33e]">
                    <i className={stat.icon}></i>
                    <p className="font-medium text-xs">{stat.stats}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* col1-2 */}
          <div className="border rounded-xl">
            <h4 className="pl-6 h-16 flex items-center border-b mb-[7.4px] text-color-black-100 font-bold">
              Your Assets
            </h4>

            {/* chart box */}
            <div className="flex flex-col  h-fit">
              {/* chart */}
              <div>
                <ResponsiveContainer width="100%" aspect={2}>
                  <AreaChart
                    width={500}
                    height={400}
                    data={data}
                    margin={{
                      top: 0,
                      right: 0,
                      left: 0,
                      bottom: 0,
                    }}
                  >
                    <defs>
                      <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                        <stop
                          offset="0%"
                          stopColor="#0052ff"
                          stopOpacity={0.4}
                        />
                        <stop
                          offset="75%"
                          stopColor="#0052ff"
                          stopOpacity={0.05}
                        />
                      </linearGradient>
                    </defs>

                    <XAxis dataKey="time" hide={true} />
                    <YAxis hide={true} />

                    <Tooltip content={<CustomTooltip />} />
                    <Area
                      // animationBegin={800}
                      // AnimationDuration={2000}
                      type="monotone"
                      dataKey="price"
                      stroke="#0052ff"
                      strokeWidth={3}
                      fill="url(#color)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              <div>
                {cardHistory.map((card, index) => {
                  return (
                    <div
                      key={index}
                      className="flex justify-between items-center px-6 py-7"
                    >
                      {/* left */}
                      <div className="flex gap-5 items-center">
                        <img src={card.image} alt="card type" />
                        <div className="flex flex-col">
                          <h4 className="text-color-black-100 font-bold text-sm">
                            {card.details}
                          </h4>
                          <p className="text-color-black-50 text-sm">
                            {card.title}
                          </p>
                        </div>
                      </div>
                      {/* right */}
                      <div>
                        <h4 className="text-color-black-100 font-bold text-sm">
                          {card.price}
                        </h4>
                        <p className="text-color-black-50 text-sm">
                          {card.balance}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* col2 */}
        <div className="border rounded-xl ">
          <div className="px-6 h-16 flex items-center justify-between border-b mb-[7.4px]">
            <h4 className="text-color-black-100 font-bold">
              Latest transactions
            </h4>
            <i className="ri-arrow-right-up-line text-color-black-100"></i>
          </div>

          <h4 className="text-color-black-50 font-sm pl-6 mt-6">28 August</h4>

          {firstHistory.map((item, index) => {
            return (
              <div
                key={index}
                className="mx-6 flex items-center justify-between py-4 border-b box-border"
              >
                {/* left */}
                <div className="flex items-center gap-5">
                  <img src={item.image} alt="card logo" />
                  <div>
                    <h5 className="text-color-black-100 font-bold text-sm">
                      {item.details}
                    </h5>
                    <p className="text-color-black-50 text-sm">{item.date}</p>
                  </div>
                </div>
                {/* right */}
                <p className="text-color-black-100 font-bold text-sm">
                  {item.balance}
                </p>
              </div>
            );
          })}

          <h4 className="text-color-black-50 font-sm pl-6 mt-6">24 August</h4>

          <div>
            {secondHistory.map((item, i) => {
              return (
                <div
                  key={i}
                  className="mx-6 flex items-center justify-between py-4 border-b box-border"
                >
                  {/* left */}
                  <div className="flex items-center gap-5">
                    <img src={item.image} alt="card logo" />
                    <div>
                      <h5 className="text-color-black-100 font-bold text-sm">
                        {item.details}
                      </h5>
                      <p className="text-color-black-50 text-sm">{item.date}</p>
                    </div>
                  </div>
                  {/* right */}
                  <p className="text-color-black-100 font-bold text-sm">
                    {item.balance}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* mobile */}
      <section className="grid grid-cols-1 md:grid-cols-2 h-fit lg:hidden gap-6 px-8">
        {/* box1 */}
        <div className="h-fit flex justify-between p-6 border rounded-xl">
          <div className="flex gap-[13px] flex-col">
            <h4 className="text-sm text-color-black-50">Income</h4>
            <div>
              <h3 className="font-extrabold text-xl text-color-black-100">
                $9.650,00
              </h3>
              <p className="text-xs text-color-black-100 font-medium">
                84 Transactions
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between text-[#23e33e]">
            <i className="ri-arrow-left-up-line"></i>
            <p className="font-medium text-xs">+10%</p>
          </div>
        </div>

        {/* box2 */}
        <div className="h-fit flex justify-between p-6 border rounded-xl">
          <div className="flex gap-[13px] flex-col">
            <h4 className="text-sm text-color-black-50">Spending</h4>
            <div>
              <h3 className="font-extrabold text-xl text-color-black-100">
                $7.845,00
              </h3>
              <p className="text-xs text-color-black-100 font-medium">
                58 Transactions
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between text-[#23e33e]">
            <i className="ri-arrow-left-down-line"></i>
            <p className="font-medium text-xs">-2%</p>
          </div>
        </div>

        {/* box3 */}
        <div className="border rounded-xl ">
          <h4 className="pl-6 h-16 flex items-center border-b mb-[7.4px] text-color-black-100 font-bold">
            Your Assets
          </h4>

          {/* chart box */}
          <div className="flex flex-col  h-fit">
            {/* chart */}

            <ResponsiveContainer width="100%" aspect={2}>
              <AreaChart
                width={500}
                height={400}
                data={data}
                margin={{
                  top: 0,
                  right: 0,
                  left: 0,
                  bottom: 0,
                }}
              >
                <defs>
                  <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#0052ff" stopOpacity={0.4} />
                    <stop offset="75%" stopColor="#0052ff" stopOpacity={0.05} />
                  </linearGradient>
                </defs>

                <XAxis dataKey="time" hide={true} />
                <YAxis hide={true} />

                <Tooltip content={<CustomTooltip />} />
                <Area
                  // animationBegin={800}
                  // AnimationDuration={2000}
                  type="monotone"
                  dataKey="price"
                  stroke="#0052ff"
                  strokeWidth={3}
                  fill="url(#color)"
                />
              </AreaChart>
            </ResponsiveContainer>

            <div>
              {cardHistory.map((card, index) => {
                return (
                  <div
                    key={index}
                    className="flex justify-between items-center px-6 py-7 flex-wrap gap-2"
                  >
                    {/* left */}
                    <div className="flex gap-5 items-center">
                      <img src={card.image} alt="card type" />
                      <div className="flex flex-col">
                        <h4 className="text-color-black-100 font-bold text-sm">
                          {card.details}
                        </h4>
                        <p className="text-color-black-50 text-sm">
                          {card.title}
                        </p>
                      </div>
                    </div>
                    {/* right */}
                    <div>
                      <h4 className="text-color-black-100 font-bold text-sm">
                        {card.price}
                      </h4>
                      <p className="text-color-black-50 text-sm">
                        {card.balance}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* box4 */}
        <div className="border rounded-xl ">
          <div className="px-6 h-16 flex items-center justify-between border-b mb-[7.4px]">
            <h4 className="text-color-black-100 font-bold">
              Latest transactions
            </h4>
            <i className="ri-arrow-right-up-line text-color-black-100"></i>
          </div>

          <h4 className="text-color-black-50 font-sm pl-6 mt-6">28 August</h4>

          {firstHistory.map((item, index) => {
            return (
              <div
                key={index}
                className="mx-6 flex items-center justify-between py-4 border-b box-border flex-wrap gap-2"
              >
                {/* left */}
                <div className="flex items-center gap-5">
                  <img src={item.image} alt="card logo" />
                  <div>
                    <h5 className="text-color-black-100 font-bold text-sm">
                      {item.details}
                    </h5>
                    <p className="text-color-black-50 text-sm">{item.date}</p>
                  </div>
                </div>
                {/* right */}
                <p className="text-color-black-100 font-bold text-sm">
                  {item.balance}
                </p>
              </div>
            );
          })}

          <h4 className="text-color-black-50 font-sm pl-6 mt-6">24 August</h4>

          <div>
            {secondHistory.map((item, i) => {
              return (
                <div
                  key={i}
                  className="mx-6 flex items-center justify-between py-4 border-b box-border flex-wrap gap-2"
                >
                  {/* left */}
                  <div className="flex items-center gap-5">
                    <img src={item.image} alt="card logo" />
                    <div>
                      <h5 className="text-color-black-100 font-bold text-sm">
                        {item.details}
                      </h5>
                      <p className="text-color-black-50 text-sm">{item.date}</p>
                    </div>
                  </div>
                  {/* right */}
                  <p className="text-color-black-100 font-bold text-sm">
                    {item.balance}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Stats;
