/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  AddressUtilsMock,
  AddressUtilsMockInterface,
} from "../../../src/utils/AddressUtilsMock";

const _abi = [
  {
    inputs: [],
    name: "AddressUtils__InsufficientBalance",
    type: "error",
  },
  {
    inputs: [],
    name: "AddressUtils__NotContract",
    type: "error",
  },
  {
    inputs: [],
    name: "AddressUtils__SendValueFailed",
    type: "error",
  },
  {
    inputs: [],
    name: "UintUtils__InsufficientHexLength",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "string",
        name: "error",
        type: "string",
      },
    ],
    name: "functionCall",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "functionCall",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "functionCallWithValue",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "error",
        type: "string",
      },
    ],
    name: "functionCallWithValue",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "isContract",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "sendValue",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "toString",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080806040523461001657610659908161001c8239f35b600080fdfe6080604052600436101561001257600080fd5b60003560e01c80631627905514610087578063241b58861461008257806324a084df1461007d5780632a0115941461007857806356ca623e14610073578063a0b5ffb01461006e5763d525ab8a1461006957600080fd5b610482565b6103fa565b610342565b6102aa565b610255565b6101d9565b346100b05760203660031901126100b0576004356100a4816100b5565b3b151560805260206080f35b600080fd5b6001600160a01b038116036100b057565b634e487b7160e01b600052604160045260246000fd5b604051906060820182811067ffffffffffffffff8211176100fc57604052565b6100c6565b6040519190601f01601f1916820167ffffffffffffffff8111838210176100fc57604052565b67ffffffffffffffff81116100fc57601f01601f191660200190565b81601f820112156100b05780359061016261015d83610127565b610101565b92828452602083830101116100b057816000926020809301838601378301015290565b919082519283825260005b8481106101b1575050826000602080949584010152601f8019910116010190565b602081830181015184830182015201610190565b9060206101d6928181520190610185565b90565b346100b05760603660031901126100b0576004356101f6816100b5565b67ffffffffffffffff6024358181116100b057610217903690600401610143565b916044359182116100b0576102519261023761023d933690600401610143565b9161050f565b604051918291602083526020830190610185565b0390f35b346100b05760403660031901126100b057600435610272816100b5565b600080808080946024359060018060a01b03165af161028f6104e9565b50156102985780f35b60405163c6d73c5560e01b8152600490fd5b346100b05760603660031901126100b0576004356102c7816100b5565b60243567ffffffffffffffff81116100b057610251916102ee61023d923690600401610143565b906102f76100dc565b91602e83527f416464726573735574696c733a206661696c6564206c6f772d6c6576656c206360208401526d616c6c20776974682076616c756560901b6040840152604435916105a3565b346100b05760203660031901126100b05760048035610360816100b5565b6001600160a01b03166103716105c8565b90603061037d836105f5565b53607861038983610602565b5360295b600181116103ba57506103aa5761025190604051918291826101c5565b5060405163c913478560e01b8152fd5b90600f811660108110156103f5576f181899199a1a9b1b9c1cb0b131b232b360811b901a6103e88385610612565b53831c906000190161038d565b6105df565b346100b05760403660031901126100b057600435610417816100b5565b60243567ffffffffffffffff81116100b0576102519161043e61023d923690600401610143565b6104466100dc565b91602383527f416464726573735574696c733a206661696c6564206c6f772d6c6576656c2063602084015262185b1b60ea1b604084015261050f565b346100b05760803660031901126100b05760043561049f816100b5565b67ffffffffffffffff6024358181116100b0576104c0903690600401610143565b6064359182116100b057610251926104df61023d933690600401610143565b91604435916105a3565b3d1561050a573d906104fd61015d83610127565b9182523d6000602084013e565b606090565b803b156105715781600092918360208194519301915af19061052f6104e9565b9115610539575090565b8151156105495750805190602001fd5b60405162461bcd60e51b81526020600482015290819061056d906024830190610185565b0390fd5b604051632270d6bf60e21b8152600490fd5b9190823b15610571576000928392602083519301915af19061052f6104e9565b9291904782116105b6576101d693610583565b60405163c052e61b60e01b8152600490fd5b6105d06100dc565b602a8152906040366020840137565b634e487b7160e01b600052603260045260246000fd5b8051156103f55760200190565b8051600110156103f55760210190565b9081518110156103f557016020019056fea26469706673582212207851e902eff2bbacc7e301ef94851c8a7f67069a0041c636d672e1d5604b5ea964736f6c63430008140033";

type AddressUtilsMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AddressUtilsMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AddressUtilsMock__factory extends ContractFactory {
  constructor(...args: AddressUtilsMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      AddressUtilsMock & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): AddressUtilsMock__factory {
    return super.connect(runner) as AddressUtilsMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AddressUtilsMockInterface {
    return new Interface(_abi) as AddressUtilsMockInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): AddressUtilsMock {
    return new Contract(address, _abi, runner) as unknown as AddressUtilsMock;
  }
}