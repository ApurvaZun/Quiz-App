export const fetchQuizQuetions = async (amount: number) => {
    const response = await fetch(`https://opentdb.com/api.php?amount=${amount}&difficulty=easy&type=multiple`);
    const data = await response.json();
    return data;
}