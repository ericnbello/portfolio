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
            `Although the domain given by CloudFront (https://d2lcr9xcxsvqk7.cloudfront.net) had a certificate, I wanted to use my own custom one (cloud.ericnbello.com) to access the site. While AWS offers its own DNS service called Route 53, I’ve already been more than familiar with editing DNS records for other domains so I chose to remain with the original provider I registered this one with (Google). I edited the domain’s DNS entries to point to the CloudFront distribution and verify ownership, and was able to receive a custom SSL certificate from CloudFront and my site was up and running at the address you’re currently on.`,
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
      name: `JavaScript`,
      imgUrl: `https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png`,
    },
    {
      name: `Python`,
      imgUrl: `https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/python/python.png`
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
      name: `Java`,
      imgUrl: `https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/java/java.png`
    },
    {
      name: `Git`,
      imgUrl: `https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png`
    },
    {
      name: `React`,
      imgUrl: `https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png`
    },
    {
      name: `Firebase`,
      imgUrl: `https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/firebase/firebase.png`
    },
    {
      name: `MySQL`,
      imgUrl: `https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mysql/mysql.png`
    },
    {
      name: `MongoDB`,
      imgUrl: `https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png`
    },
    {
      name: `PostgreSQL`,
      imgUrl: `https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/postgresql/postgresql.png`
    },
  ]
};

export default userData;
