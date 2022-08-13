const deploy = async () => {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contract with account:", deployer.address);

    const PP = await ethers.getContractFactory('PlatziPunks');
    const deployed = await PP.deploy(10000);

    console.log("PlatziPunks deployed at:", deployed.address);
};

deploy().then(() => process.exit(0)).catch(e => {
    console.log(e);
    process.exit(1);
});