import { ConnectWallet, Web3Button, useContract } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import { NextPage } from "next";
import { useState } from "react";

const Home: NextPage = () => {

  const contractAddress = "0x013bD8D5216efbd426577aA3788257008d9cCD11";
  const {contract} = useContract(contractAddress);
  const [counter, setCounter] = useState<string | undefined>(undefined);

  async function getCounter(){
    if(!contract) return;

    const counter = await contract.call("getCounter");
    setCounter(counter.toString())
  }
  
  return (
    <main className={styles.main}>
      <h1>Counter Dapp</h1>
      <h3>{counter}</h3>
          <Web3Button contractAddress={contractAddress} action={()=> getCounter()}>Refresh the Counter</Web3Button>
          <br/>
          <Web3Button contractAddress={contractAddress} action={(contract) => contract.call("incrementCounter")}>Increment Counter</Web3Button>
    </main>
  );
};

export default Home;
