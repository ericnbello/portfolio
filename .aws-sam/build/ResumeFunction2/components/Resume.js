export default function Resume() {
  return (
    <main className="resume-body">
      <div className="wrapper">
        <div className="sidebar-wrapper">
            <div className="profile-container">
              <h1 className="name">Eric Bello</h1>
              <h3 className="tagline">Cloud Engineer</h3>
            </div>
            
            {/* <!--//profile-container--> */}

            <div className="contact-container container-block ">
              <h2 className="container-block-title flex justify-center md:justify-start">Contact</h2>
                <ul className="list-unstyled contact-list">
                    <li className="email flex justify-center md:justify-start"><i className="fa fa-envelope"></i><a href="mailto:ericnbello@icloud.com">ericnbello@icloud.com</a></li>
                    {/* <li className="phone flex justify-center md:justify-start"><i className="fa fa-phone"></i><a href="###">phone number</a></li> */}
                    <li className="linkedin flex justify-center md:justify-start"><i className="fa fa-linkedin"></i><a rel="noopener" href="https://linkedin.com/in/ericnbello" target="_blank">linkedin/in/ericnbello</a></li>
                    {/* <li className="medium flex justify-center md:justify-start"><i className="fa fa-medium"></i><a href="###" target="_blank">medium/...</a></li> */}
                    <li className="github flex justify-center md:justify-start"><i className="fa fa-github"></i><a rel="noopener" href="https://github.com/ericnbello" target="_blank">github/ericnbello</a></li>
                    <li className="twitter flex justify-center md:justify-start"><i className="fa fa-twitter"></i><a rel="noopener" href="https://twitter.com/ericnbello" target="_blank">@ericnbello</a></li>
                </ul>
            </div>
            
            {/* <!--//contact-container--> */}
            <div className="education-container container-block">
                <h2 className="container-block-title flex justify-center md:justify-start">Education</h2>
                <div className="item">
                    <h4 className="flex justify-center md:justify-start">Bachelor of Science - Computer Engineering</h4>
                    <h5 className="meta flex justify-center md:justify-start">Florida International University</h5>
                    {/* <div className="time flex justify-center md:justify-start">Years in school</div> */}
                </div> {/*<!--//item--> */}
            </div> {/*<!--//education-container-->*/}

        </div>
        
        {/* <!--//sidebar-wrapper--> */}

        <div className="main-wrapper">
            <section className="section summary-section">
                <h2 className="section-title">
                  {/* <i className="fa fa-user"></i> */}
                  Summary</h2>
                <hr />
                <div className="summary">
                    <p>Highly motivated and ambitious cloud operations enthusiast with a background in customer service, technical support, and system administration. Passionate about implementing automated cloud-based solutions and staying updated with the latest technologies to drive seamless operations and enhance business functionality.</p>
                </div> {/*<!--//summary-->*/}
            </section> {/*<!--//section-->*/}

            <section className="section summary-section">
                <h2 className="section-title">
                  {/* <i className="fa fa-user"></i> */}
                  Skills</h2>
                <hr />
                <div className="summary">
                    <p className='font-bold'>Platforms: 
                      <span className='font-medium'> Amazon Web Services (AWS), Google Cloud Platform (GCP), Azure, VMWare</span>
                    </p>
                </div> {/*<!--//summary-->*/}
                <div className="summary">
                    <p className='font-bold'>Tools & Software: 
                      <span className='font-medium'> Terraform, Docker, Jenkins, Active Directory, Office 365, Outlook, Cisco AnyConnect, Duo, Slack</span>
                    </p>
                </div>
                <div className="summary">
                    <p className='font-bold'>Networking: 
                      <span className='font-medium'> LAN, Mesh Wi-Fi Network Systems, DHCP, VPN, DNS, Wireshark</span>
                    </p>
                </div>
                <div className="summary">
                    <p className='font-bold'>Programming & Languages: 
                      <span className='font-medium'> JavaScript, HTML5, CSS3, Python</span>
                    </p>
                </div>
                <div className="summary">
                    <p className='font-bold'>Certifications: 
                      <span className='font-medium'> AWS Certified Cloud Practitioner CCP, CompTIA Network+, Security+, CySA+</span>
                    </p>
                </div>
            </section> {/*<!--//section-->*/}

            <section className="section experiences-section">
                <h2 className="section-title">
                  {/* <i className="fa fa-bar-chart"></i> */}
                  Cloud Projects</h2>
                  {/* PROJECTS SECTION */}
                
                {/* --- PROJECT 1 ----*/}
                <div className="company">
                  <div className="company-header">Serverless Website
                  </div>
                </div>
                <div className="item">
                      <div className="meta">
                        <div className="upper-row">
                            {/* <h3 className="job-title">Serverless website built with Next.js, Tailwind, and AWS.</h3> */}
                            {/* <div className="time">Live demo</div> */}
                        </div> {/*<!--//upper-row-->*/}
                    </div> {/*<!--//meta-->*/}
                    <div className="details">
                      <ul className="fa-ul">
                        <li><i className="fa-li fa fa-angle-right"></i>- Built responsive, serverless site with view counter</li>
                        <li><i className="fa-li fa fa-angle-right"></i>- Website front end is deployed on a custom domain through CloudFront with an S3 origin</li>
                        <li><i className="fa-li fa fa-angle-right"></i>- View counter uses a Lambda function written in Python to update DynamoDB&apos;s atomic counter</li>
                        <li><i className="fa-li fa fa-angle-right"></i>- Uses API Gateway to trigger the function and displays the counter using JavaScript</li>
                        <li><i className="fa-li fa fa-angle-right"></i>- Automated infrastructure using CloudFormation and AWS Serverless Application Model (SAM)</li>
                        <li><i className="fa-li fa fa-angle-right"></i>- ​​Deployed with GitHub Actions for CI/CD pipeline</li>
                      </ul>
                    </div>
                </div>
                {/* --END OF PROJECT 1--*/}

                {/* --- PROJECT 2 ----*/}
                <div className="company">
                  <div className="company-header">Active Directory Home Lab
                  </div>
                </div>
                <div className="item">
                      <div className="meta">
                        <div className="upper-row">
                            {/* <h3 className="job-title">Current Job Title</h3> */}
                            {/* <div className="time">Live Demo</div> */}
                        </div> {/*<!--//upper-row-->*/}
                    </div> {/*<!--//meta-->*/}
                    <div className="details">
                      <ul className="fa-ul">
                        <li><i className="fa-li fa fa-angle-right"></i>- Created VMWare home lab consisting of Windows Server 2016 domain controller, linked clones, and RDP</li>
                        <li><i className="fa-li fa fa-angle-right"></i>- Added Windows 10 client machines to Windows Server 2016 domain</li>
                        <li><i className="fa-li fa fa-angle-right"></i>- Created and modified Active Directory template user accounts to hold various properties</li>
                        <li><i className="fa-li fa fa-angle-right"></i>- Configured Window Server 2016 domain settings, server name, TCP/IP settings, and remote desktop</li>
                        <li><i className="fa-li fa fa-angle-right"></i>- Created and linked Group Policy Objects (GPO) in Active Directory</li>
                        <li><i className="fa-li fa fa-angle-right"></i>- Setup Azure AD Connect for hybrid Azure AD join and seamless SSO using password hash sync</li>
                      </ul>
                    </div>
                </div>
                {/* --END OF PROJECT 2--*/}

                {/* --- PROJECT 3 ----*/}
                {/* <div className="company">
                  <div className="company-header">Serverless Website
                  </div>
                </div>
                <div className="item">
                      <div className="meta">
                        <div className="upper-row">
                            <h3 className="job-title">Current Job Title</h3>
                            <div className="time">XXX - Present</div>
                        </div>
                    </div>
                    <div className="details">
                      <ul className="fa-ul">
                        <li><i className="fa-li fa fa-angle-right"></i>Job responsibility one.</li>
                        <li><i className="fa-li fa fa-angle-right"></i>Job responsibility two.</li>
                      </ul>
                    </div>
                </div> */}
                {/* --END OF PROJECT 3--*/}

                {/* <hr />
                <div className="company"><a className="company-header" href="###" target="_blank">Previous Company Name,</a> City, State</div>
                <div className="item">
                    <div className="meta">
                        <div className="upper-row">
                            <h3 className="job-title">Previous Job Title</h3>
                            <div className="time">August 2017 - March 2018</div>
                        </div>
                    </div>
                    <div className="details">
                      <ul className="fa-ul">
                        <li><i className="fa-li fa fa-angle-right"></i>Job responsibility one.</li>
                        <li><i className="fa-li fa fa-angle-right"></i>Job responsibility two.</li>                
                      </ul>
                    </div>
                    <br />
                    <div className="meta">
                        <div className="upper-row">
                            <h3 className="job-title">Previous Job Title</h3>
                            <div className="time">October 2015 - August 2017</div>
                        </div>
                    </div>
                    <div className="details">
                      <ul className="fa-ul">
                        <li><i className="fa-li fa fa-angle-right"></i>Job responsibility one.</li>
                        <li><i className="fa-li fa fa-angle-right"></i>Job responsibility two.</li>                </ul>
                    </div>
                </div> */}
            </section>

            <section className="section projects-section">
                <h2 className="section-title">
                  {/* <i className="fa fa-black-tie"></i> */}
                  Experience</h2>
                <hr />
                <div className="company">
                  <div className="company-header">Web Developer
                  </div>
                </div>
                <div className="item">
                    <div className="meta">
                        <div className="upper-row">
                            <h3 className="job-title">Freelance/Independent, Miami, FL</h3>
                            <div className="time">Jan 2022 - Present</div>
                        </div>{/*<!--//upper-row-->*/}
                    </div>{/*<!--//meta-->*/}
                    <div className="details">
                      <ul className="fa-ul">
                        <li><i className="fa-li fa fa-angle-right"></i>- Compose responsive websites and evaluate improvement strategies by researching new technologies</li>
                        <li><i className="fa-li fa fa-angle-right"></i>- Facilitate positive client relations through professional interaction, issue resolution, and iteration delivery</li>
                        <li><i className="fa-li fa fa-angle-right"></i>- Employ multiple cloud-based applications to troubleshoot technical problems and communicate with clients</li>
                        <li><i className="fa-li fa fa-angle-right"></i>- Continuously improve project delivery process which expedited customer orders and ensured swift delivery</li>
                      </ul>
                    </div>{/*<!--//details-->*/}
                </div>{/*<!--//item-->*/}
                <hr />
                <div className="company"><a className="company-header" href="###" target="_blank">Operations Manager</a></div>
                <div className="item">
                    <div className="meta">
                        <div className="upper-row">
                            <h3 className="job-title">Solstice Naturals, Miami, FL</h3>
                            <div className="time">Dec 2016 - Jan 2022</div>
                        </div>{/*<!--//upper-row-->*/}
                    </div>{/*<!--//meta-->*/}
                    <div className="details">
                      <ul className="fa-ul">
                        <li><i className="fa-li fa fa-angle-right"></i>- Founded online business, overseeing daily operations in technology, product development, and manufacturing</li>
                        <li><i className="fa-li fa fa-angle-right"></i>- Transitioned to management role directing day-to-day operations with extensive knowledge of products</li>
                        <li><i className="fa-li fa fa-angle-right"></i>- Installed and configured hardware devices and software to meet business requirements</li>
                        <li><i className="fa-li fa fa-angle-right"></i>- Regularly administered software updates, resolved hardware and network issues on various operating systems</li>
                      </ul>
                    </div>{/*<!--//details-->*/}
                </div>{/*<!--//item-->*/}
            </section>
          </div>
        </div> 
        {/* <Footer /> */}
    </main>
  )
}