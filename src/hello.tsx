import React, {useState, useEffect} from 'react';
import {AgGridReact} from 'ag-grid-react';
import {GridApi, ColDef, ICellRendererParams} from 'ag-grid-community';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

const columnDefs: ColDef[] = [{
  headerName: "Make", field: "make", sortable: true, filter: true, editable: true, width: 100
}, {
  headerName: "Model", field: "model", sortable: true, filter: true, editable: true, width: 100
}, {
  headerName: "Price", field: "price", sortable: true, filter: true, editable: true, width: 100
}]

type Data = {
  make: string,
  model: string,
  price: number
};

const rowData: Data[] = [
  {make: "Toyota", model: "Celica", price: 35000},
  {make: "Ford", model: "Mondeo", price: 32000},
  {make: "Porsche", model: "Boxter", price: 72000},
];

function newData(): Data {
  return {
    make: "NewMake", model: "NewModel", price: 999
  }
}

export default function Hello() {
  const [gridApi, setGridApi] = useState<GridApi>(null as any)

  useEffect(() => {
    if (gridApi) {
      gridApi.setDomLayout('autoHeight');
    }
  }, [gridApi]);

  return <div>
    <h1>Hello React-AgGrid</h1>
    <div className="ag-theme-balham">
      <AgGridReact
        columnDefs={columnDefs}
        rowSelection='multiple'
        rowData={rowData}
        singleClickEdit={true}
        onGridReady={params => setGridApi(params.api)}
        stopEditingWhenGridLosesFocus={true}>
        {/*domLayout='autoHeight' FIXME not sure why this cause "can't conver null or undefined to object error" */}
      </AgGridReact>
    </div>
  </div>
};
