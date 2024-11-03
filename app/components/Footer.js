const Footer = () => {
  return (
    <footer className="text-[#ffffff] py-4 mt-8">
      <div className="w-[85%] mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} Losa Wiki. All rights reserved.
        </p>
        <p className="text-sm">Built in Next JS.</p>
        <div className="mt-2">
          <a href="#" className="text-[#08A170] hover:underline">
            Dataset
          </a>{" "}
          |
          <a href="#" className="text-[#08A170] hover:underline">
            {" "}
            About
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
