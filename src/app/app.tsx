// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Content } from 'src/components/Content/ui/Content';
import { Navbar } from 'src/components/Navbar/ui/Navbar';
import { Sidebar } from 'src/components/Sidebar/ui/Sidebar';
import styles from './app.module.scss';
export function App() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;
