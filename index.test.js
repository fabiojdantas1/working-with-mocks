const { error } = require('./src/constants');
const File = require('./src/file');
const { rejects, deepStrictEqual } = require('assert');

//establishing scenarios for carrying out the tests
(async() => {

  //comparing a rejection with a promise and getting the promise rejected in the function
   {
        const filePath = './mocks/emptyFile-invalid.csv'
        const rejection  = new Error(error.FILE_LENGTH_ERROR_MESSAGE)
        const result = File.csvToJson(filePath)
        await rejects(result, rejection)  
    }
    {
        const filePath = './mocks/fourItems-invalid.csv'
        const rejection  = new Error(error.FILE_LENGTH_ERROR_MESSAGE)
        const result = File.csvToJson(filePath)
        await rejects(result, rejection)   
    }

     //getting valid items without rejects with await
    {
        const filePath = './mocks/threeItems-valid.csv'
        const result = await File.csvToJson(filePath)
        const expected = [
            {
                "id": 123,
                "name": "Fabio Dantas",
                "professional": "JavaScript Specialist",
                "birthDay": 1977
              },
              {
                "id": 321,
                "name": "Erick Wendel",
                "professional": "JavaScript Instructor",
                "birthDay": 1995
              },
              {
                "id": 231,
                "name": "Joaozinho",
                "professional": "Java Developer",
                "birthDay": 1992
              }
        ]
        deepStrictEqual(JSON.stringify(result), JSON.stringify(expected))
    }
})()