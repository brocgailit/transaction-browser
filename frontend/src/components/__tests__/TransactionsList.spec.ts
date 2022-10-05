import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import type { Transaction } from '@/client'
import TransactionsList from '../TransactionsList.vue'


const transactions: Transaction[] = [
  {
    id: 'abc-123',
    accountId: 'xyz-456',
    currency: 'EUR',
    category: 'Shopping',
    amount: 1000,
    date: new Date('01-12-1981').toISOString()
  },
  {
    id: 'abc-789',
    accountId: 'xyz-101',
    currency: 'EUR',
    category: 'Gambling',
    amount: 500,
    date: new Date('12-01-1981').toISOString()
  }
];

const mountOptions = {
  shallow: true,
  props: { transactions },
  global: {
    stubs: {
      TransactionListItem: false
    }
  }
};

describe('TransactionList', () => {
  it('renders list of transactions', () => {
    const wrapper = mount(TransactionsList, mountOptions);
    expect(wrapper.text()).toContain(transactions[0].id);
    expect(wrapper.text()).toContain(transactions[1].id);
  })
})