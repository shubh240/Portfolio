 function About() {
    return (
      <section className="min-h-screen bg-cover bg-center relative py-16 px-8 sm:px-20"
        style={{ backgroundImage: 'url(/images/background.jpg)' }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
  
        <div className="relative z-10 max-w-6xl mx-auto text-center text-white">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            About Me
          </h1>
          <p className="text-xl sm:text-2xl leading-relaxed">
            I am a passionate developer with 1.8 years of experience in building scalable and efficient web applications. I started my career as an SQL Developer at <strong>Techsture Technologies</strong>, where I worked for 4 months. During my time there, I gained hands-on experience with database management and query optimization, which gave me a strong foundation in backend development.
            <br /><br />
            Afterward, I transitioned to a <strong>Full Stack Developer</strong> role at <strong>Hyperlink Infosystem</strong>, where I’ve spent 1.3 years working on diverse projects. I have developed expertise in building both frontend and backend systems using technologies such as <strong>React.js</strong>, <strong>Node.js</strong>, and <strong>MongoDB</strong>, as well as handling relational databases like <strong>PostgreSQL</strong> and <strong>MySQL</strong>.
            <br /><br />
            At Hyperlink Infosystem, I worked on two live projects that helped me refine my skills. The first project was an <strong>online learning platform</strong>, where I was responsible for designing and implementing the frontend in React.js, ensuring a seamless user experience for learners and instructors. For the second project, a <strong>real estate platform</strong>, I worked on both the frontend and backend. I used React.js for the frontend, while Node.js powered the backend. This platform focused on buying, selling, and renting properties, and I also built an admin panel to manage listings and user activities.
            <br /><br />
            Throughout these experiences, I have learned to solve complex problems, implement scalable solutions, and create intuitive user interfaces. I believe in writing clean, maintainable code and am always eager to learn new technologies and tools. My academic background includes a BE in Computer Engineering from <strong>Apollo Institute of Engineering and Technology</strong>, where I developed a strong foundation in software engineering principles.
            <br /><br />
            Currently based in <strong>Ahmedabad</strong>, I am constantly exploring ways to innovate and improve my skillset to stay at the forefront of the rapidly evolving tech industry.
          </p>
        </div>
      </section>
    );
  }
  
  export default About