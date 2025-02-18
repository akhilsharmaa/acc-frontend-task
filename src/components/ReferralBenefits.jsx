 

const programs = [
  { name: "Professional Certificate Program in Product Management", referrer: "₹ 7,000", referee: "₹ 9,000" },
  { name: "PG Certificate Program in Strategic Product Management", referrer: "₹ 9,000", referee: "₹ 11,000" },
  { name: "Executive Program in Data Driven Product Management", referrer: "₹ 10,000", referee: "₹ 10,000" },
  { name: "Executive Program in Product Management and Digital Transformation", referrer: "₹ 10,000", referee: "₹ 10,000" },
  { name: "Executive Program in Product Management", referrer: "₹ 10,000", referee: "₹ 10,000" },
  { name: "Advanced Certification in Product Management", referrer: "₹ 10,000", referee: "₹ 10,000" },
  { name: "Executive Program in Product Management and Project Management", referrer: "₹ 10,000", referee: "₹ 10,000" },
];

export default function ReferralBenefits() {
  return (
    <div className="p-4 md:p-10 max-w-4xl mx-auto"> 
      <h2 className="text-xl md:text-2xl font-semibold text-center mb-4">
        What Are The <span className="text-blue-500">Referral Benefits?</span>
      </h2>
      <br/>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full border-collapse border border-gray-200 shadow-md">
          <thead className="bg-blue-100">
            <tr>
              <th className="p-3 border border-gray-200 text-left">Programs</th>
              <th className="p-3 border border-gray-200">Referrer Bonus</th>
              <th className="p-3 border border-gray-200">Referee Bonus</th>
            </tr>
          </thead>
          <tbody>
            {programs.map((program, index) => (
              <tr key={index} className="border border-gray-200">
                <td className="p-3 border border-gray-200">{program.name}</td>
                <td className="p-3 border border-gray-200 text-center">{program.referrer}</td>
                <td className="p-3 border border-gray-200 text-center">{program.referee}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
