const describe = require('mocha').describe
const it = require('mocha').it
const expect = require('chai').expect
const strictlyEqual = require('../strict.')

     describe('strict', () => {
        describe('strictlyEqual', () => {
           it('asserts that any values given are the same type and wont need type conversion', () => {
              var num = ['5' + 5]

              strictlyEqual(num)

              expect(num).to.NaN




            describe('strict', () => {
               describe('strictlyEqual', () =>{
                  it('asserts that any values given will add up to the same total', () =>{
                     var num = [5 + 7]

                     strictlyEqual(num)

                     expect(num).to.equal(12)
                     


                     describe('strict', () => {
                        describe('strictlyEqual', () =>{
                           it('asserts that both the values given are equal to 10',() =>{
                              var num = [5 + 5]

                              strictlyEqual(num)

                              expect(num).to.equal(10)

                           })
                        })
                     })



                        })
                        })
                     })
                  })
               })
         
         })
      