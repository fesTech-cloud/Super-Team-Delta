"use client";
import styles from "./page.module.css";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import Image from 'next/image'; // Import Image component

export default function Home() {
  return (
    <main>
      <section className="">
        <div className="flex flex-col-reverse md:flex-row md:justify-between items-center px-10 md:px-[5%] lg:px-[10%] mb-10">
          <div className="flex flex-col mb-5">
            <h1 className="max-w-md text-3xl text-center md:text-4xl md:text-left text-gray-300 ">
              A <span className="text-[#12aaff] font-semibold">Token</span> and
              <span className="text-[#12aaff] font-semibold">NFT</span> Wizard
            </h1>
            <p className="max-w-md text-center md:text-justify text-gray-400">
              Create your own tokens effortlessly with TokenWizard, the magic tool that works across different blockchain networks. Get a clear view of all your token creations and assets through the user-friendly lens of TokenWizard. It&#x27;s like having a wizard by your side, making the process fun and easy!
            </p>
            <div className="flex justify-center md:block">
              <div className="w-fit mt-2 md:block p-3 px-6 pt-2 text-white bg-[#12aaff] rounded-lg baseline hover:bg-[#28a0f0] hover:shadow-lg hover:transition-all">
                <a href="/tokenWizard">Launch Dapp</a>
              </div>
            </div>
          </div>
          <div className="">
            <Image 
              alt="tokenWizard Logo" 
              loading="lazy" 
              width={450} 
              height={450} 
              src="/image1.05902fc0.png"
            />
          </div>
        </div>
      </section>
      <section className="">
        <div className="flex flex-col-reverse md:flex-row md:justify-between items-center px-10 md:px-[5%] lg:px-[10%] mb-32 ">
          <div className="">
            <Image 
              alt="tokenWizard Logo" 
              loading="lazy" 
              width={450} 
              height={450} 
              src="/image2.961b3460.png"
            />
          </div>
          <div className="flex flex-col mt-3">
            <h1 className="max-w-md text-3xl text-center md:text-4xl md:text-left text-gray-300">
              About <span className="text-[#12aaff] font-semibold">TokenWizard</span>
            </h1>
            <p className="max-w-sm text-center md:text-justify text-gray-400">
              Step into the enchanting realm of TokenWizard, your very own magical guide to crafting and managing Web3 tokens! This fantastical platform weaves its spell seamlessly across diverse blockchain networks, adding a sprinkle of magic to the creation and management of tokens. Glide through the decentralized wonders as TokenWizard harmonizes with Ethereum wallets, creating a truly magical experience in the realm of token generation. Embrace the magic, where creating and managing tokens becomes an enchanting journey with TokenWizard by your side!
            </p>
          </div>
        </div>
      </section>
      <section className="features_section" id="features">
        <div className="flex flex-col md:justify-between items-center px-10 md:px-[5%] lg:px-[10%] my-10 space-y-12 md:space-y-0 md:flex-row gap-3">
          <div className="flex flex-col space-y-2 md:w-1/2">
            <h2 className="max-w-md text-3xl font-bold text-gray-300 md:text-left">
              Core Features of <span className="text-[#12aaff] font-semibold">TokenWizard</span>
            </h2>
            <p className="max-w-sm text-start md:text-justify text-gray-400">
              Meet TokenWizard, your ultimate companion for bringing tokens to life in the exciting world of DeFi and blockchain! We make the creation and management of tokens a breeze in this ever-changing landscape. With TokenWizard, deploying tokens on different chains is like magic – easy and effortless! It&#x27;s your go-to solution for a hassle-free journey into the Web3 world, making crafting and managing tokens a walk in the park. Take the plunge into the decentralized universe with TokenWizard, where creating and managing tokens is as simple as waving a wand!
            </p>
          </div>
          <div className="flex flex-col space-y-8 md:w-1/2">
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row  ">
              <div className="rounded-lg bg-[#12aaff] md:bg-transparent">
                <div className="flex items-center space-x-2 ">
                  <div className="px-4 py-2 text-white rounded-full md:py-1 bg-[#12aaff]">01</div>
                  <h3 className="text-base font-bold md:mb-4 md:hidden text-gray-400">Token Deployer</h3>
                </div>
              </div>
              <div>
                <h3 className="hidden mb-4 text-[#28a0f0] font-bold md:block ">Token Deployer</h3>
                <p className="text-gray-400">Connect your wallet to deploy your token.</p>
              </div>
            </div>
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row  ">
              <div className="rounded-lg bg-[#12aaff] md:bg-transparent">
                <div className="flex items-center space-x-2 ">
                  <div className="px-4 py-2 text-white rounded-full md:py-1 bg-[#12aaff]">02</div>
                  <h3 className="text-base font-bold md:mb-4 md:hidden text-gray-400">Bot Protection Functions</h3>
                </div>
              </div>
              <div>
                <h3 className="hidden mb-4 text-[#28a0f0] font-bold md:block ">Team Allocation</h3>
                <p className="text-gray-400">Fill in Token Information</p>
              </div>
            </div>
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row  ">
              <div className="rounded-lg bg-[#12aaff] md:bg-transparent">
                <div className="flex items-center space-x-2 ">
                  <div className="px-4 py-2 text-white rounded-full md:py-1 bg-[#12aaff]">03</div>
                  <h3 className="text-base font-bold md:mb-4 md:hidden text-gray-400">Transaction History</h3>
                </div>
              </div>
              <div>
                <h3 className="hidden mb-4 text-[#28a0f0] font-bold md:block ">Transaction History</h3>
                <p className="text-gray-400">Choose from the optional functions ranging from anti-bot, team allocation, etc. Easily review and verify all your transactions for transparency and security.</p>
              </div>
            </div>
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row  ">
              <div className="rounded-lg bg-[#12aaff] md:bg-transparent">
                <div className="flex items-center space-x-2 ">
                  <div className="px-4 py-2 text-white rounded-full md:py-1 bg-[#12aaff]">04</div>
                  <h3 className="text-base font-bold md:mb-4 md:hidden text-gray-400">Different Chain Integration</h3>
                </div>
              </div>
              <div>
                <h3 className="hidden mb-4 text-[#28a0f0] font-bold md:block ">Different Chain Integration</h3>
                <p className="text-gray-400">Enjoy fast and easy token deployment</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
