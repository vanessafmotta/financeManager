import { useState, useEffect } from 'react';
import * as S from './App.styles';
import { Item } from './types/Item';
import { Category} from './types/Category';
import { categories } from './data/categories';
import { items } from './data/items';
import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter';
import { TableArea } from './components/TableArea'


const App = () => {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth);

  useEffect(()=>{
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  

  return(
    <S.Container>
      <S.Header>
        <S.HeaderText>Sistema Finaceiro</S.HeaderText>
      </S.Header>
      <S.Body>
        {/*  Área de informações  */}

        {/*  Área de inserção  */}

        <TableArea list={filteredList} />
      </S.Body>
    </S.Container>
  );
}

export default App;
