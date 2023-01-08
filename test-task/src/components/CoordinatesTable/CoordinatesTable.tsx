import { Table } from 'antd';
import { useSelector } from 'react-redux';
import style from './CoordinatesTable.module.css'
import { columnsSelector, coordinatesSelector, orderNumbereSelector } from '../../redux/selectors/selectors';
import { useAppDispatch } from '../../redux/store';
import { sagaActions } from '../../redux/sagas/sagaActions';
import { setOrder, setOrderNumber } from '../../redux/slices/coordinatesSlice';

const CoordinatesTable = () => {
  const dispatch = useAppDispatch();
  const columns = useSelector(columnsSelector);
  const coordinates = useSelector(coordinatesSelector);
  const orderNumber = useSelector(orderNumbereSelector);

  let setRowClassName = (record: { key: number }) => {
    return record.key === orderNumber ? style.activeRoute : '';
  }
  return (
      <Table
        className={style.table}
        columns={columns}
        dataSource={coordinates}
        bordered
        onRow={() => {
          return {
            onClick: (e) => {
              dispatch(setOrderNumber(e.currentTarget.dataset.rowKey))
              dispatch(setOrder(coordinates[e.currentTarget.dataset.rowKey - 1]))
              dispatch({ type: sagaActions.FETCH_DATA_SAGA })
            }
          };
        }}
        rowClassName={setRowClassName}
      />
  )
}

export default CoordinatesTable;