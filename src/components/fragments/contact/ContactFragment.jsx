import AuthLayout from "../../layouts/AuthLayout";
import Navbar from "../../layouts/Navbar";
import ContactBody from "./ContactBody";
import ContactHeader from "./ContactHeader";

const ContactFragment = () => {
  return (
    <>
      <Navbar />
      <AuthLayout>
        <div className="w-full px-5 md:px-16 xl:px-24">
          <ContactHeader />
          <ContactBody />
        </div>
      </AuthLayout>
    </>
  );
};

export default ContactFragment;
