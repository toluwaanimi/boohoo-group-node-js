import { main } from '../index';

describe('SKU Test', () => {
    test('return the current stock levels for a given SKU', async () => {
        const response = await main('LTV719449/39/39')
        expect(typeof response.sku).toBe('string')
        expect(typeof response.qty).toBe('number')
    });

    test('Transactions may exist for SKUs which are not present in `stock.json`. It should be assumed that the starting quantity for this is 0.', async () => {
        const response = await main('KED089097/68/19')
        expect(typeof response.sku).toBe('string')
        expect(typeof response.qty).toBe('number')
    });

    test('The function must throw an error where the SKU does not exist in the `transactions.json` and `stock.json` file', async () => {
        await expect(main('LTV719449/39/039')).rejects.toThrow('SKU does not exist');
    });
});