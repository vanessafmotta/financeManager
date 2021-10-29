import * as S from "./styles";
import { formatCurrentMonth } from '../../helpers/dateFilter';
import { ResumeItem } from '../../components/ResumeItem'
type Props = {
  currentMonth: string;
  onMonthChange: (newMonth: string) => void;
  income: number;
  expense: number;
}

export const InfoArea = ({ currentMonth, onMonthChange, income, expense }: Props) => {

  const hendlePrevMonth = () => {
    let [year, month] = currentMonth.split('-');
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth(currentDate.getMonth() - 1);
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);

  }

  const hendleNextMonth = () => {
    let [year, month] = currentMonth.split('-');
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth(currentDate.getMonth() + 1);
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
  }

  return (
    <S.Container>
      <S.MonthArea>
        <S.MonthAroow onClick={hendlePrevMonth} >⬅️</S.MonthAroow>
        <S.MonthTitle>{formatCurrentMonth(currentMonth)}</S.MonthTitle>
        <S.MonthAroow onClick={hendleNextMonth} >➡️</S.MonthAroow>
      </S.MonthArea>
      <S.ResumeArea>
        <ResumeItem title="Receitas" value={income} />
        <ResumeItem title="Despesas" value={expense} />
        <ResumeItem title="Balanço" value={income - expense} color={(income - expense) < 0 ? 'red' : 'green'} />
      </S.ResumeArea>
    </S.Container>
  );
};
