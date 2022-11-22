export interface IStock{
    stock : number
    sku : string
}

export interface ITransaction{
    sku: string
    type: 'order' | 'refund'
    qty: number
}