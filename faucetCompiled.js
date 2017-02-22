{
  <stdin>:Faucet: {
    code: "0x60606040525b60008054600160a060020a03191633600160a060020a0316179055670de0b6b3a76400006001555b5b6101e08061003d6000396000f300606060405236156100515763ffffffff60e060020a60003504166312065fe0811461005a578063148f2e5e1461007c5780633ba15036146100ac57806390b08a52146100d0578063b603cd80146100f2575b6100585b5b565b005b341561006257fe5b61006a610116565b60408051918252519081900360200190f35b341561008457fe5b610098600160a060020a0360043516610125565b604080519115158252519081900360200190f35b34156100b457fe5b610098610155565b604080519115158252519081900360200190f35b34156100d857fe5b61006a610183565b60408051918252519081900360200190f35b34156100fa57fe5b61009861018a565b604080519115158252519081900360200190f35b600160a060020a033016315b90565b600154604051600091600160a060020a0384169181156108fc02919084818181858888f19450505050505b919050565b600154604051600091600160a060020a0333169181156108fc02919084818181858888f19450505050505b90565b6001545b90565b6000805433600160a060020a039081169116141561012257600054600160a060020a0316ff5b5b905600a165627a7a72305820ced01e44099f4e9ed23e831ac549ea7cb125912dca9e949812b61296052a40ef0029",
    info: {
      abiDefinition: [{
    constant: false,
    inputs: [],
    name: "getBalance",
    outputs: [{
        name: "",
        type: "uint256"
    }],
    payable: false,
    type: "function"
}, {
    constant: false,
    inputs: [{
        name: "toWhom",
        type: "address"
    }],
    name: "sendWei",
    outputs: [{
        name: "",
        type: "bool"
    }],
    payable: false,
    type: "function"
}, {
    constant: false,
    inputs: [],
    name: "getWei",
    outputs: [{
        name: "",
        type: "bool"
    }],
    payable: false,
    type: "function"
}, {
    constant: false,
    inputs: [],
    name: "getSendAmount",
    outputs: [{
        name: "",
        type: "uint256"
    }],
    payable: false,
    type: "function"
}, {
    constant: false,
    inputs: [],
    name: "killMe",
    outputs: [{
        name: "",
        type: "bool"
    }],
    payable: false,
    type: "function"
}, {
    inputs: [],
    payable: true,
    type: "constructor"
}, {
    payable: true,
    type: "fallback"
}]
,
      compilerOptions: "--combined-json bin,abi,userdoc,devdoc --add-std --optimize",
      compilerVersion: "0.4.9",
      developerDoc: {
        methods: {}
      },
      language: "Solidity",
      languageVersion: "0.4.9",
      source: "pragma solidity ^0.4.5; contract Faucet { address owner; uint256 sendAmount; function Faucet() payable { owner = msg.sender; sendAmount = 1000000000000000000; } function getBalance() returns (uint) { return this.balance; } function getWei() returns (bool) { return msg.sender.send(sendAmount); } function sendWei(address toWhom) returns (bool) { return toWhom.send(sendAmount); } function getSendAmount() returns (uint256) { return sendAmount; } function killMe() returns (bool) { if (msg.sender == owner) { suicide(owner); return true; } } function () payable {} }",
      userDoc: {
        methods: {}
      }
    }
  }
}
