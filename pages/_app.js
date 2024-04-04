import 'nextra-theme-blog/style.css'
import Head from 'next/head'

import '../styles/main.css'

export default function Nextra({ Component, pageProps }) {
  return (
    <>
      <div>
   <h4>1. From this list, rank your 5 most favourite and 5 least favourite support tasks. Provide a
      brief explanation for each.
   </h4>
   <ul>
      5 most favourite:
      <li>a. Dig through logs to troubleshoot a customer's broken project: Reviewing the logs in order to troubleshoot a customer's malfunctioning project not only provides an opportunity for me to acquire new insights but also serves to minimize the customer's burden in resolving the issue.</li>
      <li>b. Write and maintain support articles and docs pages: It is always valuable to create knowledge base articles to assist both internal and external stakeholders in streamlining processes and resolving issues effectively.</li>
      <li>c. Manage a support team: I am actively involved in managing a global support team, fostering collaboration among team members, assisting in problem identification, and guiding the team towards solutions. I maintain close monitoring of issues and ensure timely and accurate reporting through appropriate channels.</li>
      <li>d. Work with the product team to develop a new feature based on feedback from customers: I actibvely collaborate with the product team to devise a new feature in response to customer feedback. It would be beneficial to establish an internal product feedback ticket to ensure the team can cross-validate and coordinate the scheduling of the future release effectively.
      </li>
      <li>e. Work with engineering teams during incidents and provide updates to internal and external stakeholders: I strongly believe in collaborating with engineering teams during incidents to provide timely updates to both internal and external stakeholders. This ensures that issues are resolved promptly, allowing customers to use our services and products without any hassle.
      </li>
   </ul>
   <ul>
      5 least favourite:
      <li>a. Help resolve billing issues for customers: We need to ensure that any billing issues are directed through the appropriate channels, such as the accounts team or sales team, to ensure they are resolved effectively.</li>
      <li>
         b. Respond to queries on Twitter, Reddit, Hacker News and other 3rd party sites: I would be delighted to participate in a discussion regarding our platform, service, or products. However, we have noticed an influx of low-quality content on the internet that is not worth our time.
      </li>
      <li>c. Analyze hundreds of support tickets to spot trends the product team can use: I am delighted to assist in analyzing numerous support tickets to identify patterns and insights for the product team, which is a crucial aspect of enhancing the product development life cycle.
      </li>
      <li>d. Engage multiple users at once in a public discussion, to answer their questions and troubleshoot problems:  I believe handling issues and inquiries on a case-by-case basis to prevent overwhelming ourselves and duplicating efforts. By understanding customer concerns and showing empathy, we can improve the overall customer experience.</li>
      <li>e. Run ticket review sessions to make sure tone is consistent: Understanding the tone and situation a customer is experiencing can be challenging, but it is crucial to prioritize listening to them attentively and comprehending where their frustrations lie. It's essential to approach the issue from the perspective of the customer's feelings and the challenges they are facing, rather than attributing it solely to a technical problem or personal interaction.</li>
   </ul>
   <h4>2. What do you want to learn or do more of at work?</h4>
   <p>I am enthusiastic about deepening my understanding and expertise in the technology field, particularly in various cloud-based products and tools available in the market. I am eager to delve further into the fundamentals and operational processes.</p>
   <p>I aim to cultivate more connections both internally and externally to enrich my portfolio and bring additional value to company. My goal is to assist our valued customers in enhancing their product experience.
   </p>
   <h4>3. Describe how you solved a challenge or technical issue that you faced in a previous role (preferably in a previous support role). How did you determine that your solution was successful?</h4>
   <ul>
      <li>Understanding customer concerns and query that has been reported.</li>
      <li>Looking into the records and activity for the customer application.
      </li>
      <li>Possible cause of the issue, such as error logs and souce of the problem.</li>
      <li>Address and maintaining a timely reponse cadence, so that customer knows that they are being heard.</li>
      <p>I recommend following the action items/steps provided to resolve the issue efficiently. If further clarification is needed, I refer to our documented articles for detailed assistance. Additionally, arranging a video/phone call at their earliest convenience could also help address the problem effectively. Customer feedback is greatly appreciated as it allows us to identify areas for improvement and enhance the overall customer service experience, knowking if my solution was helpful for them. </p>
   </ul>
   <h4>4. When would you choose to use Edge Functions, Serverless Functions, or Edge
      Middleware with Vercel?
   </h4>
   <p>Edge Functions are executed at the edge of Vercel's network, enabling you to run code in proximity to your users. This leads to improved response times.</p>
   <p>Serverless Functions are designed to run in response to HTTP requests, enabling you to create dynamic backend logic without the need to handle server infrastructure.</p>
   <p>The Edge middleware operates before the backend logic, whereas the Edge function is designed to act as the backend logic.</p>
   <p>Edge Functions, Serverless Functions, and Edge Middleware are distinct tools offered by Vercel to serve various purposes that depend on the specific requirements of your application and the level of control and performance optimization you need at the edge.</p>
   <h4>5. Imagine a customer writes in requesting help with a build issue on a framework or
      technology that you've not seen before. How would you begin troubleshooting this and
      what questions would you ask the customer to understand the situation better?
   </h4>
   <p>First, I will gather all the necessary information from the customer to fully understand the source of the issue</p>
   <p>I will ask questions to customer, to explain and provide me the detailed steps of how to reproduce the issue they are experiencing.  </p>
   <p>I will thoroughly investigate the issue by reviewing error logs, previous tickets, our knowledge base articles, and documentation. I will also conduct online searches to identify and address the error.</p>
   <p>This information will allow me to verify the problem before engaging with our internal teams and members for assistance. </p>
   <h4>6. The customer from question 5 replies to your response with the below:
      “I’m so frustrated. I’ve been trying to make this work for hours and I just can’t figure it
      out. It must be a platform issue so just fix it for me instead of asking me questions.”
      Please write a follow-up reply to the customer.
   </h4>
   <p>I completely understand your concern regarding the issue at hand. I am currently collaborating with our team to thoroughly investigate and address the matter promptly.
      If you are available, I would be delighted to arrange a brief call to further discuss the issue you are experiencing. This will allow me to share any additional updates and provide insight into our current progress.
   </p>
   <h4>7. A customer writes in to the Helpdesk asking "How do I do a redirect from the /blog
      path to https://example.com?" Please write a reply to the customer. Feel free to add any
      information about your decision making process after the reply.
   </h4>
  <p>To redirect the /blog path to https://example.com, you can consider implementing a rewrite rule. More information on this can be found in our documentation at:"https://nextjs.org/docs/pages/building-your-application/routing/redirecting#redirects-in-nextconfigjs"
   </p>
      <p>      Utilizing the redirects option in the next.config.js file enables you to redirect incoming request paths to alternative destination paths.</p>
        
   <p>Assiting them with a documentation can be really useful to follow the steps to achieve their use-case. It will reduce their time, effort and thereby enhancing the customer experience and satisfaction of our service on our platform.</p>
   <h4>8. A customer is creating a site and would like their project not to be indexed by search
      engines. Please write a reply to the customer. Feel free to add any information about
      your decision making process after the reply.
   </h4>
   <ol>
      <p>There are several strategies you can employ to control how search engines index your site.
      </p>
      <li>Robots.txt File: By creating and uploading a "robots.txt" file to your site's root directory, you can specify which pages or sections should be excluded from search engine indexing.</li>
      <li>Meta Tags: Including specific meta tags in your Next.js site's HTML can help direct search engines to avoid indexing certain pages.</li>
      <li>Password Protection: Implementing password protection for your site or specific pages adds an extra layer of security to ensure only authorized users can access the content.</li>
      <li>Server-side Rendering (SSR) Control: Utilizing Next.js's server-side rendering capabilities allows for conditionally rendering meta tags or implementing server-side logic to control indexing based on your preferences.</li>
      <li>Disallow Directories: By disallowing specific directories in the robots.txt file, you can restrict search engine crawlers from accessing those parts of your site.
      </li>
   </ol>
   <h4>9. What do you think is one of the most common problems which customers ask Vercel for
      help with? How would you help customers to overcome common problems, short-term
      and long-term?
   </h4>
   <p>Community engagement is a critical aspect that customers often inquire about, particularly concerning deployment-related issues.</p>
   <div>
      <ul>
         Short term:
         <li>Ensure prompt responses to customer queries to address their immediate concerns.</li>
         <li>Helping the team, by creating detailed step-by-step troubleshooting guides for common issues. Include screenshots, videos, or examples to make the instructions clear and easy to follow.</li>
      </ul>
      <ul>
         Long Term:
         <li>Focus on continuous improvement, regularly collecting feedback from customers and analyze common problems. Use this feedback to iterate and improve our products or services continuously.
         </li>
         <li>Conducting  valuable training programs, webinars, and workshops aimed at educating customers on best practices, tips, and advanced techniques.
         </li>
         <li>Implementing proactive monitoring systems to detect issues before they escalate is crucial for maintaining a positive customer experience. Setting up automated alerts to notify customers of potential problems and offer preemptive solutions can help to prevent issues from arising in the first place. 
         </li>
      </ul>
   </div>
   <h4>10. How could we improve or alter this familiarisation exercise?</h4>
   <p>The exercise was engaging, and I appreciate the detailed questions regarding the position. In order to streamline the process and ensure timely submission, perhaps reducing the number of questions would be beneficial.</p>
</div>
    </>
  )
}
