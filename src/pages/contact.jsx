import { Link } from "react-router";
import Header from "../components/elements/Header";
import Paragraph from "../components/elements/Paragraph";
import AuthLayout from "../components/layouts/AuthLayout";
import Navbar from "../components/layouts/Navbar";
import ContactHeader from "../components/fragments/contact/ContactHeader";
import ContactBody from "../components/fragments/contact/ContactBody";

const Contact = () => {
  return (
    <>
      <Navbar />
      <AuthLayout>
        <div className="w-full px-5">
          <ContactHeader />
          <ContactBody />
        </div>
      </AuthLayout>
    </>
  );
};

export default Contact;
