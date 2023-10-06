import { useContext, useEffect, useState } from 'react';

import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { ExpensesContext } from '../store/expenses-context';
import { fetchExpenses } from '../utils/httpRequests';
import Loading from '../components/UI/Loading';
import Error from '../components/UI/Error'
function AllExpenses() {
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState();
  const expensesCtx = useContext(ExpensesContext);

  useEffect(() => {
    async function getExpenses() {
      try {
        const expense = await fetchExpenses();
        expensesCtx.setExpenses(expense)
      } catch (error) {
        setError('Giderler Bulunamadı Uygulamayı Tekrar Açmayı Deneyiniz');
      }
      setIsFetching(false);
      
    }

    getExpenses()
  }, [])

  if (error && !isFetching) {
    return <Error message={error} />
  }

  if (isFetching) {
    return <Loading />
  }

  return (
    <ExpensesOutput
      expenses={expensesCtx.expenses}
      fallbackText="Eklenmiş Gider Bulunmamaktadır" />
  )
}

export default AllExpenses;