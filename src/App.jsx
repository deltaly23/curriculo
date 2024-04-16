import { useState, useEffect } from 'react'
import githubImg from './assets/github.png'
import whatsappImg from './assets/whatsapp.jpg'
import instagramImg from './assets/ig.jpg'
import circuit1 from './assets/circuit1.png'
import circuit2 from './assets/circuit2.png'
import './App.css'






function InitialInformation({ birthday, adress, email, fone, instagram }) {

  return (
    <div className='initial-information'>
      <span><b>Data de nascimento: </b>{birthday.date + ", " + birthday.yearsOld + " anos"}</span>
      <span><b>Endereço: </b><a href={adress.link}>{adress.value}</a></span>
      <span><b>Email: </b><a href={"mailto:" + email}>{email}</a></span>
      <span><b>Telefone: </b><a href={fone.link}>{fone.value}</a></span>
    </div>
  )
}

function QuickLinks({ github, whatsapp, instagram }) {

  return (
    <div className='quick-links'>
      <a className='quick-link' href={github.link}>
        <img src={githubImg} />
        github
      </a>

      <a className='quick-link' href={whatsapp.link}>
        <img src={whatsappImg} />
        whatsapp
      </a>

      <a className='quick-link' href={instagram.link}>
        <img src={instagramImg} />
        instagram
      </a>
    </div>
  )
}

function ListSection({ name, list }) {
  let i = 0;
  const rows = [];

  list.forEach((row) => {
    rows.push(
      <p key={i}>{row}</p>
    );
    i++;
  });

  return (
    <div className={name.replace(" ", "-") + ' list-section'}>
      <h3>{name.toUpperCase()}</h3>
      <div className='list'>
        {rows}
      </div>
    </div>
  )
}

function ExperienceSection({ experienceList }) {
  const [currentExperience, setCurrentExperience] = useState(0);

    useEffect(() => {
      const intervalId = setInterval(() => {
        nextExperience();
      }, 8000);
  
      // Função de limpeza para limpar o intervalo quando o componente for desmontado
      return () => clearInterval(intervalId);
    }, []);

  function nextExperience() {
    setCurrentExperience((prevExperience) => (prevExperience === experienceList.length - 1 ? 0 : prevExperience + 1));
  }

  function prevExperience() {
    setCurrentExperience((prevExperience) => (prevExperience === 0 ? experienceList.length - 1 : prevExperience - 1));
  };


  return (
    <div className="experience-section">
      <h3>EXPERIÊNCIAS</h3>
      <div className='experiences'>
        <a onClick={prevExperience}>{"<"}</a>
        <div className="experience-container">
          {experienceList.map((experience, index) => (
            <div key={experience.enterprise.replace(" ", "-")} className={index === currentExperience ? 'experience active' : 'experience'}>
              <h3>{experience.enterprise}</h3>
              <p>{experience.period}</p>
              <p>{experience.activities}</p>
            </div>
          ))}
        </div>
        <a onClick={nextExperience}>{">"}</a>
      </div>
    </div>
  )
}

function App() {
  const data = {
    personalInfo: {
      name: "Alyson Guilherme Teixeira de Oliveira",
      role: "analista programador junior I",
      birthday: {
        date: "23/05/2004",
        yearsOld: 19
      },
      email: "oliveriraalyson@gmail.com",
      adress: {
        value: "chacara agua fria n° 39 lt 04 - Palmas-TO",
        link: "https://maps.app.goo.gl/3R6SJoasE1JdNr3G8"
      },
      fone: {
        value: "(63) 99241-9418",
        link: "https://api.whatsapp.com/send/?phone=556392419418"
      },
      instagram: {
        value: "_deltaly_",
        link: "https://www.instagram.com/_deltaly_"
      },
      github: {
        value: "_deltaly_",
        link: "https://github.com/deltaly23"
      }
    },
    goals: [
      "Tenho como primeiro objetivo trabalhar na minha área de estudos,que é a análise e desenvolvimento de sistemas. Sou ávido por conhecimento e realmente apaixonado por tecnologia, estou disposto a me dedicar o máximo possível para aprender e me desenvolver nas funções que a mim forem atribuidas."],
    academicEducation: [
      "Ensino superior em Tecnologia e Analise e Desenvolvimento de Sistemas (TADS)",
      "Universidade do Tocantins - UNITINS",
      "iniciado 02/2023 cursando 3° período",
      "previsão de término: 12/2027"
    ],
    skills: [
      "raciocinio lógico",
      "contato com linguagens como: JavaScript, Java, Phyton e c++",
      "contato com os frameworks web: React, bootstrap, svelte",
      "excel intermediário",
      "inglês básico"
    ],
    experienceList: [
      {
        enterprise: "FM2C serviços de manutenção",
        period: "contrato ativo, iniciado 07/09/2023",
        activities: "Principais atividades: gestão de documentos e compliance interma, a serviço da empresa Corteva Agriscience, ativiades administrativas e processos internos assim como utilisação de sistemas proprios da empresa e pequenas automações realizadas com Microsoft Power Automate."
      },
      {
        enterprise: "DCCO soluções em energia",
        period: "Período: 24/06/2019 à 13/08/2021",
        activities: "Atividades desenvolvidas: Organização geral e listagem, auxiliar de controle de entrada e saída de mercadorias, controle de despesas, comunicação com representantes, fiscalização e controle do prazo de validade, auxiliar do financeiro, auxiliar de almoxarifado."
      }

    ],

  }

  return (
    <>

      <div className='image-container'>
      </div>
      <div className='personal-card '>
        <h3 className='name'>{data.personalInfo.name}</h3>
        <span className='role'>{data.personalInfo.role}</span>
      </div>

      <div className='container-informations'>
        <InitialInformation
          birthday={data.personalInfo.birthday}
          adress={data.personalInfo.adress}
          email={data.personalInfo.email}
          fone={data.personalInfo.fone}
          instagram={data.personalInfo.instagram}
        />

        <QuickLinks
          github={data.personalInfo.github}
          whatsapp={data.personalInfo.fone}
          instagram={data.personalInfo.instagram}
        />
      </div>
      <div className='container-desktop'>
        <ListSection
          name={"objetivos"}
          list={data.goals}
        />

        <ListSection
          name={"formação acadêmica"}
          list={data.academicEducation}
        />

        <ExperienceSection experienceList={data.experienceList} />

        <ListSection
          name={"habilidades"}
          list={data.skills}
        />
      </div>

      <img className="bg circuit1" src={circuit1}></img>
      <img className="bg circuit2" src={circuit2}></img>
    </>
  )
}

export default App
