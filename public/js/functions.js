let questionObject = {
    level : '',
    question : '',
    correctQuery: ''      
};


let questionArray = [];

for (let i = 0; i < 10; i++)
{
    questionArray.push(questionObject);

    questionArray[i].level = i;
    questionArray[i].question = 'Abobrinha';
    questionArray[i].correctQuery = 'SELECT * FROM Abobrinha';

    console.log(questionArray[i])
}