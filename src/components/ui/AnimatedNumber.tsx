
import { useState, useEffect } from 'react';

interface AnimatedNumberProps {
  value: number;
  duration?: number;
  formatter?: (value: number) => string;
  className?: string;
}

const AnimatedNumber = ({
  value,
  duration = 1000,
  formatter = (val) => val.toString(),
  className = '',
}: AnimatedNumberProps) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (value === displayValue) return;
    
    setIsAnimating(true);
    let startTime: number | null = null;
    let animationFrame: number;
    
    const startValue = displayValue;
    const endValue = value;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const currentValue = Math.floor(startValue + progress * (endValue - startValue));
      
      setDisplayValue(currentValue);
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setIsAnimating(false);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [value, duration, displayValue]);

  return (
    <span className={`transition-opacity ${isAnimating ? 'animate-number-count' : ''} ${className}`}>
      {formatter(displayValue)}
    </span>
  );
};

export default AnimatedNumber;
