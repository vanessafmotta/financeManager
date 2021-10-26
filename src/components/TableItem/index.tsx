import * as S from './styles'
import { Item } from '../../types/Item'

type Props = {
    item: Item
}
export const TableItem = ({item}: Props) => {
    return(
        <S.TableLine>
            <S.TableColumn>....</S.TableColumn>
            <S.TableColumn>{ item.category }</S.TableColumn>
            <S.TableColumn>{ item.title }</S.TableColumn>
            <S.TableColumn>R${ item.value }</S.TableColumn>
        </S.TableLine>
    );
}