import React, { useState } from 'react';
import { Input } from '@/components/ui/input'; // ShadCN Input
import { Button } from '@/components/ui/button'; // ShadCN Button
import { cn } from '@/lib/utils'; // Utility function for conditional class names

interface SignInErrors {
  email?: string;
  password?: string;
}

const SignIn: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errors, setErrors] = useState<SignInErrors>({});

  // Email validation
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handle form submission
  const handleSubmit = () => {
    const newErrors: SignInErrors = {};

    // Validate email
    if (!validateEmail(email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    // Validate password
    if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long.';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log('Form Submitted:', { email, password });
      // Proceed with form submission (e.g., API call)
    }
  };

  return (
    <div>
      {/* Email Input */}
      <div className="mb-5 w-full">
        <Input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={cn(
            'border-b border-[#000000] w-full py-3 px-3 text-sm placeholder:uppercase',
            errors.email && 'border-red-500'
          )}
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-1">{errors.email}</p>
        )}
      </div>

      {/* Password Input */}
      <div className="mb-5">
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={cn(
            'border-b border-[#000000] w-full py-3 px-3 text-sm mt-5 placeholder:uppercase',
            errors.password && 'border-red-500'
          )}
        />
        {errors.password && (
          <p className="text-red-500 text-xs mt-1">{errors.password}</p>
        )}
      </div>

      {/* Forgot Password */}
      <p className="text-xs text-gray-500 mt-4 text-center underline cursor-pointer">
        Forgot Password?
      </p>

      {/* Submit Button */}
      <Button
        className="w-full !py-5 bg-black text-white text-sm tracking-wide uppercase hover:bg-red-600 transition mt-10"
        onClick={handleSubmit}
      >
        Sign In
      </Button>

      {/* Create Account Link */}
      <div className="text-xs text-gray-500 mt-4 text-center">
        <p>
          Don&apos;t have an account?{' '}
          <span className="text-black font-semibold cursor-pointer">Create one</span>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
