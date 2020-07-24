let grades1 = [70, 78, 49, 50, 81, 48, 79];
adjustGrades(grades1); // grades1 should now be: [70, 80, 50, 50, 81, 50, 80]

function adjustGrades(anArray)
{
        for (let i = 0; i < anArray.length; i++)
        {
            if (anArray[i] >= 48 && anArray[i] < 50)
            {
                anArray[i] = 50;
            }
            if (anArray[i] >= 78 && anArray[i] < 80)
            {
                anArray[i] = 80;
            }
        }
}


console.log(grades1);