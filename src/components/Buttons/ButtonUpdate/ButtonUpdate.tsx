import './ButtonUpdate.scss';

type Props = {
  onUpdate: (event: React.FormEvent) => void;
}

export const ButtonUpdate: React.FC<Props> = ({ onUpdate }) => {
  return (
    <div className="btn-update">
      <button 
        type="button"
        className='btn-submit_search'
        onClick={onUpdate}
      >
        Refresh
      </button>
    </div>
  )
}