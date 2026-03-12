import { useState } from "react";
import { motion } from "framer-motion";

export default function Blogs() {

    const [openBlogs, setOpenBlogs] = useState([]);

    const blogs = [
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
            tech: "Django REST Framework, APIs"
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
            tech: "Django, Node.js"
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
            tech: "Backend Architecture"
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
            tech: "React, Django"
        }
    ];

    return (
        <section className="py-24 px-6 md:px-12 bg-gradient-to-b from-gray-950 via-black to-gray-900 text-white">

            {/* Title */}
            <motion.div
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
            </motion.div>

            {/* Blog Cards */}
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

                {blogs.map((blog, index) => (
                    <motion.div
                        layout
                        key={index}
                        className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-lg"
                    >

                        <h3 className="text-2xl font-semibold text-blue-400 mb-3">
                            {blog.title}
                        </h3>

                        <p className={`text-gray-400 mb-4 ${openBlogs[index] ? "" : "line-clamp-3"}`}>
                            {openBlogs[index] ? blog.content : blog.preview}
                        </p>
                        <button
                            onClick={() =>
                                setOpenBlogs((prev) => {
                                    const updated = [...prev];
                                    updated[index] = !updated[index];
                                    return updated;
                                })
                            }
                            className="text-blue-400 font-semibold hover:text-cyan-400 transition"
                        >
                            {openBlogs[index] ? "Read Less" : "Read More"}
                        </button>

                        <div className="mt-4">
                            <span className="text-xs bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full">
                                {blog.tech}
                            </span>
                        </div>

                    </motion.div>
                ))}

            </div>
        </section>
    );
}