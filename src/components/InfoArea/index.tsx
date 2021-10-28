import * as S from "./styles";
import { formatCurrentMonth } from '../../helpers/dateFilter';

type Props = {
  currentMonth: string;
  onMonthChange: (newMonth: string) => void;
}

export const InfoArea = ({ currentMonth, onMonthChange }: Props) => {

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

      </S.ResumeArea>
    </S.Container>
  );
};
