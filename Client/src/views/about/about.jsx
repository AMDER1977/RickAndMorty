import "./about.css";

function About() {
  return (
    <div className="aboutMe">
      <h1>Acerca de mí</h1>

      <p>
        Mi Nombre es Amderson Hernandez, Licenciado en Educación y FullStack
        developer en continua formacion y crecimiento en el campo de las TI,
        este es un proyecto personal desarrollado durante mi cursada en el
        Bootcamp de Henry, utilizando las siguientes tecnologías: Javascript,
        React, Redux, los estilos con Css. El Back fue hecho con Express,
        sequelize y la base de datos en postgreSQL
      </p>
      <img src="/ajhd.jpg" alt="Foto Personal"></img>
    </div>
  );
}

export default About;
