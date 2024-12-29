import Input from "../../elements/Input";
import TextArea from "../../elements/TextArea";

const ContactForm = () => {
  return (
    <>
      <div className="w-full px-2 py-3 lg:w-3/5 lg:py-0 xl:w-2/3">
        <form action="" className="h-full">
          <div className="w-full block lg:flex lg:justify-between lg:gap-5 lg:mb-3">
            <Input
              type="text"
              id="first-name"
              placeholder="First name"
              className=""
            />
            <Input
              type="text"
              id="last-name"
              placeholder="Last name"
              className=""
            />
          </div>
          <div className="w-full block lg:flex lg:justify-between lg:gap-5 lg:mb-3">
            <Input type="number" id="phone" placeholder="No. phone" />
            <Input type="email" id="email" placeholder="Email" />
          </div>
          <div className="w-full">
            <TextArea id="message" placeholder="Write message" />
          </div>
          <div className="w-full lg:flex lg:justify-end lg:mt-5">
            <button
              type="submit"
              className="w-full py-2 bg-primary flex justify-center items-center gap-1 font-open_sans font-semibold text-base text-background rounded-md md:text-lg lg:w-1/3 lg:text-base lg:rounded-lg"
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
    </>
  );
};

export default ContactForm;
