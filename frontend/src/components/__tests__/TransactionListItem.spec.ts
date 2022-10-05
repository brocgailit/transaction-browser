import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import type { Transaction } from '@/client'
import TransactionListItem from '../TransactionListItem.vue'

describe('TransactionListItem', () => {
  it('renders account', () => {

    const transaction: Transaction = {
        id: 'abc-123',
        accountId: 'xyz-456',
        currency: 'EUR',
        category: 'Shopping',
        amount: 1000,
        date: new Date().toISOString()
    };

    const wrapper = shallowMount(TransactionListItem, {
      props: { transaction }
    });
    
    expect(wrapper.text()).toContain(transaction.id);
    expect(wrapper.text()).toContain(transaction.category);

  })
})