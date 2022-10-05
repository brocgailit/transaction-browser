import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import AccountIcon from '../AccountIcon.vue'

describe('AccountIcon', () => {
  it('renders account owner initials', () => {

    const wrapper = shallowMount(AccountIcon, {
      props: { owner: 'Broc Gailit' }
    });
    
    expect(wrapper.text()).toContain('BG');

  })
})