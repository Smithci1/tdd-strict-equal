const describe = require('mocha').describe
const it = require('mocha').it
const expect = require('chai').expect
const strictEqual = require('../strict.')

     describe('strict', () => {
        describe('strictEqual', () => {
           it('asserts that job applicant reaches the age requirement to work', () => {

            const appAge = 18
            const yoe = 0


            describe('strict', () => {
               describe('strictEqual', () =>{
                  it('asserts that job applicant has the years of experience required (yoe)', () =>{
                     const appAge = 21
                     const yoe = 2

                     describe('strict', () => {
                        describe('strictEqual', () => {
                           it('asserts the applicant as both the age and yoe required for the job', () => {
                              const appAge = 21
                              const yoe = 5
                           })


                        })
                        })
                     })
                  })
               })
         
         })
      