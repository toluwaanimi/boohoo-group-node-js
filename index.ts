import {getStock, getStockTransactions, getStockTransactionTypeComputation} from "./utils";

/**
 * @param sku : string
 * @return {Promise<{sku: string, qty: number }>}
 */
export async function main(sku: string) :Promise<{ sku: string, qty: number }>{
    // get stock
    const stock = getStock(sku)
    // get stock for transaction
    const transactions = getStockTransactions(sku);
    // check for stock and transaction record
    if (!stock && transactions.length <= 0){
        throw new Error('SKU does not exist')
    }

    // calculate sum order
    const order : number = getStockTransactionTypeComputation(transactions, 'order');
    // calculate sum of refund
    const refund : number = getStockTransactionTypeComputation(transactions, 'refund');
    // calculate current stock level
    const qty = stock ? (stock.stock + refund) - order : refund - order
    return {
        sku,
        qty
    }
}

main('KED089097/68/19').then(
    console.log
)