import React, { useCallback, useEffect } from 'react';
import '../theme/main.scss';
import { useSelectorT as useSelector, useDispatchT as useDispatch } from '../redux/hooks';
import { setDataFromApi, setModalState } from '../redux/reducers/mainSlice';
import { baseUrl, params } from '../utils/utils';
import Button from '../components/core/button';
import Modal from '../components/core/modal';

const App : React.FC = () => {
  const dispatch = useDispatch();
  const msg = useSelector((state) => state.main.msg);
  const activeModal = useSelector((state) => state.main.activeModal);

  const apiCall = async () => {
    const response = await fetch(`${baseUrl}?${params}`);
    const data =  await response.json();
    dispatch(setDataFromApi(data));
  }

  const setData = useCallback(apiCall, [dispatch]);

  useEffect(() => {
    setData();
  }, [setData]);

  const onClickButton = () => {
    dispatch(setModalState(activeModal !== '' ? '' : 'modalEPG'))
  }

  return (
    <div className="button-container">
      <Button
        disabled={msg !== 'OK'}
        onClick={onClickButton}
      >
        Mostrar EPG
      </Button>
      <Modal activeModal={activeModal} onCloseModal={onClickButton} />
    </div>
  );
}

export default App;
