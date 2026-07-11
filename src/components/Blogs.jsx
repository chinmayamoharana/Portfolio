import { useState } from "react";
import { AnimatePresence, motion as Motion } from "framer-motion";

export default function Blogs() {
  const [openBlogs, setOpenBlogs] = useState({});
  const [showAllBlogs, setShowAllBlogs] = useState(false);

  const blogs = [
    {
      title: "Authentication, Authorization, and Session Management in Modern Web Apps",
      preview:
        "Authentication, authorization, and session management work together to keep modern web applications secure and user-specific.",
      content: `
Authentication, authorization, and session management are closely related but they solve different problems in a web application.

Authentication answers the question, "Who are you?" It verifies a user's identity through methods like email and password login, token-based authentication, OTP, or social sign-in.

Authorization answers the question, "What are you allowed to do?" After a user is authenticated, the system checks whether they can access a route, perform an action, or view certain data. This is where concepts like role-based access control become important.

Session management keeps track of a user's state across requests. In traditional applications, this is often handled using server-side sessions. In modern SPA and API-driven apps, session state is commonly managed with JWT access tokens, refresh tokens, or secure cookies.

A good implementation needs more than just login logic. Developers should think about token expiration, logout behavior, protected routes, refresh flows, and secure storage. Sensitive data should never be exposed to unauthorized users, and session handling should always be designed with security in mind.

For full-stack apps built with React and Django REST Framework, a strong security flow usually combines authentication for identity, authorization for permissions, and session management for continuity. Together, these three layers create a reliable and scalable user experience.
`,
      tech: "Security, React, Django REST Framework",
    },
    {
      title: "JWT Authentication in React and Django REST Framework",
      preview:
        "JWT authentication is one of the most common ways to secure modern full-stack applications built with React and Django REST Framework.",
      content: `
JWT authentication is widely used in full-stack applications because it provides a secure and scalable way to manage user sessions between frontend and backend systems.

In a React and Django REST Framework setup, the Django backend usually handles user login and returns an access token and, in many cases, a refresh token. The React frontend stores the token safely and sends it in the Authorization header when requesting protected API endpoints.

One of the major advantages of JWT is that it supports stateless authentication. The server does not need to store session data for every logged-in user, which makes the architecture more scalable for larger applications.

In practical projects, JWT authentication is often combined with role-based access control so different users can access different parts of the system. For example, an admin may manage users and reports, while a viewer may only read dashboard data.

To build JWT authentication properly, developers must also think about token expiration, refresh logic, route protection, and secure API access. When implemented correctly, React and Django REST Framework create a strong and production-ready authentication flow for dashboards, portals, and business applications.
`,
      tech: "React, Django REST Framework, JWT",
    },
    {
      title: "Building REST APIs with Django REST Framework",
      preview:
        "Django REST Framework (DRF) is a powerful toolkit used to build scalable REST APIs for modern web and mobile applications.",
      content: `
Django REST Framework allows developers to quickly build secure and scalable APIs. It provides powerful features such as serializers, authentication systems, and generic views that simplify backend development.

One of the biggest advantages of DRF is the serializer system which converts Django models into JSON data that frontend applications can easily consume.

Developers can also implement authentication methods like token authentication or JWT to protect APIs. DRF makes it easy to build production-ready APIs for SaaS platforms, dashboards, mobile applications, and full stack systems.

Because of its flexibility and strong Django ecosystem, DRF has become one of the most widely used tools for building backend APIs in Python.
`,
      tech: "Django REST Framework, APIs",
    },
    {
      title: "Django vs Node.js for Backend Development",
      preview:
        "Choosing the right backend technology is important when designing scalable applications.",
      content: `
Django and Node.js are both powerful backend technologies but they are designed for slightly different purposes.

Django is a high-level Python framework that includes many built-in features such as authentication, ORM database management, and strong security protections. This makes it ideal for building data-driven applications and enterprise platforms.

Node.js uses an event-driven architecture that allows it to handle many concurrent connections efficiently. It is commonly used for real-time applications like chat systems, notifications, and streaming platforms.

The decision between Django and Node.js usually depends on the project requirements. Django is excellent for structured backend systems, while Node.js is often chosen for real-time applications and microservices.
`,
      tech: "Django, Node.js",
    },
    {
      title: "Designing Scalable Backend APIs",
      preview:
        "Scalability is critical when building backend systems that must support growing user traffic.",
      content: `
Designing scalable APIs requires careful planning of database queries, application structure, and caching strategies.

Developers should optimize database operations using indexing and reduce unnecessary queries. Implementing caching systems like Redis can significantly improve performance.

Another important practice is API versioning. Versioning ensures that updates to an API do not break existing applications.

By following these principles, developers can build APIs that remain fast, maintainable, and reliable as applications scale.
`,
      tech: "Backend Architecture",
    },
    {
      title: "Building Full Stack Applications with React and Django",
      preview:
        "React and Django together create a powerful stack for building modern full-stack web applications.",
      content: `
In modern development, React handles the frontend user interface while Django manages backend logic and data processing.

Django typically exposes REST APIs which the React frontend consumes using tools like Axios or Fetch. This separation allows developers to scale frontend and backend systems independently.

This architecture is widely used in dashboards, SaaS platforms, and e-commerce systems because it allows teams to build highly interactive user experiences while maintaining a strong backend structure.
`,
      tech: "React, Django",
    },
    {
      title: "Understanding Retrieval-Augmented Generation (RAG)",
      preview:
        "Retrieval-Augmented Generation (RAG) combines AI models with external knowledge sources to generate more accurate and up-to-date responses.",
      content: `
Retrieval-Augmented Generation (RAG) is an AI architecture that improves the quality of responses generated by Large Language Models (LLMs). Instead of relying only on the information the model learned during training, RAG retrieves relevant information from external knowledge sources before generating an answer.

The RAG process consists of three main steps. First, user documents such as PDFs, Word files, web pages, or databases are converted into vector embeddings and stored in a vector database like Pinecone, ChromaDB, Weaviate, or FAISS. This process is called indexing.

When a user asks a question, the query is also converted into an embedding. The vector database performs a similarity search and retrieves the most relevant documents related to the query.

Finally, both the user's question and the retrieved documents are sent to a Large Language Model such as GPT, Gemini, Claude, or Llama. The model uses this additional context to generate a more accurate, reliable, and context-aware response.

RAG offers several advantages over traditional AI models. It provides access to up-to-date information without retraining the model, reduces hallucinations, improves answer accuracy, and enables AI applications to use organization-specific data securely. Because only relevant documents are retrieved, the model can answer questions based on private company knowledge while maintaining high performance.

RAG is widely used in AI chatbots, customer support systems, healthcare assistants, legal document search, enterprise knowledge management, educational platforms, and recommendation systems. It has become one of the most popular architectures for building intelligent AI applications that require accurate and personalized responses.
`,
      tech: "RAG, LLM, Vector Database, Embeddings",
    },
    {
      title: "Google Cloud vs AWS: Choosing the Right Cloud Platform",
      preview:
        "Google Cloud Platform (GCP) and Amazon Web Services (AWS) are two of the most popular cloud providers, offering scalable infrastructure and managed services for modern applications.",
      content: `
Cloud computing has become an essential part of modern software development, enabling businesses to deploy, scale, and manage applications efficiently. Among the leading cloud providers, Amazon Web Services (AWS) and Google Cloud Platform (GCP) are widely adopted by startups, enterprises, and developers around the world.

Amazon Web Services (AWS) is the world's largest cloud platform, offering over 200 fully managed services. It provides solutions for computing, storage, databases, networking, machine learning, security, analytics, and DevOps. Popular AWS services include EC2 for virtual servers, S3 for object storage, Lambda for serverless computing, RDS for managed databases, CloudFront for content delivery, and ECS/EKS for containerized applications. AWS is known for its extensive global infrastructure, reliability, and broad service ecosystem.

Google Cloud Platform (GCP) is Google's cloud computing platform designed for building scalable, secure, and data-driven applications. GCP is particularly strong in artificial intelligence, machine learning, big data analytics, and Kubernetes. Key services include Compute Engine for virtual machines, Cloud Storage, Cloud Run for serverless containers, Google Kubernetes Engine (GKE), BigQuery for analytics, Cloud SQL, Vertex AI, and Firebase for web and mobile application development.

When comparing the two platforms, AWS provides the largest range of cloud services and is often preferred for enterprise applications requiring extensive infrastructure and global availability. Google Cloud, on the other hand, excels in AI, machine learning, data analytics, and container-based deployments, making it an excellent choice for modern cloud-native applications.

Both platforms support modern development practices such as CI/CD pipelines, Docker containers, Kubernetes orchestration, serverless computing, API management, monitoring, logging, and identity management. They also provide strong security features including IAM, encryption, firewall protection, and compliance certifications.

Choosing between AWS and Google Cloud depends on project requirements, team expertise, pricing considerations, and the services needed. AWS is ideal for organizations seeking a mature and comprehensive cloud ecosystem, while Google Cloud is well suited for AI-powered applications, data-intensive workloads, and Kubernetes-first architectures.

Regardless of the platform chosen, both AWS and Google Cloud enable developers to build highly available, scalable, and secure applications that can serve users across the globe.
`,
      tech: "AWS, Google Cloud Platform (GCP), Cloud Computing, DevOps",
    },
  ];

  const visibleBlogs = showAllBlogs ? blogs : blogs.slice(0, 4);

  return (
    <section className="py-24 px-6 md:px-12 bg-gradient-to-b from-gray-950/52 via-black/36 to-gray-900/52 text-white">
      <Motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
          Blogs & Articles
        </h2>

        <p className="text-gray-400 mt-4 text-lg">
          Sharing insights on backend development and modern web technologies
        </p>
      </Motion.div>

      <Motion.div layout className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        <AnimatePresence initial={false}>
          {visibleBlogs.map((blog) => (
            <Motion.div
              layout
              key={blog.title}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-blue-400 mb-3">{blog.title}</h3>

              <Motion.div layout className="overflow-hidden">
                <Motion.p
                  layout
                  transition={{ layout: { duration: 0.35, ease: "easeInOut" } }}
                  className={`text-gray-400 mb-4 whitespace-pre-line ${openBlogs[blog.title] ? "" : "line-clamp-3"}`}
                >
                  {openBlogs[blog.title] ? blog.content.trim() : blog.preview}
                </Motion.p>
              </Motion.div>

              <button
                onClick={() =>
                  setOpenBlogs((prev) => ({
                    ...prev,
                    [blog.title]: !prev[blog.title],
                  }))
                }
                className="text-blue-400 font-semibold hover:text-cyan-400 transition"
              >
                {openBlogs[blog.title] ? "Hide" : "Read More"}
              </button>

              <div className="mt-4">
                <span className="text-xs bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full">
                  {blog.tech}
                </span>
              </div>
            </Motion.div>
          ))}
        </AnimatePresence>
      </Motion.div>

      {blogs.length > 4 && (
        <div className="text-center mt-12">
          <button
            onClick={() => setShowAllBlogs(!showAllBlogs)}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
          >
            {showAllBlogs ? "Show Less Blogs" : "Show More Blogs"}
          </button>
        </div>
      )}
    </section>
  );
}
