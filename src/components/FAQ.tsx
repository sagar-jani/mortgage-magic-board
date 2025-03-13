
import { useState } from 'react';
import { useInView } from '@/hooks/useInView';
import { ChevronDown } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  delay: number;
}

const FAQItem = ({ question, answer, isOpen, onClick, delay }: FAQItemProps) => {
  const [ref, isInView] = useInView();
  
  return (
    <div 
      ref={ref}
      className={`border-b border-gray-200 py-6 transition-all duration-700 ${
        isInView 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay * 100}ms` }}
    >
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-medium text-gray-900">{question}</h3>
        <ChevronDown 
          size={20} 
          className={`text-gray-500 transition-transform duration-300 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>
      <div 
        className={`mt-3 text-gray-600 overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <p className="pb-4">{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [sectionRef, isSectionInView] = useInView({ threshold: 0.1 });
  
  const faqs = [
    {
      question: "What file formats does the system support for importing data?",
      answer: "Our system supports Excel (.xlsx, .xls), CSV (.csv), and PDF (.pdf) files for importing loan and commission data. The system automatically extracts the relevant information regardless of the format."
    },
    {
      question: "How are commissions calculated?",
      answer: "Commissions are calculated based on the trail and upfront split percentages that you assign when creating loans. The system can handle complex commission structures, including tiered commissions and varying rates for different loan types."
    },
    {
      question: "Can I customize invoice templates?",
      answer: "Yes, you can customize invoice templates to include your branding, specific fields, and layout preferences. The Professional and Enterprise plans offer enhanced customization options for invoice generation."
    },
    {
      question: "What security measures are in place to protect our data?",
      answer: "We implement bank-level security measures, including end-to-end encryption, secure data storage, regular backups, and role-based access control to ensure that your sensitive financial data remains protected at all times."
    },
    {
      question: "Can multiple team members access the system simultaneously?",
      answer: "Yes, our system supports concurrent usage by multiple team members. Each plan includes a specific number of user accounts, with the Enterprise plan offering unlimited team members. Each user can be assigned specific roles and permissions."
    },
    {
      question: "Do you offer integration with existing banking or accounting software?",
      answer: "Yes, our Enterprise plan includes API integrations with popular banking and accounting software. This allows for seamless data transfer between systems, eliminating the need for duplicate data entry."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(index === openIndex ? -1 : index);
  };

  return (
    <section 
      id="faq" 
      className="section bg-gray-50"
      ref={sectionRef}
    >
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className={`transition-all duration-700 ${
            isSectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Have more questions? Contact our support team for assistance.
            </p>
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-subtle p-8">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={index === openIndex}
              onClick={() => toggleFAQ(index)}
              delay={index + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
