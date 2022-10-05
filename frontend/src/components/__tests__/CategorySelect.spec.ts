import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import type { Transaction } from '@/client'
import CategorySelect from '../CategorySelect.vue'

describe('CategorySelect', () => {
  it('renders category names', () => {

    const categories = ['one', 'two', 'three'];

    const wrapper = shallowMount(CategorySelect, {
      props: { categories }
    });
    
    expect(wrapper.text()).toContain(categories[0]);

  })
})