<<<<<<< HEAD
import React from "react";
import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
} from "recharts";

const alabamaData = [
  { year: 2001, us: 11.7, al: 14.5 },
  { year: 2002, us: 11.5, al: 14.2 },
  { year: 2003, us: 12.1, al: 14.9 },
  { year: 2004, us: 12.7, al: 15.5 },
  { year: 2005, us: 12.6, al: 15.3 },
  { year: 2006, us: 12.3, al: 15.2 },
  { year: 2007, us: 12.5, al: 15.8 },
  { year: 2008, us: 13.2, al: 16.3 },
  { year: 2009, us: 14.3, al: 17.5 },
  { year: 2010, us: 15.1, al: 18.3 },
  { year: 2011, us: 15.0, al: 18.1 },
  { year: 2012, us: 12.5, al: 15.8 },
  { year: 2013, us: 14.5, al: 18.0 },
  { year: 2014, us: 14.8, al: 17.6 },
  { year: 2015, us: 14.3, al: 17.1 },
  { year: 2016, us: 13.5, al: 16.8 },
  { year: 2017, us: 12.3, al: 16.5 },
  { year: 2018, us: 11.8, al: 16.0 },
  { year: 2019, us: 10.5, al: 15.3 },
  { year: 2020, us: 10.5, al: 15.4 },
  { year: 2021, us: 11.4, al: 16.8 },
  { year: 2022, us: 11.1, al: 16.2 },
  { year: 2023, us: 11.5, al: 16.0 },
];

const uabPieData = [
  { name: "No One", value: 62.8, color: "#a58b5c" },
  { name: "Friends", value: 33.4, color: "#f2c500" },
  { name: "Faculty", value: 1.4, color: "#a8d08d" },
  { name: "Staff", value: 2.4, color: "#3b602f" },
];

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, name }) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 1.2;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  if (percent < 0.02) return null;
  return (
    <text
      x={x}
      y={y}
      fill="#333"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
      style={{ fontSize: "13px", fontWeight: 600 }}
    >
      {`${name} ${(percent * 100).toFixed(1)}%`}
    </text>
  );
};

const Why = () => {
  return (
    <section id="why" className="section bg-section-gray text-center">
      <div className="container">
        <h2>Why We Can’t Wait</h2>

        {/* === SLIDE 1 === */}
        <motion.div
          className="why-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h4>Fasten your seatbelts for some shocking stats on food in the US.</h4>
          <motion.div
            className="stat-box"
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 80 }}
          >
            <h1>40%</h1>
            <p>
              of the entire US’s yearly food supply (= 325 LB/person) is{" "}
              <strong>WASTED.</strong>
            </p>
          </motion.div>
          <p className="small text-muted">Source: Feeding America</p>
        </motion.div>

        <motion.div
          className="why-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h4>
            What about <strong>Alabama?</strong>
          </h4>
          <motion.div className="stat-box">
            <h1>1 IN 6</h1>
            <p>Alabamian experiences food insecurity!</p>
          </motion.div>

          <div style={{ width: "100%", height: 300 }}>
            <ResponsiveContainer>
              <LineChart data={alabamaData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="us"
                  stroke="#145A32"
                  strokeWidth={3}
                  name="US National Poverty Rate (%)"
                />
                <Line
                  type="monotone"
                  dataKey="al"
                  stroke="#F1C40F"
                  strokeWidth={3}
                  name="Alabama Poverty Rate (%)"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <p className="small text-muted">Source: www.census.gov</p>
        </motion.div>

<motion.div
  className="why-card"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
>
  <h4>
    How about <strong>UAB?</strong>
  </h4>

  <div className="uab-section">
    <div className="uab-left">
      <h5 style={{ fontWeight: 700, color: "#145A32", marginBottom: "10px" }}>
        When we asked a sample of 927 students...
      </h5>
      <ul>
        <li><strong>39.2%</strong> worried about running out of food.</li>
        <li><strong>28.6%</strong> said food didn’t last.</li>
        <li><strong>48.2%</strong> couldn’t afford healthy meals.</li>
        <li><strong>24.5%</strong> cut/skipped meals due to cost.</li>
        <li><strong>17.7%</strong> were hungry but didn’t eat.</li>
      </ul>
    </div>
    <div className="uab-right">
      <h5
        style={{
          color: "#145A32",
          fontWeight: 700,
          marginBottom: "15px",
          textAlign: "center",
        }}
      >
        Who is aware of your food security status?
      </h5>

      <ResponsiveContainer width="100%" height={280}>
        <PieChart>
          <Pie
            data={uabPieData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            labelLine={false}
            label={renderCustomizedLabel}
          >
            {uabPieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            formatter={(value, name) => [`${value}%`, name]}
            contentStyle={{
              borderRadius: "8px",
              backgroundColor: "#fff",
              color: "#333",
            }}
          />
          <Legend
            layout="horizontal"
            verticalAlign="bottom"
            align="center"
            wrapperStyle={{ fontSize: "0.9rem" }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  </div>

  <p className="small text-muted mt-3">
    Source: Food Access at UAB Survey (2018)
  </p>
</motion.div>

      </div>
    </section>
  );
};
=======
function Why() {
  return (
    <div>
      <h2>Why Choose Us</h2>
      <p>Some information about why your organization is special.</p>
    </div>
  );
}
>>>>>>> ed50a2b85e969a84fb08d4ccd2e00cc336e14016

export default Why;
