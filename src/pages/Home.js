import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div>
        <section className="text-gray-600 body-font dark:bg-gray-800 dark:text-white">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h3 className="text-2xl py-3 font-serif">Hello everyone, i am</h3>
              <h1 className="title-font sm:text-5xl text-4xl mb-4 font-taviraj">
                Sourav Dutta
              </h1>
              <p className="mb-8 leading-relaxed font-roboto_slob">
                I am a student of B.Tech in Computer Science and Engineering at
                Bankura Unnayani Institute of Engineering. I am a web developer.
                I am a self-motivated person and I love to learn new things.
              </p>
              <div className="flex justify-center">
                <a
                  href="https://drive.google.com/file/d/1rz8_coenp915JeXdJKiXLIVZ3OWhByS6/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="inline-flex font-roboto_slob font-bold text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    Resume
                  </button>
                </a>
                <Link to="/projects">
                  <button className="ml-4 font-roboto_slob font-bold inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                    Projects
                  </button>
                </Link>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-[407.8px] md:w-1/2 w-5/6">
              <img
                className="object-cover object-center rounded"
                alt="Sourav Dutta"
                src = {process.env.REACT_APP_PFP}
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
