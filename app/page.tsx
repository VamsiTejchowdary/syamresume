import React from "react";

const Roadmap = () => {
  const sections = [
    {
      title: "Programming Languages",
      content: [
        { label: "Python", desc: "NumPy, Pandas, Scikit-learn, TensorFlow, PyTorch" },
        { label: "Java", desc: "Apache Spark, Hadoop, DeepLearning4J" },
        { label: "SQL", desc: "PostgreSQL, MySQL" },
        { label: "Additional", desc: "C++, R, Scala" }
      ]
    },
    {
      title: "Prerequisites",
      content: [
        { label: "DevOps", desc: "Linux, JIRA, Bitbucket, Agile Methodologies" },
        { label: "Additional", desc: "Docker, Kubernetes, Git/GitHub" }
      ]
    },
    {
      title: "Data Processing",
      content: [
        { label: "Data Collection", desc: "APIs, databases, web scraping" },
        { label: "Preprocessing", desc: "Handling missing values, feature scaling, encoding" },
        { label: "Visualization", desc: "Matplotlib, Seaborn, Tableau" }
      ]
    },
    {
      title: "Machine Learning",
      content: [
        { label: "Supervised Learning", desc: "Regression, Classification" },
        { label: "Unsupervised Learning", desc: "Clustering, Dimensionality Reduction" },
        { label: "Reinforcement Learning", desc: "Q-Learning, Policy Gradients" },
        { label: "Evaluation", desc: "RMSE, Precision, Recall, Cross-Validation" }
      ]
    },
    {
      title: "Deep Learning",
      content: [
        { label: "Neural Networks", desc: "ANNs, RNNs (LSTM, GRU), CNNs (VGG16, ResNet)" },
        { label: "Advanced", desc: "Transformers, GANs, Autoencoders" }
      ]
    },
    {
      title: "Model Deployment & MLOps",
      content: [
        { label: "Cloud Deployment", desc: "AWS, GCP, Azure" },
        { label: "Model Serving", desc: "FastAPI, Flask, TensorFlow Serving" },
        { label: "MLOps", desc: "CI/CD, Model Monitoring, Explainability" }
      ]
    },
    {
      title: "Resume & Soft Skills",
      content: [
        { label: "Career Prep", desc: "Resume Building, Mock Interviews" },
        { label: "Communication", desc: "Problem-Solving, Storytelling" }
      ]
    }
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 min-h-screen p-6 md:p-10">
      <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 py-8 px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-white">
            AI/ML Data Scientist Roadmap
          </h1>
          <p className="text-blue-100 text-center mt-2">
            Your comprehensive guide to becoming a data science professional
          </p>
        </div>
        
        <div className="p-6 md:p-8">
          <div className="space-y-8">
            {sections.map((section, index) => (
              <div key={index} className="bg-white border border-gray-100 rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-100 text-blue-600 p-2 rounded-lg flex items-center justify-center w-10 h-10">
                    <span className="font-bold">{index + 1}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    {section.title}
                  </h2>
                </div>
                
                <div className="space-y-4 ml-2">
                  {section.content.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start">
                      <div className="text-blue-500 mt-1 mr-2 flex-shrink-0">
                        <span className="text-lg">→</span>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-800">{item.label}:</span>
                        <span className="text-gray-600 ml-1">{item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;