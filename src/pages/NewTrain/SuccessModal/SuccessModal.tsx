import { useNavigate } from 'react-router-dom';
import './SuccessModal.scss';
import successIcon from './success.svg';

type Props = {
  onClose: () => void;
}
  
export const SuccessModal: React.FC<Props> = (props) => {
  const { onClose } = props;

  const navigate = useNavigate();

  return (
    <div className='modal'onClick={onClose}>
      <div className='modal_content' onClick={e => e.stopPropagation()}>
        <img
          src={successIcon}
          alt='Success order!'
          className='modal_icon'
        />

        <h4 className='modal_title'>
          Awesome!
        </h4>

        <p className='modal_text'>
          The train has been added successful.
        </p>

        <button
          type='button'
          className='modal_button'
          onClick={onClose}
        >
          Add other Train
        </button>

        <button
          type='button'
          className='modal_button'
          onClick={() => navigate('/')}
        >
          Go to home page
        </button>
      </div>
    </div>
  );
};