import React, { useState } from "react";
import { ethers } from "ethers";

import Greeter from "../artifacts/contracts/Greeter.sol/Greeter.json";

const greeterAddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3";

const Connect = () => {
  const [greeting, setGreetingValue] = useState();
  const [updatedGreeting, setUpdatedGreeting] = useState();

  // request access to the user's MetaMask account
  const requestAccount = async () => {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  };

  // call the smart contract, read the current greeting value
  const fetchGreeting = async () => {
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(
        greeterAddress,
        Greeter.abi,
        provider
      );
      try {
        const data = await contract.greet();
        console.log("data: ", data);
        setUpdatedGreeting(data);
      } catch (err) {
        throw new Error(err);
      }
    }
  };

  // call the smart contract, send an update
  const setGreeting = async () => {
    if (!greeting) return;
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(greeterAddress, Greeter.abi, signer);
      const transaction = await contract.setGreeting(greeting);
      await transaction.wait();
      fetchGreeting();
    }
  };

  return (
    <div className="flex justify-start items-center flex-col pt-72">
      <h1 className="text-black text-3xl font-bold mb-10">
        Greeting: <p className="text-red"> {updatedGreeting}</p>
      </h1>
      <div className="flex">
        <input
          className="shadow-neu-form pl-2 h-8 w-auto flex items-center text-sm rounded focus:outline-none"
          onChange={(e) => setGreetingValue(e.target.value)}
          placeholder="Set greeting"
        />
        <button
          className="text-white text-xs px-4 py-2 h-8 w-auto flex justify-center items-center bg-green rounded shadow-neu-button hover:bg-opacity-80 hover:shadow-neu-button foucs:outline-none ml-1.5"
          onClick={setGreeting}
        >
          Set Greeting
        </button>
      </div>
      <div className="flex justify-center items-center flex-row mt-4">
        <button
          className="text-white text-xs px-4 py-2 h-8 w-auto flex justify-center items-center bg-orange rounded shadow-neu-button hover:bg-opacity-80 hover:shadow-neu-button foucs:outline-none"
          onClick={fetchGreeting}
        >
          Fetch Greeting
        </button>
      </div>
    </div>
  );
};

export default Connect;
