const main = async () => {
    const MyContract = await ethers.getContractFactory("HelloWorld");
    const contract = await MyContract.attach(
    "0xAD985fcd83410E501368CE575e56E5a0539D0612" // The deployed contract address
  );
  
  // Now you can call functions of the contract

  const txn = await contract.update("new message is here");
  await txn.wait();
  console.log("message updated");
  
  const newMessage = await contract.message();
  console.log("The new message is: ", newMessage);
  
  }
  
  main();