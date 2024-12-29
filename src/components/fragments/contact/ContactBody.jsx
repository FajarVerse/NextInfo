import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const ContactBody = () => {
  return (
    <>
      <div className="w-full px-1.5 py-2 mt-5 flex flex-col gap-5 rounded-xl shadow-md shadow-slate-400 md:px-7 md:py-8 lg:flex-row-reverse">
        <ContactForm />
        <ContactInfo />
      </div>
    </>
  );
};

export default ContactBody;
