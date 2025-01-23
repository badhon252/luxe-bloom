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
  const [showPasswordReset, setShowPasswordReset] = useState<boolean>(false);

  // Email validation
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handle form submission for Sign In
  const handleSignInSubmit = (): void => {
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
      console.log('Sign-In Submitted:', { email, password });
      // Proceed with form submission (e.g., API call)
    }
  };

  // Handle form submission for Forgot Password
  const handleForgotPasswordSubmit = (): void => {
    const newErrors: SignInErrors = {};

    // Validate email
    if (!validateEmail(email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log('Forgot Password Submitted:', { email });
      // Proceed with Forgot Password submission (e.g., API call)
    }
  };

  // Handle toggle for Forgot Password
  const handleForgotPasswordToggle = (): void => {
    setShowPasswordReset(!showPasswordReset);
    setErrors({}); // Clear errors when toggling
  };

  // Handle cancel action for Forgot Password
  const handleCancel = (): void => {
    setShowPasswordReset(false);
    setErrors({});
    setEmail(''); // Clear email input
  };

  return (
    <div>
      {showPasswordReset ? (
        <div className="text-center">
          <h3 className="text-base text-[#000000]/70 font-normal uppercase text-left mb-10">
            Reset Your Password
          </h3>

          {/* Reset Password Email Input */}
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
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}

          <p className="text-xs text-gray-500 mt-4 text-center cursor-pointer">
            By resetting, you agree to our{' '}
            <span className="underline">Terms of Use and Privacy Policy.</span>
          </p>

          <Button
            className="w-full !py-5 bg-black text-white text-sm tracking-wide uppercase hover:bg-red-600 transition mt-10"
            onClick={handleForgotPasswordSubmit}
          >
            Submit
          </Button>

          <p
            onClick={handleCancel}
            className="text-xs text-gray-500 mt-4 text-center cursor-pointer underline"
          >
            Cancel
          </p>
        </div>
      ) : (
        <div>
          {/* Sign In Email Input */}
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
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          {/* Sign In Password Input */}
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
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
          </div>

          {/* Forgot Password Link */}
          <p
            onClick={handleForgotPasswordToggle}
            className="text-xs text-gray-500 mt-4 text-center underline cursor-pointer"
          >
            Forgot Password?
          </p>

          {/* Sign In Button */}
          <Button
            className="w-full !py-5 bg-black text-white text-sm tracking-wide uppercase hover:bg-red-600 transition mt-10"
            onClick={handleSignInSubmit}
          >
            Sign In
          </Button>

          {/* Create Account Link */}
         
        </div>
      )}
    </div>
  );
};

export default SignIn;
