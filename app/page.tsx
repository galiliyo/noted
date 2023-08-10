import React from "react";
import Feed from "@/components/Feed";

interface Props {}
function Home(props: Props) {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className={"head_text text-center "}>
        Share Notes
        <br className={"max-md:hidden"} />
        <span className={"orange_gradient "}>With Everyone</span>
      </h1>
      <p className={"desc text-center"}>
        Connecting you effortlessly with friends through words. Share thoughts,
        ideas, and memories with ease. Collaborate on projects or simply stay in
        sync.
      </p>
      <Feed />
    </section>
  );
}

export default Home;
