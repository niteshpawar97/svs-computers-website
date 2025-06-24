import React from "react";
import { motion } from "framer-motion";

const downloads = [
  {
    title: "BCA QPAPER - English",
    category: "BCA Question Papers",
    description: "Download first semester old question papers.",
    link: "http://svscomputers.co.in/Uploads/Downloads/bca-1-sem-communicative-english-7045-feb-2022.pdf",
  },
  {
    title: "PGDCA QPAPER",
    category: "Regular",
    description: "Download latest question paper of first semester.",
    link: "http://svscomputers.co.in/Uploads/Downloads/pgdca-1-sem-database-using-ms-access-7620-jan-2023.pdf",
  },
  {
    title: "AICPE",
    category: "Regular",
    description: "Download AICPE materials.",
    link: "https://www.aicpeindia.ac.in/",
  },
  {
    title: "BCA SYLLABUS",
    category: "Regular",
    description: "Download latest 2020 syllabus of BCA.",
    link: "https://www.mcu.ac.in/wp-content/uploads/2021/01/BCA-CBCS-Syllabus-2020.pdf",
  },
  {
    title: "DCA SYLLABUS",
    category: "Regular",
    description: "Download syllabus of Makhanlal University DCA.",
    link: "https://www.mcu.ac.in/download/DCA_PGDCA_SYLLABUS_FROM_JULY_2018/DCA_Syllabus_july_2018.pdf",
  },
  {
    title: "MSC CS SYLLABUS",
    category: "Regular",
    description: "Download syllabus of MCU PG Degree course MSC.",
    link: "https://www.mcu.ac.in/wp-content/uploads/2019/08/updated-msc-cs-syllabus-2019.pdf",
  },
  {
    title: "PGDCA SYLLABUS",
    category: "Regular",
    description: "Download syllabus of PGDCA.",
    link: "https://www.mcu.ac.in/wp-content/uploads/2021/01/BCA-CBCS-Syllabus-2020.pdf",
  },
  {
    title: "STUDY MATERIAL DIPLOMA",
    category: "Regular",
    description: "Download notes of DCA PGDCA.",
    link: "https://www.mcu.ac.in/online-study-for-pgdca-and-dca",
  },
];

function Downloads() {
  return (
    <section id="downloads" className="bg-white py-16">
      <motion.div
        className="container mx-auto px-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="text-4xl font-semibold text-center mb-10 text-primary">
          <span className="bg-highlightBg px-3 py-1 rounded">Downloads</span>
        </h3>

        {/* Mobile Layout (Cards) */}
        <div className="block lg:hidden space-y-4">
          {downloads.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-200 p-4 rounded-lg shadow-sm"
            >
              <h4 className="text-lg font-bold text-gray-800">{item.title}</h4>
              <p className="text-sm text-gray-500 mb-1">{item.category}</p>
              <p className="text-sm text-gray-600 mb-3">{item.description}</p>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700 text-sm"
              >
                Download
              </a>
            </div>
          ))}
        </div>

        {/* Desktop Layout (Table) */}
        <div className="hidden lg:block overflow-x-auto shadow rounded-lg mt-8">
          <table className="w-full bg-white border border-gray-200">
            <thead className="bg-gray-100">
              <tr className="text-left text-sm text-gray-700">
                <th className="py-3 px-4 border-b">Title</th>
                <th className="py-3 px-4 border-b">Category</th>
                <th className="py-3 px-4 border-b">Description</th>
                <th className="py-3 px-4 border-b text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {downloads.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50 text-sm">
                  <td className="py-2 px-4 border-b font-medium text-gray-800">{item.title}</td>
                  <td className="py-2 px-4 border-b text-gray-600">{item.category}</td>
                  <td className="py-2 px-4 border-b text-gray-600">{item.description}</td>
                  <td className="py-2 px-4 border-b text-center">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded text-sm transition"
                    >
                      Download
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </section>
  );
}

export default Downloads;
