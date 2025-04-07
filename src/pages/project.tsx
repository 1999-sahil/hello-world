import { ProjectTimeline } from "@/components/project/project-timeline";
import { FiHash } from "react-icons/fi";
import { TbArrowWaveRightDown } from "react-icons/tb";
import { Link } from "react-router-dom";

function Projects() {
  const data = [
    {
      title: "Year 2025",
      content: (
        <div>
          <p className="mb-8 font-openSans text-xs md:text-sm">
            Built and deploy an end-to-end application from scratch.
          </p>
          <div className="grid grid-cols-1 gap-5">
            {/** project-1 */}
            <div className="flex flex-col gap-3 rounded-xl p-4 bg-neutral-200/50 dark:bg-neutral-800/50">
              <span className="text-sm font-mono">Feb, 2025</span>
              <span className="text-xl font-poppins font-medium flex items-center gap-1">
                <FiHash className="text-purple-500 animate-bounce" />
                CodeFusion
              </span>
                <ul className="text-xs list-disc px-4 space-y-1 text-justify font-inter font-normal text-[#111] dark:text-neutral-200">
                  <li>
                    A SaaS blog platform that allows users to read content while
                    providing admins with full control over all posts through an
                    admin dashboard.
                  </li>
                  <li>
                    Implemented role-based access control, enabling admins to
                    manage posts, users, and premium subscriptions seamlessly.
                  </li>
                  <li>
                    Designed a centralized admin dashboard for performing CRUD
                    operations (Create, Read, Update, Delete) on blog posts and
                    managing user roles.
                  </li>
                  <li>
                    Integrated Stripe payment gateway for premium subscription
                    functionality, allowing premium members to access exclusive
                    content while restricting free users to limited access.
                  </li>
                </ul>
              <span className="flex flex-wrap gap-3 text-xs font-outfit px-2">
                <h2 className="rounded-sm px-2 py-[2px] bg-neutral-600 dark:bg-zinc-300 text-white dark:text-black">Next.js</h2>
                <h2 className="rounded-sm px-2 py-[2px] bg-neutral-600 dark:bg-zinc-300 text-white dark:text-black">Supabase</h2>
                <h2 className="rounded-sm px-2 py-[2px] bg-neutral-600 dark:bg-zinc-300 text-white dark:text-black">Stripe</h2>
                <h2 className="rounded-sm px-2 py-[2px] bg-neutral-600 dark:bg-zinc-300 text-white dark:text-black">Typescript</h2>
                <h2 className="rounded-sm px-2 py-[2px] bg-neutral-600 dark:bg-zinc-300 text-white dark:text-black">Tailwind CSS</h2>
                <h2 className="rounded-sm px-2 py-[2px] bg-neutral-600 dark:bg-zinc-300 text-white dark:text-black">Rehype Highlight</h2>
                <h2 className="rounded-sm px-2 py-[2px] bg-neutral-600 dark:bg-zinc-300 text-white dark:text-black">Markdown MDX</h2>
              </span>
              <span className="flex items-center justify-between mt-5">
              <Link to="https://codefusion-journals.vercel.app/" className="flex items-center gap-1 px-2 py-1 hover:bg-white dark:hover:bg-neutral-800 rounded-lg">
                <h2 className="font-mono font-medium text-xs md:text-sm">View</h2>
                <TbArrowWaveRightDown />
              </Link>
              <Link to="https://github.com/1999-sahil/code-fusion" className="flex items-center gap-1 px-2 py-1 hover:bg-white dark:hover:bg-neutral-800 rounded-lg">
                <h2 className="font-mono font-medium text-xs md:text-sm">Github</h2>
                <TbArrowWaveRightDown />
              </Link>
              </span>
            </div>

            {/** project-2 */}
            <div className="flex flex-col gap-3 rounded-xl p-4 bg-neutral-200 dark:bg-neutral-800/50">
              <span className="text-sm font-mono">Jan, 2025</span>
              <span className="text-xl font-poppins font-medium flex items-center gap-1">
                <FiHash className="text-orange-500 animate-bounce" />
                Codestash/ui
              </span>
                <ul className="text-xs list-disc px-4 space-y-1 text-justify font-inter font-normal text-[#111] dark:text-neutral-200">
                  <li>
                    Codestash/ui is a collection of free Tailwind CSS components that can be used 
                    in your next project. With a range of components, you can build your next 
                    marketing website, admin dashboard, eCommerce store and much more.
                  </li>
                  <li>
                    No installation required, No set-up required, No Configuration required. Just Copy 
                    the code and paste in your project. 
                  </li>
                  <li>
                    All pre-built UI components which are essential for your project.
                  </li>
                </ul>
              <span className="flex flex-wrap gap-3 text-xs font-outfit px-2">
                <h2 className="rounded-sm px-2 py-[2px] bg-neutral-600 dark:bg-zinc-300 text-white dark:text-black">React.js</h2>
                <h2 className="rounded-sm px-2 py-[2px] bg-neutral-600 dark:bg-zinc-300 text-white dark:text-black">MongoDB</h2>
                <h2 className="rounded-sm px-2 py-[2px] bg-neutral-600 dark:bg-zinc-300 text-white dark:text-black">Redux</h2>
                <h2 className="rounded-sm px-2 py-[2px] bg-neutral-600 dark:bg-zinc-300 text-white dark:text-black">Firabase</h2>
                <h2 className="rounded-sm px-2 py-[2px] bg-neutral-600 dark:bg-zinc-300 text-white dark:text-black">JSON Web Token</h2>
                <h2 className="rounded-sm px-2 py-[2px] bg-neutral-600 dark:bg-zinc-300 text-white dark:text-black">Express.js</h2>
                <h2 className="rounded-sm px-2 py-[2px] bg-neutral-600 dark:bg-zinc-300 text-white dark:text-black">Node.js</h2>
                <h2 className="rounded-sm px-2 py-[2px] bg-neutral-600 dark:bg-zinc-300 text-white dark:text-black">Tailwind CSS</h2>
              </span>
              <span className="flex items-center justify-between mt-5">
              <Link to="https://github.com/1999-sahil/codestash-ui-code-collection" className="flex items-center gap-1 px-2 py-1 hover:bg-white dark:hover:bg-neutral-800 rounded-lg">
                <h2 className="font-mono font-medium text-xs md:text-sm">View</h2>
                <TbArrowWaveRightDown />
              </Link>
              <Link to="https://github.com/1999-sahil/codestash-ui-code-collection" className="flex items-center gap-1 px-2 py-1 hover:bg-white dark:hover:bg-neutral-800 rounded-lg">
                <h2 className="font-mono font-medium text-xs md:text-sm">Github</h2>
                <TbArrowWaveRightDown />
              </Link>
              </span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Year 2024",
      content: (
        <div>
          <p className="mb-8 font-openSans text-xs md:text-sm">
            Year 2024 is full of learning and expansion of my horizon. You can see my projects here.
          </p>
          
          <div className="grid grid-cols-1 gap-5">
            {/** project-3 */}
            <div className="flex flex-col gap-3 rounded-xl p-4 bg-neutral-200 dark:bg-neutral-800/50">
              <span className="text-sm font-mono">Nov, 2024</span>
              <span className="text-xl font-poppins font-medium flex items-center gap-1">
                <FiHash className="text-green-500 animate-bounce" />
                Strife - A Fullstack Messaging App
              </span>
                <ul className="text-xs list-disc px-4 space-y-1 text-justify font-inter font-normal text-[#111] dark:text-neutral-200">
                  <li>
                    A full-stack, real-time communication platform inspired by Strife, featuring servers, channels, video/audio
                    calls, and role-based member management.
                  </li>
                  <li>
                    Enabled real-time messaging with support for editing, deleting, and sharing images files. 
                  </li>
                  <li>
                    Implemented 1:1 conversations, group chats, and server creation with text, audio, and video channels.
                  </li>
                  <li>
                    Designed role-based access control for members (Admin, Moderator, Guest) with features like kicking
                    members, inviting new members, and managing permissions.
                  </li>
                  <li>
                    Integrated infinite loading for seamless message history browsing.
                  </li>
                </ul>
              <span className="flex flex-wrap gap-3 text-xs font-outfit px-2">
                <h2 className="rounded-sm px-2 py-[2px] bg-neutral-600 dark:bg-zinc-300 text-white dark:text-black">Next.js</h2>
                <h2 className="rounded-sm px-2 py-[2px] bg-neutral-600 dark:bg-zinc-300 text-white dark:text-black">MySql</h2>
                <h2 className="rounded-sm px-2 py-[2px] bg-neutral-600 dark:bg-zinc-300 text-white dark:text-black">Zustand</h2>
                <h2 className="rounded-sm px-2 py-[2px] bg-neutral-600 dark:bg-zinc-300 text-white dark:text-black">Prisma</h2>
                <h2 className="rounded-sm px-2 py-[2px] bg-neutral-600 dark:bg-zinc-300 text-white dark:text-black">Socket.io</h2>
                <h2 className="rounded-sm px-2 py-[2px] bg-neutral-600 dark:bg-zinc-300 text-white dark:text-black">LiveKit</h2>
                <h2 className="rounded-sm px-2 py-[2px] bg-neutral-600 dark:bg-zinc-300 text-white dark:text-black">tiDB Cloud</h2>
                <h2 className="rounded-sm px-2 py-[2px] bg-neutral-600 dark:bg-zinc-300 text-white dark:text-black">Tailwind CSS</h2>
              </span>
              <span className="flex items-center justify-between mt-5">
              <Link to="https://66b2418c622d020859e58536--strife-platform.netlify.app/" className="flex items-center gap-1 px-2 py-1 hover:bg-white dark:hover:bg-neutral-800 rounded-lg">
                <h2 className="font-mono font-medium text-xs md:text-sm">View</h2>
                <TbArrowWaveRightDown />
              </Link>
              <Link to="https://github.com/1999-sahil/strife-platform-repo" className="flex items-center gap-1 px-2 py-1 hover:bg-white dark:hover:bg-neutral-800 rounded-lg">
                <h2 className="font-mono font-medium text-xs md:text-sm">Github</h2>
                <TbArrowWaveRightDown />
              </Link>
              </span>
            </div>

            {/** project-4 */}
            <div className="flex flex-col gap-3 rounded-xl p-4 bg-neutral-200 dark:bg-neutral-800/50">
              <span className="text-sm font-mono">Oct, 2024</span>
              <span className="text-xl font-poppins font-medium flex items-center gap-1">
                <FiHash className="text-purple-500 animate-bounce" />
                Notecraft - A digital note-taking app
              </span>
                <ul className="text-xs list-disc px-4 space-y-1 text-justify font-inter font-normal text-[#111] dark:text-neutral-200">
                  <li>
                    A freemium productivity and note-taking web application with folder-based organization and a rich text
editor.
                  </li>
                  <li>
                    Integrated a block-based editor supporting features like image uploads, text decoration, color pickers, head-
ings, and subheadings.
                  </li>
                  <li>
                    Implemented real-time database synchronization for seamless note updates across devices.
                  </li>
                  <li>
                    Designed light and dark mode for enhanced user experience.
                  </li>
                  <li>
                    Enabled infinite nested documents for flexible note organization.
                  </li>
                </ul>
              <span className="flex flex-wrap gap-3 text-xs font-outfit px-2">
                <h2 className="rounded-sm px-2 py-[2px] bg-neutral-600 dark:bg-zinc-300 text-white dark:text-black">Next.js</h2>
                <h2 className="rounded-sm px-2 py-[2px] bg-neutral-600 dark:bg-zinc-300 text-white dark:text-black">Shadcn/ui</h2>
                <h2 className="rounded-sm px-2 py-[2px] bg-neutral-600 dark:bg-zinc-300 text-white dark:text-black">Zustand</h2>
                <h2 className="rounded-sm px-2 py-[2px] bg-neutral-600 dark:bg-zinc-300 text-white dark:text-black">Convex</h2>
                <h2 className="rounded-sm px-2 py-[2px] bg-neutral-600 dark:bg-zinc-300 text-white dark:text-black">Clerk</h2>
                <h2 className="rounded-sm px-2 py-[2px] bg-neutral-600 dark:bg-zinc-300 text-white dark:text-black">EdgeStore</h2>
                <h2 className="rounded-sm px-2 py-[2px] bg-neutral-600 dark:bg-zinc-300 text-white dark:text-black">Block Note</h2>
                <h2 className="rounded-sm px-2 py-[2px] bg-neutral-600 dark:bg-zinc-300 text-white dark:text-black">Tailwind CSS</h2>
              </span>
              <span className="flex items-center justify-between mt-5">
              <Link to="https://notecraft-digital-notes-d1b2id7dg-1999-sahil.vercel.app/" className="flex items-center gap-1 px-2 py-1 hover:bg-white dark:hover:bg-neutral-800 rounded-lg">
                <h2 className="font-mono font-medium text-xs md:text-sm">View</h2>
                <TbArrowWaveRightDown />
              </Link>
              <Link to="https://github.com/1999-sahil/notecraft-nextjs" className="flex items-center gap-1 px-2 py-1 hover:bg-white dark:hover:bg-neutral-800 rounded-lg">
                <h2 className="font-mono font-medium text-xs md:text-sm">Github</h2>
                <TbArrowWaveRightDown />
              </Link>
              </span>
            </div>

            {/** project-5 */}
            <div className="flex flex-col gap-3 rounded-xl p-4 bg-neutral-200 dark:bg-neutral-800/50">
              <span className="text-sm font-mono">Aug, 2024</span>
              <span className="text-xl font-poppins font-medium flex items-center gap-1">
                <FiHash className="text-blue-500 animate-bounce" />
                Code-X: A realtime code editor
              </span>
                <ul className="text-xs list-disc px-4 space-y-1 text-justify font-inter font-normal text-[#111] dark:text-neutral-200">
                  <li>
                    A real time Integrated Development Environment which consists both code editor and web editor.
                  </li>
                  <li>
                    Code editor consists 15+ language support.
                  </li>
                  <li>
                    Web editor supports HTML markup, CSS styling and Javascript language for your development.
                  </li>
                  <li>
                    Room's option where you can peer programming with friends.
                  </li>
                  <li>
                    You can compile your code and get the output with Judge0 Rapid API
                  </li>
                </ul>
              <span className="flex flex-wrap gap-3 text-xs font-outfit px-2">
                <h2 className="rounded-sm px-2 py-[2px] bg-neutral-600 dark:bg-zinc-300 text-white dark:text-black">React.js</h2>
                <h2 className="rounded-sm px-2 py-[2px] bg-neutral-600 dark:bg-zinc-300 text-white dark:text-black">Vite</h2>
                <h2 className="rounded-sm px-2 py-[2px] bg-neutral-600 dark:bg-zinc-300 text-white dark:text-black">Express.js</h2>
                <h2 className="rounded-sm px-2 py-[2px] bg-neutral-600 dark:bg-zinc-300 text-white dark:text-black">Node.js</h2>
                <h2 className="rounded-sm px-2 py-[2px] bg-neutral-600 dark:bg-zinc-300 text-white dark:text-black">Judge0 API</h2>
                <h2 className="rounded-sm px-2 py-[2px] bg-neutral-600 dark:bg-zinc-300 text-white dark:text-black">UUID</h2>
                <h2 className="rounded-sm px-2 py-[2px] bg-neutral-600 dark:bg-zinc-300 text-white dark:text-black">Monaco Editor</h2>
                <h2 className="rounded-sm px-2 py-[2px] bg-neutral-600 dark:bg-zinc-300 text-white dark:text-black">Socket.io</h2>
              </span>
              <span className="flex items-center justify-between mt-5">
              <Link to="https://code-x-code-editor.vercel.app/" className="flex items-center gap-1 px-2 py-1 hover:bg-white dark:hover:bg-neutral-800 rounded-lg">
                <h2 className="font-mono font-medium text-xs md:text-sm">View</h2>
                <TbArrowWaveRightDown />
              </Link>
              <Link to="https://github.com/1999-sahil/code-x-code-editor" className="flex items-center gap-1 px-2 py-1 hover:bg-white dark:hover:bg-neutral-800 rounded-lg">
                <h2 className="font-mono font-medium text-xs md:text-sm">Github</h2>
                <TbArrowWaveRightDown />
              </Link>
              </span>
            </div>

            {/** project-5 */}
            <div className="flex flex-col gap-3 rounded-xl p-4 bg-neutral-200 dark:bg-neutral-800/50">
              <span className="text-sm font-mono">Jun, 2024</span>
              <span className="text-xl font-poppins font-medium flex items-center gap-1">
                <FiHash className="text-[#5C7285] animate-bounce" />
                Devlab - Framer Motion Portfolio
              </span>
                <ul className="text-xs list-disc px-4 space-y-1 text-justify font-inter font-normal text-[#111] dark:text-neutral-200">
                  <li>
                    A portfolio using NExt.js alog with animations using framer-motion.
                  </li>
                  <li>
                    Beautiful design and animations you can see.
                  </li>
                </ul>
              <span className="flex flex-wrap gap-3 text-xs font-outfit px-2">
                <h2 className="rounded-sm px-2 py-[2px] bg-neutral-600 dark:bg-zinc-300 text-white dark:text-black">Next.js</h2>
                <h2 className="rounded-sm px-2 py-[2px] bg-neutral-600 dark:bg-zinc-300 text-white dark:text-black">Tailwind CSS</h2>
                <h2 className="rounded-sm px-2 py-[2px] bg-neutral-600 dark:bg-zinc-300 text-white dark:text-black">Framer Motion</h2>
                <h2 className="rounded-sm px-2 py-[2px] bg-neutral-600 dark:bg-zinc-300 text-white dark:text-black">React Icons</h2>
                <h2 className="rounded-sm px-2 py-[2px] bg-neutral-600 dark:bg-zinc-300 text-white dark:text-black">Color Palette</h2>
              </span>
              <span className="flex items-center justify-between mt-5">
              <Link to="" className="flex items-center gap-1 px-2 py-1 hover:bg-white dark:hover:bg-neutral-800 rounded-lg">
                <h2 className="font-mono font-medium text-xs md:text-sm">View</h2>
                <TbArrowWaveRightDown />
              </Link>
              <Link to="" className="flex items-center gap-1 px-2 py-1 hover:bg-white dark:hover:bg-neutral-800 rounded-lg">
                <h2 className="font-mono font-medium text-xs md:text-sm">Github</h2>
                <TbArrowWaveRightDown />
              </Link>
              </span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Year 2023",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Build 3 Full-stack applications from scratch.
          </p>
          <div className="grid grid-cols-1 gap-5">
            {/** project-6 */}
            <div className="flex flex-col gap-3 rounded-xl p-4 bg-neutral-200 dark:bg-neutral-800/50">
              <span className="text-sm font-mono">Oct, 2023</span>
              <span className="text-xl font-poppins font-medium flex items-center gap-1">
                <FiHash className="text-red-500 animate-bounce" />
                Diagram Docs
              </span>
                <ul className="text-xs list-disc px-4 space-y-1 text-justify font-inter font-normal text-[#111] dark:text-neutral-200">
                  <li>
                    A full stack application, DiagramDocs provides docs and diagrams platform for engineering teams.
                  </li>
                  <li>
                    DiagramDocs enables developers to create docs and diagrams at the speed of thought via a minimal UI, keyboard-driven flows, markdown, and diagram-as-code.
                  </li>
                  <li>
                    Real time database connection.
                  </li>
                </ul>
              <span className="flex flex-wrap gap-3 text-xs font-outfit px-2">
                <h2 className="rounded-sm px-2 py-[2px] bg-neutral-600 dark:bg-zinc-300 text-white dark:text-black">Next.js</h2>
                <h2 className="rounded-sm px-2 py-[2px] bg-neutral-600 dark:bg-zinc-300 text-white dark:text-black">Convex</h2>
                <h2 className="rounded-sm px-2 py-[2px] bg-neutral-600 dark:bg-zinc-300 text-white dark:text-black">Typescript</h2>
                <h2 className="rounded-sm px-2 py-[2px] bg-neutral-600 dark:bg-zinc-300 text-white dark:text-black">Kinde Auth</h2>
                <h2 className="rounded-sm px-2 py-[2px] bg-neutral-600 dark:bg-zinc-300 text-white dark:text-black">Editor.js</h2>
                <h2 className="rounded-sm px-2 py-[2px] bg-neutral-600 dark:bg-zinc-300 text-white dark:text-black">Excalidraw</h2>
                <h2 className="rounded-sm px-2 py-[2px] bg-neutral-600 dark:bg-zinc-300 text-white dark:text-black">Shadcn-ui</h2>
                <h2 className="rounded-sm px-2 py-[2px] bg-neutral-600 dark:bg-zinc-300 text-white dark:text-black">Tailwind CSS</h2>
              </span>
              <span className="flex items-center justify-between mt-5">
              <Link to="" className="flex items-center gap-1 px-2 py-1 hover:bg-white dark:hover:bg-neutral-800 rounded-lg">
                <h2 className="font-mono font-medium text-xs md:text-sm">View</h2>
                <TbArrowWaveRightDown />
              </Link>
              <Link to="" className="flex items-center gap-1 px-2 py-1 hover:bg-white dark:hover:bg-neutral-800 rounded-lg">
                <h2 className="font-mono font-medium text-xs md:text-sm">Github</h2>
                <TbArrowWaveRightDown />
              </Link>
              </span>
            </div>

            {/** project-7 */}
            <div className="flex flex-col gap-3 rounded-xl p-4 bg-neutral-200 dark:bg-neutral-800/50">
              <span className="text-sm font-mono">Aug, 2023</span>
              <span className="text-xl font-poppins font-medium flex items-center gap-1">
                <FiHash className="text-[#B03052] animate-bounce" />
                GeekGazette - (Dribble Clone)
              </span>
                <ul className="text-xs list-disc px-4 space-y-1 text-justify font-inter font-normal text-[#111] dark:text-neutral-200">
                  <li>
                    Dribbble is where designers gain inspiration, feedback, community, and jobs and is your best resource to discover and connect with designers worldwide.
                  </li>
                  <li>
                   GeekGazette offers the same functionality with ease.
                  </li>
                </ul>
              <span className="flex flex-wrap gap-3 text-xs font-outfit px-2">
                <h2 className="rounded-sm px-2 py-[2px] bg-neutral-600 dark:bg-zinc-300 text-white dark:text-black">Next.js</h2>
                <h2 className="rounded-sm px-2 py-[2px] bg-neutral-600 dark:bg-zinc-300 text-white dark:text-black">Grafbase</h2>
                <h2 className="rounded-sm px-2 py-[2px] bg-neutral-600 dark:bg-zinc-300 text-white dark:text-black">Typescript</h2>
                <h2 className="rounded-sm px-2 py-[2px] bg-neutral-600 dark:bg-zinc-300 text-white dark:text-black">Next-Auth</h2>
                <h2 className="rounded-sm px-2 py-[2px] bg-neutral-600 dark:bg-zinc-300 text-white dark:text-black">Cloudinary</h2>
                <h2 className="rounded-sm px-2 py-[2px] bg-neutral-600 dark:bg-zinc-300 text-white dark:text-black">JSON Web Token</h2>
                <h2 className="rounded-sm px-2 py-[2px] bg-neutral-600 dark:bg-zinc-300 text-white dark:text-black">Tailwind CSS</h2>
              </span>
              <span className="flex items-center justify-between mt-5">
              <Link to="" className="flex items-center gap-1 px-2 py-1 hover:bg-white dark:hover:bg-neutral-800 rounded-lg">
                <h2 className="font-mono font-medium text-xs md:text-sm">View</h2>
                <TbArrowWaveRightDown />
              </Link>
              <Link to="" className="flex items-center gap-1 px-2 py-1 hover:bg-white dark:hover:bg-neutral-800 rounded-lg">
                <h2 className="font-mono font-medium text-xs md:text-sm">Github</h2>
                <TbArrowWaveRightDown />
              </Link>
              </span>
            </div>

            {/** project-8 */}
            <div className="flex flex-col gap-3 rounded-xl p-4 bg-neutral-200 dark:bg-neutral-800/50">
              <span className="text-sm font-mono">May, 2023</span>
              <span className="text-xl font-poppins font-medium flex items-center gap-1">
                <FiHash className="text-[#80CBC4] animate-bounce" />
                Real time Weather Application
              </span>
                <ul className="text-xs list-disc px-4 space-y-1 text-justify font-inter font-normal text-[#111] dark:text-neutral-200">
                  <li>
                    Build a real time Weather App using API which shows all the essentials related to weather.
                  </li>
                  <li>
                   Getting and implemented real-time data from OpenWeatherAPI
                  </li>
                </ul>
              <span className="flex flex-wrap gap-3 text-xs font-outfit px-2">
                <h2 className="rounded-sm px-2 py-[2px] bg-neutral-600 dark:bg-zinc-300 text-white dark:text-black">React.js</h2>
                <h2 className="rounded-sm px-2 py-[2px] bg-neutral-600 dark:bg-zinc-300 text-white dark:text-black">React Leaflet</h2>
                <h2 className="rounded-sm px-2 py-[2px] bg-neutral-600 dark:bg-zinc-300 text-white dark:text-black">Typescript</h2>
                <h2 className="rounded-sm px-2 py-[2px] bg-neutral-600 dark:bg-zinc-300 text-white dark:text-black">Moment</h2>
                <h2 className="rounded-sm px-2 py-[2px] bg-neutral-600 dark:bg-zinc-300 text-white dark:text-black">Next Themes</h2>
                <h2 className="rounded-sm px-2 py-[2px] bg-neutral-600 dark:bg-zinc-300 text-white dark:text-black">Lodash</h2>
                <h2 className="rounded-sm px-2 py-[2px] bg-neutral-600 dark:bg-zinc-300 text-white dark:text-black">Embla Carousal</h2>
              </span>
              <span className="flex items-center justify-between mt-5">
              <Link to="" className="flex items-center gap-1 px-2 py-1 hover:bg-white dark:hover:bg-neutral-800 rounded-lg">
                <h2 className="font-mono font-medium text-xs md:text-sm">View</h2>
                <TbArrowWaveRightDown />
              </Link>
              <Link to="" className="flex items-center gap-1 px-2 py-1 hover:bg-white dark:hover:bg-neutral-800 rounded-lg">
                <h2 className="font-mono font-medium text-xs md:text-sm">Github</h2>
                <TbArrowWaveRightDown />
              </Link>
              </span>
            </div>
          </div>
          
        </div>
      ),
    },
  ];

  return (
    <div className="w-full h-full max-w-4xl mx-auto px-2 md:px-0 space-y-12 md:space-y-20">
      <ProjectTimeline data={data} />
    </div>
  )
}

export default Projects