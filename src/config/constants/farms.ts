import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 1,
    risk: 10,
    lpSymbol: 'GOOSE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xbe7dd082da7269ea48e99fdd70b74e3ffdd50883', // to-do may-20
    },
    tokenSymbol: 'GOOSE',
    tokenAddresses: {
      97: '',
      56: '0x347816627bb565eaD69475f41DF1403016b807f2',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 0,
    risk: 2,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
]

export default farms
