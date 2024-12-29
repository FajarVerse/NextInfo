import Header from "../../elements/Header";
import Paragraph from "../../elements/Paragraph";

const ContactHeader = () => {
  return (
    <>
      <div className="w-full">
        <Header className="text-center">Contact Us</Header>
        <Paragraph className="text-center">
          Have some big idea or brand to develop and need help?
        </Paragraph>
      </div>
    </>
  );
};

export default ContactHeader;
