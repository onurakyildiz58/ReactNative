import axios from "axios"

const URL = 'https://*******************.firebaseio.com'

export async function saveExpenses(description, amount, date) {
    try {
        const expenseData = {
            description: description,
            amount: amount,
            date: date
        };
        const response = await axios.post(URL + '/expenses.json', expenseData);
        const id = response.data.name;
        return id;
    } catch (error) {
        console.error('Error saving expense:', error);
    }
}

export async function fetchExpenses() {
    try {
        const response = await axios.get(URL + '/expenses.json');

        const expenses = [];

        for (const key in response.data) {
            const expenseObject = {
                id: key,
                description: response.data[key].description,
                amount: response.data[key].amount,
                date: new Date(response.data[key].date),
            }
            expenses.push(expenseObject);
        }

        return expenses;
    } catch (error) {
        console.error('Error saving expense:', error);
    }
}

export function updateExpenses(id, description, amount, date) {
    try {
        const expenseData = {
            description: description,
            amount: amount,
            date: date
        };
        return axios.put(URL + `/expenses/${id}.json`, expenseData);
    } catch (error) {
        console.error('Error saving expense:', error);
    }
}

export function deleteExpenses(id) {
    try {
        return axios.delete(URL + `/expenses/${id}.json`)
    } catch (error) {
        console.error('Error saving expense:', error);
    }
}