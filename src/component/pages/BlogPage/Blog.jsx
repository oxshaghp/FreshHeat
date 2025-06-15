import { useParams } from "react-router-dom";
import useAppContext from "../../context/useAppContext";
import { FaFacebook, FaLinkedin, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import Hero from "../../static/Hero";

function Blog() {
  const { id } = useParams();
  const { blogs } = useAppContext();

  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) return <div>Blog not found.</div>;

  return (
    <section className="bg-[#F4F1EA]">
      <Hero
        title={"Blog Description"}
        left={"Home"}
        right={"Blog Description"}
      />
      <div className="flex flex-col lg:flex-row justify-center gap-20 my-20 w-[80%] mx-auto ">
        <div className="p-10  ">
          <img
            src="../Blogs/blogThumb3_1.jpg"
            alt={blog.title}
            className="mb-5 w-full max-w-[600px] border-b border-[#777] pb-3"
          />
          <h1 className="text-4xl font-bold mb-5 capitalize">{blog.title}</h1>

          <p className="text-[var(--text)] mb-3">
            Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
            labore et dolore of magna aliqua. Ut enim ad minim veniam, made of
            owl the quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea dolor commodo consequat. Duis aute irure and dolor in
            reprehenderit.
          </p>
          <p className="text-[var(--text)] mb-3">
            The is ipsum dolor sit amet consectetur adipiscing elit. Fusce
            eleifend porta arcu In hac habitasse the is platea augue thelorem
            turpoi dictumst. In lacus libero faucibus at malesuada sagittis
            placerat eros sed istincidunt augue ac ante rutrum sed the is
            sodales augue consequat.
          </p>
          <p className="text-[var(--text)] mb-3">
            Nulla facilisi. Vestibulum tristique sem in eros eleifend imperdiet.
            Donec quis convallis neque. In id lacus pulvinar lacus, eget
            vulputate lectus. Ut viverra bibendum lorem, at tempus nibh mattis
            in. Sed a massa eget lacus consequat auctor.
          </p>
          <p className="text-[var(--text)] mb-3">
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
            vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor
            ornare leo, non suscipit magna interdum eu. Curabitur pellentesque
            nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo
            lacus at sodales sodales. Quisque sagittis orci ut diam condimentum,
            vel euismod erat placerat. In iaculis arcu eros.
          </p>

          <div className="flex flex-col lg:flex-row gap-5 my-10">
            <img
              src="../Blogs/blogThumb3_2.jpg"
              alt=""
              loading="lazy"
              className="rounded-2xl border w-[350px] h-[250px]"
            />
            <img
              src="../Blogs/blogThumb3_3.jpg"
              alt=""
              loading="lazy"
              className="rounded-2xl border w-[350px] h-[250px]"
            />
          </div>

          <p className="text-[var(--text)] mb-3">
            Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
            labore et dolore of magna aliqua. Ut enim ad minim veniam, made of
            owl the quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea dolor commodo consequat. Duis aute irure and dolor in
            reprehenderit.Consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore of magna aliqua. Ut enim ad minim
            veniam, made of owl the quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea dolor commodo consequat. Duis aute irure and
            dolor in reprehenderit.
          </p>

          <div className="flex items-center space-between">
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-xl">Tags: </h3>
              <span className="bg-[var(--white)] hover:bg-[var(--red)] capitalize text-[var(--black)] hover:text-[var(--white)] p-2 rounded-md w-[100px] cursor-pointer text-center">
                news
              </span>
              <span className="bg-[var(--white)] hover:bg-[var(--red)] capitalize text-[var(--black)] hover:text-[var(--white)] p-2 rounded-md w-[100px] cursor-pointer text-center">
                business
              </span>
              <span className="bg-[var(--white)] hover:bg-[var(--red)] capitalize text-[var(--black)] hover:text-[var(--white)] p-2 rounded-md w-[100px] cursor-pointer text-center">
                marketing
              </span>
            </div>
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-xl">share: </h3>
              {[
                { icon: <FaFacebook />, label: "Facebook" },
                { icon: <FaXTwitter />, label: "Twitter" },
                { icon: <FaLinkedin />, label: "LinkedIn" },
                { icon: <FaYoutube />, label: "YouTube" },
              ].map((item, index) => (
                <li
                  key={index}
                  className="w-[30px] h-[30px] bg-transparent hover:bg-[var(--red)] transition-all duration-500 border border-[var(--border-2)] flex items-center justify-center"
                >
                  <a href="#" aria-label={item.label}>
                    {item.icon}
                  </a>
                </li>
              ))}
            </div>
          </div>
        </div>
        <div className="w-[400px]">
          <div className="bg-white w-[400px] min-h-[200px] p-7 rounded-2xl mb-10">
            <h1 className="relative text-2xl after:content-[''] after:absolute after:w-[20%] after:h-[2px] after:bg-[var(--red)] after:left-0 after:-bottom-1 font-bold mb-5">
              Search
            </h1>
            <form
              className="flex flex-col items-start gap-3"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="flex w-full">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full p-5 rounded-l-lg bg-[#F4F1EA] text-[var(--text)] placeholder:text-[var(--text)] focus:outline-none"
                  required
                  aria-label="Email Address"
                />
                <button
                  type="submit"
                  className="p-3 rounded-r-lg bg-[var(--red)] cursor-pointer focus:outline-none text-white"
                  aria-label="Subscribe"
                >
                  <FaSearch />
                </button>
              </div>
            </form>
          </div>

          <div className="bg-white w-[400px] min-h-[200px] p-7 rounded-2xl mb-10">
            <h1 className="relative text-2xl after:content-[''] after:absolute after:w-[20%] after:h-[2px] after:bg-[var(--red)] after:left-0 after:-bottom-1 font-bold mb-5">
              Categories
            </h1>

            <div className="bg-[#F4F1EA] rounded-lg flex items-center justify-between p-5 hover:bg-[var(--red)] hover:text-[var(--white)] transition-all duration-500 mb-3">
              <h5 className="font-bold">Breakfast</h5>
              <span className="font-bold">(8)</span>
            </div>
            <div className="bg-[#F4F1EA] rounded-lg flex items-center justify-between p-5 hover:bg-[var(--red)] hover:text-[var(--white)] transition-all duration-500 mb-3">
              <h5 className="font-bold">Breakfast</h5>
              <span className="font-bold">(8)</span>
            </div>
            <div className="bg-[var(--red)] rounded-lg flex items-center justify-between p-5 text-[var(--white)] transition-all duration-500 mb-3">
              <h5 className="font-bold">Breakfast</h5>
              <span className="font-bold">(8)</span>
            </div>
            <div className="bg-[#F4F1EA] rounded-lg flex items-center justify-between p-5 hover:bg-[var(--red)] hover:text-[var(--white)] transition-all duration-500 mb-3">
              <h5 className="font-bold">Breakfast</h5>
              <span className="font-bold">(8)</span>
            </div>
            <div className="bg-[#F4F1EA] rounded-lg flex items-center justify-between p-5 hover:bg-[var(--red)] hover:text-[var(--white)] transition-all duration-500 mb-3">
              <h5 className="font-bold">Breakfast</h5>
              <span className="font-bold">(8)</span>
            </div>
          </div>

          <div className="bg-white w-[400px] min-h-[200px] p-7 rounded-2xl mb-10">
            <h1 className="relative text-2xl after:content-[''] after:absolute after:w-[20%] after:h-[2px] after:bg-[var(--red)] after:left-0 after:-bottom-1 font-bold mb-5">
              Recent Post
            </h1>

            <div className="flex items-center">
              <div className="flex items-center p-5 ">
                <img src="../Blogs/blogRecentThumb3_1.png" alt="" />
                <div>
                  <h5 className="font-bold flex items-center gap-2 ">
                    <SlCalender />
                    <span>18 Dec, 2024</span>
                  </h5>
                  <a
                    href="#"
                    className="font-bold text-xl hover:text-[var(--red)] transition-all duration-500"
                  >
                    Avoid Health Risk Food & Endure High Availability
                  </a>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex items-center p-5 ">
                <img src="../Blogs/blogRecentThumb3_1.png" alt="" />
                <div>
                  <h5 className="font-bold flex items-center gap-2 ">
                    <SlCalender />
                    <span>18 Dec, 2024</span>
                  </h5>
                  <a
                    href="#"
                    className="font-bold text-xl hover:text-[var(--red)] transition-all duration-500"
                  >
                    Avoid Health Risk Food & Endure High Availability
                  </a>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex items-center p-5 ">
                <img src="../Blogs/blogRecentThumb3_1.png" alt="" />
                <div>
                  <h5 className="font-bold flex items-center gap-2 ">
                    <SlCalender />
                    <span>18 Dec, 2024</span>
                  </h5>
                  <a
                    href="#"
                    className="font-bold text-xl hover:text-[var(--red)] transition-all duration-500"
                  >
                    Avoid Health Risk Food & Endure High Availability
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Blog;
