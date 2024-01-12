import React, {useContext} from 'react'
import { Chrono } from "react-chrono";
import "./Experience.css"
import { ThemeContext } from '../../App.jsx';
function Experience() {

  const {theme} = useContext(ThemeContext);

  const items = [
    {
      title: "Jan 2024",
      url: "",
      cardSubtitle: "Portfolio",
      cardDetailedText: "using react",
      media: {
        type: "IMAGE",
        source: {
          url: "src/assets/portfolio.png"
        }
      }
    },
    {
      title: "Dec 2023",
      url: "",
      cardSubtitle: "Project",
      cardDetailedText: "Tree visualiser using C++",
      media: {
        type: "IMAGE",
        source: {
          url: "src/assets/treeformer.gif"
        }
      }
    },
    {
      title: "Dec 2023",
      cardTitle: "",
      url: "",
      cardSubtitle: "Project",
      cardDetailedText: "MERN based blog site where you can create and share blogs anonymously.",
      media: {
        type: "IMAGE",
        source: {
          url: "src/assets/two.png"
        }
      }
    },
    {
      title: "Jan 2021",
      cardTitle: "",
      url: "",
      cardSubtitle: "Btech",
      cardDetailedText: "Netaji Subhash University of technology",
      media: {
        type: "IMAGE",
        source: {
          url: "src/assets/nsut.jpeg"
        }
      }
    },
   {
    title: "Dec'21-Mar'22",
    cardTitle: "",
    url: "",
    cardSubtitle: "BhartiyaShiksha",
    cardDetailedText: "Created to connect passionate and qualified teachers with students accross various academic levels during covid provide subscription to more than 200+ students.",
    media: {
      type: "IMAGE",
      source: {
        url: ""
      }
    }
  }
  ];

  const color = 'linear-gradient(90.21deg, rgba(162, 96, 192, 0.5) -5.91%, rgba(55, 34, 146, 0.5) 111.58%)'
  
  const themeStyles = {
    font: 'Roboto,Helvetica,sans-serif',
    cardBgColor: theme==='dark'?'#1f1f1f':'#f8f8f8',
    cardForeColor: 'violet',
    primary: 'grey',
    secondary: color,
    titleColor: '#f8f8f8',
    titleColorActive: theme==='dark'?'#1f1f1f':'#f8f8f8'
  }

  return (
    <div>
      <Chrono allowDynamicUpdate={true} className="chrono-style"
        cardWidth={300} items={items} mode="VERTICAL_ALTERNATING"
        theme={themeStyles}
        slideItemDuration={1000}
        slideShow={true} borderLessCards={true}
        fontSizes={{
          cardSubtitle: '2rem', cardText: '1.5rem'
        }}
      />
    </div>
  )
}

export default Experience;