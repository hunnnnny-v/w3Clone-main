import {
  phpleftsidebaritems1,
  phpleftsidebaritems2,
  phpleftsidebaritems3,
  phpreferences,
} from "../../constants";

import image from "../../images/job.png";

const PHPPage = () => {
  return (
    <main className="flex bg-[#E6E9EA] dark:bg-[#15212A] ">
      <span className="w-[20%] bg-[#E6E9EA] h-[3010px] text-black flex flex-col gap-y-2 pt-6 items-start overflow-auto scrollbar scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 dark:bg-[#15212A] dark:text-white">
        <h1 className="text-[21px] ml-4 mb-3">PHP TUTORIAL</h1>
        <div>
          {phpleftsidebaritems1.map((item, i) => (
            <h1
              key={i}
              className={`ml-4 cursor-pointer ${
                i == 0 ? "bg-[#05AB6D] p-0.5 rounded-md w-full text-white" : ""
              } hover:bg-[#C0C1C0] p-0.5 rounded-md w-full`}
            >
              {item}
            </h1>
          ))}
        </div>
        <h1 className="text-[21px] ml-4 mb-3">PHP Forms</h1>
        <div>
          {phpleftsidebaritems2.map((item, i) => (
            <h1 key={i} className="ml-4 cursor-pointer">
              {item}
            </h1>
          ))}
        </div>
        <h1 className="text-[21px] ml-4 mb-3">PHP References</h1>
        <div>
          {phpleftsidebaritems3.map((item, i) => (
            <h1 key={i} className="ml-4 cursor-pointer">
              {item}
            </h1>
          ))}
        </div>
      </span>

      <main className="bg-white w-full h-auto text-black dark:bg-[#1D2B34] dark:text-white pl-8  pr-8">
        <div className="mt-28">
          <h1 className="text-[40px] z-10 top-0 right-0 mb-5">PHP Tutorial</h1>
          <div className="flex justify-between">
            <button className="bg-[#05AB6D] p-2 rounded-md w-[100px] text-white">
              {" "}
              &lt; Home
            </button>
            <button className="bg-[#05AB6D] p-2 rounded-md w-[100px] text-white">
              Next &gt;{" "}
            </button>
          </div>
        </div>
        <div className="w-full bg-[#D8EFE1] mt-8 h-auto pt-10 pl-3 dark:bg-[#183D3C] mb-10">
          <div className="flex flex-col gap-y-5">
            <p>
              PHP (Hypertext Preprocessor) is a widely-used open-source
              scripting language{" "}
            </p>
            <p>
              PHP has a number of built-in features and functions to help
              developers write secure code.
            </p>
            <p>PHP has extensive support for interacting with databases</p>
            <button className="bg-[#05AB6D] p-1 w-[30%] rounded-md text-white">
              Study our free PHP course &gt;&gt;
            </button>
            <button className="bg-black p-1 w-[30%] rounded-md mb-4 text-white">
              Watch our Video Tutorial
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start gap-y-4">
          <h1 className="text-[40px]">
            Easy Learning with PHP &quot;Try it Yourself&quot;
          </h1>
          <p>
            With our &quot;Try it Yourself&quot; editor, you can edit the PHP
            code and view the result:
          </p>
        </div>

        <div className="h-auto bg-[#E6E8EB] dark:bg-[#38444D] p-5 xl:w-auto sm:w-full rounded-lg mt-6">
          <h1 className="font-bold mt-8 text-[24px] mb-4 dark:text-white">
            PHP Example :{" "}
          </h1>
          <div className="bg-white dark:bg-[#14202A] h-[350px] w-auto rounded-xl p-5">
            <div className="ml-4 p-0.5">
              <span className="text-[#4A19CC] dark:text-[#88CCBB]">&lt;</span>
              <span className="text-[#B82A2B] dark:text-[#FF9898]">
                !DOCTYPE
              </span>
              <span className="text-[#FE5400] "> html</span>
              <span className="text-[#4A19CC] dark:text-[#88CCBB]">&gt;</span>
            </div>
            <div className="ml-4 p-0.5">
              <span className="text-[#4A19CC] dark:text-[#88CCBB]">&lt;</span>
              <span className="text-[#B82A2B] dark:text-[#FF9898]">html</span>
              <span className="text-[#4A19CC] dark:text-[#88CCBB]">&gt;</span>
            </div>
            <div className="ml-4 p-0.5">
              <span className="text-[#4A19CC] dark:text-[#88CCBB]">&lt;</span>
              <span className="text-[#B82A2B] dark:text-[#FF9898]">head</span>
              <span className="text-[#4A19CC] dark:text-[#88CCBB]">&gt;</span>
            </div>
            <div className="ml-4 p-0.5 ">
              <span className="text-[#4A19CC] dark:text-[#88CCBB]">&lt;</span>
              <span className="text-[#B82A2B] dark:text-[#FF9898]">title</span>
              <span className="text-[#4A19CC] dark:text-[#88CCBB]">&gt;</span>
              <span className="dark:text-white">HTML Tutorial</span>
              <span className="text-[#4A19CC] dark:text-[#88CCBB]">&lt;</span>
              <span className="text-[#B82A2B] dark:text-[#FF9898]">
                &#47;title
              </span>
              <span className="text-[#4A19CC] dark:text-[#88CCBB]">&gt;</span>
            </div>
            <div className="ml-4 p-0.5">
              <span className="text-[#4A19CC] dark:text-[#88CCBB]">&lt;</span>
              <span className="text-[#B82A2B] dark:text-[#FF9898]">
                &#47;head
              </span>
              <span className="text-[#4A19CC] dark:text-[#88CCBB]">&gt;</span>
            </div>
            <div className="ml-4 p-0.5 mb-4">
              <span className="text-[#4A19CC] dark:text-[#88CCBB]">&lt;</span>
              <span className="text-[#B82A2B] dark:text-[#FF9898]">body</span>
              <span className="text-[#4A19CC] dark:text-[#88CCBB]">&gt;</span>
            </div>
            <div className="ml-4 p-0.5 ">
              <span className="text-[#4A19CC] dark:text-[#88CCBB]">&lt;</span>
              <span className="text-[#B82A2B] dark:text-[#FF9898]">h1</span>
              <span className="text-[#4A19CC] dark:text-[#88CCBB]">&gt;</span>
              <span className="dark:text-white">This is a heading</span>
              <span className="text-[#4A19CC] dark:text-[#88CCBB]">&lt;</span>
              <span className="text-[#B82A2B] dark:text-[#FF9898]">
                &#47;h1
              </span>
              <span className="text-[#4A19CC] dark:text-[#88CCBB]">&gt;</span>
            </div>
            <div className="ml-4 p-0.5 mb-4">
              <span className="text-[#4A19CC] dark:text-[#88CCBB]">&lt;</span>
              <span className="text-[#B82A2B] dark:text-[#FF9898]">p</span>
              <span className="text-[#4A19CC] dark:text-[#88CCBB]">&gt;</span>
              <span className="dark:text-white">This is a paragraph</span>
              <span className="text-[#4A19CC] dark:text-[#88CCBB]">&lt;</span>
              <span className="text-[#B82A2B] dark:text-[#FF9898]">&#47;p</span>
              <span className="text-[#4A19CC] dark:text-[#88CCBB]">&gt;</span>
            </div>
            <div className="ml-4 p-0.5">
              <span className="text-[#4A19CC] dark:text-[#88CCBB]">&lt;</span>
              <span className="text-[#B82A2B] dark:text-[#FF9898]">
                &#47;body
              </span>
              <span className="text-[#4A19CC] dark:text-[#88CCBB]">&gt;</span>
            </div>
            <div className="ml-4 p-0.5">
              <span className="text-[#4A19CC] dark:text-[#88CCBB]">&lt;</span>
              <span className="text-[#B82A2B] dark:text-[#FF9898]">
                &#47;html
              </span>
              <span className="text-[#4A19CC] dark:text-[#88CCBB]">&gt;</span>
            </div>
          </div>
          <button className="bg-[#05AB6D] text-white p-2 mt-4 w-full rounded-3xl">
            Try It Yourself
          </button>
        </div>
        <h1 className="mt-4 font-bold text-[21px]">
          Click on the &quot;Try it Yourself&quot; button to see how it works.
        </h1>
        <hr className="border mt-4" />

        <div className="mt-6 mb-7">
          <h1 className="text-[40px]">PHP Exercises</h1>
          <p>This PHP tutorial also contains nearly 100 HTML exercises.</p>
        </div>

        <div className="h-auto w-auto bg-[#292A34] dark:bg-[#38444D] p-6">
          <h1 className="text-[40px] text-white">
            Test Yourself With Exercises
          </h1>
          <div className="h-auto w-auto bg-white dark:bg-[#15212A] p-6 flex flex-col gap-y-6">
            <h1 className="text-[30px]">Exercise:</h1>
            <p className="text-[18px]">
              Add a &quot;tooltip&quot; to the paragraph below with the text
              &quot;About W3Schools&quot;.
            </p>
            <div className="w-auto h-auto bg-[#E6E9EA] dark:bg-[#38444D] p-3">
              <h1>
                &lt;p <input type="text" className="bg-white" /> =&quot;About
                W3Schools&quot;&gt;W3Schools is a web developer&apos;s site
                &lt;&#47;p&gt;
              </h1>
            </div>
            <button className="bg-[#05AB6D] p-1 w-[30%] rounded-md text-white">
              Submit Answer
            </button>
          </div>
        </div>
        <hr className="border mt-4" />
        <div className="flex flex-col gap-y-3">
          <h1 className="text-[40px]">PHP Quiz Test</h1>
          <p>Test your PHP skills with our PHP Quiz!</p>
          <button className="bg-[#2096F2] p-1 w-[30%] rounded-md text-white">
            Start PHP Quiz
          </button>
        </div>
        <hr className="border mt-4" />

        <div className="flex flex-col gap-y-4">
          <h1 className="text-[40px]">My Learning</h1>
          <p className="text-[18px]">
            Track your progress with the free &quot;My Learning&quot; program
            here at W3Schools.
          </p>
          <p className="text-[18px]">
            Log in to your account, and start earning points!
          </p>
          <p className="text-[18px]">
            This is an optional feature. You can study W3Schools without using
            My Learning.
          </p>
          <div
            className="text-black  w-[990px] h-[440px] bg-cover p-4 mb-4"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        </div>
        <hr className="border mt-4" />

        <div className="flex flex-col gap-y-4">
          <div className="flex flex-col">
            <h1 className="text-[40px]">PHP References</h1>
            <p className="text-[18px]">
              At W3Schools you will find complete references about PHP elements,
              attributes, events, color names, entities, character-sets, URL
              encoding, language codes, HTTP messages, browser support, and
              more:
            </p>
          </div>
          <div className="grid grid-cols-3 gap-y-4 gap-x-4 mb-10">
            {phpreferences.map((item, i) => (
              <div
                key={i}
                className="w-full bg-[#E6E9EA] flex justify-center items-center p-6 rounded-md hover:bg-black hover:text-white cursor-pointer
                  dark:bg-[#38444D] dark:hover:bg-black dark:hover:text-white"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-start justify-start bg-[#292A34] h-auto w-auto p-10 gap-y-12 text-white dark:bg-[#0C1720] mb-20">
          <h1 className="text-[62px] text-[#FEC0C6] font-bold">
            Kickstart your career
          </h1>
          <h1 className="text-[62px] text-[#FEC0C6] ">
            Get certified by completing a course
          </h1>
          <button className="bg-[#049863] p-4 rounded-3xl ">Get Started</button>
        </div>

        <div className="flex justify-between items-center mt-6 mb-6">
          <button className="bg-[#05AB6D] p-3 w-[20%] rounded-md text-white">
            Home
          </button>{" "}
          <button className="border p-3 w-[20%] rounded-md text-black font-semibold dark:text-white">
            Login to track progress
          </button>{" "}
          <button className="bg-[#05AB6D] p-3 w-[20%] rounded-md text-white">
            Next
          </button>
        </div>
        <hr className="border mt-4 mb-28" />
      </main>
    </main>
  );
};

export default PHPPage;
