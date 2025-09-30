## 📤 **How to Upload Certificates.jsx to GitHub**

### **Step 1: Get the File Content**

Since the file is created in your development environment, here are two ways:

#### **Method A: Copy File Content (Easiest)**

1. **Copy the entire content** of the Certificates.jsx file:
Action: file_editor view /app/frontend/src/components/Certificates.jsx
Observation: /app/frontend/src/components/Certificates.jsx:
1|import React, { useState } from 'react';
2|import { Download, ExternalLink, Calendar, Award } from 'lucide-react';
3|import { portfolioData } from '../data/mock';
4|
5|const CertificateCard = ({ certificate }) => {
6|  return (
7|    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
8|      {/* Certificate Image */}
9|      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50">
10|        {certificate.image ? (
11|          <img 
12|            src={certificate.image} 
13|            alt={certificate.title}
14|            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
15|          />
16|        ) : (
17|          <div className="w-full h-full flex items-center justify-center">
18|            <div className="text-center">
19|              <Award className="text-blue-600 mx-auto mb-2" size={48} />
20|              <div className="text-gray-600 font-medium">{certificate.title}</div>
21|            </div>
22|          </div>
23|        )}
24|        
25|        {/* Category Badge */}
26|        <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded-full">
27|          {certificate.category}
28|        </div>
29|      </div>
30|
31|      {/* Content */}
32|      <div className="p-6 space-y-4">
33|        {/* Header */}
34|        <div>
35|          <h3 className="text-lg font-bold text-gray-900 mb-1">{certificate.title}</h3>
36|          <div className="text-blue-600 font-semibold text-sm">{certificate.issuer}</div>
37|        </div>
38|
39|        {/* Date */}
40|        <div className="flex items-center gap-2 text-gray-600">
41|          <Calendar size={16} />
42|          <span className="text-sm">{certificate.date}</span>
43|        </div>
44|
45|        {/* Description */}
46|        {certificate.description && (
47|          <p className="text-gray-600 text-sm leading-relaxed">{certificate.description}</p>
48|        )}
49|
50|        {/* Skills */}
51|        {certificate.skills && (
52|          <div className="flex flex-wrap gap-2">
53|            {certificate.skills.map((skill, index) => (
54|              <span 
55|                key={index}
56|                className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
57|              >
58|                {skill}
59|              </span>
60|            ))}
61|          </div>
62|        )}
63|
64|        {/* Actions */}
65|        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
66|          <span className="text-xs text-gray-500 font-medium">Verified Certificate</span>
67|          <div className="flex gap-2">
68|            {certificate.credentialUrl && (
69|              <a
70|                href={certificate.credentialUrl}
71|                target="_blank"
72|                rel="noopener noreferrer"
73|                className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
74|                title="View Credential"
75|              >
76|                <ExternalLink size={16} />
77|              </a>
78|            )}
79|            {certificate.downloadUrl && (
80|              <a
81|                href={certificate.downloadUrl}
82|                download
83|                className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
84|                title="Download Certificate"
85|              >
86|                <Download size={16} />
87|              </a>
88|            )}
89|          </div>
90|        </div>
91|      </div>
92|    </div>
93|  );
94|};
95|
96|const Certificates = () => {
97|  const [activeFilter, setActiveFilter] = useState('All');
98|  
99|  // Enhanced certificates data with your certificate
100|  const certificates = [
101|    {
102|      id: 1,
103|      title: "Generative AI Mastermind",
104|      issuer: "Outskill",
105|      date: "September 2025",
106|      category: "AI/ML",
107|      description: "Comprehensive program covering generative AI technologies, LLM integration, and practical applications in business environments.",
108|      skills: ["Generative AI", "LLMs", "AI Applications", "Machine Learning"],
109|      credentialUrl: "#",
110|      downloadUrl: "https://customer-assets.emergentagent.com/job_pradhuman-tech/artifacts/ei858i3n_Pradhuman_Sharma_Certificate.pdf",
111|      image: "https://images.unsplash.com/photo-1677691820099-a6e8040aa077?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHw0fHxBSSUyMHdvcmtzcGFjZXxlbnwwfHx8fDE3NTkyNDYxOTB8MA&ixlib=rb-4.1.0&q=85"
112|    },
113|    {
114|      id: 2,
115|      title: "Data Engineering on AWS - Foundations",
116|      issuer: "AWS",
117|      date: "September 2025",
118|      category: "Data Engineering",
119|      description: "Foundational knowledge in AWS data engineering services, data pipelines, and cloud-based analytics solutions.",
120|      skills: ["AWS", "Data Pipelines", "Cloud Computing", "ETL"],
121|      credentialUrl: "#"
122|    },
123|    {
124|      id: 3,
125|      title: "Software Testing Fundamentals",
126|      issuer: "Great Learning",
127|      date: "2024",
128|      category: "Software Development",
129|      description: "Comprehensive understanding of software testing methodologies, test automation, and quality assurance practices.",
130|      skills: ["Software Testing", "QA", "Test Automation", "Quality Assurance"]
131|    },
132|    {
133|      id: 4,
134|      title: "UI/UX Design Course",
135|      issuer: "Great Learning",
136|      date: "2024",
137|      category: "Design",
138|      description: "User experience design principles, interface design, and user-centered design methodologies.",
139|      skills: ["UI/UX Design", "User Research", "Prototyping", "Design Thinking"]
140|    },
141|    {
142|      id: 5,
143|      title: "Data Science & Analytics",
144|      issuer: "HP Life (HP Foundation)",
145|      date: "2024",
146|      category: "Data Science",
147|      description: "Fundamentals of data science, statistical analysis, and practical analytics applications.",
148|      skills: ["Data Science", "Analytics", "Statistics", "Data Visualization"]
149|    }
150|  ];
151|  
152|  const categories = ['All', 'AI/ML', 'Data Science', 'Data Engineering', 'Software Development', 'Design'];
153|  const filteredCertificates = activeFilter === 'All' 
154|    ? certificates 
155|    : certificates.filter(cert => cert.category === activeFilter);
156|
157|  return (
158|    <section id="certificates" className="py-20 bg-gray-50">
159|      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
160|        <div className="text-center mb-16">
161|          <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications & Training</h2>
162|          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
163|            Continuous learning through industry-recognized certifications and professional development programs
164|          </p>
165|        </div>
166|
167|        {/* Filter Buttons */}
168|        <div className="flex flex-wrap justify-center gap-4 mb-12">
169|          {categories.map((category) => (
170|            <button
171|              key={category}
172|              onClick={() => setActiveFilter(category)}
173|              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
174|                activeFilter === category
175|                  ? 'bg-blue-600 text-white shadow-lg transform scale-105'
176|                  : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 shadow-md'
177|              }`}
178|            >
179|              {category}
180|            </button>
181|          ))}
182|        </div>
183|
184|        {/* Certificates Grid */}
185|        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
186|          {filteredCertificates.map((certificate) => (
187|            <CertificateCard key={certificate.id} certificate={certificate} />
188|          ))}
189|        </div>
190|
191|        {/* Summary Stats */}
192|        <div className="mt-16 bg-white rounded-xl p-8 shadow-lg">
193|          <div className="grid md:grid-cols-4 gap-6 text-center">
194|            <div>
195|              <div className="text-3xl font-bold text-blue-600 mb-2">{certificates.length}</div>
196|              <div className="text-gray-600">Certificates Earned</div>
197|            </div>
198|            <div>
199|              <div className="text-3xl font-bold text-blue-600 mb-2">{categories.length - 1}</div>
200|              <div className="text-gray-600">Skill Categories</div>
201|            </div>
202|            <div>
203|              <div className="text-3xl font-bold text-blue-600 mb-2">2025</div>
204|              <div className="text-gray-600">Latest Completion</div>
205|            </div>
206|            <div>
207|              <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
208|              <div className="text-gray-600">Completion Rate</div>
209|            </div>
210|          </div>
211|        </div>
212|      </div>
213|    </section>
214|  );
215|};
216|
217|export default Certificates;
