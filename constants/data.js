const userData = {
  homepageDescription: "Welcome to my site! I'm an IT professional dedicated to continuous learning and excellence. Whether navigating AWS, Azure, and Google Cloud, providing IT support, or managing systems, I thrive in the dynamic tech landscape. From architecting scalable solutions to optimizing infrastructure, I'm passionate about leveraging technology to drive success.",
  githubUsername: "ericnbello",
  name: "Eric Bello",
  designation: "Cloud Engineer",
  avatarUrl: "/avatar.png",
  email: "ericnbello@icloud.com",
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
          intro: `After passing the AWS Certified Cloud Practitioner exam, I was ready to apply the knowledge I had learned to some practical experience. Researching cloud projects online led me to the Cloud Challenge, which encompassed a wide range of tasks using various AWS services. I began by customizing my portfolio site (which is built with Next.js and Tailwind) and getting it deployed without using "easier" deployment sites like Netlify or Heroku. The following steps outline how I was able to integrate popular AWS services and complete the challenge.`,
          headlines: [
            `1. Deploy online as an Amazon S3 static website`,
            `2. AWS CloudFront for HTTPS`,
            `3. DNS and using custom domain`,
            `4. Visitor Counter - JavaScript`,
            `5. DynamoDB Database to Store Count Value`,
            `6. Python Lambda function and API Gateway`,
            `7. Infrastructure as Code (IaC) - CloudFormation with SAM CLI`,
            `8. Source Control with Git`,
            `9. CI/CD with GitHub Actions for Front and Back End`,
            `Final Thoughts`
          ],
          content: [
            `The S3 service makes it easy to deploy and host a static site (like this one created with React) with "buckets" or folders containing the site source code. First, I created a publicly accessible S3 bucket that will provide the HTML and CSS resources and images necessary for the site and configured the appropriate website endpoint for my default region (us-east-1).`, 
            `Since sites hosted with S3 don't come with SSL/TLS security certificates by default, it’s necessary to make use of the CloudFront CDN service to enable HTTPS traffic for the website. Both services seamlessly integrated with by linking my S3 endpoint as the origin to the CloudFront distribution, giving me a secure domain name.`, 
            `Although the domain given by CloudFront (https://d2lcr9xcxsvqk7.cloudfront.net) had a certificate, I wanted to use my own custom one (ericnbello.com) to access the site. While AWS offers its own DNS service called Route 53, I’ve already been more than familiar with editing DNS records for other domains so I chose to remain with the original provider I registered this one with (Google). I edited the domain’s DNS entries to point to the CloudFront distribution and verify ownership, and was able to receive a custom SSL certificate from CloudFront and my site was up and running at the address you’re currently on.`,
            `Being built in Next.js, the website already had plenty of JavaScript. So my approach here was to create a simple VisitorCounter component and render it in the footer of each page. I didn’t get fancy, so a slim border to create a box around the view count was sufficient.`,
            `The visitor counter needed a database to store and update the visitor count value. Amazon's DynamoDB, a NoSQL database service, perfectly suited this requirement. Being on the AWS Free Tier pricing, I opted for on-demand pricing to have zero cost right now while also ensuring minimal ongoing costs for this project once the initial year of the free tier ends. I created a table with a partition key and an attribute name of Quantity whose initial value of 0 would be updated.`,
            `Next up was getting the component on the site to communicate with the DynamoDB database. Amazon's API Gateway and Lambda services worked hand in hand to achieve this, ensuring smooth interaction between my site and database. Since I enjoy the simplicity of Python syntax, I decided to use it for the Lambda function along with the boto3 library which was recommended for the challenge. For this part, I relied heavily on the AWS documentation for working with DynamoDB and updating table values. When the function was completed, I had a functional API to work with in the API Gateway and I was able to start handling requests from the web app after resolving some CORS issues that came up.`,
            `In order to avoid manual configuration within the AWS console (which is easy to do incorrectly!), I defined the necessary resources, including DynamoDB, API Gateway, and Lambda function, using an AWS Serverless Application Model (SAM) template. It uses CloudFormation to deploy the resources, which I really enjoyed learning about more in depth. The AWS SAM CLI facilitated smooth deployment from inside my VSCode terminal.`,
            `To ensure seamless updates and eliminate manual intervention, I employed source control for both the back-end API and front-end website in a GitHub repository.`,
            `To maintain a consistent deployment process, I used GitHub Actions to set up continuous integration and deployment (CI/CD) for the front and back-end code. Whenever I pushed updates to the website code, SAM template or Python code, GitHub Actions automatically ran. This updated the S3 bucket and deployed the SAM application to AWS, ensuring a streamlined and efficient development workflow. Additionally, I ensured the CloudFront cache was invalidated to reflect the latest changes. It's important to note that I followed best practices and refrained from committing AWS credentials to source control to ensure security.`,
            `Completing the Cloud Resume Challenge was an enriching experience that not only demonstrated my skills in AWS but also expanded my skills in web development, automation, and infrastructure as code. By navigating through certifications, HTML and CSS styling, AWS services, JavaScript/React implementation, database integration, and CI/CD pipelines, I gained a comprehensive understanding of cloud engineering and DevOps practices. This project served as a testament to my ability to deliver professional-grade solutions while leveraging cutting-edge technologies. I am excited to apply my newfound knowledge and skills in future roles as a developer, cloud engineer, or DevOps professional.` 
          ],
        },
      ],
      tags: [`AWS, S3, CloudFront, DynamoDB, Lambda, API Gateway, SAM CLI, CloudFormation, GitHub Actions`]
    }
  ],
  projects: [
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
      tags: ['React', 'Tailwind', 'Firebase', 'React Router', ]
    },
    {
      pid: "weather-forecast",
      title: "Weather Forecast",
      route: "/projects/weather-forecast",
      overview: "",
      demoUrl: "https://weather-forecast-ericnbello.onrender.com",
      githubUrl: "https://github.com/ericnbello/weather",
      imgUrl: "/enhanced-weather-app-screenshot.png",
      description: [``, ``, ``
      ],
      tags: ["Python", "Django", "Tailwind", "JavaScript", "API"]
    },
    {
      pid: "country-searcher",
      title: 'Country Searcher',
      route: "/projects/country-searcher",
      overview: "",
      demoUrl: 'https://country-searcher-ericnbello.netlify.app/',
      githubUrl: "https://github.com/ericnbello/country-searcher",
      imgUrl: '/country-searcher-screenshot.png',
      description: [``, ``, ``
      ],
      tags: ["React", "Tailwind", "API"]
    },
    {
      pid: "serverless-website",
      title: "Serverless Website",
      route: "/projects/serverless-website",
      overview: "",
      demoUrl: "https://www.cloud.ericnbello.com",
      githubUrl: "https://github.com/ericnbello/cloud-resume",
      imgUrl: "/serverless-website.png",
      description: [``, ``, ``
      ],
      tags: ['AWS', 'Next.js', 'Tailwind', 'Python']
    },
    {
      pid: "spa-reservation-system",
      title: "Spa Reservations",
      route: "/projects/spa-reservation-system",
      overview: "",
      demoUrl: "https://spa-reservations.onrender.com",
      githubUrl: "https://github.com/ericnbello/spa-reservations",
      imgUrl: "/spa-reservations-screenshot.png",
      description: [``, ``, ``
      ],
      tags: ["Java", "Spring Boot", "Tailwind", "Thymeleaf"]
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
      tags: ['Next.js, Tailwind, Supabase, Stripe']
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
      tags: ['React, Tailwind, React Router']
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
      `I'm Eric, a versatile IT professional eager to leverage my skills and passion across a broad spectrum of technology roles. My journey began with a deep love for web development, which led me to pursue a degree in computer engineering. Over the years, I've expanded my expertise to encompass not only cloud technology but also IT support and systems administration.`,

      `Armed with AWS certifications and hands-on experience in diverse IT environments, I thrive on exploring the ever-evolving tech landscape. Whether it's optimizing cloud infrastructure, managing IT support operations, or ensuring the smooth running of enterprise systems, I find joy in solving complex problems and enhancing technology solutions.`,

      `I'm excited to contribute my knowledge and enthusiasm to a dynamic team, helping to drive innovation and efficiency in the IT field. Let's connect and see how we can achieve great things together!`
    ],
    currentProject: " ",
    currentProjectUrl: " ",
  },
  experience: [
    {
      title: "Web Developer",
      company: "",
      year: "2023",
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
    "/resume",
  socialLinks: {
    instagram: "",
    twitter: "https://twitter.com/ericnbello",
    linkedin: "https://linkedin.com/in/ericnbello",
    github: "https://github.com/ericnbello",
    facebook: "",
  },
  certifications: [
    {
      name: `AWS Certified Cloud Practitioner`,
      imgUrl: `/aws-certified-cloud-practitioner.png`,
      link: `https://www.credly.com/badges/622e55f4-6f8c-405f-a821-7174736de80c/public_url`
    },
    {
      name: `CompTIA Network+`,
      imgUrl: `/comptia-network-ce-certification.1.png`,
      link: `https://www.credly.com/badges/1b0b8be2-c9e8-444b-a5f5-4889f09b4b69/public_url`
    },
    {
      name: `CompTIA Security+`,
      imgUrl: `/comptia-security-ce-certification.png`,
      link: `https://www.credly.com/badges/736c7aab-22fd-4689-8faf-5c1ed4c6f972/public_url`
    },
    {
      name: `CompTIA CySA+`,
      imgUrl: `/comptia-cysa-ce-certification.png`,
      link: `https://www.credly.com/badges/bd9f6d71-2c3f-47a7-826b-90983067f698/public_url`
    }
  ],
  technologies: [
    {
      name: `Amazon Web Services`,
      imgUrl: `https://profilinator.rishav.dev/skills-assets/amazonwebservices-original-wordmark.svg`
    },
    {
      name: `Terraform`,
      imgUrl: `https://profilinator.rishav.dev/skills-assets/terraformio-icon.svg`
    },
    {
      name: `Docker`,
      imgUrl: `https://profilinator.rishav.dev/skills-assets/docker-original-wordmark.svg`
    },
    {
      name: `Python`,
      imgUrl: `https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/python/python.png`
    },
    {
      name: `Linux`,
      imgUrl: `https://profilinator.rishav.dev/skills-assets/linux-original.svg`
    },
    {
      name: `Git`,
      imgUrl: `https://profilinator.rishav.dev/skills-assets/git-scm-icon.svg`
    },
    {
      name: `Google Cloud Platform`,
      imgUrl: `https://profilinator.rishav.dev/skills-assets/google_cloud-icon.svg`
    },
    {
      name: `Azure`,
      imgUrl: `https://profilinator.rishav.dev/skills-assets/microsoft_azure-icon.svg`
    },
    {
      name: `JavaScript`,
      imgUrl: `https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png`,
    },
    {
      name: `HTML`,
      imgUrl: `https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png`
    },
    {
      name: `CSS`,
      imgUrl: `https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png`
    },
    {
      name: `Git`,
      imgUrl: `https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png`
    },
    {
      name: `Firebase`,
      imgUrl: `https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/firebase/firebase.png`
    }
  ]
};

export default userData;
