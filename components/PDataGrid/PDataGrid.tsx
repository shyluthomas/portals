'use client';

import { styled } from '@mui/material/styles'; // Update import
import { DataGrid, gridClasses } from '@mui/x-data-grid';
import type { DataGridProps } from '@mui/x-data-grid';
import React from 'react';

const CustomDataGrid = styled(DataGrid)(({ theme }) => ({
    [`&.${gridClasses.root}`]: {
        borderColor: theme.palette.brand.core['main'] // Fix typo
    }
}));

const PDataGrid = (props: DataGridProps) => {
    return (
        <CustomDataGrid
            scrollbarSize={8}
            rowHeight={40}
            columnHeaderHeight={40}
            pagination
            pageSizeOptions={[10, 20, 50]}
            initialState={{
                pagination: { paginationModel: { pageSize: 10 } },
            }}
            slots={{ ...props.slots }}
            {...props}
        />
    );
};

export default PDataGrid;
