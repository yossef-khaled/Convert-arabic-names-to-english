import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    {
        field: 'id',
        headerName: 'ID',
        width: '90'
    },
    {
        field: 'nameInEnglish', 
        headerName: 'Names In English',
        width: '250',
        editable: true
    },
    {
        field: 'nameInArabic',
        headerName: 'الأسماء باللغة العربية',
        width: '250',
        editable: true
    }
];

function NamesGrid(props) {

    var rows = [{id: 1, nameInEnglish: "---",nameInArabic: "---"}];
    var row = {};

    props.names.map((name) => {
        var tokenizedFullName = name.split(' ');
        var nameInEnglish = '';
        var nameInArabic = '';

        tokenizedFullName.map((tokenName) => {
            props.namesDB.map((nameEntity) =>{
                if(nameEntity.nameProbabilities) {
                    if(nameEntity.nameProbabilities.includes(tokenName)) {
                        nameInEnglish = nameInEnglish.concat(` ${nameEntity.translatedName}`);
                        nameInArabic = nameInArabic.concat(` ${nameEntity.nameProbabilities[0]}`);
                    }
                }
            });
        })

        row = ({
            id: props.names.indexOf(name) + 1,
            nameInEnglish: nameInEnglish,
            nameInArabic: nameInArabic
        })
        rows.push(row);
    })


    return(
        <div style={{ height: 400, width: '50%', marginRight: "auto", marginLeft: "auto", marginTop: "3rem" }}>
            <DataGrid
                columns={columns}
                rows={rows}
            />
        </div>
    )
};

export default NamesGrid;