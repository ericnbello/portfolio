const userData = {
  homepageDescription: "Hey there! Welcome to my portfolio site! As a freelance web developer, my passion lies in crafting incredible websites that not only look stunning but also function flawlessly. I specialize in creating tailored solutions that empower businesses and individuals to achieve their online objectives. If you're looking for a developer, cloud engineer, or DevOps professional, let's connect and discuss how I can contribute to your team. Together, we can accomplish some remarkable things!",
  githubUsername: "ericnbello",
  name: "Eric Bello",
  designation: "Full-Stack Developer",
  avatarUrl: "/avatar.png",
  email: "ericnbello@gmail.com",
  phone: "",
  address: "Miami, FL",
  articles: [
    {
      pid: "cloud-challenge",
      title: "Cloud Challenge",
      route: "/blog/articles/cloud-challenge",
      overview: "This challenge was taken from cloudresumechallenge.dev which required applying knowledge of various AWS services into practical hands-on experience to deploy a serverless website.",
      imgUrl: "/cloud-challege-blog-cover.jpeg",
      description: [
        {
          intro: `After passing the AWS Certified Cloud Practitioner exam, I was ready to apply the knowledge I had learned into some practical experience. Researching cloud projects online led me to the Cloud Challenge, which I began by customizing my portfolio site (which is built with Next.js and Tailwind) and getting it deployed without using "easier" deployment sites like Netlify or Heroku. The following steps outline how I was able to integrate popular AWS services and complete the challenge.`,
          headlines: [
            `1. Deploy online as an Amazon S3 static website`,
            `2. AWS Cloudfront for HTTPS`,
            `3. DNS`,
            `4. Visitor Counter - JavaScript `,
            `5. Database - Dynamo DB`,
            `6. API`,
            `7. Python - Lambda function`,
            `8. IaC - SAM CLI`,
            `9. Git - Source Control`,
            `10. CI/CD with GitHub Actions for Front and Back End`],
          content: [
            `The S3 service makes it easy to deploy and host a static site (such as this one created with React) with "buckets" or folders that contain the site source code.`, 
            `Since sites hosted with S3 don't come with certificates by default, setting up CloudFront was a necessary step to enable secure HTTPS traffic for the website. I `, 
            `While AWS offers its own DNS service called Route 53, I chose to keep my domain with the original provider I signed up with (Google) and edited the DNS entries to point to AWS and verify ownership.`,
            ``,
            ``,
            ``,
            ``,
            `In order to avoid manually clicking around the AWS console (which is easy to do incorrectly!) the SAM (Servlerless Application Model) uses AWS CloudFormation to deploy resources `,
            ``,
            `` 
          ],
        },
      ],
      tags: [`AWS, S3, CloudFront, DynamoDB, Lambda, API Gateway, SAM CLI, CloudFormation, GitHub Actions`]
    }
  ],
  projects: [
    {
      pid: "spa-reservation-system",
      title: "Spa Reservations",
      route: "/projects/spa-reservation-system",
      overview: "",
      demoUrl: "https://doc5gzxrvp9he.cloudfront.net/reservation-system-0.0.1-SNAPSHOT/",
      githubUrl: "https://github.com/ericnbello/spa-reservations",
      imgUrl: "/spa-reservations-screenshot.png",
      description: [``, ``, ``
      ],
      tags: ["AWS", "Java", "Spring Boot", "Tailwind", "Thymeleaf"]
    },
    {
      pid: "weather-forecast",
      title: "Weather Forecast",
      route: "/projects/weather-forecast",
      overview: "",
      demoUrl: "https://d3lgvgrrop0yu.cloudfront.net/",
      githubUrl: "https://github.com/ericnbello/weather",
      imgUrl: "/weather-app-django-preview-mockup.png",
      description: [``, ``, ``
      ],
      tags: ["AWS", "Python", "Django", "Tailwind", "JavaScript", "API"]
    },
    {
      pid: "entertainment-web-app",
      title: "Entertainment Web App",
      route: "/projects/entertainment-web-app",
      overview: "",
      demoUrl: "https://streaming-web-app.firebaseapp.com/",
      githubUrl: "https://github.com/ericnbello/entertainment-web-app",
      imgUrl: "/entertainment-web-app-screenshot.png",
      description: [``, ``, ``
      ],
      tags: ['React, Tailwind, React Router 6, Firebase']
    },
    {
      pid: "arch-studio",
      title: "Arch Studio",
      route: "/projects/arch-studio",
      overview: "",
      demoUrl: "https://d35spakm21gfpt.cloudfront.net",
      githubUrl: "https://github.com/ericnbello/arch-studio-multipage",
      imgUrl: "/arch-studio-screenshot.png",
      description: [``, ``, ``
      ],
      tags: ['AWS, Next.js, Tailwind']
    },
    {
      pid: "planet-facts",
      title: "Planet Facts",
      route: "/projects/planet-facts",
      overview: "",
      demoUrl: "https://planet-facts-ericnbello.netlify.app/",
      githubUrl: "https://github.com/ericnbello/planet-facts",
      imgUrl: "/planet-facts-screenshot.png",
      description: [``, ``, ``
      ],
      tags: ['React, Tailwind, React Router 6, Netlify']
    },
    {
      pid: "coffeeroasters-subscription",
      title: "Cofferoasters Subscription",
      route: "/projects/coffeeroasters-subscription",
      overview: "",
      demoUrl: "https://coffeeroasters-subscription.vercel.app/",githubUrl: "",
      imgUrl: "/coffeeroasters-subscription-screenshot-mockup.png",
      description: [``, ``, ``
      ],
      tags: ['Next.js, Tailwind, Supabase, Stripe, Vercel']
    },
    {
      pid: "etch-a-sketch",
      title: "Etch-a-sketch",
      route: "/projects/etch-a-sketch",
      overview: "",
      demoUrl: "https://etch-a-sketch-ericnbello.netlify.app/",
      githubUrl: "https://github.com/ericnbello/etch-a-sketch",
      imgUrl: "/etch-a-sketch-screenshot-mockup2.png",
      description: [``, ``, ``
      ],
      tags: ['HTML, CSS, JavaScript']
    },
    {
      pid: "manage-landing-page",
      title: "Manage Landing Page",
      route: "/projects/manage-landing-page",
      overview: "",
      demoUrl: "https://manage-landing-page-ericnbello.netlify.app",
      githubUrl: "https://github.com/ericnbello/manage-landing-page",
      imgUrl: "/manage-landing-page-preview-mockup.png",
      description: [``, ``, ``
      ],
      tags: ['HTML, Tailwind, JavaScript']
    },
    {
      pid: "calculator",
      title: "Calculator",
      route: "/projects/calculator",
      overview: "",
      demoUrl: "https://calculator-app-ericnbello.netlify.app",
      githubUrl: "https://github.com/ericnbello/calculator",
      imgUrl: "/calculator-screenshot-mockup.png",
      description: [``, ``, ``
      ],
      tags: ['React, Tailwind']
    },
    {
      pid: "fylo",
      title: 'Fylo Landing Page',
      route: "/projects/fylo",
      overview: "",
      demoUrl: '/projects',
      githubUrl: "https://github.com/ericnbello/fylo-landing-page",
      imgUrl: '/fylo-landing-page-screenshot-mockup.png',
      description: [``, ``, ``
      ],
      tags: ['Next.js, Tailwind']
    }
  ],
  about: {
    title:
      "",
    description: [
      `Greetings! I'm a versatile developer on the hunt for an exciting opportunity with a vibrant company. Freelance work? Yeah, I'm open to that too. My expertise revolves around creating accessible HTML, implementing modern CSS techniques using frameworks like Tailwind to make styling a breeze, and churning out clean JavaScript code. My go-to for JavaScript development is Next.js, a React framework, but I'm adaptable and always ready to learn new tools.`,
      `From a young age, web app development has been my passion. I even got myself a bachelor's degree in computer engineering and ventured into the world of e-commerce with multiple successful stores under my belt. Along the way, I've become proficient in a wide range of technologies like React, Python, Java, MySQL, Bootstrap, Tailwind, C, and C++, just to name a few. With my diverse skill set and a burning passion for cloud engineering and DevOps, I'm determined to position myself strongly for roles in these domains. Let's make things happen!`,
    ],
    currentProject: " ",
    currentProjectUrl: " ",
  },
  experience: [
    {
      title: "Web Developer",
      company: "",
      year: "2022",
      companyLink: " ",
      desc: " ",
    },
    {
      title: "Graduation",
      company: "Florida International University",
      year: "2020",
      companyLink: "https://fiu.edu",
      desc: "Received Bachelor of Science in Computer Engineering.",
    },
  ],
  resumeUrl:
    "https://drive.google.com/file/d/1_4B8wQgYINmFtXYqKuvAKtrgWdeTaHzX/view?usp=sharing",
  socialLinks: {
    instagram: "",
    twitter: "https://twitter.com/ericnbello",
    linkedin: "https://linkedin.com/in/ericnbello",
    github: "https://github.com/ericnbello",
    facebook: "",
  },
};

export default userData;
