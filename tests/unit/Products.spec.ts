

// @ts-ignore


import Products from '../../src/components/Products.vue'
import { shallowMount } from '@vue/test-utils'

describe('Products', () => {
    it('affiche tous les types de pizzas', () => {
      const wrapper = shallowMount(Products, {
        data() {
            return {
              types: ["royale", "orientale", "4 fromages", "barbecue", "vegetarienne"],
              price: 12,
              image: "../assets/images/pizza2.jpg",
              ingredients: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            };
          }
      })
  
      expect(wrapper.findAll('h3').length).toEqual(5)
    })
  })