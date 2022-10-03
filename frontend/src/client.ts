export type Account = {
    id: string,
    iban: string,
    owner: string
}

export type Transaction = {
    id: string,
    accountId: string,
    category: string,
    amount: string,
    date: string,
    currency: string
}

export class APIClient {

    baseURL = 'http://localhost:8000';

    private get<T>(endpoint: string, params?: URLSearchParams): Promise<T> {
        const url = new URL(endpoint, this.baseURL);
        return fetch(`${url}?${params?.toString()}`).then(res => res.json());
    }

    getAllAccounts() {
        return this.get<Account[]>('accounts');
    }

    getAccount(id: string) {
        return this.get<Account>(`accounts/${id}`);
    }

    getAccountTransactions(id: string, categories: string[]) {
        const params = new URLSearchParams();
        categories.forEach(category => params.append('category', category));
        return this.get<Transaction[]>(`accounts/${id}/transactions`, params);
    }
}