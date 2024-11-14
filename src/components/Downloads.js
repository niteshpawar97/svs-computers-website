// src/components/Downloads.js
import React from 'react';

const downloads = [
  {
    title: 'BCA QPAPER - English',
    category: 'BCA Question Papers',
    description: 'Download first semester old question papers.',
    link: 'http://svscomputers.co.in/Uploads/Downloads/bca-1-sem-communicative-english-7045-feb-2022.pdf',
  },
  {
    title: 'PGDCA QPAPER',
    category: 'Regular',
    description: 'Download latest question paper of first semester.',
    link: 'http://svscomputers.co.in/Uploads/Downloads/pgdca-1-sem-database-using-ms-access-7620-jan-2023.pdf',
  },
  {
    title: 'AICPE',
    category: 'Regular',
    description: 'Download AICPE materials.',
    link: 'https://www.aicpeindia.ac.in/',
  },
  {
    title: 'BCA SYLLABUS',
    category: 'Regular',
    description: 'Download latest 2020 syllabus of BCA.',
    link: 'https://www.mcu.ac.in/wp-content/uploads/2021/01/BCA-CBCS-Syllabus-2020.pdf',
  },
  {
    title: 'DCA SYLLABUS',
    category: 'Regular',
    description: 'Download syllabus of Makhanlal University DCA.',
    link: 'https://www.mcu.ac.in/download/DCA_PGDCA_SYLLABUS_FROM_JULY_2018/DCA_Syllabus_july_2018.pdf',
  },
  {
    title: 'MSC CS SYLLABUS',
    category: 'Regular',
    description: 'Download syllabus of MCU PG Degree course MSC.',
    link: 'https://www.mcu.ac.in/wp-content/uploads/2019/08/updated-msc-cs-syllabus-2019.pdf',
  },
  {
    title: 'PGDCA SYLLABUS',
    category: 'Regular',
    description: 'Download syllabus of PGDCA.',
    link: 'https://www.mcu.ac.in/wp-content/uploads/2021/01/BCA-CBCS-Syllabus-2020.pdf',
  },
  {
    title: 'STUDY MATERIAL DIPLOMA',
    category: 'Regular',
    description: 'Download notes of DCA PGDCA.',
    link: 'https://www.mcu.ac.in/online-study-for-pgdca-and-dca',
  },
];

function Downloads() {
  return (
    <section id="downloads" className="bg-white py-12">
      <div className="container mx-auto">
        <h3 className="text-3xl font-semibold text-center mb-8 text-primary"><span class="bg-highlightBg px-highlightPaddingX py-highlightPaddingY rounded-highlight">
        Downloads
          </span></h3>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-4 border-b">Title</th>
                <th className="py-2 px-4 border-b">Category</th>
                <th className="py-2 px-4 border-b">Description</th>
                <th className="py-2 px-4 border-b">Download</th>
              </tr>
            </thead>
            <tbody>
              {downloads.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="py-2 px-4 border-b">{item.title}</td>
                  <td className="py-2 px-4 border-b">{item.category}</td>
                  <td className="py-2 px-4 border-b">{item.description}</td>
                  <td className="py-2 px-4 border-b text-center">
                    <a
                      href={item.link}
                      className="text-blue-500 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default Downloads;
