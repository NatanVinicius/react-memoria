import androidIcon from '../svgs/android.svg';
import caminhaoIcon from '../svgs/caminhao.svg';
import disneyIcon from '../svgs/disney.svg';
import estrelaIcon from '../svgs/estrela.svg';
import gasolinaIcon from '../svgs/gasolina.svg';
import motoIcon from '../svgs/moto.svg';

type Item = {
    name: string,
    icon?: any
};

export const Items: Item[] = [
    {name: 'androidIcon', icon: androidIcon},
    {name: 'caminhaoIcon', icon: caminhaoIcon},
    {name: 'disneyIcon', icon: disneyIcon},
    {name: 'estrelaIcon', icon: estrelaIcon},
    {name: 'gasolinaIcon', icon: gasolinaIcon},
    {name: 'motoIcon', icon: motoIcon}
];