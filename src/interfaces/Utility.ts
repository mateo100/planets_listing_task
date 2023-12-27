export interface SingleCardInfo {
  label: string
  value: string
  icon: Icon
  isLink?: boolean
}

export enum Icon {
  People = 'mdi-account-group',
  Date = 'mdi-update',
  Theromemeter = 'mdi-thermometer',
  Earth = 'mdi-earth',
  Link = 'mdi-link',
  Rotation = 'mdi-rotate-3d-variant',
  Search = 'mdi-magnify',
  ArrowUp = 'mdi-arrow-up',
  ArrowDown = 'mdi-arrow-down',
  ErrorCircle = 'mdi-alert-circle'
}

export enum Sort {
  Ascending = 'asc',
  Descending = 'desc'
}
