import { WorkTimeline } from "@/components/work/workt-timeline";
import { LucideDot } from "lucide-react";
import { MdLocationSearching } from "react-icons/md";

function Work() {
  const data = [
    {
      title: "2024 - Present",
      content: (
        <div>
          <div className="grid grid-cols-1 gap-5">
            <div className="rounded-xl space-y-5 bg-neutral-200/50 dark:bg-neutral-800/50 p-4 md:p-6 xl:p-8">
              {/** image and names */}
              <div className="flex items-center gap-3">
                <img
                  src="/assets/zidio.png"
                  alt="zidio-dev"
                  width={80}
                  height={80}
                  className="border border-zinc-300 dark:border-zinc-800 rounded-xl p-3 bg-white dark:bg-[#171020]"
                />
                <div className="flex flex-col">
                  <span className="flex items-center gap-1">
                    <MdLocationSearching className="text-purple-700 dark:text-purple-600 text-xs" />
                    <h2 className="text-[10px] md:text-xs font-mono text-neutral-700 dark:text-neutral-400">
                      Remote (Bengaluru, Karnataka)
                    </h2>
                  </span>
                  <span className="font-kanit font-medium md:text-lg text-[#111] dark:text-neutral-50">
                    Zidio Development Pvt. Ltd
                  </span>
                  <span className="flex items-center gap-1 text-[#333] dark:text-neutral-300 font-kanit font-normal text-xs md:text-sm">
                    Web Developer{" "}
                    <LucideDot className="text-purple-700 dark:text-purple-600" />
                    <h2 className="text-purple-700 dark:text-purple-600">
                      Internship
                    </h2>
                  </span>
                  <span className="text-xs font-mono text-neutral-500">
                    Dec 2024 - Feb 2025
                  </span>
                </div>
              </div>

              {/** description and tech stack */}

              <span className="flex flex-wrap gap-3 text-xs font-outfit px-3">
                <h2 className="rounded-sm px-2 py-[2px] bg-neutral-600 dark:bg-zinc-300 text-white dark:text-black">
                  HTML
                </h2>
                <h2 className="rounded-sm px-2 py-[2px] bg-neutral-600 dark:bg-zinc-300 text-white dark:text-black">
                  CSS
                </h2>
                <h2 className="rounded-sm px-2 py-[2px] bg-neutral-600 dark:bg-zinc-300 text-white dark:text-black">
                  Javascript
                </h2>
                <h2 className="rounded-sm px-2 py-[2px] bg-neutral-600 dark:bg-zinc-300 text-white dark:text-black">
                  React.js
                </h2>
              </span>

              {/** points */}
              <ul className="list-disc font-inter text-xs px-4 text-justify">
                <li>
                  Built responsive and interactive user interfaces using HTML5,
                  CSS3, and JavaScript.
                </li>
                <li>
                  Collaborated with designers to implement pixel-perfect UI
                  designs, ensuring a seamless user experience.
                </li>
                <li>
                  Gained proficiency in debugging and optimizing code for better
                  performance.
                </li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
        title: "2022 - 2024",
        content: (
          <div>
            <div className="grid grid-cols-1 gap-5">
              <div className="rounded-xl space-y-5 bg-neutral-200/50 dark:bg-neutral-800/50 p-4 md:p-6 xl:p-8">
                {/** image and names */}
                <div className="flex items-center gap-3">
                  <img
                    src="/assets/freelance.svg"
                    alt="zidio-dev"
                    width={80}
                    height={80}
                    className="border border-zinc-300 dark:border-zinc-800 rounded-xl p-3 bg-white dark:bg-[#171020]"
                  />
                  <div className="flex flex-col">
                    <span className="flex items-center gap-1">
                      <MdLocationSearching className="text-orange-700 dark:text-orange-600 text-xs" />
                      <h2 className="text-[10px] md:text-xs font-mono text-neutral-700 dark:text-neutral-400">
                        Remote (New Delhi, Delhi)
                      </h2>
                    </span>
                    <span className="font-kanit font-medium md:text-lg text-[#111] dark:text-neutral-50">
                      Freelance/Self Learning
                    </span>
                    <span className="flex items-center gap-1 text-[#333] dark:text-neutral-300 font-kanit font-normal text-xs md:text-sm">
                      Software Developer{" "}
                      <LucideDot className="text-orange-700 dark:text-orange-600" />
                      <h2 className="text-orange-700 dark:text-orange-600">
                        Full-time
                      </h2>
                    </span>
                    <span className="text-xs font-mono text-neutral-500">
                      Dec 2022 - Oct 2024
                    </span>
                  </div>
                </div>
  
                {/** description and tech stack */}
  
                <span className="flex flex-wrap gap-3 text-xs font-outfit px-3">
                  <h2 className="rounded-sm px-2 py-[2px] bg-neutral-600 dark:bg-zinc-300 text-white dark:text-black">
                    HTML
                  </h2>
                  <h2 className="rounded-sm px-2 py-[2px] bg-neutral-600 dark:bg-zinc-300 text-white dark:text-black">
                    CSS
                  </h2>
                  <h2 className="rounded-sm px-2 py-[2px] bg-neutral-600 dark:bg-zinc-300 text-white dark:text-black">
                    Javascript
                  </h2>
                  <h2 className="rounded-sm px-2 py-[2px] bg-neutral-600 dark:bg-zinc-300 text-white dark:text-black">
                    Next.js
                  </h2>
                  <h2 className="rounded-sm px-2 py-[2px] bg-neutral-600 dark:bg-zinc-300 text-white dark:text-black">
                    React.js
                  </h2>
                  <h2 className="rounded-sm px-2 py-[2px] bg-neutral-600 dark:bg-zinc-300 text-white dark:text-black">
                    Node.js
                  </h2>
                  <h2 className="rounded-sm px-2 py-[2px] bg-neutral-600 dark:bg-zinc-300 text-white dark:text-black">
                    DBMS
                  </h2>
                  <h2 className="rounded-sm px-2 py-[2px] bg-neutral-600 dark:bg-zinc-300 text-white dark:text-black">
                    Operating System
                  </h2>
                  <h2 className="rounded-sm px-2 py-[2px] bg-neutral-600 dark:bg-zinc-300 text-white dark:text-black">
                    Data Structures
                  </h2>
                  <h2 className="rounded-sm px-2 py-[2px] bg-neutral-600 dark:bg-zinc-300 text-white dark:text-black">
                    Backend Development
                  </h2>
                  <h2 className="rounded-sm px-2 py-[2px] bg-neutral-600 dark:bg-zinc-300 text-white dark:text-black">
                    Java
                  </h2>
                  <h2 className="rounded-sm px-2 py-[2px] bg-neutral-600 dark:bg-zinc-300 text-white dark:text-black">
                    State Management
                  </h2>
                  <h2 className="rounded-sm px-2 py-[2px] bg-neutral-600 dark:bg-zinc-300 text-white dark:text-black">
                    UI/UX
                  </h2>
                </span>
  
                {/** points */}
                <ul className="list-disc font-inter text-xs px-4 text-justify">
                  <li>
                  Developed and designed responsive websites and web applications using HTML, CSS, JavaScript, React.js, Next.js, Tailwind CSS, etc.
                  </li>
                  <li>
                  Built dynamic and interactive user interfaces with a focus on performance, accessibility, and user experience.
                  </li>
                  <li>
                  Integrated REST APIs, Firebase, or database systems (MySQL, MongoDB, etc.) into web applications.
                  </li>
                  <li>Used Git/GitHub for version control and collaborated with other developers when required.</li>
                  <li>Optimized websites for SEO, performance, and cross-browser compatibility.</li>
                  <li>Deployed applications using Vercel, Netlify, or AWS.</li>
                </ul>
              </div>
            </div>
          </div>
        ),
      },
      {
        title: "2018 - 2022",
        content: (
          <div>
            <div className="grid grid-cols-1 gap-5">
              {/** suven */}
              <div className="rounded-xl space-y-5 bg-neutral-200/50 dark:bg-neutral-800/50 p-4 md:p-6 xl:p-8">
                {/** image and names */}
                <div className="flex items-center gap-3">
                  <img
                    src="/assets/suven.png"
                    alt="suven"
                    width={80}
                    height={80}
                    className="border border-zinc-300 dark:border-zinc-800 rounded-xl p-3 bg-white dark:bg-[#171020]"
                  />
                  <div className="flex flex-col">
                    <span className="flex items-center gap-1">
                      <MdLocationSearching className="text-blue-700 dark:text-blue-600 text-xs" />
                      <h2 className="text-[10px] md:text-xs font-mono text-neutral-700 dark:text-neutral-400">
                        Remote (Mumbai, Maharashtra)
                      </h2>
                    </span>
                    <span className="font-kanit font-medium md:text-lg text-[#111] dark:text-neutral-50">
                      Suven Consultants & Technology Pvt. Ltd
                    </span>
                    <span className="flex items-center gap-1 text-[#333] dark:text-neutral-300 font-kanit font-normal text-xs md:text-sm">
                      UI/UX{" "}
                      <LucideDot className="text-blue-700 dark:text-blue-600" />
                      <h2 className="text-blue-700 dark:text-blue-600">
                        Internship
                      </h2>
                    </span>
                    <span className="text-xs font-mono text-neutral-500">
                      Nov 2021 - Dec 2021
                    </span>
                  </div>
                </div>
  
                {/** description and tech stack */}
  
                <span className="flex flex-wrap gap-3 text-xs font-outfit px-3">
                  <h2 className="rounded-sm px-2 py-[2px] bg-neutral-600 dark:bg-zinc-300 text-white dark:text-black">
                    HTML
                  </h2>
                  <h2 className="rounded-sm px-2 py-[2px] bg-neutral-600 dark:bg-zinc-300 text-white dark:text-black">
                    CSS
                  </h2>
                  <h2 className="rounded-sm px-2 py-[2px] bg-neutral-600 dark:bg-zinc-300 text-white dark:text-black">
                    Javascript
                  </h2>
                  <h2 className="rounded-sm px-2 py-[2px] bg-neutral-600 dark:bg-zinc-300 text-white dark:text-black">
                    Figma
                  </h2>
                  <h2 className="rounded-sm px-2 py-[2px] bg-neutral-600 dark:bg-zinc-300 text-white dark:text-black">
                    Wireframe
                  </h2>
                  <h2 className="rounded-sm px-2 py-[2px] bg-neutral-600 dark:bg-zinc-300 text-white dark:text-black">
                    Adode XD
                  </h2>
                  <h2 className="rounded-sm px-2 py-[2px] bg-neutral-600 dark:bg-zinc-300 text-white dark:text-black">
                    Workflows
                  </h2>
                </span>
  
                {/** points */}
                <ul className="list-disc font-inter text-xs px-4 text-justify">
                  <li>
                  Created wireframes, mockups, and prototypes to visualize UI concepts and workflows.
                  </li>
                  <li>
                  Applied UI/UX design principles to improve usability and accessibility.
                  </li>
                  <li>
                  Designed interactive components and layouts based on brand guidelines.
                  </li>
                  <li>Conducted user research & usability testing to refine designs based on feedback.</li>
                  <li>Converted UI designs into responsive front-end components using HTML, CSS, and Tailwind CSS</li>
                  <li>Assisted in designing user interfaces for web and mobile applications using Figma, Adobe XD, or Sketch.</li>
                </ul>
              </div>

              {/** two waits */}
              <div className="rounded-xl space-y-5 bg-neutral-200/50 dark:bg-neutral-800/50 p-4 md:p-6 xl:p-8">
                {/** image and names */}
                <div className="flex items-center gap-3">
                  <img
                    src="/assets/twowait.png"
                    alt="two-waits"
                    width={80}
                    height={80}
                    className="border border-zinc-300 dark:border-zinc-800 rounded-xl p-3 bg-white dark:bg-[#171020]"
                  />
                  <div className="flex flex-col">
                    <span className="flex items-center gap-1">
                      <MdLocationSearching className="text-pink-700 dark:text-pink-600 text-xs" />
                      <h2 className="text-[10px] md:text-xs font-mono text-neutral-700 dark:text-neutral-400">
                        Remote (Greater Noida, Uttar Pradesh)
                      </h2>
                    </span>
                    <span className="font-kanit font-medium md:text-lg text-[#111] dark:text-neutral-50">
                      Twowaits Technologies
                    </span>
                    <span className="flex items-center gap-1 text-[#333] dark:text-neutral-300 font-kanit font-normal text-xs md:text-sm">
                      DSA Scholar{" "}
                      <LucideDot className="text-pink-700 dark:text-pink-600" />
                      <h2 className="text-pink-700 dark:text-pink-600">
                        Internship
                      </h2>
                    </span>
                    <span className="text-xs font-mono text-neutral-500">
                      Jul 2021 - Aug 2021
                    </span>
                  </div>
                </div>
  
                {/** description and tech stack */}
  
                <span className="flex flex-wrap gap-3 text-xs font-outfit px-3">
                  <h2 className="rounded-sm px-2 py-[2px] bg-neutral-600 dark:bg-zinc-300 text-white dark:text-black">
                    Data Structures
                  </h2>
                  <h2 className="rounded-sm px-2 py-[2px] bg-neutral-600 dark:bg-zinc-300 text-white dark:text-black">
                    Algorithms
                  </h2>
                  <h2 className="rounded-sm px-2 py-[2px] bg-neutral-600 dark:bg-zinc-300 text-white dark:text-black">
                    Space Complexity
                  </h2>
                  <h2 className="rounded-sm px-2 py-[2px] bg-neutral-600 dark:bg-zinc-300 text-white dark:text-black">
                    Time Complexity
                  </h2>
                  <h2 className="rounded-sm px-2 py-[2px] bg-neutral-600 dark:bg-zinc-300 text-white dark:text-black">
                    Optimization
                  </h2>
                  <h2 className="rounded-sm px-2 py-[2px] bg-neutral-600 dark:bg-zinc-300 text-white dark:text-black">
                    Sorting/Searching
                  </h2>
                  <h2 className="rounded-sm px-2 py-[2px] bg-neutral-600 dark:bg-zinc-300 text-white dark:text-black">
                    Problem Solving
                  </h2>
                </span>
  
                {/** points */}
                <ul className="list-disc font-inter text-xs px-4 text-justify">
                  <li>
                  Solved 250+ complex DSA problems related to arrays, linked lists, trees, graphs, dynamic programming, and recursion.
                  </li>
                  <li>
                  Participated in algorithm design and optimization to improve time and space complexity.
                  </li>
                  <li>
                  Developed efficient sorting, searching, and hashing algorithms for real-world applications.
                  </li>
                  <li>Contributed to competitive programming challenges on platforms like LeetCode, CodeChef, Codeforces, or HackerRank.</li>
                  <li>Assisted in coding workshops, hackathons, or mentorship programs to help peers understand DSA concepts.</li>
                  <li>Assisted in designing user interfaces for web and mobile applications using Figma, Adobe XD, or Sketch.</li>
                </ul>
              </div>

              {/** b-tech */}
              <div className="rounded-xl space-y-5 bg-neutral-200/50 dark:bg-neutral-800/50 p-4 md:p-6 xl:p-8">
                {/** image and names */}
                <div className="flex items-center gap-3">
                  <img
                    src="/assets/adgitm.png"
                    alt="college"
                    width={80}
                    height={80}
                    className="border border-zinc-300 dark:border-zinc-800 rounded-xl p-3 bg-white dark:bg-[#171020]"
                  />
                  <div className="flex flex-col">
                    <span className="flex items-center gap-1">
                      <MdLocationSearching className="text-green-700 dark:text-green-600 text-xs" />
                      <h2 className="text-[10px] md:text-xs font-mono text-neutral-700 dark:text-neutral-400">
                        Onsite (Shastri Park New Delhi, Delhi)
                      </h2>
                    </span>
                    <span className="font-kanit font-medium md:text-lg text-[#111] dark:text-neutral-50">
                      Dr. Akhilesh Das Gupta Institute of Technology & Management
                    </span>
                    <span className="flex items-center gap-1 text-[#333] dark:text-neutral-300 font-kanit font-normal text-xs md:text-sm">
                      Electronics & Electrical Engineering{" "}
                      <LucideDot className="text-green-700 dark:text-green-600" />
                      <h2 className="text-green-700 dark:text-green-600">
                        Full-time
                      </h2>
                    </span>
                    <span className="text-xs font-mono text-neutral-500">
                      Batch Aug 2018 - Sep 2022
                    </span>
                  </div>
                </div>
  
                {/** description and tech stack */}
  
                <span className="flex flex-wrap gap-3 text-xs font-outfit px-3">
                  <h2 className="rounded-sm px-2 py-[2px] bg-neutral-600 dark:bg-zinc-300 text-white dark:text-black">
                    Power System
                  </h2>
                  <h2 className="rounded-sm px-2 py-[2px] bg-neutral-600 dark:bg-zinc-300 text-white dark:text-black">
                    IC's
                  </h2>
                  <h2 className="rounded-sm px-2 py-[2px] bg-neutral-600 dark:bg-zinc-300 text-white dark:text-black">
                    MATLAB
                  </h2>
                  <h2 className="rounded-sm px-2 py-[2px] bg-neutral-600 dark:bg-zinc-300 text-white dark:text-black">
                    Electrical Machines
                  </h2>
                  <h2 className="rounded-sm px-2 py-[2px] bg-neutral-600 dark:bg-zinc-300 text-white dark:text-black">
                    High Voltage
                  </h2>
                  <h2 className="rounded-sm px-2 py-[2px] bg-neutral-600 dark:bg-zinc-300 text-white dark:text-black">
                    AC & DC
                  </h2>
                </span>
  
                {/** points */}
                <ul className="list-disc font-inter text-xs px-4 text-justify">
                  <li>
                    Secured aggregate CGPA <strong>8.6</strong>
                  </li>
                  <li>
                  Majored in Electronics and Electrical Engineering.
                  </li>
                  <li>
                  Works with Integrated Circuits and Motors.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ),
      },
  ];

  return (
    <div className="w-full h-full max-w-4xl mx-auto px-2 md:px-0 space-y-12 md:space-y-20">
      <WorkTimeline data={data} />
    </div>
  )
}

export default Work