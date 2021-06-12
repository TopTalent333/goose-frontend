import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },

  {
    label: 'Exchange',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://gooseswap.finance/#/swap',
      },
      {
        label: 'Liquidity',
        href: 'https://gooseswap.finance/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Info',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/gooseswap',
      },
      {
        label: 'Contract',
        href: 'https://bscscan.com/address/0x347816627bb565eaD69475f41DF1403016b807f2#code',
      },
      {
        label: 'Liquidity',
        href: 'https://bscscan.com/address/0xbe7dd082da7269ea48e99fdd70b74e3ffdd50883',
      },
      {
        label: 'WhitePaper',
        href: 'https://github.com/gooseswap/goose-frontend/blob/main/WhitePaper.pdf',
      },
    ],
  },
]

export default config
