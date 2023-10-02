import Link from 'next/link';
import React, { use, useEffect, useState } from 'react';
import { buttonVariants, Button } from '../../components/ui/button';
import { cn } from '../../lib/utils';
import { Label } from '../../components/ui/label';
import { Input } from '../../components/ui/input';
import { Icons } from '../../components/ui/icons';

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log('Submitted with\n' + JSON.stringify({ email }, undefined, 2));
  }

  return (
    <div className="container relative h-full flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0">
      <Link href="/auth/signup" className={cn(buttonVariants({ variant: 'ghost' }), 'absolute right-4 top-4 md:right-8 md:top-8')}>
        Signup
      </Link>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Create an account</h1>
            <p className="text-muted-foreground text-sm">Enter your email below to create your account</p>
          </div>
          <div className={cn('grid gap-6')}>
            <form onSubmit={onSubmit}>
              <div className="grid gap-2">
                <div className="grid gap-1">
                  <Label className="sr-only" htmlFor="email">
                    Email
                  </Label>
                  <Input
                    id="email"
                    placeholder="name@example.com"
                    type="email"
                    autoCapitalize="none"
                    autoComplete="email"
                    autoCorrect="off"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isLoading}
                  />
                </div>
                <Button disabled={isLoading}>
                  {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
                  Sign In with Email
                </Button>
              </div>
            </form>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background text-muted-foreground px-2">Or continue with</span>
              </div>
            </div>
            <Button variant="outline" type="button" disabled={isLoading}>
              {isLoading ? <Icons.spinner className="mr-2 h-4 w-4 animate-spin" /> : <Icons.gitHub className="mr-2 h-4 w-4" />} Github
            </Button>
          </div>
          <p className="text-muted-foreground px-8 text-center text-sm">
            By clicking continue, you agree to our{' '}
            <Link href="/terms" className="hover:text-primary underline underline-offset-4">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link href="/privacy" className="hover:text-primary underline underline-offset-4">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
    // <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
    //   <div className="text-4xl">Authentication</div>
    //   <div className="">You must be logged in to see this page.</div>
    // </div>
  );
}
