import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import ContactForm from "./ContactForm";

const Navigation = ({ toggleC, isContact }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Navbar toggle={toggle} toggleC={toggleC} />
      <Sidebar isOpen={isOpen} toggle={toggle} toggleC={toggleC} />
      <ContactForm isContact={isContact} toggleC={toggleC} />
    </div>
  );
};

export default Navigation;
