import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../pages/Home';
import SeeMessages from '../pages/SeeMessages';
import SendMessages from '../pages/SendMessages';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Home/>} />
      <Route path="/see-messages" element={<SeeMessages/>} />
      <Route path="/send-messages" element={<SendMessages/>} />
      <Route path="*" element={<div>404</div>} />
    </Routes>
</BrowserRouter>
);

export default Router;