import Banner from "@/components/home/banner";
import Project from "@/components/project/project";
import Skills from "@/components/skills/skills";
import WorkProcess from "@/components/work/process";

function Home() {
  return (
    <section className="space-y-12 md:space-y-20">
      <Banner />
      <div className="w-full h-full max-w-4xl mx-auto px-2 md:px-0 space-y-12 md:space-y-20">
        <Skills />
        <Project />
        <WorkProcess />
      </div>
    </section>
  );
}

export default Home;
