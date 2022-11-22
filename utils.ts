import {IStock, ITransaction} from "./interface";
const stocks = require('./stock.json')
const transactions = require('./transactions.json')

/**
 * @description check the sku if it is validated and returns the stock data
 * @param sku : string
 * @return IStock
 */
export function getStock(sku: string): IStock{
    const filteredStock : IStock[]  = stocks.filter((value : IStock)=>{
        return value.sku === sku
    })
    return  filteredStock[0] || null
}

/**
 * @description get the stock transactions
 * @param sku : string
 * @return ITransaction[]
 */
export function getStockTransactions(sku: string):ITransaction[]{
    return  transactions.filter((value: ITransaction)=>{
        return value.sku === sku
    })
}

/**
 * @description calculate the sum of transaction based on the type of transaction
 * @param transactions : ITransaction[]
 * @param type : order | refund
 * @returns number
 * */
export function getStockTransactionTypeComputation(transactions : ITransaction[], type : 'order' | 'refund'): number{
    return transactions.filter((value)=> value.type === type).reduce((base, object) => base + object.qty, 0)
}


