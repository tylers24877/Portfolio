import { Fragment } from "react/jsx-runtime";
import { AboutMeTitle } from "../../components/AboutMeTitle";

export const AboutMeSection = () => {
  return (
    <Fragment>
      <div className="md:mt-55 mt-[105px]">
        <div className="flex flex-col px-5 md:flex-row md:px-20">
          <div className="font-roboto order-2 md:order-1 md:w-7/12 md:pr-4">
            <AboutMeTitle className="mx-auto h-[100px] w-[170px] fill-on-surface" />
            Welcome to my corner of the web! I'm [Your Name], a passionate and
            innovative web developer with a keen eye for design and a love for
            creating captivating digital experiences. Driven by curiosity and
            fueled by creativity, I thrive on the challenges of turning ideas
            into reality through code. With [X] years of experience in web
            development, I've honed my skills in front-end and back-end
            technologies, mastering languages such as HTML, CSS, JavaScript, and
            beyond. Beyond just writing lines of code, I'm committed to crafting
            solutions that not only meet but exceed expectations. Whether it's
            building responsive and user-friendly interfaces, optimizing website
            performance, or solving complex technical issues, I'm always eager
            to push the boundaries of what's possible. Collaboration is at the
            heart of my approach. I believe that the best results emerge when
            diverse talents and perspectives come together, and I'm always
            excited to work alongside fellow developers, designers, and clients
            to bring visions to life. When I'm not immersed in the world of
            coding, you can find me exploring the latest trends in technology,
            experimenting with new tools and frameworks, or seeking inspiration
            in the world around me. I'm passionate about empowering businesses
            and individuals through innovative digital solutions, and I'm
            thrilled at the prospect of collaborating with you to create
            something extraordinary. Let's connect and turn your ideas into
            reality! Welcome to my corner of the web! I'm [Your Name], a
            passionate and innovative web developer with a keen eye for design
            and a love for creating captivating digital experiences. Driven by
            curiosity and fueled by creativity, I thrive on the challenges of
            turning ideas into reality through code. With [X] years of
            experience in web development, I've honed my skills in front-end and
            back-end technologies, mastering languages such as HTML, CSS,
            JavaScript, and beyond. Beyond just writing lines of code, I'm
            committed to crafting solutions that not only meet but exceed
            expectations. Whether it's building responsive and user-friendly
            interfaces, optimizing website performance, or solving complex
            technical issues, I'm always eager to push the boundaries of what's
            possible. Collaboration is at the heart of my approach. I believe
            that the best results emerge when diverse talents and perspectives
            come together, and I'm always excited to work alongside fellow
            developers, designers, and clients to bring visions to life. When
            I'm not immersed in the world of coding, you can find me exploring
            the latest trends in technology, experimenting with new tools and
            frameworks, or seeking inspiration in the world around me. I'm
            passionate about empowering businesses and individuals through
            innovative digital solutions, and I'm thrilled at the prospect of
            collaborating with you to create something extraordinary. Let's
            connect and turn your ideas into reality! Welcome to my corner of
            the web! I'm [Your Name], a passionate and innovative web developer
            with a keen eye for design and a love for creating captivating
            digital experiences. Driven by curiosity and fueled by creativity, I
            thrive on the challenges of turning ideas into reality through code.
            With [X] years of experience in web development, I've honed my
            skills in front-end and back-end technologies, mastering languages
            such as HTML, CSS, JavaScript, and beyond. Beyond just writing lines
            of code, I'm committed to crafting solutions that not only meet but
            exceed expectations. Whether it's building responsive and
            user-friendly interfaces, optimizing website performance, or solving
            complex technical issues, I'm always eager to push the boundaries of
            what's possible. Collaboration is at the heart of my approach. I
            believe that the best results emerge when diverse talents and
            perspectives come together, and I'm always excited to work alongside
            fellow developers, designers, and clients to bring visions to life.
            When I'm not immersed in the world of coding, you can find me
            exploring the latest trends in technology, experimenting with new
            tools and frameworks, or seeking inspiration in the world around me.
            I'm passionate about empowering businesses and individuals through
            innovative digital solutions, and I'm thrilled at the prospect of
            collaborating with you to create something extraordinary. Let's
            connect and turn your ideas into reality!
          </div>
          <div className="order-1 flex items-center justify-center max-md:pb-4 md:order-2 md:w-5/12 md:pl-4">
            <img
              className="mx-auto max-h-[200px] scale-x-[-1] rounded-full outline outline-2 outline-outline-variant drop-shadow-lg md:max-h-[400px]"
              src="src/assets/profile_photo.jpg"
              alt="Profile Photo - Isle of Skye"
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};
