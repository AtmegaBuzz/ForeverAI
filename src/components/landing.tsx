import back from "../assets/back.png";
import { ConnectButton } from "@arweave-wallet-kit/react";

export function Landing() {
  return (
    <div style={{ backgroundImage: `url(${back})`, backgroundSize: 'cover', height: '100vh' }}>
      <header className="flex items-center justify-between p-6">
        <div className="flex items-center space-x-2">
          <img src="/placeholder.svg" alt="Logo" className="h-10 w-10" />
          <span className="text-xl font-bold">Malboro.AI</span>
        </div>
        <nav className="flex items-center space-x-6">
          <a href="#" className="text-lg">
            Home
          </a>
          <a href="#" className="text-lg">
            About
          </a>
          <a href="#" className="text-lg border border-white px-4 py-1 rounded">
          <ConnectButton
        profileModal={true}
        showBalance={false}
        showProfilePicture={true}
      />
          </a>
        </nav>
      </header>
      <div className="mt-48">
      <main className="flex flex-col items-center justify-center flex-1 text-center">
  <h1 className="text-8xl font-bold mb-8 tracking-wider">One Stop Solution</h1> {/* Increased letter spacing */}
  <h2 className="text-8xl font-bold mb-8 tracking-wider">For All LLMs on AO</h2> {/* Increased letter spacing */}
  <a href="#" className="text-lg border border-white px-6 py-3 rounded flex items-center space-x-2">
    <span>Get Started</span>
    <ArrowRightIcon className="h-4 w-4" />
  </a>
</main>
      </div>
    </div>
  )
}
interface ArrowRightIconProps extends React.SVGProps<SVGSVGElement> {}
function ArrowRightIcon(props: ArrowRightIconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}
