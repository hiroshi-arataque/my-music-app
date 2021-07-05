import './Style.css';


interface props {
  rows: Array<Object>;
  headerColumns: Array<string>;
}

function Table({ rows, headerColumns }: props) {
  return (
    <div className="Table-container">
      <div className="Table-heading">
        {headerColumns.map((header, index) => (
          <div className="Table-column" key={`header-${header}-${index}`}>{header}</div>
        ))}
      </div>
      {rows.map((row, index) => (
        <div className="Table-row" key={`row-${index}`}>
          {row.entries.map((rowItem: string, index: number) => (
            <div className="Table-column" key={`cell-${index}`}>{rowItem}</div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Table;
