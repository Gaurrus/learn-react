import { Table } from '../table'

export const App = () => {
  const isTableVisible = true;
  return isTableVisible ? <Table/> : <h1>Пусто</h1>
}
