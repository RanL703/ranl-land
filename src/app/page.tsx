import Link from "next/link";
import { Suspense } from "react";
import { ThemeWrapper } from "./components/ThemeWrapper";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="w-full py-6 border-b border-muted/60">
        <div className="container mx-auto px-4">
          <h1 className="text-lg md:text-xl font-mono font-semibold tracking-tight">
            <span className="text-primary cursor-blink">~/ranl</span>
            <span className="text-muted-foreground"> $ </span>
            <span className="animate-pulse">_</span>
          </h1>
        </div>
      </header>
      
      <main className="container mx-auto flex flex-grow flex-col items-center px-4 py-12">
        <div className="relative mb-8">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent opacity-30 blur rounded-lg"></div>
          <div className="relative bg-background/95 dark:bg-background/80 backdrop-blur-sm p-6 rounded-lg">
            <p className="mb-6 max-w-xl text-center text-xl md:text-2xl">
              hi, i&apos;m <span className="code-highlight font-semibold">rana</span>. i make things. 
              mostly <span className="text-[hsl(var(--code-text))]">code</span> and <span className="text-accent">posts</span>. 
              <span className="block mt-2 text-muted-foreground text-lg italic">
                ...when i&apos;m not yelling at copilot for auto-completing the wrong thing.
              </span>
            </p>
            <p className="text-center text-lg text-muted-foreground">
              you&apos;re probably here for one of these things...
            </p>
          </div>
        </div>
        
        <div className="terminal-text mb-6 text-sm md:text-base w-full max-w-md">
          <div className="flex justify-between mb-2">
            <span>bash</span>
            <span className="flex space-x-2">
              <span className="h-3 w-3 rounded-full bg-destructive inline-block"></span>
              <span className="h-3 w-3 rounded-full bg-chart-4 inline-block"></span>
              <span className="h-3 w-3 rounded-full bg-accent inline-block"></span>
            </span>
          </div>
          <p className="typing-animation overflow-hidden whitespace-nowrap">
            $ cd ~/projects/passion && npx dev
          </p>
        </div>
        
        <div className="mx-auto flex w-full max-w-md flex-grow flex-col items-center space-y-6">
          {/*<a
            href="https://agentos.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full border border-black/60 py-3 text-center transition-all duration-300 hover:bg-black/60 hover:text-white"
          >
            <span className="text-lg">agentos</span>
            <span className="block text-sm text-gray-500 transition-all group-hover:text-gray-200">
              the best agentic playground ever made
            </span>
          </a> */}
          <a
            href="https://youtube.com/@notranl"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full border border-border animate-border-pulse py-4 text-center transition-all duration-300 hover:bg-primary/10 dark:hover:bg-primary/20 rounded-md"
          >
            <span className="text-lg font-medium">youtube</span>
            <span className="block text-sm text-muted-foreground transition-all group-hover:text-foreground">
              nerdy videos about software dev stuff
              <span className="block mt-1 text-xs italic">...and occasional rants about python taking up half my ssd and npm dependency hell</span>
            </span>
          </a>
          <a
            href="https://youtube.com/@manimating"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full border border-border animate-border-pulse py-4 text-center transition-all duration-300 hover:bg-primary/10 dark:hover:bg-primary/20 rounded-md"
          >
            <span className="text-lg font-medium">other youtube</span>
            <span className="block text-sm text-muted-foreground transition-all group-hover:text-foreground">
              nerdy videos about stuff i make using manim to study math better
              <span className="block mt-1 text-xs italic">...because explaining something is the best way to understand it</span>
            </span>
          </a>
          {/*<a
            href="https://create.agentos.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full border border-black/60 py-3 text-center transition-all duration-300 hover:bg-black/60 hover:text-white"
          >
            <span className="text-lg">create t3 app</span>
            <span className="block text-sm text-gray-500 transition-all group-hover:text-gray-200">
              the best framework to build agents for any task ever
            </span>
          </a>*/}
          <a
            href="https://theranlblog.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full border border-border animate-border-pulse py-4 text-center transition-all duration-300 hover:bg-primary/10 dark:hover:bg-primary/20 rounded-md"
          >
            <span className="text-lg font-medium">blog</span>
            <span className="block text-sm text-muted-foreground transition-all group-hover:text-foreground">
              random thoughts about things i'm learning and projects i'm working on
              <span className="block mt-1 text-xs italic">...mostly "it works on my machine" moments</span>
            </span>
          </a>
          <a
            href="https://ranadeeplaskar.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full border border-border animate-border-pulse py-4 text-center transition-all duration-300 hover:bg-primary/10 dark:hover:bg-primary/20 rounded-md"
          >
            <span className="text-lg font-medium">portfolio</span>
            <span className="block text-sm text-muted-foreground transition-all group-hover:text-foreground">
              a collection of my projects and experiments
              <span className="block mt-1 text-xs italic">...I try to make computers do cool things mostly MLops</span>
            </span>
          </a>
          <a
            href="https://github.com/RanL703/AgentOS"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full border border-border animate-border-pulse py-4 text-center transition-all duration-300 hover:bg-primary/10 dark:hover:bg-primary/20 rounded-md"
          >
            <span className="text-lg font-medium">agentos</span>
            <span className="block text-sm text-muted-foreground transition-all group-hover:text-foreground">
             i made an electron based playground for ai agents
              <span className="block mt-1 text-xs italic">...wanna make a python framework for this</span>
            </span>
          </a>
        </div>
        
        <div className="mt-10 w-full max-w-md">
          <div className="bg-muted/30 p-4 rounded-lg">
            <h2 className="font-mono text-lg mb-3 flex items-center">
              <span className="text-accent mr-2">$</span> 
              <span className="font-medium">Current Status</span>
            </h2>
            <p className="text-sm text-muted-foreground mb-2">
              <span className="inline-block w-3 h-3 rounded-full bg-accent animate-pulse mr-2"></span>
              Working on a AgentOS that may or may not commoditise AI Agents
            </p>
            <p className="text-sm text-muted-foreground">
              <span className="inline-block w-3 h-3 rounded-full bg-primary mr-2"></span>
              Fighting with TypeScript types that are more complex than my life decisions
            </p>
          </div>
        </div>
      </main>
      
      <footer className="border-t border-muted/40 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <div className="text-sm text-muted-foreground mb-4">
              Built with ☕ and occasional bursts of motivation
            </div>
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/RanL703"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                GitHub
              </a>
              <a
                href="https://x.com/this_is_ranl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                Twitter
              </a>
              <a
                href="https://www.twitch.tv/notranl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                Twitch
              </a>
              <a
                href="https://discord.gg/8hTkJc5gXd"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                Discord
              </a>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Theme Switcher */}
      <Suspense fallback={null}>
        <ThemeWrapper />
      </Suspense>
    </div>
  );
}
