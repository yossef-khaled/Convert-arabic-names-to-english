import React, { useState } from 'react';

//Import from mui
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';

//Import fetch stuff
import { fetchNames } from '../../Shared/Actions';

//Import other components
import NamesGrid from '../NamesGridComponent/NamesGrid';

function Main(props) {
    
    const [names, setNames] = useState(['']);
    const [namesDB, setNamesDB] = useState(['']);
    const [showTranslatedNames, setShowTranslatedNames] = useState(false);
    
    const handleNamesChange = (e) => {
        setNames([e.target.value]);
    }
    
    const handleTranslation = () => {
        fetchNames()
        .then((fetchedData) => setNamesDB(fetchedData));
        setNames(names[0].split("\n"));
        setShowTranslatedNames(true);
    }

    console.log(names);

    return(
        <div>
            <TextareaAutosize
              aria-label="empty textarea"
              placeholder="ادخل الاسماء هنا"
              style={{ width: 400, height: 100, marginTop: "5rem" }}
              value={names}
              onChange={handleNamesChange}
            />
            <br/>
            <Button color="primary" style={{backgroundColor: "blue", marginTop: "2rem", width: 200}} onClick={handleTranslation}>
              <Typography style={{color: "white"}}>
                تحويل الأسماء إلى اللغة الإنجليزية
              </Typography>
            </Button>
            <NamesGrid 
                names={names}
                namesDB={namesDB}
                showTranslatedNames={showTranslatedNames}
            />
        </div>
    );
}

export default Main;