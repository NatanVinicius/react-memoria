import * as C from './styles';
import { GridItemsType } from '../../types/GridItemsType'
import b7Svg from '../../svgs/b7.svg';
import { Items } from '../../data/Items';

type Props = {
    item: GridItemsType,
    onClick: () => void
}

export const GridItem = ( {item, onClick}: Props ) => {
    return (
        <C.Container
            showBackground={item.permanentShown || item.shown}
            onClick={onClick}
        >
            {!item.permanentShown && !item.shown &&
                <C.Icon src={b7Svg} opacity={.2} alt="logo" />
            }
            {(item.permanentShown || item.shown) && item.item !== null &&
                <C.Icon src={Items[item.item].icon} alt="logo" />
            }
        </C.Container>
    );
};