/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  BigNumberish,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../../../common";
import type {
  Redemption,
  RedemptionInterface,
} from "../../../../../src/register/coupon/redemption/Redemption";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_registerContract",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_maturityDate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_nbDays",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_recordDate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_cutOfTime",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IRegister",
        name: "register",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "couponDate",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "enum ICoupon.CouponStatus",
        name: "status",
        type: "uint8",
      },
    ],
    name: "CouponChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IRegister",
        name: "register",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "couponDate",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "investor",
        type: "address",
      },
      {
        indexed: false,
        internalType: "enum ICoupon.PaymentStatus",
        name: "status",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "enum ICoupon.PaymentStatus",
        name: "previousStatus",
        type: "uint8",
      },
    ],
    name: "CouponPaymentStatusChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IRegister",
        name: "register",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "couponDate",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "enum ICoupon.CouponStatus",
        name: "status",
        type: "uint8",
      },
    ],
    name: "RedemptionChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IRegister",
        name: "register",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "couponDate",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "investor",
        type: "address",
      },
      {
        indexed: false,
        internalType: "enum ICoupon.PaymentStatus",
        name: "status",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "enum ICoupon.PaymentStatus",
        name: "previousStatus",
        type: "uint8",
      },
    ],
    name: "RedemptionPaymentStatusChanged",
    type: "event",
  },
  {
    inputs: [],
    name: "couponDate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "cutOfTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_investor",
        type: "address",
      },
    ],
    name: "getInvestorPayments",
    outputs: [
      {
        internalType: "enum ICoupon.PaymentStatus",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_investor",
        type: "address",
      },
    ],
    name: "getInvestorRedemptionPayments",
    outputs: [
      {
        internalType: "enum ICoupon.PaymentStatus",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_investor",
        type: "address",
      },
    ],
    name: "getMaturityAmountForInvestor",
    outputs: [
      {
        internalType: "uint256",
        name: "paymentAmount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_investor",
        type: "address",
      },
    ],
    name: "getPaymentAmountForInvestor",
    outputs: [
      {
        internalType: "uint256",
        name: "paymentAmount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTotalMaturityAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "paymentAmount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTotalPaymentAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "paymentAmount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "investorPayments",
    outputs: [
      {
        internalType: "enum ICoupon.PaymentStatus",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "investorRedemptionPayments",
    outputs: [
      {
        internalType: "enum ICoupon.PaymentStatus",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nbDays",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "payingAgent",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_investor",
        type: "address",
      },
    ],
    name: "paymentIdForInvest",
    outputs: [
      {
        internalType: "bytes8",
        name: "",
        type: "bytes8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_investor",
        type: "address",
      },
    ],
    name: "paymentIdRedemptionForInvest",
    outputs: [
      {
        internalType: "bytes8",
        name: "",
        type: "bytes8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "recordDate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "register",
    outputs: [
      {
        internalType: "contract IRegister",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rejectCoupon",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_recordDate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_cutOfTime",
        type: "uint256",
      },
    ],
    name: "setCutOffTime",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "setDateAsCurrentCoupon",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_nbDays",
        type: "uint256",
      },
    ],
    name: "setNbDays",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "status",
    outputs: [
      {
        internalType: "enum ICoupon.CouponStatus",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_investor",
        type: "address",
      },
    ],
    name: "toggleCouponPayment",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_investor",
        type: "address",
      },
    ],
    name: "toggleRedemptionPayment",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080604081815234620003705760a08262001ee5803803809162000024828562000375565b833981010312620003705781516001600160a01b03808216929091839003620003705760209182850151928286015193608060608801519701516000976001895560018060a01b03199188836007541617600755888360085416176008558651976338e5975560e21b8952600499338b8b015260249987818c81855afa90811562000366578d9162000344575b5015620002f05786868b8d8f8d5195869485936338e20fc560e11b85528401525af1908115620002e6578c91620002c4575b501562000282578460015560025562015180918281068103908111620002705760035506875560058054909116331790556008805460ff60a01b1916905560075484519183918391889183918c918916908281837fee1a084aa36acdbc1c32f808f87c6ef8ae26d4ad59293c32244b1b72466bb7608380a463d4cdda9160e01b84528c8401525af19081156200026657879162000232575b5015620001e6575060075416906001549260ff60085460a01c16946005861015620001d55750507f6f3decef32bc5575fa4154c177d28de83ad12af68ef61bf36ad7c5be081654df90519480a4611b1b9081620003ca8239f35b634e487b7160e01b87526021905285fd5b8460228560849386519362461bcd60e51b85528401528201527f74686973206d61747572697479204461746520646f6573206e6f742065786973604482015261747360f01b6064820152fd5b620002579150823d84116200025e575b6200024e818362000375565b810190620003af565b386200017b565b503d62000242565b84513d89823e3d90fd5b634e487b7160e01b8b5260118a52888bfd5b875162461bcd60e51b8152808b01879052601f818b01527f7468697320636f75706f6e4461746520646f6573206e6f7420657869737473006044820152606490fd5b620002df9150873d89116200025e576200024e818362000375565b38620000e3565b89513d8e823e3d90fd5b885162461bcd60e51b8152808c018890526029818c01527f53656e646572206d757374206265206120506179696e672063616c63756c61746044820152681a5bdb881859d95b9d60ba1b6064820152608490fd5b6200035f9150883d8a116200025e576200024e818362000375565b38620000b1565b8a513d8f823e3d90fd5b600080fd5b601f909101601f19168101906001600160401b038211908210176200039957604052565b634e487b7160e01b600052604160045260246000fd5b90816020910312620003705751801515810362000370579056fe6080604081815260048036101561001557600080fd5b600092833560e01c9081631aa3a0081461171f575080631dd5fc6314610eb5578063200d2ed2146116dc57806323bfa0f01461159a57806350cc45321461157b578063532e91cc146115225780635e4795a9146114f9578063683fffd5146113d95780636969a06f1461113257806369fb125e14610f8e5780637c61002414610ef657806384cd8c8614610eb557806386d49f7714610e965780639d5d5fa414610da8578063b77fea0114610857578063c4fa96b014610834578063ccc5d7e91461036c578063d64c0587146103af578063d927a6061461036c578063e505222b146102e8578063f4bcf2091461022f578063f68a3ab4146101405763fd3b44421461012057600080fd5b3461013c578260031936011261013c5760209250549051908152f35b8280fd5b50903461013c578060031936011261013c5760075481516338e5975560e21b8152338185015283359291602090829060249082906001600160a01b03165afa9182156102265750906101999185916101f8575b506117d3565b60ff60085460a01c1660058110156101e5576101b59015611831565b620151809081810681039081116101d25760035560243506905580f35b634e487b7160e01b845260118352602484fd5b634e487b7160e01b845260218352602484fd5b610219915060203d811161021f575b6102118183611799565b8101906117bb565b38610193565b503d610207565b513d86823e3d90fd5b50903461013c578260031936011261013c5760075481516338e5975560e21b815233848201526001600160a01b039091169190602081602481865afa9182156102265750906102849185916101f857506117d3565b600160a11b60ff60a01b196008541617908160085560ff6001549260a01c169260058410156102d557507fee1a084aa36acdbc1c32f808f87c6ef8ae26d4ad59293c32244b1b72466bb7608480a480f35b634e487b7160e01b855260219052602484fd5b503461013c57602036600319011261013c57356001600160a01b038116810361013c5760209250815190838201903060601b82526bffffffffffffffffffffffff199060601b166034830152693932b232b6b83a34b7b760b11b60488301526032825261035482611767565b67ffffffffffffffff60c01b91519020169051908152f35b503461013c57602036600319011261013c57356001600160a01b0381169081900361013c5760ff82846103ad93602096526009865220541691518092611744565bf35b503461013c5760209081600319360112610830576001600160a01b0381358181169491939085900361082c57836007541682519463c41251a160e01b8652868587015260249583818881865afa9081156108225790610415918a91610805575b5061192e565b60ff908160085460a01c169560058710156107f35760018097036107a057888a5260099788865283878c2054169487516321b0fc9560e11b8152338482015287818481855afa908115610779578d91610783575b50156105c55750898b5288865283878c20541660038110156105b35761053a576006544211156104ea575050916104e691600080516020611ac6833981519152959493898b52888552858b208860ff198254161790555b60075416965497898b528452848a205416926104de85518095611744565b830190611744565ba480f35b865162461bcd60e51b81529182018690526025908201527f74686520636f75706f6e20637574206f662074696d6520686173206e6f742070604482015264185cdcd95960da1b6064820152608490fd5b898b5288865283878c2054169060038210156105a2575087036105855750916104e691600080516020611ac6833981519152959493898b52888552858b2060ff1981541690556104c0565b855162461bcd60e51b815290819061059e908201611a47565b0390fd5b634e487b7160e01b8c52602183528bfd5b50634e487b7160e01b8b52602182528afd5b8751630d72032360e21b8152338482015287818481855afa908115610779578d9161075c575b501561074557868b838a51809481936308f92f4960e41b8352888301525afa90811561073b5790610627918d9161070e575b50841633146119ec565b898b5288865283878c20541660038110156105b3578803610674575050916104e691600080516020611ac6833981519152959493898b52888552858b20600260ff198254161790556104c0565b898b5288865283878c2054169060038210156105a257506002036106c25750916104e691600080516020611ac6833981519152959493898b52888552858b208860ff198254161790556104c0565b61059e90865191829162461bcd60e51b8352820160609060208152601d60208201527f496e76616c696420436f75706f6e207061796d656e742073746174757300000060408201520190565b61072e9150883d8a11610734575b6107268183611799565b8101906119cd565b3861061d565b503d61071c565b88513d8e823e3d90fd5b875162461bcd60e51b81528061059e81860161197a565b6107739150883d8a1161021f576102118183611799565b386105eb565b89513d8f823e3d90fd5b61079a9150883d8a1161021f576102118183611799565b38610469565b855162461bcd60e51b81529081018590526028818901527f54686520737461747573206f662074686520636f75706f6e2073686f756c6420604482015267626520526561647960c01b6064820152608490fd5b634e487b7160e01b8a52602190528689fd5b61081c9150853d871161021f576102118183611799565b3861040f565b85513d8b823e3d90fd5b8580fd5b8380fd5b5050346108535781600319360112610853576020906001549051908152f35b5080fd5b50903461013c57602080600319360112610830576001600160a01b038335818116939084900361082c576108896118af565b600754815163c41251a160e01b81528681018690526024949184169082818781855afa908115610d9e57906108c4918a91610d87575061192e565b60ff938460085460a01c16976005891015610d75576001809903610d1e57878a52600a9687855286868c2054169386516321b0fc9560e11b8152338482015286818481855afa908115610cf7578d91610d01575b5015610b665750888b5287855286868c20541660038110156105b357610b0357600654421115610ab157888b52878552858b208a60ff198254161790558a836007541687516370a0823160e01b81528b8582015287818581855afa908115610aa7578391610a71575b506109c7575b50505050600080516020611aa68339815191529392916109c1915b6007541695895497898c528452848b205416926104de85518095611744565ba4815580f35b8690838c8a5194859384926355e1679560e11b8452898401525af1908115610a67578c91610a4a575b50156109fd578a81610987565b855162461bcd60e51b81529182018590526022908201527f72657475726e2062616c616e636520657870656374656420627574206661696c604482015261195960f21b6064820152608490fd5b610a619150863d881161021f576102118183611799565b386109f0565b87513d8e823e3d90fd5b809350888092503d8311610aa0575b610a8a8183611799565b81010312610a9b578c915138610981565b600080fd5b503d610a80565b89513d85823e3d90fd5b855162461bcd60e51b81529182018590526027908201527f746865206d6174757269747920637574206f662074696d6520686173206e6f74604482015266081c185cdcd95960ca1b6064820152608490fd5b888b5287855286868c2054169060038210156105a257508903610b4d5750868952858352838920805460ff19169055600080516020611aa68339815191529392916109c1916109a2565b845162461bcd60e51b815290819061059e908201611a47565b8651630d72032360e21b8152338482015286818481855afa908115610cf7578d91610cda575b5015610cc357858a838951809481936308f92f4960e41b8352888301525afa908115610a675790610bc7918d91610cac5750841633146119ec565b888b5287855286868c20541660038110156105b3578a03610c13575050868952858352838920805460ff19166002179055600080516020611aa68339815191529392916109c1916109a2565b888b5287855286868c2054169060038210156105a25750600203610c605750868952858352838920805460ff191689179055600080516020611aa68339815191529392916109c1916109a2565b61059e90855191829162461bcd60e51b8352820160609060208152601d60208201527f496e76616c696420436f75706f6e207061796d656e742073746174757300000060408201520190565b61072e9150873d8911610734576107268183611799565b865162461bcd60e51b81528061059e81860161197a565b610cf19150873d891161021f576102118183611799565b38610b8c565b88513d8f823e3d90fd5b610d189150873d891161021f576102118183611799565b38610918565b845162461bcd60e51b8152908101849052602c818801527f54686520737461747573206f662074686520526564656d7074696f6e2073686f60448201526b756c6420626520526561647960a01b6064820152608490fd5b634e487b7160e01b8a52602190528589fd5b61081c9150843d861161021f576102118183611799565b84513d8b823e3d90fd5b503461013c578260031936011261013c5760075482516329fcbdbb60e21b8152602094916001600160a01b031685828581845afa918215610e8c579086918493610e5b575b5085516318160ddd60e01b815294859182905afa918215610e505791610e1f575b610e189250611905565b9051908152f35b90508382813d8311610e49575b610e368183611799565b81010312610a9b57610e18915190610e0e565b503d610e2c565b8451903d90823e3d90fd5b8281939294503d8311610e85575b610e738183611799565b81010312610a9b578590519138610ded565b503d610e69565b85513d85823e3d90fd5b5050346108535781600319360112610853576020906002549051908152f35b503461013c57602036600319011261013c57356001600160a01b0381169081900361013c5760ff82846103ad9360209652600a865220541691518092611744565b503461013c57602036600319011261013c5760075482516338e5975560e21b8152338382015290602090829060249082906001600160a01b03165afa908115610f8157610f4b92935084916101f857506117d3565b60ff60085460a01c166005811015610f6e57610f679015611831565b3560025580f35b634e487b7160e01b835260218252602483fd5b50505051903d90823e3d90fd5b503461013c576020928360031936011261112f576001600160a01b038235818116810361013c5760075485516329fcbdbb60e21b81529290811687848781845afa9384156110f35786939291899187966110fd575b508851630e409fdf60e21b815297889182905afa9586156110f357908893929186976110bc575b5060085460015489516307b2d9e360e01b81526001600160a01b039094169484019485526020850152919392849290911690829081906040015b03915afa9283156110b15792611080575b506101689261106a6110789361106f93611905565b611905565b60025490611905565b049051908152f35b91508482813d83116110aa575b6110978183611799565b81010312610a9b57905190610168611055565b503d61108d565b8551903d90823e3d90fd5b84819493959298503d83116110ec575b6110d68183611799565b81010312610a9b5790519487929061104461100a565b503d6110cc565b87513d87823e3d90fd5b9450945083813d8311611128575b6111158183611799565b81010312610a9b57878693519438610fe3565b503d61110b565b80fd5b50903461013c578260031936011261013c5761114c6118af565b60075481516338e5975560e21b815233848201526001600160a01b03926024926020929085169083818681855afa9081156113cf57906111929189916113b857506117d3565b60ff60085460a01c1660058110156113a65787916111b1859215611831565b85600154855194859384926338e20fc560e11b84528c8401525af190811561132c578791611389575b5015611348578360075416600154600354908754820180921161133657908891833b1561013c576044908386519586948593630c14a5d360e21b85528d8501528a8401525af1801561132c576112ff575b506008548151634f7cc36f60e11b81529092808288818988165afa9283156112f6575087926112c8575b505060065560ff60a01b1916600160a01b17600881905560075460015460a09290921c60ff1694919316919060058510156112b75750507fee1a084aa36acdbc1c32f808f87c6ef8ae26d4ad59293c32244b1b72466bb7608480a46001815580f35b634e487b7160e01b86526021905284fd5b90809250813d83116112ef575b6112df8183611799565b81010312610a9b57513880611255565b503d6112d5565b513d89823e3d90fd5b67ffffffffffffffff819792971161131a578652943861122b565b634e487b7160e01b8252604186528382fd5b82513d89823e3d90fd5b634e487b7160e01b8952601188528589fd5b5162461bcd60e51b815293840152601f90830152507f7468697320636f75706f6e4461746520646f6573206e6f742065786973747300604482015260649150fd5b6113a09150833d851161021f576102118183611799565b386111da565b634e487b7160e01b8852602187528488fd5b6102199150853d871161021f576102118183611799565b83513d8a823e3d90fd5b50913461112f5760209283600319360112610853576001600160a01b0391813583811681036108535782908685600754168751958680926329fcbdbb60e21b82525afa9384156114ef579087929184956114b9575b5060085460015488516307b2d9e360e01b81526001600160a01b0390931693830193845260208401529495939490938492911690829081906040015b03915afa918215610e50578092611487575b5050610e1891611905565b9091508482813d83116114b2575b61149f8183611799565b8101031261112f575051610e183861147c565b503d611495565b80929495508391933d83116114e8575b6114d38183611799565b8101031261083057519291869161146a61142e565b503d6114c9565b86513d85823e3d90fd5b50503461085357816003193601126108535760055490516001600160a01b039091168152602090f35b503461013c57602036600319011261013c57356001600160a01b038116810361013c5760209250815190838201903060601b82526bffffffffffffffffffffffff199060601b1660348301526028825261035482611767565b5050346108535781600319360112610853576020906003549051908152f35b50913461112f578060031936011261112f5760075482516329fcbdbb60e21b81526020946001600160a01b03909216929185828281875afa918215610e8c5783926116ad575b508451630e409fdf60e21b81529386858381845afa9485156116a3579087918596611672575b5086516318160ddd60e01b815292839182905afa9283156110b157809361163e575b50506101689261106a6110789361106f93611905565b909192508582813d831161166b575b6116578183611799565b8101031261112f575051908261106a611628565b503d61164d565b8281939297503d831161169c575b61168a8183611799565b81010312610830578690519438611606565b503d611680565b86513d86823e3d90fd5b9091508581813d83116116d5575b6116c58183611799565b8101031261013c575190386115e0565b503d6116bb565b5091903461085357816003193601126108535760ff60085460a01c16905191600582101561170c57602083838152f35b634e487b7160e01b815260218452602490fd5b8490346108535781600319360112610853576007546001600160a01b03168152602090f35b9060038210156117515752565b634e487b7160e01b600052602160045260246000fd5b6060810190811067ffffffffffffffff82111761178357604052565b634e487b7160e01b600052604160045260246000fd5b90601f8019910116810190811067ffffffffffffffff82111761178357604052565b90816020910312610a9b57518015158103610a9b5790565b156117da57565b60405162461bcd60e51b815260206004820152602960248201527f53656e646572206d757374206265206120506179696e672063616c63756c61746044820152681a5bdb881859d95b9d60ba1b6064820152608490fd5b1561183857565b60a460405162461bcd60e51b815260206004820152604460248201527f54686520636f75706f6e20646174652063616e206265206d6f6469666965642060448201527f6f6e6c792069662074686520636f6e74726163742073746174757320697320446064820152631c98599d60e21b6084820152fd5b6002600054146118c0576002600055565b60405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606490fd5b8181029291811591840414171561191857565b634e487b7160e01b600052601160045260246000fd5b1561193557565b60405162461bcd60e51b815260206004820152601c60248201527f5468697320696e766573746f72206973206e6f7420616c6c6f776564000000006044820152606490fd5b60809060208152603260208201527f73656e646572206d7573742062652043656e7472616c204163636f756e74204b60408201527132b2b832b91037b91021bab9ba37b234b0b760711b60608201520190565b90816020910312610a9b57516001600160a01b0381168103610a9b5790565b156119f357565b60405162461bcd60e51b815260206004820152602660248201527f596f7520617265206e6f7420637573746f6469616e206f66207468697320696e6044820152653b32b9ba37b960d11b6064820152608490fd5b60809060208152604060208201527f54686520737461747573206f66207468697320696e766573746f72277320706160408201527f796d656e742073686f756c642062652050616964206f7220546f4265506169646060820152019056fe5015a18308d4635883292e9e27e8d94d9fc784749d47aa7f18d6f3ad2ad97e7371a813fb36e2b43b4fcd5b541937f3501c4bb733759aa470d700efb9b7fd5b14a2646970667358221220fde7a06b8b07fb71cd537a790167efcd9286c489dda6f7eace53ba25b0b5a52b64736f6c63430008140033";

type RedemptionConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RedemptionConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Redemption__factory extends ContractFactory {
  constructor(...args: RedemptionConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _registerContract: AddressLike,
    _maturityDate: BigNumberish,
    _nbDays: BigNumberish,
    _recordDate: BigNumberish,
    _cutOfTime: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      _registerContract,
      _maturityDate,
      _nbDays,
      _recordDate,
      _cutOfTime,
      overrides || {}
    );
  }
  override deploy(
    _registerContract: AddressLike,
    _maturityDate: BigNumberish,
    _nbDays: BigNumberish,
    _recordDate: BigNumberish,
    _cutOfTime: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(
      _registerContract,
      _maturityDate,
      _nbDays,
      _recordDate,
      _cutOfTime,
      overrides || {}
    ) as Promise<
      Redemption & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Redemption__factory {
    return super.connect(runner) as Redemption__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RedemptionInterface {
    return new Interface(_abi) as RedemptionInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Redemption {
    return new Contract(address, _abi, runner) as unknown as Redemption;
  }
}