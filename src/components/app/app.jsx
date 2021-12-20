import { Table } from '../table'
import { List } from './../list';
import './app.css'

export const App = () => {
  const isTableVisible = true;
  return isTableVisible ? <Table /> : <List />
}
