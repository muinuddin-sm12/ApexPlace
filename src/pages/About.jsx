import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <div className="h-[calc(100vh-316px)] flex justify-center items-center">
      <Helmet>
        <title>ApexPlace | About</title>
      </Helmet>
      About page
    </div>
  );
};

export default About;
