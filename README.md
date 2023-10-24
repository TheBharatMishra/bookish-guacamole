# Upgrading Smart Contracts

### How to do upgrades ?

- Smart Contract deployed using OpenZeppelin Upgrades Plugins can be upgraded to modify their code, while preserving their address, state, balance.
- This allows you to iteratively add new features to your project, or fix any bug you may found in production.
- deployProxy in the OpenZippelin Upgrades Plugin.

## Upgrade Process

- `deployProxy` deploy three smart contracts.

  1. Implementation Contract: With which logic is attached. e.g. dooger.ts script.
  2. ProxyAdmin (admin for our proxy)
  3. ProxyContract.

  User -> Proxy Smart Contract -> Smart Contract (Implementation {where logic is written} )

  Calls update() function from Implementation Contract.

  When a variable declared inside logic(implementation) contract is intialized or changed. The process of intialization and change takes place in proxy contract.

![](./src/assets/upgrading_process.png)

Smart Contract -> num; No state change takes place inside the Logic of Smart Contract.

Proxy Contract -> num=10;

- Logic Use - Implementation Contract
- State Use - Proxy Contract

### Important Points:

- When you deploy a contract using deployProxy the contract instance can be upgraded later.
- Only the address that originally deployed the contract has rights to upgrade it.

#### Que: Does the Immutability of Smart Contracts are affected by upgrading them?

Ans: No, because new logic and rules are added alongside the old ones using a different script. The functionality of the old contract works still the same we just stop calling those specific functions and instead call the new ones that are created.
