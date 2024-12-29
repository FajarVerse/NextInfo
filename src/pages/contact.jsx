import { Link } from "react-router";
import Header from "../components/elements/Header";
import Paragraph from "../components/elements/Paragraph";
import AuthLayout from "../components/layouts/AuthLayout";
import Navbar from "../components/layouts/Navbar";

const Contact = () => {
  return (
    <>
      <Navbar />
      <AuthLayout>
        <div className="w-full px-5">
          <div className="w-full">
            <Header>Contact Us</Header>
            <Paragraph>
              Have some big idea or brand to develop and need help?
            </Paragraph>
          </div>
          <div className="w-full px-1.5 py-2 mt-5 flex flex-col gap-5 rounded-xl shadow-lg shadow-slate-500">
            <div className="w-full px-2 py-3">
              <form action="">
                <div className="w-full block">
                  <label htmlFor="">
                    <input
                      type="text"
                      name=""
                      id="first-name"
                      placeholder="First Name"
                      className="input"
                      required
                    />
                  </label>
                  <label htmlFor="">
                    <input
                      type="text"
                      name=""
                      id="last-name"
                      placeholder="Last Name"
                      className="input"
                      required
                    />
                  </label>
                </div>
                <div className="w-full block">
                  <label htmlFor="">
                    <input
                      type="number"
                      name=""
                      id="phone"
                      placeholder="No. Phone"
                      className="input"
                      required
                    />
                  </label>
                  <label htmlFor="">
                    <input
                      type="email"
                      name=""
                      id="email"
                      placeholder="Email"
                      className="input"
                      required
                    />
                  </label>
                </div>

                <div className="w-full">
                  <label htmlFor="">
                    <textarea
                      name=""
                      id="message"
                      placeholder="Write message"
                      className="message"
                    ></textarea>
                  </label>
                </div>

                <div className="w-full">
                  <button
                    type="submit"
                    className="w-full py-2 bg-primary flex justify-center items-center gap-1 font-open_sans font-semibold text-base text-background rounded-md"
                  >
                    <span>
                      <svg
                        className="w-7 h-7 fill-background -rotate-45 -translate-y-0.5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 -960 960 960"
                      >
                        <path d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z" />
                      </svg>
                    </span>
                    <span>Send Message</span>
                  </button>
                </div>
              </form>
            </div>

            <div className="w-full px-3 py-3 flex gap-14 flex-col justify-between bg-slate-800 rounded-xl ">
              <div className="w-full">
                <h3 className="font-kanit font-light text-2xl text-background mb-2">
                  Contact Information
                </h3>
                <p className="paragraph-contact">
                  Have some big idea or brand to develop and need help?
                </p>
              </div>
              <div className="w-full flex flex-col gap-5 mb-2">
                <Link to={"#"} className="flex items-center gap-2.5">
                  <div className="w-6 h-6 fill-background">
                    <svg
                      className="w-full h-full fill-inherit"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 -960 960 960"
                    >
                      <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
                    </svg>
                  </div>
                  <p className="paragraph-contact">nextinfo@gmail.com</p>
                </Link>
                <Link to={"#"} className="flex items-center gap-2.5">
                  <div className="w-6 h-6 fill-background">
                    <svg
                      className="w-full h-full fill-inherit"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 -960 960 960"
                    >
                      <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" />
                    </svg>
                  </div>
                  <p className="paragraph-contact">0826 2381 2317</p>
                </Link>
                <Link to={"#"} className="flex items-center gap-2.5">
                  <div className="w-6 h-6 fill-background">
                    <svg
                      className="w-full h-full fill-inherit"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 -960 960 960"
                    >
                      <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
                    </svg>
                  </div>
                  <p className="paragraph-contact">17 Street NextInfo Office</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </AuthLayout>
    </>
  );
};

export default Contact;
