
import { useState } from 'react';
import { useInView } from '@/hooks/useInView';
import GradientButton from './ui/GradientButton';
import { Check } from 'lucide-react';

interface PricingTierProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
  delay: number;
}

const PricingTier = ({ 
  title, 
  price, 
  description, 
  features, 
  isPopular = false, 
  ctaText,
  delay 
}: PricingTierProps) => {
  const [ref, isInView] = useInView();
  
  return (
    <div 
      ref={ref}
      className={`bg-white rounded-2xl p-8 border border-gray-200 shadow-subtle relative transition-all duration-700 ${
        isPopular ? 'ring-2 ring-primary' : ''
      } ${
        isInView 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-20'
      }`}
      style={{ transitionDelay: `${delay * 100}ms` }}
    >
      {isPopular && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-medium px-4 py-1 rounded-full">
          Most Popular
        </div>
      )}
      
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      
      <div className="mb-6">
        <span className="text-4xl font-bold">{price}</span>
        {price !== 'Custom' && <span className="text-gray-500">/month</span>}
      </div>
      
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="mr-2 mt-1 bg-primary/10 rounded-full p-1">
              <Check size={14} className="text-primary" />
            </span>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      
      <GradientButton 
        className="w-full"
        variant={isPopular ? 'primary' : 'secondary'}
      >
        {ctaText}
      </GradientButton>
    </div>
  );
};

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [sectionRef, isSectionInView] = useInView({ threshold: 0.1 });
  
  const tiers = [
    {
      title: "Starter",
      price: billingCycle === 'monthly' ? "$299" : "$2,990",
      description: "Perfect for small brokers and lenders",
      features: [
        "Process up to 100 loans monthly",
        "Basic commission calculations",
        "Simple invoice generation",
        "Email support",
        "2 team members"
      ],
      ctaText: "Start Free Trial"
    },
    {
      title: "Professional",
      price: billingCycle === 'monthly' ? "$599" : "$5,990",
      description: "For growing mortgage businesses",
      features: [
        "Process up to 500 loans monthly",
        "Advanced commission calculations",
        "Customizable invoice templates",
        "ABA file generation",
        "Priority email & phone support",
        "10 team members"
      ],
      isPopular: true,
      ctaText: "Start Free Trial"
    },
    {
      title: "Enterprise",
      price: "Custom",
      description: "For large lenders with complex needs",
      features: [
        "Unlimited loan processing",
        "Custom commission structures",
        "API integrations",
        "Advanced reporting",
        "Dedicated account manager",
        "Unlimited team members"
      ],
      ctaText: "Contact Sales"
    }
  ];

  return (
    <section 
      id="pricing" 
      className="section"
      ref={sectionRef}
    >
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className={`transition-all duration-700 ${
            isSectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Choose the plan that fits your business needs.
            </p>
            
            <div className="inline-flex items-center p-1 bg-gray-100 rounded-full max-w-xs mx-auto">
              <button
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  billingCycle === 'monthly' 
                    ? 'bg-white shadow-sm text-gray-900' 
                    : 'text-gray-500'
                }`}
                onClick={() => setBillingCycle('monthly')}
              >
                Monthly
              </button>
              <button
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  billingCycle === 'yearly' 
                    ? 'bg-white shadow-sm text-gray-900' 
                    : 'text-gray-500'
                }`}
                onClick={() => setBillingCycle('yearly')}
              >
                Yearly <span className="text-primary font-medium">Save 15%</span>
              </button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <PricingTier
              key={index}
              title={tier.title}
              price={tier.price}
              description={tier.description}
              features={tier.features}
              isPopular={tier.isPopular}
              ctaText={tier.ctaText}
              delay={index + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
