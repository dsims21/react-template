import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
// import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
// import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: `Daniel Sims - CV - Data First`,
  description: "Daniel Sims' personal website",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Daniel Sims.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
         Hi! I'm <strong className="text-stone-100">Daniel Sims</strong>, a tech enthusiast and an accomplished leader with a global footprint, currently based in <strong className="text-stone-100">Seattle</strong>. My technical acumen, coupled with a rapid learning ability and a keen interest in Artificial Intelligence, enables me to drive innovation in complex business environments.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
         Feel free to share this page, download my resume, and interact with ResumeGPT, my custom program, below!
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/Daniel_Sims_Resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `As a programmer and tech leader, I specialize in data and AI, with a track record at companies like Starburst Data and Tableau. My passion for understanding systems and managing diverse teams is matched by my love for learning and making lifelong friends. If you value a unique blend of technical proficiency, collaborative spirit, and an unwavering pursuit of excellence, I invite you to connect with me.`,
  aboutItems: [
    {label: 'Location', text: 'Duvall, WA', Icon: MapIcon},
    {label: 'Age', text: '39', Icon: CalendarIcon},
    {label: 'Country', text: 'USA', Icon: FlagIcon},
    {label: 'Interests', text: 'Artificial Intelligence, Virtual Reality', Icon: SparklesIcon},
    {label: 'Education', text: 'University of Washington', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Starburst Data, OpenMarket, Tableau', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Leadership & Management',
    skills: [
      {
        name: 'Team Management',
        level: 9, // Based on your experience managing international teams
      },
      {
        name: 'Diversity & Inclusion',
        level: 9, // Based on your focus on diversity and building diverse teams
      },
      {
        name: 'Customer Relations',
        level: 9, // Based on your experience working with customers across multiple continents and at various hours
      },
    ],
  },
  {
    name: 'Programming languages',
    skills: [
      {
        name: 'Python',
        level: 9, // Since you've worked with AI and data, I assume you're proficient in Python
      },
      {
        name: 'Java',
        level: 7, // Based on your experience with Java
      },
      {
        name: 'C#',
        level: 6,
      },
    ],
  },
  {
    name: 'Data engineering',
    skills: [
      {
        name: 'SQL',
        level: 8,
      },
      {
        name: 'ETL',
        level: 8,
      },
      {
        name: 'Data Warehousing',
        level: 7,
      },
    ],
  },
  {
    name: 'System Design',
    skills: [
      {
        name: 'Distributed Systems',
        level: 9, // You mentioned designing a Tableau Server for 600 users
      },
      {
        name: 'Data Architecture',
        level: 8, // You mentioned designing a data lake at OpenMarket
      },
      {
        name: 'System Resiliance',
        level: 9,
      },
    ],
  },
  {
    name: 'Customer Facing Skills',
    skills: [
      {
        name: 'Relationship Management',
        level: 9, // Based on your experience working with customers across multiple continents and at various hours
      },
      {
        name: 'Escalation Handling',
        level: 9, // Based on your experience successfully engaging the C-Level team to retain and build customer relationships
      },
      {
        name: 'Product Feedback',
        level: 9, // Based on your experience designing systems that meet customer needs and drive business decisions
      },
    ],
  },
  {
    name: 'Container Technologies',
    skills: [
      {
        name: 'Kubernetes',
        level: 8,
      },
      {
        name: 'Docker',
        level: 4,
      },
      {
        name: 'Helm',
        level: 7,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  // {
  //   title: 'ResumeGPT',
  //   description: 'Chat with my resume. Ask away.',
  //   url: 'https://cvquestionanswer.streamlit.app/',
  //   image: porfolioImage1,
  // },
  // {
  //   title: 'Project title 2',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage2,
  // },
  // {
  //   title: 'Project title 3',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage3,
  // },
  {
    title: 'ResumeGPT',
    description: 'Chat with my resume. Ask away. /n/n Designed with: /n/n Python /n OpenAI /n LangChain /n Streamlit',
    url: 'https://cvquestionanswer.streamlit.app/',
    image: porfolioImage4,
  },
  // {
  //   title: 'Project title 5',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://cvquestionanswer.streamlit.app/',
  //   image: porfolioImage5,
  // },
  // {
  //   title: 'Project title 6',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage6,
  // },
  // {
  //   title: 'Project title 7',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage7,
  // },
  // {
  //   title: 'Project title 8',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage8,
  // },
  // {
  //   title: 'Project title 9',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage9,
  // },
  // {
  //   title: 'Project title 10',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage10,
  // },
  // {
  //   title: 'Project title 11',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage11,
  // },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'June 2015',
    location: 'Univerity of Washington',
    title: 'Bachelor of Arts in Business Administration',
    content: <p>In my academic journey, I explored a broad spectrum of business subjects that have become a cornerstone in my tech-oriented career. From Business Finance to E-Marketing and International Trade, my foundational knowledge has been integral in navigating the dynamic landscape of the tech industry.</p>,
  },
  // {
  //   date: 'June 2013',
  //   location: 'Cascadia College',
  //   title: 'Associate of Arts in Business Administration',
  //   content: <p></p>,
  // },
];

export const experience: TimelineItem[] = [
  {
    date: 'August 2022 - June 2023',	
    location: 'Starburst Data',	
    title: 'Manager, Technical Account Management',	
    content: (
      <div>
      <p>
        I managed a specialized team of technical account managers who catered to high-profile clients, navigated complex challenges, and implemented systems to enhance operational efficiency. My focus was on using innovative solutions and clear communication to achieve customer satisfaction and drive team performance.
      </p>
      <br />
      <div className="pl-8">
        <ul className="list-disc list-inside">
          <li>Fostered a culture of empowerment and teamwork, leading to a high-performing team in a challenging and technical environment. This leadership style resulted in improved team performance, higher job satisfaction, and the successful nurturing of individuals into roles of increased responsibility and challenge.</li>
          <li>Introduced an effective communication strategy that bridged the gap between clients and internal teams. This initiative involved setting up standardized patterns of client communication and internal 'key customer issues' escalations meetings, resulting in better issue tracking, faster problem resolution, and enhanced collaboration across the board.</li>
          <li>Implemented and administered a 600 user Tableau Server across the company, providing a unified data layer and improving departmental coordination. This solution significantly enhanced daily operations, as evidenced by up to 1000 views of dashboards per day.</li>
       </ul>
      </div>
      </div>
    ),
  },
  {
    date: 'August 2021 - August 2022',	
    location: 'Starburst Data',	
    title: 'Technical Account Manager',	
    content: (
      <div>
      <p>
        In this role, I fused technical expertise with account management, cultivating relationships with significant customer accounts while driving data solutions. Leveraging Trino/Presto and other advanced technologies, I built robust data strategies that facilitated efficient querying for the world's largest datasets. 
      </p>
      <br />
      <div className="pl-8">
        <ul className="list-disc list-inside">
          <li>Served as the trusted point of contact for high-profile customer accounts, consistently delivering high-quality support and facilitating collaboration with global data teams.</li>
          <li>Fostered strong relationships with product and engineering teams, contributing to significant product enhancements through informed liaising and effective communication.</li>
       </ul>
      </div>
      </div>
    ),
  },
  // {	
  //   date: 'August 2022 - June 2023',	
  //   location: 'Starburst Data',	
  //   title: 'Manager, Technical Account Management',	
  //   content: (	
  //     <div>	
  //     <p>In this role, I fused technical expertise with account management, cultivating relationships with significant customer accounts while driving data solutions. Leveraging Trino/Presto and other advanced technologies, I built robust data strategies that facilitated efficient data federation and querying for the world's largest datasets.</p>	
  //     <div style={{ paddingLeft: '30px', textIndent: '-13px' }}>	
  //         <p>• Implemented and administered Tableau Server across the company, providing a unified data layer and improving departmental coordination. This solution significantly enhanced daily operations, as evidenced by up to 1000 views of dashboards per day.</p>	
  //         <p>• Successfully developed 'Radar Ping', a unique tool integrated into Slack, providing predictive insights into account management issues and facilitating effective team communication, enhancing decision-making and problem-solving capabilities.</p>	
  //     </div>	
  //     </div>	
  //   ),	
  // },	
  // {	
  //   date: 'August 2021 - August 2022',	
  //   location: 'Starburst Data',	
  //   title: 'Technical Account Manager',	
  //   content: (	
  //     <div>	
  //     <p>In this role, I fused technical expertise with account management, cultivating relationships with significant customer accounts while driving data solutions. Leveraging Trino/Presto and other advanced technologies, I built robust data strategies that facilitated efficient data federation and querying for the world's largest datasets.</p>	
  //     <div style={{ paddingLeft: '30px', textIndent: '-13px' }}>	
  //         <p>• Served as the trusted point of contact for high-profile customer accounts, consistently delivering high-quality support and facilitating collaboration with global data teams.</p>	
  //         <p>• Fostered strong relationships with product and engineering teams, contributing to significant product enhancements through informed liaising and effective communication.</p>	
  //     </div>	
  //     </div>	
  //   ),	
  // },
  {
    date: 'December 2020 - August 2021',
    location: 'OpenMarket Inc.',
    title: 'Senior Technical Account Manager',
    content: (
      <div>
      <p>
        Seamlessly blended my technical acumen and client relationship management capabilities to significantly enhance our global text messaging platforms. I oversaw the global messaging operations for world-renowned technology companies, ensuring optimal performance and customer satisfaction. 
      </p>
      <br />
      <div className="pl-8">
        <ul className="list-disc list-inside">
          <li>Managed global messaging operations, successfully handling billions of worldwide transactions. This role involved ensuring the seamless delivery of every text message, which significantly improved our client's operational efficiency and user experience.</li>
          <li>Collaborated with the Data Engineering team to build a robust and innovative data lake infrastructure using advanced technologies like Parquet, S3, Hive, and Presto. This strategic project effectively managed the enormous volume of text message data, demonstrating the importance of efficiency and accuracy in maintaining data value.</li>
       </ul>
      </div>
      </div>
    ),
  },
  {
    date: 'June 2013 - December 2020',
    location: 'Spearhead Capital Management, LLC',
    title: 'Owner, Quantitative Analyst, Financial Advisor',
    content: (
      <div>
      <p>
        Founded and managed a boutique investment firm where I harnessed my expertise in data-driven solutions and quantitative analysis to bring value to the financial markets. I developed novel tools for derivative pricing and risk hedging, thereby fundamentally transforming the approach to investment.
      </p>
      <br />
      <div className="pl-8">
        <ul className="list-disc list-inside">
          <li>Developed automated workflows for Monte Carlo Simulations and built tools for mass valuation of options using the Black-Scholes formula. This unprecedented move not only streamlined operations but also increased accuracy and efficiency in option pricing and risk hedging.</li>
          <li>Developed a fully automated data pipeline, integrating all index/equity derivative trades on every US exchange along with other crucial market data. Combined with data aggregation and visualization, this sophisticated infrastructure brought transparency to analysis and enhanced decision-making capabilities.</li>
       </ul>
      </div>
      </div>
    ),
  },
  {
    date: 'November 2013 - December 2018',
    location: 'Tableau Software',
    title: 'Manager, Software Engineering',
    content: (
      <div>
      <p>
      I excelled in various roles of increasing responsibility within the support and engineering domains. My journey began as a Technical Support Engineer, progressing to a Technical Account Manager, followed by a Manager of Technical Account Management, and culminated as the Manager of Software Engineering.
      </p>
      <br />
      <div className="pl-8">
        <ul className="list-disc list-inside">
          <li>Led and managed teams ranging from 10 to 13 members across different roles, driving significant enhancements in defect triage, resolution, and product support. Championed the adoption of Scrum methodology and the development of innovative solutions, leading to improvements in operational efficiency, cost savings, and customer service.</li>
          <li>Excelled in customer-centric roles, delivering white-glove service to large enterprise customers and customizing solutions to meet unique needs. Achieved high customer satisfaction and renewal rates.</li>
       </ul>
      </div>
      </div>
    ),
  },
  {
    date: 'November 2007 - June 2013',
    location: 'Scottrade, Inc.',
    title: 'Stockbroker',
    content: (
      <div>
      <p>
      Within a small team setting, I managed a multitude of facets of the brokerage and maintained over 15,000 accounts.
      </p>
      <br />
      <div className="pl-8">
        <ul className="list-disc list-inside">
          <li>Acquired FINRA Series 7 and Series 63 licenses, underlining my mastery of financial regulations, securities, and ethical practices. </li>
          <li>Utilized my reputation as a proficient professional in options trading to execute high-volume trades for clients, while also educating them about options trading. This superior service led to enhanced client retention and increased brokerage assets.</li>
       </ul>
      </div>
      </div>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Chris Ghyzel (Technical Account Manager)',
      text: 'Daniel is among the smartest and most active managers I have had. He really challenged me to think about the way I work. Our team always performed consistently well because he was engaged with us. In doing so he brought us to the highest level of performance: creativity, which is something truly rare.',
      image: 'testimonialimages/chris.jpg',
    },
    {
      name: 'Alex Albu (Director, Engineering)',
      text: `Daniel is a savvy technical leader who tackles challenging problems thinking out of the box. Always responsive and ready to engage. When working with my team, he always brought valuable insights, both technical and the customer's perspective.`,
      image: 'testimonialimages/alexalbu.jpg',
    },
    {
      name: 'Sejin Mong (Director, Customer Success)',
      text: `Daniel cares deeply about the team members he manages and mentors. He wants to see his team members succeed, which is a quality that his direct reports could feel daily in their work alongside him.`,
      image: 'testimonialimages/sejin.jpg',
    },
    {
      name: 'Alex Lavoie (Technical Account Manager)',
      text: `It is not often you closely collaborate with someone whose talents span so many areas. Technical, analytical, tactical. That's just the start.`,
      image: 'testimonialimages/alex.jpg',
    },
    {
      name: 'Kevin Haley (Product Manager)',
      text: 'Daniel is extremely reliable and trustworthy, and I knew that any project with him on it would be driven to completion and be successful. Not only is he a do-er, but he also fosters a fantastic work environment.',
      image: 'testimonialimages/kevin.jpg',
    },
    {
      name: 'Luke Watkins (Senior Technical Account Manager)',
      text: 'What makes Daniel standout is his data driven and "back to fundamentals" style of working, and is a leader that inspires through action. He is highly technical leader in the data/AI/ML domain paired with a strong business & people mindset.',
      image: 'testimonialimages/luke.jpg',
    },
    {
      name: 'JB Oh (Technical Account Manager)',
      text: `Beyond his technical skills and leadership abilities, Dan's interpersonal skills made him a pleasure to work with. He fostered a collaborative and inclusive environment, encouraging open communication and actively seeking input from team members.`,
      image: 'testimonialimages/jb.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'I am always open to discussing new opportunities, innovative ideas, or how I can bring value to your team. Feel free to reach out.',
  items: [
    {
      type: ContactType.Phone,
      text: '425.922.0726',
      href: 'tel:4259220726',
    },
    {
      type: ContactType.Email,
      text: 'DSims21@gmail.com',
      href: 'mailto:dims21@gmail.com',
    },
    // {
    //   type: ContactType.Github,
    //   text: 'DSims21',
    //   href: 'https://github.com/dsims21',
    // },
    // {
    //   type: ContactType.StackOverflow,
    //   text: 'MonteCarloSims',
    //   href: 'https://stackoverflow.com/users/9862149/montecarlosims',
    // },
    {
      type: ContactType.LinkedIn,
      text: 'DanielJSims',
      href: 'https://www.linkedin.com/in/danieljsims/',
    },
    // {
    //   type: ContactType.Twitter,
    //   text: 'MonteCarloSims',
    //   href: 'https://twitter.com/MonteCarloSims',
    // },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/dsims21'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/9862149/montecarlosims'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/danieljsims/'},
  // {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/skyhighcloudeater/'},
  // {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/MonteCarloSims'},
];
