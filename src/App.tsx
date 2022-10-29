import { useState, useEffect } from 'react';
import * as C from './App.styles';

//img
import logoImage from './assets/devmemory_logo.png';
import restartIcon from './svgs/restart.svg';

//Componentes
import { ItemInfo } from './Components/ItemInfo';
import { Button } from './Components/Button';
import { GridItem } from './Components/GridItem';
import { Items } from './data/Items';

// types
import { GridItemsType } from './types/GridItemsType';
import { formatTimeElapsed } from './helpers/formatTimeElapsed';

const App = () => {
  const [playing, setPlaying] = useState<boolean>(false);
  const [timeElapsed, setTimeElapsed] = useState<number>(0);
  const [moveCount, setMoveCount] = useState<number>(0);
  const [shownCount, setShownCount] = useState<number>(0);
  const [gridItems, setGridItems] = useState<GridItemsType[]>([]);
  const [gridWinner, setGridWinner] = useState<number>(0);
  
  useEffect(() => resetAndCreateGrid(), []);

  useEffect(() => {
    const timer = setInterval(() => {
      if(playing) setTimeElapsed(timeElapsed + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [playing, timeElapsed]);

  useEffect(() => {
    if(shownCount == 2) {
      let opened = gridItems.filter((item) => item.shown == true);
      if(opened.length == 2) {
        // v1 = se eles são iguais, torna-los permanents.
        if(opened[0].item === opened[1].item) {
          let tmpGrid = [...gridItems];
          for(let i in tmpGrid) {
            if(tmpGrid[i].shown === true) {
              tmpGrid[i].permanentShown = true;
              tmpGrid[i].shown = false;
            };
            setGridWinner(gridWinner + 1);
            setGridItems(tmpGrid);
            setShownCount(0);
          };
        } else {
          // se eles não forem iguais, feche-os
          setTimeout(() => {  
            let tmpGrid = [...gridItems];
            for(let i in tmpGrid) {
              tmpGrid[i].shown = false;
            };
            setGridItems(tmpGrid);
            setShownCount(0);
          }, 1000);
        };
        setMoveCount(moveCount => moveCount + 1);
      };
    };
  }, [shownCount, gridItems]);

  useEffect(() => {
    if(moveCount > 0 && gridItems.every(item => item.permanentShown === true)) {
      setPlaying(false);
    };
  }, [moveCount]);

  const resetAndCreateGrid = () => {
    // Passo 1 - Resetar o jogo

    setTimeElapsed(0);
    setMoveCount(0);
    setShownCount(0);

    //Passo 2 - criar o grid e começar o jogo

    const tempGrid: GridItemsType[] = [];

    for(let i=0; i < (Items.length * 2); i++) tempGrid.push({
      item: null, shown: false, permanentShown: false
    });

    // preencher o grid
    for(let j=0; j < 2; j++) {
      for(let k=0; k < Items.length; k++) {
        let pos = -1;
        while(pos < 0 || tempGrid[pos].item !== null) {
          pos = Math.floor(Math.random() * (Items.length * 2));
        };
        tempGrid[pos].item = k;
      };
    };
    // jogar no state
    setGridItems(tempGrid);

    // iniciar jogo
    setPlaying(true);
  };

  const handleItemClick = (key: number) => {
    if(playing && key !== null && shownCount < 2) {
      let tmpGridItem = [...gridItems]; 
      if (!tmpGridItem[key].permanentShown && !tmpGridItem[key].shown) {
        tmpGridItem[key].shown = true;
        setShownCount(shownCount + 1);
      };
    
      setGridItems(tmpGridItem);
    };
  };


  return (
    <C.Container>
      <C.Info>
        <C.LogoLink href="#">
          <img src={logoImage} alt="logo image" />
        </C.LogoLink>
        <C.InfoArea>
          <ItemInfo label="Tempo" value={formatTimeElapsed(timeElapsed)} />
          <ItemInfo label="Movimentos" value={moveCount.toString()} />
        </C.InfoArea>
        <Button label='Reiniciar' icon={restartIcon} onClick={resetAndCreateGrid} />
      </C.Info>
      <C.GridArea>
        <C.Grid>
          {gridItems.map((item, key) => (
              <GridItem 
                item={item}
                key={key}
                onClick={() => handleItemClick(key)}
              />
          ))}
        </C.Grid>
      </C.GridArea>
    </C.Container>
  );
};

export default App;