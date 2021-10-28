import * as S from "./styles";
import { formatCurrentMonth } from '../../helpers/dateFilter';

type Props = {
  currentMonth: string;
}

export const InfoArea = ({ currentMonth }: Props) => {
  return (
    <S.Container>
      <S.MonthArea>
        <S.MonthAroow /* onClick={hendlePrevMonth} */ >⬅️</S.MonthAroow>
        <S.MonthTitle>{formatCurrentMonth(currentMonth)}</S.MonthTitle>
        <S.MonthAroow /* onClick={hendleNextMonth} */ >➡️</S.MonthAroow>
      </S.MonthArea>
      <S.ResumeArea>

      </S.ResumeArea>
    </S.Container>
  );
};
